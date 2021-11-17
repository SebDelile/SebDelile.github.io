import * as React from 'react';
import { GlobalStyleProvider } from '../utils/style/GlobalStyleProvider';
import styled from 'styled-components';
import { mainPadding } from '../utils/style/mainPadding';
import { Header } from './Header';

export const Layout = ({ children, title }) => (
  <>
    <GlobalStyleProvider />
    <title>{title}</title>
    <Header />
    <Main>{children}</Main>
  </>
);

const Main = styled.main`
  ${mainPadding}
`;
