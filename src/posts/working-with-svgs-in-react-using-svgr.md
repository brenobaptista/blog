---
title: 'Working With SVGs in React Using SVGR'
description: 'Learn how to transform an SVG into a React component.'
date: '2021-01-23'
---

Just to make sure we're all on the same page:

- **What?** <abbr title="Scalable Vector Graphics">SVG</abbr> is used to integrate 2D graphics into HTML.
- **When?** Do you want to display a photo? Use <abbr title="Portable Network Graphics">PNG</abbr> or <abbr title="Joint Photographic Experts Group">JPG</abbr>. For simple images like logos or icons, use SVG.
- **Where?** There are lots of great libraries for you to get SVGs, but I'd recommend using [Font Awesome](https://fontawesome.com/).
- **Why?** SVG images don't lose any quality if they are zoomed or resized. They are also lightweight.
- **How?** Use [Inkscape](https://inkscape.org/) to create and edit, but you could use a text editor to make tiny edits.

## Create React App

SVGs can be imported and used directly as a component in your code. The image is not loaded as a separate file. Instead, it's rendered along with the <abbr title="HyperText Markup Language">HTML</abbr>. Don't forget to check the [documentation](https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs).

```js[class="line-numbers"]
import React from 'react';
import { ReactComponent as Logo } from './logo.svg';

const App = () => (
  <>
    <Logo />
  </>
)

export default App;
```

But, unfortunately, this approach only works with `create-react-app`, because it uses `SVGR` (the method below) under the hood to make it possible to transform and import SVGs as a component. If you are not using `create-react-app`, convert the SVGs yourself using `SVGR`.

## SVGR

<dfn>[SVGR](https://react-svgr.com/)</dfn> is an **awesome** tool that transforms SVG into React components easily. But why should you use it? Because if you use it your SVGs will be bundled with the JS, so they will be available really fast. Besides, it makes the maintenance of SVGs super easy since they are transformed into React components.

Here is an example of an SVG that I've transformed into a React component:

```tsx[class="line-numbers"]
interface Props {
  width: number
  height: number
}

const GitHub = ({ width, height }: Props): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 496 512'
    width={width}
    height={height}
  >
    <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3 ...' />
  </svg>
)

export default GitHub
```

If you need to convert just a few SVGs right now or if you want to test this library, you can play with the [Playground](https://react-svgr.com/playground/). But if you need to convert a bunch of SVGs at the same time you should read the [Documentation](https://react-svgr.com/docs/getting-started/) to use SVGR as a CLI tool for your project.
