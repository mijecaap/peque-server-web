import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { galleryQuery } from '@/lib/sanity-queries'
import { GalleryItem } from '@/types/sanity'
import { GalleryClient } from '@/components/GalleryClient'

// Revalidar cada 60 segundos (ISR)
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Galería | PequeServer',
  description: 'Explora las mejores construcciones, eventos y momentos de nuestra comunidad de Minecraft.',
  openGraph: {
    title: 'Galería | PequeServer',
    description: 'Explora las mejores construcciones, eventos y momentos de nuestra comunidad de Minecraft.',
    type: 'website',
  },
}

export default async function GalleryPage() {
  // Fetch de galerías desde Sanity
  const galleries: GalleryItem[] = await client.fetch(galleryQuery)

  console.log('Fetched galleries:', galleries)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Galería
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Descubre las construcciones épicas, eventos memorables y los mejores momentos de nuestra comunidad
        </p>
      </div>

      {/* Galería con Client Component */}
      {galleries.length > 0 ? (
        <GalleryClient galleries={galleries} />
      ) : (
        /* Estado vacío */
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">
            No hay galerías disponibles en este momento.
          </p>
        </div>
      )}
    </div>
  )
}
