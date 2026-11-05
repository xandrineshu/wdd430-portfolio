import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NavLinks from "@/components/NavLinks"; // Import your new navigation component

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tailwind CSS Practice",
  description: "Profile card built with Next.js, Tailwind CSS, and global styles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased bg-gray-50`}>
        {/* Global Header Navigation */}
        <header className="flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">
          <span className="font-bold text-gray-800">My Portfolio</span>
          <NavLinks />
        </header>

        {children}
      </body>
    </html>
  );
}