---
title: 'Best Development Tools for JavaScript Projects'
description: 'Integrate ESLint, Prettier, Lint Staged and Husky.'
date: '2021-09-11'
---

## Table of Contents

## ESLint

<dfn>ESLint</dfn> will make sure your code has a level of clarity that allows reading and maintaining easier for anyone who has to work on it.

Next.js and Create React App already come with ESLint, so we need only to extend its configuration if needed.

- [Installing ESLint's extension for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Configuring ESLint in Next.js](https://nextjs.org/docs/basic-features/eslint)
- [Turning off conflicts with Prettier](https://github.com/prettier/eslint-config-prettier)
- [Running Prettier as a rule](https://github.com/prettier/eslint-plugin-prettier)

## Prettier

<dfn>Prettier</dfn> is an opinionated code formatter. Using Prettier will automatically fix and beautify your code.

In <abbr title="Visual Studio Code">VSCode</abbr>, you can go to settings and use Prettier as the default formatter and enable format on save.

- [Installing Prettier's extension for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Installing Prettier in your project](https://prettier.io/docs/en/install.html)

My `.prettierrc.json` configuration:

```json[class="line-numbers"]
{
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "avoid",
  "trailingComma": "none",
  "endOfLine": "lf"
}
```

## Lint Staged

Instead of running ESLint and Prettier on the entire project every time, <dfn>Lint Staged</dfn> will make sure you only lint files that will be committed.

- [Installing Lint Staged in your project](https://github.com/okonet/lint-staged)

My `.lintstagedrc.json` configuration:

```json[class="line-numbers"]
{
  "*.js": "eslint --fix",
  "*.{json,css,md}": "prettier --single-quote --write"
}
```

## Husky

<dfn>Husky</dfn> makes it easy to configure git hooks. It allows you to run commands upon commits, pushes and other hooks.

- [Installing Husky in your project](https://github.com/typicode/husky)
- [Husky's website](https://typicode.github.io/husky/#/)

My `pre-commit` configuration (runs ESLint and Prettier):

```json[class="line-numbers"]
yarn lint-staged
```

My `pre-push` configuration (runs type-check and Jest):

```json[class="line-numbers"]
yarn tsc --noEmit
yarn jest
```

## Bonus: EditorConfig

<dfn>EditorConfig</dfn> is not exclusive to JavaScript projects, but it's a good idea to use it if you work in a team. It maintains consistent coding styles for developers working across different editors.

Just install its extension and create a configuration file to make it work.

- [EditorConfig's website](https://editorconfig.org/)
- [Install EditorConfig's extension for VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

My `.editorconfig` configuration:

```json[class="line-numbers"]
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
```

## That's all Folks!

Using these tools will make you deliver better code in your projects. Integrate them early on your projects to avoid some technical debt.

You can also use [TypeScript](https://www.typescriptlang.org/) instead of JavaScript. It is a powerful language that removes all the headaches when debugging your code (no more console logging to discover the type of a variable).

Don't forget to **test your code** using tools like [Jest](https://jestjs.io/)/[React Testing Library](https://testing-library.com/) and [Cypress](https://www.cypress.io/). It will give you the confidence to make changes to your codebase without worrying about breaking stuff in production.
