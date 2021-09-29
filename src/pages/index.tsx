import React, { FC } from "react"

import { css } from "@emotion/react"
import { Center } from "@chakra-ui/react"

import Seo from "../components/Seo"
import BrandLogo from "../components/BrandLogo"

const IndexPage: FC = () => {
  return (
    <>
      <Seo pageTitle="Top" />
      <Center
        minHeight="100vh"
        css={css`
          background-color: #fff3e0;
        `}
      >
        <BrandLogo />
      </Center>
    </>
  )
}

export default IndexPage
