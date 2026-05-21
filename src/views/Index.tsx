"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Layout } from "@/components/Layout";

const kevinPortrait = "/assets/kevin-portrait.jpg";
const jasonBanner = "/assets/jason-banner.png";
const jasonAvatar = "/assets/jason-avatar.jpg";
const riteshBanner = "/assets/ritesh-banner.png";
const riteshAvatar = "/assets/ritesh-avatar.jpg";
const caseStudyBefore = "/assets/case-study-before.webp";
const caseStudyAfter = "/assets/case-study-after.webp";
const caseStudyProjects = "/assets/case-study-projects.webp";
const riteshDiscordPng = "/assets/ritesh-discord.png";
const riteshDiscordMp4 = "/assets/ritesh-discord.mp4";
const riteshOfferMp4 = "/assets/ritesh-offer.mp4";

/* ─── Scroll reveal hook ─── */
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".r").forEach((el) => obs.observe(el));
    setTimeout(() => {
      document.querySelectorAll(".r").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0)
          el.classList.add("in");
      });
    }, 50);
    return () => obs.disconnect();
  }, []);
}

/* ─── Hero canvas ─── */
function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    let raf: number;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245,213,24,${(1 - dist / 160) * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245,213,24,.6)";
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);
  return (
    <canvas ref={canvasRef} style={{
      position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
      opacity: 0.18, zIndex: 0, pointerEvents: "none",
    }} />
  );
}

/* ─── FAQ ─── */
const faqItems = [
  { q: "How much time does this actually take from me?", a: "Five things. You approve the topic direction, script the video, record it, review the first draft, and show up to the monthly call. That's it. Everything between those moments is handled. Most clients spend under two hours per video on their end." },
  { q: "Why not just use an AI tool?", a: "AI can edit fast and generate output. What it can't do is tell you when your content direction is hurting your business. It can't watch your retention drop and connect it back to a decision you made three weeks ago. It can't push back when you're about to make a bad call. You still have to feed it, manage it, and decide what it all means. We handle the part you can't automate." },
  { q: "Do I work directly with you or a team?", a: "Directly with me on everything that matters. Strategy, planning, monthly calls. There's a team behind the scenes handling execution so delivery stays consistent and reliable. The relationship is personal. The operation is professional." },
  { q: "How fast can I see results?", a: "Realistically, month three is where things start getting clear. The first two weeks we do a full channel audit. The first full video cycle runs through week three. The first strategy call is week four. By month three we have real data, real patterns, and a clear picture of what's working. Anyone promising meaningful results faster than that is selling you something that isn't real." },
  { q: "How do you measure if it's working?", a: "We track what actually connects to your revenue. Retention curves, CTR, topic performance, how your content is moving people toward your offer. Every monthly call we go through this together. You'll always know exactly what's working, what isn't, and what we're doing about it." },
  { q: "Is this right for me if I'm not a huge channel yet?", a: "It's less about size and more about mindset. If you have a real business model and you treat content as a way to grow it, we should talk. If you're still figuring out your niche or monetization, this probably isn't the right time yet." },
  { q: "Do you guarantee results?", a: "No honest operator does. What I can guarantee is consistent execution, a monthly strategic review, and a partner who treats your channel like it actually matters. The Jason and Ritesh results show what's possible when the operation runs properly." },
  { q: "How many clients do you take on?", a: "A small number, intentionally. One on one only works if I can give your channel the attention it actually deserves." },
  { q: "What do I need to get started?", a: "Just your channel and a conversation. The audit tells us everything we need before we touch anything." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [active, setActive] = useState(0);
  return (
    <section id="faq" style={{ borderBottom: "1px solid var(--line)", padding: "120px 0" }}>
      <div className="wrap">
        <span className="krc-label r">FAQ</span>
        <h2 className="r r-d1">Common Questions</h2>
        <div className="r r-d2" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 60, marginTop: 60, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-mute)", marginBottom: 16 }}>Quick Nav</div>
            <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 2 }}>
              {faqItems.map((item, i) => (
                <li key={i}
                  onClick={() => { setOpen(i); setActive(i); }}
                  style={{
                    fontSize: 13, color: active === i ? "var(--fg)" : "var(--fg-mute)",
                    padding: "8px 12px", borderLeft: active === i ? "2px solid var(--y)" : "2px solid transparent",
                    cursor: "pointer", transition: "all .2s", lineHeight: 1.4,
                  }}>
                  {item.q.length > 35 ? item.q.slice(0, 35) + "…" : item.q}
                </li>
              ))}
            </ol>
          </div>
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                <button
                  onClick={() => { setOpen(open === i ? null : i); setActive(i); }}
                  style={{
                    width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between",
                    alignItems: "center", padding: "22px 4px", fontSize: 16, fontWeight: 500,
                    color: open === i ? "var(--fg)" : "var(--fg)",
                    gap: 16, background: "none", border: "none", cursor: "pointer",
                    fontFamily: "var(--sans)", transition: "all .2s",
                  }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".1em", minWidth: 32 }}>Q{i + 1}</span>
                    <span>{item.q}</span>
                  </span>
                  <svg style={{ width: 14, height: 14, flexShrink: 0, transition: "transform .3s", transform: open === i ? "rotate(45deg)" : "none", color: open === i ? "var(--y)" : "var(--fg-mute)" }} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M7 2v10M2 7h10" />
                  </svg>
                </button>
                <div style={{
                  maxHeight: open === i ? 400 : 0, overflow: "hidden",
                  transition: "max-height .4s ease, padding .3s",
                  color: "var(--fg-dim)", fontSize: 15, lineHeight: 1.65,
                  padding: open === i ? "0 4px 22px 44px" : "0 4px 0 44px",
                }}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:720px){#faq .r.r-d2{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
    </section>
  );
}

/* ─── Phase cards ─── */
const phases = [
  { num: "01", title: "Channel Audit and Onboarding", your: "Show up to a kickoff call.", we: "A full dig into your channel. Retention, CTR, what's landed, what hasn't, where the real leverage is. We build a clear baseline before touching anything so nothing we do is guesswork." },
  { num: "02", title: "Content Direction", your: "Read the brief. Approve or push back.", we: "After every upload we look at your data and what's moving in your niche. We send you a short brief with what we'd run next and why. You make the call. No more staring at a blank page wondering what to make." },
  { num: "03", title: "Script Review", your: "Script the video. Send it before you record.", we: "We go through it for what'll work in the edit and what won't. We flag anything that could hurt retention or cause problems in post. You decide what to change. You never record something that's going to underperform for a fixable reason." },
  { num: "04", title: "Production Handoff", your: "Record. Send the footage. You're done.", we: "Full edit, thumbnail, delivery. You review the first draft and approve. Once it's signed off it's ready to upload. You don't touch it again until it's finished." },
  { num: "05", title: "Monthly Strategy Call", your: "Show up. Make the calls.", we: "Full data review. What worked, what didn't, why, and what we're doing next. We come with a plan. You approve, push back, or redirect. You leave every call knowing exactly where your channel is heading." },
];

function PhaseCards() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = refs.current.indexOf(e.target as HTMLDivElement);
          setTimeout(() => (e.target as HTMLElement).style.cssText += "opacity:1;transform:none;", idx * 120);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 60 }}>
      {phases.map((p, i) => (
        <div key={i} ref={(el) => { refs.current[i] = el; }} style={{
          display: "grid", gridTemplateColumns: "80px 1fr", gap: 0,
          borderLeft: "2px solid var(--line)", marginLeft: 20,
          opacity: 0, transform: "translateY(40px) translateX(-20px)",
          transition: "opacity .6s cubic-bezier(.2,.8,.2,1), transform .6s cubic-bezier(.2,.8,.2,1)",
        }}
          onMouseEnter={e => (e.currentTarget.style.borderLeftColor = "var(--y)")}
          onMouseLeave={e => (e.currentTarget.style.borderLeftColor = "var(--line)")}
        >
          <div style={{ fontFamily: "var(--mono)", fontSize: "clamp(36px,4vw,56px)", fontWeight: 700, color: "var(--line2)", lineHeight: 1, padding: "32px 0 0 28px", transition: "color .3s", letterSpacing: "-0.04em" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--y)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--line2)")}
          >{p.num}</div>
          <div style={{ padding: "32px 0 48px 32px", borderBottom: i < phases.length - 1 ? "1px solid var(--line)" : "none" }}>
            <h3 style={{ fontSize: "clamp(20px,2vw,28px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, color: "var(--fg)" }}>{p.title}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2px 2fr", gap: 0, alignItems: "start" }}>
              <div style={{ paddingRight: 24 }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-mute)", marginBottom: 12, fontWeight: 600 }}>Your Role</div>
                <p style={{ fontSize: 16, color: "var(--fg)", fontWeight: 500, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: p.your }} />
              </div>
              <div style={{ width: 1, background: "var(--line)", alignSelf: "stretch", margin: "0 32px" }} />
              <div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--y)", marginBottom: 12, fontWeight: 600 }}>We Handle</div>
                <p style={{ fontSize: 15, color: "var(--fg-dim)", lineHeight: 1.7 }}>{p.we}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main component ─── */
export default function Home() {
  useScrollReveal();

  return (
    <Layout>
      {/* HERO */}
      <section id="hero" style={{ padding: "clamp(120px,10.4vw,200px) 0 clamp(60px,5.2vw,100px)", borderBottom: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
        <HeroCanvas />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(180deg,rgba(245,213,24,.02) 0%,transparent 50%,rgba(0,0,0,.4) 100%)", pointerEvents: "none", zIndex: 1 }} />
        <div className="wrap" style={{ position: "relative", zIndex: 3 }}>
          <div className="r" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--y)", boxShadow: "0 0 12px var(--y)", animation: "blink 2s ease-in-out infinite", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".1em", color: "var(--y)", textTransform: "uppercase" }}>Strategic Operator for Founder-Led Creators</span>
          </div>
          <h1 className="r r-d1">
            Your channel should be growing your business.<br />
            <span style={{ color: "var(--fg-dim)" }}>Right now it's probably just exhausting you.</span>
          </h1>
          <p className="r r-d2" style={{ fontSize: "clamp(17px,1.8vw,20px)", color: "var(--fg-dim)", maxWidth: 580, marginTop: 40, lineHeight: 1.6 }}>
            You're uploading. Managing. Second-guessing. And somehow it still feels like it's all on you. It doesn't have to be. We handle the operation. You make the calls.
          </p>
          <div className="r r-d3" style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-y btn-y-lg">Book a Call — Get a Free Channel Audit</Link>
            <a href="#case-studies" className="btn-outline btn-outline-lg">See the Work</a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="krc-label r">The Real Problem</span>
          <h2 className="r r-d1">You've tried to fix this.<br /><span style={{ color: "var(--fg-dim)" }}>It didn't work.</span></h2>
          <div className="r r-d2" style={{ maxWidth: 820, margin: "64px auto 60px", fontSize: 16, lineHeight: 1.7, color: "var(--fg-dim)" }}>
            You already know the problem. You've tried to solve it. Twice.
          </div>

          {/* Problem stories */}
          <div className="r r-d4 prob-explorer">
            <div className="prob-stories">
              {[
                {
                  num: "01",
                  head: "The Freelancer Trap — You hired help to save time.",
                  steps: [
                    { label: "Week 1", text: "You hire an editor. Finally.", bad: false },
                    { label: "First delivery", text: "Pacing's off. B-roll doesn't fit. You write a brief.", bad: false },
                    { label: "Revision 1", text: "Better. Still not right. More notes.", bad: false },
                    { label: "Revision 2", text: "Close enough. You approve it. You spent more time managing than if you'd just done it yourself.", bad: false },
                    { label: "Result", text: "The problem didn't go away. It changed shape.", bad: true },
                  ],
                },
                {
                  num: "02",
                  head: "The AI Trap — You switched to an AI tool.",
                  steps: [
                    { label: "Day 1", text: "It edits in minutes. You're impressed.", bad: false },
                    { label: "First video", text: "Generic. Wrong b-roll. You fix it manually.", bad: false },
                    { label: "Video 3", text: "You spend 45 minutes writing prompts so it gets it right. It kind of does.", bad: false },
                    { label: "Month 2", text: "You realize the AI still can't tell you when your direction is wrong. That's still your job.", bad: false },
                    { label: "Result", text: "Same problem. Different shape.", bad: true },
                  ],
                },
                {
                  num: "03",
                  head: "You're the System",
                  steps: [
                    { label: "Your editor", text: "knows how to cut. Doesn't know your audience, your offer, or what worked last month.", bad: false },
                    { label: "Your AI tool", text: "knows what you fed it. Nothing else.", bad: false },
                    { label: "Your strategy", text: "lives in your head. Nobody reviews data with you. Nobody connects the dots.", bad: false },
                    { label: "Result", text: "The moment you stop, everything stops. You're not the CEO of your channel. You're the system.", bad: true },
                  ],
                },
              ].map((story, si) => (
                <div key={si} className="prob-story">
                  <div className="prob-story-header">
                    <span className="prob-tab-num">{story.num}</span>
                    <div className="prob-panel-head">{story.head}</div>
                  </div>
                  <div className="prob-timeline">
                    {story.steps.map((step, i) => (
                      <div key={i} className={`prob-step${step.bad ? " prob-step-end" : ""}`}>
                        <div className={`prob-step-dot${step.bad ? " prob-step-dot-bad" : ""}`} />
                        <div className="prob-step-content">
                          <strong>{step.label}</strong>
                          {step.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .prob-explorer { border: 1px solid var(--line); overflow: hidden; }
          .prob-stories { display: flex; flex-direction: column; }
          .prob-story { padding: 40px 48px; border-bottom: 1px solid var(--line); }
          .prob-story:last-child { border-bottom: none; }
          .prob-story-header { display: flex; align-items: baseline; gap: 16px; margin-bottom: 24px; }
          .prob-tab-num { font-family: var(--mono); font-size: 10px; letter-spacing: .12em; color: var(--y); flex-shrink: 0; }
          .prob-panel-head { font-size: 20px; font-weight: 600; color: var(--fg); letter-spacing: -.02em; }

          .prob-timeline { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 0; position: relative; padding: 30px 0; }
          .prob-timeline::before { content: ''; position: absolute; top: 50%; left: 5%; right: 5%; height: 2px; background: linear-gradient(90deg, var(--line2) 0%, var(--line2) 75%, rgba(248,113,113,.5) 100%); z-index: 0; transform: translateY(-50%); }

          .prob-step { display: flex; flex-direction: column; align-items: center; position: relative; padding: 0 6px; cursor: default; }
          .prob-step:nth-child(even) { flex-direction: column-reverse; }

          .prob-step-dot { width: 14px; height: 14px; border-radius: 50%; border: 2px solid var(--line2); background: var(--bg); flex-shrink: 0; position: relative; z-index: 2; margin: 14px 0; transition: all .35s cubic-bezier(.2,.8,.2,1); }
          .prob-step-dot-bad { border-color: rgba(248,113,113,.6) !important; background: rgba(248,113,113,.15) !important; }

          .prob-step-content { font-size: 13px; color: var(--fg-dim); line-height: 1.5; padding: 14px; border: 1px solid var(--line); background: var(--bg1); border-radius: 6px; transition: all .35s cubic-bezier(.2,.8,.2,1); width: 100%; text-align: center; position: relative; z-index: 3; }
          .prob-step-content strong { display: block; margin-bottom: 6px; font-size: 10px; font-family: var(--mono); letter-spacing: .1em; text-transform: uppercase; color: var(--y); font-weight: 600; }

          .prob-step:hover .prob-step-content { transform: translateY(-4px) scale(1.06); color: var(--fg); border-color: var(--y); background: var(--bg2); box-shadow: 0 8px 32px rgba(245,213,24,.2), 0 0 0 1px rgba(245,213,24,.3); }
          .prob-step:hover .prob-step-dot { transform: scale(1.5); border-color: var(--y) !important; background: var(--y) !important; box-shadow: 0 0 24px var(--yglow), 0 0 0 6px rgba(245,213,24,.12); }
          .prob-step-end .prob-step-content { border-color: rgba(248,113,113,.3); background: rgba(20,8,8,.95); font-weight: 600; color: var(--fg); }
          .prob-step-end .prob-step-content strong { color: #f87171; }
          .prob-step-end:hover .prob-step-dot { border-color: #f87171 !important; background: #f87171 !important; box-shadow: 0 0 24px rgba(248,113,113,.5), 0 0 0 6px rgba(248,113,113,.15) !important; }

          @media(max-width:860px) {
            .prob-story { padding: 28px 24px; }
            .prob-timeline { grid-auto-flow: row; grid-auto-columns: auto; gap: 14px; padding: 0; }
            .prob-timeline::before { display: none; }
            .prob-step, .prob-step:nth-child(even) { flex-direction: row; align-items: flex-start; gap: 14px; padding: 0; }
            .prob-step-dot { margin: 6px 0 0 0; }
            .prob-step-content { text-align: left; flex: 1; }
          }
        `}</style>
      </section>

      {/* WHAT YOU GET */}
      <section id="offer" style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="krc-label r">What This Actually Looks Like</span>
          <h2 className="r r-d1">You stay in control.<br /><span style={{ color: "var(--fg-dim)" }}>We handle the rest.</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 60 }} className="offer-cols-grid">
            {[
              { num: "01", title: "Time Back", body: "Up to 5 videos a month. Edited, thumbnailed, ready to post. You send the footage. You get a finished content. That's it." },
              { num: "02", title: "Eyes On Your Channel", body: "Outside of our internal review for every upload, once a month we go through your data together. What worked, what didn't, and what we're doing next. You always know exactly where your channel stands." },
              { num: "03", title: "One Person Who Gets It", body: "You work directly with me on strategy and direction. My team handles delivery. No briefing five different people. No chasing updates. One relationship that actually holds context." },
            ].map((card, i) => (
              <div key={i} className={`r r-d${i + 1}`} style={{
                background: "var(--bg1)", border: "1px solid var(--line)", padding: "40px 36px",
                display: "flex", flexDirection: "column", gap: 16, transition: "all .3s ease", cursor: "pointer",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(245,213,24,.3)";
                  e.currentTarget.style.background = "var(--bg2)";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(245,213,24,.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--line)";
                  e.currentTarget.style.background = "var(--bg1)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".14em", color: "var(--y)", textTransform: "uppercase" }}>{card.num}</div>
                <h3 style={{ fontSize: "clamp(20px,2vw,26px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--fg)", lineHeight: 1.2 }}>{card.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--fg-dim)" }} dangerouslySetInnerHTML={{ __html: card.body }} />
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:720px){.offer-cols-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ABOUT + VSL */}
      <section id="about" style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="krc-label r">Who You're Working With</span>
          {/* VSL */}
          <div className="r r-d1" style={{ border: "1px solid var(--line)", background: "var(--bg1)", overflow: "hidden", marginBottom: 80 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 24px", borderBottom: "1px solid var(--line)", fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".1em", textTransform: "uppercase" }}>
              <div style={{ display: "flex", gap: 6 }}>
                {[0,1,2].map(i => <span key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(255,255,255,.1)", display: "inline-block" }} />)}
              </div>
              <div>KRC · HOW THIS WORKS</div>
              <div>2 MIN</div>
            </div>
            <div style={{ aspectRatio: "16/9" }}>
              <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
              <Script src="https://fast.wistia.com/embed/iuq7x23ol6.js" strategy="afterInteractive" type="module" />
              <style>{`wistia-player[media-id='iuq7x23ol6']:not(:defined){background:center/contain no-repeat url('https://fast.wistia.com/embed/medias/iuq7x23ol6/swatch');display:block;filter:blur(5px);padding-top:56.25%;}`}</style>
              {/* @ts-expect-error wistia custom element */}
              <wistia-player media-id="iuq7x23ol6" aspect="1.7777777777777777" style={{ width: "100%", height: "100%", display: "block" }}></wistia-player>
            </div>
            <div style={{ padding: "14px 24px", borderTop: "1px solid var(--line)", fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".06em" }}>Watch: How This Works (2 min)</div>
          </div>
          {/* CTA below VSL */}
          <div className="r r-d2" style={{ textAlign: "center", marginBottom: 64, marginTop: -16 }}>
            <Link href="/contact#calendly" className="btn-y btn-y-lg">Book a Call & Get a Free Audit</Link>
          </div>
          {/* About grid */}
          <div className="r r-d2" style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 64, alignItems: "start" }} id="about-grid">
            <div style={{ aspectRatio: "3/4", border: "1px solid var(--line)", background: "var(--bg1)", position: "relative", overflow: "hidden" }}>
              <img src={kevinPortrait} alt="Kevin Royson" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2>I'm Kevin.</h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 16, marginTop: 24 }}>I work with founders who use YouTube to grow a real business. Coaching, courses, consulting, sponsorships. Your channel is how you grow it, not a side project.</p>
              <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>Most creators I talk to aren't struggling because their content is bad. They just don't have anyone around them who understands their channel well enough to tell them what's actually wrong.</p>
              <div style={{ fontSize: 20, color: "var(--y)", fontWeight: 700, letterSpacing: "-0.02em", padding: "20px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", margin: "20px 0" }}>
                A system optimizes your content. A partner tells you when your strategy is costing you money.
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>That's what I do. You work directly with me on strategy and direction. My team handles execution. Your channel stops being something you manage and starts being something that works.</p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:880px){#about-grid{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="krc-label r">The Process</span>
          <h2 className="r r-d1">You make five decisions.<br /><span style={{ color: "var(--fg-dim)" }}>We handle everything in between.</span></h2>
          <PhaseCards />
          {/* Summary */}
          <div className="r r-d3" style={{ marginTop: 100, border: "1px solid var(--line)", background: "var(--bg1)", padding: "64px 56px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(135deg,rgba(245,213,24,.04) 0%,transparent 100%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "center" }} className="summary-grid">
              <div>
                <h2 style={{ fontSize: "clamp(24px,2.5vw,36px)", color: "var(--y)", lineHeight: 1.2 }}>Five decisions.<br />That's your<br />entire job.</h2>
                <p style={{ fontSize: 16, color: "var(--fg-dim)", marginTop: 12 }}>Everything else is handled.</p>
              </div>
              <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: 48 }} className="roadmap-container">
                {["Approve topic direction", "Script the video", "Record", "Review first draft", "Show up to monthly call"].map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "stretch", gap: 20, cursor: "default" }}
                    onMouseEnter={e => {
                      const num = e.currentTarget.querySelector(".rm-num") as HTMLElement;
                      const content = e.currentTarget.querySelector(".rm-span") as HTMLElement;
                      if (num) { num.style.background = "var(--y)"; num.style.color = "#000"; }
                      if (content) content.style.color = "var(--y)";
                    }}
                    onMouseLeave={e => {
                      const num = e.currentTarget.querySelector(".rm-num") as HTMLElement;
                      const content = e.currentTarget.querySelector(".rm-span") as HTMLElement;
                      if (num) { num.style.background = "var(--bg1)"; num.style.color = "var(--fg-mute)"; }
                      if (content) content.style.color = "var(--fg)";
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div className="rm-num" style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid var(--line2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 13, fontWeight: 600, color: "var(--fg-mute)", transition: "all .3s", flexShrink: 0, background: "var(--bg1)" }}>{i + 1}</div>
                      {i < 4 && <div style={{ width: 1.5, flex: 1, background: "var(--line)", minHeight: 20 }} />}
                    </div>
                    <div style={{ flex: 1, padding: "10px 20px", marginBottom: 4, display: "flex", alignItems: "center" }}>
                      <span className="rm-span" style={{ fontSize: 17, color: "var(--fg)", fontWeight: 500, transition: "color .25s" }}>{step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:720px){.summary-grid{grid-template-columns:1fr!important;gap:28px!important;}.roadmap-container{border-left:none!important;padding-left:0!important;border-top:1px solid var(--line);padding-top:28px!important;}}
          @media(max-width:720px){#process .wrap>div:last-child{padding:40px 24px!important;}}
        `}</style>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" style={{ borderBottom: "1px solid var(--line)", padding: "120px 0", background: "var(--bg1)" }}>
        <div className="wrap">
          <span className="krc-label r">Real Results</span>
          <h2 className="r r-d1">Different creators. Different goals. Same thinking.<br />Here's what happened.</h2>

          {/* Ritesh Verma */}
          <div className="r r-d3" style={{ border: "1px solid var(--line)", background: "var(--bg)", overflow: "hidden", marginTop: 80 }}>
            <div>
              <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                <img src={riteshBanner} alt="Ritesh Verma channel banner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 40%,rgba(8,8,8,.9))" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: 20, alignItems: "center", padding: "20px 32px 24px", borderBottom: "1px solid var(--line)", background: "var(--bg1)" }} className="cs-meta-grid">
                <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--line2)", flexShrink: 0 }}>
                  <img src={riteshAvatar} alt="Ritesh Verma" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>Ritesh Verma</h3>
                  <div style={{ fontSize: 13, color: "var(--fg-dim)", marginBottom: 8 }}>@rkumarv &nbsp;·&nbsp; <strong style={{ color: "var(--fg)" }}>52.4K subscribers</strong> &nbsp;·&nbsp; AI Mentorship & Business</div>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em", padding: "4px 10px", border: "1px solid var(--line2)", color: "var(--fg-mute)", borderRadius: 2 }}>AI Mentorship</span>
                </div>
                <div style={{ display: "flex", gap: 32, flexShrink: 0 }} className="cs-stats">
                  {[{ num: "up to 20", label: "mentees/month" }, { num: "+30K", label: "subscribers" }, { num: "200+", label: "mentees today" }].map((s, i) => (
                    <div key={i} style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--y)", lineHeight: 1, textShadow: "0 0 20px var(--yglow)" }}>{s.num}</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em", color: "var(--fg-mute)", marginTop: 4, textTransform: "uppercase" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", borderBottom: "1px solid var(--line)" }} className="cs-story-grid">
              <div style={{ padding: 40, paddingRight: 40 }}>
                <p style={{ fontSize: 16, lineHeight: 1.75 }}>Ritesh runs Agent Rise, a mentorship program for AI businesses scaling to 6-7 figures. YouTube was his main lead source but his mentorship was relatively new and he needed mentees compounding. Production was eating his time on top of that.<br /><br />We structured his video and built one consistent production style around his content. He stopped worrying about revisions every video. The channel kept shipping consistently while his mentorship grew to 200+ mentees.</p>
              </div>
              <div style={{ padding: "40px 32px", background: "var(--bg1)", display: "flex", flexDirection: "column", gap: 12 }}>
                {["Mentorship client flow increased to <strong>up to 20 mentees</strong>", "<strong>+~30k subscribers</strong>", "One SOP, consistent style with little to no revision round"].map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "var(--fg-dim)", padding: "10px 14px", background: "var(--bg2)", border: "1px solid var(--line)", transition: "border-color .2s, transform .3s, color .3s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,213,24,.3)"; e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.color = "var(--fg)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.color = "var(--fg-dim)"; }}
                  >
                    <span style={{ color: "var(--y)", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span dangerouslySetInnerHTML={{ __html: r }} />
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: 40, borderTop: "1px solid var(--line)", background: "var(--bg)" }}>
              <div style={{ fontSize: 15, color: "var(--fg)", marginBottom: 20 }}>He didn't have to chase. He didn't have to constantly briefing. He left and the channel kept shipping on his recorded content.</div>
              <div style={{ border: "1px solid var(--line)", marginBottom: 40 }}>
                <img src={riteshDiscordPng} alt="Discord conversation with Ritesh" style={{ width: "100%", display: "block" }} />
              </div>
              <div style={{ fontSize: 15, color: "var(--fg)", marginBottom: 20 }}>Active community. New members joining monthly.</div>
              <div style={{ border: "1px solid var(--line)", marginBottom: 40, background: "#000" }}>
                <video autoPlay muted loop playsInline style={{ width: "100%", display: "block", height: "auto" }}>
                  <source src={riteshDiscordMp4} type="video/mp4" />
                </video>
              </div>
              <div style={{ fontSize: 15, color: "var(--fg)", marginBottom: 20 }}>Structured every video to guide viewers to a decision without making them feel sold to.</div>
              <div style={{ border: "1px solid var(--line)" }}>
                <video controls style={{ width: "100%", display: "block", height: "auto", background: "#000" }}>
                  <source src={riteshOfferMp4} type="video/mp4" />
                </video>
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)", marginTop: 8, textAlign: "center" }}>Source: youtube.com/@rkumarv/videos</div>
            </div>
          </div>

          {/* Jason West */}
          <div className="r r-d2" style={{ border: "1px solid var(--line)", background: "var(--bg)", overflow: "hidden", marginTop: 60 }}>
            <div>
              <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                <img src={jasonBanner} alt="Jason West channel banner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 40%,rgba(8,8,8,.9))" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: 20, alignItems: "center", padding: "20px 32px 24px", borderBottom: "1px solid var(--line)", background: "var(--bg1)" }} className="cs-meta-grid">
                <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--line2)", flexShrink: 0 }}>
                  <img src={jasonAvatar} alt="Jason West" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>Jason West</h3>
                  <div style={{ fontSize: 13, color: "var(--fg-dim)", marginBottom: 8 }}>@jasonwestai &nbsp;·&nbsp; <strong style={{ color: "var(--fg)" }}>700K+ subscribers</strong> &nbsp;·&nbsp; AI & Digital Marketing</div>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em", padding: "4px 10px", border: "1px solid var(--line2)", color: "var(--fg-mute)", borderRadius: 2 }}>Software and AI review</span>
                </div>
                <div style={{ display: "flex", gap: 32, flexShrink: 0 }} className="cs-stats">
                  {[{ num: "4×", label: "avg viewcount" }, { num: "+250K", label: "subscribers gained" }, { num: "up to 8", label: "sponsored videos/week" }].map((s, i) => (
                    <div key={i} style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--y)", lineHeight: 1, textShadow: "0 0 20px var(--yglow)" }}>{s.num}</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em", color: "var(--fg-mute)", marginTop: 4, textTransform: "uppercase" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", borderBottom: "1px solid var(--line)" }} className="cs-story-grid">
              <div style={{ padding: "40px", borderRight: "1px solid var(--line)" }}>
                <p style={{ fontSize: 16, lineHeight: 1.75 }}>Jason had ~450K subs and only created sponsored videos. But views were all over the place, one video would hit 135K, the next would hit 10K. Sponsors couldn't commit to a CPM they couldn't predict.<br /><br />The content wasn't the problem. The way it was presented was.<br /><br />We structured how each video opened, how sponsor features were integrated, and how topics were selected to attract consistent viewer intent. Viewcount stabilized. Sponsors started queuing. Jason went from chasing brand deals to choosing them.</p>
              </div>
              <div style={{ padding: "40px 32px", background: "var(--bg1)", display: "flex", flexDirection: "column", gap: 12 }}>
                {["Grew from ~450K to <strong>700K+ subscribers</strong>", "<strong>4× → Average views per upload increased</strong>", "Brand deals went from occasional to <strong>consistently queued</strong>", "Publishing volume increased to <strong>up to 8 videos per week</strong>"].map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "var(--fg-dim)", padding: "10px 14px", background: "var(--bg2)", border: "1px solid var(--line)", transition: "border-color .2s, transform .3s, color .3s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,213,24,.3)"; e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.color = "var(--fg)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.color = "var(--fg-dim)"; }}
                  >
                    <span style={{ color: "var(--y)", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span dangerouslySetInnerHTML={{ __html: r }} />
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: 40, borderTop: "1px solid var(--line)", background: "var(--bg)" }}>
              <div style={{ fontSize: 15, color: "var(--fg)", marginBottom: 20 }}>Average views jumped 4× after making sure sponsor's product feature are being emphasized and viewers can visualize real use case with these features</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: 0, marginBottom: 40, border: "1px solid var(--line)" }} className="ba-grid">
                <div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", padding: "12px 20px", textTransform: "uppercase", color: "var(--fg-mute)", background: "var(--bg1)", borderBottom: "1px solid var(--line)" }}>Before — avg 10K–135K views</div>
                  <img src={caseStudyBefore} alt="Before" style={{ width: "100%", display: "block" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg2)", borderLeft: "1px solid var(--line)", borderRight: "1px solid var(--line)", flexDirection: "column", gap: 8 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "var(--y)" }}>4×</div>
                  <div style={{ fontSize: 22, color: "var(--y)", fontWeight: 700 }}>→</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", padding: "12px 20px", textTransform: "uppercase", color: "var(--y)", background: "rgba(245,213,24,.04)", borderBottom: "1px solid var(--line)" }}>After — avg 145K–622K views</div>
                  <img src={caseStudyAfter} alt="After" style={{ width: "100%", display: "block" }} />
                </div>
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg)", letterSpacing: ".06em", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, padding: "14px 24px", background: "var(--bg1)", border: "1px solid var(--line)", borderBottom: "none" }}>
                <span>Creative operations handled across lots of projects. Jason only scripts and records. We do the rest.</span>
              </div>
              <div style={{ border: "1px solid var(--line)" }}>
                <img src={caseStudyProjects} alt="Frame.io projects — Jason West" style={{ width: "100%", display: "block" }} />
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)", marginTop: 8, textAlign: "center" }}>Frame.io · @jasonwestai</div>
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:768px){.cs-meta-grid{grid-template-columns:60px 1fr!important;}.cs-stats{display:none!important;}}
          @media(max-width:900px){.cs-story-grid{grid-template-columns:1fr!important;}}
          @media(max-width:720px){.ba-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="krc-label r">What Clients Say</span>
          <h2 className="r r-d1">Straight from the people we work with.</h2>
          <div className="tm-grid" style={{ marginTop: 72, display: "flex", flexDirection: "column", gap: 48 }}>
            {/* Row 1: two portraits side by side */}
            <div style={{ display: "flex", gap: 32, alignItems: "stretch" }}>
              <div className="tm-item r r-d1" style={{ flex: 1, maxWidth: 420 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/tm-whatsapp-1.jpg" alt="Client WhatsApp message — sponsor approval and motion-graphics feedback" style={{ display: "block", width: "100%", height: "auto", borderRadius: 12, boxShadow: "0 8px 40px rgba(0,0,0,.18)" }} />
              </div>
              <div className="tm-item r r-d2" style={{ flex: 1, maxWidth: 420 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/tm-whatsapp-2.jpg" alt="Client WhatsApp message — trust and bonus feedback" style={{ display: "block", width: "100%", height: "auto", borderRadius: 12, boxShadow: "0 8px 40px rgba(0,0,0,.18)" }} />
              </div>
            </div>
            {/* Row 2: email full width */}
            <div className="tm-item r r-d3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/tm-email-alfred.png" alt="Client email — Alfred Simon, 10/10 rating" style={{ display: "block", width: "100%", height: "auto", borderRadius: 12, boxShadow: "0 8px 40px rgba(0,0,0,.18)" }} />
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width: 768px) { .tm-grid > div:first-child { flex-direction: column; gap: 40px !important; } }
        `}</style>
      </section>

      {/* NOT FOR */}
      <section id="notfor" style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="krc-label r">Honest Fit Check</span>
          <h2 className="r r-d1">This isn't for everyone.</h2>
          <div className="r r-d2 fit-grid" style={{ marginTop: 48 }}>
            {/* For */}
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#4ade80", marginBottom: 20 }}>This is for you if</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "You have a real business model behind your channel — coaching, courses, consulting, sponsorships, products",
                  "You upload consistently and treat content as a growth channel, not a side project",
                  "You want a partner who understands your channel deeply, not just someone to execute tasks",
                  "When you're overwhelmed you hire someone great rather than build another system",
                  "You're ready to invest in your channel the same way you invest in the rest of your business",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 24px", border: "1px solid var(--line)", background: "var(--bg1)", transition: "all .2s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,.2)"; e.currentTarget.style.background = "rgba(74,222,128,.04)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.background = "var(--bg1)"; }}
                  >
                    <span style={{ width: 24, height: 24, borderRadius: 4, background: "rgba(74,222,128,.1)", color: "#4ade80", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 15, color: "var(--fg)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Not for */}
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#f87171", marginBottom: 20 }}>Probably not a good fit if</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "You're shopping for the cheapest option out there",
                  "You want execution without anyone having an opinion on direction",
                  "You're trying to hand everything off to AI and be done with it",
                  "You only need one video with no interest in building something ongoing",
                  "You don't have a real business model behind your channel yet",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 24px", border: "1px solid var(--line)", background: "var(--bg1)", transition: "all .2s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(248,113,113,.2)"; e.currentTarget.style.background = "rgba(248,113,113,.04)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.background = "var(--bg1)"; }}
                  >
                    <span style={{ width: 24, height: 24, borderRadius: 4, background: "rgba(248,113,113,.1)", color: "#f87171", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, marginTop: 1 }}>✗</span>
                    <span style={{ fontSize: 15, color: "var(--fg)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="r r-d3" style={{ padding: "28px 32px", border: "1px solid var(--line2)", background: "rgba(245,213,24,.03)", fontSize: 16, color: "var(--fg-dim)", lineHeight: 1.6, marginTop: 40 }}>
            I work best with <em style={{ color: "var(--fg)", fontStyle: "normal", fontWeight: 500 }}>founders who treat their channel as a real revenue source</em> and want a partner who does the same.
          </div>
        </div>
        <style>{`
          .fit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
          @media (max-width: 768px) { .fit-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="krc-label r">How We Work Together</span>
          <h2 className="r r-d1">Three ways to start.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: 20, marginTop: 60 }} className="pricing-grid">
            {/* One-Off */}
            <div className="r r-d1" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ background: "var(--bg1)", padding: "44px 36px", display: "flex", flexDirection: "column", gap: 0, transition: "all .3s", position: "relative", overflow: "hidden", flex: 1 }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg2)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg1)")}
              >
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em", color: "var(--y)", textTransform: "uppercase", marginBottom: 16 }}>
                  <span style={{ width: 16, height: 1, background: "var(--y)", display: "inline-block" }} />Path 1
                </div>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>One-Off Project</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                  <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: 0 }}><del style={{ color: "var(--fg-mute)", fontSize: 22, fontWeight: 400, textDecorationColor: "rgba(248,113,113,.7)" }}>$499</del></div>
                  <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--y)", textShadow: "0 0 24px var(--yglow)" }}>$149</div>
                  <div style={{ fontSize: 13, color: "var(--fg-mute)" }}>/ video</div>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(245,213,24,.08)", border: "1px solid rgba(245,213,24,.25)", padding: "7px 12px", borderRadius: 4, marginBottom: 12 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--y)", boxShadow: "0 0 8px var(--y)", flexShrink: 0, display: "inline-block" }} />
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".1em", color: "var(--y)", textTransform: "uppercase" }}>First project offer, test workflow fit</span>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 16 }}>See the approach before committing. First video at a reduced rate so you can evaluate fit before anything longer-term.</p>
                <ul style={{ listStyle: "none", margin: "24px 0", padding: "24px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Full edit", "Thumbnail design", "Script feedback", "Video topic ideation", "Video flow direction", "Learning from past data and apply what we do in this video", "Retention-focused structure", "High-level channel data review"].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "var(--fg-dim)", padding: "8px 10px", borderRadius: 3, transition: "all .2s", cursor: "default" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "var(--fg)"; e.currentTarget.style.background = "rgba(245,213,24,.06)"; e.currentTarget.style.paddingLeft = "14px"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "var(--fg-dim)"; e.currentTarget.style.background = "none"; e.currentTarget.style.paddingLeft = "10px"; }}
                    >
                      <span style={{ color: "var(--y)", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto" }}>
                  <Link href="/contact" style={{ display: "block", textAlign: "center", padding: "14px 20px", border: "1.5px solid var(--line2)", color: "var(--fg-dim)", fontWeight: 500, fontSize: 15, borderRadius: 4, transition: "all .25s", textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--fg)"; e.currentTarget.style.color = "var(--fg)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line2)"; e.currentTarget.style.color = "var(--fg-dim)"; }}
                  >Book a Call</Link>
                </div>
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".06em", padding: "12px 4px", textAlign: "center" }}>Best for testing the approach before going all in.</div>
            </div>

            {/* Retainer — Featured */}
            <div className="r r-d2" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ background: "var(--bg)", padding: "44px 36px", display: "flex", flexDirection: "column", gap: 0, transition: "all .3s", position: "relative", overflow: "hidden", borderTop: "2px solid var(--y)", flex: 1 }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg2)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}
              >
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em", color: "var(--y)", textTransform: "uppercase", marginBottom: 16 }}>
                  <span style={{ width: 16, height: 1, background: "var(--y)", display: "inline-block" }} />Recommended
                </div>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>Strategic Operator Retainer</h3>
                <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: 8 }}>$2,000 <span style={{ fontSize: 14, color: "var(--fg-mute)", fontWeight: 400, letterSpacing: 0 }}>/ month</span></div>
                <p style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 16 }}>The full operation.</p>
                <ul style={{ listStyle: "none", margin: "24px 0", padding: "24px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Channel audit at onboarding", "Content direction guidance after every upload", "Script review before recording", "Up to 5 videos edited monthly and thumbnailed", "Monthly strategy call", "Priority scheduling throughout"].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "var(--fg-dim)", padding: "8px 10px", borderRadius: 3, transition: "all .2s", cursor: "default" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "var(--fg)"; e.currentTarget.style.background = "rgba(245,213,24,.06)"; e.currentTarget.style.paddingLeft = "14px"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "var(--fg-dim)"; e.currentTarget.style.background = "none"; e.currentTarget.style.paddingLeft = "10px"; }}
                    >
                      <span style={{ color: "var(--y)", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto" }}>
                  <Link href="/contact" style={{ display: "block", textAlign: "center", padding: "14px 20px", background: "var(--y)", color: "#000", fontWeight: 700, fontSize: 15, borderRadius: 4, transition: "all .25s", textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--y2)"; e.currentTarget.style.boxShadow = "0 0 30px var(--yglow)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "var(--y)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
                  >Book a Call — I'll send you a custom scope</Link>
                </div>
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".06em", padding: "12px 4px", textAlign: "center" }}>Best for full workflow handoff and real results.</div>
            </div>

            {/* Custom */}
            <div className="r r-d3" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ background: "var(--bg1)", padding: "44px 36px", display: "flex", flexDirection: "column", gap: 0, transition: "all .3s", position: "relative", overflow: "hidden", flex: 1 }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg2)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg1)")}
              >
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em", color: "var(--y)", textTransform: "uppercase", marginBottom: 16 }}>
                  <span style={{ width: 16, height: 1, background: "var(--y)", display: "inline-block" }} />Path 3
                </div>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>Custom Partnership</h3>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".08em", marginBottom: 8 }}>Custom pricing</div>
                <p style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 16, marginTop: 24 }}>For founders whose needs don't fit a standard scope - more volume, additional services, or a leaner focused engagement.</p>
                <ul style={{ listStyle: "none", margin: "24px 0", padding: "24px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["volume change", "service scope change"].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "var(--fg-dim)", padding: "8px 10px", borderRadius: 3, transition: "all .2s", cursor: "default" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "var(--fg)"; e.currentTarget.style.background = "rgba(245,213,24,.06)"; e.currentTarget.style.paddingLeft = "14px"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "var(--fg-dim)"; e.currentTarget.style.background = "none"; e.currentTarget.style.paddingLeft = "10px"; }}
                    >
                      <span style={{ color: "var(--y)", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto" }}>
                  <Link href="/contact" style={{ display: "block", textAlign: "center", padding: "14px 20px", border: "1.5px solid var(--line2)", color: "var(--fg-dim)", fontWeight: 500, fontSize: 15, borderRadius: 4, transition: "all .25s", textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--fg)"; e.currentTarget.style.color = "var(--fg)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line2)"; e.currentTarget.style.color = "var(--fg-dim)"; }}
                  >Book a Call</Link>
                </div>
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".06em", padding: "12px 4px", textAlign: "center" }}>Best for scaled up or stripped back — whatever your channel actually needs.</div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:800px){.pricing-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      <FAQ />

      {/* FINAL CTA */}
      <section id="cta" style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="r" style={{ position: "relative", border: "1px solid var(--line)", background: "var(--bg1)", padding: "80px 64px", textAlign: "center", overflow: "hidden" }}>
            <div style={{ content: "", position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,var(--y),transparent)" }} />
            <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,213,24,.06),transparent 70%)", top: -200, right: -100, pointerEvents: "none" }} />
            <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,213,24,.04),transparent 70%)", bottom: -200, left: -100, pointerEvents: "none" }} />
            <h2 style={{ fontSize: "clamp(28px,3.5vw,50px)", maxWidth: 900, margin: "0 auto 20px", position: "relative", zIndex: 1 }}>
              Your channel is already doing the work. Let's make sure it's working as hard as your business needs it to.
            </h2>
            <p style={{ fontSize: 17, color: "var(--fg-dim)", maxWidth: 680, margin: "0 auto 40px", lineHeight: 1.6, position: "relative", zIndex: 1 }}>
              Share your channel. I'll review it personally and send you a strategic audit of the two or three biggest opportunities I see, and what I'd focus on first.
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <Link href="/contact" className="btn-y btn-y-lg">Get Your Channel Audit</Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:720px){#cta .wrap>div{padding:48px 24px!important;}}`}</style>
      </section>
    </Layout>
  );
}
