/** @jsx jsx */
import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

import { jsx, css, Global } from "@emotion/react"
import { Stack, Box, Icon, Heading, Button } from "@chakra-ui/react"
import { FaTwitter as TwitterIcon } from "react-icons/fa"
import { FiExternalLink as ExternalLinkIcon } from "react-icons/fi"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import FooterSection from "../components/FooterSection"
import LogoLink from "../components/LogoLink"

const pageStyle = css`
  :root {
    --dummy-font-size: 62.5%;
  }

  h1 {
    font-size: 72px;
  }

  a {
    text-decoration: underline;
    font-weight: 600;
    color: #fc8738;
  }

  p {
    margin-bottom: 30px;
  }

  hr {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

const FrontmatterLinkButton = (props: {
  href: string
  type: keyof typeof linkIcons
  label: string
}) => (
  <Button
    as={"a"}
    href={props.href}
    target={"_blank"}
    leftIcon={<Icon as={linkIcons[props.type]} />}
    size={"sm"}
    textDecoration={"none"}
    color={"#000000"}
  >
    {props.label}
  </Button>
)

const linkIcons = {
  external: ExternalLinkIcon,
  twitter: TwitterIcon,
} as const

const AchievementPageTemplate: FC<PageProps<any>> = ({ data }) => {
  const {
    mdx: { body, excerpt, frontmatter },
    site: {
      siteMetadata: { siteTitle },
    },
  } = data
  const {
    title,
    date,
    heroImage,
    links,
  }: {
    title: string
    date: string
    heroImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
        fluid: {
          src: string
        }
      }
    }
    links: { label: string; href: string; type: keyof typeof linkIcons }[]
  } = frontmatter

  return (
    <Layout>
      <Seo
        title={`${title} | ${siteTitle}`}
        description={excerpt}
        ogpImagePath={heroImage.childImageSharp.fluid.src}
        twitter={{ cardType: "summary_large_image" }}
      />
      <Global styles={pageStyle} />
      <Box
        paddingX={3}
        border={"solid 15px var(--color-orange)"}
        minHeight={"100%"}
      >
        <Box marginX={"auto"} maxWidth={"600px"}>
          <Box as={"header"} marginY={8}>
            <LogoLink />
          </Box>
          <GatsbyImage
            image={heroImage.childImageSharp.gatsbyImageData}
            alt={"article hero image"}
          />
          <Box as={"main"}>
            <Box as={"header"}>
              <Heading as={"h1"} marginTop={8}>
                {title}
              </Heading>
              <Box marginTop={3} color={"#575757"}>
                <time>{date}</time>
              </Box>
              <Stack marginTop={3} direction="row" spacing={4}>
                {links.map(({ href, label, type }, i) => (
                  <FrontmatterLinkButton
                    key={i}
                    href={href}
                    type={type}
                    label={label}
                  />
                ))}
              </Stack>
            </Box>
            <hr />
            <Box as={"article"}>
              <MDXRenderer>{body}</MDXRenderer>
            </Box>
          </Box>
        </Box>

        <FooterSection />
      </Box>
    </Layout>
  )
}

export default AchievementPageTemplate

export const pageQuery = graphql`
  query AchievementPage($id: String!) {
    site {
      siteMetadata {
        siteTitle
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 120)
      body
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
        heroImage {
          childImageSharp {
            fluid {
              src
            }
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        links {
          label
          type
          href
        }
      }
    }
  }
`
