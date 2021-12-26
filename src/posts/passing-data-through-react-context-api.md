---
title: 'Passing Data Through React Context API'
description: 'Context provides a way to share data between components.'
date: '2021-05-29'
---

## Table of Contents

## Introduction

<dfn>The Context API</dfn> is an alternative to "prop drilling", or moving props from grandparent to parent to child, and so on. You should use this API when you need to pass props through several intermediates and to multiple components.

You're gonna create a "global state" to share data between components, like Redux. But unlike Redux, you don't need to install any external libraries because it comes with React since version 16.3. Also, it's way simpler to understand and implement in your code.

```markup
---------------    ----------    ---------
| Grandparent | -> | Parent | -> | Child |    (prop drilling)
---------------    ----------    ---------
      ↓                              ↑
      |------------------------------|         (Context API)
```

The best way to understand a technology is by using it, so run `npx create-react-app react-context-api` and let's learn it together!

## 1. Creating the context

The first step is to create the context. I suggest you put it in a `contexts` folder inside your `src`.

`src/contexts/ExampleContext.js`

```js[class="line-numbers"]
import { createContext } from 'react'

const ExampleContext = createContext(null)

export default ExampleContext
```

> You could create the context in the same file as the high-level component below, but it would be disorganized and would lead to errors.

## 2. Providing the context

The provider needs to exist as a wrapper around the parent component (or container). You can add it to `App.js` or any other parent. In our case, we're gonna add it to a file called `HighComponent.js`, which will render our consumers.

But remember that in your real-world website the provider will provide access to the data to all child, grandchild, great-grandchild and so on. By the way, you provide context the same way both for class and functional components.

`src/components/HighComponent.js`

```js[class="line-numbers"]
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'
import LegacyComponent from './LegacyComponent'
import ExampleContext from '../contexts/ExampleContext'

const HighComponent = () => {
  const exampleData = {
    name: 'Breno Baptista'
  }

  return (
    <ExampleContext.Provider value={exampleData}>
      <ClassComponent />
      <FunctionalComponent />
      <LegacyComponent />
    </ExampleContext.Provider>
  )
}

export default HighComponent
```

## 3. Consuming the context

For the last step, you'll finally consume your context. There are three ways for you to do that:

### 3.1. Functional components

It's straighforward to consume contexts in a functional component.

`src/components/FunctionalComponent.js`

```js[class="line-numbers"]
import { useContext } from 'react'
import ExampleContext from '../contexts/ExampleContext'

const FunctionalComponent = () => {
  const exampleData = useContext(ExampleContext)

  return (
    <>
      My name is {exampleData.name}!
    </>
  )
}

export default FunctionalComponent
```

### 3.2. Class components

You can also consume contexts in a class component, but it's a little bit harder.

`src/components/ClassComponent.js`

```js[class="line-numbers"]
import React, { Component } from 'react'
import ExampleContext from '../contexts/ExampleContext'

class ClassComponent extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    const exampleData = this.context

    this.setState({ data: exampleData })
  }

  render() {
    return (
      <>
        My name is {this.state.data.name}!
      </>
    )
  }
}

ClassComponent.contextType = ExampleContext

export default ClassComponent
```

### 3.3. Legacy way (Consumer)

The traditional way to retrieve context values was by wrapping the child component in the Consumer. From there, you would be able to access the value prop as props. You may still see this, but it's more of a legacy way of accessing context.

`src/components/LegacyComponent.js`

```js[class="line-numbers"]
import React, { Component } from 'react'
import ExampleContext from '../contexts/ExampleContext'

class LegacyComponent extends Component {
  render() {
    return (
      <ExampleContext.Consumer>
        {(props) => {
          return (
            <>
              My name is {props.name}!
            </>
          )
        }}
      </ExampleContext.Consumer>
    )
  }
}

export default LegacyComponent
```

## That's all Folks!

Now you can import `HighComponent.js` inside `App.js` and you should see `My name is Breno Baptista!` three times (or your name). I hope now you understand how to use the Context API and can implement it in your own projects. Happy coding!
