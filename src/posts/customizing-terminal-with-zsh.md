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

- [Installing Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)

## 2. Oh My Zsh

<dfn>Oh My Zsh</dfn> is a framework for managing your Zsh configuration.

- [Installing Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh#basic-installation)

### Plugins

To use plugins with Oh My Zsh, you'll need to clone and enable them in your `~/.zshrc` file.

- [zdharma/fast-syntax-highlighting](https://github.com/zdharma-continuum/fast-syntax-highlighting#oh-my-zsh): It adds syntax highlighting while you type commands, allowing you to quickly check if they are correct.

- [zsh-users/zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh): It suggests commands using your history while you type (like a fuzzy finder).

```bash[class="line-numbers"]
plugins=(
  git
  zsh-autosuggestions
  fast-syntax-highlighting
)
```

## 3. Change theme or use Spaceship (optional)

You can choose between [themes from Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) by replacing `ZSH_THEME="robbyrussell"` in `~/.zshrc` or set up your own using Spaceship.

<dfn>Spaceship</dfn> is a minimalistic, powerful and extremely customizable Zsh prompt.

- [Installing Spaceship](https://github.com/spaceship-prompt/spaceship-prompt#oh-my-zsh)

### Setup

In `~/.zshrc`, replace `ZSH_THEME="robbyrussell"` with `ZSH_THEME="spaceship"`.

Below this line, place this example of customization:

```bash[class="line-numbers"]
SPACESHIP_PROMPT_ORDER=(
  user      # Username section
  dir       # Current directory section
  git       # Git section (git_branch + git_status)
  exec_time # Execution time
  char      # Prompt character
)
SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_SEPARATE_LINE=false
```
