import Link from "next/link"
import { Youtube, Instagram, Video, Mail } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/constants"

export function Footer() {
  const footerLinks = {
    navegacion: [
      { name: "Inicio", href: "/" },
      { name: "Servidores Premium", href: "/servers" },
      { name: "¿Cómo entrar?", href: "/como-entrar" },
    ],
  }

  const socialLinks = [
    {
      name: "TikTok",
      href: SOCIAL_LINKS.tiktok,
      icon: Video,
    },
    {
      name: "YouTube",
      href: SOCIAL_LINKS.youtube,
      icon: Youtube,
    },
    {
      name: "Instagram",
      href: SOCIAL_LINKS.instagram,
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
              El Pequeño Servidor
            </h3>
            <p className="text-sm text-muted-foreground">
              Servidor de Minecraft con una comunidad activa y mods únicos. Únete
              y vive la mejor experiencia gaming.
            </p>
            {/* Email de contacto */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:wednerthejosecontacto@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  wednerthejosecontacto@gmail.com
                </a>
              </div>
            </div>
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
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 El Pequeño Servidor. Creado por Wedner Vega. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
