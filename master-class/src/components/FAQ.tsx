import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FaqItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="section-label">FAQ</div>
        <Title
          level={2}
          className="!text-4xl !font-bold !mb-12 !tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          Частые вопросы
        </Title>
        <div className="flex flex-col gap-4 max-w-[800px]">
          {items.map((item) => (
            <div
              key={item.question}
              className="p-6 rounded-xl border"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              <Title
                level={5}
                className="!text-base !mb-2"
                style={{ color: "var(--accent)" }}
              >
                {item.question}
              </Title>
              <Paragraph
                className="!text-sm !mb-0"
                style={{ color: "var(--text-muted)" }}
              >
                {item.answer}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
