import React, { FC, useEffect, useState } from "react"

import { Box, HStack, Icon, Link } from "@chakra-ui/react"
import {
  FaTwitter as TwitterIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa"
import { css, keyframes } from "@emotion/react"

const FooterSection: FC = () => {
  const [thisYear] = useState(() => {
    const now = new Date()
    return now.getFullYear()
  })

  return (
    <Box as="footer">
      <Box maxWidth={900} margin="0 auto" paddingX={4} marginTop={20}>
        <HStack justifyContent="center">
          <Link href={`https://twitter.com/T28_tatsuya`} isExternal={true}>
            <Icon as={TwitterIcon} color={"#1DA1F2"} boxSize={10} />
          </Link>
          <Link href={`https://github.com/TatsuyaYamamoto`} isExternal={true}>
            <Icon as={GithubIcon} boxSize={10} />
          </Link>
        </HStack>
      </Box>
      <Box backgroundColor={"orange"} marginTop={20}>
        <Box
          maxWidth={900}
          margin="0 auto"
          paddingX={4}
          color={"white"}
          textAlign="right"
        >
          {`© 2014-${thisYear} s-works, All rights reserved.`}
        </Box>
      </Box>
    </Box>
  )
}

export default FooterSection
