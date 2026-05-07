"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Layout } from "@/components/Layout";

const thumb1 = "/assets/thumb-1.jpg";
const thumb2 = "/assets/thumb-2.jpg";
const thumb3 = "/assets/thumb-3.jpg";
const thumb4 = "/assets/thumb-4.jpg";

function useScrollReveal() {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".r").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const videos = [
  {
    id: "O4lDHsIu6ns",
    creator: "Jason West",
    niche: "AI & Digital Marketing",
    goal: "Retention-focused structure for sponsored content",
  },
  {
    id: "4ckn9qsqcNo",
    creator: "Ritesh Verma",
    niche: "AI Business & Automation",
    goal: "Long-form narrative structured for trust and CTA",
  },
  {
    id: "Qs4uKpEmm3o",
    creator: "Braden Richinni",
    niche: "Creator & Content Strategy",
    goal: "Engagement-driven storytelling with clear narrative arcs",
  },
  {
    id: "IMo3w9RQoMU",
    creator: "David Alex",
    niche: "Tech & Innovation",
    goal: "Deep-dive content structured for authority and trust building",
  },
];

function VideoCard({ id, creator, niche, goal }: typeof videos[number]) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="vid-card">
      <div style={{ aspectRatio: "16/9", background: "#000", position: "relative", overflow: "hidden" }}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: 0, display: "block", position: "absolute", inset: 0 }}
          />
        ) : (
          <div
            className="vid-ep"
            onClick={() => setPlaying(true)}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <img
              className="vid-thumb"
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={`${creator} video thumbnail`}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform .4s ease",
              }}
            />
            <div
              className="vid-overlay"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.48)",
                transition: "background .3s",
              }}
            />
            <div
              className="vid-play"
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "var(--y)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000",
                fontSize: 20,
                transition: "transform .3s, box-shadow .3s",
                position: "relative",
                zIndex: 1,
              }}
            >
              <i className="fa-solid fa-play" style={{ marginLeft: 3 }} />
            </div>
            <span style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "rgba(255,255,255,.75)",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              position: "relative",
              zIndex: 1,
            }}>
              Play Video
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

const thumbs = [
  { src: thumb1, alt: "Thumbnail example 1" },
  { src: thumb2, alt: "Thumbnail example 2" },
  { src: thumb3, alt: "Thumbnail example 3" },
  { src: thumb4, alt: "Thumbnail example 4" },
];

export default function Portfolio() {
  useScrollReveal();

  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll("#port-hero .r").forEach((r, i) => {
        setTimeout(() => r.classList.add("in"), i * 100);
      });
    }, 50);
    setTimeout(() => {
      document.querySelectorAll("#port-videos .r").forEach((r, i) => {
        setTimeout(() => r.classList.add("in"), i * 100);
      });
    }, 100);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section id="port-hero" style={{ padding: "clamp(120px,10.4vw,200px) 0 clamp(60px,5.2vw,100px)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="hero-kicker r">
            <span className="dot" />
            <span>The Work</span>
          </div>
          <h1 className="r r-d1">
            Quality you never have to chase.
          </h1>
          <p className="hero-sub r r-d2">
            This is what we deliver. Every time.
          </p>
        </div>
      </section>

      {/* Videos */}
      <section id="port-videos" style={{ background: "var(--bg1)", padding: "clamp(64px,6.25vw,120px) 0" }}>
        <div className="wrap">
          <span className="krc-label r">Editing Work</span>

          <div className="r r-d3 vid-grid">
            {videos.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* Thumbnails */}
      <section style={{ background: "var(--bg1)", padding: "clamp(64px,6.25vw,120px) 0" }}>
        <div className="wrap">
          <span className="krc-label r">Thumbnail Work</span>

          <div className="r r-d3 thumb-grid">
            {thumbs.map(({ src, alt }) => (
              <div key={alt} className="thumb-tile">
                <img src={src} alt={alt} style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform .4s ease",
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", overflow: "hidden", padding: "clamp(64px,6.25vw,120px) 0" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(245,213,24,.08), transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <h2 className="r r-d1" style={{ marginBottom: 16 }}>Execution's handled. Let's talk about your channel.</h2>
            <p className="r r-d2" style={{ fontSize: 18, marginBottom: 40 }}>Book a call. I'll audit your channel and show you the two or three biggest things I'd focus on first. Just honest feedback on what's actually holding you back.</p>
            <div className="r r-d3">
              <Link href="/contact#calendly" className="btn-y btn-y-lg">Book a Call & Get a Free Audit</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-kicker { display: flex; align-items: center; gap: 10px; margin-bottom: 32px; }
        .hero-kicker .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--y); box-shadow: 0 0 12px var(--y); animation: blink 2s ease-in-out infinite; }
        .hero-kicker span { font-family: var(--mono); font-size: 12px; letter-spacing: .1em; color: var(--y); text-transform: uppercase; }
        .hero-sub { font-size: clamp(17px,1.8vw,20px); color: var(--fg-dim); max-width: 580px; margin-top: 24px; line-height: 1.6; }

        .vid-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
        .thumb-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
        .thumb-tile { aspect-ratio: 16/9; background: var(--bg1); position: relative; overflow: hidden; transition: background .3s; }
        .thumb-tile:hover { background: var(--bg2); }
        .thumb-tile:hover img { transform: scale(1.03); }
        .vid-card { background: var(--bg1); transition: background .3s; }
        .vid-card:hover { background: var(--bg2); }

        .vid-ep:hover .vid-thumb { transform: scale(1.05); }
        .vid-ep:hover .vid-overlay { background: rgba(0,0,0,0.3); }
        .vid-ep:hover .vid-play { transform: scale(1.1); box-shadow: 0 0 40px var(--yglow); }

        @media (max-width: 720px) { .vid-grid { grid-template-columns: 1fr; } }
        @media (max-width: 480px) { .thumb-grid { grid-template-columns: 1fr; } }
      `}</style>
    </Layout>
  );
}
