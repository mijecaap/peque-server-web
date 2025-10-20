/**
 * Tipos TypeScript para documentos de Sanity CMS
 */

// Tipo base para documentos de Sanity
export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

// Tipo para slugs de Sanity
export interface Slug {
  _type: 'slug'
  current: string
}

// Tipo para imágenes de Sanity
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  alt?: string
  caption?: string
}

// Tipo para bloques de texto portable (contenido rico)
export interface PortableTextBlock {
  _type: 'block'
  _key: string
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
  children: Array<{
    _type: 'span'
    _key: string
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: string
    [key: string]: any
  }>
  listItem?: 'bullet' | 'number'
  level?: number
}

// Tipo para imágenes dentro del contenido portable
export interface PortableTextImage {
  _type: 'image'
  _key: string
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

// Union type para contenido portable (bloques + imágenes)
export type PortableTextContent = PortableTextBlock | PortableTextImage

/**
 * Interface para artículos de noticias
 */
export interface NewsArticle extends SanityDocument {
  _type: 'news'
  title: string
  slug: Slug
  mainImage?: SanityImage
  category: 'actualizacion' | 'evento' | 'anuncio' | 'comunidad'
  publishedAt: string
  author: string
  excerpt: string
  body: PortableTextContent[]
}

/**
 * Interface para items de galería
 */
export interface GalleryItem extends SanityDocument {
  _type: 'gallery'
  title: string
  description?: string
  images: SanityImage[]
  category?: 'construcciones' | 'eventos' | 'comunidad' | 'mods' | 'screenshots' | 'otros'
  createdAt: string
  featured?: boolean
}

/**
 * Tipo para respuestas de queries que pueden retornar null
 */
export type MaybeNull<T> = T | null

/**
 * Tipo para arrays de documentos
 */
export type DocumentArray<T> = T[]

/**
 * Interface para metadata de imágenes con URLs construidas
 */
export interface ProcessedImage {
  url: string
  alt?: string
  caption?: string
  width?: number
  height?: number
}

/**
 * Interface para artículos procesados (con imágenes optimizadas)
 */
export interface ProcessedNewsArticle extends Omit<NewsArticle, 'mainImage'> {
  mainImage?: ProcessedImage
}

/**
 * Interface para galerías procesadas (con imágenes optimizadas)
 */
export interface ProcessedGalleryItem extends Omit<GalleryItem, 'images'> {
  images: ProcessedImage[]
}
