import type { Metadata } from "next";
import { Inter, Bebas_Neue, Orbitron, Figtree, Jost } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--inter",
});

const figtree = Figtree({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const jost = Jost({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playzite",
  description: "Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${figtree.className} `}>{children}</body>
    </html>
  );
}
