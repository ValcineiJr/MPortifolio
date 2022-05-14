import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 html {
  box-sizing: border-box;
  font-size: 62.5%;

}

html,body {
  font-family: "Karla", sans-serif !important;

}

*, *:before, *:after {
  box-sizing: border-box;
  border:0;

}

button{
  cursor: pointer;
}

input{ outline:none}

a{
  text-decoration: none;

}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Gothic A1", sans-serif !important;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

//responsive

@media (max-width: 500px) {
  html {
    font-size: 50%;
  }
}

`;

export default GlobalStyle;
