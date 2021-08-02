---
title: 'Reusing Entities With CSS Custom Properties'
description: 'Access and change styles dynamically at any time.'
date: '2021-08-01'
---

> Custom properties are also known as CSS variables or cascading variables.

The company I work for uses Sass to style its components. I tried using Sass variables to handle dark mode, but it didn't work. Then I discovered that I should use CSS variables to do that instead.

Implementing dark mode with Sass is impracticable because it is a preprocessor language, so any changes imply a new generating process and a page refresh. But CSS variables are easily accessible and can be changed dynamically at any time. You can even [use Sass variables inside CSS variables](https://www.sass-lang.com/documentation/breaking-changes/css-vars).

## Basic Usage <span class="emoji">👷</span>

To declare a CSS variable you will have to add a double dash before the name of that var:

```css[class="line-numbers"]
:root {
  --green-color: #1B4D3E;
}
```

To use the value of the CSS variable, we can use the `var` function:

```css[class="line-numbers"]
.green-component {
  background-color: var(--green-color);
}
```

## Adding Dark Mode <span class="emoji">🧛</span>

Create a file called `_variables.scss`, so you can set up all CSS variables. Then import that file into your main `styles.scss` using [Sass partials](https://www.sass-lang.com/documentation/at-rules/use).

```css[class="line-numbers"]
:root {
  --font-primary: 'Montserrat', sans-serif;
  --font-secondary: 'Roboto', sans-serif;
  --wide-spacing: 0.25px;
  --bg-primary: #f7fafc;
  --bg-secondary: #ffffff;
  --border-color: #d4e5f9;
  --text-primary: #000000;
  --text-secondary: #00000080;
  --focus: #000000;
  --shadow: rgba(0, 0, 0, 0.4);
  --invert-color: none;
}

.dark {
  --bg-primary: #000000;
  --bg-secondary: #111014;
  --border-color: #2a3139;
  --text-primary: #ffffff;
  --text-secondary: #999999;
  --focus: #ffffff;
  --invert-color: grayscale(1) invert(1);
}
```

Then, in your JavaScript logic, you can add the class `dark` to the `html` tag. In `React` you can do something similar to this:

```javascript[class="line-numbers"]
// if theme is 'dark' then class is 'dark', if not then class is empty
useEffect(() => {
  document.getElementsByTagName('html')[0].classList.toggle('dark', theme === 'dark')
}, [theme])
```

## Use Inspector <span class="emoji">👀</span>

To check CSS variables, open the Inspector for your web browser (right-click a page and select Inspect) and scroll down until you see something like this:

![CSS variables](/static/images/reusing-entities-with-css-variables/root-variables.png)

You can change these values on the browser to test different styles more easily.
