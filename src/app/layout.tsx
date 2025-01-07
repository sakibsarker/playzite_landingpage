import type { Metadata } from "next";
import { Inter, Bebas_Neue, Orbitron } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";

const inter = Inter({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--bebasNeue",
});
const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
  variable: "--orbitron",
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
      <body className={bebasNeue.variable}>
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
