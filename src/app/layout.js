import { Cormorant_Garamond, Manrope } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import site from "@/data/site";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="flex min-h-screen flex-col font-sans text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-foreground focus-visible:px-4 focus-visible:py-2 focus-visible:text-background focus-visible:shadow-[0_18px_42px_-24px_rgba(29,25,21,0.38)] focus-visible:outline-none"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
