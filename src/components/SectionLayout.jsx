import * as React from 'react';
import styled from 'styled-components';

export const SectionLayout = ({ title, children }) => (
  <Wrapper>
    <H2>{title}</H2>
    {children}
  </Wrapper>
);

const breakpoints = ['40rem', '57.5rem'];

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  width: 100%;

  @media only screen and (min-width: ${breakpoints[0]}) {
    margin: 2rem 0;
  }
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${breakpoints[1]}) {
    font-size: 3rem;
  }
`;
