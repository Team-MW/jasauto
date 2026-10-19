import type { Metadata } from "next";
import { Barlow_Condensed, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-title",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "JAS'AUTO | Pièces détachées auto d'occasion garanties",
  description:
    "JAS'AUTO, pièces détachées automobiles d'occasion testées, nettoyées et garanties. Châteauroux (36000).",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${barlow.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
