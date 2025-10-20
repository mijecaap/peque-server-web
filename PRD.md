Perfecto! Con la API de Exaroton el stack se simplifica bastante. Aquí está mi recomendación actualizada:

## 🎯 Stack Recomendado (Actualizado)

### **Frontend Framework**
**Next.js 14+ (App Router)** con TypeScript
- ✅ API Routes para proxy de Exaroton API (ocultar API keys)
- ✅ ISR (Incremental Static Regeneration) para stats
- ✅ SSG para landing y páginas estáticas
- ✅ SEO out-of-the-box

### **Styling**
**Tailwind CSS** + **Framer Motion**
- **shadcn/ui** para componentes (cards, badges, etc.)

### **CMS Headless**
**Sanity.io** (Recomendado para tu caso)
- ✅ Free tier: 3 usuarios, datasets ilimitados
- ✅ CDN de imágenes con transformaciones automáticas
- ✅ Editor WYSIWYG para noticias
- ✅ Portable Text para contenido rico
- ✅ Real-time updates

**Alternativa simple**: **Contentful** (UI más simple, pero tier gratuito más limitado)

### **API Integration**
**Exaroton API** + **SWR** o **TanStack Query**
```typescript
// Endpoints útiles de Exaroton:
- GET /servers - Lista de servidores
- GET /servers/{id} - Info del servidor
- GET /servers/{id}/logs - Logs
- POST /servers/{id}/start - Iniciar servidor
```

### **Real-time Stats**
- **SWR** con polling (revalidación automática cada 30s)
- **Server Components** de Next.js para fetch inicial

### **Hosting**
**Vercel** (el mejor para Next.js)
- Environment variables seguras para API key
- Edge Functions cerca de tus usuarios
- Free tier muy generoso

---

## 📦 Arquitectura Simplificada

```
┌────────────────────────────────────────┐
│        Next.js 14 App                  │
│                                        │
│  ┌──────────┐        ┌─────────────┐  │
│  │ Landing  │        │  News Page  │  │
│  │  (SSG)   │        │    (ISR)    │  │
│  └──────────┘        └──────┬──────┘  │
│                              │         │
│  ┌──────────────────────────▼──────┐  │
│  │    Servers Dashboard (ISR)      │  │
│  │  - Server cards with stats      │  │
│  │  - Real-time player count       │  │
│  └──────────────┬──────────────────┘  │
└─────────────────┼─────────────────────┘
                  │
         ┌────────┴─────────┐
         │                  │
    ┌────▼─────┐      ┌────▼────────┐
    │  Sanity  │      │  Exaroton   │
    │   CMS    │      │     API     │
    │(Noticias)│      │ (Servidor)  │
    └──────────┘      └─────────────┘
```

---

## 🛠️ Stack Técnico Detallado

### **Dependencias Core**
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "@sanity/client": "^6.15.0",
    "@sanity/image-url": "^1.0.2",
    "swr": "^2.2.0",
    "axios": "^1.6.0",
    "next-seo": "^6.5.0",
    "lucide-react": "^0.344.0"
  }
}
```

### **Estructura de Proyecto**
```
minecraft-web/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Landing
│   │   ├── servers/
│   │   │   └── page.tsx          # Dashboard servidores
│   │   └── news/
│   │       ├── page.tsx          # Lista noticias
│   │       └── [slug]/page.tsx   # Noticia individual
│   ├── api/
│   │   └── exaroton/
│   │       ├── servers/route.ts  # Proxy API
│   │       └── [id]/route.ts     # Server específico
│   └── layout.tsx
├── components/
│   ├── ServerCard.tsx
│   ├── StatsDisplay.tsx
│   └── NewsCard.tsx
├── lib/
│   ├── exaroton.ts              # Cliente API
│   └── sanity.ts                # Cliente CMS
└── sanity/                      # Studio CMS
```

---

## 🎨 Features Específicas

### **1. Dashboard de Servidores (con Exaroton)**
```typescript
// Mostrar:
- Estado (online/offline/starting)
- Jugadores actuales/máximo
- RAM utilizada
- MOTD del servidor
- Versión de Minecraft
- Software (Paper/Vanilla/etc)
- Botón "Unirse" con IP copiable
```

### **2. CMS (Sanity) - Schemas**
```typescript
// Noticias
- Título
- Slug
- Imagen destacada
- Contenido (Portable Text)
- Fecha publicación
- Categoría (Actualización/Evento/Anuncio)
- Autor

// Galería
- Título
- Imágenes (array)
- Descripción
```

### **3. SEO Optimizations**
- **Metadata dinámica** por página
- **JSON-LD Schema** para Gaming/Organization
- **Sitemap** automático con `next-sitemap`
- **robots.txt** configurado
- **OG Images** dinámicas para redes sociales
- **Canonical URLs**

---

## 🚀 Ventajas de Este Stack

| Característica | Beneficio |
|----------------|-----------|
| **Sin DB** | Menos costos, menos mantenimiento |
| **Exaroton API** | Datos en tiempo real directos |
| **Sanity** | Gestión de contenido sin código |
| **Next.js ISR** | SEO perfecto + datos frescos |
| **Vercel** | Deploy en 1 click, 0 config |
| **TypeScript** | Menos bugs, mejor DX |

---

## 💰 Costos (TODO GRATIS)

- ✅ **Vercel**: Free tier (100GB bandwidth)
- ✅ **Sanity**: Free tier (3 usuarios, CDN ilimitado)
- ✅ **Next.js**: Open source
- ✅ **Exaroton**: Ya lo tienes

---

## 📋 Roadmap de Desarrollo

**Fase 1** (1-2 días)
- Setup Next.js + Tailwind
- Landing page básica
- Integración API Exaroton

**Fase 2** (2-3 días)
- Setup Sanity CMS
- Sección de noticias
- Galería de imágenes

**Fase 3** (1-2 días)
- Dashboard servidores con stats
- Animaciones y polish
- SEO completo

**Fase 4** (1 día)
- Integración Discord (botón CTA, widget)
- Testing y deploy

---

## 🎯 ¿Comenzamos?

¿Quieres que te cree un **repositorio base** con:
- ✅ Next.js 14 configurado
- ✅ Tailwind + shadcn/ui
- ✅ Cliente API Exaroton tipado
- ✅ Estructura SEO completa
- ✅ Ejemplo de Server Card con datos reales
- ✅ Setup inicial de Sanity

**¿En qué repositorio lo creo?** (formato: `mijecaap/nombre-repo`)