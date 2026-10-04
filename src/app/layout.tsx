import type { Metadata } from "next";
import { VT323, Caveat, Comic_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackgroundScrapbook from "@/components/BackgroundScrapbook";
import Footer from "@/components/Footer";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

const comic = Comic_Neue({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-comic",
});

export const metadata: Metadata = {
  title: "Blog da Naymi",
  description: "O blog mais icônico da internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning
        className={`${vt323.variable} ${caveat.variable} ${comic.variable} font-comic antialiased min-h-screen`}
      >
        <BackgroundScrapbook />
        <Header />
        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
