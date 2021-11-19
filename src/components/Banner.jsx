import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { biggerOnHover } from '../utils/style/mixins';

export const Banner = () => {
  const mailIconQuery = useStaticQuery(graphql`
    query mailIconQuery {
      allSocialMediaDataJson(filter: { name: { eq: "mail" } }) {
        nodes {
          icon {
            publicURL
          }
          url
        }
      }
    }
  `);

  return (
    <Wrapper>
      <ProfilePicWrapper>
        <StaticImage src="../images/profile-pic.jpg" alt="photo de profil" />
      </ProfilePicWrapper>
      <Name>Sébastien Delile</Name>
      <Job>Frontend web developer − React.js </Job>
      <Contact
        href={mailIconQuery.allSocialMediaDataJson.nodes[0].url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ContactIcon
          src={mailIconQuery.allSocialMediaDataJson.nodes[0].icon.publicURL}
          alt="logo contact"
          aria-hidden
        />
        {'Contact'}
      </Contact>
    </Wrapper>
  );
};

const breakpoints = ['57.5rem', '62.5rem', '75rem'];

const Wrapper = styled.section`
  margin: 1.5rem 0;
  display: grid;
  grid-template-areas:
    'profile-pic'
    'name'
    'job'
    'contact';
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  justify-items: center;
  align-items: center;
  row-gap: 0rem;

  @media only screen and (min-width: ${breakpoints[0]}) {
    padding: 1rem 0;
    grid-template-areas:
      'profile-pic name contact'
      'profile-pic job contact';
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(2, auto);
    justify-items: flex-start;
    column-gap: 1.5rem;
    row-gap: 0.5rem;
  }

  @media only screen and (min-width: ${breakpoints[1]}) {
    padding: 1rem 2.5rem;
    background: var(--color-secondary);
    border-radius: 0.5rem;
  }

  @media only screen and (min-width: ${breakpoints[2]}) {
    margin: 2rem 0;
    padding: 1rem 5rem;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(2, auto);
    column-gap: 2.25rem;
    row-gap: 0rem;
  }
`;

const ProfilePicWrapper = styled.div`
  grid-area: profile-pic;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--boxshadow-slight);
  margin-bottom: 0.5rem;

  @media only screen and (min-width: ${breakpoints[0]}) {
    width: 10rem;
    height: 10rem;
    margin-bottom: unset;
  }
`;

const Name = styled.h1`
  grid-area: name;
  font-size: 2.5rem;

  @media only screen and (min-width: ${breakpoints[0]}) {
    font-size: 3.25rem;
    align-self: end;
  }

  @media only screen and (min-width: ${breakpoints[2]}) {
    font-size: 4rem;
  }
`;

const Job = styled.p`
  grid-area: job;
  font-size: 1.25rem;

  @media only screen and (min-width: ${breakpoints[0]}) {
    align-self: start;
  }

  @media only screen and (min-width: ${breakpoints[2]}) {
    font-size: 1.75rem;
  }
`;

const Contact = styled.a`
  grid-area: contact;
  height: 3.75rem;
  background: var(--color-primary);
  border-radius: 1.875rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 2rem;
  margin-top: 1rem;
  color: var(--color-secondary);
  font-size: 1.5rem;
  box-shadow: var(--boxshadow-drop);
  ${biggerOnHover};

  @media only screen and (min-width: ${breakpoints[0]}) {
    margin-top: 0rem;
  }
`;

const ContactIcon = styled.img`
  width: 2.25rem;
  height: 2.25rem;
`;
