import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Finance Dashboard",
  description: "A personal finance dashboard tailored to your mortgages, rental property, and planning scenarios."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
