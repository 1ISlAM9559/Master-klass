import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface Step {
  number: string;
  title: string;
  description: string;
}

interface RoadmapProps {
  steps: Step[];
  primaryColor?: string;
}

export default function Roadmap({ steps, primaryColor }: RoadmapProps) {
  return (
    <section id="roadmap" className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="section-label">Дорожная карта</div>
        <Title
          level={2}
          className="!text-4xl !font-bold !mb-4 !tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          Как стать специалистом
        </Title>
        <Paragraph
          className="!text-lg max-w-[600px] !mb-12"
          style={{ color: "var(--text-muted)" }}
        >
          Пошаговый план от нуля до первой позиции в карьере.
        </Paragraph>
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="grid grid-cols-[80px_1fr] gap-8 py-8"
              style={{
                borderBottom:
                  i < steps.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                className="text-4xl font-extrabold leading-none"
                style={{
                  color: primaryColor
                    ? `${primaryColor}40`
                    : "rgba(108,63,224,0.25)",
                }}
              >
                {step.number}
              </div>
              <div>
                <Title
                  level={4}
                  className="!text-lg !mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {step.title}
                </Title>
                <Paragraph
                  className="!text-sm !mb-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
