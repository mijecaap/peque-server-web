# Copilot Instructions - Minecraft Server Web

## Project Overview

Next.js 15 (App Router) web application for a Minecraft server community. Integrates with Exaroton API for real-time server stats and Sanity.io CMS for content management (news, galleries). Uses TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, and SWR for data fetching.

## Architecture & Key Patterns

### App Structure
- **Marketing pages**: `app/(marketing)/` - SSG/ISR public pages (landing, servers, news, gallery)
- **API routes**: `app/api/exaroton/` - Proxy layer to hide Exaroton API keys from client
- **UI components**: `components/ui/` - shadcn/ui components (Card, Badge, Button, Avatar)
- **Custom components**: `components/` - Project-specific components (ServerCard, NewsCard, etc.)
- **Utilities**: `lib/` - API clients, hooks, and utilities (Exaroton, Sanity, SWR hooks)
- **Types**: `types/` - TypeScript interfaces for Exaroton and Sanity data models

### Core Integration Points

**Exaroton API Flow**: Client → Next.js API Route (`app/api/exaroton/*`) → Exaroton API
- Environment variable: `EXAROTON_API_KEY` (server-side only)
- Client code: `lib/exaroton.ts` with typed responses
- Real-time polling: SWR with 30s `refreshInterval`

**Sanity CMS**: 
- Client config: `lib/sanity.ts` using `@sanity/client` and `next-sanity`
- Environment variables: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`
- Schemas: `sanity/schemas/` (news.ts, gallery.ts)
- Queries: Use GROQ in `lib/sanity-queries.ts`
- Images: Optimize with `@sanity/image-url` builder

### Data Fetching Strategy
- **ISR for content pages**: News and galleries use `revalidate: 60` for fresh content
- **Client-side real-time**: Server stats use SWR hooks (`lib/hooks/useServers.ts`) with automatic revalidation
- **SSG for static pages**: Landing page and other static content pre-rendered at build time

## Development Workflow

### Essential Commands
```bash
npm run dev          # Start Next.js dev server (port 3000)
npm run build        # Production build (runs next-sitemap post-build)
npm run lint         # ESLint with Next.js + TypeScript config
```

### Sanity Studio (when set up)
```bash
cd sanity/
npm run dev          # Start Sanity Studio (port 3333)
```

### Critical Environment Variables
Create `.env.local` (never commit):
```
EXAROTON_API_KEY=your_api_key_here
NEXT_PUBLIC_SANITY_PROJECT_ID=project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Code Conventions

### TypeScript Standards
- **Strict mode enabled**: No `any` types - always define interfaces in `types/`
- **Component props**: Define explicit interface for all component props
- **API responses**: Type all Exaroton and Sanity responses with interfaces
- **Path aliases**: Use `@/` imports (configured in `tsconfig.json`)

### Styling Approach
- **Tailwind CSS v4**: Uses `@theme inline` in `globals.css` (new v4 syntax)
- **Design system**: shadcn/ui "New York" style with neutral base color
- **Theme variables**: CSS custom properties in `globals.css` (light/dark mode support)
- **Utility function**: Use `cn()` from `lib/utils.ts` for conditional className merging
- **Animations**: Framer Motion for complex animations, `tw-animate-css` for simpler effects
- **Responsive**: Mobile-first approach with Tailwind breakpoints

### Component Patterns
```tsx
// Example component structure
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface ServerCardProps {
  server: ExarotonServer
  className?: string
}

export function ServerCard({ server, className }: ServerCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card", className)}>
      {/* Component content */}
    </div>
  )
}
```

### Data Fetching Pattern
```tsx
// Client component with SWR
"use client"

import { useServers } from "@/lib/hooks/useServers"

export function ServerList() {
  const { servers, error, isLoading } = useServers()
  
  if (isLoading) return <Skeleton />
  if (error) return <ErrorMessage />
  
  return servers.map(server => <ServerCard key={server.id} server={server} />)
}
```

## Critical Implementation Rules

### Context7 Dependency (MANDATORY - READ FIRST)

**🚨 MANDATORY: Use Context7 BEFORE implementing ANY feature 🚨**

Context7 is an MCP (Model Context Protocol) server that contains up-to-date documentation for ALL project libraries. It is your source of truth for correct implementations.

**Mandatory workflow:**
1. **BEFORE** writing code → Query Context7 for the specific library
2. Read the updated documentation from Context7
3. Implement using patterns and APIs documented in Context7
4. Context7 has the MOST RECENT documentation - always supersedes model memory

**Libraries that REQUIRE Context7:**
- Next.js 15 (App Router, Server Components, API Routes, Metadata)
- React 19 (new hooks, Server Components)
- Tailwind CSS v4 (new `@theme inline` syntax)
- Framer Motion (animations)
- SWR (data fetching and revalidation)
- Sanity.io (`@sanity/client`, `next-sanity`, GROQ queries)
- shadcn/ui (components and variants)
- Any other project dependency

**How to use Context7:**
```typescript
// 1. Before implementing: "Get Context7 documentation for Next.js 15 App Router metadata"
// 2. Context7 will provide the updated API
// 3. Implement with Context7 information
```

**NEVER implement based solely on prior knowledge** - libraries change constantly. Context7 ensures you use the correct APIs and patterns from the versions installed in this project.

### API Security
- **Never expose API keys to client**: All Exaroton calls go through `app/api/exaroton/*` routes
- **Use environment variables**: Server-side keys without `NEXT_PUBLIC_` prefix
- **CORS configuration**: Update Sanity CORS settings for production domains

### Performance Optimization
- **Image optimization**: Always use `next/image` with width/height or fill
- **Sanity images**: Use `@sanity/image-url` builder with format/quality params
- **Code splitting**: Use dynamic imports for heavy components
- **Lighthouse targets**: Performance >90, Accessibility >90, SEO 100

### SEO Requirements
- **Metadata**: Export `generateMetadata()` function in each page
- **Sitemap**: Auto-generated via `next-sitemap` (config: `next-sitemap.config.js`)
- **JSON-LD**: Use structured data for Organization/Article schemas
- **OG images**: Dynamic Open Graph images for news articles

## Common Tasks & Patterns

### Adding a New shadcn/ui Component
```bash
npx shadcn@latest add [component-name]
```
Components install to `components/ui/` automatically.

### Creating a New API Route
```typescript
// app/api/exaroton/[endpoint]/route.ts
import { NextResponse } from "next/server"
import { getServerData } from "@/lib/exaroton"

export async function GET(request: Request) {
  try {
    const data = await getServerData()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}
```

### Implementing ISR Page
```typescript
// app/(marketing)/news/page.tsx
import { client } from "@/lib/sanity"
import { newsQuery } from "@/lib/sanity-queries"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function NewsPage() {
  const articles = await client.fetch(newsQuery)
  return <div>{/* Render articles */}</div>
}
```

## Known Gotchas

1. **Tailwind v4 syntax**: Uses new `@import "tailwindcss"` and `@theme inline` - different from v3
2. **Empty folders**: `sanity/`, `app/api/exaroton/`, `app/(marketing)/` are scaffolded but empty (see `TAREAS_DESARROLLO.md`)
3. **Route groups**: `(marketing)` folder doesn't affect URL structure - purely organizational
4. **SWR revalidation**: Default 30s polling for server stats - adjust if API rate limits are hit
5. **Dark mode**: Built-in via CSS variables - toggle class on `<html>` element

## Project Context

**Current Status**: Phase 0 complete (dependencies installed, structure scaffolded). Active development focuses on Phase 1 (API integration) and Phase 2 (Sanity CMS setup). See `TAREAS_DESARROLLO.md` for detailed task breakdown.

**Documentation References**:
- Project roadmap: `PRD.md` - Technical decisions and architecture
- Task breakdown: `TAREAS_DESARROLLO.md` - Step-by-step implementation guide (español)
- Standard Next.js docs: `README.md`

**Target Deployment**: Vercel with automatic deployments from main branch.
