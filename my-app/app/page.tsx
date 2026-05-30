"use client";

import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";

const MESSAGES: string[] = [
  "Ryan's Blog is Live!",
  "Welcome to the site",
];

export default function Home() {
  const [msgIdx, setMsgIdx] = useState(0);

  const next = useCallback(
    () => setMsgIdx((i) => (i + 1) % MESSAGES.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 py-20">
      <TextFlippingBoard text={MESSAGES[msgIdx]} />
    </main>
  );
}