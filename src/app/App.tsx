import { useState } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { ServiceCard }  from "./components/ServiceCard";
import { BrandMarquee } from "./components/BrandMarquee";
import { Favicon } from "./components/Favicon";

// ─── Icons ─────────────────────────────────────────────────────────────────────
function VideoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}
function PipelineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  );
}
function TvIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
      <polyline points="17 2 12 7 7 2"/>
    </svg>
  );
}

// ─── Tokens ────────────────────────────────────────────────────────────────────
function useTokens(isDark: boolean) {
  return isDark
    ? {
        bg:          "#000000",
        navBg:       "rgba(0,0,0,0.9)",
        navBorder:   "rgba(255,255,255,0.055)",
        headline:    "#ffffff",
        body:        "#A3B8B5",
        muted:       "#444",
        accent:      "#CCFF00",
        accentText:  "#000000",
        accentAlpha: "rgba(204,255,0,0.08)",
        accentBd:    "rgba(204,255,0,0.18)",
        border:      "rgba(255,255,255,0.07)",
        inputBg:     "#0a0a0a",
        inputBd:     "rgba(255,255,255,0.1)",
        cardBg:      "#0a0a0a",
        divider:     "rgba(255,255,255,0.055)",
        tagBg:       "rgba(204,255,0,0.07)",
        tagBd:       "rgba(204,255,0,0.15)",
        glow:        "0 0 36px rgba(204,255,0,0.14)",
        dotGlow:     "0 0 8px rgba(204,255,0,0.85)",
        focusRing:   "0 0 0 3px rgba(204,255,0,0.1)",
      }
    : {
        bg:          "#f5f5f5",
        navBg:       "rgba(245,245,245,0.93)",
        navBorder:   "rgba(0,0,0,0.07)",
        headline:    "#000000",
        body:        "#4a5a58",
        muted:       "#999",
        accent:      "#3a6200",
        accentText:  "#ffffff",
        accentAlpha: "rgba(58,98,0,0.07)",
        accentBd:    "rgba(58,98,0,0.18)",
        border:      "rgba(0,0,0,0.08)",
        inputBg:     "#ffffff",
        inputBd:     "rgba(0,0,0,0.12)",
        cardBg:      "#ffffff",
        divider:     "rgba(0,0,0,0.07)",
        tagBg:       "rgba(58,98,0,0.07)",
        tagBd:       "rgba(58,98,0,0.15)",
        glow:        "none",
        dotGlow:     "none",
        focusRing:   "0 0 0 3px rgba(58,98,0,0.1)",
      };
}

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [isDark,    setIsDark]    = useState(true);
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused,   setFocused]   = useState(false);
  const T = useTokens(isDark);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen w-full transition-colors duration-500"
      style={{ background: T.bg, fontFamily: "'DM Sans', sans-serif", color: T.headline }}
    >
 <Favicon />
      {/* ═══════════════════════════════ HEADER ════════════════════════════ */}
      <header
        className="sticky top-0 z-50 w-full px-6 md:px-16 py-5 flex items-center justify-between transition-colors duration-500"
        style={{
          background:             T.navBg,
          borderBottom:           `1px solid ${T.navBorder}`,
          backdropFilter:         "blur(24px)",
          WebkitBackdropFilter:   "blur(24px)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-[7px]">
          <span style={{
            fontFamily:     "Inter, sans-serif",
            fontWeight:     800,
            fontSize:       "1.18rem",
            color:          T.headline,
            letterSpacing:  "-0.04em",
            transition:     "color 0.5s",
          }}>
            worldshaker
          </span>
          <span
            className="w-[7px] h-[7px] rounded-full flex-shrink-0 transition-all duration-500"
            style={{ background: "#CCFF00", boxShadow: T.dotGlow }}
          />
        </div>

        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(d => !d)} />
      </header>

      {/* ═══════════════════════════════ HERO ══════════════════════════════ */}
      <section style={{ padding: "108px 24px 96px", position: "relative", overflow: "hidden" }}>
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: isDark
            ? "radial-gradient(ellipse 60% 44% at 50% 34%, rgba(204,255,0,0.05) 0%, transparent 70%)"
            : "radial-gradient(ellipse 60% 44% at 50% 34%, rgba(58,98,0,0.04) 0%, transparent 70%)",
        }} />

        <div
          className="relative z-10 mx-auto flex flex-col items-center text-center gap-7"
          style={{ maxWidth: "780px" }}
        >
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest"
            style={{
              background:   T.tagBg,
              border:       `1px solid ${T.tagBd}`,
              color:        T.accent,
              fontFamily:   "Space Mono, monospace",
            }}
          >
            <span className="w-[6px] h-[6px] rounded-full" style={{ background: T.accent }} />
            MANUAL AUDIT — AVAILABLE NOW
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily:    "Inter, sans-serif",
            fontWeight:    900,
            fontSize:      "clamp(2rem, 5.4vw, 3.5rem)",
            lineHeight:    1.1,
            letterSpacing: "-0.04em",
            color:         T.headline,
            transition:    "color 0.5s",
          }}>
            We Are Rebuilding with New Tools;{" "}
            <span style={{
              color:      T.accent,
              textShadow: isDark ? "0 0 48px rgba(204,255,0,0.12)" : "none",
            }}>
              Your Data Can't Wait
            </span>
          </h1>

          {/* Sub-headline — 13 words */}
          <p style={{
            fontFamily:  "DM Sans, sans-serif",
            fontSize:    "1.05rem",
            lineHeight:  1.74,
            color:       T.body,
            maxWidth:    "460px",
            transition:  "color 0.5s",
          }}>
            Get a manual technical data audit while our automated platform is being perfected.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
            <a
              href="#cta"
              className="px-8 py-3.5 rounded-xl text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{
                background:   T.accent,
                color:        T.accentText,
                fontFamily:   "Inter, sans-serif",
                fontWeight:   700,
                letterSpacing:"0.01em",
                boxShadow:    T.glow,
              }}
            >
              Request Priority Access
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 rounded-xl text-sm border transition-all duration-200 hover:border-current"
              style={{
                border:      `1px solid ${T.border}`,
                color:       T.body,
                fontFamily:  "Inter, sans-serif",
                fontWeight:  500,
              }}
            >
              View Services →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ BRAND MARQUEE ═════════════════════════ */}
      <BrandMarquee isDark={isDark} />

      {/* ═══════════════════════════════ SERVICES ══════════════════════════ */}
      <section
        id="services"
        className="w-full transition-colors duration-500"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px" }}
      >
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs tracking-[0.22em] mb-3" style={{
              color:      T.accent,
              fontFamily: "Space Mono, monospace",
            }}>
              B2B SERVICES
            </p>
            <h2 style={{
              fontFamily:    "Inter, sans-serif",
              fontWeight:    800,
              fontSize:      "clamp(1.45rem, 2.4vw, 2rem)",
              letterSpacing: "-0.035em",
              lineHeight:    1.18,
              color:         T.headline,
              transition:    "color 0.5s",
            }}>
              Infrastructure that recovers signal.
            </h2>
          </div>
          <p
            className="max-w-[260px] text-sm leading-relaxed sm:text-right"
            style={{ color: T.body, fontFamily: "DM Sans, sans-serif", transition: "color 0.5s" }}
          >
            Four tracks — deployed standalone or as a unified engagement.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard isDark={isDark} icon={<VideoIcon />}
            title="High-Fidelity Creative Production"
            description="Studio-grade video and photography ad assets engineered for platform-specific performance and peak attention capture."
          />
          <ServiceCard isDark={isDark} icon={<SearchIcon />}
            title="Advanced Technical SEO Audits"
            description="Pinpoint crawling issues, indexation bottlenecks, and programmatic site architecture gaps to reclaim organic traffic."
          />
          <ServiceCard isDark={isDark} icon={<PipelineIcon />}
            title="Programmatic Pipeline Engineering"
            description="Audit real-time bidding data feeds and server-side tracking loops to eliminate high-volume ad spend leakage."
          />
          <ServiceCard isDark={isDark} icon={<TvIcon />}
            title="CTV Attribution & Tracking"
            description="Bridge the gap between television screens and digital checkout funnels with verified household-graph signal matching."
          />
        </div>
      </section>

      {/* ═══════════════════════════ TESTIMONIAL ═══════════════════════════ */}
      <section
        className="w-full px-6 md:px-16 py-20 md:py-24 transition-colors duration-500"
        style={{ borderTop: `1px solid ${T.divider}`, borderBottom: `1px solid ${T.divider}` }}
      >
        <div
          className="mx-auto rounded-2xl p-10 md:p-16 text-center transition-colors duration-500"
          style={{ maxWidth: "680px", background: T.cardBg, border: `1px solid ${T.border}` }}
        >
          {/* Quote icon */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: T.accentAlpha, border: `1px solid ${T.accentBd}` }}
          >
            <svg width="16" height="16" viewBox="0 0 32 28" fill={T.accent}>
              <path d="M0 28V17.067C0 13.689 .533 10.756 1.6 8.267 2.667 5.733 4.267 3.644 6.4 2c2.133-1.644 4.756-2.622 7.867-2.933l1.066 2.666C13.022 2.178 11.2 3.2 9.6 4.8 8 6.4 7.2 8.267 7.2 10.4H12.8V28H0zm19.2 0V17.067c0-3.378.533-6.311 1.6-8.8 1.067-2.534 2.667-4.623 4.8-6.267C27.733 .356 30.356-.622 33.467-.933L34.533 1.733C32.222 2.178 30.4 3.2 28.8 4.8c-1.6 1.6-2.4 3.467-2.4 5.6H32V28H19.2z"/>
            </svg>
          </div>

          <blockquote style={{
            fontFamily:  "DM Sans, sans-serif",
            fontStyle:   "italic",
            fontSize:    "clamp(1rem, 1.8vw, 1.18rem)",
            lineHeight:  1.8,
            color:       T.headline,
            transition:  "color 0.5s",
          }}>
            "The technical data audit uncovered critical tracking gaps we had been missing for months."
          </blockquote>

          <div className="w-8 h-px mx-auto my-6" style={{ background: T.accent, opacity: 0.4 }} />

          <p style={{
            color:        T.body,
            fontFamily:   "Space Mono, monospace",
            fontSize:     "0.72rem",
            letterSpacing:"0.1em",
            textTransform:"uppercase",
            transition:   "color 0.5s",
          }}>
            VP of Revenue Operations
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ FOOTER CTA ════════════════════════════ */}
      <section
        id="cta"
        className="w-full px-6 md:px-16 py-24 md:py-32 transition-colors duration-500"
      >
        <div
          className="mx-auto flex flex-col items-center gap-7 text-center"
          style={{ maxWidth: "520px" }}
        >
          <p className="text-xs tracking-[0.22em]" style={{
            color: T.accent, fontFamily: "Space Mono, monospace",
          }}>
            EARLY ACCESS
          </p>

          <h2 style={{
            fontFamily:    "Inter, sans-serif",
            fontWeight:    900,
            fontSize:      "clamp(1.9rem, 4vw, 2.9rem)",
            letterSpacing: "-0.04em",
            lineHeight:    1.12,
            color:         T.headline,
            transition:    "color 0.5s",
          }}>
            Be first when the<br />platform launches.
          </h2>

          <p style={{
            color:      T.body,
            fontFamily: "DM Sans, sans-serif",
            fontSize:   "0.95rem",
            lineHeight: 1.72,
            maxWidth:   "360px",
            transition: "color 0.5s",
          }}>
            We're onboarding a limited cohort of partners before public launch. Secure your slot now.
          </p>

          {submitted ? (
            <div
              className="w-full rounded-2xl p-6"
              style={{ background: T.accentAlpha, border: `1px solid ${T.accentBd}` }}
            >
              <p style={{ color: T.accent, fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                ✓ You're on the list — we'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="w-full flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your business email"
                className="flex-1 px-4 py-3.5 rounded-xl text-sm outline-none"
                style={{
                  background:  T.inputBg,
                  border:      `1px solid ${focused ? T.accent : T.inputBd}`,
                  color:       T.headline,
                  fontFamily:  "DM Sans, sans-serif",
                  caretColor:  T.accent,
                  boxShadow:   focused ? T.focusRing : "none",
                  transition:  "border-color 0.2s, box-shadow 0.2s, background 0.5s, color 0.5s",
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl text-sm whitespace-nowrap transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{
                  background:    T.accent,
                  color:         T.accentText,
                  fontFamily:    "Inter, sans-serif",
                  fontWeight:    700,
                  letterSpacing: "0.01em",
                  boxShadow:     T.glow,
                }}
              >
                Request Priority Access
              </button>
            </form>
          )}

          <p style={{
            color:        T.muted,
            fontFamily:   "Space Mono, monospace",
            fontSize:     "0.72rem",
            letterSpacing:"0.03em",
            lineHeight:   2,
            transition:   "color 0.5s",
          }}>
            <a
              href="mailto:team@worldshaker.com"
              className="transition-colors duration-200 hover:underline"
              style={{ color: T.accent }}
            >
              team@worldshaker.com
            </a>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ FOOTER BAR ════════════════════════════ */}
      <footer
        className="w-full px-6 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-500"
        style={{ borderTop: `1px solid ${T.divider}` }}
      >
        <div className="flex items-center gap-[7px]">
          <span style={{
            fontFamily:    "Inter, sans-serif",
            fontWeight:    800,
            fontSize:      "0.95rem",
            color:         T.headline,
            letterSpacing: "-0.04em",
            transition:    "color 0.5s",
          }}>
            worldshaker
          </span>
          <span
            className="w-[6px] h-[6px] rounded-full flex-shrink-0"
            style={{ background: "#CCFF00", boxShadow: T.dotGlow, opacity: 0.75 }}
          />
        </div>

        <p style={{
          color:        T.muted,
          fontFamily:   "Space Mono, monospace",
          fontSize:     "0.7rem",
          letterSpacing:"0.06em",
          transition:   "color 0.5s",
        }}>
          © 2026 WORLDSHAKER. ALL RIGHTS RESERVED.
        </p>

        <p style={{
          color:        T.muted,
          fontFamily:   "Space Mono, monospace",
          fontSize:     "0.7rem",
          letterSpacing:"0.1em",
          opacity:      0.35,
          transition:   "color 0.5s",
        }}>
          {isDark ? "DARK" : "LIGHT"} MODE
        </p>
      </footer>

    </div>
  );
}
