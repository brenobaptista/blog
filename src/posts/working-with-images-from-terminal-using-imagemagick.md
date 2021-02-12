---
title: 'Working with images from terminal using ImageMagick'
description: 'Use this CLI tool to create, edit, compose or convert images.'
date: '2021-02-13'
---

ImageMagick is free and open-source software that allows you to accomplish tasks on images from the command-line.

- Have you ever opened Photoshop just to resize an image?
- Or used an online service to upload an image and download the same image into a different format?
- Or lost time trying to manually remove the margin from a transparent image?
- Or tried to apply transparency to an image?

## Install ImageMagick

> If you use GNU/Linux you probably don't need to install it, it probably already came installed with your distribution.
> Try running `magick --version` in your terminal to check if you have it installed.

[Install ImageMagick](https://imagemagick.org/script/download.php)

## Editing images

Let's convert an image in the JPEG format to PNG:

```bash
convert image.jpg image.png
```

We could also resize the image, for example:

```bash
convert -resize 512x512 image.jpg image-resized.jpg
```

You can also add transparency to an image. Take this dog, for example:

![Dog](/blog/working-with-images-from-terminal-using-imagemagick/dog.jpg)

```bash
convert -transparent white dog.jpg dog-wrong.png
```

![Wrong Dog](/blog/working-with-images-from-terminal-using-imagemagick/dog-wrong.png)

The problem is that the image is not gonna be perfect because maybe there are colors that are not 100% white, so they wouldn't be transparent at the end. So you can tweak with `-fuzz` to try to find a good approximity, like this:

```bash
convert -transparent white -fuzz 30% dog.jpg dog-transparent.png
```

![Transparent Dog](/blog/working-with-images-from-terminal-using-imagemagick/dog-transparent.png)

Now, let's apply some color back to the background:

```bash
convert -background '#bd93f9' -flatten dog-transparent.png dog-purple.jpg
```

![Purple Dog](/blog/working-with-images-from-terminal-using-imagemagick/dog-purple.jpg)

This image has some margin and I wanna get rid of it. Let's take a look:

```bash
convert -trim dog-purple.jpg dog-purple-trimmed.jpg
```

![Trimmed Purple Dog](/blog/working-with-images-from-terminal-using-imagemagick/dog-purple-trimmed.jpg)

## Optimizing images

You can also optimize JPEG images using this snippet:

```bash
convert image-unoptimized.jpg \
-sampling-factor 4:2:0 \
-strip \
-quality 85 \
-interlace JPEG \
-colorspace RGB \
image-pagespeed.jpg
```

This strategy focuses on following Google Lighthouse's guide on how to pass the "Optimize Images" Lighthouse audit in Chrome DevTools. Read more on this [Stack Overflow post](https://stackoverflow.com/questions/7261855/recommendation-for-compressing-jpg-files-with-imagemagick).

## Creating images

You can use ImageMagick to create simple images with text for your Instagram posts, for example. Like this:

```bash
convert -background '#0f1523' \
-fill red \
-font Fira-Code-Bold \
-size 512x512 \
-pointsize 30 \
-gravity center \
label:'How to create an image\nlike this one using\nImageMagick'\
imagemagick.jpg
```

![Simple image with text](/blog/working-with-images-from-terminal-using-imagemagick/imagemagick.jpg)

## More ideas

A great way to use ImageMagick is to use it on a script. Maybe you could write a bash script to automate some task you have to do with image? You could write a script that automatically adds a watermark to all the thousands of your photos if you work with photography, for example.

BTW, the equivalent of ImageMagick for video and audio is called [FFmpeg](https://ffmpeg.org/) if that also interests you. You can use it to record your screen, record your webcam, convert videos into different formats, make simple edits etc.
