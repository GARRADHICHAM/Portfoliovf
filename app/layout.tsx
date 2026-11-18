import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hicham Garrad — Ingénieur IA & Data",
  description:
    "Ingénieur IA & Data diplômé d'un M2 MIAGE IA Appliquée (UCA). Spécialisé en multi-agents LLM, pipelines data et développement full stack. Disponible immédiatement pour un CDI.",
  keywords: [
    "Hicham Garrad",
    "Ingénieur IA",
    "Data Engineer",
    "LLM",
    "Multi-agents",
    "Machine Learning",
    "Full Stack",
    "Next.js",
  ],
  authors: [{ name: "Hicham Garrad", url: "https://hichamgarrad.com" }],
  openGraph: {
    title: "Hicham Garrad — Ingénieur IA & Data",
    description: "Multi-Agents LLM · Pipelines Data · Full Stack",
    type: "website",
    url: "https://hichamgarrad.com",
    siteName: "Hicham Garrad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hicham Garrad — Ingénieur IA & Data",
    description: "Multi-Agents LLM · Pipelines Data · Full Stack",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body className="bg-[#050508] text-zinc-100 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
