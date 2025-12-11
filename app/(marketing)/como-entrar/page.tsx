"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SOCIAL_LINKS, EXTERNAL_LINKS, CONTACT_INFO, SERVER_CONFIG } from "@/lib/constants"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Gamepad2,
  Check,
  Crown,
  Users,
  DollarSign,
  MessageCircle,
  ExternalLink,
  Server,
  CreditCard,
  Sparkles,
} from "lucide-react"
import { fadeIn, slideUp, staggerContainer, scaleIn } from "@/lib/animations"

export default function ComoEntrarPage() {

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div variants={slideUp} className="space-y-4">
              <Badge variant="outline" className="px-4 py-2 text-base">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Guía de Acceso
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                ¿Cómo{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Entrar
                </span>
                ?
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Únete a nuestra comunidad y descubre dos formas de acceder: Premium con
                beneficios exclusivos o Gratuito para empezar tu aventura
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Access Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-500/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-12"
          >
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <Badge className="mb-2 bg-purple-500 hover:bg-purple-600">
                <Crown className="w-4 h-4 mr-2" />
                Servidores Premium
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                👑 Acceso Premium - ${SERVER_CONFIG.premiumPrice}/mes
              </h2>
              <p className="text-lg text-muted-foreground">
                Desbloquea +15 servidores con mods exclusivos y rendimiento increíble
              </p>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-purple-500/50 glass-card-premium">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-purple-400" />
                    Cómo Obtener Acceso Premium
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* PayPal destacado */}
                  <div className="p-6 bg-purple-500/10 rounded-xl border-2 border-purple-500/40 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full -translate-y-10 translate-x-10" />
                    <div className="relative space-y-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-6 h-6 text-purple-400" />
                        <span className="text-lg font-bold">Paso 1: Realiza el Pago</span>
                      </div>
                      <p className="text-muted-foreground">
                        Paga <strong className="text-purple-400">${SERVER_CONFIG.premiumPrice} USD al mes</strong> mediante PayPal:
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          asChild 
                          size="lg" 
                          className="bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/25"
                        >
                          <a
                            href={EXTERNAL_LINKS.paypal}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Pagar con PayPal - ${SERVER_CONFIG.premiumPrice} USD
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Link: <a href={EXTERNAL_LINKS.paypal} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline font-mono">paypal.me/WednerV</a>
                      </p>
                    </div>
                  </div>

                  {/* Otros métodos */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold">Otros métodos de pago:</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="font-medium mb-1">{CONTACT_INFO.adminCountry}</p>
                        <p className="text-sm text-muted-foreground">
                          SINPE, transferencia bancaria o efectivo
                        </p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="font-medium mb-1">Otros intercambios</p>
                        <p className="text-sm text-muted-foreground">
                          Se pueden aceptar otros tipos (consultar)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Paso 2 */}
                  <div className="p-4 bg-muted/30 rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Paso 2: Contacta al Admin</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Envía un mensaje a <strong>{CONTACT_INFO.adminDiscord}</strong> en Discord indicando que realizaste el pago.
                      Te añadirán a la whitelist y recibirás el pack de mods.
                    </p>
                  </div>

                  {/* Características */}
                  <div className="space-y-2 pt-4 border-t">
                    <p className="font-semibold mb-3">✨ Lo que obtienes:</p>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span>Acceso a +15 servidores premium</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span>Hasta 16GB RAM y 16 cores</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span>+1000 mods exclusivos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span>Backups automáticos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span>Soporte premium prioritario</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span>Rol admin en servidores</span>
                      </div>
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button asChild className="bg-purple-500 hover:bg-purple-600" size="lg">
                      <a href={EXTERNAL_LINKS.paypal} target="_blank" rel="noopener noreferrer">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Pagar con PayPal
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-purple-500/50" size="lg">
                      <a href="/servers">
                        <Server className="w-4 h-4 mr-2" />
                        Ver Servidores Premium
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Discord
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Free Server Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-12"
          >
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <Badge variant="secondary" className="mb-2">
                <Users className="w-4 h-4 mr-2" />
                Servidor Gratuito
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                🎮 Servidor Gratuito - ¡Sin costo!
              </h2>
              <p className="text-lg text-muted-foreground">
                Juega gratis con toda la comunidad. Compatible con Java y Bedrock.
              </p>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5 text-accent" />
                    Datos de Conexión
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* IP y Puerto destacados */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-6 bg-accent/10 rounded-xl border-2 border-accent/30 text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">IP del Servidor</p>
                      <p className="text-xl font-bold text-accent font-mono bg-background/50 px-4 py-3 rounded-lg">
                        Peque_Server21.aternos.me
                      </p>
                    </div>
                    <div className="p-6 bg-accent/10 rounded-xl border-2 border-accent/30 text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Puerto (Solo Bedrock)</p>
                      <p className="text-xl font-bold text-accent font-mono bg-background/50 px-4 py-3 rounded-lg">
                        34538
                      </p>
                    </div>
                  </div>

                  {/* Cómo unirse */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">📋 Cómo unirse:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <span className="font-bold text-accent">1</span>
                        </div>
                        <div>
                          <p className="font-medium">Abre Minecraft Java o Bedrock</p>
                          <p className="text-sm text-muted-foreground">Asegúrate de tener la versión para PC</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <span className="font-bold text-accent">2</span>
                        </div>
                        <div>
                          <p className="font-medium">Ve a Multijugador → Añadir servidor</p>
                          <p className="text-sm text-muted-foreground">En Java: &quot;Multijugador&quot; | En Bedrock: &quot;Servidores&quot; → &quot;Añadir servidor&quot;</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <span className="font-bold text-accent">3</span>
                        </div>
                        <div>
                          <p className="font-medium">Ingresa la IP (y puerto si es Bedrock)</p>
                          <p className="text-sm text-muted-foreground">
                            Java: Solo la IP | Bedrock: IP + Puerto 34538
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <span className="font-bold text-accent">4</span>
                        </div>
                        <div>
                          <p className="font-medium">¡Conéctate y juega!</p>
                          <p className="text-sm text-muted-foreground">Únete a Discord para ver si el servidor está abierto</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Características */}
                  <div className="grid sm:grid-cols-2 gap-2 text-sm pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Compatible Java y Bedrock</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Comunidad muy activa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Economía y protección anti-grief</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>PvP, minar, construir</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Mods de armas, bosses, autos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>100% gratis</span>
                    </div>
                  </div>

                  {/* Botón Discord */}
                  <div className="pt-4">
                    <Button asChild className="w-full" size="lg">
                      <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Unirse a Discord
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-12"
          >
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Resuelve tus dudas antes de unirte
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    ¿Qué versiones de Minecraft son compatibles?
                  </AccordionTrigger>
                  <AccordionContent>
                    Nuestros servidores soportan múltiples versiones de Minecraft. Los
                    servidores premium generalmente funcionan con versiones específicas
                    que se indican en el pack de mods. El servidor gratuito es compatible
                    con versiones más amplias. Consulta en Discord para la lista completa.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    ¿Puedo probar el servidor antes de pagar?
                  </AccordionTrigger>
                  <AccordionContent>
                    ¡Por supuesto! Puedes unirte primero al servidor gratuito para conocer 
                    nuestra comunidad y ver si te gusta el ambiente. La IP está arriba en 
                    esta misma página.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    ¿Puedo jugar desde consola?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, actualmente solo permitimos conexiones desde PC (Minecraft Java
                    Edition o Bedrock para PC). No se permite el acceso desde consolas
                    como PlayStation, Xbox o Nintendo Switch debido a limitaciones técnicas
                    con los mods.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    ¿El pago premium es recurrente?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, el pago no es automático. Cada {SERVER_CONFIG.subscriptionDays} días deberás renovar tu acceso
                    manualmente. Te enviaremos un recordatorio antes de que expire tu
                    membresía premium para que puedas decidir si quieres continuar.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    ¿Qué pasa si tengo problemas técnicos?
                  </AccordionTrigger>
                  <AccordionContent>
                    Nuestro equipo de soporte está disponible en Discord. Los usuarios
                    premium tienen soporte prioritario, pero ayudamos a todos los
                    miembros de la comunidad.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-accent/10 glass-card">
              <CardHeader className="text-center space-y-4 pb-6">
                <CardTitle className="text-3xl sm:text-4xl font-bold">
                  ¿Listo para Empezar?
                </CardTitle>
                <CardDescription className="text-lg">
                  Únete a nuestra comunidad y comienza tu aventura hoy mismo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pb-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button size="lg" className="w-full" asChild>
                    <a
                      href={SOCIAL_LINKS.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Unirse a Discord
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full bg-purple-500/10 border-purple-500/50 hover:bg-purple-500/20" asChild>
                    <a href={EXTERNAL_LINKS.paypal} target="_blank" rel="noopener noreferrer">
                      <Crown className="w-5 h-5 mr-2" />
                      Acceso Premium
                    </a>
                  </Button>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  ¿Tienes dudas? Contáctanos en Discord
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
