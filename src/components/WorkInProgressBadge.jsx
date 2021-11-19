import * as React from 'react';
import styled from 'styled-components';

export const WorkInProgressBadge = () => (
  <Wrapper>
    <P>Work In Progress</P>
  </Wrapper>
);

const Wrapper = styled.div`
  z-index: 200;
  position: fixed;
  top: calc(10rem / 1.414);
  right: 0;
  width: 10rem;
  transform: translate(0, -100%);
`;

const P = styled.p`
  background: darkred;
  transform: rotate(45deg);
  transform-origin: bottom right;
  font-size: 0.75rem;
  text-align: center;
  width: 100%;
  padding: 0.5rem 0;
  color: white;
`;
