import { Typography } from "antd";

const { Text } = Typography;

interface CodeWindowProps {
  lines: { type: "comment" | "code"; text: string }[];
}

export default function CodeWindow({ lines }: CodeWindowProps) {
  return (
    <div className="code-window">
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ background: "rgba(0,0,0,0.3)", borderColor: "var(--border)" }}
      >
        <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#28CA41]" />
      </div>
      <div
        className="p-6 font-mono text-sm leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === "comment" ? (
              <span className="comment">{line.text}</span>
            ) : (
              <span dangerouslySetInnerHTML={{ __html: line.text }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
