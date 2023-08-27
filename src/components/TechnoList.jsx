import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const TechnoList = ({ stack }) => {
  const technoListQuery = useStaticQuery(graphql`
    query technoListQuery {
      allTechnologiesJson {
        nodes {
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

  const technoData = technoListQuery.allTechnologiesJson.nodes;

  return (
    <Container>
      {stack.map((usedTechno) => (
        <Techno key={usedTechno}>
          <GatsbyImage
            image={getImage(
              technoData.find((techno) => techno.name === usedTechno).icon
            )}
            title={usedTechno}
            alt={'logo' + usedTechno}
          />
        </Techno>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  justify-self: stretch;
  text-align: right;
  height: 2.25rem;
  overflow: hidden;
`;

const Techno = styled.li`
  display: inline-block;
  height: 2.25rem;
  width: 2.25rem;
  &:not(:first-of-type) {
    margin-left: 0.75rem;
  }
`;
