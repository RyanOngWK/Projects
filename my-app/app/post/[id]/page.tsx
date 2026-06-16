export const dynamic = "force-dynamic";
import React from "react";
import Link from "next/link";

// Fetch the single item from FastAPI using the ID
async function getPost(id: string) {
  const backendUrl = (process.env.NEXT_PUBLIC_API_URL || "MISSING_ENV") + `/items/${id}`;
  try {
    const res = await fetch(backendUrl, { cache: "no-store" });
    if (!res.ok) {
      // Capture the exact HTTP error code
      return { _error: true, detail: `HTTP ${res.status} from ${backendUrl}` };
    }
    return res.json();
  } catch (error: any) {
    // Capture total network failures
    return { _error: true, detail: error.message };
  }
}

// FIX: In modern Next.js (v15+), params is a Promise that must be awaited
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  // 1. Await the params to safely extract the ID
  const resolvedParams = await params;
  const postId = resolvedParams.id;

  const post = await getPost(postId);

  // 2. Diagnostic UI: If we caught an error, print it to the screen
  if (post && post._error) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-white p-10">
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-6 rounded-xl max-w-2xl font-mono text-sm shadow-lg shadow-red-500/20">
          <h2 className="text-xl font-bold mb-4">Failed to Fetch Article</h2>
          <p className="mb-2"><strong>Attempted ID:</strong> {postId}</p>
          <p><strong>Error Detail:</strong> {post.detail}</p>
        </div>
        <Link href="/blog" className="mt-8 text-neutral-500 hover:text-white transition">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // 3. Standard fallback if post genuinely doesn't exist
  if (!post) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link href="/blog" className="text-neutral-500 hover:text-white transition">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // 4. Render the successful post
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-10 py-20 flex justify-center">
      <article className="max-w-3xl w-full">
        
        <Link href="/blog" className="text-neutral-500 hover:text-white mb-10 inline-block transition">
          ← Back to Blog
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
        
        <div className="text-neutral-300 leading-relaxed text-lg whitespace-pre-wrap">
          {post.content}
        </div>
        
      </article>
    </main>
  );
}