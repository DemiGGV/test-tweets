import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalCSS = createGlobalStyle`
:root {
  --colors-main-light: #EBD8FF;
  --colors-main-dark: #373737;
  --colors-button-enabled: #5CD3A8;
  --colors-button-hovered: #fff;
  --colors-button-default: #EBD8FF;
  
  --colors-avatar-bg: #5736A3;
  --colors-text-light: #EBD8FF;
  --colors-text-dark: #373737;

  --colors-main-gradient-start:   #471CA9;
  --colors-main-gradient-middle:  #5736A3;
  --colors-main-gradient-end:  #4B2A99;

  --colors-line-gradient-start: #FBF8FF;
  --colors-line-gradient-end: #AE7BE3;
  
  --shadows-line: 0px 3px 3px #00000006;
  --shadows-button: 0px 3px 3px #00000025;
  --shadows-main: -3px 8px 21px #00000023;

  --transition-bgc-global: background-color 300ms ease;
  --transition-color-global: color 300ms ease;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap');
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
  }
ul,
ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
img {
    display: block;
    max-width: 100%;
    border: none;
    height: auto;
  }
button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: inherit;
    border: none;
  } 
}
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  text-rendering: optimizeSpeed;
  min-height: 100vh;
  line-height: 1.5;
  scroll-behavior: smooth;
}
`;
