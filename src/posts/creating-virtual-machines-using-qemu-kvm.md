---
title: 'Creating Virtual Machines Using QEMU/KVM on Linux'
description: 'Squeeze every last drop of performance out of your virtual machine.'
date: '2021-03-06'
---

## Table of Contents

## Introduction <span class="emoji">👋🏻</span>

**What is QEMU?** QEMU is a free and open-source machine emulator that can perform hardware virtualization. It is a lot faster than VMWare or Virtualbox because it is a KVM-based virtualization platform.

**But what is KVM?** KVM (Kernel-based Virtual Machine) is a virtualization module in the Linux kernel.

> In this guide, we will manage our virtual machines through the terminal, but you could use [virt-manager](https://virt-manager.org/) as a GUI for controlling virtual machines.

## Dependencies <span class="emoji">🔧</span>

### Install QEMU

[Download QEMU](https://www.qemu.org/download/)

### Install KVM

Try your distro's packaging system, this is the easiest and recommended way of installing KVM.
It's usually called "qemu-kvm" or "kvm".

## Kali Linux <span class="emoji">🕵🏻</span>

### Download .iso

First of all, you need to download the `.iso` file for Kali Linux (or any other operational system) on the [official website](https://www.kali.org/downloads/).

### Boot in Live Mode

Go to the directory where you downloaded the official .iso and run this command in your terminal to boot a live version of Kali Linux. No changes to the operational system will be saved.

```bash[class="command-line"]
qemu-system-x86_64 \
  --enable-kvm \
  -m 4G \
  -smp 4 \
  -name 'Kali Linux Live' \
  -boot d \
  -cdrom kali-linux-2020.3-live-amd64.iso
```

![Kali Linux Live](/images/creating-virtual-machines-using-qemu-kvm/kali-live.jpg)

> Shortcut to get in and out of fullscreen mode: Ctrl + Alt + F
>
> Shortcut to release the mouse from the virtual machine window: Ctrl + Alt + G

### Create data storage

You will need to create a `.qcow2` file that will act as a virtual data storage. Use `qemu-image` like this:

```bash[class="command-line"]
qemu-img create -f qcow2 kalidisk.qcow2 30G
```

I have decided to create a data storage named `kalidisk` that contains `30 GB` of memory.

### Install Kali Linux

Now you can modify the previous command to install Kali Linux in the virtual disk that you created earlier.

1. Add `-hda kalidisk.qcow2` to our previous script and run the live version once again. This time it will recognize the new disk and you will have the option to install the system there.

2. After installing Kali Linux, you can boot from disk if you remove both `-boot d` and `-cdrom kali-linux-2020.3-live-amd64.iso` flags from our command.

3. You can create a bash script (don't forget to make it executable running `chmod +x script.sh` in your terminal) and use it every time you want to start the virtual machine. You can tweak this script to customize your virtual machine, for example adding more RAM or CPU cores.

```bash[class="line-numbers"]
#!/bin/bash

qemu-system-x86_64 \
  --enable-kvm \
  -m 4G \
  -smp 4 \
  -name 'Kali Linux' \
  -hda kalidisk.qcow2
```

![Kali Linux](/images/creating-virtual-machines-using-qemu-kvm/kali.jpg)

## MacOS <span class="emoji">🍎</span>

There is a nice README that explains [how to set up a macOS virtual machine](https://github.com/foxlet/macOS-Simple-KVM) using QEMU accelerated by KVM. Here is the final result of a VM running `macOS Catalina` in dark mode:

![MacOS](/images/creating-virtual-machines-using-qemu-kvm/mac.jpg)
