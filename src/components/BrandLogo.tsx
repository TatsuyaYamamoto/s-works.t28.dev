/** @jsx jsx */
import React, { FC, useEffect, useState } from "react"

import { css, jsx, keyframes } from "@emotion/react"

import { ReactComponent as LogoSvg } from "../images/s-works-logo.svg"
import { useBreakpoint } from "./useBreakpoint"

const surfaceText = keyframes`
  from {
    color: #fff3e0;
    text-shadow: none;
  }

  to {
    color: #ffc69e;
    text-shadow: -3px -3px 5px rgba(255, 255, 255, 0.6),
    1px 2px 1px rgba(160, 160, 160, 0.5),
    2px 4px 2px rgba(160, 160, 160, 0.4),
    3px 6px 3px rgba(160, 160, 160, 0.3),
    4px 8px 4px rgba(160, 160, 160, 0.3),
    5px 10px 5px rgba(160, 160, 160, 0.2),
    6px 12px 6px rgba(160, 160, 160, 0.2),
    7px 13px 7px rgba(160, 160, 160, 0.1),
    8px 15px 8px rgba(160, 160, 160, 0.1);
  }
`

const surfaceSvg = keyframes`
  from {
    fill: #fff3e0;
    filter: none;
  }
  
  to {
    fill: #ffc69e;
    filter: drop-shadow(-3px -3px 5px rgba(255, 255, 255, 0.6))
    drop-shadow(1px 2px 1px rgba(160, 160, 160, 0.5))
    drop-shadow(3px 4px 2px rgba(160, 160, 160, 0.4))
    drop-shadow(4px 6px 3px rgba(160, 160, 160, 0.3))
    drop-shadow(5px 8px 4px rgba(160, 160, 160, 0.3))
    drop-shadow(6px 10px 5px rgba(160, 160, 160, 0.2));
  }
`

const BrandLogo: FC = () => {
  const [show, setShow] = useState(false)
  const { isTabletOrMore } = useBreakpoint()

  useEffect(() => {
    setTimeout(() => setShow(true), 200)
  }, [])

  const iconAndFontSize = isTabletOrMore ? 100 : 50

  return (
    <h1
      css={css`
        white-space: nowrap;

        display: inline-flex;
        align-items: center;
      `}
    >
      <LogoSvg
        style={{ fill: "transparent" }}
        css={css`
          width: ${iconAndFontSize}px;
          height: ${iconAndFontSize}px;

          ${show &&
          css`
            animation: 700ms ${surfaceSvg} 0s ease-out both;
          `}
        `}
      />
      <span
        css={css`
          color: transparent;
          font-size: ${iconAndFontSize}px;
          font-family: sans-serif;
          font-weight: 600;

          @media screen and (max-width: 480px) {
          }

          ${show &&
          css`
            animation: 700ms ${surfaceText} 0s ease both;
          `};
        `}
      >
        {`s-works`}
      </span>
    </h1>
  )
}

export default BrandLogo
