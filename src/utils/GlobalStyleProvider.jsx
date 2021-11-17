import React from 'react';
import { createGlobalStyle } from 'styled-components';
import caviarFontEot from '../fonts/CaviarDreams-webfont.eot';
import caviarFontWoof from '../fonts/CaviarDreams-webfont.woff';
import caviarFontWoof2 from '../fonts/CaviarDreams-webfont.woff2';
import caviarFontTtf from '../fonts/CaviarDreams-webfont.ttf';
import caviarFontSvg from '../fonts/CaviarDreams-webfont.svg';

export const GlobalStyleProvider = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
  /* --------------------------------------------------
  --------------------- CSS reset ---------------------
  -------------------------------------------------- */

  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: unset;
    cursor: pointer;
  }

  button {
    background-color: inherit;
    border: none;
    color : inherit;
    font: inherit;
    cursor: pointer;
  }

  dialog {
    border: none;
    color: inherit;
    background: unset;
  }

  /* --------------------------------------------------
  -------------------- Typography ---------------------
  -------------------------------------------------- */

  @font-face {
    font-family: "caviar_dreamsregular";
    src: url(${caviarFontEot});
    src: url(${caviarFontWoof2}) format("woff2"),
      url(${caviarFontWoof}) format("woff"),
      url(${caviarFontTtf}) format("truetype"),
      url(${caviarFontSvg}) format("svg");
    font-weight: normal;
    font-style: normal;
  }

  body * {
      font-family: "DM Sans", "sans-serif";
  }

  h1, h2 {
    font-family: "caviar_dreamsregular", "Zen Kurenaido", sans-serif;
  }

  /* --------------------------------------------------
  --------------------- Variables ---------------------
  -------------------------------------------------- */

  body {
    --color-primary: #043B6B;
    --color-secondary: #DDDDDD;
    --color-background: #EEEEEE;
  }

  /* --------------------------------------------------
  --------------------- Keyframes ---------------------
  -------------------------------------------------- */

  @keyframes infobulle-appears {
    from {opacity: 0}
    to {opacity: 1}
  }

  /* --------------------------------------------------
  ------------------- Global styles -------------------
  -------------------------------------------------- */

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body{
    min-width: 20rem;
    background: var(--color-background);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  /*Each of the child of #root must have this class*/
  .main-padding {
    width: 100%;
    padding: 0 1rem;
    @media only screen and (min-width: 20rem) {
      padding: 0 calc(5% - (100vw - 100%)) 0 5%; /*(100vw-100%) on the padding-rigth allows the content to remain centred even in the presence of Y-scroolbar*/
    }
    @media only screen and (min-width: 90rem) {
      padding: 0 calc((100% - 90rem * 0.9) / 2) 0 calc((100% - (100vw - 100%) - 90rem * 0.9) / 2); /*content never exceeds 90rem*/
    }
  }

  .sr-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
