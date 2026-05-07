"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--y)", marginBottom: 16 }}>404</div>
        <h1 style={{ fontSize: "clamp(40px,6vw,80px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-.035em", marginBottom: 20 }}>Page not found.</h1>
        <p style={{ color: "var(--fg-dim)", marginBottom: 40 }}>The page you're looking for doesn't exist.</p>
        <Link href="/" className="btn-y">Return Home</Link>
      </div>
    </div>
  );
}
