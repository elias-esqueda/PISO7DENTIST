import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Piso7 Dental — Odontología estética en Hermosillo",
  description:
    "Clínica de odontología estética integral en Hermosillo, Sonora. Precisión clínica, tecnología y una experiencia humana en el piso 7.",
  keywords: [
    "Piso7 Dental",
    "dentista Hermosillo",
    "carillas Hermosillo",
    "implantes dentales Hermosillo",
    "odontología estética",
  ],
  openGraph: {
    title: "Piso7 Dental — Odontología estética integral",
    description:
      "Una nueva perspectiva para tu sonrisa. Odontología estética integral en Hermosillo, Sonora.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${cormorant.variable} ${manrope.variable} ${plexMono.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="piso7-theme-v2">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
