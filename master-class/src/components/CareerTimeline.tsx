import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface CareerStep {
  title: string;
  experience: string;
  description: string;
}

interface CareerTimelineProps {
  steps: CareerStep[];
}

export default function CareerTimeline({ steps }: CareerTimelineProps) {
  return (
    <div className="career-timeline">
      {steps.map((step) => (
        <div key={step.title} className="career-step">
          <Title
            level={5}
            className="!text-base !mb-1"
            style={{ color: "var(--accent)" }}
          >
            {step.title}
          </Title>
          <Paragraph
            className="!text-xs !mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            {step.experience}
          </Paragraph>
          <Paragraph
            className="!text-sm !mb-0"
            style={{ color: "var(--text-muted)" }}
          >
            {step.description}
          </Paragraph>
        </div>
      ))}
    </div>
  );
}
