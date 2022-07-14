import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    primary: '#000d1a',
    secondary: '#fff',
    orange: '#cd853f',
}

export const darkTheme = {
    primary: '#ddd',
    secondary: '#333',
    orange: '#be7832',
}

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }
`

export default GlobalStyle
