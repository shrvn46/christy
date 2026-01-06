import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Christy",
  description: "Experience authentic Indian flavours - Punjabi cuisine, Indo-Chinese, and street food at Christy",
  icons: {
    icon: [
      {
        url: "/christy.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/christy.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/christy.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/christy.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <header className="bg-background border-b border-border">
          <nav className="flex justify-between items-center px-4 md:px-8 py-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Christy
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/menu" className="text-foreground hover:text-primary transition-colors">
                Menu
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.swiggy.com/restaurants/new-christy-hotel-ravet-ravet-306519/dineout"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-background text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors text-sm"
              >
                Order on Swiggy
              </a>
              <a
                href="https://www.zomato.com/pune/christy-restaurant-chinchwad"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm"
              >
                Order on Zomato
              </a>
            </div>
          </nav>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
