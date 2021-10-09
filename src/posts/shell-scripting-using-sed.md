---
title: 'Shell Scripting Using Sed'
description: 'How to use sed to find and replace strings in files.'
date: '2021-05-08'
---

## Find and Replace Strings <span class="emoji">🔎</span>

The best part about <abbr title="stream editor">sed</abbr> is that it uses <abbr title="regular expression">regex</abbr>, which makes it super easy to match patterns.

The general form of searching and replacing text using `sed` takes the following form:

```bash[class="command-line"]
sed -i 's/SEARCH_REGEX/REPLACEMENT/g' INPUTFILE
```

- `-i` - By default, `sed` writes its output to the standard output. This option tells `sed` to edit files in place. If an extension is supplied, a backup of the original file is created.

- `s` - The substitute command, probably the most used command in `sed`.

- `/ / /` - Delimiter character. It can be any character but usually the slash (`/`) character is used.

- `SEARCH_REGEX` - Normal string or a regular expression to search for.

- `REPLACEMENT` - The replacement string.

- `g` - Global replacement flag. By default, `sed` reads the file line by line and changes only the first occurrence of the `SEARCH_REGEX` on a line. When the replacement flag is provided, all occurrences are replaced.

- `INPUTFILE` - The name of the file on which you want to run the command.

All other use cases are similar to this one, so I recommend you learn the basics of `regex` before learning `sed`.

## Scripting <span class="emoji">📜</span>

This is a script I wrote using `sed` some time ago. It replaces some strings in different files between the `desktop` and the `web` versions of an app. Notice that the last line uses `sed` to do that task like this: `sed -i "$scripts" $files`.

```bash[class="line-numbers"]
#!/bin/bash

files="
  ./markup/onboarding.html
  ./markup/popover.html
  ./scripts/onboarding.js
  ./scripts/popover.js
"

paths=(
  "UI_FONT/:../fonts/"
  "UI_IMG/:../images/"
  "JS_POLYFILL/:../scripts/vendor/polyfill/"
  "JS_JQUERY/:../scripts/vendor/jquery/"
  "JS_CHART/:../scripts/vendor/chartjs/"
  "JS_APP/:../scripts/"
)

[ $# != 1 ] && echo "Usage: $0 {web|desktop}" && exit

case "$1" in
  web)
    for path in "${paths[@]}" ; do
      key="${path%%:*}"
      value="${path##*:}"

      scripts+="
        s|$key|$value|g;
      "
    done
    ;;

  desktop)
    for path in "${paths[@]}" ; do
      key="${path%%:*}"
      value="${path##*:}"

      scripts+="
        s|$value|$key|g;
      "
    done
    ;;

  *)
    echo "Usage: $0 {web|desktop}"
    ;;
esac

sed -i "$scripts" $files
```
