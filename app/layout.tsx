import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "PequeServer - Servidor de Minecraft",
    template: "%s | PequeServer",
  },
  description:
    "Servidor de Minecraft con una comunidad activa, mods únicos y eventos semanales. Únete a la mejor experiencia gaming.",
  keywords: [
    "minecraft",
    "servidor",
    "gaming",
    "comunidad",
    "mods",
    "eventos",
    "survival",
    "creative",
  ],
  authors: [{ name: "PequeServer Team" }],
  creator: "PequeServer",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "PequeServer",
    title: "PequeServer - Servidor de Minecraft",
    description:
      "Servidor de Minecraft con una comunidad activa, mods únicos y eventos semanales.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PequeServer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PequeServer - Servidor de Minecraft",
    description:
      "Servidor de Minecraft con una comunidad activa, mods únicos y eventos semanales.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
