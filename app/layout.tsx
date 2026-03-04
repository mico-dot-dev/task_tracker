import type { Metadata } from "next";
import { Providers } from "./providers/theme-provider";
import { ThemeToggle } from "./components/ThemeChanger";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Tracker",
  description: "A simple task tracking application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
