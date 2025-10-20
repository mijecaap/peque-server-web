'use client'

import { useState } from 'react'
import { ExarotonServer, getStatusLabel } from '@/types/exaroton'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Copy, 
  Check, 
  Server as ServerIcon, 
  Users, 
  Cpu, 
  HardDrive,
  ExternalLink 
} from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MinecraftMOTD } from '@/components/MinecraftMOTD'

interface ServerCardProps {
  server: ExarotonServer
  className?: string
}

/**
 * Mapeo de colores para cada status
 */
const statusColors = {
  offline: 'text-red-500 bg-red-500/10',
  online: 'text-green-500 bg-green-500/10',
  starting: 'text-yellow-500 bg-yellow-500/10',
  stopping: 'text-orange-500 bg-orange-500/10',
  restarting: 'text-blue-500 bg-blue-500/10',
  saving: 'text-purple-500 bg-purple-500/10',
  loading: 'text-blue-500 bg-blue-500/10',
  crashed: 'text-red-600 bg-red-600/10',
  pending: 'text-gray-500 bg-gray-500/10',
  transferring: 'text-cyan-500 bg-cyan-500/10',
  preparing: 'text-indigo-500 bg-indigo-500/10',
}

/**
 * Componente ServerCard
 * Muestra información detallada de un servidor de Exaroton
 */
export function ServerCard({ server, className }: ServerCardProps) {
  const [copied, setCopied] = useState(false)
  const statusLabel = getStatusLabel(server.status)
  const isOnline = server.status === 1

  // Construir la dirección completa del servidor
  const serverAddress = server.port 
    ? `${server.address}:${server.port}` 
    : server.address

  /**
   * Copia la IP del servidor al clipboard
   */
  const handleCopyIP = async () => {
    try {
      await navigator.clipboard.writeText(serverAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className={className}
    >
      <Card className="h-full overflow-hidden transition-all hover:shadow-xl hover:border-primary/50">
        <CardHeader>
          {/* Header con nombre y status */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="p-2 rounded-lg bg-primary/10">
                <ServerIcon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="truncate">{server.name}</CardTitle>
                <CardDescription className="truncate">{server.address}</CardDescription>
              </div>
            </div>
            
            {/* Status Badge */}
            <Badge 
              variant="secondary"
              className={cn(
                'flex items-center gap-1.5 whitespace-nowrap',
                statusColors[statusLabel]
              )}
            >
              <span 
                className={cn(
                  'w-2 h-2 rounded-full',
                  isOnline && 'animate-pulse'
                )}
                style={{ backgroundColor: 'currentColor' }}
              />
              {statusLabel.charAt(0).toUpperCase() + statusLabel.slice(1)}
            </Badge>
          </div>

          {/* MOTD */}
          {server.motd && (
            <MinecraftMOTD 
              motd={server.motd}
              className="mt-2 line-clamp-2"
            />
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Jugadores */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Jugadores</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Avatar Group si hay jugadores */}
              {server.players.list && server.players.list.length > 0 ? (
                <div className="flex -space-x-2">
                  {server.players.list.slice(0, 3).map((player, index) => (
                    <Avatar key={index} className="w-6 h-6 border-2 border-background">
                      <AvatarImage 
                        src={`https://mc-heads.net/avatar/${player}/32`}
                        alt={player}
                      />
                      <AvatarFallback className="text-xs">
                        {player.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {server.players.list.length > 3 && (
                    <Avatar className="w-6 h-6 border-2 border-background bg-primary/10">
                      <AvatarFallback className="text-xs text-primary">
                        +{server.players.list.length - 3}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ) : null}
              <Badge variant="outline">
                {server.players.count}/{server.players.max}
              </Badge>
            </div>
          </div>

          {/* Software y Versión */}
          {server.software && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Software</span>
              </div>
              <div className="text-sm text-muted-foreground">
                {server.software.name} {server.software.version}
              </div>
            </div>
          )}

          {/* Host (si está disponible) */}
          {server.host && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Host</span>
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                {server.host}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex gap-2">
          {/* Botón Copiar IP */}
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={handleCopyIP}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copiado
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copiar IP
              </>
            )}
          </Button>

          {/* Botón Unirse (solo si está online) */}
          {isOnline && (
            <Button
              variant="default"
              size="sm"
              className="flex-1"
              asChild
            >
              <a 
                href={`minecraft://?server=${server.address}&port=${server.port || 25565}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Unirse
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
