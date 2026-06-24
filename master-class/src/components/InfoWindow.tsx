import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface InfoListItem {
  icon: string;
  title: string;
  description: string;
}

interface InfoWindowProps {
  title: string;
  children?: React.ReactNode;
  items?: InfoListItem[];
}

export default function InfoWindow({ title, children, items }: InfoWindowProps) {
  return (
    <div className="info-window">
      <Title
        level={3}
        className="!text-xl !mb-6 flex items-center gap-3"
        style={{ color: "var(--foreground)" }}
      >
        {title}
      </Title>
      {items && (
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 rounded-xl border text-sm leading-relaxed transition-colors"
              style={{
                background: "rgba(108,63,224,0.05)",
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
              <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <strong style={{ color: "var(--accent)" }}>{item.title}</strong> —{" "}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
