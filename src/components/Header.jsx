import * as React from 'react';
import styled from 'styled-components';
import { SocialMedia } from './SocialMedia';

export const Header = () => (
  <Wrapper>
    <Name>Sébastien Delile</Name>
    <Job> - développeur react.js</Job>
    <HeaderSocialMedia />
    <LangSelection>
      {['fr', 'en'].map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </LangSelection>
  </Wrapper>
);

const breakpoints = ['30rem', '48rem'];

const Wrapper = styled.header`
  position: sticky;
  z-index: 100;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'name name'
    'social-media lang-selection';
  justify-items: flex-start;
  align-items: center;
  align-content: end;
  gap: 0;
  padding-top: 1rem;
  background: var(--color-primary);
  color: var(--color-secondary);
  box-shadow: var(--boxshadow-main);

  @media only screen and (min-width: ${breakpoints[0]}) {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      'name job job'
      'social-media social-media lang-selection';
  }

  @media only screen and (min-width: ${breakpoints[1]}) {
    grid-template-columns: auto 1fr auto auto;
    grid-template-rows: auto;
    grid-template-areas: 'name job social-media lang-selection';
    align-content: center;
    padding-top: 0;
  }
`;

const Name = styled.p`
  grid-area: name;
  font-size: 1.5rem;
`;

const Job = styled.p`
  display: none;
  grid-area: job;
  font-size: 1.25rem;
  padding-left: 0.25rem;

  @media only screen and (min-width: ${breakpoints[0]}) {
    display: block;
  }
`;

const LangSelection = styled.select`
  grid-area: lang-selection;
`;

const HeaderSocialMedia = styled(SocialMedia)`
  grid-area: social-media;
  position: relative;
  right: 1rem;
`;
