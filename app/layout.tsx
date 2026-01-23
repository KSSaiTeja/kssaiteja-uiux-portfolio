import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville, DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

const dmSans = DM_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "K S Sai Teja | Senior UI/UX Designer",
  description: "UI/UX Designer with 2+ years of experience crafting intuitive digital products for fintech and enterprise platforms. Expert in translating complex business requirements into clean, accessible interfaces.",
  keywords: ["UI/UX Designer", "Product Designer", "Fintech Design", "Enterprise Design", "Design Systems", "Motion Graphics", "K S Sai Teja", "kssaiteja"],
  authors: [{ name: "K S Sai Teja" }],
  openGraph: {
    title: "K S Sai Teja | Senior UI/UX Designer",
    description: "UI/UX Designer crafting intuitive digital products for fintech and enterprise platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "K S Sai Teja | Senior UI/UX Designer",
    description: "UI/UX Designer crafting intuitive digital products for fintech and enterprise platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} ${dmSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
