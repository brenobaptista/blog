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
    }
  }
}
