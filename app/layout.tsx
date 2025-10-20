import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Design System - Inspired by u2clab.com",
  description: "Modern design system built with Next.js 15.5, Tailwind CSS 4.0, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
