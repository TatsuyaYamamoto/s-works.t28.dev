import React, { FC } from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

interface Props {}

const Seo: FC<Props> = props => {
  return <GatsbySeo language={"ja"} title={`s-works`} />
}

export default Seo
