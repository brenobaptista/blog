---
title: 'Tips for Lenovo Laptops With Linux'
description: 'Some helpful tips and tricks.'
date: '2024-07-07'
---

## Table of Contents

## Activate Conservation Mode (60% Battery)

Gain Admin Privileges:

```bash[class="command-line"]
sudo su
```

Check Current Status:

```bash[class="command-line"]
cat /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode
```

Activate Conservation Mode:

```bash[class="command-line"]
echo 1 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode
```

Deactivate Conservation Mode:

```bash[class="command-line"]
echo 0 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode
```

## Fix the Internal Microphone

[Guide from PipeWire discussion](https://github.com/pop-os/pipewire/issues/8#issuecomment-1165315196).

This issue could be related to Lenovo laptops since everyone who mentioned their laptop reported using Lenovo. Basically, you have to update ALSA to create a few dB of difference in capture volume between left and right.

I followed the guide and placed my files on `~/.config/asound.state` (the fix) and `~/.config/autostart/alsarestore.desktop` (autostart the fix on boot).

## Fans not Working

1. Lenovo Vantage: When I uninstalled Lenovo Vantage on Windows, it made the fan stop on Linux. I'm not sure why.

2. If the fans are not working (especially while gaming), restart and keep pressing F2 (probably) to access the BIOS, then just exit without changes. I don't have an explanation for it, but the fans usually work for some days.
