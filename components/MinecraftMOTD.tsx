'use client'

import { autoToHTML } from '@sfirew/minecraft-motd-parser'
import { useMemo } from 'react'

interface MinecraftMOTDProps {
  motd: string
  className?: string
}

/**
 * Componente MinecraftMOTD
 * Convierte el MOTD de Minecraft (con códigos §) a HTML formateado
 * con el estilo de consola de Minecraft (fondo negro)
 * 
 * @example
 * <MinecraftMOTD motd="§aGreen §lBold §rReset §cRed" />
 */
export function MinecraftMOTD({ motd, className }: MinecraftMOTDProps) {
  // Convertir el MOTD a HTML usando la librería
  const htmlContent = useMemo(() => {
    try {
      return autoToHTML(motd)
    } catch (error) {
      console.error('Error parsing MOTD:', error)
      // Fallback: retornar el texto sin formatear
      return motd.replace(/§[0-9a-fk-or]/gi, '')
    }
  }, [motd])

  return (
    <div 
      className={`${className} px-3 py-2 rounded-md font-mono text-sm`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        textShadow: '2px 2px 0px rgba(0, 0, 0, 0.25)',
        lineHeight: '1.5'
      }}
    />
  )
}
