import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function TestThemePage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Gaming Theme Test</h1>
        <p className="text-muted-foreground">
          Tema gaming inspirado en Minecraft con colores verdes vibrantes
        </p>
      </div>

      {/* Color Palette */}
      <Card>
        <CardHeader>
          <CardTitle>Paleta de Colores</CardTitle>
          <CardDescription>Colores principales del tema gaming</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-primary" />
            <p className="text-sm font-medium">Primary</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-secondary" />
            <p className="text-sm font-medium">Secondary</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-accent" />
            <p className="text-sm font-medium">Accent</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-muted" />
            <p className="text-sm font-medium">Muted</p>
          </div>
        </CardContent>
      </Card>

      {/* Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Botones</CardTitle>
          <CardDescription>Variantes de botones con el tema gaming</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>Estados y categorías</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge className="bg-primary">Online</Badge>
        </CardContent>
      </Card>

      {/* Animations */}
      <Card>
        <CardHeader>
          <CardTitle>Animaciones Personalizadas</CardTitle>
          <CardDescription>Efectos gaming para la interfaz</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold"
                 style={{ animation: 'glow 2s ease-in-out infinite alternate' }}>
              Glow Effect
            </div>
            <p className="text-sm text-muted-foreground">animate-glow</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold"
                 style={{ animation: 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
              Pulse Slow
            </div>
            <p className="text-sm text-muted-foreground">animate-pulse-slow</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground font-bold"
                 style={{ animation: 'fade-in 0.5s ease-out' }}>
              Fade In
            </div>
            <p className="text-sm text-muted-foreground">animate-fade-in</p>
          </div>
        </CardContent>
      </Card>

      {/* Cards Demo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Servidor Survival</CardTitle>
            <CardDescription>
              <Badge className="bg-primary">Online</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">24/100 jugadores</p>
                  <p className="text-xs text-muted-foreground">play.example.com</p>
                </div>
              </div>
              <Button className="w-full">Unirse</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Servidor Creative</CardTitle>
            <CardDescription>
              <Badge variant="secondary">Mantenimiento</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">0/50 jugadores</p>
                  <p className="text-xs text-muted-foreground">creative.example.com</p>
                </div>
              </div>
              <Button className="w-full" variant="secondary">Offline</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Servidor Minijuegos</CardTitle>
            <CardDescription>
              <Badge className="bg-accent text-accent-foreground">Popular</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">89/100 jugadores</p>
                  <p className="text-xs text-muted-foreground">games.example.com</p>
                </div>
              </div>
              <Button className="w-full">Unirse</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dark Mode Toggle Instruction */}
      <Card>
        <CardHeader>
          <CardTitle>Toggle Dark Mode</CardTitle>
          <CardDescription>
            Agrega la clase <code className="px-2 py-1 rounded bg-muted">dark</code> al elemento <code className="px-2 py-1 rounded bg-muted">html</code> para ver el modo oscuro
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
