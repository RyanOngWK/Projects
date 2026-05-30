import React from "react";
import Link from "next/link";

// Fetch the single item from FastAPI using the ID
async function getPost(id: string) {
  const backendUrl = process.env.NEXT_PUBLIC_API_URL + `/items/${id}`;
  try {
    const res = await fetch(backendUrl, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

// The { params } object is automatically provided by Next.js based on the folder name [id]
export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-10 py-20 flex justify-center">
      <article className="max-w-3xl w-full">
        
        <Link href="/" className="text-neutral-500 hover:text-white mb-10 inline-block transition">
          ← Back to Timeline
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
          <span className="text-neutral-400 text-sm font-semibold">By {post.author}</span>
          <div className="flex gap-2">
            {post.tags.map((tag: string) => (
              <span key={tag} className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* whitespace-pre-wrap ensures any line breaks from your database render correctly */}
        <div className="text-neutral-300 leading-relaxed text-lg whitespace-pre-wrap">
          {post.content}
        </div>
        
      </article>
    </main>
  );
}