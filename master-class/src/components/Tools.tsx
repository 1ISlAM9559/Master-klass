import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface Tool {
  icon: string;
  name: string;
  description: string;
}

interface ToolsProps {
  tools: Tool[];
}

export default function Tools({ tools }: ToolsProps) {
  return (
    <section id="tools" className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="section-label">Инструменты</div>
        <Title
          level={2}
          className="!text-4xl !font-bold !mb-4 !tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          Технологический стек
        </Title>
        <Paragraph
          className="!text-lg max-w-[600px] !mb-12"
          style={{ color: "var(--text-muted)" }}
        >
          Популярные платформы и инструменты, которыми пользуются специалисты
          по всему миру.
        </Paragraph>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="p-7 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            >
              <div className="text-3xl mb-3">{tool.icon}</div>
              <Title
                level={5}
                className="!text-sm !mb-1"
                style={{ color: "var(--foreground)" }}
              >
                {tool.name}
              </Title>
              <Paragraph
                className="!text-xs !mb-0"
                style={{ color: "var(--text-muted)" }}
              >
                {tool.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
