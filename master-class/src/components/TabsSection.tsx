"use client";

import { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface Tab {
  key: string;
  label: string;
  icon: string;
}

interface TabsSectionProps {
  tabs: Tab[];
  panels: Record<string, React.ReactNode>;
  primaryColor?: string;
}

export default function TabsSection({ tabs, panels, primaryColor }: TabsSectionProps) {
  const [active, setActive] = useState(tabs[0].key);

  return (
    <section id="details" className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="section-label">Подробнее</div>
        <Title
          level={2}
          className="!text-4xl !font-bold !mb-4 !tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          Всё о профессии
        </Title>

        <div className="flex gap-2 mt-8 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className="px-6 py-3 rounded-lg text-sm font-semibold border transition-all cursor-pointer"
              style={{
                background:
                  active === tab.key
                    ? primaryColor || "var(--primary)"
                    : "var(--bg-card)",
                borderColor:
                  active === tab.key
                    ? primaryColor || "var(--primary)"
                    : "var(--border)",
                color: active === tab.key ? "#fff" : "var(--text-muted)",
                fontFamily: "inherit",
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div>{panels[active]}</div>
      </div>
    </section>
  );
}
