import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { client, urlForImage } from '@/lib/sanity'
import { newsBySlugQuery, newsPathsQuery } from '@/lib/sanity-queries'
import { NewsArticle } from '@/types/sanity'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { PortableText } from '@portabletext/react'

// Revalidar cada 60 segundos (ISR)
export const revalidate = 60

// Mapeo de categorías
const categoryLabels: Record<string, string> = {
  actualizacion: 'Actualización',
  evento: 'Evento',
  anuncio: 'Anuncio',
  comunidad: 'Comunidad',
}

const categoryColors: Record<string, string> = {
  actualizacion: 'bg-blue-500/10 text-blue-500',
  evento: 'bg-purple-500/10 text-purple-500',
  anuncio: 'bg-yellow-500/10 text-yellow-500',
  comunidad: 'bg-green-500/10 text-green-500',
}

/**
 * Formatea una fecha a formato legible en español
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * Genera los parámetros estáticos para todas las noticias
 * Esto permite SSG de todas las páginas de noticias
 */
export async function generateStaticParams() {
  const paths = await client.fetch<Array<{ slug: string }>>(newsPathsQuery)
  
  return paths.map((item) => ({
    slug: item.slug,
  }))
}

/**
 * Genera metadata dinámica para cada noticia
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article: NewsArticle = await client.fetch(newsBySlugQuery, { slug })

  if (!article) {
    return {
      title: 'Noticia no encontrada',
    }
  }

  const imageUrl = article.mainImage
    ? urlForImage(article.mainImage, 1200, 630)
    : undefined

  return {
    title: `${article.title} | PequeServer`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

/**
 * Componentes personalizados para PortableText
 */
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8">
          <Image
            src={urlForImage(value, 1200, 675)}
            alt={value.alt || 'Imagen del artículo'}
            width={1200}
            height={675}
            className="rounded-lg"
          />
          {value.caption && (
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-7">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => {
      const target = value?.href?.startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary underline hover:no-underline"
        >
          {children}
        </a>
      )
    },
  },
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article: NewsArticle = await client.fetch(newsBySlugQuery, { slug })

  // Si no existe el artículo, mostrar 404
  if (!article) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12">
      {/* Botón Volver */}
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver a noticias
      </Link>

      {/* Header del artículo */}
      <header className="max-w-4xl mx-auto mb-8">
        {/* Categoría */}
        <Badge
          className={`mb-4 ${
            categoryColors[article.category] || 'bg-gray-500/10 text-gray-500'
          }`}
          variant="secondary"
        >
          {categoryLabels[article.category] || article.category}
        </Badge>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Metadata */}
        <div className="flex items-center gap-6 text-muted-foreground mb-8">
          <span className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {formatDate(article.publishedAt)}
          </span>
          <span className="flex items-center gap-2">
            <User className="w-5 h-5" />
            {article.author}
          </span>
        </div>

        {/* Imagen principal */}
        {article.mainImage && (
          <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
            <Image
              src={urlForImage(article.mainImage, 1200, 675)}
              alt={article.mainImage.alt || article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Excerpt */}
        <p className="text-xl text-muted-foreground leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      {/* Contenido del artículo */}
      <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
        <PortableText value={article.body} components={portableTextComponents} />
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-12 pt-8 border-t">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Ver más noticias
        </Link>
      </footer>
    </article>
  )
}
