# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [1.0.0] - 2025-10-20

### 🎉 Lanzamiento Inicial

Primera versión estable del sitio web del servidor de Minecraft con integración completa de Exaroton API y Sanity CMS.

### ✨ Agregado

#### Infraestructura y Configuración
- Configuración inicial del proyecto con Next.js 15 (App Router) y TypeScript
- Integración de Tailwind CSS v4 con tema personalizado gaming
- Configuración de shadcn/ui con componentes base (Card, Badge, Button, Avatar, Progress, Tooltip, Skeleton, Input)
- Setup de variables de entorno para API keys y configuración
- Estructura de carpetas organizada con route groups y separación de concerns

#### Integración Exaroton API
- Cliente API tipado para Exaroton con TypeScript (`lib/exaroton.ts`)
- Tipos TypeScript completos para respuestas de la API (`types/exaroton.ts`)
- API Routes proxy en Next.js para ocultar API keys del cliente
  - `/api/exaroton/servers` - Lista de servidores
  - `/api/exaroton/servers/[id]` - Detalles de servidor específico
- Hook personalizado `useServers` con SWR para polling en tiempo real (30s)
- Manejo de errores y estados de carga

#### Sistema de Noticias (Sanity CMS)
- Configuración completa de Sanity Studio
- Schema de noticias con campos:
  - Título, slug, imagen destacada
  - Categoría (Actualización, Evento, Anuncio)
  - Fecha de publicación, autor, excerpt
  - Contenido rico con Portable Text
- Página de lista de noticias con ISR (revalidación cada 60s)
- Páginas dinámicas de noticias individuales con SSG
- Integración de `@portabletext/react` para renderizado de contenido rico
- Optimización de imágenes desde Sanity CDN con `@sanity/image-url`

#### Sistema de Galería
- Schema de galería en Sanity con soporte para múltiples imágenes
- Página de galería con grid responsive
- Integración de lightbox con `react-photo-view`
- Optimización de imágenes con next/image y Sanity CDN
- Animaciones stagger con Framer Motion

#### Dashboard de Servidores
- Vista de lista de servidores con información en tiempo real
- Componente `ServerCard` con:
  - Estado del servidor (online/offline/starting/stopping)
  - Contador de jugadores con barra de progreso
  - Información de RAM, versión, software
  - Botón para copiar IP al portapapeles
  - MOTD del servidor
- Componente `StatusBadge` con indicadores visuales por estado
- Componente `PlayerCount` con visualización de jugadores actuales/máximo
- Sistema de filtros y búsqueda de servidores
- Polling automático cada 30 segundos
- Estados de carga con skeletons

#### Páginas y Navegación
- Landing page con:
  - Hero section llamativo con gradientes
  - Sección de características con iconos
  - Estadísticas en tiempo real de servidores
  - Animaciones de entrada con Framer Motion
- Header responsive con:
  - Navegación principal (Inicio, Servidores, Noticias, Galería)
  - Menú hamburguesa para móvil
  - Sticky positioning con backdrop blur
  - Botón CTA para Discord
- Footer con:
  - Tres columnas (información, links, redes sociales)
  - Enlaces a redes sociales con iconos
  - Copyright dinámico
  - Responsive design

#### UI/UX y Animaciones
- Sistema de animaciones reutilizables con Framer Motion (`lib/animations.ts`)
  - fadeIn, slideUp, staggerContainer, scaleIn
- Tema dark mode por defecto con soporte para modo claro
- Diseño responsive mobile-first
- Efectos hover y transiciones suaves
- Tooltips informativos
- Componente de cliente para galería con interactividad

#### Developer Experience
- Configuración de ESLint y TypeScript strict mode
- Path aliases con `@/` para imports limpios
- Utility function `cn()` para manejo de classNames
- Tipos TypeScript en todo el proyecto (sin uso de `any`)
- Código modular y reutilizable
- Documentación inline en funciones críticas

### 🔧 Configuración Técnica

#### Dependencias Principales
- **Framework**: Next.js 15.5.6, React 19.1.0
- **Styling**: Tailwind CSS v4, Framer Motion 12.23.24
- **CMS**: Sanity Client 7.12.0, next-sanity 10.1.4
- **Data Fetching**: SWR 2.3.6, Axios 1.12.2
- **UI Components**: shadcn/ui, Lucide React, Radix UI
- **Content**: @portabletext/react, react-photo-view

#### Características de Rendimiento
- ISR (Incremental Static Regeneration) para contenido dinámico
- SSG (Static Site Generation) para páginas estáticas
- Optimización automática de imágenes con next/image
- Code splitting y lazy loading automático
- Polling eficiente con SWR y revalidación inteligente

### 📚 Documentación
- README.md con instrucciones de desarrollo estándar de Next.js
- PRD.md con arquitectura técnica y decisiones de diseño
- TAREAS_DESARROLLO.md con guía detallada de implementación (español)
- Copilot instructions para desarrollo consistente
- Variables de entorno documentadas en `.env.example` (implicado)

### 🔒 Seguridad
- API keys protegidas en servidor (no expuestas al cliente)
- Proxy de API Routes para ocultar credenciales
- Variables de entorno segregadas (NEXT_PUBLIC_ para cliente)
- CORS configurado en Sanity para dominios específicos

### 🎨 Diseño
- Paleta de colores gaming (verde Minecraft, grises oscuros)
- Tipografía legible y moderna
- Iconografía consistente con Lucide React
- Espaciado y jerarquía visual clara
- Accesibilidad considerada (semantic HTML, contraste)

---

## [1.1.0] - 2025-10-20

### ✨ Agregado

#### Formateo de MOTD de Minecraft
- **Integración de `@sfirew/minecraft-motd-parser`**: Librería para parsear y renderizar códigos de formato de Minecraft
- **Componente `MinecraftMOTD`**:
  - Convierte códigos de color de Minecraft (§a, §b, §c, etc.) a HTML estilizado
  - Soporta todos los formatos: negrita (§l), cursiva (§o), subrayado (§n), tachado (§m)
  - Soporta códigos hex de Minecraft 1.16+
  - Estilo de consola auténtico de Minecraft:
    - Fondo negro (#000000) como en el juego
    - Fuente monoespaciada (font-mono)
    - Text shadow para efecto de profundidad
    - Colores fieles a los originales de Minecraft
  - Manejo de errores con fallback que limpia códigos si falla el parser
  - Optimizado con `useMemo` para evitar re-renders innecesarios

#### Mejoras en ServerCard
- El MOTD ahora se muestra con colores y formatos de Minecraft
- Experiencia visual más auténtica y fiel al juego
- Mejor legibilidad del mensaje del servidor

#### Ejemplos y Testing
- Página de test (`/test-theme`) actualizada con ejemplos de MOTD:
  - Colores básicos
  - Formatos (negrita, cursiva, subrayado, tachado)
  - MOTD de servidores reales (estilo Hypixel)
  - Soporte para múltiples líneas

### 📦 Dependencias

#### Agregadas
- `@sfirew/minecraft-motd-parser@1.1.6` - Parser de MOTD de Minecraft con soporte completo de códigos de color y formato

---

## [Unreleased]

## Notas de Versión

### Versionado Semántico
Este proyecto sigue [SemVer](https://semver.org/):
- **MAJOR** (X.0.0): Cambios incompatibles con versiones anteriores
- **MINOR** (0.X.0): Nuevas funcionalidades compatibles con versiones anteriores
- **PATCH** (0.0.X): Corrección de bugs compatibles con versiones anteriores

### Convenciones de Changelog
- **Agregado**: Para nuevas características
- **Cambiado**: Para cambios en funcionalidades existentes
- **Deprecado**: Para características que serán removidas
- **Removido**: Para características removidas
- **Corregido**: Para corrección de bugs
- **Seguridad**: Para vulnerabilidades

---

**[1.1.0]**: https://github.com/mijecaap/peque-server-web/releases/tag/v1.1.0
**[1.0.0]**: https://github.com/mijecaap/peque-server-web/releases/tag/v1.0.0
