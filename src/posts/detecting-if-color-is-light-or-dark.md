---
title: 'Detecting if a Color is Light or Dark'
description: 'Use this algorithm to determine relative luminance.'
date: '2023-01-01'
---

The algorithm for detecting if a color is light or dark is based on the idea that we can convert a color to [grayscale](https://en.wikipedia.org/wiki/Grayscale) then simply compare the [relative luminance](https://en.wikipedia.org/wiki/Relative_luminance) with the middle of the range (between 0 and 1).

Note that this formula is only precise for colors. For images, first we have to convert to linear colorspace by applying [gamma correction](https://en.wikipedia.org/wiki/Gamma_correction). The luminance difference between ignoring gamma and doing proper gamma is up to 20% in the dark grays.

```ts
const isColorLight = (r: number, g: number, b: number) => {
  const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b
  const relativeLuminance = gray / 255

  return relativeLuminance > 0.5
}

isColorLight(0, 128, 255) // false
```

## Converting a color to grayscale

One simple way of converting a color to grayscale would be using the arithmetic mean of the RGB values. However, this is not the best way to do it, as our eyes recognize different shades of green way better than the other two colors (**60-70% for green** against **20-30% for red** and **10% for blue**).

The best way to convert a color to grayscale is using a formula which is a weighted average of the RGB values. This formula gives us a more precise sensation of how bright a color is.

> Converting to grayscale using arithmetic mean vs REC.601 standard

![Comparison](/images/detecting-if-color-is-light-or-dark/comparison.png)

The original implementation of the formula was based on the [REC.601](https://en.wikipedia.org/wiki/Rec._601) standard (for analog TVs), which uses the following weights:

> Gray = 0.299 _ R + 0.587 _ G + 0.114 \* B

Newer implementations use the [REC.709](https://en.wikipedia.org/wiki/Rec._709) standard (for digital TVs), which use the following weights:

> Gray = 0.2126 _ R + 0.7152 _ G + 0.0722 \* B
