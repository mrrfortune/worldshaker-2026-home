interface SageServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkLabel?: string;
  isDark: boolean;
}

export function SageServiceCard({ icon, title, description, linkLabel = "Learn more →", isDark }: SageServiceCardProps) {
  const cardBg = isDark ? "rgba(15,28,25,0.55)" : "#ffffff";
  const borderColor = isDark ? "rgba(163,184,181,0.1)" : "rgba(10,20,18,0.08)";
  const titleColor = isDark ? "#ffffff" : "#0A1412";
  const bodyColor = isDark ? "#A3B8B5" : "#4B6660";
  const iconBg = isDark ? "rgba(204,255,0,0.07)" : "rgba(10,20,18,0.04)";
  const accentColor = isDark ? "#CCFF00" : "#4A7A00";

  return (
    <div
      className="flex flex-col gap-5 p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
      style={{ background: cardBg, border: `1px solid ${borderColor}` }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
        style={{
          background: iconBg,
          border: `1px solid rgba(204,255,0,0.14)`,
          color: accentColor,
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3
          style={{
            color: titleColor,
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "0.975rem",
            lineHeight: 1.35,
            transition: "color 0.5s",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: bodyColor,
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.875rem",
            lineHeight: 1.68,
            transition: "color 0.5s",
          }}
        >
          {description}
        </p>
      </div>

      {/* Link */}
      <span
        className="text-sm transition-all duration-200 group-hover:gap-2 inline-flex items-center gap-1"
        style={{
          color: accentColor,
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "0.8rem",
          letterSpacing: "0.01em",
        }}
      >
        {linkLabel}
      </span>
    </div>
  );
}
