import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Legal | MyCook360",
    template: "%s | MyCook360",
  },
  description:
    "MyCook360 legal pages — Privacy Policy and Terms of Use for the app.",
  metadataBase: new URL("https://mycook360.app"),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/KREZO-logo.png",
    apple: "/KREZO-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
