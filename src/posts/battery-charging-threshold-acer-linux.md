---
title: 'Battery Charging Threshold for Acer laptops on Linux'
description: 'Leverage open-source tools to achieve the Acer Care Center feature.'
date: '2024-01-25'
---

As an owner of an Acer Nitro 5 (AN515-57), I wanted to extend the lifespan of my battery by limiting its charging capacity to 80%. Unfortunately, Acer doesn't provide an official solution for this on Linux. However, with the power of open-source tools, we can still achieve this functionality.

- [acer-wmi-battery](https://github.com/frederik-h/acer-wmi-battery): this repository hosts the custom kernel driver providing this functionality. However, it's recommended to use the alternative below while the pull request is still under discussion.

  - [acer-wmi-battery with DKMS support](https://github.com/Diman119/acer-wmi-battery/tree/dkms): use this one for now. This is a fork with DKMS support: this means that you won't need to re-build the driver again after a kernel update.
  - [PR discussion](https://github.com/frederik-h/acer-wmi-battery/pull/31): ongoing discussion regarding the pull request mentioned above.

- Startup application to fix health_mode persistence: a bug makes the health_mode value reset back to 0 every week or so when I turn on my laptop and it disables the feature. The workaround I figured out for now is creating a service that will force the value to be 1 when I log in the machine. See instructions on section below.

  - Alternative: [GNOME extension to fix health_mode persistence](https://github.com/maniacx/Battery-Health-Charging): it offers a nice GUI and can be helpful if you prefer not to create the service below yourself.

## Startup application to fix health_mode persistence

I created this script to enable health mode in `/home/brenobaptista/bin/limit-acer-battery.sh`:

```bash[class="line-numbers"]
#!/bin/bash
echo 1 | tee /sys/bus/wmi/drivers/acer-wmi-battery/health_mode
```

I made my script executable with:

```bash[class="command-line"]
chmod +x limit-acer-battery.sh
```

Then I created this systemd service to run on startup in `/etc/systemd/system/acer-battery.service`:

```bash[class="line-numbers"]
[Unit]
Description=Limit Acer battery service

[Service]
ExecStart=/home/brenobaptista/bin/limit-acer-battery.sh

[Install]
WantedBy=multi-user.target
```

Optional, for security: grants read and write permissions to the owner and read permissions to the group. Others will have no permissions.

```bash[class="command-line"]
sudo chmod 640 /etc/systemd/system/acer-battery.service
```

When adding a new unit file or editing an existing one, you must tell systemd to reload the unit file definitions:

```bash[class="command-line"]
sudo systemctl daemon-reload
```

To start the service:

```bash[class="command-line"]
sudo systemctl start acer-battery
```

To enable it to run at boot:

```bash[class="command-line"]
sudo systemctl enable acer-battery
```

We can check the status of this service anytime by running:

```bash[class="command-line"]
systemctl status acer-battery
```

> The default service user is already root, so you don't need to use sudo to launch your scripts on startup.

## Uninstallation

In case you want to uninstall the software above, here are the links:

- [Uninstallation for acer-wmi-battery with DKMS support](https://github.com/Diman119/acer-wmi-battery/tree/dkms?tab=readme-ov-file#uninstallation)

- Uninstallation of the startup application

  - Stop the service by running `sudo systemctl stop acer-battery`
  - Disable it to run at boot by running `sudo systemctl disable acer-battery`
  - Delete the files created earlier.

- [Uninstallation for GNOME extension](https://maniacx.github.io/Battery-Health-Charging/installation#uninstallation)
  - Don't forget to remove the polkit rules before uninstalling the extension.

## Debugging

A few days after the publishing of this post, a reader called Anhar reported that he had the same laptop model but it didn't work for him. It turned out that a custom fan control driver [nbfc-linux](https://github.com/nbfc-linux/nbfc-linux) was conflicting with the custom battery charging driver. So when debugging, make sure to disable other custom drivers to identify any conflicts.

To check if the service is running, run `lsmod | grep -i acer` and look for `acer_wmi_battery`.

To check if the DKMS is working, run `dkms status | grep -i acer` and look for `acer_wmi_battery`.

To check if the health_mode is enabled, run: `cat /sys/bus/wmi/drivers/acer-wmi-battery/health_mode`. If it returns 1, it indicates that health_mode is enabled. However, if it returns 0, you need to manually set it to 1 using an editor. You'll have to do it with sudo.
