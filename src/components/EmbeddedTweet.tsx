/** @jsx jsx */
import React, { FC, useEffect, useRef } from "react"

import { css, jsx } from "@emotion/react"

const EmbeddedTweet: FC<{ html: string }> = props => {
  const containerRef = useRef(null)

  useEffect(() => {
    const id = "twitter-widgets-js"
    if (document.getElementById(id)) {
      // @ts-ignore
      window.twttr.widgets.load(containerRef.current)
      return
    }
    const script = document.createElement("script")
    script.id = id
    script.async = true
    script.src = "https://platform.twitter.com/widgets.js"
    document.body.appendChild(script)
  }, [])

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: props.html }}
      css={css`
        .twitter-tweet {
          margin: 0 auto;
        }
      `}
    />
  )
}

export default EmbeddedTweet
