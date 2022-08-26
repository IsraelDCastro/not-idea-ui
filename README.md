#### Docs [Español](https://github.com/IsraelDCastro/not-idea-ui#espanol) / [English](https://github.com/IsraelDCastro/not-idea-ui#english)
# <a name="english"></a>[Instalación](#espanol)

Tienes diferentes opciones para instalarlo con **npm o yarn**.

## Empezando

### Como dependencia

Si quieres usarlo con TailwindCSS agregando tus propios estilos y paletas de colores.

Tienes que instalarlo con `npm install not-idea-ui` o `yarn add not-idea-ui`. Después, puedes agregarlo a tu proyecto de diferentes maneras:

###### CSS
```css title="yourmain.css"
@import 'not-idea-ui/css/not-idea-ui.css';

/* o */

@import 'not-idea-ui/css/not-idea-ui.min.css';
```

###### TailwindCSS para usar estilos propios/personalizados (CSS)
```css title="yourmain.css"
@import 'not-idea-ui/tailwind/not-idea-ui.css';
```

###### TailwindCSS para usar estilos propios/personalizados (SCSS)
```css title="yourmain.scss"
@import 'not-idea-ui/main.scss';
```
> :warning: **Nota importante**: Al usar la preferencia TailwindCSS, debe agregar los siguientes estilos que he predefinido en su tailwind.config.js, para evitar errores de que cierta clase no existe.

###### Puntos a considerar:

- Tener al menos la versión "^3.1.0"
- En caso de querer usarlo con SCSS. Debe instalar la dependencia de sass en caso de que use ViteJS. Si usa Webpack, necesita instalar las dependencias de sass y sass-loader.
- Si desea utilizar estilos y colores predeterminados, siga estos pasos: [postcss.config.js](#postcssconfigjs)
- Si desea utilizar sus propios estilos y colores, siga estos pasos: [tailwind.config.js](#tailwindconfigjs)

### Tailwind.config.js predeterminado

Para usar la configuración predeterminada del proyecto, debe crear un `postcss.config.cjs`. Si ya tiene este archivo, simplemente cambie la extensión del archivo de `.js` a `.cjs` para evitar el siguiente error.

<span class="text-red-500 text-sm mb-4 inline-block">TypeError: Cannot read properties of undefined (reading 'config')</code></span>

Agregue esta línea <span class="text-sky-500">`const defaultConfig = "./node_modules/not-idea-ui/tailwind.config.cjs"`</span> a su `postcss.config.cjs`

Debe ser visto:

```js title="postcss.config.cjs" theme="dark"
const defaultConfig = "./node_modules/not-idea-ui/tailwind.config.cjs"

module.exports = {
  plugins: {
    tailwindcss: {
      config: defaultConfig
    },
    // ...
  },
}
```

Y eso es todo, ahora debería estar funcionando sin problema. :estrella:

### Tailwind.config.js personalizado

Para usar su `tailwind.config.js` personalizado, debe eliminar la configuración predeterminada de su `postcss.config.js` y dejarla en blanco, como puede ver a continuación:

```js title="postcss.config.cjs" theme="dark"
module.exports = {
  plugins: {
    tailwindcss: {},
    // ...
  },
}
```

Después de eso, ejecuta `tailwindcss init` para crear `tailwind.config.js` en blanco. Ahora debe completar la configuración de viento de cola con sus colores 'primario, secundario y terciario' y algunas clases personalizadas para evitar algunos errores.

Vea el código y el ejemplo a continuación, asegúrese de copiar cada clase y color. ([Para cualquier referencia, puede ver la configuración predeterminada] (https://github.com/IsraelDCastro/not-idea-ui))

```js title="tailwind.config.cjs" theme="dark"
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: {
          50: "...",
          100: "...",
          200: "...",
          300: "...",
          400: "...",
          500: "...",
          600: "...",
          700: "...",
          800: "...",
          900: "..."
        },
        secondary: {
          50: "...",
          100: "...",
          200: "...",
          300: "...",
          400: "...",
          500: "...",
          600: "...",
          700: "...",
          800: "...",
          900: "..."
        },
        tertiary: {
          50: "...",
          100: "...",
          200: "...",
          300: "...",
          400: "...",
          500: "...",
          600: "...",
          700: "...",
          800: "...",
          900: "..."
        }
      },
      transitionDuration: {
        0: "0ms",
        400: "400ms",
        600: "600ms"
      },
      zIndex: {
        "-1": -1,
        1: 1,
        5: 5
      },
      inset: {
        "-100": "-100%"
      },
      screens: {
        tablet: "989px",
        "max-md": { max: "988px" },
        mb: { max: "500px" }
      },
      borderWidth: {
        6: "6px"
      },
      boxShadow: {
        alert: "0 6px 26px rgba(0, 0, 0, 0.1)",
        base: "0 3px 20px rgba(0, 0, 0, 0.05)"
      },
      minHeight: {
        24: "6rem",
        "3-5": "14px"
      },
      listStyleType: {
        circle: "circle"
      }
    }
  },
  // ...
}
```

Y eso es todo, ahora debería estar funcionando sin problema. :start:

# <a name="english"></a>[Installation](#english)

You have different options to install it with **npm or yarn**.

## Getting Started

### As dependency

If you want to use it with TailwindCSS adding your own styles and color palettes.

You have to install it with `npm install not-idea-ui` or `yarn add not-idea-ui`. After, you can add it to your proyect in differents ways:

###### CSS
```css title="yourmain.css"
@import 'not-idea-ui/css/not-idea-ui.css';

/* or */

@import 'not-idea-ui/css/not-idea-ui.min.css';
```

###### TailwindCSS in order to use your own/customs styles (CSS)
```css title="yourmain.css"
@import 'not-idea-ui/tailwind/not-idea-ui.css';
```

###### TailwindCSS in order to use your own/customs styles (SCSS)
```css title="yourmain.scss"
@import 'not-idea-ui/main.scss';
```

> :warning: **Important note**: When using the TailwindCSS preference, you need to add the following styles that I have predefined in your tailwind.config.js, to avoid errors that a certain class does not exist.

###### Points to consider:

- Have at least the version "^3.1.0"
- In case you want to use it with SCSS. You need to install sass dependency in case you use ViteJS. If you use Webpack you need to install sass and sass-loader dependencies.
- If you want to use default styles and colors, follow this steps: [postcss.config.js](#postcssconfigjs)
- If you want to use your own styles and colors, follow this steps: [tailwind.config.js](#tailwindconfigjs)

### Default tailwind.config.js

To use the default config from the project you have to create a `postcss.config.cjs`. If you have already this file, just change the file extension from `.js` to `.cjs` in order the avoid the next error.

<span class="text-red-500 text-sm mb-4 inline-block"><code>TypeError: Cannot read properties of undefined (reading 'config')</code></span>

Add this line <span class="text-sky-500">`const defaultConfig = "./node_modules/not-idea-ui/tailwind.config.cjs"`</span> to your `postcss.config.cjs`

Should be seen:

```js title="postcss.config.cjs" theme="dark"
const defaultConfig = "./node_modules/not-idea-ui/tailwind.config.cjs"

module.exports = {
  plugins: {
    tailwindcss: {
      config: defaultConfig
    },
    // ...
  },
}
```

And that is all, now it should be working without problem. :star:

### Custom tailwind.config.js

To use your custom `tailwind.config.js` you have to remove the default config from your `postcss.config.js` and leave it blank, as you can see below:

```js title="postcss.config.cjs" theme="dark"
module.exports = {
  plugins: {
    tailwindcss: {},
    // ...
  },
}
```

After that, run `tailwindcss init` to create blank `tailwind.config.js`. Now you have to fill the tailwind config with your `primary, secondary, and tertiary` colors and some custom classes to avoid some errors.

See the code and example below, be sure to copy every class and color. ([For any reference you can see the default config](https://github.com/IsraelDCastro/not-idea-ui))

```js title="tailwind.config.cjs" theme="dark"
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: {
          50: "...",
          100: "...",
          200: "...",
          300: "...",
          400: "...",
          500: "...",
          600: "...",
          700: "...",
          800: "...",
          900: "..."
        },
        secondary: {
          50: "...",
          100: "...",
          200: "...",
          300: "...",
          400: "...",
          500: "...",
          600: "...",
          700: "...",
          800: "...",
          900: "..."
        },
        tertiary: {
          50: "...",
          100: "...",
          200: "...",
          300: "...",
          400: "...",
          500: "...",
          600: "...",
          700: "...",
          800: "...",
          900: "..."
        }
      },
      transitionDuration: {
        0: "0ms",
        400: "400ms",
        600: "600ms"
      },
      zIndex: {
        "-1": -1,
        1: 1,
        5: 5
      },
      inset: {
        "-100": "-100%"
      },
      screens: {
        tablet: "989px",
        "max-md": { max: "988px" },
        mb: { max: "500px" }
      },
      borderWidth: {
        6: "6px"
      },
      boxShadow: {
        alert: "0 6px 26px rgba(0, 0, 0, 0.1)",
        base: "0 3px 20px rgba(0, 0, 0, 0.05)"
      },
      minHeight: {
        24: "6rem",
        "3-5": "14px"
      },
      listStyleType: {
        circle: "circle"
      }
    }
  },
  // ...
}
```
And that is all, now it should be working without problem. :star:
