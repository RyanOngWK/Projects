import React from "react";
import Link from "next/link";
import { FlippingHeader } from "@/components/FlippingHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <FlippingHeader />
      
      <div className="w-full flex items-center justify-center py-20">
        <Link
          href="/timeline"
          className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-neutral-200 transition"
        >
          View Timeline
        </Link>
      </div>
    </main>
  );
}