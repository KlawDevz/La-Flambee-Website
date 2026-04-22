import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/ui/TopBar";
import Navbar from "@/components/ui/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

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
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans bg-stone-50`}>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}