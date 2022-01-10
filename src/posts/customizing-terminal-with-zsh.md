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

[How to install Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh)

### 3. Fira Code

<dfn>Fira Code</dfn> is a popular and free monospaced font with programming ligatures.

If you have Fira Code installed in your browser, you'll be able to see how cool it is with the example below:

`!= ->> ++ :=`
`<!-- => === <=`

You still need to install it on your system, though.

[How to install Fira Code into your OS](https://github.com/tonsky/FiraCode/releases)

### 4. Dracula

<dfn>Dracula</dfn> is a popular dark theme that can be used in a lot of graphical interfaces.

Use it in your terminal because it's the best color palette for dark mode.

[How to integrate Dracula into your terminal](https://draculatheme.com)

### 5. Spaceship Prompt

<dfn>Spaceship</dfn> is a minimalistic, powerful and extremely customizable Zsh prompt.

[How to install Spaceship](https://github.com/denysdovhan/spaceship-prompt)

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

### Zinit and Zsh plugins

> Update: the organization `zdharma` was deleted by the author and the community created a new one called `zdharma-continuum`

[How to install Zinit](https://github.com/zdharma-continuum/zinit)

After installing Zinit:

At the end of `~/.zshrc`, after `### End of Zinit's installer chunk`, add this:

```bash[class="line-numbers"]
zinit light zdharma-continuum/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-completions
```

It will install 3 very useful plugins.

### Add emojis

If you use yarn and you would like to have emojis in your terminal, run this in your brand-new terminal:

```bash[class="command-line"]
yarn config set -- --emoji true
```
