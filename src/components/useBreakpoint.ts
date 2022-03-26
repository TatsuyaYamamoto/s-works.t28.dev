import { useMediaQuery } from "@chakra-ui/react"

export const useBreakpoint = () => {
  const [isTabletOrMore] = useMediaQuery("(min-width: 600px)")

  return {
    isTabletOrMore,
  }
}
