import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { SectionLayout } from './SectionLayout';
import { Dropdown } from './Dropdown';
import iconArrow from '../images/assets/arrow.svg';

export const Background = () => {
  const backgroundQuery = useStaticQuery(graphql`
    query backgroundQuery {
      allBackgroundJson {
        nodes {
          id
          title
          dates
          description
          icon {
            publicURL
            name
          }
        }
      }
    }
  `);

  const backgroundData = backgroundQuery.allBackgroundJson.nodes;

  return (
    <SectionLayout title="Parcours">
      <List>
        {backgroundData.map((background) => (
          <ListItem key={background.id}>
            <StyledDropdown>
              <Dates>{background.dates}</Dates>
              <Icon
                src={background.icon.publicURL}
                alt={background.icon.name}
              />
              <Title>{background.title}</Title>
              <Description>
                {background.description.map((sentence, i) => (
                  <p key={i}>{sentence}</p>
                ))}
              </Description>
              <Arrow src={iconArrow} alt="open close indicator" aria-hidden />
            </StyledDropdown>
          </ListItem>
        ))}
      </List>
    </SectionLayout>
  );
};

const breakpoints = ['30rem', '40rem', '60rem', '80rem'];

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const ListItem = styled.li`
  width: 100%;
`;

const StyledDropdown = styled(Dropdown)`
  width: 100%;
  display: grid;
  grid-template-areas:
    'icon dates arrow'
    'title title title'
    'description description description';
  grid-template-columns: auto 1fr auto;
  justify-items: start;
  align-items: center;
  padding: 0.75rem 1rem;
  column-gap: 1rem;
  row-gap: 0rem;
  border-radius: 0.5rem;
  background: var(--color-secondary);
  transition: box-shadow var(--transition-duration);

  &[aria-expanded='false']:hover {
    box-shadow: var(--boxshadow-drop);
  }

  &[aria-expanded='true']:hover {
    box-shadow: var(--boxshadow-slight);
  }

  @media only screen and (min-width: ${breakpoints[1]}) {
    padding: 0.75rem 1.5rem;
  }

  @media only screen and (min-width: ${breakpoints[2]}) {
    grid-template-areas:
      'dates icon title arrow'
      'description description description description';
    grid-template-columns: auto auto 1fr auto;
    padding: 0.75rem 2rem;
  }

  @media only screen and (min-width: ${breakpoints[3]}) {
    padding: 1rem 2.5rem;
    column-gap: 2rem;
  }
`;

const Dates = styled.h3`
  grid-area: dates;
  font-size: 1.25rem;
  width: 10rem;
  text-align: center;
  justify-self: center;

  @media only screen and (min-width: ${breakpoints[1]}) {
    font-size: 1.5rem;
  }
`;

const Title = styled.h4`
  grid-area: title;
  width: 100%;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 400;

  @media only screen and (min-width: ${breakpoints[1]}) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: ${breakpoints[2]}) {
    text-align: left;
  }
`;

const Description = styled.div`
  grid-area: description;
  width: 100%;
  font-size: 1rem;
  text-align: justify;

  ${(props) =>
    props.isOpen
      ? `
    transition: line-height calc(var(--transition-duration) * 0.6), padding calc(var(--transition-duration) * 0.6), opacity calc(var(--transition-duration) * 0.8) calc(var(--transition-duration) * 0.2); //fade-in
    line-height: 1.4;
    opacity: 1;
    padding-top: 0.5rem;
  `
      : `
    transition: opacity calc(var(--transition-duration) * 0.6), line-height calc(var(--transition-duration) * 0.8) calc(var(--transition-duration) * 0.1), padding calc(var(--transition-duration) * 0.8) calc(var(--transition-duration) * 0.1);; //fade-out
    opacity: 0;
    line-height: 0;
    padding-top: 0rem;
  `};
`;

const Icon = styled.img`
  grid-area: icon;
  width: 1.5rem;
  height: 1.5rem;

  @media only screen and (min-width: ${breakpoints[1]}) {
    width: 2rem;
    height: 2rem;
  }
`;

const Arrow = styled.img`
  grid-area: arrow;
  align-self: start;
  width: 1rem;
  height: 1rem;
  transition: transform var(--transition-duration);
  transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : 'rotate(270deg)')};

  @media only screen and (min-width: ${breakpoints[0]}) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media only screen and (min-width: ${breakpoints[2]}) {
    width: 2rem;
    height: 2rem;
  }
`;
