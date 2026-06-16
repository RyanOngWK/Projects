"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function UploadBlogButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("Ryan");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    }
    setAuthenticated(true);
    setPasswordError("");
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL + "/items/";
      const res = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Key": password,
        },
        body: JSON.stringify({
          title,
          content,
          tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
          author,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Failed to create post");
      }

      setOpen(false);
      resetForm();
      router.refresh();
    } catch (err: any) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setPassword("");
    setAuthenticated(false);
    setPasswordError("");
    setTitle("");
    setContent("");
    setTags("");
    setAuthor("Ryan");
    setSubmitError("");
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition"
      >
        + New Post
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-lg mx-4 shadow-2xl">
        {!authenticated ? (
          <form onSubmit={handlePasswordSubmit}>
            <h3 className="text-lg font-semibold text-white mb-4">Admin Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              placeholder="Enter admin password"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
              autoFocus
            />
            {passwordError && (
              <p className="text-red-400 text-sm mt-2">{passwordError}</p>
            )}
            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 rounded-lg text-sm text-neutral-400 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition"
              >
                Verify
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleCreatePost}>
            <h3 className="text-lg font-semibold text-white mb-4">New Blog Post</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-neutral-400 mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-400 mb-1">Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={6}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-400 mb-1">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g. Travel, Tech, Python"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-400 mb-1">Author</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                />
              </div>
            </div>

            {submitError && (
              <p className="text-red-400 text-sm mt-4">{submitError}</p>
            )}

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 rounded-lg text-sm text-neutral-400 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className={cn(
                  "bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold transition",
                  submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-200"
                )}
              >
                {submitting ? "Publishing..." : "Publish"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
