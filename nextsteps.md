# Next steps – Not Idea UI (lib mode + playground)

Este plan convierte el repo en una librería CSS en “lib mode” con Vite, conservando fuentes Tailwind (con `@apply`, `@theme`, etc.) y añade un playground con React + React Router 7 para demo y pruebas.

## Fase 0 — Auditoría y decisiones
- [√] Mantener núcleo como librería CSS (no JS). Playground separado en `playground/`.
- [√] Dos entregables de estilos:
  - Compilado: `dist/css/not-idea-ui.css` y minificado `dist/css/not-idea-ui.min.css`.
  - Raw Tailwind-friendly (con `@apply` intacto): `dist/tailwind/` (+ alias `dist/tailwind/not-idea-ui.css` que reexporta `main.css`).
- [√] Conservar paleta y tipografías vía `src/assets/theme.css` (usuario puede sobreescribir variables CSS).
- [√] Publicar solo CSS (nada de JS) y marcar `sideEffects` para que los bundlers no tree-shakeen los CSS.

## Fase 1 — Tooling base (repo)
- [√] Añadir dependencias de build (dev):
  - `vite`, `@tailwindcss/vite`, `lightningcss`, `rimraf`.
- [√] Mantener `tailwindcss` en `peerDependencies` (>=4.1) y en `devDependencies` para el build local.
- [√] Añadir `.editorconfig` (prettier opcional) para formato consistente.
- [√] Actualizar ajustes locales (ej. `.vscode/settings.json`); README se reescribirá en la Fase 7.

## Fase 2 — Build de librería (Vite lib mode)
- [√] Crear `vite.config.ts` en la raíz enfocado al build CSS:
  - `build.rollupOptions.input` apuntando a `src/assets/main.css`.
  - `output.assetFileNames` forzando `css/not-idea-ui.css` como salida principal.
  - Sin JS adicional (`entryFileNames` → `noop.js`, eliminado en script post build).
- [√] Scripts en `package.json`:
  - `build:lib`: `vite build` (usa config por defecto).
  - `build:raw:alias`: copia `src/assets/**` → `dist/tailwind/` y crea alias `@import './main.css';`.
  - `build:min`: minificar `dist/css/not-idea-ui.css` → `dist/css/not-idea-ui.min.css` con `lightningcss`.
  - `build`: `rimraf dist && vite build && node scripts/build-raw-alias.mjs && node scripts/minify-css.mjs`.
- [√] `package.json` (publishing):
  - `files`: `dist/**/*`.
  - `sideEffects`: `["**/*.css"]`.
  - `exports`:
    - `./css/not-idea-ui.css` → `./dist/css/not-idea-ui.css`.
    - `./css/not-idea-ui.min.css` → `./dist/css/not-idea-ui.min.css`.
    - `./tailwind/not-idea-ui.css` → `./dist/tailwind/not-idea-ui.css`.
  - Campo `style`: `dist/css/not-idea-ui.css`.
- [√] Validar que `@import "./theme.css";` y rutas relativas a `components/` y `layout/` funcionen desde `dist/tailwind/`.

## Fase 3 — Playground (React + React Router 7)
- [√] Estructura: `playground/` con Vite React + TS.
- [√] Dependencias (runtime): `react`, `react-dom`, `react-router@^7`.
- [√] Dev deps: `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `typescript`.
- [√] Importar librería local en el playground de dos formas:
  - Modo compilado cargado vía `src/styles/library.css`.
  - Modo raw ejemplificado en `src/styles/library-raw.css` para recompilar con Tailwind.
- [√] Router v7: crear rutas `/`, `/components/buttons`, `/components/badges`, `/components/alerts`.
- [√] Crear un toggle de tema que reemplace variables de `:root` para validar personalización.
- [√] Scripts: `dev`, `build`, `preview` en `playground/package.json`.

## Fase 4 — Theming y DX
- [√] Mantener `@theme` y variables en `src/assets/theme.css` como contrato estable (comentario introductorio añadido).
- [√] Documentar cómo overridear tipografías y colores en README (`Theming` + ejemplos con `theme.css`).
- [√] Exponer lista de CSS Custom Properties públicas en la documentación.
- [√] Confirmar que los componentes usan variables de tema (se documenta que el override se hace vía CSS variables).

## Fase 5 — Empaquetado y compatibilidad
- [√] Añadir `engines` y `packageManager` en `package.json` para fijar versiones mínimas.
- [√] Documentar paths de import (`css/` y `tailwind/`) en README.
- [√] Mantener `peerDependencies.tailwindcss` en rango amplio (4.1+).
- [√] CHANGELOG preparado para `3.0.0` destacando cambios rompientes.

## Fase 6 — Calidad y automatización
- [√] Añadir `stylelint` + configs (`stylelint.config.cjs`) y script `lint:css`.
- [√] Configurar `lint-staged` + `simple-git-hooks` para validar CSS en cada commit.
- [√] Workflow de GitHub Actions que instala dependencias, ejecuta lint y compila la librería en push/PR.

## Fase 7 — Migración y documentación
- [√] README reescrito con instrucciones para Tailwind v4, import paths y theming.
- [√] CHANGELOG actualizado con la entrada 3.0.0.
- [√] `.vscode/settings.json` verificado (paths apuntan a `dist/`).

---

## Checklist de implementación (tareas accionables)
- [√] Añadir dev deps: `vite`, `@tailwindcss/vite`, `lightningcss`, `rimraf`.
- [√] Crear `vite.config.ts` (root) para el build CSS + control de salidas en `dist/css/`.
- [√] Scripts de build: `build:lib`, `build:raw:alias`, `build:min`, `build`.
- [√] Ajustar `package.json`: `files`, `exports`, `style`, `sideEffects`.
- [√] Scaffold `playground/` (Vite React + TS, Router v7, plugin-react).
- [√] Demo pages + rutas y selector de tema (variables CSS).
- [√] Actualizar README y CHANGELOG.
- [√] CI básico (opcional) y pre-commit hooks.

## Comandos sugeridos (bun; equivalentes para npm/pnpm)
- Instalar base (root):
  - `bun add -D vite @tailwindcss/vite lightningcss rimraf stylelint stylelint-config-standard stylelint-config-tailwindcss stylelint-order lint-staged simple-git-hooks`
- Playground:
  - `bun create vite playground --template react-ts`
  - `cd playground && bun add react-router react-router-dom`
  - `bun add -D @vitejs/plugin-react @tailwindcss/vite typescript`

## Criterios de aceptación
- Build genera:
  - `dist/css/not-idea-ui.css` y `dist/css/not-idea-ui.min.css` válidos, con minificación (Tailwind aplica autoprefix por defecto).
  - `dist/tailwind/**` contiene los fuentes originales (con `@apply`) y `not-idea-ui.css` alias funcional.
- Imports funcionan según README (compilado y raw).
- Playground arranca (`dev`) y demuestra componentes, rutas v7 y theming por variables.
- Sin dependencias JS en el paquete final (solo CSS) y `peerDependencies.tailwindcss` correcto.

## Notas sobre Tailwind v4

- El modo raw mantiene `@apply` para que el consumidor pueda recompilar con su propia configuración/tema si lo desea.

---

Todas las fases planificadas están completas; avísame si quieres continuar con nuevas mejoras o preparar la versión 3.0 para publicación.
