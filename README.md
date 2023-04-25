---
description: "Not Idea UI is an Open Source CSS framework based and created with TailwindCSS, with components created to use everywhere, easily and simply."
---

# Installation

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

<div className="alert is-warning">
  <h4 className="mb-4 font-semibold">Important note</h4>
  <p>When using the TailwindCSS preference, you need to add the following styles that I have predefined in your tailwind.config.js, to avoid errors that a certain class does not exist.</p>
</div>


###### Points to consider:

- Have at least the version "^3.3.x"
- In case you want to use it with SCSS. You need to install sass dependency in case you use ViteJS. If you use Webpack you need to install sass and sass-loader dependencies.
- If you want to use default styles and colors, follow this steps: [postcss.config.js](#custom-tailwindconfigjs)
- If you want to use your own styles and colors, follow this steps: [tailwind.config.js](#default-tailwindconfigjs)

## Default tailwind.config.js
### With ViteJS

To use the default config from the project you have to create a `postcss.config.cjs`. If you have already this file, just change the file extension from `.js` to `.cjs` in order the avoid the next error.

<span class="inline-block mb-4 text-sm text-red-500"><code>TypeError: Cannot read properties of undefined (reading 'config')</code>.</span>

This works for VanillaJS, ReactJS, and VueJS.

Add this line <span class="text-sky-500">`const defaultConfig = require("not-idea-ui/tailwind.config.cjs");`</span> to your `postcss.config.cjs`.

Should be seen:

```js title="postcss.config.cjs" theme="dark"
const defaultConfig = require("not-idea-ui/tailwind.config.cjs");

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

### With Webpack

To use the default config from the project you have to create a `postcss.config.js` or `postcss.config.cjs`. It works with both option.

If you are getting this error: <span class="inline-block mb-4 text-sm text-red-500"><code>Error: Cannot find module 'tailwind.config.cjs'</code></span> or similar, just copy or download the config Tailwind file, it should work without problem.

This works for VueJS using Vue/Cli.

Add this line <span class="text-sky-500">`const defaultConfig = require("not-idea-ui/tailwind.config.cjs");`</span> to your `postcss.config.cjs`.

```js title="postcss.config.cjs" theme="dark"
const defaultConfig = require("not-idea-ui/tailwind.config.cjs");

module.exports = {
  plugins: {
    tailwindcss: {
      config: defaultConfig
    },
    // ...
  },
}
```

If you are using `create-react-app` for the project in ReactJS, you have to put the `tailwind.config.js` file in the root of the project, and remove the defaultConfig from `postcss.config.js`

```js title="postcss.config.js" theme="dark"
module.exports = {
  plugins: {
    tailwindcss: {},
    // ...
  },
}
```

And that is all, now it should be working without problem. :star:

## Custom tailwind.config.js

To use your custom `tailwind.config.js` you have to remove the default config from your `postcss.config.js` and leave it blank, as you can see below:

```js title="postcss.config.js" theme="dark"
module.exports = {
  plugins: {
    tailwindcss: {},
    // ...
  },
}
```

After that, run `tailwindcss init` to create blank `tailwind.config.js`. Now you have to fill the tailwind config with your `primary, secondary, and tertiary` colors and some custom classes to avoid some errors.

See the code and example below, be sure to copy every class and color. (<a href="https://github.com/IsraelDCastro/not-idea-ui/blob/master/tailwind.config.cjs" class="link info">For any reference you can see the default config</a>)

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
          900: "...",
          950: "..."
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
          900: "...",
          950: "..."
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
          900: "...",
          950: "..."
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
