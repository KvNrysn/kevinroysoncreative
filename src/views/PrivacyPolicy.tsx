"use client";
import { useEffect, useRef } from "react";
import { Layout } from "@/components/Layout";

const sections = [
  { id: "s1", num: "01", title: "About This Policy", toc: "01 — About This Policy",
    body: <p>This Privacy Policy explains how KevinRoysonCreative ("we," "us," or "our") collects, uses, and handles information when you visit our website or contact us.</p>
  },
  { id: "s2", num: "02", title: "Information We Collect", toc: "02 — Information We Collect",
    body: <>
      <p>When you submit our contact form, we collect your full name, email address, YouTube channel link, the option you select describing your creator type, and any message you include. We collect this information solely to respond to your inquiry and understand your situation before replying.</p>
      <p>If you do not become a client, we may follow up with you periodically unless you ask us to stop. You can remove yourself from future contact at any time by emailing <a href="mailto:kevinrysn@kevinroysoncreative.com" style={{ color: "var(--y)", fontWeight: 500 }}>kevinrysn@kevinroysoncreative.com</a> with a removal request. We will honor it promptly.</p>
      <p>We do not sell, rent, or share your personal information with third parties.</p>
    </>
  },
  { id: "s3", num: "03", title: "Video Analytics", toc: "03 — Video Analytics",
    body: <p>Our website embeds video content that collects anonymized viewing data such as view count and watch duration. This data is not linked to any personally identifiable information.</p>
  },
  { id: "s4", num: "04", title: "Scheduling", toc: "04 — Scheduling",
    body: <p>If you book a call through our scheduling tool, that process is handled by Calendly. Please review Calendly&apos;s Privacy Policy at <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--y)", fontWeight: 500 }}>calendly.com/privacy</a> for details on how they handle your data.</p>
  },
  { id: "s5", num: "05", title: "Cookies and Tracking", toc: "05 — Cookies & Tracking",
    body: <p>We do not use cookies, tracking pixels, or third-party analytics tools on this website.</p>
  },
  { id: "s6", num: "06", title: "Data Retention", toc: "06 — Data Retention",
    body: <p>We retain contact form submissions for as long as necessary to communicate with you. You may request deletion of your information at any time by emailing <a href="mailto:kevinrysn@kevinroysoncreative.com" style={{ color: "var(--y)", fontWeight: 500 }}>kevinrysn@kevinroysoncreative.com</a>.</p>
  },
  { id: "s7", num: "07", title: "Your Rights", toc: "07 — Your Rights",
    body: <p>Regardless of where you are located, you have the right to request access to, correction of, or deletion of your personal information. To exercise any of these rights, contact us directly at <a href="mailto:kevinrysn@kevinroysoncreative.com" style={{ color: "var(--y)", fontWeight: 500 }}>kevinrysn@kevinroysoncreative.com</a>.</p>
  },
  { id: "s8", num: "08", title: "Contact", toc: "08 — Contact",
    body: <>
      <p>Kevin Royson</p>
      <p><a href="mailto:kevinrysn@kevinroysoncreative.com" style={{ color: "var(--y)", fontWeight: 500 }}>kevinrysn@kevinroysoncreative.com</a></p>
    </>
  },
];

export default function PrivacyPolicy() {
  const tocRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".r").forEach((el) => obs.observe(el));

    // Animate visible elements immediately
    setTimeout(() => {
      document.querySelectorAll(".r").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add("in");
      });
    }, 50);

    // TOC active state
    const docSections = document.querySelectorAll(".doc-section[id]");
    const tocObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            tocRefs.current.forEach((a) => a?.classList.remove("toc-active"));
            const link = tocRefs.current.find((a) => a?.getAttribute("href") === `#${e.target.id}`);
            link?.classList.add("toc-active");
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    docSections.forEach((s) => tocObs.observe(s));

    return () => { obs.disconnect(); tocObs.disconnect(); };
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <div style={{ padding: "clamp(100px,8.33vw,160px) 0 clamp(48px,4.2vw,80px)", borderBottom: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(245,213,24,.04) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="wrap">
          <span className="krc-label r">Legal</span>
          <h1 className="r r-d1" style={{ fontSize: "clamp(40px,6vw,80px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-.035em", marginTop: 12 }}>
            Privacy<br />Policy
          </h1>
          <p className="r r-d2" style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-mute)", letterSpacing: ".08em", marginTop: 16 }}>
            Last updated: May 2026
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "clamp(48px,4.2vw,80px) 0 clamp(64px,6.25vw,120px)" }}>
        <div className="wrap">
          <div className="legal-layout">
            {/* TOC */}
            <aside style={{ position: "sticky", top: 100 }} className="r">
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-mute)", marginBottom: 16 }}>Contents</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 2 }}>
                {sections.map(({ id, toc }, i) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      ref={(el) => { tocRefs.current[i] = el; }}
                      style={{ display: "block", padding: "7px 12px", fontSize: 13, color: "var(--fg-mute)", borderLeft: "2px solid transparent", transition: "all .2s", lineHeight: 1.4 }}
                      onMouseEnter={e => { if (!e.currentTarget.classList.contains("toc-active")) { e.currentTarget.style.color = "var(--fg-dim)"; e.currentTarget.style.borderLeftColor = "var(--line2)"; } }}
                      onMouseLeave={e => { if (!e.currentTarget.classList.contains("toc-active")) { e.currentTarget.style.color = "var(--fg-mute)"; e.currentTarget.style.borderLeftColor = "transparent"; } }}
                    >
                      {toc}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Sections */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {sections.map(({ id, num, title, body }) => (
                <div key={id} id={id} className="doc-section r" style={{ padding: "40px 0", borderBottom: "1px solid var(--line)", scrollMarginTop: 110 }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--y)", marginBottom: 12 }}>{num}</div>
                  <h2 style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 600, letterSpacing: "-.02em", color: "var(--fg)", marginBottom: 20 }}>{title}</h2>
                  {body}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .legal-layout { display: grid; grid-template-columns: 220px 1fr; gap: 80px; align-items: start; }
        .doc-section:last-child { border-bottom: none !important; }
        .doc-section:first-child { padding-top: 0 !important; }
        .doc-section p { font-size: 16px; line-height: 1.75; color: var(--fg-dim); }
        .doc-section p + p { margin-top: 14px; }
        .doc-section ul { list-style: none; display: flex; flex-direction: column; gap: 10px; margin: 16px 0; }
        .doc-section ul li { display: flex; align-items: flex-start; gap: 14px; font-size: 15px; color: var(--fg-dim); line-height: 1.6; padding: 10px 14px; background: var(--bg1); border: 1px solid var(--line); transition: border-color .2s; }
        .doc-section ul li:hover { border-color: rgba(245,213,24,.2); }
        .doc-section ul li::before { content: '→'; color: var(--y); font-family: var(--mono); font-size: 12px; flex-shrink: 0; margin-top: 2px; }
        .toc-active { color: var(--fg) !important; border-left-color: var(--y) !important; }
        @media (max-width: 860px) { .legal-layout { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </Layout>
  );
}
