import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hicham Garrad — Ingénieur IA & Data",
  description:
    "Ingénieur IA & Data en fin de M2 MIAGE IA Appliquée (UCA). Spécialisé en multi-agents LLM, pipelines data et développement full stack. Disponible pour CDI octobre 2026.",
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
    <html lang="fr" suppressHydrationWarning className={inter.variable}>
      <body className="bg-[#09090B] text-zinc-100 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
