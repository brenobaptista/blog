---
title: 'Upstreaming a Linux Kernel Patch to Fix My Headset Mic'
description: 'How I contributed a codec quirk to fix microphone detection.'
date: '2026-02-25'
---

Three weeks ago, I contributed a fix to the Linux kernel to correct the pin configuration for my laptop's audio codec.

Once [my patch](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/sound/hda/codecs/realtek/alc269.c?id=51db05283f7c9c95a3e6853a3044cd04226551bf) was released in Linux 6.18.13, I no longer needed the manual `snd-hda-intel` model workaround I described in [my previous post](/posts/fixing-headset-microphone-not-working-linux).

This post is a high-level overview of my process, not a comprehensive guide. For detailed instructions, see the official guides on [KernelNewbies](https://kernelnewbies.org/FirstKernelPatch) and [The Linux Kernel Archives](https://www.kernel.org/doc/html/latest/process/submitting-patches.html).

## Table of Contents

## Cloning the Linux Kernel

This may take a while, as the repository is large.

```bash[class="command-line"]
git clone https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git
```

## Preparing the Patch

Once you're happy with your changes, sign the commit using `--signoff` (required when contributing to the Linux kernel). Then, format the commit into a patch file using `git format-patch`.

```bash[class="command-line"]
git commit -m "example message" --signoff

git format-patch -1
```

## Identifying the Maintainers

Perl is required to run two scripts: `checkpatch.pl` (which checks coding style and common issues) and `get_maintainer.pl` (which finds the appropriate maintainers and mailing lists for the patch).

```bash[class="command-line"]
sudo dnf install perl # on Fedora

./scripts/checkpatch.pl 0001-patch-name.patch

./scripts/get_maintainer.pl path/file.c # or 0001-patch-name.patch
```

## Sending the Patch

`git send-email` is often packaged separately from Git, so you may need to install it first. Then, configure it in your `~/.gitconfig` and use it to send the patch.

```bash[class="command-line"]
sudo dnf install git-email # on Fedora

# set it up (next section)

git send-email --confirm=always \
 --to='Maintainer1 <maintainer@project.org>, Maintainer2 <maintainer2@project.org>' \
 --cc='reviewer@project.org, reviewer2@project.org' \
 0001-patch-name.patch
```

### Setting Up With Gmail

Add the following to your `~/.gitconfig`:

```bash[class="line-numbers"]
[sendemail]
smtpuser = your_email_address@gmail.com
smtpserver = smtp.googlemail.com
smtpencryption = tls
smtpserverport = 587
```

You'll need to generate an app password in your Google Account settings. `git send-email` will ask for this password (not your Google password) before sending the email.
