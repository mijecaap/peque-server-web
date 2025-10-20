# 📋 Lista de Tareas Detalladas por Fase - Proyecto Web Minecraft Server

## 🎯 Información General del Proyecto

**Stack Tecnológico:**
- Frontend: Next.js 14+ (App Router) con TypeScript
- Styling: Tailwind CSS + Framer Motion + shadcn/ui
- CMS: Sanity.io
- API: Exaroton API + SWR/TanStack Query
- Hosting: Vercel

---

## 📦 FASE 0: Preparación Inicial del Proyecto

### Tarea 0.1: Crear estructura base del proyecto ✅
- [x] Inicializar proyecto Next.js 14 con TypeScript usando `npx create-next-app@latest`
- [x] Seleccionar opciones: App Router, TypeScript, Tailwind CSS, ESLint
- [x] Verificar que la estructura inicial se haya creado correctamente
- [x] Crear archivo `.gitignore` si no existe
- [x] Inicializar repositorio Git con `git init`

### Tarea 0.2: Instalar dependencias principales ✅
- [x] Instalar Framer Motion: `npm install framer-motion`
- [x] Instalar SWR para data fetching: `npm install swr`
- [x] Instalar Axios para HTTP requests: `npm install axios`
- [x] Instalar Lucide React para iconos: `npm install lucide-react`
- [x] Instalar next-seo para SEO: `npm install next-seo`
- [x] Instalar Sanity client: `npm install @sanity/client @sanity/image-url`
- [x] Instalar next-sanity (best practice para Next.js): `npm install next-sanity`
- [x] Verificar que todas las dependencias se instalaron en `package.json`

### Tarea 0.3: Configurar shadcn/ui ✅
- [x] Inicializar shadcn/ui con `npx shadcn@latest init`
- [x] Configurar el directorio de componentes como `components/ui`
- [x] Seleccionar estilo base: Neutral (color base)
- [x] Instalar componentes básicos: Card, Badge, Button, Avatar
- [x] Comando: `npx shadcn@latest add card badge button avatar`
- [x] Verificar que los componentes se crearon en `components/ui/`

### Tarea 0.4: Configurar estructura de carpetas ✅
- [x] Crear carpeta `app/(marketing)/` para páginas públicas
- [x] Crear carpeta `app/api/exaroton/` para rutas API
- [x] Crear carpeta `components/` para componentes React (ya existe con shadcn/ui)
- [x] Crear carpeta `lib/` para utilidades y clientes API (ya existe con shadcn/ui)
- [x] Crear carpeta `types/` para definiciones TypeScript
- [x] Crear carpeta `public/images/` para assets estáticos
- [x] Crear carpeta `sanity/` para configuración del CMS

### Tarea 0.5: Configurar variables de entorno ✅
- [x] Crear archivo `.env.local` en la raíz del proyecto
- [x] Añadir variable `EXAROTON_API_KEY=tu_api_key_aqui`
- [x] Añadir variable `NEXT_PUBLIC_SITE_URL=http://localhost:3000`
- [x] Crear archivo `.env.example` con las variables (sin valores)
- [x] Añadir `.env.local` al `.gitignore` (ya estaba incluido con `.env*`)

---

## 🚀 FASE 1: Setup Next.js + Landing Page + API Exaroton (1-2 días)

### Tarea 1.1: Configurar Tailwind CSS avanzado ✅
- [x] Abrir archivo `tailwind.config.ts`
- [x] Añadir colores personalizados para tema gaming (verde Minecraft, negro, grises)
- [x] Configurar fuentes personalizadas si es necesario
- [x] Añadir animaciones custom en `theme.extend.animation`
- [x] Ejemplo: `glow`, `pulse-slow`, `fade-in`
- [x] Probar la configuración creando un componente de prueba

### Tarea 1.2: Crear tipos TypeScript para Exaroton API ✅
- [x] Crear archivo `types/exaroton.ts`
- [x] Definir interface `ExarotonServer` con propiedades:
  - `id: string`
  - `name: string`
  - `status: 'online' | 'offline' | 'starting' | 'stopping'`
  - `host: string`
  - `port: number`
  - `motd: string`
  - `players: { count: number; max: number; list: string[] }`
  - `software: { id: string; name: string; version: string }`
  - `ram: number`
- [x] Definir interface `ExarotonAPIResponse<T>` para respuestas genéricas
- [x] Exportar todos los tipos

### Tarea 1.3: Crear cliente API de Exaroton ✅
- [x] Crear archivo `lib/exaroton.ts`
- [x] Importar axios y los tipos creados
- [x] Crear constante `EXAROTON_API_URL = 'https://api.exaroton.com/v1'`
- [x] Crear instancia de axios con configuración base:
  - Base URL
  - Headers con Authorization usando `process.env.EXAROTON_API_KEY`
  - Timeout de 10000ms
- [x] Crear función `getServers()` que retorne Promise<ExarotonServer[]>
- [x] Crear función `getServer(id: string)` que retorne Promise<ExarotonServer>
- [x] Crear función `getServerLogs(id: string)` que retorne Promise<string[]>
- [x] Añadir manejo de errores con try-catch en cada función
- [x] Exportar todas las funciones

### Tarea 1.4: Crear API Routes en Next.js (Proxy) ✅
- [x] Crear archivo `app/api/exaroton/servers/route.ts`
- [x] Implementar función GET que:
  - Llame a `getServers()` del cliente
  - Retorne JSON con los datos
  - Maneje errores con status 500
  - Use `export async function GET()`
- [x] Crear archivo `app/api/exaroton/servers/[id]/route.ts`
- [x] Implementar función GET que:
  - Reciba el ID desde params
  - Llame a `getServer(id)`
  - Retorne JSON con los datos del servidor específico
- [x] Probar endpoints en navegador o Postman

### Tarea 1.5: Crear Layout principal de la aplicación ✅
- [x] Editar archivo `app/layout.tsx`
- [x] Configurar metadata básico:
  - `title: 'Minecraft Server - Nombre de tu servidor'`
  - `description: 'Servidor de Minecraft con mods/plugins'`
  - `keywords: ['minecraft', 'servidor', 'gaming']`
- [x] Añadir fuente personalizada (opcional): Inter, Poppins o similar
- [x] Crear estructura HTML con:
  - Header fijo con logo y navegación
  - Main content area con `{children}`
  - Footer con links y redes sociales
- [x] Aplicar estilos base de Tailwind
- [x] Usar colores dark mode por defecto

### Tarea 1.6: Crear componente de Navegación (Header) ✅
- [x] Crear archivo `components/Header.tsx`
- [x] Implementar navbar responsive con:
  - Logo del servidor (imagen o texto)
  - Links: Inicio, Servidores, Noticias, Galería
  - Botón CTA "Unirse a Discord"
  - Menú hamburguesa para móvil
- [x] Usar `next/link` para navegación
- [x] Aplicar sticky positioning con `sticky top-0 z-50`
- [x] Añadir backdrop blur y transparencia: `bg-black/80 backdrop-blur-md`
- [x] Implementar estado de menú móvil con useState
- [x] Añadir animaciones de Framer Motion para el menú móvil

### Tarea 1.7: Crear componente Footer ✅
- [x] Crear archivo `components/Footer.tsx`
- [x] Implementar footer con tres columnas:
  - Columna 1: Información del servidor y logo
  - Columna 2: Links rápidos (Inicio, Servidores, Noticias, Términos)
  - Columna 3: Redes sociales (Discord, YouTube, TikTok, Instagram)
- [x] Añadir copyright con año dinámico: `© ${new Date().getFullYear()}`
- [x] Usar iconos de Lucide React para redes sociales
- [x] Aplicar estilos dark con bordes superiores
- [x] Hacer responsive (columnas se apilan en móvil)

### Tarea 1.8: Crear Landing Page principal ✅
- [x] Crear archivo `app/(marketing)/page.tsx`
- [x] Implementar Hero Section con:
  - Título principal grande y llamativo
  - Descripción breve del servidor
  - Dos botones CTA: "Ver Servidores" y "Unirse a Discord"
  - Imagen de fondo o video de Minecraft
- [x] Añadir sección "Características" con cards:
  - Mínimo 3 características (ej: "Mods únicos", "Comunidad activa", "Eventos semanales")
  - Usar Card de shadcn/ui
  - Iconos de Lucide React
- [x] Añadir sección "Estadísticas rápidas":
  - Jugadores activos (obtenido de API)
  - Servidores disponibles
  - Años online
- [x] Añadir animaciones de entrada con Framer Motion
- [x] Hacer toda la página responsive

### Tarea 1.9: Crear hook personalizado para datos de Exaroton ✅
- [x] Crear archivo `lib/hooks/useServers.ts`
- [x] Implementar custom hook usando SWR:
  ```typescript
  export function useServers() {
    const { data, error, isLoading } = useSWR('/api/exaroton/servers', fetcher)
    return { servers: data, error, isLoading }
  }
  ```
- [x] Crear función fetcher genérica
- [x] Configurar revalidación cada 30 segundos
- [x] Crear hook similar `useServer(id)` para servidor individual
- [x] Exportar ambos hooks

### Tarea 1.10: Integrar datos reales en Landing Page ✅
- [x] Importar hook `useServers()` en `page.tsx`
- [x] Obtener datos de servidores
- [x] Mostrar estadísticas reales en la sección correspondiente
- [x] Añadir estados de carga con skeleton o spinner
- [x] Manejar errores mostrando mensaje amigable
- [x] Probar que los datos se actualizan correctamente

---

## 📝 FASE 2: Setup Sanity CMS + Noticias + Galería (2-3 días)

### Tarea 2.1: Inicializar Sanity Studio ✅
- [x] Ejecutar `npm create sanity@latest` en la carpeta `sanity/`
- [x] Seleccionar opciones:
  - Crear nuevo proyecto
  - Dataset: production
  - Output path: sanity/
- [x] Registrarse/iniciar sesión en Sanity.io
- [x] Anotar el Project ID generado (wcwrnwlc)
- [x] Añadir Project ID a `.env.local` como `NEXT_PUBLIC_SANITY_PROJECT_ID`
- [x] Añadir Dataset a `.env.local` como `NEXT_PUBLIC_SANITY_DATASET=production`

### Tarea 2.2: Configurar CORS en Sanity ✅
- [x] Ir a https://www.sanity.io/manage
- [x] Seleccionar el proyecto creado
- [x] Ir a Settings > API
- [x] Añadir origen permitido: `http://localhost:3000`
- [x] Añadir origen permitido: tu dominio de producción cuando lo tengas
- [x] Guardar cambios

### Tarea 2.3: Crear schema de Noticias en Sanity ✅
- [x] Crear archivo `sanity/schemas/news.ts`
- [x] Definir schema con campos:
  - `name: 'news'`
  - `title: 'Noticias'`
  - `type: 'document'`
- [x] Añadir fields:
  - `title` (string, required)
  - `slug` (slug, source: title, required)
  - `mainImage` (image)
  - `category` (string, opciones: Actualización, Evento, Anuncio)
  - `publishedAt` (datetime, required)
  - `author` (string)
  - `excerpt` (text, descripción breve)
  - `body` (array de blockContent)
- [x] Configurar preview con title y media
- [x] Exportar el schema

### Tarea 2.4: Crear schema de Galería en Sanity
- [ ] Crear archivo `sanity/schemas/gallery.ts`
- [ ] Definir schema con campos:
  - `name: 'gallery'`
  - `title: 'Galería'`
  - `type: 'document'`
- [ ] Añadir fields:
  - `title` (string, required)
  - `description` (text)
  - `images` (array de image objects)
  - `category` (string, opcional)
  - `createdAt` (datetime)
- [ ] Exportar el schema

### Tarea 2.5: Registrar schemas en Sanity
- [ ] Abrir archivo `sanity/sanity.config.ts`
- [ ] Importar schemas de news y gallery
- [ ] Añadir schemas al array de schemas en la configuración
- [ ] Verificar que no hay errores de compilación

### Tarea 2.6: Iniciar Sanity Studio y crear contenido de prueba
- [ ] Ejecutar `npm run dev` en la carpeta sanity/
- [ ] Abrir http://localhost:3333 (o puerto indicado)
- [ ] Crear 3 noticias de prueba con:
  - Títulos variados
  - Imágenes (puedes usar placeholders)
  - Contenido en el body
  - Diferentes categorías
- [ ] Crear 1 galería de prueba con al menos 5 imágenes
- [ ] Publicar todo el contenido

### Tarea 2.7: Crear cliente de Sanity en Next.js
- [ ] Crear archivo `lib/sanity.ts`
- [ ] Importar createClient de @sanity/client
- [ ] Crear cliente con configuración:
  ```typescript
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-01-01',
    useCdn: true
  })
  ```
- [ ] Exportar el cliente
- [ ] Crear función helper para imageUrlBuilder

### Tarea 2.8: Crear tipos TypeScript para Sanity
- [ ] Crear archivo `types/sanity.ts`
- [ ] Definir interface `NewsArticle`:
  - `_id: string`
  - `title: string`
  - `slug: { current: string }`
  - `mainImage: any`
  - `category: string`
  - `publishedAt: string`
  - `author: string`
  - `excerpt: string`
  - `body: any[]`
- [ ] Definir interface `GalleryItem`
- [ ] Exportar interfaces

### Tarea 2.9: Crear queries GROQ para Sanity
- [ ] Crear archivo `lib/sanity-queries.ts`
- [ ] Crear query para obtener todas las noticias ordenadas por fecha:
  ```typescript
  export const newsQuery = `*[_type == "news"] | order(publishedAt desc) {
    _id, title, slug, mainImage, category, publishedAt, author, excerpt
  }`
  ```
- [ ] Crear query para obtener una noticia por slug:
  ```typescript
  export const newsBySlugQuery = `*[_type == "news" && slug.current == $slug][0]`
  ```
- [ ] Crear query para la galería
- [ ] Exportar todas las queries

### Tarea 2.10: Crear página de lista de Noticias
- [ ] Crear archivo `app/(marketing)/news/page.tsx`
- [ ] Implementar función para fetch de noticias desde Sanity
- [ ] Usar ISR con `revalidate: 60` (revalidar cada 60 segundos)
- [ ] Renderizar grid de cards de noticias
- [ ] Cada card debe mostrar:
  - Imagen principal
  - Título
  - Categoría (Badge de shadcn)
  - Fecha de publicación
  - Excerpt
  - Link a la noticia completa
- [ ] Aplicar layout responsive (1 columna móvil, 2-3 en desktop)
- [ ] Añadir animaciones de entrada

### Tarea 2.11: Crear componente NewsCard
- [ ] Crear archivo `components/NewsCard.tsx`
- [ ] Aceptar props: `article: NewsArticle`
- [ ] Usar Card de shadcn/ui
- [ ] Incluir imagen con next/image optimizada
- [ ] Formatear fecha con `Intl.DateTimeFormat`
- [ ] Añadir hover effects
- [ ] Hacer el card clickeable con Link de Next
- [ ] Exportar componente

### Tarea 2.12: Crear página individual de Noticia
- [ ] Crear archivo `app/(marketing)/news/[slug]/page.tsx`
- [ ] Implementar `generateStaticParams()` para SSG de todas las noticias
- [ ] Implementar función de fetch por slug
- [ ] Renderizar:
  - Título grande
  - Metadata (autor, fecha, categoría)
  - Imagen principal full width
  - Contenido del body (usar @portabletext/react si es necesario)
  - Botón "Volver a noticias"
- [ ] Aplicar estilos de artículo (typography mejorada)
- [ ] Configurar metadata dinámica para SEO

### Tarea 2.13: Crear página de Galería
- [ ] Crear archivo `app/(marketing)/gallery/page.tsx`
- [ ] Fetch datos de galería desde Sanity
- [ ] Implementar grid de imágenes responsive
- [ ] Usar next/image para todas las imágenes
- [ ] Añadir lightbox/modal para ver imágenes en grande (puedes usar react-photo-view)
- [ ] Instalar: `npm install react-photo-view`
- [ ] Implementar filtros por categoría si aplicable
- [ ] Añadir animaciones stagger con Framer Motion

### Tarea 2.14: Instalar y configurar Portable Text (para contenido rico)
- [ ] Instalar: `npm install @portabletext/react`
- [ ] Crear archivo `components/PortableText.tsx`
- [ ] Configurar componentes custom para:
  - Headings (h1, h2, h3)
  - Párrafos
  - Listas
  - Imágenes
  - Links
- [ ] Aplicar estilos Tailwind apropiados
- [ ] Usar este componente en la página de noticia individual

### Tarea 2.15: Optimizar imágenes de Sanity
- [ ] Crear utility en `lib/sanity-image.ts`
- [ ] Usar imageUrlBuilder de Sanity
- [ ] Crear función que genere URLs optimizadas:
  - Diferentes tamaños
  - Formato webp
  - Quality configurado
- [ ] Implementar en todos los componentes que usen imágenes de Sanity

---

## 📊 FASE 3: Dashboard de Servidores + Animaciones + SEO (1-2 días)

### Tarea 3.1: Crear componente ServerCard
- [ ] Crear archivo `components/ServerCard.tsx`
- [ ] Aceptar props: `server: ExarotonServer`
- [ ] Usar Card de shadcn/ui
- [ ] Mostrar:
  - Nombre del servidor
  - Status con indicador visual (círculo verde/rojo/amarillo)
  - MOTD del servidor
  - Jugadores actuales/máximo con Avatar group
  - RAM utilizada
  - Versión y software
  - IP y puerto
- [ ] Añadir botón "Copiar IP" que copie al clipboard
- [ ] Añadir botón "Unirse" (link si es aplicable)
- [ ] Implementar animaciones hover con Framer Motion
- [ ] Hacer responsive

### Tarea 3.2: Crear componente StatusBadge
- [ ] Crear archivo `components/StatusBadge.tsx`
- [ ] Aceptar props: `status: 'online' | 'offline' | 'starting' | 'stopping'`
- [ ] Usar Badge de shadcn/ui
- [ ] Aplicar colores según status:
  - online: verde
  - offline: rojo
  - starting: amarillo
  - stopping: naranja
- [ ] Añadir icono (círculo pulsante si está online)
- [ ] Exportar componente

### Tarea 3.3: Crear componente PlayerCount
- [ ] Crear archivo `components/PlayerCount.tsx`
- [ ] Aceptar props: `current: number, max: number, players?: string[]`
- [ ] Mostrar barra de progreso visual
- [ ] Mostrar números current/max
- [ ] Si hay lista de jugadores, mostrar tooltip con nombres
- [ ] Usar iconos de Lucide (Users icon)
- [ ] Aplicar estilos atractivos

### Tarea 3.4: Crear página de Dashboard de Servidores
- [ ] Crear archivo `app/(marketing)/servers/page.tsx`
- [ ] Usar hook `useServers()` para obtener datos
- [ ] Implementar grid responsive de ServerCards
- [ ] Añadir filtros:
  - Todos / Online / Offline
  - Búsqueda por nombre
- [ ] Implementar estado de carga con skeletons
- [ ] Manejar errores con mensaje amigable
- [ ] Añadir botón de refrescar manual
- [ ] Mostrar timestamp de última actualización

### Tarea 3.5: Implementar polling automático
- [ ] En `lib/hooks/useServers.ts`, configurar SWR options:
  - `refreshInterval: 30000` (30 segundos)
  - `revalidateOnFocus: true`
  - `revalidateOnReconnect: true`
- [ ] Añadir indicador visual de "Actualizando..." cuando se revalida
- [ ] Probar que los datos se actualizan automáticamente

### Tarea 3.6: Añadir animaciones globales con Framer Motion
- [ ] Crear archivo `lib/animations.ts`
- [ ] Definir variantes de animación reutilizables:
  - `fadeIn`: fade in desde opacidad 0
  - `slideUp`: slide desde abajo
  - `staggerContainer`: para animar hijos secuencialmente
  - `scaleIn`: scale desde 0.8
- [ ] Exportar todas las variantes
- [ ] Aplicar en componentes principales

### Tarea 3.7: Implementar animaciones en Landing Page
- [ ] Importar motion de framer-motion en `page.tsx`
- [ ] Envolver secciones en motion.div
- [ ] Aplicar variante `fadeIn` al hero
- [ ] Aplicar `staggerContainer` a la grid de características
- [ ] Añadir animación de scroll reveal con viewport detection
- [ ] Probar que las animaciones funcionan suavemente

### Tarea 3.8: Configurar SEO básico con next-seo
- [ ] Crear archivo `lib/seo-config.ts`
- [ ] Definir configuración SEO por defecto:
  - titleTemplate
  - defaultTitle
  - description
  - canonical
  - openGraph (imagen, siteName, locale)
  - twitter card
- [ ] Exportar configuración
- [ ] Aplicar en layout principal

### Tarea 3.9: Crear metadata dinámica para páginas
- [ ] En cada página, exportar función `generateMetadata()`
- [ ] Configurar metadata específica:
  - Landing: título y descripción principal
  - Noticias: título con nombre de noticia
  - Noticia individual: título, descripción, imagen OG
  - Servidores: título y descripción relevante
  - Galería: título y descripción
- [ ] Verificar metadata con herramientas de desarrollo

### Tarea 3.10: Crear sitemap.xml
- [ ] Instalar: `npm install next-sitemap`
- [ ] Crear archivo `next-sitemap.config.js` en la raíz
- [ ] Configurar:
  - siteUrl
  - generateRobotsTxt: true
  - Rutas dinámicas de noticias
- [ ] Añadir script en package.json: `"postbuild": "next-sitemap"`
- [ ] Probar generación del sitemap

### Tarea 3.11: Configurar robots.txt
- [ ] Crear archivo `public/robots.txt`
- [ ] Permitir todos los bots
- [ ] Añadir referencia al sitemap
- [ ] Bloquear rutas admin si existen
- [ ] Verificar contenido del archivo

### Tarea 3.12: Implementar JSON-LD Schema
- [ ] Crear archivo `components/JsonLd.tsx`
- [ ] Implementar schemas para:
  - Organization (datos del servidor)
  - WebSite
  - Article (para noticias)
- [ ] Añadir script tag con JSON-LD en las páginas correspondientes
- [ ] Validar con https://validator.schema.org/

### Tarea 3.13: Optimizar imágenes y assets
- [ ] Comprimir todas las imágenes en `/public`
- [ ] Usar formatos modernos (WebP) cuando sea posible
- [ ] Configurar next.config.js con:
  - Image optimization
  - Remote patterns para Sanity CDN
- [ ] Verificar que todas las imágenes usen next/image

### Tarea 3.14: Implementar loading states mejorados
- [ ] Crear componentes skeleton para:
  - ServerCard
  - NewsCard
  - Gallery grid
- [ ] Usar en páginas con loading states
- [ ] Aplicar Suspense boundaries donde sea apropiado
- [ ] Crear loading.tsx en rutas que lo necesiten

### Tarea 3.15: Añadir error boundaries
- [ ] Crear archivo `app/error.tsx` global
- [ ] Implementar UI de error amigable
- [ ] Añadir botón para intentar de nuevo
- [ ] Crear error.tsx específicos en rutas críticas
- [ ] Probar lanzando errores intencionalmente

---

## 🎮 FASE 4: Integración Discord + Testing + Deploy (1 día)

### Tarea 4.1: Crear componente DiscordWidget
- [ ] Crear archivo `components/DiscordWidget.tsx`
- [ ] Integrar widget oficial de Discord o crear custom
- [ ] Mostrar:
  - Icono de Discord
  - Número de miembros online (si es posible via API)
  - Botón CTA "Únete al Discord"
- [ ] Posicionar como floating button o en sidebar
- [ ] Aplicar animaciones sutiles
- [ ] Hacer responsive

### Tarea 4.2: Añadir links a Discord en toda la web
- [ ] Actualizar Header con link prominente a Discord
- [ ] Añadir botón en Hero de landing
- [ ] Incluir en Footer
- [ ] Verificar que todos los links abren en nueva pestaña
- [ ] Usar tu URL de invitación de Discord

### Tarea 4.3: Implementar Analytics (opcional pero recomendado)
- [ ] Instalar Vercel Analytics: `npm install @vercel/analytics`
- [ ] Añadir componente Analytics en layout principal
- [ ] Configurar eventos custom si es necesario
- [ ] Verificar que se registren pageviews

### Tarea 4.4: Testing manual completo
- [ ] Probar navegación en todas las páginas
- [ ] Verificar que datos de Exaroton se cargan correctamente
- [ ] Verificar que noticias desde Sanity se muestran
- [ ] Probar formularios y botones (copiar IP, etc.)
- [ ] Verificar responsive en móvil, tablet y desktop
- [ ] Probar en diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Verificar animaciones funcionan sin lag
- [ ] Probar estados de error y loading

### Tarea 4.5: Optimización de Performance
- [ ] Ejecutar Lighthouse en cada página
- [ ] Optimizar puntuación de Performance (objetivo: >90)
- [ ] Optimizar puntuación de Accessibility (objetivo: >90)
- [ ] Optimizar puntuación de Best Practices (objetivo: >90)
- [ ] Optimizar puntuación de SEO (objetivo: 100)
- [ ] Corregir issues identificados

### Tarea 4.6: Configurar proyecto en Vercel
- [ ] Crear cuenta en Vercel si no existe
- [ ] Conectar repositorio GitHub/GitLab
- [ ] Configurar variables de entorno en Vercel:
  - EXAROTON_API_KEY
  - NEXT_PUBLIC_SANITY_PROJECT_ID
  - NEXT_PUBLIC_SANITY_DATASET
  - NEXT_PUBLIC_SITE_URL (tu dominio de producción)
- [ ] Configurar settings del proyecto
- [ ] Verificar build settings (Next.js detectado automáticamente)

### Tarea 4.7: Deploy inicial a Vercel
- [ ] Hacer push del código al repositorio
- [ ] Vercel debería auto-deployar
- [ ] Verificar que el build fue exitoso
- [ ] Abrir la URL de preview generada
- [ ] Probar todas las funcionalidades en producción

### Tarea 4.8: Configurar dominio personalizado (si aplica)
- [ ] Ir a Vercel project settings > Domains
- [ ] Añadir tu dominio personalizado
- [ ] Configurar DNS según instrucciones de Vercel
- [ ] Esperar propagación DNS
- [ ] Verificar que el sitio carga con tu dominio
- [ ] Configurar redirects de www a non-www o viceversa

### Tarea 4.9: Actualizar CORS y URLs
- [ ] Actualizar CORS en Sanity con dominio de producción
- [ ] Actualizar variables de entorno con URL de producción
- [ ] Verificar que API routes funcionan en producción
- [ ] Probar fetch de datos desde dominio real

### Tarea 4.10: Testing post-deploy
- [ ] Verificar todas las páginas en producción
- [ ] Probar carga de imágenes desde Sanity CDN
- [ ] Verificar que datos de Exaroton se obtienen
- [ ] Probar links externos (Discord)
- [ ] Verificar Analytics funciona
- [ ] Probar sitemap.xml y robots.txt accesibles

### Tarea 4.11: Crear documentación README
- [ ] Crear archivo `README.md` completo con:
  - Descripción del proyecto
  - Stack tecnológico
  - Instrucciones de instalación
  - Variables de entorno necesarias
  - Comandos para desarrollo
  - Estructura del proyecto
  - Créditos y licencia
- [ ] Añadir screenshots o GIFs del sitio
- [ ] Incluir badges (Next.js, TypeScript, etc.)

### Tarea 4.12: Configurar CI/CD (opcional)
- [ ] Vercel ya provee CD automático
- [ ] Configurar GitHub Actions para linting si deseas
- [ ] Añadir checks de TypeScript en pre-commit
- [ ] Configurar Prettier y ESLint
- [ ] Crear archivo `.prettierrc` y `.eslintrc.json`

### Tarea 4.13: Monitoreo y mantenimiento
- [ ] Configurar alertas de Vercel para errors
- [ ] Verificar logs regularmente
- [ ] Monitorear uso de bandwidth y builds
- [ ] Mantener dependencias actualizadas
- [ ] Revisar Analytics semanalmente

### Tarea 4.14: Crear backup de Sanity
- [ ] Documentar cómo hacer export de datos de Sanity
- [ ] Programar backups regulares si es posible
- [ ] Guardar configuración de schemas en repositorio

### Tarea 4.15: Mejoras futuras (documentar)
- [ ] Crear archivo `ROADMAP.md` con mejoras futuras:
  - Sistema de votación para servidores
  - Integración con Discord API para stats real-time
  - Panel de administración
  - Comentarios en noticias
  - Sistema de eventos/calendario
  - Integración con Minecraft API para skins de jugadores
  - Dashboard de estadísticas de servidor más detallado
  - Sistema de donaciones/store
- [ ] Priorizar features según feedback de usuarios

---

## ✅ Checklist Final

Al completar todas las fases, verifica:
- [ ] ✅ Sitio carga correctamente en producción
- [ ] ✅ Todas las páginas son navegables
- [ ] ✅ Datos de Exaroton se muestran correctamente
- [ ] ✅ Noticias desde Sanity se cargan
- [ ] ✅ Galería funciona
- [ ] ✅ Links a Discord funcionan
- [ ] ✅ Sitio es responsive en todos los dispositivos
- [ ] ✅ Performance score > 90 en Lighthouse
- [ ] ✅ SEO optimizado (sitemap, robots.txt, metadata)
- [ ] ✅ Animaciones funcionan sin problemas
- [ ] ✅ No hay errores en consola
- [ ] ✅ Variables de entorno configuradas correctamente
- [ ] ✅ Dominio personalizado configurado (si aplica)
- [ ] ✅ Analytics funcionando
- [ ] ✅ README.md completo

---

## 📚 Recursos de Referencia

**Documentación:**
- Next.js 14: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- shadcn/ui: https://ui.shadcn.com/
- Sanity: https://www.sanity.io/docs
- SWR: https://swr.vercel.app/
- Exaroton API: https://exaroton.com/developers/

**Herramientas útiles:**
- TypeScript Playground: https://www.typescriptlang.org/play
- Tailwind Play: https://play.tailwindcss.com/
- Schema.org Validator: https://validator.schema.org/
- Lighthouse: Built-in en Chrome DevTools

---

## 🎯 Notas Importantes para el Agente AI

1. **Orden de ejecución:** Seguir las fases en orden. No saltarse tareas.
2. **Verificación:** Después de cada tarea, verificar que funciona antes de continuar.
3. **Git commits:** Hacer commits frecuentes con mensajes descriptivos.
4. **Errores:** Si una tarea falla, investigar y resolver antes de avanzar.
5. **Testing:** Probar cada feature inmediatamente después de implementarla.
6. **Documentación:** Comentar código complejo y mantener README actualizado.
7. **Performance:** Siempre priorizar performance y user experience.
8. **Responsive:** Cada componente debe ser mobile-first.
9. **Accesibilidad:** Usar semantic HTML y ARIA labels donde sea necesario.
10. **TypeScript:** No usar `any`, tipar todo correctamente.

---

**Estado del proyecto:** ⏳ No iniciado
**Última actualización:** Octubre 20, 2025
