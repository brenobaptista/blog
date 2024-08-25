---
title: 'Improve Font Rendering on Linux'
description: 'Simple tweaks to make fonts look better.'
date: '2024-08-25'
---

Fonts have evolved from simple bitmaps to more complex scalable vector graphics (SVGs). Font rendering is the process that turns those SVGs into pixels for display on monitors. To improve the readability of small text, software techniques such as [hinting and antialiasing](https://en.wikipedia.org/wiki/Font_hinting) are often used.

Apple addressed the problem with hardware by adopting high-density displays (2x pixel density) on their devices, called [Retina display](https://en.wikipedia.org/wiki/Retina_display). Meanwhile, Windows and Linux systems still need to support a wide range of displays, as they don't control the hardware.

## GNOME Tweaks (or Alternatives)

If you're using GNOME, you can install `GNOME Tweaks`. If you're on a different desktop environment, search for its alternative. KDE has its own solution natively in `System Settings`. You can also search for how to create a `fontconfig` file manually.

In Fonts settings:

- I suggest keeping `Hinting` set to `Slight`, although some people prefer changing it to `Full`.
- Change `Antialiasing` to `Subpixel (for LCD screens)` if you have a modern monitor.

Changing antialiasing to the subpixel option will replace the grayscale pixels with <abbr title="red, green, blue">RGB</abbr> subpixels.

## Install Microsoft fonts

On Ubuntu-based distributions, you can just run this command:

```bash[class="command-line"]
sudo apt install ubuntu-restricted-extras
```

This is a meta-package that installs other packages, including `ttf-mscorefonts-installer`. The latter is a package that installs [Microsoft TrueType core fonts](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web).

This step ensures that websites relying on Microsoft fonts will render properly in your browser.
