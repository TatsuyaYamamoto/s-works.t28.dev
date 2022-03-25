/** @jsx jsx */
import React, { FC } from "react"
import { Link as GatsbyLink } from "gatsby"
import { jsx, css, Global } from "@emotion/react"

import { ReactComponent as LogoSvg } from "../images/s-works-logo.svg"

const LogoLink: FC = () => {
  return (
    <GatsbyLink
      to={`/`}
      css={css`
        text-decoration: none;
      `}
    >
      <span
        css={css`
          display: inline-flex;
          align-items: center;

          color: #ffc69e;
          font-size: 25px;
          font-family: sans-serif;
          font-weight: 600;

          & svg {
            width: 30px;
            fill: currentColor !important;
          }
        `}
      >
        <LogoSvg />
        {`s-works`}
      </span>
    </GatsbyLink>
  )
}

export default LogoLink
