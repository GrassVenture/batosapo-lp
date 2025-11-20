import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "バトサポ - スイスドロー形式の大会運営をもっと手軽に",
  description: "バトサポは、スイスドロー形式のトーナメント運営を簡単にする大会運営システムです。対戦表の自動生成、結果管理、順位計算まで、すべてをスムーズに。",
  keywords: ["バトサポ", "スイスドロー", "大会運営", "トーナメント", "対戦表", "TCG"],
  authors: [{ name: "バトサポ" }],
  openGraph: {
    title: "バトサポ - スイスドロー形式の大会運営をもっと手軽に",
    description: "スイスドロー形式のトーナメント運営を簡単にする大会運営システム",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "バトサポ - スイスドロー形式の大会運営をもっと手軽に",
    description: "スイスドロー形式のトーナメント運営を簡単にする大会運営システム",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
