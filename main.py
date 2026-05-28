from contextlib import asynccontextmanager
from typing import Annotated, List, Optional

import motor.motor_asyncio
from bson import ObjectId
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, ConfigDict, Field
from pydantic.functional_validators import BeforeValidator
from fastapi.responses import FileResponse 
import os
# ==========================================
# 1. PYDANTIC MAGIC FOR MONGODB
# ==========================================
# Represents an ObjectId field in the database.
# It will be represented as a `str` on the Python model so Pydantic can serialize it to JSON.
PyObjectId = Annotated[str, BeforeValidator(str)]

class BlogPostModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    
    # --- THESE ARE YOUR NEW DATABASE FIELDS ---
    title: str
    content: str
    tags: List[str] 
    author: str
    # ------------------------------------------

    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example": {
                "title": "My First Day in Stockholm",
                "content": "It was freezing, but the coffee was great...",
                "tags": ["Travel", "Exchange"],
                "author": "Ryan"
            }
        },
    )

# ==========================================
# 2. DATABASE LIFESPAN MANAGEMENT
# ==========================================
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
client: motor.motor_asyncio.AsyncIOMotorClient = None
db = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    # --- Startup ---
    global client, db
    client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)
    db = client.get_database("blogging_db")
    print("Connected to MongoDB!")
    
    yield # App runs here
    
    # --- Shutdown ---
    client.close()
    print("Disconnected from MongoDB.")

app = FastAPI(lifespan=lifespan)

# ==========================================
# 3. FASTAPI ENDPOINTS
# ==========================================
@app.get("/", response_class=FileResponse)
async def serve_frontend():
    """
    Serve the main HTML UI.
    """
    return "index.html"

@app.get("/post.html", response_class=FileResponse)
async def serve_post_page():
    """
    Serve the individual blog post template.
    """
    return "post.html"

@app.get("/create.html", response_class=FileResponse)
async def serve_create_page():
    """
    Serve the HTML form for writing new blog posts.
    """
    return "create.html"

@app.post("/items/", response_model=BlogPostModel, status_code=status.HTTP_201_CREATED)
async def create_item(item: BlogPostModel):
    """
    Insert a new item into the database.
    """
    # Exclude 'id' so MongoDB generates a fresh ObjectId automatically
    item_dict = item.model_dump(by_alias=True, exclude=["id"])
    
    new_item = await db["items"].insert_one(item_dict)
    
    # Fetch the newly created item
    created_item = await db["items"].find_one({"_id": new_item.inserted_id})
    return created_item


@app.get("/items/", response_model=List[BlogPostModel])
async def list_items():
    """
    Retrieve all items from the database.
    """
    # Motor returns an async cursor, so we use `to_list` to fetch the documents
    items = await db["items"].find().to_list(length=100)
    return items


@app.get("/items/{item_id}", response_model=BlogPostModel)
async def get_item(item_id: str):
    """
    Retrieve a single item by its ID.
    """
    if not ObjectId.is_valid(item_id):
        raise HTTPException(status_code=400, detail="Invalid ObjectId format")

    item = await db["items"].find_one({"_id": ObjectId(item_id)})
    
    if item is None:
        raise HTTPException(status_code=404, detail="Item not found")
        
    return item