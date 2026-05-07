"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: scrolled ? "14px 0" : "20px 0",
      transition: "all .3s ease",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      background: scrolled ? "rgba(8,8,8,.88)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {[
            { href: "/", label: "Home" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link-desktop"
              style={{
                padding: "8px 16px",
                color: isActive(href) ? "var(--fg)" : "var(--fg-dim)",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 4,
                transition: "color .2s",
              }}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact#calendly" className="btn-y" style={{ marginLeft: 8, padding: "10px 22px", fontSize: 14 }}>
            Book a Call
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: "var(--fg)",
            fontSize: 18,
          }}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "var(--bg1)",
          borderTop: "1px solid var(--line)",
          padding: "16px 24px",
        }}>
          {[
            { href: "/", label: "Home" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                padding: "12px 0",
                color: isActive(href) ? "var(--fg)" : "var(--fg-dim)",
                fontSize: 15,
                borderBottom: "1px solid var(--line)",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-link-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
