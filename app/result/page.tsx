"use client";

import { useEffect } from "react";
import { Link } from "../link";
import { emojiBlasts } from "emoji-blast";

export default function Result() {
  useEffect(() => {
    const { cancel } = emojiBlasts({ interval: 700 });
    return () => cancel();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4">YOU WIN!!!</h1>
      <Link href="/">PLAY AGAIN</Link>
    </div>
  );
}
