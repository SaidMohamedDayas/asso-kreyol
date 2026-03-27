import { Cormorant_Garamond, Manrope } from "next/font/google";
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
  description:
    "Base editoriale du site vitrine culturel de l'Association Kréyol. Contenu détaillé à venir.",
  applicationName: site.name,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="flex min-h-screen flex-col font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
