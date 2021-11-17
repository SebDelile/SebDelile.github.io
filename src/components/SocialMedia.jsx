import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

export const SocialMedia = () => {
  const socialMediaQuery = useStaticQuery(graphql`
    query SocialMediaQuery {
      allSocialMediaDataJson {
        edges {
          node {
            icon {
              publicURL
            }
            id
            infobulle
            name
            url
          }
        }
      }
    }
  `);

  const socialMediaData = socialMediaQuery.allSocialMediaDataJson.edges.map(
    (element) => element.node
  );

  return (
    <Wrapper>
      {socialMediaData.map((media) => (
        <A
          key={media.id}
          href={media.url}
          aria-label={media.infobulle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={media.icon.publicURL} alt={media.name + ' icon'} />
        </A>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: social-media;
  position: relative;
  right: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const A = styled.a`
  display: inline-block;
  position: relative;
  height: 3.5rem;
  width: 3.5rem;
  padding: 1rem;

  &:hover > img,
  &:focus > img {
    transform: scale(1.25);
  }

  ${() => infobulleStyleRules}
`;

const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  transform: scale(1);
  transition: transform 0.4s;
`;

const infobulleStyleRules = `&:hover::after,
&:focus::after,
&:hover::before,
&:focus::before {
  position: absolute;
  left: 50%;
  top: 100%;
  animation: infobulle-appears 0s 0.4s both;
}

&:hover::after,
&:focus::after {
  content: attr(aria-label);
  transform: translate(-25%);
  z-index: 1;
  white-space: nowrap;
  font-size: 0.75rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: var(--color-secondary);
  color: black;
  box-shadow: 0 0 0.125rem black;
}

&:hover::before,
&:focus::before {
  content: '';
  transform: translate(-50%, calc(-100% + 1px));
  z-index: 2;
  border-right : 0.5rem solid transparent;
  border-bottom : 0.6rem solid var(--color-secondary);
  border-left : 0.5rem solid transparent;
}`;
