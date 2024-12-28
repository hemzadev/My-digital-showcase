import type { Metadata } from "next";
import { Inter, Space_Grotesk, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] , variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] , variable: "--font-serif" });
const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Portfolio Project",
  description: "Created by hemza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          spaceGrotesk.variable,
          atkinsonHyperlegible.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
