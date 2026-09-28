"use client";
import Image from "next/image";

import { LegalTabs } from "./LegalTabs";
import { LegalCard } from "./LegalCard";
import type { Section } from "@/data/privacy";
import { useEffect, useState } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

function MyCook360Logo() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        marginBottom: "32px",
      }}
    >
      <Image
        src="/MyCook360-logo.png"
        alt="MyCook360"
        width={60}
        height={60}
        style={{ objectFit: "contain", width: 60, height: 60 }}
        priority
      />
    </div>
  );
}

export function LegalLayout({ title, lastUpdated, sections }: LegalLayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in on mount
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* ── Sticky header ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.9)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled
            ? "blur(16px) saturate(180%)"
            : "none",
          borderBottom: scrolled
            ? "1px solid rgba(229,231,235,0.8)"
            : "1px solid transparent",
          transition:
            "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo in header (shown when scrolled) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              opacity: scrolled ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <Image
              src="/MyCook360-logo.png"
              alt="MyCook360"
              width={40}
              height={40}
              style={{ objectFit: "contain", width: 40, height: 40 }}
              priority
            />
          </div>

          {/* Tabs in header (shown when scrolled) */}
          <div
            style={{
              opacity: scrolled ? 1 : 0,
              transition: "opacity 0.3s ease",
              pointerEvents: scrolled ? "auto" : "none",
            }}
          >
            <LegalTabs />
          </div>
        </div>
      </header>

      {/* ── Hero / Top section ── */}
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "clamp(48px, 8vw, 80px) 24px 0",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            animation: "fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          <MyCook360Logo />
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
            animation: "fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both",
          }}
        >
          <LegalTabs />
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 800,
            color: "#111827",
            letterSpacing: "-1px",
            lineHeight: 1.15,
            marginBottom: "12px",
            animation: "fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s both",
          }}
        >
          {title}
        </h1>

        {/* Last updated */}
        <p
          style={{
            fontSize: "14px",
            color: "#9ca3af",
            fontWeight: 500,
            marginBottom: "clamp(32px, 5vw, 56px)",
            animation: "fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s both",
          }}
        >
          Last Updated:{" "}
          <time dateTime={lastUpdated} style={{ color: "#6b7280" }}>
            {lastUpdated}
          </time>
        </p>
      </div>

      {/* ── Main content card ── */}
      <main
        id="main-content"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "0 clamp(12px, 3vw, 24px) clamp(64px, 10vw, 120px)",
          animation: "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both",
        }}
      >
        <LegalCard sections={sections} />
      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          textAlign: "center",
          padding: "32px 24px",
          borderTop: "1px solid #f3f4f6",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "4px",
            }}
          >
            <Image
              src="/MyCook360-logo.png"
              alt="MyCook360"
              width={30}
              height={30}
              style={{ objectFit: "contain", width: 30, height: 30 }}
            />
          </div>
          <p style={{ fontSize: "13px", color: "#9ca3af" }}>
            © {new Date().getFullYear()} MyCook360. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "#d1d5db" }}>
            Questions?{" "}
            <a
              href="mailto:mycook360@outlook.com"
              style={{
                color: "#C94F3D",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              mycook360@outlook.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
