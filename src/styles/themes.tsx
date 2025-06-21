import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string
    colors: {
      primary: string
      text: string
      altText: string
      background: string
      altBackground: string
      selector: string
      selectorEdge: string
      visited: string
    }
  }
}

export const dracula = {
  mode: 'dracula',
  colors: {
    primary: '#bd93f9',
    text: '#eaeaea',
    altText: '#bababa',
    background: '#282a36',
    altBackground: ' #44475a',
    selector: '#cccccc',
    selectorEdge: '#333333',
    visited: '#8466ae'
  }
}

export const retro = {
  mode: 'retro',
  colors: {
    primary: 'orange',
    text: 'white',
    altText: 'gray',
    background: 'black',
    altBackground: 'black',
    selector: 'gray',
    selectorEdge: 'gray',
    visited: 'brown'
  }
}
