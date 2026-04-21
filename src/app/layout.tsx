import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/ui/TopBar";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La Flambée | Viandes maturées & Pizzas à Mirepoix",
  description: "Découvrez La Flambée à Mirepoix. Cuisine 100% fait-maison, spécialité de viandes maturées sur place et pizzas au feu de bois. Ambiance chaleureuse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}