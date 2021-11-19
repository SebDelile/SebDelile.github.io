import * as React from 'react';
import styled from 'styled-components';

export const SectionLayout = ({ title, children }) => (
  <Wrapper>
    <H2>{title}</H2>
    {children}
  </Wrapper>
);

const breakpoints = ['40rem'];

const Wrapper = styled.section`
  display: flex;
  flex-direction: columns;
  align-items: center
  margin: 1.5rem 0;
  width: 100%,
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${breakpoints[0]}) {
    fonte-size: 3rem;
  }
`;
