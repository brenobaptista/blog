---
title: 'Battery Charging Threshold for Acer laptops on Linux'
description: 'Leverage open-source tools to achieve the Acer Care Center feature.'
date: '2024-01-25'
---

As an owner of an Acer Nitro 5 (AN515-57), I wanted to extend the lifespan of my battery by limiting its charging capacity to 80%. Unfortunately, Acer doesn't provide an official solution for this on Linux. However, with the power of open-source tools, we can still achieve this functionality.

- [acer-wmi-battery](https://github.com/frederik-h/acer-wmi-battery): this is the repository for the Linux kernel driver that offers the functionality, but use the one below while the pull request is still being discussed.

  - [acer-wmi-battery with DKMS support](https://github.com/Diman119/acer-wmi-battery/tree/dkms): use this one for now. This is a fork with DKMS support: this means that you won't need to re-build the driver again after a kernel update.
  - [PR discussion](https://github.com/frederik-h/acer-wmi-battery/pull/31): this is the pull request for the fork above.

- [GNOME extension to fix health_mode persistency](https://github.com/maniacx/Battery-Health-Charging): a bug makes the health_mode value reset back to 0 every week or so when I turn on my laptop, so the feature is disabled. The workaround I figured out for now is using this GNOME extension that offers a nice GUI and forces health_mode to use value 1 when you log in your machine.

## Uninstallation

In case you want to uninstall the software above, here are the links:

- [Uninstallation for acer-wmi-battery with DKMS support](https://github.com/Diman119/acer-wmi-battery/tree/dkms?tab=readme-ov-file#uninstallation)

- [Uninstallation for GNOME extension](https://maniacx.github.io/Battery-Health-Charging/installation#uninstallation)
  - Don't forget to remove the polkit rules before uninstalling the extension.

## Debugging

A few days after the publishing of this post, a reader called Anhar reported that he had the same laptop model but it didn't work for him. It turned out that a custom fan control driver [nbfc-linux](https://github.com/nbfc-linux/nbfc-linux) was conflicting with the custom battery charging driver. So when debugging, disable other custom drivers to check if they are conflicting.

To check if the service is running, run `lsmod | grep -i acer` and look for `acer_wmi_battery`.

To check if the DKMS is working, run `dkms status | grep -i acer` and look for `acer_wmi_battery`.

To check if the health_mode is enabled, run: `cat /sys/bus/wmi/drivers/acer-wmi-battery/health_mode`. If it returns 1 it means it is enabled, but if it returns 0 then use an editor to put it as 1 (in this case you have to use sudo to run with privileged permissions).
