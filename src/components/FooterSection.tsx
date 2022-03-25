import React, { FC, useEffect, useState } from "react"

import { Box, HStack, Icon, Link as ChakraLink } from "@chakra-ui/react"
import {
  FaTwitter as TwitterIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa"

import LogoLink from "./LogoLink"

const FooterSection: FC = () => {
  const [thisYear] = useState(() => {
    const now = new Date()
    return now.getFullYear()
  })

  return (
    <Box as="footer" paddingY={5}>
      <Box textAlign={"center"} paddingY={10}>
        <LogoLink />
      </Box>
      <HStack marginTop={0} justifyContent="center">
        <ChakraLink href={`https://twitter.com/T28_tatsuya`} isExternal={true}>
          <Icon as={TwitterIcon} color={"#1DA1F2"} boxSize={8} />
        </ChakraLink>
        <ChakraLink
          href={`https://github.com/TatsuyaYamamoto`}
          isExternal={true}
        >
          <Icon as={GithubIcon} boxSize={8} />
        </ChakraLink>
      </HStack>
      <Box marginTop={"20px"} textAlign={"center"}>
        {`© 2021-${thisYear} s-works, All rights reserved.`}
      </Box>
    </Box>
  )
}

export default FooterSection
