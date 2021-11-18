import * as React from 'react';
import { GlobalStyleProvider } from '../utils/style/GlobalStyleProvider';
import styled from 'styled-components';
import { Header } from './Header';

export const Layout = ({ children, title }) => (
  <>
    <GlobalStyleProvider />
    <title>{title}</title>
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  height: 100%;
  min-width: 20rem;
  background: var(--color-background);
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  & > * {
    padding-left: 1rem;
    padding-right: 1rem;
    flex-shrink: 0;

    @media only screen and (min-width: 20rem) {
      padding-left: calc(100vw * 0.05);
      padding-right: calc(100vw * 0.05 - (100vw - 100%));
      /* min-width 20rem : (100vw-100%) on the padding-rigth allows the content to remain centred even in the presence of Y-scroolbar*/
    }
    @media only screen and (min-width: 90rem) {
      padding-left: calc((100vw - 90rem * 0.9) / 2);
      padding-right: calc((100vw - 90rem * 0.9) / 2 - (100vw - 100%));
      /* min-width 90rem : content never exceeds 90rem*/
    }
  }
`;

const Main = styled.main`
  flex-grow: 1;
`;
