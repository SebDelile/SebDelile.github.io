export const mainPadding = `width: 100%;
  padding: 0 1rem;
  @media only screen and (min-width: 20rem) {
    padding: 0 calc(5% - (100vw - 100%)) 0 5%; /*(100vw-100%) on the padding-rigth allows the content to remain centred even in the presence of Y-scroolbar*/
  }
  @media only screen and (min-width: 90rem) {
    padding: 0 calc((100% - 90rem * 0.9) / 2) 0 calc((100% - (100vw - 100%) - 90rem * 0.9) / 2); /*content never exceeds 90rem*/
  }`;
