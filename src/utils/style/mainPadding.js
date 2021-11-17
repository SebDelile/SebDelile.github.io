export const mainPadding = `width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  @media only screen and (min-width: 20rem) {
    padding-left: calc(5% - (100vw - 100%)) 0 5%;
    padding-right: calc(5% - (100vw - 100%)) 0 5%;
    
  }
  @media only screen and (min-width: 90rem) {
    padding-left: 0 calc((100% - 90rem * 0.9) / 2) 0 calc((100% - (100vw - 100%) - 90rem * 0.9) / 2); 
    padding-right: 0 calc((100% - 90rem * 0.9) / 2) 0 calc((100% - (100vw - 100%) - 90rem * 0.9) / 2); 
  }`;
/* min-width 20rem : (100vw-100%) on the padding-rigth allows the content to remain centred even in the presence of Y-scroolbar*/
/* min-width 90rem : content never exceeds 90rem*/
