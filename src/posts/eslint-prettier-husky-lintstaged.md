---
title: 'Best Development Tools for JavaScript Projects'
description: 'Integrate ESLint, Prettier, Lint Staged and Husky.'
date: '2021-09-11'
---

## ESLint <span class="emoji">👀</span>

ESLint will make sure your code has a level of clarity that allows reading and maintaining easier for anyone who has to work on it. Next.js and Create React App already come with ESLint, so we need only to extend its configuration to add Airbnb's rules.

- [Install ESLint's extension for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Install Airbnb's ESLint rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [Configure ESLint in Next.js](https://nextjs.org/docs/basic-features/eslint)

My configuration for `.eslintrc.json` using Next.js and TypeScript:

```json[class="line-numbers"]
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "import/extensions": ["error", { "extensions": [".tsx"] }],
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-plusplus": "off",
    "@next/next/no-img-element": "off"
  }
}
```

## Prettier <span class="emoji">🦋</span>

Prettier is an opinionated code formatter. Using Prettier will automatically fix and beautify your code. In VSCode, you can go to settings and use Prettier as the default formatter and enable format on save.

- [Install Prettier's extension for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Install Prettier in your project](https://prettier.io/docs/en/install.html)

My `.prettierrc.json` configuration:

```json[class="line-numbers"]
{
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "avoid",
  "trailingComma": "none",
  "endOfLine": "auto"
}
```

## Lint Staged <span class="emoji">🛑💩</span>

Instead of running ESLint and Prettier on the entire project every time, Lint Staged will make sure you only lint files that will be committed.

- [Install Lint Staged in your project](https://github.com/okonet/lint-staged)

My `.lintstagedrc.json` configuration:

```json[class="line-numbers"]
{
  "*.js": "eslint --fix",
  "*.{json,css,md}": "prettier --single-quote --write"
}
```

## Husky <span class="emoji">🐺</span>

Husky makes it easy to configure git hooks. It allows you to run commands upon commits, pushes and other hooks. Lint Staged already installs Husky in its script.

- [Husky's website](https://typicode.github.io/husky/#/)

My `pre-commit` configuration:

```json[class="line-numbers"]
npx --no-install lint-staged
yarn lint-staged
```

My `pre-push` configuration (I use `Jest` for testing):

```json[class="line-numbers"]
yarn jest
```

## Bonus: EditorConfig <span class="emoji">🐀</span>

EditorConfig is not exclusive to JavaScript projects, but it's a good idea to use it if you work in a team. It maintains consistent coding styles for developers working across different editors. Just install its extension and create a configuration file to make it work.

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

## That's all Folks! <span class="emoji">🐰🥕</span>

Using these tools will make you deliver better code in your projects. Integrate them early on your projects to avoid some technical debt.

You can also use `TypeScript` instead of `JavaScript`. It is a powerful language that removes all the headaches when debugging your code (no more `console.log` to discover the type of a variable).

Don't forget to **test your code** using tools like `Jest`/`React Testing Library` and `Cypress`. It will give you the confidence to make changes to your codebase without worrying about breaking stuff in production.
