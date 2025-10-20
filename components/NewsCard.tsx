import Link from 'next/link'
import Image from 'next/image'
import { NewsArticle } from '@/types/sanity'
import { urlForImage } from '@/lib/sanity'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User } from 'lucide-react'

interface NewsCardProps {
  article: NewsArticle
  className?: string
}

// Mapeo de categorías para mostrar nombres legibles
const categoryLabels: Record<string, string> = {
  actualizacion: 'Actualización',
  evento: 'Evento',
  anuncio: 'Anuncio',
  comunidad: 'Comunidad',
}

// Mapeo de categorías para colores de badges
const categoryColors: Record<string, string> = {
  actualizacion: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20',
  evento: 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20',
  anuncio: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20',
  comunidad: 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
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
 * Componente NewsCard
 * Muestra una tarjeta de noticia con imagen, título, categoría, fecha, autor y excerpt
 * 
 * @param article - Artículo de noticia de Sanity
 * @param className - Clases CSS adicionales para el contenedor
 */
export function NewsCard({ article, className }: NewsCardProps) {
  return (
    <Link
      href={`/news/${article.slug.current}`}
      className={`group block ${className || ''}`}
    >
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
        {/* Imagen Principal */}
        {article.mainImage && (
          <div className="relative aspect-video overflow-hidden bg-muted">
            <Image
              src={urlForImage(article.mainImage, 800, 450)}
              alt={article.mainImage.alt || article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <CardHeader>
          {/* Badge de Categoría */}
          <Badge
            className={`w-fit mb-2 ${
              categoryColors[article.category] || 'bg-gray-500/10 text-gray-500'
            }`}
            variant="secondary"
          >
            {categoryLabels[article.category] || article.category}
          </Badge>

          {/* Título */}
          <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>

          {/* Metadata: Fecha y Autor */}
          <CardDescription className="flex items-center gap-4 text-sm mt-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(article.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {article.author}
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Excerpt */}
          <p className="text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>
        </CardContent>

        <CardFooter>
          {/* Link "Leer más" */}
          <span className="text-sm text-primary font-medium group-hover:underline">
            Leer más →
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
