import * as React from 'react';
import { GlobalStyleProvider } from '../utils/style/GlobalStyleProvider';
import styled from 'styled-components';
import { mainPadding } from '../utils/style/mainPadding';

export const Layout = ({ children, title }) => (
  <>
    <GlobalStyleProvider />
    <title>{title}</title>
    <Main>{children}</Main>
  </>
);

const Main = styled.main`
  ${mainPadding}
`;
