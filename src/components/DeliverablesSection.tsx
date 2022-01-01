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

const linkIcons = {
  external: ExternalLinkIcon,
  twitter: TwitterIcon,
} as const

const ResultListItem: FC<{
  title: string
  description: string
  links: { label: string; href: string; type: "external" | "twitter" }[]
}> = ({ title, description, links }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{description}</Text>

      <VStack mt={4} spacing={2} align="stretch">
        {links.map(({ label, href, type }) => (
          <Link href={href} isExternal>
            {label} <Icon as={linkIcons[type]} mx="2px" />
          </Link>
        ))}
      </VStack>
    </Box>
  )
}

const ResultList = () => {
  return (
    <Stack spacing={8}>
      <ResultListItem
        title="ラブライブ！除夜の鐘"
        description="ラブライブ！シリーズの年末企画のためのウェブアプリを開発しました。"
        links={[
          {
            label: "企画告知ツイート",
            href: "https://chakra-ui.com",
            type: "twitter",
          },
          {
            label: "イベントサイト",
            href: "https://lovelive-app.jp/joya_no_kane",
            type: "external",
          },
        ]}
      />
      <ResultListItem
        title="みんなで作るL!L!L!届けて！あなたのメッセージ♡"
        description="ラブライブ！虹ヶ咲学園スクールアイドル同好会 4thライブ連動企画のためのウェブアプリを開発しました。"
        links={[
          {
            label: "企画告知ツイート",
            href: "https://twitter.com/LoveLive_staff/status/1473941452455432194?s=20",
            type: "twitter",
          },
          {
            label: "イベントサイト",
            href: "https://lovelive-app.jp/tokimeki_message",
            type: "external",
          },
        ]}
      />
    </Stack>
  )
}

const DeliverablesSection: FC = () => {
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
        {`Deliverables`}
      </h2>
      <ResultList />
    </Box>
  )
}

export default DeliverablesSection
