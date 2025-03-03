---
title: 'Integrating AppImages with appimaged'
description: 'Manage AppImages using the official daemon.'
date: '2025-03-02'
---

## Motivation

By reading the [FAQ](https://docs.appimage.org/user-guide/faq.html#question-how-can-i-integrate-appimages-with-the-system), I learned that the AppImage developer created a tool called `appimaged` to officially add entries to the applications menu.

> Using the optional appimaged daemon, you can easily integrate AppImages with the system. The daemon puts AppImages into the menus, registers MIME types, icons, all on the fly.

I replaced [Gear Lever](https://github.com/mijorus/gearlever) with this solution and I discovered that it is exactly what I was looking for! However, in my opinion, the website lacks clear reference to this software (it's hidden, not mentioned often) so I decided to write a quick blog post about it to maybe help somebody.

## Using it

Following the [instructions](https://github.com/probonopd/go-appimage/blob/master/src/appimaged/README.md) is pretty simple:

- Download it from "Releases" section of the repository
- Move it to the `~/Applications` folder
- Launch it once

The daemon will install/uninstall apps automatically to the application menu as the AppImages are found in the folders being watched.

When new AppImages finish downloading to `~/Downloads`, you'll see a notification that they have been installed. If you want to move it to a more permanent location, move it to `~/Applications`.

To uninstall the application, simply delete the file. As soon as it gets removed from the folder, you'll see a notification that it has been uninstalled.

The instructions also include how to completely remove `appimaged` from the system.
