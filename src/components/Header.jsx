import * as React from 'react';
import styled from 'styled-components';
import { mainPadding } from '../utils/style/mainPadding';
import { SocialMedia } from './SocialMedia';

export const Header = () => (
  <Wrapper>
    <Name>Sébastien Delile</Name>
    <Job> - développeur react.js</Job>
    <SocialMedia />
    <LangSelection>
      {['fr', 'en'].map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </LangSelection>
  </Wrapper>
);

const Wrapper = styled.header`
  ${mainPadding}

  position: sticky;
  top: 0;
  width: 100%;
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
  box-shadow: 0 0 0.25rem 0.125rem rgba(0, 0, 0, 0.5);

  @media only screen and (min-width: 30rem) {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      'name job job'
      'social-media social-media lang-selection';
  }

  @media only screen and (min-width: 48rem) {
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

  @media only screen and (min-width: 30rem) {
    display: block;
  }
`;

const LangSelection = styled.select`
  grid-area: lang-selection;
`;
