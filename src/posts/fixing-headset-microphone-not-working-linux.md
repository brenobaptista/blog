---
title: 'Fixing Headset Microphone not Working on Linux'
description: 'The kernel may not be detecting the correct driver.'
date: '2024-09-08'
---

This issue specifically affects analog 3.5mm headsets. USB headsets include their own sound card and don't depend on the kernel correctly detecting the internal Realtek codec.

Because generic Realtek codecs are used across many different laptop designs, the kernel can't always determine how the audio hardware is wired. As a result, the driver may fall back to an incorrect pin layout, causing the headset microphone to be unavailable.

To resolve this, we need to manually specify the appropriate HDA model, which tells the kernel how the codec is wired, by testing different headset-mic model variations until the correct one is found.

## Table of Contents

## Identify the Audio Codec

Running the following command on the terminal will return a list of codecs. One of them will be the audio codec. For my Acer Nitro 5, the codec is `Realtek ALC295`. For my previous Lenovo laptop, it was `Realtek ALC236`.

```bash[class="command-line"]
cat /proc/asound/card*/codec* | grep Codec
```

## Check the Documentation

Look up your audio codec in the documentation to see a list of compatible options.

[HD-Audio Codec-Specific Models](https://www.kernel.org/doc/html/latest/sound/hd-audio/models.html)

For my Realtek ALC295 (and ALC236), the one that fixed the problem was `dell-headset-multi`.

## Select Driver

I suggest creating a file `hda-model.conf` in `/etc/modprobe.d` (it needs root access) with content `options snd-hda-intel model=dell-headset-multi`.

This can be done easily in one line with the following command, which can be safely run again to try different models:

```bash[class="command-line"]
echo "options snd-hda-intel model=dell-headset-multi" | sudo tee /etc/modprobe.d/hda-model.conf
```

You need to reboot the computer to apply the changes.

## Experiment with Different Models

A model that works for a lot of people online is `dell-headset-multi`. It can be used by all these chips: `ALC22x/23x/25x/269/27x/28x/29x, some ALC3xxx, ALC66x/67x/892`.

If the suggestion doesn't work, try other models depending on the audio codec of your computer. Search the web for people experiencing problems with the same chip.

## (Sometimes Bad) Alternative: USB Dongle

I bought a $5 USB dongle (so you don't have to). It bypasses the problem mentioned above, but the microphone audio quality is really bad.

The system recognizes it as a new device because it uses its own sound card instead of the computer's. Maybe buying a more expensive one would work.

## Optional: Disable Internal Microphone

If you have a laptop, you may want to disable the internal microphone so that only the headset microphone will be recognized by the system.

Install the alsa-tools package:

```bash[class="command-line"]
sudo apt install alsa-tools-gui # Debian/Ubuntu
sudo dnf install alsa-tools     # Fedora
sudo pacman -S alsa-tools       # Arch Linux
```

Launch hdajackretask with root privileges:

```bash[class="command-line"]
sudo hdajackretask
```

- At the top of the window, use the dropdown to select your audio codec (e.g. `Realtek ALC295`).
- Under "Internal Mic", check "Override" and select "Not connected".
- In the bottom-right corner, click "Install boot override" and reboot.

The alsa-tools package can be uninstalled afterward if desired.
