"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Users, Calendar, Zap } from "lucide-react"
import { useServers } from "@/lib/hooks/useServers"

export default function Home() {
  // Fetch real server data
  const { servers, isLoading: serversLoading, error: serversError } = useServers()

  // Calculate stats from real data
  const totalPlayers = servers?.reduce((acc, server) => acc + server.players.count, 0) || 0
  const totalServers = servers?.length || 0
  const maxPlayers = servers?.reduce((acc, server) => acc + server.players.max, 0) || 0

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const features = [
    {
      icon: Gamepad2,
      title: "Mods Únicos",
      description: "Experimenta con mods exclusivos cuidadosamente seleccionados para mejorar tu gameplay.",
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Únete a una comunidad vibrante de jugadores apasionados por Minecraft.",
    },
    {
      icon: Calendar,
      title: "Eventos Semanales",
      description: "Participa en eventos especiales, torneos y desafíos con premios increíbles.",
    },
    {
      icon: Zap,
      title: "Alto Rendimiento",
      description: "Servidores optimizados con hardware de última generación para una experiencia sin lag.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-8"
          >
            <motion.div variants={fadeIn} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Bienvenido a{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  PequeServer
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                La mejor experiencia de Minecraft con mods únicos, comunidad activa y
                eventos semanales
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/servers">Ver Servidores</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <a
                  href="https://discord.gg/tu-servidor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unirse a Discord
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                ¿Por qué elegirnos?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos una experiencia única que combina lo mejor del Minecraft
                clásico con innovaciones modernas
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div key={index} variants={fadeIn}>
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                      <CardHeader>
                        <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
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

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Nuestra Comunidad
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Formamos parte de una comunidad en constante crecimiento
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeIn}>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {serversLoading ? (
                        <span className="animate-pulse">...</span>
                      ) : serversError ? (
                        "N/A"
                      ) : (
                        `${totalPlayers}/${maxPlayers}`
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Jugadores Activos
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {serversLoading ? (
                        <span className="animate-pulse">...</span>
                      ) : serversError ? (
                        "N/A"
                      ) : (
                        totalServers
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Servidores Disponibles
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      2+
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">Años Online</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="text-center space-y-4 pb-6">
                <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  ¿Listo para la aventura?
                </CardTitle>
                <CardDescription className="text-lg">
                  Únete ahora y comienza a jugar con nosotros. Es gratis y fácil de empezar.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/servers">Explorar Servidores</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8"
                >
                  <Link href="/news">Ver Noticias</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

