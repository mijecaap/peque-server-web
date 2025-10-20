# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [1.5.0] - 2025-10-20

### 🎨 Rediseño Mayor

#### Landing Page Completamente Renovada
- **Nueva lógica de negocio implementada**: Orientada a conversión y diferenciación premium
- **Hero Section rediseñado**:
  - Badge "Servidor Premium de Minecraft" con icono Crown
  - Título impactante: "La Experiencia Definitiva de Minecraft"
  - Estadísticas dinámicas en tiempo real (jugadores activos, servidores)
  - CTAs principales: "Cómo Entrar" y "Unirse a Discord"
  - Card de acceso rápido a servidores premium
  - Mensaje claro: acceso gratuito requiere Discord primero

#### Sección de Estadísticas Clave
- **4 métricas principales con datos reales**:
  - Jugadores Activos (del servicio de Exaroton)
  - Uptime calculado dinámicamente (% servidores online)
  - Servidores Interconectados (cantidad real)
  - Protección de Claims (100% garantizado)
- **Iconografía mejorada**: Users, Clock, Server, Shield
- **Diseño con círculos de iconos y gradientes**

#### Sección de Características Diferenciadoras
- **6 beneficios únicos destacados**:
  1. **Mundos Personalizados**: Biomas únicos y dimensiones exclusivas
  2. **Misiones Épicas**: Desafíos con recompensas exclusivas
  3. **Hardware Premium**: Cero lag, máxima estabilidad 24/7
  4. **Comunidad Activa**: Eventos frecuentes y torneos
  5. **Múltiples Servidores**: Survival, Creativo, Anárquico, Minijuegos (número dinámico)
  6. **Protección Anti-Griefing**: Sistema de claims para construcciones
- **Cards mejoradas**: Hover effects con scale y shadow
- **Iconos específicos**: Globe, Trophy, Zap, Users, Server, Shield

#### Sección "Elige Tu Forma de Jugar"
- **Comparación lado a lado**:
  - **Premium**: Badge "Recomendado", 5 beneficios listados, CTA "Ver Cómo Acceder"
  - **Gratuito**: Descripción del modo anárquico, 4 beneficios, nota de IP en Discord
- **Visual diferenciado**:
  - Premium: gradiente primary/accent, círculo decorativo
  - Gratuito: diseño más simple, focus en comunidad
- **Estrategia clara**: Premium visible y accesible, gratuito dirige a Discord

#### CTA Final Mejorado
- **Card con múltiples capas visuales**: Gradiente, grid background, badges
- **Mensaje emocional**: "Comienza Tu Aventura Hoy", "crear recuerdos inolvidables"
- **Doble CTA**: "Cómo Entrar" (principal) y "Ver Servidores" (secundario)
- **Link a Discord** en footer del card para preguntas

### 🔧 Mejoras Técnicas
- **Datos en tiempo real**: Integración completa con `useServers()` hook
- **Cálculo dinámico de uptime**: Basado en servidores online vs total
- **Estadísticas reales**: Jugadores activos y cantidad de servidores desde API
- **Manejo de estados**: Loading, error, y datos correctamente gestionados

### 🎯 Lógica de Negocio Aplicada
- ✅ **Presentación de valor**: "Experiencia Definitiva", diferenciación clara
- ✅ **Acceso Premium vs Gratuito**: Visibilidad de premium, Discord para gratuito
- ✅ **Características diferenciadoras**: 6 puntos únicos destacados
- ✅ **Elementos de conversión**: CTAs estratégicos, mensajes emocionales
- ✅ **Métricas de confianza**: Uptime, players, servers, claims
- ✅ **Fomento de comunidad**: Discord integrado en múltiples puntos

### 🎨 Mejoras de UI/UX
- **Nuevos iconos de Lucide**: Globe, Trophy, Crown, Sparkles, MapPin, Clock
- **Badges estratégicos**: "Servidor Premium", "Recomendado", "Únete Ahora"
- **Gradientes mejorados**: Combinaciones primary/accent más sofisticadas
- **Grid backgrounds**: Textura sutil con SVG pattern
- **Círculos decorativos**: Elementos visuales en cards premium
- **Hover effects**: Scale y shadow en cards de features

---

## [1.4.0] - 2025-10-20

### ♻️ Refactorizado

#### Centralización de Configuración
- **Nuevo archivo `lib/constants.ts`**: Fuente única de verdad para toda la configuración del proyecto
- **SOCIAL_LINKS**: URLs centralizadas de redes sociales
  - Discord: `https://discord.gg/MBwTzfafsp`
  - YouTube: `https://www.youtube.com/@pequeserver`
  - TikTok: `https://www.tiktok.com/@pequeno_servidor`
  - Instagram: `https://www.instagram.com/pequeno_servidor`
- **EXTERNAL_LINKS**: Enlaces externos importantes
  - PayPal: `https://www.paypal.com/paypalme/WednerV`
- **CONTACT_INFO**: Información de contacto del administrador
  - Admin Discord: `@wedner THE JOSE`
  - País del admin: `Costa Rica 🇨🇷`
- **SERVER_CONFIG**: Configuración de servidores
  - Precio premium: `$4 USD`
  - Días de suscripción: `30 días`
  - IP premium: `premium.pequeserver.com`

#### Reemplazo de URLs Hardcodeadas
- **Header**: 2 referencias a Discord actualizadas
- **Footer**: 3 referencias a redes sociales actualizadas
  - Cambiado Discord por TikTok en links del footer
  - Actualizado icono de `MessageCircle` a `Video` (TikTok)
- **Página de inicio**: 1 referencia a Discord actualizada
- **Página "¿Cómo entrar?"**:
  - 3 referencias a Discord actualizadas
  - 1 referencia a PayPal actualizada
  - Precio premium usando constante
  - Días de suscripción usando constante
  - Información de contacto usando constantes

### 🎨 Mejoras de UI
- **Footer**: Reemplazado enlace de Discord por TikTok para mejor presencia en redes

### 🔧 Beneficios Técnicos
- **Mantenibilidad**: Cambiar URLs ahora solo requiere editar un archivo
- **Type-safety**: TypeScript con `as const` para tipos literales
- **Consistencia**: Todas las URLs y configuración en un solo lugar
- **Escalabilidad**: Fácil añadir nuevas constantes de configuración

---

## [1.3.0] - 2025-10-20

### ✨ Agregado

#### Nueva Página: ¿Cómo entrar?
- **Ruta `/como-entrar`**: Página completa de onboarding para nuevos jugadores
- **Lógica de negocio implementada**:
  - Segmentación clara entre acceso Premium (pago) y Gratuito (anárquico)
  - Comparación visual side-by-side de ambas modalidades con cards distintivas
  - Incentivo para unirse a Discord (IP gratuita solo disponible allí)
  - Proceso de conversión de usuarios gratuitos a premium optimizado

#### Sección de Servidores Premium
- **Información detallada** de beneficios premium:
  - Acceso a 7+ servidores exclusivos
  - Pack de mods personalizados
  - Mejor rendimiento y estabilidad
  - Modo Survival exclusivo
  - Lista blanca (whitelist)
  - Soporte prioritario
- **Botón de redirección** a la página de servidores (en lugar de copiar IP)
- **Precio destacado**: $4 USD/mes con badge de Crown animado

#### Sección de Servidor Gratuito
- **Descripción del modo anárquico** sin restricciones
- **Estrategia de comunidad**: IP revelada solo en Discord
- **Call-to-action prominente** para unirse a Discord
- Beneficios claros para comenzar sin costo

#### Guía de Acceso Premium (4 Pasos)
1. **Contacto**: Instrucciones para contactar a @wedner THE JOSE
2. **Pago**: Múltiples métodos documentados:
   - PayPal internacional (paypal.me/WednerV)
   - SINPE, transferencia o efectivo para Costa Rica 🇨🇷
   - Otros intercambios (consultar)
3. **Activación**: Explicación del proceso de whitelist
4. **Pack de mods**: Entrega de mods e instrucciones

#### Guía General de Conexión
- **Requisitos del sistema**: Minecraft Java o Bedrock para PC
- **Restricción de consolas**: Advertencia clara de no soportar PlayStation/Xbox/Switch
- **Paso a paso visual** con iconos:
  - Verificar tener Minecraft
  - Abrir Multijugador
  - Añadir servidor
  - Conectarse y jugar

#### Sección de FAQ Completa
- **7 preguntas frecuentes** con Accordion component:
  - Versiones compatibles
  - Prueba antes de pagar
  - Reglas del servidor
  - Soporte técnico
  - Restricciones de plataforma
  - Pagos recurrentes
  - Política de compartir mods

#### Elementos de UI/UX
- **Badges diferenciados**: Premium (Crown) vs Gratuito (Users)
- **Colores temáticos**: Verde primary para premium, accent para gratuito
- **Iconografía consistente**: Monitor, Gamepad2, Check, Shield, DollarSign, etc.
- **Animaciones Framer Motion**: fadeIn, slideUp, staggerContainer, scaleIn
- **Cards informativos** con gradientes y bordes destacados
- **Layout responsive** optimizado para móvil y desktop

#### Navegación
- **Enlace en Header**: "¿Cómo entrar?" añadido al menú principal
- **Integración con rutas existentes**: Links a /servers y Discord
- **CTA final**: Sección de llamado a la acción con dos botones principales

### 📝 Notas Importantes Implementadas
- Un solo pago da acceso a todos los servidores premium por 30 días
- Política de no compartir mods destacada
- Sistema de recordatorio de renovación mencionado
- Monetización clara con beneficios diferenciados
- Estrategia de comunidad (Discord) integrada en el flujo

### 🎨 Diseño
- Uso de gradientes `from-primary/5 to-accent/5` para destacar premium
- Animación `animate-pulse-slow` en icono Crown
- Cards con bordes `border-primary/50` para premium
- Alert boxes con `bg-accent/10` para información importante
- Espaciado y jerarquía visual optimizada

---

## [1.2.0] - 2025-10-20

### 🔧 Cambiado

#### Navegación
- **Rutas de Noticias y Galería deshabilitadas temporalmente**:
  - Archivos renombrados a `.disabled` para evitar que se generen rutas:
    - `app/(marketing)/news/page.tsx` → `page.tsx.disabled`
    - `app/(marketing)/news/[slug]/page.tsx` → `page.tsx.disabled`
    - `app/(marketing)/gallery/page.tsx` → `page.tsx.disabled`
  - Links de navegación comentados en el Header
  - Las funcionalidades de Sanity CMS permanecen configuradas para uso futuro
  - Reducción del tamaño del bundle al no compilar estas páginas

### 📝 Notas
- Las páginas de noticias y galería están listas para ser reactivadas cuando sea necesario
- Solo requiere renombrar los archivos `.disabled` de vuelta a `.tsx` y descomentar las rutas en el Header
- Toda la infraestructura de Sanity CMS permanece funcional

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

**[1.5.0]**: https://github.com/mijecaap/peque-server-web/releases/tag/v1.5.0
**[1.4.0]**: https://github.com/mijecaap/peque-server-web/releases/tag/v1.4.0
**[1.3.0]**: https://github.com/mijecaap/peque-server-web/releases/tag/v1.3.0
**[1.2.0]**: https://github.com/mijecaap/peque-server-web/releases/tag/v1.2.0
**[1.1.0]**: https://github.com/mijecaap/peque-server-web/releases/tag/v1.1.0
**[1.0.0]**: https://github.com/mijecaap/peque-server-web/releases/tag/v1.0.0
