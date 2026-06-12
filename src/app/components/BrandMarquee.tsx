import { useEffect, useRef } from "react";

interface BrandMarqueeProps {
  isDark: boolean;
}

interface Brand {
  id: string;
  label: string;
  weight: number;
  tracking: string;
  size: number;
}

const BRANDS: Brand[] = [
  { id: "netflix",  label: "NETFLIX",  weight: 900, tracking: "0.08em",  size: 15 },
  { id: "google",   label: "Google",   weight: 700, tracking: "-0.02em", size: 22 },
  { id: "meta",     label: "Meta",     weight: 700, tracking: "-0.02em", size: 22 },
  { id: "claude",   label: "Claude",   weight: 600, tracking: "-0.01em", size: 22 },
  { id: "spotify",  label: "Spotify",  weight: 700, tracking: "-0.02em", size: 22 },
  { id: "youtube",  label: "YouTube",  weight: 700, tracking: "-0.02em", size: 22 },
];

export function BrandMarquee({ isDark }: BrandMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let raf: number;

    const step = () => {
      pos -= 0.4;
      if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const col    = isDark ? "rgba(255,255,255,0.2)"  : "rgba(0,0,0,0.2)";
  const border = isDark ? "rgba(255,255,255,0.055)" : "rgba(0,0,0,0.07)";
  const items  = [...BRANDS, ...BRANDS];

  return (
    <div
      className="w-full overflow-hidden py-8 select-none"
      style={{ borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}
    >
      <div
        ref={trackRef}
        className="flex items-center will-change-transform"
      >
        {items.map((b, i) => (
          <div
            key={`${b.id}-${i}`}
            className="flex items-center justify-center flex-shrink-0 px-12"
            aria-label={b.label}
          >
            <span
              style={{
                fontFamily:    "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight:    b.weight,
                fontSize:      `${b.size}px`,
                letterSpacing: b.tracking,
                color:         col,
                whiteSpace:    "nowrap",
                lineHeight:    1,
                userSelect:    "none",
              }}
            >
              {b.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
