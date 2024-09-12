---
title: 'Improving Pop Shell and Workspaces'
description: 'Fix your Pop!_OS 22.04 experience with these changes.'
date: '2023-07-01'
---

![Desktop](/images/improving-pop-shell-workspaces/desktop.jpg)

![Pop Shell](/images/improving-pop-shell-workspaces/pop-shell.jpg)

<dfn>Pop Shell</dfn> is an extension for GNOME that comes in Pop!_OS 22.04 and allows us to use tilling features like the famous i3 window manager.

<dfn>Workspaces</dfn> are an easy way to group a set of windows. An example is to put the web browser on one workspace, communication applications on another one, the ones with which you work on another one and so on.

## Table of Contents

## Fixing Pop Shell for mouse (stacking)

I suggest disabling the default behavior that when you move a window on top of another it creates a stack instead of replacing the positions.

Open the Extensions app, find "Pop Shell" and click "Settings". Then disable "Allow stacking with mouse". Also disable "Mouse Cursor Follows Active Window" because it works better with the shortcuts below.

## Fixing workspace shortcuts

There is a ongoing discussing about changing the default shortcuts for workspaces in Pop Shell's repo: [Change workspaces with Super + number](https://github.com/pop-os/shell/issues/142)

Instead of using GNOME's workspaces shortcuts, remap the first 4 workspaces to use the same shortcuts we use in all other tiling window managers: `SUPER + 1-4` to switch to workspace and `SUPER + SHIFT + 1-4` to move window to workspace. But instead of using `SUPER`, I prefer using `ALT` because it's more ergonomic for me.

1. Open the Settings app.
2. Go to the "Keyboard" menu on the left side.
3. Under "Keyboard Shortcuts" click "Customize Shortcuts".
4. Search for "Switch to workspace" to enable/rebind switching between the first 4 workspaces.
5. Search for "Move window to workspace" to enable/rebind moving windows between the first 4 workspaces.

### Removing the Workspace Switcher

To move the workspace switcher popup from the left to the bottom, open the Extensions app and disable "Cosmic Workspaces". It's also more intuitive because it'll switch horizontally instead of vertically.

Removing the workspace switcher will break the dynamic workspaces feature, so use static instead (I use 4 workspaces in Settings app -> Desktop -> Workspaces -> Fixed Number of Workspaces). Then install the extension "Disable Workspace Switcher" below.

## Recommended extensions

First, you can install the **browser** extension "GNOME Shell integration" to make this easier. Then in each **desktop** extension you can install by accessing the URL and just clicking one button.

- [Space Bar](https://extensions.gnome.org/extension/5090/space-bar/): displays workspaces information in top panel. I like to disable "Show empty workspaces".
- [Disable Workspace Switcher](https://extensions.gnome.org/extension/4980/disable-workspace-switcher/): disables the annoying workspace switcher popup. Alternatives: "Workspace Switcher Manager" or "Just Perfection".
- [Auto Move Windows](https://extensions.gnome.org/extension/16/auto-move-windows/): sets applications to open automatically in some workspace.
- [Disable Workspace Switch Animation for GNOME 40+](https://extensions.gnome.org/extension/4290/disable-workspace-switch-animation-for-gnome-40/): disables the animation when switching workspaces (optional, I like it)
