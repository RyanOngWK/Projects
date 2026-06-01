export const dynamic = "force-dynamic";

import React from "react";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import { FlippingHeader } from "@/components/FlippingHeader";

// Magic Trick: Extract the creation date directly from the MongoDB _id string
function getDateFromObjectId(objectId: string) {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
}

// Fetch posts from your Render FastAPI backend
async function getBlogPosts() {
  const backendUrl = process.env.NEXT_PUBLIC_API_URL + "/items/";
  try {
    const response = await fetch(backendUrl, { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return empty array so the UI degrades gracefully
  }
}

export default async function Home() {
  const posts = await getBlogPosts();

  // Map the FastAPI data directly into Aceternity's expected format
  const timelineData = posts.map((post: any) => {
    const publishDate = getDateFromObjectId(post._id);
    const formattedDate = publishDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return {
      title: formattedDate, // Shows up as the large text on the timeline curve
      content: (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-white">{post.title}</h2>
          
          {/* Truncate the content for the preview using line-clamp */}
          <p className="text-neutral-400 mb-4 line-clamp-3">
            {post.content}
          </p>
          
          <div className="flex gap-2 mb-6">
            {post.tags?.map((tag: string) => (
              <span key={tag} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          
          {/* This Link directs the user to the specific article page */}
          <Link
            href={`/post/${post._id}`}
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition"
          >
            Read Full Article
          </Link>
        </div>
      ),
    };
  });

  return (
    <main className="min-h-screen bg-black">
      <FlippingHeader />
      
      <div className="w-full">
        {posts.length > 0 ? (
          <Timeline data={timelineData} />
        ) : (
          <p className="text-neutral-500 text-center py-10">Waiting for backend to spin up...</p>
        )}
      </div>
    </main>
  );
}