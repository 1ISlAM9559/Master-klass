"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Typography } from "antd";
import ThemeToggle from "./ThemeToggle";

const { Text } = Typography;

const navLinks = [
  { href: "#about", label: "О профессии" },
  { href: "#skills", label: "Навыки" },
  { href: "#tools", label: "Инструменты" },
  { href: "#details", label: "Подробнее" },
  { href: "#roadmap", label: "Путь" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b"
      style={{
        background: "var(--nav-bg)",
        borderColor: "var(--border)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold no-underline" style={{ color: "var(--accent)" }}>
          Master<span style={{ color: "var(--foreground)" }}>Class</span>
        </Link>

        {!isHome && (
          <ul className="hidden md:flex list-none gap-8 m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="no-underline text-sm transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <ThemeToggle />
      </div>
    </nav>
  );
}
