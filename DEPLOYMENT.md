# 🚀 Guía de Deployment - PequeServer Web

Esta guía te ayudará a desplegar el proyecto en producción usando Vercel.

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener:

- ✅ Cuenta en [Vercel](https://vercel.com) (gratuita)
- ✅ Repositorio Git con el código (GitHub, GitLab, o Bitbucket)
- ✅ API Key de Exaroton
- ✅ Proyecto configurado en Sanity con Project ID

## 🔧 Paso 1: Preparar Variables de Entorno

Necesitarás las siguientes variables de entorno para producción:

```bash
# API de Exaroton (OBLIGATORIO)
EXAROTON_API_KEY=tu_api_key_aqui

# Configuración del sitio
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app

# Sanity CMS (OBLIGATORIO)
NEXT_PUBLIC_SANITY_PROJECT_ID=wcwrnwlc
NEXT_PUBLIC_SANITY_DATASET=production
```

**📝 Nota:** Copia estas variables desde tu archivo `.env.local`

## 🌐 Paso 2: Deploy en Vercel

### Opción A: Deploy desde el Dashboard de Vercel (Recomendado)

1. **Ir a Vercel**
   - Visita [vercel.com/new](https://vercel.com/new)
   - Inicia sesión o crea una cuenta

2. **Importar Repositorio**
   - Click en "Add New Project"
   - Conecta tu cuenta de GitHub/GitLab/Bitbucket
   - Selecciona el repositorio `peque-server-web`
   - Click en "Import"

3. **Configurar Proyecto**
   - **Framework Preset:** Next.js (detectado automáticamente)
   - **Root Directory:** `./` (dejar por defecto)
   - **Build Command:** `npm run build` (por defecto)
   - **Output Directory:** `.next` (por defecto)

4. **Añadir Variables de Entorno**
   - Expandir sección "Environment Variables"
   - Añadir cada variable una por una:
     ```
     Key: EXAROTON_API_KEY
     Value: [tu API key]
     
     Key: NEXT_PUBLIC_SITE_URL
     Value: https://tu-proyecto.vercel.app
     
     Key: NEXT_PUBLIC_SANITY_PROJECT_ID
     Value: wcwrnwlc
     
     Key: NEXT_PUBLIC_SANITY_DATASET
     Value: production
     ```

5. **Deploy**
   - Click en "Deploy"
   - Espera 2-3 minutos mientras se construye
   - ✅ Tu sitio estará disponible en `https://tu-proyecto.vercel.app`

### Opción B: Deploy desde CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy a producción
vercel --prod

# Sigue las instrucciones interactivas
```

## 🔒 Paso 3: Configurar CORS en Sanity

Para que tu sitio en producción pueda acceder a Sanity CMS:

1. **Ir al Dashboard de Sanity**
   - Visita [sanity.io/manage](https://www.sanity.io/manage)
   - Selecciona tu proyecto

2. **Configurar CORS**
   - Ve a **Settings → API → CORS Origins**
   - Click en "Add CORS Origin"
   - Añade tu dominio de producción:
     ```
     https://tu-proyecto.vercel.app
     ```
   - Marca "Allow credentials"
   - Click en "Save"

3. **Orígenes recomendados**
   ```
   http://localhost:3000              (desarrollo)
   https://tu-proyecto.vercel.app     (producción)
   https://tu-dominio.com             (dominio personalizado, si aplica)
   ```

## 🎯 Paso 4: Verificación Post-Deploy

Después del deploy, verifica que todo funciona:

### Checklist de Verificación

- [ ] ✅ El sitio carga correctamente
- [ ] ✅ La página principal muestra el contenido
- [ ] ✅ `/servers` - Muestra los servidores de Exaroton
- [ ] ✅ `/news` - Muestra las noticias desde Sanity
- [ ] ✅ `/gallery` - Muestra las imágenes de la galería
- [ ] ✅ Las imágenes de Sanity se cargan correctamente
- [ ] ✅ No hay errores en la consola del navegador
- [ ] ✅ El sitio es responsive (probar en móvil)
- [ ] ✅ Los links de Discord funcionan
- [ ] ✅ El botón "Copiar IP" funciona en ServerCard

### Herramientas de Verificación

```bash
# Ver logs en tiempo real
vercel logs tu-proyecto.vercel.app

# Verificar build
vercel inspect tu-proyecto.vercel.app
```

## 🌍 Paso 5: Dominio Personalizado (Opcional)

Si tienes un dominio propio:

1. **En Vercel Dashboard**
   - Ve a tu proyecto
   - Click en "Settings" → "Domains"
   - Click en "Add Domain"
   - Ingresa tu dominio: `tuservidor.com`

2. **Configurar DNS**
   - Vercel te dará instrucciones específicas
   - Típicamente necesitas añadir un registro:
     ```
     Type: CNAME
     Name: www (o @)
     Value: cname.vercel-dns.com
     ```

3. **Actualizar Variables de Entorno**
   - En Vercel Settings → Environment Variables
   - Actualiza `NEXT_PUBLIC_SITE_URL` a tu nuevo dominio
   - Redeploy el proyecto

4. **Actualizar CORS en Sanity**
   - Añade tu nuevo dominio a CORS origins
   - Ejemplo: `https://tuservidor.com`

## 🔄 Paso 6: Deployments Automáticos

Vercel automáticamente:

- ✅ Deploy en cada push a `main` (producción)
- ✅ Preview deployments en cada PR
- ✅ Deploy automático en cada commit

### Configurar Branches

En Vercel Settings → Git:

```
Production Branch: main
```

Cada push a `main` desplegará automáticamente a producción.

## 📊 Paso 7: Monitoreo y Logs

### Ver Analytics

1. Ve a tu proyecto en Vercel
2. Click en "Analytics" tab
3. Verás:
   - Pageviews
   - Visitas únicas
   - Países de origen
   - Top páginas

### Ver Logs de Errores

1. Click en "Deployments"
2. Click en el deployment activo
3. Click en "Functions" → Ver logs de API routes
4. Click en "Build Logs" → Ver logs de build

### Alertas

En Settings → Notifications:
- Configura notificaciones por email
- Integra con Slack (opcional)

## 🔧 Troubleshooting

### Error: "Missing Environment Variables"

**Solución:**
1. Ve a Settings → Environment Variables
2. Verifica que todas las variables estén configuradas
3. Redeploy el proyecto

### Error: "CORS Policy Blocked"

**Solución:**
1. Ve a Sanity Dashboard
2. Settings → API → CORS Origins
3. Añade tu dominio de Vercel
4. Asegúrate de marcar "Allow credentials"

### Error: "Failed to Fetch Servers"

**Solución:**
1. Verifica que `EXAROTON_API_KEY` esté correcta
2. Prueba la API key en Postman:
   ```bash
   curl -H "Authorization: Bearer TU_API_KEY" \
        https://api.exaroton.com/v1/servers
   ```
3. Si falla, regenera la API key en Exaroton

### Imágenes de Sanity no cargan

**Solución:**
1. Verifica `next.config.ts` tiene el remote pattern:
   ```typescript
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'cdn.sanity.io',
       },
     ],
   }
   ```
2. Verifica CORS en Sanity
3. Redeploy

### Build Fails

**Solución:**
1. Ejecuta `npm run build` localmente
2. Verifica que no hay errores de TypeScript
3. Verifica que todas las dependencias están en `package.json`
4. Haz push de los cambios

## 📝 Comandos Útiles

```bash
# Ver lista de deployments
vercel ls

# Ver logs del último deployment
vercel logs

# Hacer rollback a un deployment anterior
vercel rollback

# Añadir variable de entorno desde CLI
vercel env add VARIABLE_NAME

# Ver todas las variables de entorno
vercel env ls

# Eliminar un proyecto
vercel remove proyecto-name
```

## 🎉 Deploy Exitoso

¡Felicidades! Tu sitio está ahora en producción.

**URLs importantes:**
- 🌐 Sitio web: `https://tu-proyecto.vercel.app`
- 📊 Dashboard: `https://vercel.com/tu-usuario/peque-server-web`
- 🎨 Sanity Studio: `http://localhost:3333` (local)

## 📚 Recursos Adicionales

- [Documentación de Vercel](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Sanity CORS Guide](https://www.sanity.io/docs/cors)
- [Exaroton API Docs](https://developers.exaroton.com/)

## 🔄 Actualizaciones Futuras

Para desplegar nuevas versiones:

1. Haz tus cambios localmente
2. Prueba con `npm run build`
3. Commit y push a `main`:
   ```bash
   git add .
   git commit -m "feat: nueva característica"
   git push origin main
   ```
4. Vercel automáticamente desplegará los cambios
5. Verifica en `https://tu-proyecto.vercel.app`

---

**¿Necesitas ayuda?** Revisa los logs en Vercel Dashboard o contacta al equipo de desarrollo.
