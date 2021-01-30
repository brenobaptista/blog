---
title: 'How to Setup a Terminal Using Zsh'
description: 'Learn how to turn an old-fashioned terminal into your new best friend.'
date: '2020-10-31'
---

> This guide was inspired by another guide made by Rocketseat (in Portuguese). [Check the guide](https://blog.rocketseat.com.br/terminal-com-oh-my-zsh-spaceship-dracula-e-mais/).

## Install the dependencies

### Zsh

Z shell is an alternative to Bash.
Many of the useful features of bash were incorporated into zsh, but also many original features were added.

[How to install Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)

### Oh My Zsh

Oh My Zsh is a framework for managing your Zsh configuration.

[How to install Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh)

### Fira Code

Fira Code is a popular and free monospaced font with programming ligatures.
If you have Fira Code installed in your browser, you'll be able to see you cool it is with the example below:

`!= ->> ++ :=`
`<!-- => === <=`

[How to install Fira Code into your OS](https://github.com/tonsky/FiraCode/releases)

### Dracula

Dracula is a popular dark theme that can be used in a lot of graphical interfaces.
Use it in your terminal because it's the best color palette for dark mode.

[How to integrate Dracula into your terminal](https://draculatheme.com)

### Spaceship Prompt

Spaceship is a minimalistic, powerful and extremely customizable Zsh prompt.

[How to install Spaceship](https://github.com/denysdovhan/spaceship-prompt)

## Additional Configuration

### Setup Spaceship

At the end of `~./zshrc`, place this:

```
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

[How to install Zinit](https://github.com/zdharma/zinit)

After installing Zinit:

At the end of `~./zshrc`, after `### End of Zinit's installer chunk`, add this:

```
zinit light zdharma/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-completions
```

It will install 3 very useful plugins.

### VSCode terminal

Add this to your VSCode configuration:

```
"terminal.integrated.shell.osx": "usr/bin/zsh"
```

`usr/bin/zsh` should be the path to your Zsh. Run `which zsh` in your terminal to get the path in your case.

## Bonus Tip

If you use yarn and you would like to have emojis in your terminal, run this in your brand-new terminal:

```
yarn config set -- --emoji true
```

## Screenshot

![Terminal](/blog/how-to-setup-a-terminal-using-zsh/terminal.png)
