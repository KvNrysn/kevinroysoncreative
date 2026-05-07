"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--line)",
      padding: "48px 0 32px",
      background: "var(--bg1)",
    }}>
      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 24,
        }} className="f-inner-grid">
          <Link href="/" style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "-0.01em",
            color: "var(--fg)",
          }}>
            <div style={{
              width: 30,
              height: 30,
              borderRadius: 6,
              overflow: "hidden",
              border: "1px solid var(--line2)",
              flexShrink: 0,
            }}>
              <img src="/logo.jpg" alt="logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            KevinRoysonCreative
          </Link>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { href: "/", label: "Home" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ color: "var(--fg-mute)", fontSize: 14, transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-mute)")}
              >
                {label}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
            <a href="mailto:kevinrysn@kevinroysoncreative.com" style={{ color: "var(--fg-mute)", fontSize: 13, transition: "color .2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-mute)")}
            >
              kevinrysn@kevinroysoncreative.com
            </a>
            <a href="https://x.com/KR_Creative511" title="X" target="_blank" rel="noopener noreferrer" style={{
              width: 34, height: 34, borderRadius: 4,
              border: "1px solid var(--line)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--fg-mute)", fontSize: 13, transition: "all .2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--y)"; e.currentTarget.style.borderColor = "rgba(245,213,24,.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--fg-mute)"; e.currentTarget.style.borderColor = "var(--line)"; }}
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
          </div>
        </div>

        <div style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 20,
          paddingTop: 20,
          borderTop: "1px solid var(--line)",
        }}>
          <Link href="/terms" style={{ color: "var(--fg-mute)", fontSize: 12, transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-mute)")}
          >
            Terms of Service
          </Link>
          <Link href="/privacy" style={{ color: "var(--fg-mute)", fontSize: 12, transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-mute)")}
          >
            Privacy Policy
          </Link>
        </div>

        <div style={{
          marginTop: 40,
          paddingTop: 24,
          borderTop: "1px solid var(--line)",
          textAlign: "center",
          fontSize: 13,
          color: "var(--fg-mute)",
        }}>
          ©2026 KevinRoysonCreative. All rights reserved.
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .f-inner-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
            gap: 20px !important;
          }
        }
      `}</style>
    </footer>
  );
}
