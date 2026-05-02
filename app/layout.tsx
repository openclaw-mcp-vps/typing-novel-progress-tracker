import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TypeNovel — Gamified Typing Practice with Novel Achievements",
  description: "Practice typing through classic literature, earn achievements, and compete on leaderboards. Track your progress as you complete entire novels.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ebc63bb1-5287-46cf-82f1-118422078731"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
