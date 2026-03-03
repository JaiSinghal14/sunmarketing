"use client";

import { useEffect, useState } from "react";

export default function Typewriter() {
  const words = [
    "Building Brands. Strengthening Markets.",
    "The Architecture of Market Leadership.",
    "Powering India’s Finest Brands.",
    "A Network Built for Market Leaders.",
    "Where Strategy Meets Scale.",
    "Precision in Marketing. Perfection in Supply."
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 70);

    setText(words[index].substring(0, subIndex));

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <span className="border-r-2 border-black pr-1">
      {text}
    </span>
  );
}