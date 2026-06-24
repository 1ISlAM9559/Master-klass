import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface AboutItem {
  icon: string;
  title: string;
  description: string;
}

interface AboutProps {
  items: AboutItem[];
  primaryColor?: string;
}

export default function About({ items, primaryColor }: AboutProps) {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="section-label">О профессии</div>
        <Title
          level={2}
          className="!text-4xl !font-bold !mb-4 !tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          Кто такой специалист?
        </Title>
        <Paragraph
          className="!text-lg max-w-[600px] !mb-12"
          style={{ color: "var(--text-muted)" }}
        >
          Специалист, который создаёт и поддерживает автоматизированные процессы,
          обеспечивая стабильность и безопасность инфраструктуры.
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-xl border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = primaryColor || "var(--primary)";
                e.currentTarget.style.background = "var(--bg-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--bg-card)";
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-5"
                style={{
                  background: primaryColor
                    ? `${primaryColor}26`
                    : "rgba(108,63,224,0.15)",
                }}
              >
                {item.icon}
              </div>
              <Title
                level={4}
                className="!text-lg !mb-2"
                style={{ color: "var(--foreground)" }}
              >
                {item.title}
              </Title>
              <Paragraph
                className="!text-sm !mb-0"
                style={{ color: "var(--text-muted)" }}
              >
                {item.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
