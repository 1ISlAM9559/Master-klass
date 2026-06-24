import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

interface CTAProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CTA({ title, description, buttonLabel, buttonHref }: CTAProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-8 my-8">
      <div
        className="text-center py-20 px-8 rounded-[20px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(108,63,224,0.12), rgba(0,229,160,0.06))",
        }}
      >
        <Title
          level={2}
          className="!text-4xl !font-bold !mb-4"
          style={{ color: "var(--foreground)" }}
        >
          {title}
        </Title>
        <Paragraph
          className="!text-lg !mb-8 max-w-[500px] mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {description}
        </Paragraph>
        <a href={buttonHref}>
          <Button type="primary" size="large" style={{ background: "var(--primary)" }}>
            {buttonLabel}
          </Button>
        </a>
      </div>
    </div>
  );
}
