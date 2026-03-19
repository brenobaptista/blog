---
title: 'Battery Charging Threshold for Acer laptops on Linux'
description: 'Leverage open-source tools to achieve the Acer Care Center feature.'
date: '2025-12-06'
---

As the owner of an Acer Nitro 5 (AN515-57), I wanted to extend my battery's lifespan by limiting its charging capacity to 80%. Unfortunately, Acer doesn't provide an official solution for this on Linux. However, we can still achieve this functionality.

The [acer-wmi-battery](https://github.com/frederik-h/acer-wmi-battery) repository hosts a custom kernel module that provides this feature. However, it's recommended to use the alternatives below so that the build step runs automatically whenever the kernel is updated.

For general use, try this [fork with DKMS support](https://github.com/Diman119/acer-wmi-battery/tree/dkms). You can also search for packages for this module in your package manager, such as the AUR.

For Fedora specifically, try the [Copr repository with akmods support](https://copr.fedorainfracloud.org/coprs/asan/acer-modules).

### Make health_mode persist between reboots (DKMS/akmods)

The `health_mode` value sometimes resets to 0, disabling the feature. Running the command below configures the module to always load with the `enable_health_mode=1` parameter on boot.

```bash[class="command-line"]
echo "options acer_wmi_battery enable_health_mode=1" | sudo tee /etc/modprobe.d/acer-wmi-battery.conf
```
