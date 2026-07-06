import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mico Personal Help System ",
  description: "A self help system for personal growth and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">{children}</body>
    </html>
  );
}
