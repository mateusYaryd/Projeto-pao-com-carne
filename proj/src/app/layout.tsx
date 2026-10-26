import type { Metadata, Viewport } from "next";
import { Bitter, Rammetto_One } from "next/font/google";
import "./globals.css";

const display = Rammetto_One({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Bitter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Pão com Carne Hamburgueria — Sem frescura. Com qualidade.",
  description: "Hamburgueria no Itaim Bibi, São Paulo. Pão, carne e bons ingredientes, sem frescura. Peça no iFood.",
};

export const viewport: Viewport = { themeColor: "#B3261E", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
