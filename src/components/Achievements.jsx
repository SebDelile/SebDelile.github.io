import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { SectionLayout } from './SectionLayout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AchievementDialog } from './AchievementDialog';
import { TechnoList } from './TechnoList';

export const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = React.useState(null);

  const achievementsQuery = useStaticQuery(graphql`
    query achievementsQuery {
      allAchievementsJson {
        nodes {
          id
          description
          repo
          deployed
          stack
          title
          type
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const achievementsData = achievementsQuery.allAchievementsJson.nodes.slice(
    0,
    6
  );

  const handleSelectNext = () => {
    if (achievementsData && selectedAchievement) {
      const index = achievementsData.findIndex(
        ({ title }) => title === selectedAchievement.title
      );
      if (index === achievementsData.length - 1)
        setSelectedAchievement(achievementsData[0]);
      else setSelectedAchievement(achievementsData[index + 1]);
    }
  };
  const handleSelectPrevious = () => {
    if (achievementsData && selectedAchievement) {
      const index = achievementsData.findIndex(
        ({ title }) => title === selectedAchievement.title
      );
      if (index === 0)
        setSelectedAchievement(achievementsData[achievementsData.length - 1]);
      else setSelectedAchievement(achievementsData[index - 1]);
    }
  };

  return (
    <SectionLayout title="Réalisations">
      <List>
        {achievementsData.map((achievement) => (
          <ListItem key={achievement.id}>
            <Card
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSelectedAchievement(achievement)}
            >
              <GatsbyImage
                image={getImage(achievement.thumbnail)}
                alt={'apperçu projet ' + achievement.title}
              />
              <Body>
                <Title>{achievement.title}</Title>
                <TechnoList stack={achievement.stack} />
                <Description data-content={achievement.description.join(' ')}>
                  {
                    achievement.description.join(
                      ' '
                    ) /*the html attribute is used to duplicate last line with &::after and left aligned text*/
                  }
                </Description>
              </Body>
            </Card>
          </ListItem>
        ))}
      </List>
      <AchievementDialog
        achievement={selectedAchievement}
        onRequestClose={() => setSelectedAchievement(null)}
        selectNext={handleSelectNext}
        selectPrevious={handleSelectPrevious}
      />
    </SectionLayout>
  );
};

const breakpoints = ['40rem', '50rem', '70rem', '80rem'];

const List = styled.ul`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-rows: 1fr;

  @media only screen and (min-width: ${breakpoints[0]}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (min-width: ${breakpoints[1]}) {
    column-gap: 4rem;
  }

  @media only screen and (min-width: ${breakpoints[2]}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 2rem;
  }

  @media only screen and (min-width: ${breakpoints[3]}) {
    column-gap: 5rem;
  }
`;

const ListItem = styled.li`
  width: 100%;
  height: 100%;
`;

const Card = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background-color: var(--color-secondary);
  overflow: hidden;
  transition: box-shadow var(--transition-duration);

  &:hover {
    box-shadow: var(--boxshadow-drop);
    &:active {
      box-shadow: var(--boxshadow-slight);
    }
  }
`;

const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, minmax(0, auto));
  grid-template-columns: minmax(0, auto) minmax(0, 1fr);
  align-items: center;
  padding: 0.75rem 0.75rem 1.25rem 0.75rem;
  gap: 0.75rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;

const Description = styled.p`
  grid-column: 1 / span 2;
  font-size: 1rem;
  line-height: 1.3em;
  height: 3.9em;
  text-align: justify;
  overflow: hidden;
  position: relative;

  &::after {
    content: attr(data-content);
    position: absolute;
    font-size: inherit;
    line-height: inherit;
    text-align: left;
    top: 0;
    left: 0;
    height: 3.9em;
    width: 100%;
    background-color: var(--color-secondary);
    clip-path: polygon(0 2.6em, 100% 2.6em, 100% 100%, 0 100%);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;
