---
title: 'Improving Pop!_OS 22.04 Color Consistency'
description: 'Match the colors between desktop environment and browsers.'
date: '2024-05-12'
---

## Table of Contents

## Pop!_OS 22.04

![Pop!_OS](/images/improving-pop-os-22-04-color-consistency/pop-os.png)

### Match "Dock" background with "Panel" background

Run the following command:

```bash[class="command-line"]
gsettings set org.gnome.shell.extensions.dash-to-dock background-color '#211f1f'
```

### Match "Applications" background with "Launcher" background

1. Run the following command (replace `nano` with preferred editor):

```bash[class="command-line"]
sudo nano /usr/share/gnome-shell/extensions/pop-cosmic@system76.com/dark.css
```

2. Update `cosmic-applications-dialog` to use `background-color: #33302f;`.
3. Restart the shell by pressing `ALT + F2`, typing `R` and pressing `ENTER`.

## Browsers

![Browsers](/images/improving-pop-os-22-04-color-consistency/browsers.png)

### Chromium-based browsers

1. Create a folder and inside it create a file called `manifest.json`.
2. Paste this content in the file:

```bash[class="line-numbers"]
{
  "manifest_version": 2,
  "version": "1.0",
  "name": "Pop!_OS",
  "theme": {
    "colors": {
      "frame": [51, 48, 47],
      "frame_inactive": [51, 48, 47],
      "toolbar": [33, 31, 31],
      "tab_text": [255, 255, 255],
      "bookmark_text": [255, 255, 255]
    }
  }
}
```

3. Search `chrome://extensions`.
4. Enable `Developer mode`.
5. Click `Load unpacked`.
6. Select the folder you created earlier.

### Firefox

Install the `Firefox Color` extension to easily create custom themes.

- Toolbar Color: `#33302F`
- Toolbar Icons and Text: `#FFFFFF`
- Background Color: `#211F1F`
- Background Tab Text Color: `#FFFFFF`
- Search Bar Color: `#211F1F`
- Search Text: `#FFFFFF`
- Tab Highlight Color: `#33302F`
- Popup Background: `#33302F`
- Popup Text: `#FFFFFF`
