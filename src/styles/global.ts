import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    html {
      height: 100%;

      @media (max-width: 1080px) {
        font-size: 93.75%;
      }

      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    body {
      height: 100%;
      -webkit-font-smoothing: antialiased !important;
      background: ${theme.colors.background};
      color: ${theme.colors.text};
    }

    body,
    input,
    button,
    textarea {
      font: 400 1rem 'Roboto', sans-serif;
    }

    button {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  `}
`;
