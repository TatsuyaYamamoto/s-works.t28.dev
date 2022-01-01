import React, { FC } from "react"

import { css, Global } from "@emotion/react"
import { Center, Box } from "@chakra-ui/react"

import Seo from "../components/Seo"
import BrandLogo from "../components/BrandLogo"
import DeliverablesSection from "../components/DeliverablesSection"
import FooterSection from "../components/FooterSection"

const IndexPage: FC = () => {
  return (
    <>
      <Seo pageTitle="Top" />
      <Global
        styles={css`
          body {
            min-height: 100vh;
            background-color: #fff3e0;
          }
        `}
      />
      <Center height="100vh">
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
    </>
  )
}

export default IndexPage
