#### Docs [Español](https://github.com/IsraelDCastro/not-idea-ui#espanol) / [English](https://github.com/IsraelDCastro/not-idea-ui#english)

#  [Not Idea UI](#espanol)

#### Un framework CSS para iniciar a construir cosas bonitas. Basado y creado con TailwindCSS.

Not Idea UI es un framework CSS Open Source basado en TailwindCSS, con componentes creados para usarse en cualquier lugar, de manera fácil y sencilla. Componentes responsivos, con varios estilos y formas de uso.

Con una facilidad de varias paletas de colores, incluso puedes llegar a usas las propias paletas de colores de TailwindCSS y las tuyas.

Documentación [Ver componentes](#)

## ¿Cómo instalarlo?

### CDN

#### Directo en tu archivo CSS.

`@import "https://not-idea-ui.netlify.app/css/not-idea-ui.css"`

`@import "https://not-idea-ui.netlify.app/css/not-idea-ui.min.css"`

#### Directo en tu archivo html.

`<link rel="stylesheet" href="https://not-idea-ui.netlify.app/css/not-idea-ui.css">`

`<link rel="stylesheet" href="https://not-idea-ui.netlify.app/css/not-idea-ui.min.css">`

### Como dependencia

Si lo que quieres es usarlo con TailwindCSS añadiendo tus propios estilos y paletas de colores.

Debes instalarlo con `npm install not-idea-ui` o `yarn add not-idea-ui`. Luego debes proceder a importarlo en tu proyecto.

Puedes importarlo en tu CSS o en tu archivo SCSS, de las siguientes maneras.

#### CSS

![Alt Importarlo como CSS](https://not-idea-ui.netlify.app/images/css-min-not-idea-ui.webp)

#### TailwindCSS para usar tus propios estilos (CSS)

![Alt Importarlo como CSS al estilo](https://not-idea-ui.netlify.app/images/css-tailwindcss-not-idea-ui.webp)

#### TailwindCSS para usar tus propios estilos (SCSS)

![Alt Importarlo como SCSS al estilo](https://not-idea-ui.netlify.app/images/scss-tailwindcss-not-idea-ui.webp)

## Nota importante

Al utilizar la preferencia de TailwindCSS, necesitas agregar los siguientes estilos que he predifinido en tu tailwind.config.js, para evitar errores de que no existe cierta clase.

Puntos a tomar en cuenta:

-   Tener al menos la versión "^2.2.11"
-   Debes tener mode: "jit" activado

#### tailwind.config.js

```
theme:  {
	extend:  {
		colors:  {
			'c-base':  '...',
			'primary':  {
				50: '...',
				100: '...',
				200: '...',
				300: '...',
				400: '...',
				500: '...',
				600: '...',
				700: '...',
				800: '...',
				900: '...',
			},
			'secondary':  {
				50: '...',
				100: '...',
				200: '...',
				300: '...',
				400: '...',
				500: '...',
				600: '...',
				700: '...',
				800: '...',
				900: '...',
			},
			'tertiary':  {
				50: '...',
				100: '...',
				200: '...',
				300: '...',
				400: '...',
				500: '...',
				600: '...',
				700: '...',
				800: '...',
				900: '...',
			},
			'dark':  {
				50: '#FAFAFA',
				100: '#DEDEDE',
				200: '#C2C2C2',
				300: '#A7A7A7',
				400: '#8B8B8B',
				500: '#6F6F6F',
				600: '#535353',
				700: '#383838',
				800: '#1C1C1C',
				900: '#000000',
			},
		},
		transitionDuration:  {
			'0':  '0ms',
			'400':  '400ms',
			'600':  '600ms'
		},
		zIndex:  {
			'-1':  -1,
			'1':  1,
			'5':  5,
		},
		inset:  {
			'-100':  '-100%'
		},
		borderWidth:  {
			'6':  '6px',
		},
		boxShadow:  {
			'alert':  '0 6px 26px rgba(0, 0, 0, 0.1)',
			'base': '0 3px 20px rgba(0, 0, 0, 0.05)',
		},
		minHeight:  {
			'24':  '6rem'
		},
		listStyleType:  {
			'circle':  'circle'
		},
	},
	fontFamily:  {
		sans:  [ "Tu/s fuente/s primaris/s", ],
		body:  [ "Tu/s fuente/s secundaria/s", ]
	},
},
```

#  [Not Idea UI](#english)

#### A CSS framework to start building nice things. Based and created with TailwindCSS.

Not Idea UI is an Open Source CSS framework based on TailwindCSS, with components created to be used anywhere, easily and simply. Responsive components, with various styles and forms of use.

With a multi-color palette facility, you can even get to use TailwindCSS's own color palettes and your own.

Documentation [See components] (#)

## How to install it?

### CDN

#### Direct in your CSS file.

`@import "https://not-idea-ui.netlify.app/css/not-idea-ui.css"`

`@import "https://not-idea-ui.netlify.app/css/not-idea-ui.min.css"`

#### Direct in your HMTL file.

`<link rel="stylesheet" href="https://not-idea-ui.netlify.app/css/not-idea-ui.css">`

`<link rel="stylesheet" href="https://not-idea-ui.netlify.app/css/not-idea-ui.min.css">`

### As dependency

If you want to use it with TailwindCSS adding your own styles and color palettes.

You must install it with `npm install not-idea-ui` or` yarn add not-idea-ui`. Then you must proceed to import it into your project.

You can import it into your CSS or your SCSS file, in the following ways.

#### CSS

![Alt Import it as CSS](https://not-idea-ui.netlify.app/images/css-min-not-idea-ui.webp)

#### TailwindCSS to use your own styles (CSS)

![Alt Import it as CSS in the style of TailwindCSS](https://not-idea-ui.netlify.app/images/css-tailwindcss-not-idea-ui.webp)

#### TailwindCSS to use your own styles (SCSS)

![Alt Import it as SCSS in the style of TailwindCSS](https://not-idea-ui.netlify.app/images/scss-tailwindcss-not-idea-ui.webp)

## Important note

When using the TailwindCSS preference, you need to add the following styles that I have predefined in your tailwind.config.js, to avoid errors that a certain class does not exist.

Points to consider:

- Have at least the version "^2.2.11"

- You must have mode: "jit" activade

#### tailwind.config.js

```
theme:  {
	extend:  {
		colors:  {
			'c-base':  '...',
			'primary':  {
				50: '...',
				100: '...',
				200: '...',
				300: '...',
				400: '...',
				500: '...',
				600: '...',
				700: '...',
				800: '...',
				900: '...',
			},
			'secondary':  {
				50: '...',
				100: '...',
				200: '...',
				300: '...',
				400: '...',
				500: '...',
				600: '...',
				700: '...',
				800: '...',
				900: '...',
			},
			'tertiary':  {
				50: '...',
				100: '...',
				200: '...',
				300: '...',
				400: '...',
				500: '...',
				600: '...',
				700: '...',
				800: '...',
				900: '...',
			},
			'dark':  {
				50: '#FAFAFA',
				100: '#DEDEDE',
				200: '#C2C2C2',
				300: '#A7A7A7',
				400: '#8B8B8B',
				500: '#6F6F6F',
				600: '#535353',
				700: '#383838',
				800: '#1C1C1C',
				900: '#000000',
			},
		},
		transitionDuration:  {
			'0':  '0ms',
			'400':  '400ms',
			'600':  '600ms'
		},
		zIndex:  {
			'-1':  -1,
			'1':  1,
			'5':  5,
		},
		inset:  {
			'-100':  '-100%'
		},
		borderWidth:  {
			'6':  '6px',
		},
		boxShadow:  {
			'alert':  '0 6px 26px rgba(0, 0, 0, 0.1)',
			'base': '0 3px 20px rgba(0, 0, 0, 0.05)',
		},
		minHeight:  {
			'24':  '6rem'
		},
		listStyleType:  {
			'circle':  'circle'
		},
	},
	fontFamily:  {
		sans:  [ "Your primary fonts", ],
		body:  [ "Your secondary fonts", ]
	},
},
```
