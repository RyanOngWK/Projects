"use client";

import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";

const MESSAGES: string[] = [
  "Ryan's Blog is Live!",
  "Welcome to the site",
];

export function FlippingHeader() {
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
    <div className="flex flex-col items-center justify-center py-20">
      <TextFlippingBoard text={MESSAGES[msgIdx]} />
    </div>
  );
}