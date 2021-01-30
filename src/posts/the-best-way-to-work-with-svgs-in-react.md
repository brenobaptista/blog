---
title: 'The best way to work with SVGs in React'
description: 'Learn how to transform an SVG into a React component.'
date: '2021-01-27'
---

Just to make sure we're all on the same page:

- **What?** SVG (Scalable Vector Graphics) is used to integrate 2D graphics into HTML.
- **When?** Do you want to display a photo, landscape etc? Use PNG or JPG. For simple images like logos or icons, use SVG.
- **Where?** There are lots of great libraries for you to get SVGs, but I'd recommend using [Font Awesome](https://fontawesome.com/).
- **Why?** SVG images don't lose any quality if they are zoomed or resized. They are also lightweight.
- **How?** Use [Inkscape](https://inkscape.org/) to create and edit, but you could use a text editor to make tiny edits.

## React SVGR

[SVGR](https://react-svgr.com/) is an **awesome** tool that transforms SVG into React components easily. But why should you use it? Because if you use it your SVGs will be bundled with the JS, so they will be available really fast. Besides, it makes the maintenance of SVGs super easy since they are transformed into React components.

Here is an example of an SVG that I've transformed into a React component:

```tsx
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
    <title>GitHub logo</title>
    <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3 ...' />
  </svg>
)

export default GitHub
```

If you need to convert just a few SVGs right now or if you want to test this library, you can play with the [Playground](https://react-svgr.com/playground/). But if you actually need to convert a bunch of SVGs at the same time you should read the [Documentation](https://react-svgr.com/docs/getting-started/) to use SVGR as a CLI tool for your project.

## Accessible SVGs

There's a [complete guide](https://css-tricks.com/accessible-svgs/) explaining how to create accessible SVGs, but basically you _at least_ need to add a `title` tag to your SVG in order to make it possible for screen readers to understand what the image is about.
