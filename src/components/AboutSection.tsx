/** @jsx jsx */
import React, { FC, useEffect, useState } from "react"

import { css, jsx, keyframes } from "@emotion/react"
import {
  Box,
  VStack,
  StackDivider,
  Heading,
  Text,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/react"
import { FaTwitter as TwitterIcon } from "react-icons/fa"
import { FiExternalLink as ExternalLinkIcon } from "react-icons/fi"

const AboutSection: FC = () => {
  return (
    <Box as="section" maxWidth={900} margin="0 auto" paddingX={4}>
      <h2
        css={css`
          color: #ffc69e;
          font-size: 60px;
          font-family: sans-serif;
          font-weight: 600;
        `}
      >
        {`About`}
      </h2>
      <Box></Box>
    </Box>
  )
}

export default AboutSection
