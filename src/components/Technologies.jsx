import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { SectionLayout } from './SectionLayout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { biggerOnHover, dropshadowOnHover } from '../utils/style/mixins';

export const Technologies = () => {
  const technoQuery = useStaticQuery(graphql`
    query technoQuery {
      allTechnologiesJson {
        nodes {
          id
          name
          icon {
            childImageSharp {
              gatsbyImageData(placeholder: NONE)
            }
          }
        }
      }
    }
  `);

  const technoData = technoQuery.allTechnologiesJson.nodes.slice(0, 28);

  return (
    <SectionLayout title="Technologies">
      <Grid>
        {technoData.map((techno) => (
          <Card key={techno.id}>
            <GatsbyImage
              image={getImage(techno.icon)}
              alt={'logo' + techno.name}
            />
            <Name>{techno.name}</Name>
          </Card>
        ))}
      </Grid>
    </SectionLayout>
  );
};

const breakpoints = ['35rem', '55rem', '70rem', '85rem'];

const gridLayout = (mainColumns, otherColumns) => {
  const mainCount = mainColumns <= 3 ? 6 : mainColumns;
  const smallScreen = mainColumns <= 4;
  return `
    grid-template-columns: repeat(${
      mainColumns * otherColumns
    }, minmax(0, 1fr));
    & > div:nth-child(-n+${mainCount}) {
      grid-column: auto / span ${otherColumns};
      grid-template-rows: auto ${smallScreen ? '3.25rem' : '3.75rem'};
      font-size: ${smallScreen ? '1.25rem' : '1.5rem'};
    };
    & > div:nth-child(n+${mainCount + 1}) {
      grid-column: auto / span ${mainColumns};
      grid-template-rows: auto ${smallScreen ? '2rem' : '2.75rem'};
      font-size: 1rem;
    }
`;
};

const Grid = styled.article`
  width: 100%;
  display: grid;
  ${gridLayout(2, 3)}
  grid-auto-rows: auto;
  gap: 1rem;
  justify-items: stretch;
  align-items: stretch;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${breakpoints[0]}) {
    ${gridLayout(3, 5)};
  }

  @media only screen and (min-width: ${breakpoints[1]}) {
    ${gridLayout(4, 7)};
    margin-bottom: 1.25rem;
  }

  @media only screen and (min-width: ${breakpoints[2]}) {
    ${gridLayout(5, 9)};
  }

  @media only screen and (min-width: ${breakpoints[3]}) {
    ${gridLayout(6, 11)};
    margin-bottom: 1.5rem;
  }
`;

const Card = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: var(--color-secondary);

  ${biggerOnHover}
  ${dropshadowOnHover};
`;

const Name = styled.h3`
  width: 100%;
  font-size: inherit;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;
