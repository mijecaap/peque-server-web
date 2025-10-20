'use client'

import { useState, useMemo } from 'react'
import { useServers } from '@/lib/hooks/useServers'
import { ServerCard } from '@/components/ServerCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { RefreshCw, Search, Server, AlertCircle } from 'lucide-react'
import { getStatusLabel } from '@/types/exaroton'
import { motion } from 'framer-motion'

type FilterType = 'all' | 'online' | 'offline'

export default function ServersPage() {
  const { servers, error, isLoading, isValidating, mutate } = useServers()
  const [filter, setFilter] = useState<FilterType>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  // Filtrar servidores
  const filteredServers = useMemo(() => {
    if (!servers) return []

    let filtered = servers

    // Filtro por estado
    if (filter === 'online') {
      filtered = filtered.filter((s) => s.status === 1)
    } else if (filter === 'offline') {
      filtered = filtered.filter((s) => s.status === 0)
    }

    // Filtro por búsqueda
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.address.toLowerCase().includes(query) ||
          s.motd?.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [servers, filter, searchQuery])

  // Contadores
  const onlineCount = servers?.filter((s) => s.status === 1).length || 0
  const offlineCount = servers?.filter((s) => s.status === 0).length || 0
  const totalCount = servers?.length || 0

  // Refrescar manual
  const handleRefresh = async () => {
    await mutate()
    setLastUpdate(new Date())
  }

  // Formatear timestamp
  const formatLastUpdate = () => {
    const now = new Date()
    const diff = Math.floor((now.getTime() - lastUpdate.getTime()) / 1000)

    if (diff < 60) return 'Hace unos segundos'
    if (diff < 3600) return `Hace ${Math.floor(diff / 60)} minutos`
    return `Hace ${Math.floor(diff / 3600)} horas`
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Servidores
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Estado en tiempo real de nuestros servidores de Minecraft
        </p>
      </div>

      {/* Stats Cards */}
      {!isLoading && servers && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">{totalCount}</p>
                </div>
                <Server className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Online</p>
                  <p className="text-2xl font-bold text-green-500">{onlineCount}</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Offline</p>
                  <p className="text-2xl font-bold text-red-500">{offlineCount}</p>
                </div>
                <div className="w-3 h-3 bg-red-500 rounded-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Filtros y Búsqueda */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Búsqueda */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por nombre, dirección o MOTD..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filtros */}
        <div className="flex gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            Todos
            {totalCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {totalCount}
              </Badge>
            )}
          </Button>
          <Button
            variant={filter === 'online' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('online')}
          >
            Online
            {onlineCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {onlineCount}
              </Badge>
            )}
          </Button>
          <Button
            variant={filter === 'offline' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('offline')}
          >
            Offline
            {offlineCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {offlineCount}
              </Badge>
            )}
          </Button>
        </div>

        {/* Botón Refrescar */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          disabled={isValidating}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isValidating ? 'animate-spin' : ''}`} />
          Refrescar
        </Button>
      </div>

      {/* Última actualización */}
      {!isLoading && servers && (
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
          <span>Última actualización: {formatLastUpdate()}</span>
          {isValidating && (
            <Badge variant="secondary" className="animate-pulse">
              Actualizando...
            </Badge>
          )}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <Skeleton className="w-10 h-10 rounded-lg" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                  <Skeleton className="h-6 w-16" />
                </div>
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
                <div className="space-y-2">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <Card className="border-destructive">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 text-destructive">
              <AlertCircle className="w-6 h-6" />
              <div>
                <p className="font-semibold">Error al cargar los servidores</p>
                <p className="text-sm text-muted-foreground">
                  {error.message || 'No se pudo conectar con el servidor. Intenta nuevamente.'}
                </p>
              </div>
            </div>
            <Button onClick={handleRefresh} variant="outline" className="mt-4">
              <RefreshCw className="w-4 h-4 mr-2" />
              Reintentar
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Servidores Grid */}
      {!isLoading && !error && filteredServers.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServers.map((server, index) => (
            <motion.div
              key={server.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ServerCard server={server} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Empty State */}
      {!isLoading && !error && filteredServers.length === 0 && (
        <Card>
          <CardContent className="pt-12 pb-12">
            <div className="text-center">
              <Server className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No se encontraron servidores</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {searchQuery
                  ? 'Intenta con otro término de búsqueda'
                  : filter !== 'all'
                    ? 'No hay servidores con este filtro'
                    : 'No hay servidores disponibles en este momento'}
              </p>
              {(searchQuery || filter !== 'all') && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setFilter('all')
                  }}
                >
                  Limpiar filtros
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
