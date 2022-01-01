/// <reference types="@emotion/react/types/css-prop" />

declare module "*.svg" {
  // https://www.gatsbyjs.com/plugins/gatsby-plugin-svgr/?=svg#usage
  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>
}
