import Link from "next/link"
import { Youtube, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navegacion: [
      { name: "Inicio", href: "/" },
      { name: "Servidores", href: "/servers" },
      { name: "Noticias", href: "/news" },
      { name: "Galería", href: "/gallery" },
    ],
    legal: [
      { name: "Términos de Servicio", href: "/terms" },
      { name: "Política de Privacidad", href: "/privacy" },
    ],
  }

  const socialLinks = [
    {
      name: "Discord",
      href: "https://discord.gg/tu-servidor",
      icon: MessageCircle,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@tu-canal",
      icon: Youtube,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/tu-cuenta",
      icon: Instagram,
    },
  ]

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto py-12 md:py-16 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Información del Servidor */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PequeServer
            </h3>
            <p className="text-sm text-muted-foreground">
              Servidor de Minecraft con una comunidad activa y mods únicos. Únete
              y vive la mejor experiencia gaming.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navegación</h4>
            <ul className="space-y-2">
              {footerLinks.navegacion.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            <div className="space-y-2 pt-4">
              <h5 className="text-xs font-medium text-muted-foreground">Legal</h5>
              <ul className="space-y-1">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} PequeServer. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
