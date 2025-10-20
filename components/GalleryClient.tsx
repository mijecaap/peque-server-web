'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { GalleryItem } from '@/types/sanity'
import { urlForImage } from '@/lib/sanity'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ImageIcon } from 'lucide-react'

interface GalleryClientProps {
  galleries: GalleryItem[]
}

// Mapeo de categorías
const categoryLabels: Record<string, string> = {
  construcciones: 'Construcciones',
  eventos: 'Eventos',
  comunidad: 'Comunidad',
  mods: 'Mods y Recursos',
  screenshots: 'Screenshots',
  otros: 'Otros',
}

const categoryColors: Record<string, string> = {
  construcciones: 'bg-blue-500/10 text-blue-500',
  eventos: 'bg-purple-500/10 text-purple-500',
  comunidad: 'bg-green-500/10 text-green-500',
  mods: 'bg-orange-500/10 text-orange-500',
  screenshots: 'bg-pink-500/10 text-pink-500',
  otros: 'bg-gray-500/10 text-gray-500',
}

export function GalleryClient({ galleries }: GalleryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filtrar galerías por categoría
  const filteredGalleries = selectedCategory
    ? galleries.filter((gallery) => gallery.category === selectedCategory)
    : galleries

  // Obtener categorías únicas
  const uniqueCategories = Array.from(
    new Set(galleries.map((g) => g.category).filter(Boolean))
  )

  return (
    <div className="space-y-8">
      {/* Filtros de Categoría */}
      {uniqueCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge
            variant={selectedCategory === null ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            Todas
          </Badge>
          {uniqueCategories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category || null)}
            >
              {categoryLabels[category as string] || category}
            </Badge>
          ))}
        </div>
      )}

      {/* Grid de Galerías */}
      {filteredGalleries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGalleries.map((gallery) => (
            <PhotoProvider
              key={gallery._id}
              maskOpacity={0.9}
              speed={() => 400}
              easing={() => 'cubic-bezier(0.25, 0.8, 0.25, 1)'}
              loop={true}
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  {/* Categoría y Badge de Destacado */}
                  <div className="flex items-center justify-between mb-2">
                    {gallery.category && (
                      <Badge
                        className={
                          categoryColors[gallery.category] || 'bg-gray-500/10 text-gray-500'
                        }
                        variant="secondary"
                      >
                        {categoryLabels[gallery.category] || gallery.category}
                      </Badge>
                    )}
                    {gallery.featured && (
                      <Badge variant="default" className="bg-yellow-500/10 text-yellow-600">
                        ⭐ Destacada
                      </Badge>
                    )}
                  </div>

                  {/* Título */}
                  <CardTitle className="line-clamp-1">{gallery.title}</CardTitle>

                  {/* Descripción */}
                  {gallery.description && (
                    <CardDescription className="line-clamp-2">
                      {gallery.description}
                    </CardDescription>
                  )}

                  {/* Contador de imágenes */}
                  {gallery.images && gallery.images.length > 0 && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <ImageIcon className="w-4 h-4" />
                      {gallery.images.length} {gallery.images.length === 1 ? 'imagen' : 'imágenes'}
                    </div>
                  )}
                </CardHeader>

                <CardContent>
                  {/* Grid de Imágenes con Lightbox */}
                  {gallery.images && gallery.images.length > 0 ? (
                    <div className="grid grid-cols-3 gap-2">
                      {gallery.images.slice(0, 6).map((image, index) => {
                        const imageUrl = urlForImage(image, 400, 400)
                        const fullImageUrl = urlForImage(image, 1920, 1080)

                        return (
                          <PhotoView key={index} src={fullImageUrl}>
                            <div className="relative aspect-square overflow-hidden rounded cursor-pointer group">
                              <Image
                                src={imageUrl}
                                alt={image.alt || `${gallery.title} - Imagen ${index + 1}`}
                                fill
                                className="object-cover transition-transform group-hover:scale-110"
                                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 15vw"
                              />
                              {/* Overlay en hover */}
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ImageIcon className="w-8 h-8 text-white" />
                              </div>
                            </div>
                          </PhotoView>
                        )
                      })}

                      {/* Indicador de más imágenes */}
                      {gallery.images.length > 6 && (
                        <div className="relative aspect-square overflow-hidden rounded bg-muted flex items-center justify-center">
                          <span className="text-2xl font-bold text-muted-foreground">
                            +{gallery.images.length - 6}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-muted-foreground">
                      No hay imágenes disponibles
                    </div>
                  )}
                </CardContent>
              </Card>
            </PhotoProvider>
          ))}
        </div>
      ) : (
        /* Estado vacío */
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">
            No hay galerías en esta categoría.
          </p>
        </div>
      )}
    </div>
  )
}
