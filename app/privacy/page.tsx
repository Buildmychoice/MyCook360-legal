import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { privacyData } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | MyCook360",
  description:
    "Learn how MyCook360 collects, uses, and protects your personal information when you use the app.",
  openGraph: {
    title: "Privacy Policy | MyCook360",
    description:
      "Learn how MyCook360 collects, uses, and protects your personal information when you use the app.",
    type: "website",
    url: "https://mycook360.app/privacy",
    siteName: "MyCook360",
    images: [
      {
        url: "https://mycook360.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyCook360",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | MyCook360",
    description:
      "Learn how MyCook360 collects, uses, and protects your personal information when you use the app.",
  },
  alternates: {
    canonical: "https://mycook360.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="September 28, 2026"
      sections={privacyData}
    />
  );
}
