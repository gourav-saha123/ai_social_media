import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Collegeflow — AI-Powered Campus Event Management",
  description:
    "Create events, build dream teams, and discover campus life — all powered by AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetbrains.className} h-full antialiased`}
    >
      <body className="bg-[#0e0e0e] text-white">{children}</body>
    </html>
  );
}