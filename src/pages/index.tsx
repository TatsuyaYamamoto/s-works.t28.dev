import React, { FC } from "react"

import { css } from "@emotion/react"
import { Center, Box } from "@chakra-ui/react"

import Seo from "../components/Seo"
import BrandLogo from "../components/BrandLogo"
import DeliverablesSection from "../components/DeliverablesSection"
import FooterSection from "../components/FooterSection"
import Layout from "../components/Layout"

const IndexPage: FC = () => {
  return (
    <Layout>
      <Seo />
      <Center
        minHeight="100%"
        border={"solid 15px var(--color-orange)"}
        boxSizing={"border-box"}
      >
        <Box
          css={css`
            margin: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <BrandLogo />
        </Box>
      </Center>
      <DeliverablesSection />
      <FooterSection />
    </Layout>
  )
}

export default IndexPage
