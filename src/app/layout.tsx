import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexis | Full Stack Developer Portfolio",
  description: "A visually stunning portfolio by Alexis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
