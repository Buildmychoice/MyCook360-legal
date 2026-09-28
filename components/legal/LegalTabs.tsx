"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

interface Tab {
  label: string;
  href: string;
}

const tabs: Tab[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export function LegalTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleTabClick = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <div
      role="tablist"
      aria-label="Legal pages navigation"
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
        borderRadius: "999px",
        padding: "4px",
        gap: "2px",
        border: "1px solid #e5e7eb",
      }}
    >
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <button
            key={tab.href}
            role="tab"
            aria-selected={isActive}
            aria-label={tab.label}
            onClick={() => handleTabClick(tab.href)}
            disabled={isPending}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 22px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: isActive ? 600 : 500,
              lineHeight: 1,
              border: "none",
              cursor: "pointer",
              transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
              outline: "none",
              whiteSpace: "nowrap",
              backgroundColor: isActive ? "#C94F3D" : "transparent",
              color: isActive ? "#ffffff" : "#6b7280",
              boxShadow: isActive
                ? "0 2px 8px rgba(201,79,61,0.35)"
                : "none",
              transform: isPending ? "scale(0.98)" : "scale(1)",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.color = "#374151";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.7)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.color = "#6b7280";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "transparent";
              }
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
