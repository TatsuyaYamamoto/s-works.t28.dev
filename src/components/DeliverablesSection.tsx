/** @jsx jsx */
import { FC } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { css, jsx } from "@emotion/react"
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react"

import { useBreakpoint } from "./useBreakpoint"

const ResultList = () => {
  const { isTabletOrMore } = useBreakpoint()
  const {
    allMdx: { nodes },
  } = useStaticQuery(query)

  return (
    <Stack spacing={8}>
      {nodes.map(({ fields, excerpt, frontmatter }: any) => (
        <Link key={fields.slug} to={fields.slug}>
          <Flex
            shadow="md"
            backgroundColor={"#ffffff"}
            flexDirection={isTabletOrMore ? "row" : "column"}
          >
            <Box p={5} flex={1}>
              <Heading fontSize="xl">{frontmatter.title}</Heading>
              <Text mt={4}>{frontmatter.date}</Text>
              <Text mt={4}>{frontmatter.description || excerpt}</Text>
            </Box>
            <GatsbyImage
              image={getImage(frontmatter.heroImage) as IGatsbyImageData}
              alt={"article hero image"}
            />
          </Flex>
        </Link>
      ))}
    </Stack>
  )
}

const DeliverablesSection: FC = () => {
  const { isTabletOrMore } = useBreakpoint()
  const headingFontSize = isTabletOrMore ? 80 : 40

  return (
    <Box
      as="section"
      backgroundColor={"var(--color-orange)"}
      paddingX={"15px"}
      paddingY={8}
    >
      <Box maxWidth={800} margin="0 auto">
        <h2
          css={css`
            color: #ffffff;
            font-size: ${headingFontSize}px;
            font-family: sans-serif;
            font-weight: 600;
          `}
        >
          {`Deliverables`}
        </h2>
        <ResultList />
      </Box>
    </Box>
  )
}

export default DeliverablesSection

const query = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { contentType: { eq: "achievements" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY/MM/DD")
          title
          description
          heroImage {
            childImageSharp {
              gatsbyImageData(
                width: 300
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
