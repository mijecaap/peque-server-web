import { Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface PlayerCountProps {
  current: number
  max: number
  players?: string[]
  className?: string
  showProgress?: boolean
  showAvatars?: boolean
}

/**
 * Componente PlayerCount
 * Muestra el conteo de jugadores con barra de progreso y avatares opcionales
 * 
 * @param current - Número actual de jugadores
 * @param max - Número máximo de jugadores
 * @param players - Lista opcional de nombres de jugadores
 * @param className - Clases CSS adicionales
 * @param showProgress - Mostrar barra de progreso (default: true)
 * @param showAvatars - Mostrar avatares de jugadores (default: true)
 */
export function PlayerCount({
  current,
  max,
  players = [],
  className,
  showProgress = true,
  showAvatars = true,
}: PlayerCountProps) {
  const percentage = max > 0 ? (current / max) * 100 : 0
  const hasPlayers = players.length > 0
  const displayedPlayers = players.slice(0, 3)
  const remainingCount = players.length - 3

  /**
   * Obtiene el color de la barra según el porcentaje
   */
  const getProgressColor = () => {
    if (percentage >= 90) return 'bg-red-500'
    if (percentage >= 70) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  return (
    <div className={cn('space-y-2', className)}>
      {/* Header: Icono, Contador y Avatares */}
      <div className="flex items-center justify-between gap-3">
        {/* Icono y Contador */}
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">
            <span className="text-foreground">{current}</span>
            <span className="text-muted-foreground">/{max}</span>
          </span>
        </div>

        {/* Avatar Group */}
        {showAvatars && hasPlayers && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex -space-x-2 cursor-pointer">
                  {displayedPlayers.map((player, index) => (
                    <Avatar
                      key={index}
                      className="w-6 h-6 border-2 border-background transition-transform hover:scale-110 hover:z-10"
                    >
                      <AvatarImage
                        src={`https://mc-heads.net/avatar/${player}/32`}
                        alt={player}
                      />
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {player.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {remainingCount > 0 && (
                    <Avatar className="w-6 h-6 border-2 border-background bg-primary/10">
                      <AvatarFallback className="text-xs text-primary font-semibold">
                        +{remainingCount}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Jugadores conectados:</p>
                  <ul className="text-xs space-y-0.5">
                    {players.map((player, index) => (
                      <li key={index} className="text-muted-foreground">
                        • {player}
                      </li>
                    ))}
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      {/* Barra de Progreso */}
      {showProgress && (
        <div className="space-y-1">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={cn(
                'h-full transition-all duration-300',
                getProgressColor()
              )}
              style={{ width: `${percentage}%` }}
            />
          </div>
          {/* Porcentaje y Estado */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{Math.round(percentage)}% lleno</span>
            {percentage >= 90 && (
              <span className="text-red-500 font-medium">Casi lleno</span>
            )}
            {percentage === 0 && (
              <span className="text-gray-500">Sin jugadores</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
