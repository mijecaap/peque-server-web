# 🚀 Alternativas de Deployment (Sin Vercel)

Dado que Vercel tiene problemas temporales, aquí hay 3 alternativas **gratuitas** listas para usar:

---

## ✅ Opción 1: Netlify (RECOMENDADA - Más fácil)

**Ventajas:**
- ✅ Deploy en 2 minutos
- ✅ Soporte nativo para Next.js 15
- ✅ 100GB bandwidth/mes gratis
- ✅ SSL automático
- ✅ Deploy automático desde GitHub

### Pasos para Deploy en Netlify:

1. **Ir a Netlify**
   - Visita [app.netlify.com](https://app.netlify.com)
   - Login con GitHub

2. **Importar Proyecto**
   - Click en "Add new site" → "Import an existing project"
   - Selecciona GitHub
   - Busca y selecciona `mijecaap/peque-server-web`

3. **Configurar Build**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Framework:** Next.js (detectado automáticamente)

4. **Variables de Entorno**
   - Click en "Show advanced" → "New variable"
   - Añade:
     ```
     EXAROTON_API_KEY = [tu-api-key]
     NEXT_PUBLIC_SITE_URL = https://tu-proyecto.netlify.app
     NEXT_PUBLIC_SANITY_PROJECT_ID = wcwrnwlc
     NEXT_PUBLIC_SANITY_DATASET = production
     ```

5. **Deploy**
   - Click en "Deploy site"
   - Espera 3-4 minutos
   - ✅ Tu sitio estará en `https://random-name.netlify.app`

6. **Cambiar dominio (opcional)**
   - Site settings → Change site name → `pequeserver`
   - Ahora será: `https://pequeserver.netlify.app`

### Comandos CLI (Alternativa):

```powershell
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod

# Sigue las instrucciones interactivas
```

---

## ⚡ Opción 2: Cloudflare Pages (Muy rápido)

**Ventajas:**
- ✅ Red global ultrarrápida (Cloudflare CDN)
- ✅ Bandwidth ilimitado gratis
- ✅ 500 builds/mes
- ✅ Integración con GitHub

### Pasos para Deploy en Cloudflare Pages:

1. **Ir a Cloudflare**
   - Visita [dash.cloudflare.com](https://dash.cloudflare.com)
   - Crea cuenta o login

2. **Workers & Pages**
   - Sidebar → "Workers & Pages"
   - Click en "Create application"
   - Selecciona "Pages" tab
   - Click en "Connect to Git"

3. **Conectar Repositorio**
   - Autoriza GitHub
   - Selecciona `mijecaap/peque-server-web`

4. **Configurar Build**
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Node version:** 20

5. **Variables de Entorno**
   - Expandir "Environment variables"
   - Añade las 4 variables (igual que Netlify)

6. **Deploy**
   - Click en "Save and Deploy"
   - Espera 3-4 minutos
   - ✅ Tu sitio estará en `https://peque-server-web.pages.dev`

### Comandos CLI (Alternativa):

```powershell
# Instalar Wrangler (CLI de Cloudflare)
npm install -g wrangler

# Login
wrangler login

# Deploy Pages
npx wrangler pages deploy .next --project-name=peque-server-web

# Configurar secrets
npx wrangler pages secret put EXAROTON_API_KEY
```

---

## 🚂 Opción 3: Railway (Con base de datos si la necesitas)

**Ventajas:**
- ✅ $5 de crédito gratis/mes
- ✅ Ideal si después quieres añadir PostgreSQL/Redis
- ✅ Deploy automático desde GitHub
- ✅ Logs en tiempo real

### Pasos para Deploy en Railway:

1. **Ir a Railway**
   - Visita [railway.app](https://railway.app)
   - Login con GitHub

2. **Nuevo Proyecto**
   - Click en "New Project"
   - Selecciona "Deploy from GitHub repo"
   - Busca `peque-server-web`

3. **Configuración Automática**
   - Railway detecta Next.js automáticamente
   - No necesitas configurar build command

4. **Variables de Entorno**
   - Click en tu proyecto
   - Tab "Variables"
   - Click en "New Variable"
   - Añade las 4 variables (igual que anteriores)

5. **Deploy**
   - Railway despliega automáticamente
   - ✅ Tu sitio estará en `https://peque-server-web.up.railway.app`

### Comandos CLI (Alternativa):

```powershell
# Instalar Railway CLI
npm i -g @railway/cli

# Login
railway login

# Link proyecto
railway link

# Deploy
railway up

# Añadir variables
railway variables set EXAROTON_API_KEY=tu-key
```

---

## 📊 Comparación Rápida

| Característica | Netlify | Cloudflare | Railway |
|----------------|---------|------------|---------|
| **Setup** | ⭐⭐⭐ Muy fácil | ⭐⭐ Moderado | ⭐⭐⭐ Muy fácil |
| **Velocidad** | ⭐⭐ Buena | ⭐⭐⭐ Excelente | ⭐⭐ Buena |
| **Bandwidth** | 100GB/mes | Ilimitado | 100GB/mes |
| **SSL gratis** | ✅ | ✅ | ✅ |
| **Build time** | 300min/mes | 500 builds | Ilimitado |
| **Mejor para** | Sitios estáticos | CDN global | Apps completas |

---

## 🎯 Recomendación Final

**Para este proyecto específico:**

1. **Primera opción: Netlify**
   - Más simple, perfecto para Next.js
   - Mejor documentación
   - Comunidad grande

2. **Segunda opción: Cloudflare Pages**
   - Si necesitas máximo performance
   - Red global de Cloudflare
   - Bandwidth ilimitado

3. **Tercera opción: Railway**
   - Si después quieres añadir backend/DB
   - Logs más detallados

---

## 🔧 Configurar CORS en Sanity (Para cualquier opción)

Después del deploy, añade tu nuevo dominio a Sanity:

1. Ve a [sanity.io/manage](https://www.sanity.io/manage)
2. Settings → API → CORS Origins
3. Añade:
   - Netlify: `https://tu-proyecto.netlify.app`
   - Cloudflare: `https://peque-server-web.pages.dev`
   - Railway: `https://peque-server-web.up.railway.app`

---

## 📝 Checklist Post-Deploy

Después de elegir plataforma y desplegar:

- [ ] Sitio carga correctamente
- [ ] Variables de entorno configuradas
- [ ] CORS añadido en Sanity
- [ ] `/servers` muestra datos de Exaroton
- [ ] `/news` muestra noticias de Sanity
- [ ] `/gallery` muestra imágenes
- [ ] Imágenes de Sanity cargan
- [ ] No hay errores en consola

---

## 🆘 Troubleshooting

### Error: "Module not found"
**Solución:** Asegúrate de que `package.json` tiene todas las dependencias. Ejecuta localmente:
```powershell
npm ci
npm run build
```

### Error: "Environment variable not found"
**Solución:** Verifica que añadiste las 4 variables en el dashboard de la plataforma.

### Imágenes no cargan
**Solución:** 
1. Verifica CORS en Sanity
2. Verifica `next.config.ts` tiene:
```typescript
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'cdn.sanity.io' }
  ]
}
```

---

## 🔄 Volver a Vercel (cuando se solucione)

Cuando Vercel esté operativo, puedes migrar de vuelta:

1. Pausa deploys en la plataforma actual
2. Conecta repo en Vercel
3. Copia variables de entorno
4. Deploy en Vercel
5. Actualiza CORS en Sanity con nuevo dominio
6. Cambia DNS si tienes dominio custom

---

**¿Cuál prefieres probar primero?** Te recomiendo **Netlify** por simplicidad.
