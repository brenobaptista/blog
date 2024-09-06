---
title: 'Customizing a Terminal With Zsh'
description: 'Turn an old-fashioned terminal into your new best friend.'
date: '2022-08-20'
---

![Terminal](/images/customizing-terminal-with-zsh/terminal.png)

## Table of Contents

## 1. Zsh

<dfn><abbr title="Z shell">Zsh</abbr></dfn> is an alternative to Bash.
Many of the useful features of Bash were incorporated into Zsh, but also many original features were added.

- [Installing and Setting Up Zsh as Default](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#install-and-set-up-zsh-as-default)

## 2. Oh My Zsh

<dfn>Oh My Zsh</dfn> is a framework for managing your Zsh configuration.

You don't strictly need it as you can simply choose the "Manual Installation (Git Clone)" option for the plugins.

- [Installing Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh#basic-installation)

### Plugins

To use plugins with Oh My Zsh, you'll need to git clone and enable them in your `~/.zshrc` file.

These are the plugins most people use with Zsh:

- [zdharma/fast-syntax-highlighting](https://github.com/zdharma-continuum/fast-syntax-highlighting#oh-my-zsh): It adds syntax highlighting while you type commands, allowing you to quickly check if they are correct.

- [zsh-users/zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh): It suggests commands using your history while you type (like a fuzzy finder).

```bash[class="line-numbers"]
plugins=(
  git
  zsh-autosuggestions
  fast-syntax-highlighting
)
```

## 3. Changing theme (optional)

You can choose between [themes from Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) by replacing `ZSH_THEME="robbyrussell"` in `~/.zshrc`. I personally like the default theme, so I just leave it there.

## 4. Changing auto-update behavior (optional)

By default, you will be prompted to confirm updates every 2 weeks. I find this behavior pretty annoying.

You can choose other update modes by uncommenting one of the lines in your `~/.zshrc` file.

### Disable automatic updates

```bash[class="line-numbers"]
zstyle ':omz:update' mode disabled
```
