import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface SalaryLevel {
  level: string;
  range: string;
  responsibilities: string[];
}

interface SalaryDetailsProps {
  levels: SalaryLevel[];
}

export default function SalaryDetails({ levels }: SalaryDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {levels.map((level) => (
        <div
          key={level.level}
          className="p-7 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "rgba(108,63,224,0.05)",
            borderColor: "var(--border)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "var(--primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "var(--border)")
          }
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs mb-4 uppercase tracking-wider"
            style={{
              background: "rgba(108,63,224,0.15)",
              color: "var(--accent)",
            }}
          >
            {level.level}
          </div>
          <div className="text-2xl font-bold mb-1" style={{ color: "var(--foreground)" }}>
            {level.range}
          </div>
          <Paragraph
            className="!text-xs !mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            руб./мес. на руки
          </Paragraph>
          <div className="text-left">
            {level.responsibilities.map((r) => (
              <div
                key={r}
                className="py-2 text-sm"
                style={{
                  color: "var(--text-muted)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {r}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
