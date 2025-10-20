"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Globe,
  Users,
  Trophy,
  Zap,
  Server,
  Shield,
  Crown,
  Sparkles,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react"
import { useServers } from "@/lib/hooks/useServers"
import { SOCIAL_LINKS } from "@/lib/constants"
import {
  fadeIn,
  slideUp,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewport,
  scrollRevealContainer,
} from "@/lib/animations"

export default function Home() {
  // Fetch real server data
  const { servers, isLoading: serversLoading, error: serversError } = useServers()

  // Calculate stats from real data
  const totalPlayers = servers?.reduce((acc, server) => acc + server.players.count, 0) || 0
  const totalServers = servers?.length || 0
  const onlineServers = servers?.filter((s) => s.status === 1).length || 0

  // Calculate uptime (percentage of servers online)
  const uptimePercentage = totalServers > 0 ? Math.round((onlineServers / totalServers) * 100) : 99

  const features = [
    {
      icon: Globe,
      title: "Mundos Personalizados",
      description: "Explora biomas únicos y dimensiones exclusivas diseñadas específicamente para nuestra comunidad.",
    },
    {
      icon: Trophy,
      title: "Misiones Épicas",
      description: "Completa desafíos y misiones con recompensas exclusivas que solo encontrarás aquí.",
    },
    {
      icon: Zap,
      title: "Hardware Premium",
      description: "Cero lag y máxima estabilidad con servidores de última generación disponibles 24/7.",
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Únete a eventos frecuentes, torneos y una comunidad vibrante de jugadores dedicados.",
    },
    {
      icon: Server,
      title: `${totalServers}+ Servidores`,
      description: "Survival, Creativo, Anárquico, Minijuegos y más modalidades interconectadas.",
    },
    {
      icon: Shield,
      title: "Protección Anti-Griefing",
      description: "Sistema de claims para proteger tus creaciones. Construye con total tranquilidad.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section - Premium Focus */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        
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
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  La Experiencia Definitiva
                </span>
                <br />
                <span className="text-foreground">de Minecraft</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Únete a más de <strong className="text-foreground">{totalPlayers}+ jugadores</strong> en{" "}
                <strong className="text-foreground">{totalServers} servidores interconectados</strong> con
                mods exclusivos, eventos épicos y una comunidad increíble
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

            {/* Quick Access Card - Premium IP */}
            <motion.div variants={fadeIn} className="w-full max-w-md pt-8">
              <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Crown className="w-4 h-4 text-primary" />
                      Acceso Premium
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      Disponible
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/servers">
                      <Server className="w-4 h-4 mr-2" />
                      Ver Servidores Premium
                    </Link>
                  </Button>
                  
                  {/* Free IP Notice - Highlighted */}
                  <div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
                    <p className="text-sm font-medium text-center">
                      <span className="text-accent">💡 IP Gratuita:</span>{" "}
                      <a
                        href={SOCIAL_LINKS.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent underline decoration-accent/50 hover:decoration-accent transition-colors"
                      >
                        Únete a Discord
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Key Metrics */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={scrollRevealContainer}
            className="space-y-12"
          >
            <motion.div variants={slideUp} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Rendimiento y Confiabilidad
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Números que respaldan nuestra excelencia
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              <motion.div variants={scaleIn}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {serversLoading ? (
                        <span className="animate-pulse">...</span>
                      ) : serversError ? (
                        "N/A"
                      ) : (
                        `${totalPlayers}+`
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground font-medium">
                      Jugadores Activos
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {uptimePercentage}%
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground font-medium">
                      Uptime Garantizado
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Server className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {serversLoading ? (
                        <span className="animate-pulse">...</span>
                      ) : serversError ? (
                        "N/A"
                      ) : (
                        `${totalServers}+`
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground font-medium">
                      Servidores Interconectados
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      100%
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground font-medium">
                      Protección de Claims
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
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
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 hover:scale-105">
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

      {/* Access Options Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
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
                Elige Tu Forma de Jugar
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Acceso premium con beneficios exclusivos o gratuito para comenzar
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Premium Option */}
              <motion.div variants={scaleIn}>
                <Card className="h-full border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="default" className="px-3 py-1">
                        <Crown className="w-3 h-3 mr-1" />
                        Recomendado
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">Acceso Premium</CardTitle>
                    <CardDescription className="text-base">
                      La mejor experiencia con todas las ventajas exclusivas
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-primary text-xs">✓</span>
                        </div>
                        <span>Acceso instantáneo a todos los servidores</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-primary text-xs">✓</span>
                        </div>
                        <span>Pack exclusivo de mods personalizados</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-primary text-xs">✓</span>
                        </div>
                        <span>Modo Survival exclusivo sin restricciones</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-primary text-xs">✓</span>
                        </div>
                        <span>Soporte prioritario y asistencia dedicada</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-primary text-xs">✓</span>
                        </div>
                        <span>Hardware premium sin lag garantizado</span>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button asChild className="w-full" size="lg">
                        <Link href="/como-entrar">
                          Ver Cómo Acceder
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Free Option */}
              <motion.div variants={scaleIn}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">Acceso Gratuito</CardTitle>
                    <CardDescription className="text-base">
                      Comienza sin costo en nuestro servidor anárquico
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <span className="text-accent text-xs">✓</span>
                        </div>
                        <span>Acceso 100% gratuito sin pagos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <span className="text-accent text-xs">✓</span>
                        </div>
                        <span>Modo anárquico sin restricciones</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <span className="text-accent text-xs">✓</span>
                        </div>
                        <span>Comunidad activa y amigable</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <span className="text-accent text-xs">✓</span>
                        </div>
                        <span>Perfecto para probar y conocer</span>
                      </div>
                    </div>

                    <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 space-y-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm mb-1">IP en Discord</p>
                          <p className="text-xs text-muted-foreground">
                            Únete a nuestro Discord para obtener la IP del servidor gratuito
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full"
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
            </div>
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
            <Card className="border-primary/50 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
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

