import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-text-base: #282828;
    --color-active: #c1f7b6;
    --color-inactive: #000;
    --color-transparent: transparent;
    --bike-color: #daff85;
  }
`;

export default GlobalStyle;