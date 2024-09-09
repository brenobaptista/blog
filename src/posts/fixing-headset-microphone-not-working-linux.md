---
title: 'Fixing Headset Microphone not Working on Linux'
description: 'The kernel may not be detecting the correct driver.'
date: '2024-09-08'
---

The first step is to confirm that the physical button to turn the microphone on or off is in the correct position and to check other potential issues, such as a loose connection. Test the headset on other computers to ensure it's not a hardware issue.

If it's confirmed that the Linux computer is not recognizing the microphone, the issue might be that the kernel isn't detecting the correct driver. This problem can occur because the kernel fails to detect the correct model to use, which is a level below the sound server (PipeWire or PulseAudio). To fix that, we need to manually select the correct driver by trying different `headset-mic HDA model variations`.

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
