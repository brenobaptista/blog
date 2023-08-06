---
title: 'Marking Up Accessible SVGs'
description: 'Figure out the best practices for a11y.'
date: '2022-02-05'
---

I highly recommend that you at least try once to use a screen reader to begin to understand how screen reader users navigate your website. Most operational systems come preinstalled with a screen reader.

## Informational SVGs

![Examples of informational SVGs](/images/marking-up-accessible-svgs/informational-svg.jpg)

Add `role='img'` attribute and `title` tag as the first child of the SVG.

- SVG: `role='img'` + `<title>`

```markup[class="line-numbers"]
<svg
  xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 512 512'
  width='512'
  height='512'
  role='img'
>
  <title>Logo</title>
  <path d='M512 0C460.22 3.56 96.44 38.2 71.01 [...]' />
</svg>
```

## Decorative SVGs

> These SVGs usually are placed within buttons and links or beside a text.

![Examples of decorative SVGs](/images/marking-up-accessible-svgs/decorative-svg.jpg)

Add `aria-hidden='true'` attribute in the SVG tag. If you still want to have a tooltip, you can add a `title` tag as the first child of the SVG. Add `aria-label='label here'` attribute in the button or link tags.

- Button/Link: `aria-label='label here'`
- SVG: `aria-hidden='true'` + (optional) `<title>`

```markup[class="line-numbers"]
<a
  href='mailto:me@brenobaptista.com'
  aria-label='Contact me by email'
>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
    width='40'
    height='40'
    aria-hidden='true'
  >
    <title>Contact me by email</title>
    <path d='M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 [...]' />
  </svg>
</a>
```
