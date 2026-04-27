import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/ui/TopBar";
import Navbar from "@/components/ui/Navbar";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "La Flambée | Viandes maturées & Pizzas à Mirepoix",
  description: "Découvrez La Flambée à Mirepoix. Cuisine 100% fait-maison, spécialité de viandes maturées sur place et pizzas au feu de bois. Ambiance chaleureuse dans une bastide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${playfair.variable} ${lora.variable} font-sans`}>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}