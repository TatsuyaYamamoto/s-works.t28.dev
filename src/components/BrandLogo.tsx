/** @jsx jsx */
import React, { FC } from "react"

import { css, jsx } from "@emotion/react"

const BrandLogo: FC = () => {
  return (
    <div
      css={css`
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <h1
        css={css`
          font-size: min(20vw, 50px);
          font-family: sans-serif;
          color: #fff3e0;
          font-weight: 600;

          text-shadow: -3px -3px 5px rgba(255, 255, 255, 0.6),
            1px 2px 1px rgba(160, 160, 160, 0.5),
            2px 4px 2px rgba(160, 160, 160, 0.4),
            3px 6px 3px rgba(160, 160, 160, 0.3),
            4px 8px 4px rgba(160, 160, 160, 0.3),
            5px 10px 5px rgba(160, 160, 160, 0.2),
            6px 12px 6px rgba(160, 160, 160, 0.2),
            7px 13px 7px rgba(160, 160, 160, 0.1),
            8px 15px 8px rgba(160, 160, 160, 0.1);
        `}
      >
        s-works
      </h1>
    </div>
  )
}

export default BrandLogo
