"use client";

import { Typography } from "antd";
import MatrixBackground from "@/components/MatrixBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const { Title, Paragraph } = Typography;

const professions = [
  {
    href: "/rpa",
    icon: "⚙️",
    title: "RPA-разработчик",
    description:
      "Создавай роботов, которые берут на себя рутину. Автоматизируй бизнес-процессы и освободи время людей.",
    tags: ["UiPath", "Python", "Автоматизация", "1С"],
    salary: "350K+",
    salaryLabel: "руб./мес. зарплата",
    cardClass: "card-rpa",
  },
  {
    href: "/network",
    icon: "🌐",
    title: "Тестировщик сетей",
    description:
      "Обеспечивай стабильность и безопасность сетевой инфраструктуры. Каждый пакет — под твоим контролем.",
    tags: ["Wireshark", "Cisco", "Мониторинг", "Zabbix"],
    salary: "200K+",
    salaryLabel: "руб./мес. зарплата",
    cardClass: "card-net",
  },
];

export default function HomePage() {
  return (
    <>
      <MatrixBackground />
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-8 pt-16 relative z-10">
        <div className="text-center max-w-[900px]">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs mb-6"
            style={{
              background: "rgba(108,63,224,0.15)",
              border: "1px solid rgba(108,63,224,0.3)",
              color: "var(--accent)",
            }}
          >
            IT-профессии будущего
          </div>

          <Title
            level={1}
            className="!text-5xl md:!text-6xl !font-extrabold !leading-tight !mb-4 !tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            Выбери{" "}
            <span className="gradient-text">профессию своей мечты</span>
          </Title>

          <Paragraph
            className="!text-lg max-w-[550px] mx-auto mb-12"
            style={{ color: "var(--text-muted)" }}
          >
            Два направления, два пути. Узнай, что тебе ближе — автоматизация
            процессов или тестирование сетевой инфраструктуры.
          </Paragraph>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[700px] mx-auto">
            {professions.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="group flex flex-col items-center text-center p-10 rounded-2xl border no-underline transition-all duration-400 hover:-translate-y-2"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 60px rgba(108,63,224,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="text-5xl mb-6 transition-transform group-hover:scale-110">
                  {p.icon}
                </div>
                <Title
                  level={3}
                  className="!text-xl !mb-3"
                  style={{ color: "var(--foreground)" }}
                >
                  {p.title}
                </Title>
                <Paragraph
                  className="!text-sm !mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  {p.description}
                </Paragraph>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        background: "rgba(0,229,160,0.08)",
                        border: "1px solid rgba(0,229,160,0.15)",
                        color: "var(--accent)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: "var(--accent)" }}>
                  {p.salary}
                </div>
                <div className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
                  {p.salaryLabel}
                </div>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-lg text-white transition-all group-hover:bg-[var(--accent)] group-hover:translate-x-1"
                  style={{ background: "var(--primary)" }}
                >
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
