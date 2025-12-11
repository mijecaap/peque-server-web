"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Globe,
  Users,
  Server,
  Shield,
  Crown,
  Sparkles,
  MessageCircle,
  Cpu,
  Package,
  Gamepad2,
} from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/constants"
import {
  fadeIn,
  slideUp,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewport,
} from "@/lib/animations"

export default function Home() {
  const features = [
    {
      icon: Globe,
      title: "Mundos Personalizados",
      description: "Explora biomas únicos y dimensiones exclusivas con estructuras y terrenos generados especialmente para nuestra comunidad.",
    },
    {
      icon: Cpu,
      title: "Hardware Súper Rápido",
      description: "Hasta 16GB de RAM y 16 cores dedicados. Rendimiento increíble sin lag para la mejor experiencia de juego.",
    },
    {
      icon: Package,
      title: "+1000 Mods Únicos",
      description: "Mods épicos de armas, estructuras, bosses, autos y mucho más. Contenido exclusivo que no encontrarás en otro servidor.",
    },
    {
      icon: Users,
      title: "1 Gratis + 15 Premium",
      description: "Un servidor gratuito para todos y más de 15 servidores premium con diferentes modalidades y temáticas.",
    },
    {
      icon: Server,
      title: "Backups Automáticos",
      description: "Tu progreso siempre seguro. Realizamos backups automáticos para que nunca pierdas tus construcciones.",
    },
    {
      icon: Shield,
      title: "Protección Anti-Griefing",
      description: "Sistema de claims y protección avanzada. Construye con total tranquilidad sabiendo que tus creaciones están seguras.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section - Premium Focus */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        
        {/* Floating Emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.span
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[10%] text-4xl md:text-5xl"
          >
            ⛏️
          </motion.span>
          <motion.span
            animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[20%] right-[15%] text-4xl md:text-5xl"
          >
            💎
          </motion.span>
          <motion.span
            animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[35%] left-[5%] text-3xl md:text-4xl"
          >
            🎮
          </motion.span>
          <motion.span
            animate={{ y: [0, 15, 0], rotate: [0, -15, 15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-[30%] right-[8%] text-3xl md:text-4xl"
          >
            ⚔️
          </motion.span>
          <motion.span
            animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute top-[50%] left-[12%] text-3xl md:text-4xl"
          >
            🏰
          </motion.span>
          <motion.span
            animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute top-[45%] right-[10%] text-3xl md:text-4xl"
          >
            🐉
          </motion.span>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto"
          >
            <motion.div variants={slideUp} className="space-y-6">
              <Badge variant="outline" className="px-4 py-2 text-base border-primary/50">
                <Crown className="w-4 h-4 mr-2 inline" />
                Servidor Premium de Minecraft
              </Badge>
              
              {/* Logo */}
              <motion.div 
                variants={scaleIn}
                className="flex justify-center"
              >
                <Image
                  src="/logo.jpg"
                  alt="El Pequeño Servidor Logo"
                  width={160}
                  height={160}
                  className="rounded-2xl shadow-2xl shadow-primary/20 border-2 border-primary/30"
                  priority
                />
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-primary to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">
                  El Pequeño Servidor
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
                La Experiencia Definitiva de Minecraft
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
                Mods exclusivos, eventos épicos y una comunidad increíble te esperan
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="text-lg px-8 shadow-lg shadow-primary/25">
                <Link href="/como-entrar">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Cómo Entrar
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary/30"
              >
                <a
                  href={SOCIAL_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Unirse a Discord
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Server Cards Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="space-y-12 max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Elige Tu Servidor
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dos opciones para vivir la mejor experiencia de Minecraft
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Free Server Card */}
              <motion.div variants={scaleIn}>
                <Card className="h-full border-accent/50 bg-gradient-to-br from-accent/5 to-emerald-500/5 relative overflow-hidden glass-card">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-16 translate-x-16" />
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="px-3 py-1 bg-accent/20 text-accent-foreground">
                        <Users className="w-3 h-3 mr-1" />
                        Gratuito
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                      <Gamepad2 className="w-6 h-6 text-accent" />
                      Servidor Gratuito
                    </CardTitle>
                    <CardDescription className="text-base">
                      ¡Juega gratis con toda la comunidad!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* IP Destacada */}
                    <div className="p-4 bg-accent/10 rounded-xl border-2 border-accent/30 space-y-3">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">IP del Servidor</p>
                        <p className="text-lg font-bold text-accent font-mono bg-background/50 px-3 py-2 rounded-lg">
                          Peque_Server21.aternos.me
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Puerto (Bedrock)</p>
                        <p className="text-lg font-bold text-accent font-mono bg-background/50 px-3 py-2 rounded-lg">
                          34538
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        <span>Compatible Java y Bedrock</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        <span>Comunidad muy activa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        <span>Economía y protección anti-grief</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        <span>PvP, minar, construir y más</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        <span>Mods de armas, estructuras, bosses y autos</span>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-accent/50 hover:bg-accent/10"
                        size="lg"
                      >
                        <a
                          href={SOCIAL_LINKS.discord}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Unirse a Discord
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Premium Server Card */}
              <motion.div variants={scaleIn}>
                <Card className="h-full border-purple-500/50 bg-gradient-to-br from-purple-500/10 via-primary/5 to-purple-600/10 relative overflow-hidden glass-card-premium">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full -translate-y-20 translate-x-20" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/10 rounded-full translate-y-16 -translate-x-16" />
                  <CardHeader className="space-y-4 relative">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white">
                        <Crown className="w-3 h-3 mr-1" />
                        Recomendado
                      </Badge>
                      <span className="text-2xl font-bold text-purple-400">$4/mes</span>
                    </div>
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                      <Crown className="w-6 h-6 text-purple-400" />
                      ¡Servidores Premium!
                    </CardTitle>
                    <CardDescription className="text-base">
                      Pagando $4 al mes desbloqueas jugar sin límites en más de 15 servidores premium con diferentes modalidades, temáticas, muchos mods y excelente rendimiento.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 relative">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">⚡</span>
                        <span><strong>Rendimiento increíble:</strong> Hasta 16GB RAM y 16 cores</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">💾</span>
                        <span>Backups automáticos de tu progreso</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">🎮</span>
                        <span>Servidores se abren cuando tú quieras</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">📦</span>
                        <span><strong>+1000 mods</strong> en +15 servidores diferentes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">🛡️</span>
                        <span>Soporte premium prioritario</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">👑</span>
                        <span>Rol admin en servidores de paga y gratuito</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 space-y-3">
                      <Button asChild className="w-full bg-purple-500 hover:bg-purple-600" size="lg">
                        <Link href="/como-entrar">
                          <Sparkles className="w-4 h-4 mr-2" />
                          ¿Cómo Entrar?
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-purple-500/50 hover:bg-purple-500/10"
                        size="lg"
                      >
                        <a
                          href={SOCIAL_LINKS.discord}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Únete a Discord
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Differentiation */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <Badge variant="outline" className="mb-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Características Únicas
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                ¿Por Qué Somos Diferentes?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                No somos solo otro servidor. Ofrecemos una experiencia completamente diferenciada
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div key={index} variants={staggerItem}>
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 hover:scale-105 glass-card">
                      <CardHeader>
                        <div className="mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideUp}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-primary/50 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden glass-card">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
              <CardHeader className="text-center space-y-4 pb-6 relative">
                <div className="inline-block">
                  <Badge variant="outline" className="mb-4">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Únete Ahora
                  </Badge>
                </div>
                <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Comienza Tu Aventura Hoy
                </CardTitle>
                <CardDescription className="text-lg max-w-2xl mx-auto">
                  Miles de jugadores ya están creando recuerdos inolvidables.
                  Es tu turno de formar parte de algo especial.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pb-8 relative">
                <Button asChild size="lg" className="text-lg px-8 shadow-lg">
                  <Link href="/como-entrar">
                    <Crown className="w-5 h-5 mr-2" />
                    Cómo Entrar
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-primary/30"
                >
                  <Link href="/servers">
                    <Server className="w-5 h-5 mr-2" />
                    Ver Servidores
                  </Link>
                </Button>
              </CardContent>
              <div className="text-center pb-6 relative">
                <p className="text-sm text-muted-foreground">
                  ¿Preguntas? Únete a{" "}
                  <a
                    href={SOCIAL_LINKS.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    nuestro Discord
                  </a>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
