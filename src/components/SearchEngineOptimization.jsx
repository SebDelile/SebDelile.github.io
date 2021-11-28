import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export function SearchEngineOptimization({ title, lang }) {
  const { site, file } = useStaticQuery(
    graphql`
      query metadata {
        file(relativePath: { eq: "profile-pic.jpg" }) {
          childImageSharp {
            resize {
              src
              width
              height
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  );

  const metadata = site.siteMetadata;
  const metaImage = file.childImageSharp.resize;
  const imagePath = `${metadata.siteUrl}${metaImage.src}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: metadata.description,
        },
        {
          name: 'keywords',
          content: metadata.keywords,
        },
        {
          property: `og:title`,
          content: metadata.title,
        },
        {
          property: `og:description`,
          content: metadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: metadata.author,
        },
        {
          name: `twitter:title`,
          content: metadata.title,
        },
        {
          name: `twitter:description`,
          content: metadata.description,
        },
      ].concat(
        metaImage
          ? [
              {
                property: 'og:image',
                content: imagePath,
              },
              {
                property: 'og:image:width',
                content: metaImage.width,
              },
              {
                property: 'og:image:height',
                content: metaImage.height,
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
            ]
          : [
              {
                name: 'twitter:card',
                content: 'summary',
              },
            ]
      )}
    />
  );
}
