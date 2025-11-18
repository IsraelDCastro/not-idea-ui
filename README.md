# Not Idea UI

Un pequeño framework de componentes CSS construido sobre Tailwind CSS v4. Incluye variables de tema listas para sobrescribir con tus propios colores y tipografías, y un playground en React Router 7 para probar cada componente antes de integrarlo en tu proyecto.

## Instalación

```bash
npm install not-idea-ui
# o
bun add not-idea-ui
```

## Entradas disponibles

| Entrada | Descripción | Cuándo usarla |
| --- | --- | --- |
| `not-idea-ui/css/not-idea-ui.css` | CSS compilado con Tailwind v4 y autoprefixing | Cuando solo necesitas los estilos listos para producción |
| `not-idea-ui/css/not-idea-ui.min.css` | Versión minificada del bundle anterior | Para servir un archivo optimizado en producción |
| `not-idea-ui/tailwind/not-idea-ui.css` | Versiones “raw” (con `@apply`, `@theme` y parciales) | Cuando quieres recompilar con tu propio `tailwind.config` o modificar tokens |

### Uso en Vite + React

```tsx
// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "not-idea-ui/css/not-idea-ui.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
```

### Uso en modo Tailwind raw

```css
/* styles/theme.css */
@import "./your-custom-theme.css"; /* opcional: sobrescribe variables */
@import "not-idea-ui/tailwind/not-idea-ui.css";

/* ahora puedes usar los @apply expuestos por la librería */
.hero {
  @apply bg-primary-700 text-white rounded-3xl;
}
```

## Theming

La librería exporta variables CSS en `src/assets/theme.css`. Sobrescribe las que necesites antes de importar el bundle.

| Variable | Descripción |
| --- | --- |
| `--font-sans`, `--font-body` | Tipografías base para texto y cuerpo |
| `--color-primary-*`, `--color-secondary-*`, `--color-tertiary-*` | Escalas de color completas (50 → 950) |
| `--shadow-alert`, `--shadow-base` | Sombras usadas en componentes |

Ejemplo rápido:

```css
:root {
  --font-sans: "Poppins", system-ui, sans-serif;
  --color-primary-500: #6366f1;
  --color-primary-700: #4f46e5;
}
```

## Playground

El directorio `playground/` incluye un proyecto Vite React + TypeScript con React Router 7. Sirve para documentar componentes y validar overrides de tema.

Comandos clave:

```bash
cd playground
npm install
npm run dev
```

## Scripts principales

Todos los scripts se definen en la raíz del proyecto.

| Script | Descripción |
| --- | --- |
| `npm run dev` | Ejecuta Vite en modo librería (útil para inspeccionar el bundle) |
| `npm run build` | Genera `dist/css/not-idea-ui.css`, la versión minificada y copia las fuentes raw en `dist/tailwind/` |
| `npm run lint` / `npm run lint:css` | Valida los estilos con Stylelint + Tailwind config |

> ⚠️ **Requisitos**: Node.js 20.19+ o Bun 1.0+ para compilar con Vite 7 y Tailwind v4.

## Calidad y CI

- `stylelint` mantiene consistencia en `src/**/*.css` y en el playground.
- `lint-staged` ejecuta `stylelint --fix` sobre los CSS modificados en cada commit (configurado con `simple-git-hooks`).
- GitHub Actions (`.github/workflows/ci.yml`) instala dependencias, ejecuta `npm run lint:css` y construye la librería.

## Roadmap 3.0.0

- Distribución oficial como librería CSS-only en modo lib de Vite.
- Entregables compilados y raw con preservación de `@apply`.
- Playground actualizado con React Router 7 para documentar componentes.
- Documentación renovada sobre theming y paths de importación.

¡Explora los componentes, ajusta tu propio `theme.css` y comparte feedback! Para ideas o bugs usa los issues en GitHub.
