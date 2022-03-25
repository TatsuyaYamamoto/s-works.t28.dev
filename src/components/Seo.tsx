import React, { VFC } from "react"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo"

interface Props extends GatsbySeoProps {
  ogpTitle?: string
  ogpImagePath?: string
}

const Seo: VFC<Props> = ({ ogpTitle, ogpImagePath, ...otherProps }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteUrl, siteDescription },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteUrl
          siteDescription
        }
      }
    }
  `)

  const seoProps: GatsbySeoProps = {
    language: "ja",
    title: siteTitle,
    description: siteDescription,
    twitter: {
      cardType: "summary",
    },
    openGraph: {
      // titleTemplateを使った謎の上書きをplugin側がするため、自前で設定
      // https://github.com/ifiokjr/gatsby-plugin-next-seo/blob/master/src/meta/base-seo.tsx#L325-L332
      title: ogpTitle ?? otherProps.title ?? siteTitle,
      images: ogpImagePath
        ? [
            {
              url: `${siteUrl}${ogpImagePath}`,
            },
          ]
        : undefined,
    },
    ...otherProps,
  }

  return <GatsbySeo {...seoProps} />
}

export default Seo
