import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnAI — AI-Powered Personalized Learning Platform",
  description:
    "Learn anything, your way. AI creates complete personalized courses with video lectures, quizzes, and an adaptive 24/7 AI tutor.",
  icons: {
    icon: "/learnai-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#F8FAFC] text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
