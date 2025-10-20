import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { newsQuery } from '@/lib/sanity-queries'
import { NewsArticle } from '@/types/sanity'
import { NewsCard } from '@/components/NewsCard'

// Revalidar cada 60 segundos (ISR)
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Noticias | PequeServer',
  description: 'Mantente actualizado con las últimas noticias, eventos y anuncios de nuestro servidor de Minecraft.',
  openGraph: {
    title: 'Noticias | PequeServer',
    description: 'Mantente actualizado con las últimas noticias, eventos y anuncios de nuestro servidor de Minecraft.',
    type: 'website',
  },
}

export default async function NewsPage() {
  // Fetch de noticias desde Sanity
  const articles: NewsArticle[] = await client.fetch(newsQuery)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Noticias
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Mantente al día con las últimas actualizaciones, eventos y anuncios de nuestra comunidad
        </p>
      </div>

      {/* Grid de Noticias */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </div>
      ) : (
        /* Estado vacío */
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">
            No hay noticias disponibles en este momento.
          </p>
        </div>
      )}
    </div>
  )
}
