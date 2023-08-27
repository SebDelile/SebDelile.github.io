import * as React from 'react';
import styled from 'styled-components';
import { SocialMedia } from './SocialMedia';

export const Footer = () => (
  <Wrapper>
    <Recipe>
      Page faite par mes soins en React.js puis générée avec Gatsby.
    </Recipe>
    <Disclaimer>2023 - tous droits réservés.</Disclaimer>
    <FooterSocialMedia />
  </Wrapper>
);

const breakpoints = ['48rem'];

const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'social-media'
    'recipe'
    'disclaimer';
  justify-items: center;
  align-items: center;
  gap: 0;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  background: var(--color-primary);
  color: var(--color-secondary);
  font-size: 0.75rem;
  overflow-x: hidden; /* infobull on minimal screenwidth could cause a uggly horizontal scrollbar to appear !*/

  @media only screen and (min-width: ${breakpoints[0]}) {
    grid-template-columns: 1fr auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      'recipe social-media'
      'disclaimer social-media';
    justify-items: start;
    font-size: 1rem;
  }
`;

const Recipe = styled.p`
  grid-area: recipe;
  margin-top: 0.5rem;
  text-align: center;

  @media only screen and (min-width: ${breakpoints[0]}) {
    margin-top: 1rem;
  }
`;

const Disclaimer = styled.p`
  grid-area: disclaimer;
  margin-top: 0.5rem;
  text-align: center;
`;

const FooterSocialMedia = styled(SocialMedia)`
  grid-area: social-media;
  width: 100%;
  max-width: 22rem;
  justify-content: space-around;

  @media only screen and (min-width: ${breakpoints[0]}) {
    width: unset;
    justify-content: center;
    align-self: start;
  }
`;
