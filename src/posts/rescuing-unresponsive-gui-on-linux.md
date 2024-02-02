---
title: 'Rescuing Unresponsive GUI on Linux'
description: 'Gaming on Linux is so cool that it freezes your desktop!'
date: '2024-02-02'
---

On Linux we have these virtual terminals (TTYs) built-in. They provide a way to bypass the whole graphical user interface and give you just a simple and reliable terminal.

To switch between different TTYs, you can use these shortcuts (that may change on older systems):

- `Ctrl + Alt + F1` - Lockscreen
- `Ctrl + Alt + F2` - Desktop Environment
- `Ctrl + Alt + F3` - TTY3
- `Ctrl + Alt + F4` - TTY4
- `Ctrl + Alt + F5` - TTY5
- `Ctrl + Alt + F6` - TTY6

To get back to your desktop environment after testing, press `Ctrl + Alt + F2` or run the command `chvt 2`.

## Unfreeze your Desktop Environment

Ever been gaming on Linux and then your whole system freezes? It sometimes happens to me when I'm testing some games on Heroic Games Launcher.

The solution is to go to one of the TTYs and kill the processes. I usually press `Ctrl + Alt + F4`, put my username and password then run my alias `unfreeze` command (which is `kill -9 -1`).

![TTY4](/images/rescuing-unresponsive-gui-on-linux/tty4.png)

The `kill -9 -1` command kills all processes that can be killed (including your game), which means you will go back to your lockscreen and will have a clean system. It feels like a quick reboot.

You could also run `shutdown` to just power off your computer normally or `reboot` to restart your computer.

To add an alias, go to your `.bashrc` or `.zshrc` and put this line somewhere at the end of the file:

```bash[class="line-numbers"]
alias unfreeze="kill -9 -1"
```
