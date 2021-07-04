---
title: 'Replacing React With Preact in Next.js'
description: 'Increase a little performance in production.'
date: '2021-06-19'
---

This may not work if certain features of React are required in production, so test the change before deploying to production. You can add [preact-compat](https://github.com/preactjs/preact-compat) to support those features. Check the [difference between React and Preact](https://preactjs.com/guide/v8/differences-to-react/).

It is very simple to do that:

1. Install Preact using `yarn add preact` or `npm install preact`.

2. Create `next.config.js` with the following code:

```js[class="line-numbers"]
module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
```

## The Result <span class="emoji">🤯</span>

You can run `yarn build` to check the bundle size difference.

- Before:

```bash[class="line-numbers"]
Page                                Size     First Load JS
┌ ● /                               15 kB           110 kB
├   /_app                           0 B            78.7 kB
├ ○ /404                            442 B          83.4 kB
├ ○ /donations                      952 B          83.9 kB
└ ● /posts/[id]                     2.08 kB        96.9 kB
    ├ /posts/adding-rss-...
    ├ /posts/creating-...
    ├ /posts/customizing-...
    └ [+5 more paths]
+ First Load JS shared by all       78.7 kB
  ├ chunks/6267f420 ...10dda0.js    13.9 kB
  ├ chunks/commons.e5f1ab.js        13.6 kB
  ├ chunks/framework.6fff95.js      42.1 kB
  ├ chunks/main.8d15e0.js           6.8 kB
  ├ chunks/pages/_app.627d06.js     1.53 kB
  └ chunks/webpack.50bee0.js        751 B
```

- After:

```bash[class="line-numbers"]
Page                                Size     First Load JS
┌ ● /                               15.6 kB        76.2 kB
├   /_app                           0 B            44.4 kB
├ ○ /404                            441 B          49.2 kB
├ ○ /donations                      951 B          49.7 kB
└ ● /posts/[id]                     2.08 kB        62.7 kB
    ├ /posts/adding-rss-...
    ├ /posts/creating-...
    ├ /posts/customizing-...
    └ [+5 more paths]
+ First Load JS shared by all       44.4 kB
  ├ chunks/6267f420 ...10dda0.js    14.1 kB
  ├ chunks/commons.e5f1ab.js        21.2 kB
  ├ chunks/main.8d15e0.js           6.8 kB
  ├ chunks/pages/_app.627d06.js     1.53 kB
  └ chunks/webpack.50bee0.js        751 B
```

This is a difference of 34.3 kB.
