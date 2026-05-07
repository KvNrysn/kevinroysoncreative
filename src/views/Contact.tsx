"use client";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

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
    return () => obs.disconnect();
  }, []);
}

const infoItems = [
  {
    label: "Response Time",
    value: "Within 24 hours",
    sub: "Usually same day. If you've booked a call, confirmation is immediate.",
  },
  {
    label: "What to Expect",
    value: "Real read on your channel",
    sub: "You'll leave understanding what's suppressing your growth and what to do about it alongside whether we could work together or not.",
  },
  {
    label: "Free Audit",
    value: "I come prepared",
    sub: "I look at your channel before we talk. Your specific situation.",
  },
  {
    label: "Selectivity",
    value: "Not for everyone",
    sub: "I only work with founders who treat their channel as a real revenue source. The audit is how we figure out if that's you and if there is leverage.",
  },
];

const reassure = [
  {
    num: "01",
    title: "Response within 24 hours",
    body: "Usually same day. If you've booked a call, you'll get a confirmation immediately.",
  },
  {
    num: "02",
    title: "No obligation to commit",
    body: "The call is a conversation, not a sales pitch. You'll leave knowing if this is the right fit — for both of us.",
  },
  {
    num: "03",
    title: "Free high-level channel audit",
    body: "I review your channel before every call and come with honest, specific observations — no generic advice.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    youtube: "",
    describes: "",
    message: "",
  });
  const [followUpConsent, setFollowUpConsent] = useState(true);

  useScrollReveal();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  useEffect(() => {
    if (window.location.hash === "#calendly") {
      setTimeout(() => {
        document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll("#contact-hero .r").forEach((r, i) => {
        setTimeout(() => r.classList.add("in"), i * 100);
      });
    }, 50);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Contact from ${formData.name}${formData.youtube ? ` — ${formData.youtube}` : ""}`;
    const message = `${formData.describes ? `Role: ${formData.describes}\n\n` : ""}${formData.message}${formData.youtube ? `\n\nYouTube: ${formData.youtube}` : ""}`;

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject,
          message,
          followUpConsent,
        }),
      });
      const data = await res.json();
      if (res.status === 200 && data.success) {
        setIsSubmitted(true);
        toast({ title: "Message sent!", description: "I'll get back to you within 24 hours." });
        setFormData({ name: "", email: "", youtube: "", describes: "", message: "" });
        setFollowUpConsent(true);
      } else {
        throw new Error(data.message || "Unknown error");
      }
    } catch {
      toast({ variant: "destructive", title: "Something went wrong", description: "Please try again or email me directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    background: "var(--bg1)",
    border: "1px solid var(--line2)",
    borderRadius: 4,
    color: "var(--fg)",
    fontFamily: "var(--sans)",
    fontSize: 15,
    outline: "none",
    transition: "border-color .2s, box-shadow .2s",
    resize: "vertical" as const,
  };

  return (
    <Layout>
      {/* Hero */}
      <section id="contact-hero" style={{ padding: "clamp(120px,10.4vw,200px) 0 clamp(48px,4.2vw,80px)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="hero-kicker r">
            <span className="dot" />
            <span>Let's Talk</span>
          </div>
          <h1 className="r r-d1">
            Find out what's actually holding your channel back.
          </h1>
          <div className="hero-note r r-d3">15 minutes. No pitch. Just your channel.</div>
        </div>
      </section>

      {/* Calendly */}
      <section id="calendly" style={{ padding: "clamp(48px,4.2vw,80px) 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="r" style={{ marginBottom: 48 }}>
            <span className="krc-label" style={{ marginBottom: 16 }}>Book Directly</span>
            <h2 style={{ marginBottom: 12 }}>Free Channel Audit</h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, maxWidth: 560 }}>
              I look at your channel before we talk. You leave with a real understanding on what's suppressing your growth and what to fix first alongside whether we work together or not.
            </p>
          </div>
          <div className="r r-d1" style={{
            border: "1px solid var(--line)",
            background: "var(--bg1)",
            borderRadius: 4,
            overflow: "hidden",
            minHeight: 700,
          }}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/kevinnnrysn/30min?hide_gdpr_banner=1"
              style={{ minWidth: 320, height: 700 }}
            />
          </div>
          <div className="r r-d2" style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".06em", marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "inline-block", width: 12, height: 1, background: "var(--fg-mute)" }} />
            Powered by Calendly · Usually same-day response
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ padding: 0 }}>
        <div style={{ padding: "clamp(40px,3.33vw,64px) 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap">
            <div className="form-wrap r">
              {/* Form side */}
              <div>
                <div style={{ marginBottom: 40 }}>
                  <span className="krc-label" style={{ marginBottom: 16 }}>Not Ready To Book?</span>
                  <h2 style={{ marginBottom: 12 }}>Send a message.</h2>
                  <p style={{ fontSize: 15, lineHeight: 1.6 }}>Got a question first? Send it here. I'll get back to you within 24 hours.</p>
                </div>

                {isSubmitted ? (
                  <div style={{ padding: "48px 0", textAlign: "center" }}>
                    <div style={{ fontSize: 40, marginBottom: 16, color: "var(--y)" }}>
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <h3 style={{ marginBottom: 8 }}>Message Sent!</h3>
                    <p style={{ marginBottom: 24 }}>I'll get back to you within 24 hours.</p>
                    <button onClick={() => setIsSubmitted(false)} className="btn-outline" style={{ cursor: "pointer" }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <label style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-mute)" }}>
                        Your Name
                      </label>
                      <input name="name" type="text" placeholder="Full name" required value={formData.name} onChange={handleChange}
                        style={fieldStyle}
                        onFocus={e => { e.target.style.borderColor = "var(--y)"; e.target.style.boxShadow = "0 0 0 3px rgba(245,213,24,.08)"; }}
                        onBlur={e => { e.target.style.borderColor = "var(--line2)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <label style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-mute)" }}>
                        Email Address
                      </label>
                      <input name="email" type="email" placeholder="your@email.com" required value={formData.email} onChange={handleChange}
                        style={fieldStyle}
                        onFocus={e => { e.target.style.borderColor = "var(--y)"; e.target.style.boxShadow = "0 0 0 3px rgba(245,213,24,.08)"; }}
                        onBlur={e => { e.target.style.borderColor = "var(--line2)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <label style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-mute)" }}>
                        Your YouTube Channel
                      </label>
                      <input name="youtube" type="url" placeholder="https://youtube.com/@yourchannel" value={formData.youtube} onChange={handleChange}
                        style={fieldStyle}
                        onFocus={e => { e.target.style.borderColor = "var(--y)"; e.target.style.boxShadow = "0 0 0 3px rgba(245,213,24,.08)"; }}
                        onBlur={e => { e.target.style.borderColor = "var(--line2)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <label style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-mute)" }}>
                        What best describes you?
                      </label>
                      <select name="describes" value={formData.describes} onChange={handleChange}
                        style={{ ...fieldStyle, backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%236a6560' stroke-width='1.5' fill='none' stroke-linecap='round'/></svg>")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", paddingRight: 40, appearance: "none" as const }}
                        onFocus={e => { e.target.style.borderColor = "var(--y)"; e.target.style.boxShadow = "0 0 0 3px rgba(245,213,24,.08)"; }}
                        onBlur={e => { e.target.style.borderColor = "var(--line2)"; e.target.style.boxShadow = "none"; }}
                      >
                        <option value="" disabled>Select one</option>
                        <option>Founder-creator with a business behind the channel</option>
                        <option>Full-time content creator monetizing through sponsorships</option>
                        <option>Coach or educator with a mentorship program</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <label style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-mute)" }}>
                        Your Message
                      </label>
                      <textarea name="message" rows={5} placeholder="What's going on with your channel? What are you hoping to fix?" value={formData.message} onChange={handleChange}
                        style={fieldStyle}
                        onFocus={e => { e.target.style.borderColor = "var(--y)"; e.target.style.boxShadow = "0 0 0 3px rgba(245,213,24,.08)"; }}
                        onBlur={e => { e.target.style.borderColor = "var(--line2)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>

                    <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", userSelect: "none" }}>
                      <input
                        type="checkbox"
                        checked={followUpConsent}
                        onChange={e => setFollowUpConsent(e.target.checked)}
                        style={{ marginTop: 3, accentColor: "var(--y)", width: 15, height: 15, flexShrink: 0, cursor: "pointer" }}
                      />
                      <span style={{ fontSize: 13, color: "var(--fg-mute)", lineHeight: 1.5 }}>
                        I&apos;m open to receiving occasional follow-up from kevinroysoncreative
                      </span>
                    </label>

                    <button type="submit" disabled={isSubmitting} style={{
                      width: "100%",
                      padding: 16,
                      background: isSubmitting ? "var(--bg2)" : "var(--y)",
                      color: isSubmitting ? "var(--fg-mute)" : "#000",
                      border: "none",
                      borderRadius: 4,
                      fontFamily: "var(--sans)",
                      fontSize: 16,
                      fontWeight: 700,
                      cursor: isSubmitting ? "default" : "pointer",
                      transition: "all .25s ease",
                      letterSpacing: "-.01em",
                    }}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}

                <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="mailto:kevinrysn@kevinroysoncreative.com" style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--fg-mute)", transition: "color .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--fg-dim)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-mute)")}
                  >
                    <i className="fa-solid fa-envelope" style={{ color: "#ea4335", width: 20, textAlign: "center" }} />
                    kevinrysn@kevinroysoncreative.com
                  </a>
                  <a href="https://wa.me/6282298599971" style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--fg-mute)", transition: "color .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--fg-dim)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-mute)")}
                  >
                    <i className="fa-brands fa-whatsapp" style={{ color: "#25d366", width: 20, textAlign: "center" }} />
                    WhatsApp: +62 822-9859-9971
                  </a>
                </div>
              </div>

              {/* Info side */}
              <div className="r r-d2" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {infoItems.map(({ label, value, sub }) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em", color: "var(--y)", textTransform: "uppercase" }}>{label}</span>
                    <span style={{ fontSize: 16, color: "var(--fg)", fontWeight: 500 }}>{value}</span>
                    <span style={{ fontSize: 14, color: "var(--fg-dim)", lineHeight: 1.5 }}>{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <style>{`
        .hero-kicker { display: flex; align-items: center; gap: 10px; margin-bottom: 32px; }
        .hero-kicker .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--y); box-shadow: 0 0 12px var(--y); animation: blink 2s ease-in-out infinite; }
        .hero-kicker span { font-family: var(--mono); font-size: 12px; letter-spacing: .1em; color: var(--y); text-transform: uppercase; }
        .hero-sub { font-size: clamp(17px,1.8vw,20px); color: var(--fg-dim); max-width: 560px; margin-top: 24px; line-height: 1.6; }
        .hero-note { display: inline-flex; align-items: center; gap: 10px; margin-top: 32px; font-family: var(--mono); font-size: 12px; color: var(--fg-mute); letter-spacing: .06em; }
        .hero-note::before { content: ''; width: 16px; height: 1px; background: var(--fg-mute); }
        .form-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .reassure-cols { display: grid; grid-template-columns: repeat(3, 1fr); }
        .reassure-col { padding: 48px 44px; border-right: 1px solid var(--line); transition: background .3s; }
        .reassure-col:last-child { border-right: none; }
        .btn-outline { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; background: transparent; color: var(--fg); border: 1.5px solid var(--line2); border-radius: 4px; font-family: var(--sans); font-size: 15px; font-weight: 600; cursor: pointer; transition: all .25s ease; }
        .btn-outline:hover { border-color: var(--fg); background: rgba(255,255,255,.04); }
        select option { background: var(--bg1); }
        @media (max-width: 820px) {
          .form-wrap { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          .reassure-cols { grid-template-columns: 1fr !important; }
          .reassure-col { border-right: none !important; border-bottom: 1px solid var(--line); padding: 32px 24px !important; }
          .reassure-col:last-child { border-bottom: none; }
        }
      `}</style>
    </Layout>
  );
}
