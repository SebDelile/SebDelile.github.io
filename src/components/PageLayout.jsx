import * as React from 'react';
import { GlobalStyleProvider } from '../utils/style/GlobalStyleProvider';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { WorkInProgressBadge } from './WorkInProgressBadge';
import { SearchEngineOptimization } from './SearchEngineOptimization';

export const PageLayout = ({ children, title }) => (
  <>
    <GlobalStyleProvider />
    <SearchEngineOptimization title={title} lang="fr" />
    <Wrapper>
      <WorkInProgressBadge />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  </>
);

const breakpoints = ['20rem', '90rem'];

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  min-width: 20rem;
  background: var(--color-background);
  display: flex;
  flex-direction: column;

  & > header,
  & > main,
  & > footer {
    padding-left: 1rem;
    padding-right: 1rem;
    flex-shrink: 0;

    @media only screen and (min-width: ${breakpoints[0]}) {
      padding-left: calc(100vw * 0.05);
      padding-right: calc(100vw * 0.05 - (100vw - 100%));
      /* min-width 20rem : (100vw-100%) on the padding-rigth allows the content to remain centred even in the presence of Y-scroolbar*/
    }
    @media only screen and (min-width: ${breakpoints[1]}) {
      padding-left: calc((100vw - 90rem * 0.9) / 2);
      padding-right: calc((100vw - 90rem * 0.9) / 2 - (100vw - 100%));
      /* min-width 90rem : content never exceeds 90rem*/
    }
  }
`;

const Main = styled.main`
  flex-grow: 1;
`;
