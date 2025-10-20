"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Monitor,
  Gamepad2,
  Check,
  Crown,
  Users,
  Zap,
  Shield,
  DollarSign,
  MessageCircle,
  ExternalLink,
  AlertCircle,
  Server,
} from "lucide-react"
import { fadeIn, slideUp, staggerContainer, staggerItem, scaleIn } from "@/lib/animations"

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

      {/* Access Types Comparison */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto space-y-12"
          >
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Elige Tu Modalidad de Acceso
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos dos tipos de servidores para diferentes experiencias de juego
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Premium Card */}
              <motion.div variants={scaleIn}>
                <Card className="h-full border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Crown className="w-8 h-8 text-primary animate-pulse-slow" />
                  </div>
                  <CardHeader className="space-y-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Crown className="w-6 h-6 text-primary" />
                        Servidores Premium
                      </CardTitle>
                      <CardDescription className="text-base">
                        Mundos exclusivos con mejor rendimiento, más contenido y mods únicos
                      </CardDescription>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$4</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>Acceso a todos los servidores premium (7+ servidores)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>Pack exclusivo de mods personalizados</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>Mejor rendimiento y estabilidad</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>Modo Survival exclusivo</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>Lista blanca (whitelist) para mejor comunidad</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>Soporte prioritario</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="w-full" asChild>
                        <a href="/servers">
                          <Server className="w-4 h-4 mr-2" />
                          Ver Servidores Premium
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Free/Anarchic Card */}
              <motion.div variants={scaleIn}>
                <Card className="h-full">
                  <CardHeader className="space-y-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Users className="w-6 h-6 text-accent" />
                        Servidor Gratuito (Anárquico)
                      </CardTitle>
                      <CardDescription className="text-base">
                        Experiencia libre sin reglas para explorar y sobrevivir
                      </CardDescription>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">Gratis</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Acceso completamente gratuito</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Modo anárquico sin restricciones</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Ideal para comenzar y probar</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Únete a la comunidad en Discord</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 space-y-3">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium mb-1">IP en Discord</p>
                            <p className="text-sm text-muted-foreground">
                              La IP del servidor gratuito se revela únicamente al unirte a
                              nuestro Discord oficial
                            </p>
                          </div>
                        </div>
                        <Button className="w-full" variant="outline" asChild>
                          <a
                            href="https://discord.gg/tu-servidor"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Unirse a Discord
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Access Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-12"
          >
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <Badge variant="outline" className="mb-2">
                <Crown className="w-4 h-4 mr-2" />
                Premium
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                ¿Cómo Acceder a los Servidores Premium?
              </h2>
              <p className="text-lg text-muted-foreground">
                Sigue estos sencillos pasos para unirte a la experiencia premium
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-6">
              {/* Step 1 */}
              <motion.div variants={staggerItem}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">1</span>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">Contacta al Administrador</CardTitle>
                        <CardDescription className="text-base">
                          Envía un mensaje directo a <strong>@wedner THE JOSE</strong> en
                          Discord indicando tu interés en unirte al servidor premium
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              {/* Step 2 */}
              <motion.div variants={staggerItem}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">2</span>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <CardTitle className="mb-2">Realiza el Pago</CardTitle>
                          <CardDescription className="text-base mb-4">
                            El costo es de <strong>$4 USD por mes</strong>. Métodos de pago
                            disponibles:
                          </CardDescription>
                        </div>
                        
                        <div className="space-y-3 pl-4">
                          <div className="flex items-start gap-3">
                            <DollarSign className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium mb-1">PayPal (Internacional)</p>
                              <a
                                href="https://www.paypal.com/paypalme/WednerV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                              >
                                paypal.me/WednerV
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <DollarSign className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium mb-1">Costa Rica 🇨🇷</p>
                              <p className="text-sm text-muted-foreground">
                                SINPE, transferencia bancaria o efectivo (en persona)
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <DollarSign className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium mb-1">Otros intercambios</p>
                              <p className="text-sm text-muted-foreground">
                                Se pueden aceptar otros tipos de intercambio (consultar)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              {/* Step 3 */}
              <motion.div variants={staggerItem}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">3</span>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">
                          Activación de Lista Blanca
                        </CardTitle>
                        <CardDescription className="text-base">
                          Una vez confirmado el pago, serás añadido a la lista blanca
                          (whitelist) del servidor, lo que te dará acceso inmediato
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              {/* Step 4 */}
              <motion.div variants={staggerItem}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">4</span>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">Recibe el Pack de Mods</CardTitle>
                        <CardDescription className="text-base">
                          Recibirás el pack de mods exclusivos junto con las instrucciones
                          de instalación para que puedas disfrutar de todos los beneficios
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <p className="font-medium text-lg">Notas Importantes:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>
                            Un solo pago te da acceso a todos los servidores premium durante
                            30 días
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>
                            Por favor, no compartas los mods con otros jugadores que no sean
                            premium
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>
                            El acceso se renueva cada mes. Recibirás un recordatorio antes
                            del vencimiento
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* General Steps (How to Join) */}
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
              <h2 className="text-3xl sm:text-4xl font-bold">
                Pasos Generales para Unirte
              </h2>
              <p className="text-lg text-muted-foreground">
                Una vez tengas la IP, sigue estas instrucciones para conectarte
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.div variants={staggerItem}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Monitor className="w-8 h-8 text-primary shrink-0" />
                      <div className="flex-1">
                        <CardTitle className="mb-2">
                          1. Asegúrate de tener Minecraft
                        </CardTitle>
                        <CardDescription className="text-base space-y-2">
                          <p>
                            Necesitas <strong>Minecraft Java Edition</strong> o{" "}
                            <strong>Minecraft Bedrock para PC</strong>
                          </p>
                          <p className="text-destructive font-medium">
                            ⚠️ No se permite el acceso desde consolas (PlayStation, Xbox,
                            Switch)
                          </p>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={staggerItem}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Gamepad2 className="w-8 h-8 text-primary shrink-0" />
                      <div className="flex-1">
                        <CardTitle className="mb-2">
                          2. Abre Minecraft y ve a Multijugador
                        </CardTitle>
                        <CardDescription className="text-base">
                          <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>Inicia Minecraft en tu PC</li>
                            <li>Selecciona "Multijugador" en el menú principal</li>
                            <li>Haz clic en "Añadir servidor"</li>
                          </ol>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={staggerItem}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Zap className="w-8 h-8 text-primary shrink-0" />
                      <div className="flex-1">
                        <CardTitle className="mb-2">
                          3. Añade la IP del servidor
                        </CardTitle>
                        <CardDescription className="text-base space-y-2">
                          <p>
                            Ingresa la IP correspondiente (Premium o Gratuita) en el campo
                            "Dirección del servidor"
                          </p>
                          <p>Dale un nombre al servidor (ej: "PequeServer Premium")</p>
                          <p>Haz clic en "Listo"</p>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={staggerItem}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Check className="w-8 h-8 text-primary shrink-0" />
                      <div className="flex-1">
                        <CardTitle className="mb-2">4. ¡Conéctate y juega!</CardTitle>
                        <CardDescription className="text-base">
                          Selecciona el servidor de la lista y haz clic en "Conectarse".
                          ¡Bienvenido a PequeServer!
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
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
                    ¡Por supuesto! Puedes unirte primero al servidor gratuito (anárquico)
                    para conocer nuestra comunidad y ver si te gusta el ambiente. La IP
                    del servidor gratuito está disponible en nuestro Discord.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    ¿Hay reglas en los servidores?
                  </AccordionTrigger>
                  <AccordionContent>
                    El servidor gratuito es anárquico, por lo que tiene reglas mínimas. Los
                    servidores premium tienen reglas básicas de convivencia para mantener
                    una mejor experiencia de juego. Recibirás las reglas completas al
                    unirte.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    ¿Qué pasa si tengo problemas técnicos?
                  </AccordionTrigger>
                  <AccordionContent>
                    Nuestro equipo de soporte está disponible en Discord. Los usuarios
                    premium tienen soporte prioritario, pero ayudamos a todos los
                    miembros de la comunidad. Puedes crear un ticket en Discord o escribir
                    en el canal de soporte.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
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

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    ¿El pago premium es recurrente?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, el pago no es automático. Cada 30 días deberás renovar tu acceso
                    manualmente. Te enviaremos un recordatorio antes de que expire tu
                    membresía premium para que puedas decidir si quieres continuar.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    ¿Puedo compartir los mods con amigos?
                  </AccordionTrigger>
                  <AccordionContent>
                    Por favor, no compartas los mods exclusivos con jugadores que no sean
                    premium. Esto nos ayuda a mantener la calidad del servicio y continuar
                    desarrollando contenido único. Si tus amigos quieren unirse, pueden
                    hacer su propio pago para obtener acceso.
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
            <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardHeader className="text-center space-y-4 pb-6">
                <CardTitle className="text-3xl sm:text-4xl font-bold">
                  ¿Listo para Empezar?
                </CardTitle>
                <CardDescription className="text-lg">
                  Únete a nuestra comunidad y comienza tu aventura en PequeServer hoy
                  mismo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pb-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button size="lg" className="w-full" asChild>
                    <a
                      href="https://discord.gg/tu-servidor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Unirse a Discord
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a href="/servers">
                      <Gamepad2 className="w-5 h-5 mr-2" />
                      Ver Servidores
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
