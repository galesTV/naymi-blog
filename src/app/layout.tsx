import type { Metadata } from "next";
import { VT323, Caveat, Comic_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackgroundScrapbook from "@/components/BackgroundScrapbook";
import Footer from "@/components/Footer";
import StudioHide from "@/components/StudioHide";

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
  title: {
    template: "%s | Blog da Naymi",
    default: "Blog da Naymi ✨ O diário mais Y2K da internet",
  },
  description:
    "Sobrevivendo à internet. Amo cultura pop, geek, design vintage e publicidade! 🎀✨",
  openGraph: {
    title: "Blog da Naymi",
    description:
      "O diário mais Y2K da internet. Cultura pop, desabafos e web design de 2006.",
    url: "https://google.com",
    siteName: "Blog da Naymi",
    images: [
      {
        url: "/naymi-1.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
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
        className={`${vt323.variable} ${caveat.variable} ${comic.variable} font-comic antialiased min-h-screen flex flex-col`}
      >
        <StudioHide>
          <BackgroundScrapbook />
          <Header />
        </StudioHide>

        <div className="flex-1">{children}</div>

        <StudioHide>
          <Footer />
        </StudioHide>
      </body>
    </html>
  );
}
