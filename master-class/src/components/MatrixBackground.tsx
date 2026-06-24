"use client";

import { useEffect, useRef } from "react";

const COLUMNS = 24;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function MatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans: HTMLSpanElement[] = [];

    for (let i = 0; i < COLUMNS; i++) {
      const span = document.createElement("span");
      span.className = "bg-number";
      span.textContent = "67";
      span.style.left = `${randomBetween(2, 96)}%`;
      span.style.animationDuration = `${randomBetween(7, 14)}s`;
      span.style.animationDelay = `${randomBetween(0, 6)}s`;
      container.appendChild(span);
      spans.push(span);
    }

    return () => {
      spans.forEach((s) => s.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
