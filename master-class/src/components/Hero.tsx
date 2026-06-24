import { Button, Typography } from "antd";
import CodeWindow from "./CodeWindow";

const { Title, Paragraph } = Typography;

interface HeroProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  buttons: { label: string; href: string; primary?: boolean }[];
  stats: { value: string; label: string }[];
  codeLines: { type: "comment" | "code"; text: string }[];
  primaryColor?: string;
}

export default function Hero({
  badge,
  title,
  description,
  buttons,
  stats,
  codeLines,
  primaryColor,
}: HeroProps) {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {primaryColor && (
        <>
          <div
            className="absolute pointer-events-none"
            style={{
              top: -200,
              right: -200,
              width: 600,
              height: 600,
              background: `radial-gradient(circle, ${primaryColor}26, transparent 70%)`,
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: -100,
              left: -100,
              width: 400,
              height: 400,
              background: "radial-gradient(circle, rgba(0,229,160,0.08), transparent 70%)",
            }}
          />
        </>
      )}

      <div className="max-w-[1200px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs mb-6"
              style={{
                background: primaryColor
                  ? `${primaryColor}26`
                  : "rgba(108,63,224,0.15)",
                border: `1px solid ${primaryColor ? `${primaryColor}4d` : "rgba(108,63,224,0.3)"}`,
                color: "var(--accent)",
              }}
            >
              {badge}
            </div>
            <Title
              level={1}
              className="!text-5xl lg:!text-6xl !font-extrabold !leading-tight !mb-6 !tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              {title}
            </Title>
            <Paragraph
              className="!text-lg !mb-8 max-w-[500px]"
              style={{ color: "var(--text-muted)" }}
            >
              {description}
            </Paragraph>
            <div className="flex gap-4 mb-12">
              {buttons.map((btn) => (
                <a key={btn.href} href={btn.href}>
                  <Button
                    type={btn.primary ? "primary" : "default"}
                    size="large"
                    className={!btn.primary ? "!border-2" : ""}
                    style={
                      btn.primary
                        ? { background: "var(--primary)", borderColor: "var(--primary)" }
                        : { borderColor: "var(--border)", color: "var(--foreground)" }
                    }
                  >
                    {btn.label}
                  </Button>
                </a>
              ))}
            </div>
            <div className="flex gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold" style={{ color: "var(--accent)" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <CodeWindow lines={codeLines} />
          </div>
        </div>
      </div>
    </section>
  );
}
