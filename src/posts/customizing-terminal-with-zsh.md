---
title: 'Customizing a Terminal With Zsh'
description: 'Turn an old-fashioned terminal into your new best friend.'
date: '2020-10-31'
---

![Terminal](/images/customizing-terminal-with-zsh/terminal.png)

## Table of Contents

## Dependencies

### 1. Zsh

<dfn><abbr title="Z shell">Zsh</abbr></dfn> is an alternative to Bash.
Many of the useful features of Bash were incorporated into Zsh, but also many original features were added.

[How to install Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)

### 2. Oh My Zsh

<dfn>Oh My Zsh</dfn> is a framework for managing your Zsh configuration.

[How to install Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh#basic-installation)

### 3. Spaceship Prompt

<dfn>Spaceship</dfn> is a minimalistic, powerful and extremely customizable Zsh prompt.

[How to install Spaceship](https://github.com/spaceship-prompt/spaceship-prompt#oh-my-zsh)

### 4. Zinit

<dfn>Zinit</dfn> is a flexible and fast Zsh plugin manager that will allow you to install everything from GitHub and other sites.

[How to install Zinit](https://github.com/zdharma-continuum/zinit#install)

## Additional Configuration

### Setup Spaceship

At the end of `~/.zshrc`, place this:

```bash[class="line-numbers"]
SPACESHIP_PROMPT_ORDER=(
  user      # Username section
  dir       # Current directory section
  host      # Hostname section
  git       # Git section (git_branch + git_status)
  hg        # Mercurial section (hg_branch + hg_status)
  exec_time # Execution time
  line_sep  # Line break
  vi_mode   # Vi-mode indicator
  jobs      # Background jobs indicator
  exit_code # Exit code section
  char      # Prompt character
)
SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_PROMPT_SEPARATE_LINE=false
SPACESHIP_CHAR_SYMBOL="❯"
SPACESHIP_CHAR_SUFFIX=" "
```

### Setup Zsh plugins

At the end of `~/.zshrc`, add this:

```bash[class="line-numbers"]
zinit light zdharma-continuum/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-completions
```

Then reload your terminal to install the plugins.
