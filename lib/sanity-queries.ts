import {groq} from 'next-sanity'

/**
 * Query para obtener todas las noticias ordenadas por fecha de publicación (más recientes primero)
 * Incluye todos los campos necesarios para mostrar en el listado de noticias
 */
export const newsQuery = groq`
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    mainImage {
      asset->{
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    category,
    publishedAt,
    author,
    excerpt
  }
`

/**
 * Query para obtener una noticia específica por su slug
 * Incluye el contenido completo (body) y toda la metadata
 */
export const newsBySlugQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    mainImage {
      asset->{
        _id,
        url
      },
      alt,
      caption,
      hotspot,
      crop
    },
    category,
    publishedAt,
    author,
    excerpt,
    body[] {
      ...,
      _type == "image" => {
        asset->{
          _id,
          url
        },
        alt,
        caption
      }
    }
  }
`

/**
 * Query para obtener los slugs de todas las noticias
 * Útil para generateStaticParams en Next.js
 */
export const newsPathsQuery = groq`
  *[_type == "news" && defined(slug.current)] {
    "slug": slug.current
  }
`

/**
 * Query para obtener las últimas N noticias
 * Útil para mostrar noticias destacadas o relacionadas
 */
export const recentNewsQuery = groq`
  *[_type == "news"] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    category,
    publishedAt,
    excerpt
  }
`

/**
 * Query para obtener noticias por categoría
 */
export const newsByCategoryQuery = groq`
  *[_type == "news" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    category,
    publishedAt,
    author,
    excerpt
  }
`

/**
 * Query para obtener todas las galerías ordenadas por fecha de creación
 * Incluye el contador de imágenes
 */
export const galleryQuery = groq`
  *[_type == "gallery"] | order(createdAt desc) {
    _id,
    _type,
    title,
    description,
    "imageCount": count(images),
    "coverImage": images[0] {
      asset->{
        _id,
        url
      },
      alt
    },
    category,
    createdAt,
    featured
  }
`

/**
 * Query para obtener una galería específica por su ID
 * Incluye todas las imágenes con su metadata completa
 */
export const galleryByIdQuery = groq`
  *[_type == "gallery" && _id == $id][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    description,
    images[] {
      asset->{
        _id,
        url
      },
      alt,
      caption,
      hotspot,
      crop
    },
    category,
    createdAt,
    featured
  }
`

/**
 * Query para obtener galerías destacadas
 */
export const featuredGalleriesQuery = groq`
  *[_type == "gallery" && featured == true] | order(createdAt desc) {
    _id,
    title,
    description,
    "imageCount": count(images),
    "coverImage": images[0] {
      asset->{
        _id,
        url
      },
      alt
    },
    category,
    createdAt
  }
`

/**
 * Query para obtener galerías por categoría
 */
export const galleriesByCategoryQuery = groq`
  *[_type == "gallery" && category == $category] | order(createdAt desc) {
    _id,
    title,
    description,
    "imageCount": count(images),
    "coverImage": images[0] {
      asset->{
        _id,
        url
      },
      alt
    },
    category,
    createdAt,
    featured
  }
`

/**
 * Query para búsqueda de noticias por texto
 */
export const searchNewsQuery = groq`
  *[_type == "news" && (
    title match $searchTerm + "*" ||
    excerpt match $searchTerm + "*" ||
    author match $searchTerm + "*"
  )] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    category,
    publishedAt,
    author,
    excerpt
  }
`

/**
 * Query para contar el total de noticias
 */
export const newsCountQuery = groq`
  count(*[_type == "news"])
`

/**
 * Query para contar el total de galerías
 */
export const galleryCountQuery = groq`
  count(*[_type == "gallery"])
`
