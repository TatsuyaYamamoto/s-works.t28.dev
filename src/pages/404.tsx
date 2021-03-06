import React, { FC } from "react"

import Seo from "../components/Seo"

const NotFoundPage: FC = () => (
  <>
    <Seo pageTitle="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
