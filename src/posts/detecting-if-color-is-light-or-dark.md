---
title: 'Detecting if Color is Light or Dark'
description: 'Use this algorithm to determine relative luminance.'
date: '2023-01-01'
---

The algorithm for detecting if the color is light or dark is based on the idea that we can convert the color to [grayscale](https://en.wikipedia.org/wiki/Grayscale) and then compare the [relative luminance](https://en.wikipedia.org/wiki/Relative_luminance) with the middle of the range (between 0 and 1).

Note that this formula is only precise for colors. In the case of images, we have to convert to linear colorspace by applying [gamma correction](https://en.wikipedia.org/wiki/Gamma_correction). The luminance difference between ignoring gamma and doing proper gamma is up to 20% in the dark grays.

```ts
const isColorLight = (r: number, g: number, b: number) => {
  const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b
  const relativeLuminance = gray / 255

  return relativeLuminance > 0.5
}

isColorLight(0, 128, 255) // false
```

## Converting color to grayscale

One way of converting color to grayscale would be using the arithmetic average of the RGB values. However, this is not the best way to do it, as our eyes recognize shades of green better than the other colors (**60-70% for green** against **20-30% for red** and **10% for blue**).

The best way to convert color to grayscale is using a formula that is a weighted average of the RGB values. This formula gives us a more precise sensation of how bright the color is.

![Comparison](/images/detecting-if-color-is-light-or-dark/comparison.jpg)

Newer implementations use the [Rec. 709](https://en.wikipedia.org/wiki/Rec._709) standard (for digital TVs), which uses the following weights:

> GRAY = 0.2126 * R + 0.7152 * G + 0.0722 * B

In practice, we can convert to grayscale using [ImageMagick](/posts/editing-images-from-terminal-with-imagemagick):

```bash[class="command-line"]
magick original.jpg -grayscale Average average.jpg
magick original.jpg -grayscale Rec709Luma 709.jpg
```
