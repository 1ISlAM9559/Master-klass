import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface SkillsProps {
  technical: string[];
  soft: string[];
}

export default function Skills({ technical, soft }: SkillsProps) {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label">Навыки</div>
            <Title
              level={2}
              className="!text-4xl !font-bold !mb-4 !tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Что нужно знать
            </Title>
            <Paragraph
              className="!text-lg max-w-[600px]"
              style={{ color: "var(--text-muted)" }}
            >
              Набор компетенций успешного специалиста — от технических знаний
              до мягких навыков.
            </Paragraph>
          </div>

          <div>
            <SkillGroup title="Технические навыки" items={technical} />
            <div className="mt-8">
              <SkillGroup title="Мягкие навыки" items={soft} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <Title
        level={4}
        className="!text-base !mb-4"
        style={{ color: "var(--accent)" }}
      >
        {title}
      </Title>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 px-4 py-3 rounded-lg border text-sm transition-colors"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "var(--accent)" }}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
