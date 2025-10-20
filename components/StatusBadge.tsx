import { Badge } from '@/components/ui/badge'
import { ServerStatusLabel } from '@/types/exaroton'
import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  status: ServerStatusLabel
  className?: string
  showIcon?: boolean
}

/**
 * Mapeo de colores y estilos para cada status
 */
const statusConfig: Record<
  ServerStatusLabel,
  {
    color: string
    bgColor: string
    label: string
    pulseClass?: string
  }
> = {
  online: {
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    label: 'Online',
    pulseClass: 'animate-pulse',
  },
  offline: {
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    label: 'Offline',
  },
  starting: {
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    label: 'Iniciando',
    pulseClass: 'animate-pulse',
  },
  stopping: {
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    label: 'Deteniendo',
  },
  restarting: {
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    label: 'Reiniciando',
    pulseClass: 'animate-pulse',
  },
  saving: {
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    label: 'Guardando',
  },
  loading: {
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    label: 'Cargando',
  },
  crashed: {
    color: 'text-red-600',
    bgColor: 'bg-red-600/10',
    label: 'Caído',
  },
  pending: {
    color: 'text-gray-500',
    bgColor: 'bg-gray-500/10',
    label: 'Pendiente',
  },
  transferring: {
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    label: 'Transfiriendo',
  },
  preparing: {
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    label: 'Preparando',
  },
}

/**
 * Componente StatusBadge
 * Muestra un badge visual con el estado del servidor
 * 
 * @param status - Estado del servidor
 * @param className - Clases CSS adicionales
 * @param showIcon - Mostrar círculo indicador (default: true)
 */
export function StatusBadge({ 
  status, 
  className,
  showIcon = true 
}: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <Badge
      variant="secondary"
      className={cn(
        'flex items-center gap-1.5 whitespace-nowrap font-medium',
        config.color,
        config.bgColor,
        className
      )}
    >
      {showIcon && (
        <span
          className={cn(
            'w-2 h-2 rounded-full',
            config.pulseClass
          )}
          style={{ backgroundColor: 'currentColor' }}
          aria-label={`Estado: ${config.label}`}
        />
      )}
      <span>{config.label}</span>
    </Badge>
  )
}
