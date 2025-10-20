"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Servidores", href: "/servers" },
    { name: "¿Cómo entrar?", href: "/como-entrar" },
    // Temporalmente deshabilitado
    // { name: "Noticias", href: "/news" },
    // { name: "Galería", href: "/gallery" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PequeServer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="default">
            <a
              href="https://discord.gg/tu-servidor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unirse a Discord
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container mx-auto space-y-1 py-4 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 pt-2">
              <Button asChild variant="default" className="w-full">
                <a
                  href="https://discord.gg/tu-servidor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unirse a Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
