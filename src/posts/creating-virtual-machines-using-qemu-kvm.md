---
title: 'Creating Virtual Machines Using QEMU/KVM on Linux'
description: 'Squeeze every last drop of performance out of your virtual machine.'
date: '2021-03-06'
---

**What is QEMU?** <dfn><abbr title="Quick EMUlator">QEMU</abbr></dfn> is a free and open-source machine emulator that can perform hardware virtualization. It is a lot faster than VMWare or Virtualbox because it is a KVM-based virtualization platform.

**What is KVM?** <dfn><abbr title="Kernel-based Virtual Machine">KVM</abbr></dfn> is a virtualization module in the Linux kernel.

In this guide, we will manage our virtual machines through the terminal, but you could use [virt-manager](https://virt-manager.org/) as a GUI for controlling virtual machines.

## Table of Contents

## Dependencies

### QEMU

[Download QEMU](https://www.qemu.org/download/#linux/)

## Linux example

### Downloading .iso

First of all, you need to download the `.iso` file on the official website.

### Booting in Live Mode

Go to the directory where you downloaded the official `.iso` and use this command in your terminal as an example to boot the live version. No changes to the operational system will be saved.

```bash[class="command-line"]
qemu-system-x86_64 \
  --enable-kvm \
  -m 4G \
  -smp 4 \
  -name 'Linux' \
  -boot d \
  -cdrom kali-linux-2020.3-live-amd64.iso
```

Change the parameters accordingly. `-m` is the RAM memory and `-smp` is the CPU cores.

![Virtual machine](/images/creating-virtual-machines-using-qemu-kvm/kali-live.jpg)

> Shortcut to get in and out of fullscreen mode: `Ctrl + Alt + F`
>
> Shortcut to release the mouse from the virtual machine window: `Ctrl + Alt + G`

### Creating data storage

You will need to create a `.qcow2` file that will act as a virtual data storage. Use `qemu-image` like this:

```bash[class="command-line"]
qemu-img create -f qcow2 disk.qcow2 20G
```

I have decided to create a data storage named `disk` that contains 20 GB of memory.

### Installing OS on storage

Now you can modify the previous command to install the operating system in the virtual disk that you created earlier.

1. Add `-hda disk.qcow2` to our previous script and run the live version once again. This time it will recognize the new disk and you will have the option to install the system there.

```bash[class="command-line"]
qemu-system-x86_64 \
  --enable-kvm \
  -m 4G \
  -smp 4 \
  -name 'Linux' \
  -boot d \
  -cdrom kali-linux-2020.3-live-amd64.iso \
  -hda disk.qcow2
```

2. After installing the operating system, you can boot from disk if you remove both `-boot d` and `-cdrom kali-linux-2020.3-live-amd64.iso` flags from our command.

```bash[class="command-line"]
qemu-system-x86_64 \
  --enable-kvm \
  -m 4G \
  -smp 4 \
  -name 'Linux' \
  -hda disk.qcow2
```

3. You can create a Bash script (don't forget to make it executable running `chmod +x script.sh` in your terminal) and use it every time you want to start the virtual machine. You can tweak this script to customize your virtual machine, for example adding more RAM memory or CPU cores.

```bash[class="line-numbers"]
#!/bin/bash

qemu-system-x86_64 \
  --enable-kvm \
  -m 4G \
  -smp 4 \
  -name 'Linux' \
  -hda disk.qcow2
```

![Kali Linux](/images/creating-virtual-machines-using-qemu-kvm/kali.jpg)

## MacOS example

There is a nice README that explains [how to set up a macOS virtual machine](https://github.com/foxlet/macOS-Simple-KVM) using QEMU accelerated by KVM. Here is the final result of a virtual machine running **macOS Catalina** in dark mode:

![MacOS](/images/creating-virtual-machines-using-qemu-kvm/mac.jpg)
