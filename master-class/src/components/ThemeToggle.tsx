"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Переключить тему"
      className="relative w-[52px] h-[28px] rounded-full border cursor-pointer shrink-0 transition-colors"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <span
        className="absolute top-[2px] left-[2px] w-[22px] h-[22px] rounded-full flex items-center justify-center text-xs transition-all duration-300"
        style={{
          background: theme === "dark" ? "var(--accent)" : "var(--primary)",
          transform: theme === "light" ? "translateX(24px)" : "translateX(0)",
        }}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
