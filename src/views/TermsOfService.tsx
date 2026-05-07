"use client";
import { useEffect, useRef } from "react";
import { Layout } from "@/components/Layout";

const sections = [
  { id: "s1", num: "01", title: "Acceptance", toc: "01 — Acceptance",
    body: <p>By accessing or using this website, you agree to the following terms. If you do not agree, please do not use this site.</p>
  },
  { id: "s2", num: "02", title: "Who We Are", toc: "02 — Who We Are",
    body: <p>This website is operated by KevinRoysonCreative. For questions, contact us at <a href="mailto:kevinrysn@kevinroysoncreative.com" style={{ color: "var(--y)", fontWeight: 500 }}>kevinrysn@kevinroysoncreative.com</a>.</p>
  },
  { id: "s3", num: "03", title: "Intellectual Property", toc: "03 — Intellectual Property",
    body: <p>All content on this website — including written copy, case studies, frameworks, methodologies, and visuals — are the property of KevinRoysonCreative. You may not copy, reproduce, distribute, or use any of it for commercial purposes without written permission from us.</p>
  },
  { id: "s4", num: "04", title: "No Guarantees", toc: "04 — No Guarantees",
    body: <p>The information on this website is provided for general informational purposes. Nothing here constitutes a guarantee of results. Any outcomes mentioned reflect specific client situations and are not a promise of similar results for your channel or business.</p>
  },
  { id: "s5", num: "05", title: "Limitation of Liability", toc: "05 — Limitation of Liability",
    body: <p>Kevin Royson Creative is not liable for any direct, indirect, or incidental damages arising from your use of this website or reliance on any information found here. Our total liability in any circumstance is limited to the amount you have paid us, if anything.</p>
  },
  { id: "s6", num: "06", title: "Third Party Links", toc: "06 — Third Party Links",
    body: <p>This website may contain links to third party tools or platforms such as Calendly. We are not responsible for the content or practices of those platforms.</p>
  },
  { id: "s7", num: "07", title: "Acceptable Use", toc: "07 — Acceptable Use",
    body: <p>You agree not to use this website for any unlawful purpose, to scrape or harvest its content, or to misrepresent our services or brand in any way.</p>
  },
  { id: "s8", num: "08", title: "Changes to These Terms", toc: "08 — Changes to These Terms",
    body: <p>We may update these terms at any time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.</p>
  },
  { id: "s9", num: "09", title: "Governing Law", toc: "09 — Governing Law",
    body: <p>These terms are governed by the laws of the People&apos;s Republic of China. Any disputes arising from use of this website shall be subject to the jurisdiction of the courts of China.</p>
  },
];

export default function TermsOfService() {
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

    setTimeout(() => {
      document.querySelectorAll(".r").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add("in");
      });
    }, 50);

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
            Terms of<br />Service
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
