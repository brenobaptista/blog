---
title: 'Battery Charging Threshold for Acer laptops on Linux'
description: 'Leverage open-source tools to achieve the Acer Care Center feature.'
date: '2025-12-06'
---

As an owner of an Acer Nitro 5 (AN515-57), I wanted to extend the lifespan of my battery by limiting its charging capacity to 80%. Unfortunately, Acer doesn't provide an official solution for this on Linux. However, with the power of open-source tools, we can still achieve this functionality.

The [acer-wmi-battery](https://github.com/frederik-h/acer-wmi-battery) repository hosts the custom kernel driver providing this functionality. However, it's recommended to use the alternatives below so the building step is done automatically when the kernel gets updated.

For general use, try this [fork with DKMS support](https://github.com/Diman119/acer-wmi-battery/tree/dkms) so you won't need to rebuild the driver after a kernel update. You can also search for packages for this driver in your package manager, like AUR.

Specifically for Fedora, I'm using the [Copr repository with akmods support](https://copr.fedorainfracloud.org/coprs/asan/acer-modules).

## Make health_mode persist between reboots under DKMS/akmods

The health_mode value sometimes resets to 0, disabling the feature. Running this command fixed the issue:

```bash[class="command-line"]
echo "options acer_wmi_battery enable_health_mode=1" | sudo tee /etc/modprobe.d/acer-wmi-battery.conf
```
