# Piso7 Dental

Sitio web oficial de **Piso7 Dental** — odontología estética integral en Hermosillo, Sonora. Construido con Next.js 16 (App Router), TypeScript, Tailwind CSS v4 y Motion (Framer Motion).

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm run start   # sirve el build de producción
npm run lint    # ESLint
```

## Estructura

- `src/app` — layout raíz, metadata SEO y la página principal.
- `src/components` — todas las secciones del sitio (Navbar, Hero, Services, Doctors, Ambience, Contact, Footer, WhatsAppButton, etc).
- `src/lib/constants.ts` — **toda la información editable del negocio**: teléfono, enlaces a Facebook/Instagram/Google Maps, lista de servicios, datos de los doctores y valores de marca. Edita este archivo para actualizar textos, teléfonos o enlaces sin tocar los componentes.

## Fotografías reales

Por ahora las secciones "Equipo" y "Clínica" usan placeholders elegantes (iniciales/monograma y texturas) porque el sitio se generó sin acceso a archivos de imagen reales del negocio. Para poner las fotos reales:

1. Coloca las imágenes en `public/images/` (por ejemplo `public/images/doctores/inzunza.jpg` y `.../cambuston.jpg`, `public/images/clinica/recepcion.jpg`).
2. En `src/lib/constants.ts`, agrega la propiedad `photo: "/images/doctores/inzunza.jpg"` a cada doctor dentro de `DOCTORS`.
3. Para las fotos de la clínica (sección "La clínica"), reemplaza el panel correspondiente en `src/components/Ambience.tsx` por una etiqueta `<Image>` de `next/image` apuntando al archivo.

## Tema claro/oscuro

El interruptor de tema vive en `src/components/ThemeToggle.tsx` y usa `next-themes` con estrategia de clase (`.dark` en `<html>`). El tema por defecto es oscuro, fiel a la identidad visual de la marca.

## Contacto y WhatsApp

El botón flotante y todos los CTAs usan el número de WhatsApp definido en `SITE.phoneWa` (`src/lib/constants.ts`).
