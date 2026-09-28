import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { termsData } from "@/data/terms";

export const metadata: Metadata = {
  title: "Terms of Use | MyCook360",
  description:
    "Read the Terms of Use for MyCook360. Understand your rights and responsibilities when using the app.",
  openGraph: {
    title: "Terms of Use | MyCook360",
    description:
      "Read the Terms of Use for MyCook360. Understand your rights and responsibilities when using the app.",
    type: "website",
    url: "https://mycook360.app/terms",
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
    title: "Terms of Use | MyCook360",
    description:
      "Read the Terms of Use for MyCook360. Understand your rights and responsibilities when using the app.",
  },
  alternates: {
    canonical: "https://mycook360.app/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      lastUpdated="September 28, 2026"
      sections={termsData}
    />
  );
}
