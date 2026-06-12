interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isDark: boolean;
}

export function ServiceCard({ icon, title, description, isDark }: ServiceCardProps) {
  const bg      = isDark ? "#0a0a0a"                 : "#fff";
  const border  = isDark ? "rgba(255,255,255,0.07)"  : "rgba(0,0,0,0.08)";
  const title_c = isDark ? "#fff"                    : "#000";
  const body_c  = isDark ? "#A3B8B5"                 : "#4a5a58";
  const icon_bg = isDark ? "rgba(204,255,0,0.07)"    : "rgba(0,0,0,0.04)";
  const icon_bd = isDark ? "rgba(204,255,0,0.13)"    : "rgba(0,0,0,0.08)";
  const link_c  = isDark ? "#CCFF00"                 : "#3a6200";

  return (
    <div
      className="group flex flex-col gap-6 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-[2px] cursor-pointer"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      {/* Icon chip */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ background: icon_bg, border: `1px solid ${icon_bd}`, color: link_c }}
      >
        {icon}
      </div>

      {/* Copy */}
      <div className="flex flex-col gap-2.5 flex-1">
        <h3 style={{
          color: title_c,
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "0.95rem",
          lineHeight: 1.35,
          letterSpacing: "-0.01em",
          transition: "color 0.4s",
        }}>
          {title}
        </h3>
        <p style={{
          color: body_c,
          fontFamily: "DM Sans, sans-serif",
          fontSize: "0.86rem",
          lineHeight: 1.72,
          transition: "color 0.4s",
        }}>
          {description}
        </p>
      </div>

      {/* CTA link */}
      <span style={{
        color: link_c,
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        letterSpacing: "0.01em",
        transition: "color 0.4s",
      }}>
        Learn more →
      </span>
    </div>
  );
}
