import React, { FC } from "react"

import { css, Global } from "@emotion/react"

const IndexPage: FC = props => {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            height: 100%;
          }
          #___gatsby,
          #gatsby-focus-wrapper {
            height: 100%;
            min-height: 100%;
          }
          :root {
            --color-orange: #ffc69e;
          }
        `}
      />
      {props.children}
    </>
  )
}

export default IndexPage
