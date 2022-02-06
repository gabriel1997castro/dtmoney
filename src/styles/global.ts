import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  // REM = 1rem = font-size
  // A aplicação se adapta totalmente ao tamanho da tela se utilizarmos rem
  // com percentual o tamanho se ajusta até mesmo aos modos de acessibilidade e etc

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`