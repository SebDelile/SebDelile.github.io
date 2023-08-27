import * as React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactModal from 'react-modal';
import iconArrow from '../images/assets/arrow.svg';
import iconCross from '../images/assets/cross.svg';
import { TechnoList } from './TechnoList';

ReactModal.setAppElement('#___gatsby');

export const AchievementDialog = ({
  achievement,
  onRequestClose,
  selectNext,
  selectPrevious,
}) => {
  return (
    <ReactModal
      isOpen={!!achievement}
      onRequestClose={onRequestClose}
      style={ReactModalStyle}
      preventScroll
    >
      {!!achievement && (
        <Card>
          <GatsbyImage
            image={getImage(achievement.thumbnail)}
            alt={'apperçu projet ' + achievement.title}
            objectFit="contain"
          />
          <Body>
            <Title>{achievement.title}</Title>
            <Type>{achievement.type}</Type>
            <TechnoList stack={achievement.stack} />
            {achievement.description.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
            {achievement.deployed && (
              <Link href={achievement.deployed} target="_blank" rel="noopener">
                Lien vers le déploiement
              </Link>
            )}
            <Link href={achievement.repo} target="_blank" rel="noopener">
              Lien vers le repository
            </Link>
          </Body>
        </Card>
      )}
      <CloseButton
        src={iconCross}
        alt="fermer la modale"
        role="button"
        onClick={onRequestClose}
      />
      <NavButton
        isFlipped
        src={iconArrow}
        alt="projet précédent"
        role="button"
        onClick={selectPrevious}
      />
      <NavButton
        src={iconArrow}
        alt="project suivant"
        role="button"
        onClick={selectNext}
      />
    </ReactModal>
  );
};

const ReactModalStyle = {
  overlay: {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    zIndex: '1000',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'unset',
    bottom: 'unset',
    transform: 'translate(-50%, -50%)',
    height: 'max-content',
    width: 'max-content',
    border: 'none',
    background: 'var(--color-background)',
    padding: '0',
  },
};

const breakpoints = ['30rem', '40rem', '60rem', '80rem'];

const Card = styled.article`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  gap: 1rem;
  padding: 3rem;
  & > * {
    width: 100%;
  }

  @media only screen and (min-width: ${breakpoints[0]}) {
    height: 100%;
    width: 100%;
    & > * {
      width: 22.5rem;
    }
  }

  @media only screen and (min-width: ${breakpoints[1]}) {
    flex-direction: row;
    & > * {
      width: 16rem;
    }
  }

  @media only screen and (min-width: ${breakpoints[2]}) {
    & > * {
      width: 25rem;
    }
  }

  @media only screen and (min-width: ${breakpoints[3]}) {
    & > * {
      width: 35rem;
    }
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1rem;
`;

const Title = styled.h4`
  font-size: 2rem;
`;
const Type = styled.p`
  font-size: 0.75rem;
  font-style: italic;
  position: relative;
  transform: translate(0, -1em);
`;

const Link = styled.a`
  text-decoration: underline;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.4s;
  &:hover,
  &:focus {
    transform: scale(1.25);
  }

  @media only screen and (min-width: ${breakpoints[2]}) {
    width: 2rem;
    height: 2rem;
  }
`;

const NavButton = styled.img`
  position: absolute;
  top: 50%;
  ${(props) => (props.isFlipped ? 'left' : 'right')}:0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  transform: scale(1) translate(0, -50%)
    ${(props) => (props.isFlipped ? 'rotate(180deg)' : '')};
  cursor: pointer;
  transition: transform 0.4s;
  &:hover,
  &:focus {
    transform: scale(1.25) translate(0, -50%)
      ${(props) => (props.isFlipped ? 'rotate(180deg)' : '')};
  }

  @media only screen and (min-width: ${breakpoints[2]}) {
    width: 2rem;
    height: 2rem;
  }
`;
