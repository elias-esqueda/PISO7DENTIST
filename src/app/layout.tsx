import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Piso7 Dental — Odontología Estética Integral en Hermosillo",
  description:
    "Piso7 Dental es una clínica de odontología estética integral en Hermosillo, Sonora. Rehabilitación oral, carillas, implantes, alineadores invisibles y odontopediatría, con el Dr. Carlos Inzunza y el Dr. Jesús Cambustón.",
  keywords: [
    "Piso7 Dental",
    "dentista Hermosillo",
    "Dr. Carlos Inzunza",
    "Dr. Jesús Cambustón",
    "carillas Hermosillo",
    "implantes dentales Hermosillo",
    "odontología estética",
  ],
  openGraph: {
    title: "Piso7 Dental — Odontología Estética Integral",
    description:
      "Tu sonrisa, en el piso más alto. Odontología estética integral en Hermosillo, Sonora.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
