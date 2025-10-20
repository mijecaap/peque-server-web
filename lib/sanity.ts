import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

// Configuración del cliente de Sanity
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01', // Fecha de la API
  useCdn: true, // `true` para usar CDN (mejor performance), `false` para datos en tiempo real
})

// Helper para construir URLs de imágenes optimizadas
const builder = imageUrlBuilder(client)

/**
 * Genera una URL optimizada para imágenes de Sanity
 * @param source - Objeto de imagen de Sanity
 * @returns Builder de URL de imagen
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Genera una URL de imagen con parámetros predeterminados
 * @param source - Objeto de imagen de Sanity
 * @param width - Ancho deseado (opcional)
 * @param height - Alto deseado (opcional)
 * @returns URL de imagen optimizada
 */
export function urlForImage(
  source: SanityImageSource,
  width?: number,
  height?: number
): string {
  let image = urlFor(source).auto('format').fit('max')

  if (width) {
    image = image.width(width)
  }

  if (height) {
    image = image.height(height)
  }

  return image.url()
}

/**
 * Genera una URL de imagen con calidad específica
 * @param source - Objeto de imagen de Sanity
 * @param quality - Calidad de la imagen (1-100)
 * @returns URL de imagen optimizada
 */
export function urlForImageWithQuality(
  source: SanityImageSource,
  quality: number = 80
): string {
  return urlFor(source).auto('format').quality(quality).url()
}
