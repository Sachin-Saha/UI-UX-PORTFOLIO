import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

/**
 * NOTE ON TYPOGRAPHY
 * The brief specifies Cormorant Garamond (headings) and Gilroy (body).
 * Cormorant Garamond is loaded from Google Fonts below.
 * Gilroy is a commercial typeface and is not distributed on Google Fonts,
 * so Inter is used as a metrically-clean stand-in for local development.
 * To use real Gilroy: drop your licensed .woff2 files into /public/fonts
 * and swap the `body` export below for a next/font/local declaration —
 * see the commented example at the bottom of this file.
 */

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin Saha — UI/UX Designer",
  description:
    "Sachin Saha is a UI/UX Designer from Nagpur, India, crafting thoughtful digital experiences at the intersection of research, interface design, and frontend engineering.",
  metadataBase: new URL("https://sachinsaha.design"),
  openGraph: {
    title: "Sachin Saha — UI/UX Designer",
    description:
      "Designing experiences that are researched, intentional, and quietly elegant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}

/*
  Example of swapping in real Gilroy locally:

  import localFont from "next/font/local";

  const body = localFont({
    src: [
      { path: "../public/fonts/Gilroy-Regular.woff2", weight: "400", style: "normal" },
      { path: "../public/fonts/Gilroy-Medium.woff2", weight: "500", style: "normal" },
      { path: "../public/fonts/Gilroy-SemiBold.woff2", weight: "600", style: "normal" },
    ],
    variable: "--font-body",
    display: "swap",
  });
*/
