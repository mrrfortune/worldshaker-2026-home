interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center gap-2.5 px-3.5 py-2 rounded-full transition-all duration-300 select-none"
      style={{
        background: isDark ? "#111" : "#e2e2e2",
        border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.1)"}`,
      }}
    >
      {/* Sun */}
      <svg
        width="13" height="13" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round"
        style={{ color: isDark ? "#444" : "#000", transition: "color 0.3s", flexShrink: 0 }}
      >
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2"  x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="2"  y1="12" x2="4"  y2="12"/>
        <line x1="20" y1="12" x2="22" y2="12"/>
        <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
        <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
      </svg>

      {/* Track */}
      <div
        className="relative flex items-center rounded-full"
        style={{
          width: "40px", height: "22px",
          background: isDark ? "#1a1a1a" : "#ccc",
          border: `1.5px solid ${isDark ? "rgba(204,255,0,0.22)" : "rgba(0,0,0,0.1)"}`,
          transition: "background 0.3s, border-color 0.3s",
          flexShrink: 0,
        }}
      >
        {/* Thumb */}
        <div
          className="absolute flex items-center justify-center rounded-full"
          style={{
            width: "16px", height: "16px",
            background: "#CCFF00",
            left: isDark ? "2px" : "calc(100% - 18px)",
            boxShadow: isDark ? "0 0 8px rgba(204,255,0,0.5)" : "none",
            transition: "left 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s",
          }}
        >
          {isDark
            ? <svg width="9" height="9" viewBox="0 0 24 24" fill="#000"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            : <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2.5} strokeLinecap="round">
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2" x2="12" y2="5"/>
                <line x1="12" y1="19" x2="12" y2="22"/>
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
                <line x1="2" y1="12" x2="5" y2="12"/>
                <line x1="19" y1="12" x2="22" y2="12"/>
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
              </svg>
          }
        </div>
      </div>

      {/* Moon */}
      <svg
        width="13" height="13" viewBox="0 0 24 24"
        fill={isDark ? "#CCFF00" : "#888"}
        style={{ transition: "fill 0.3s", flexShrink: 0 }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </button>
  );
}
