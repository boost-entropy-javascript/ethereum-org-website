import React from "react"
import { createIcon } from "@chakra-ui/react"
import { commonIconDefaultProps } from "../utils"

export const RockXGlyphIcon = createIcon({
  displayName: "RockXGlyphIcon",
  viewBox: "0 0 33 33",
  defaultProps: {
    width: "33px",
    height: "33px",
    fill: "currentColor",
    fillOpacity: "0.66",
    ...commonIconDefaultProps,
  },
  path: [
    <path d="M13.0958 13.8588C11.4265 15.5274 11.4265 18.2329 13.0958 19.9016L24.8278 31.6289C26.4971 33.2976 29.2036 33.2975 30.873 31.6289C32.5423 29.9602 32.5424 27.2547 30.873 25.586L22.1637 16.8802L28.0579 10.9882C29.7273 9.31956 29.7273 6.61413 28.0579 4.94542C26.3886 3.27672 23.6821 3.27674 22.0127 4.94542L13.0958 13.8588Z" />,
    <path d="M19.1542 19.902C20.8235 18.2333 20.8235 15.5278 19.1542 13.8591L7.42222 2.13188C5.75288 0.463202 3.04635 0.463202 1.37701 2.13188C-0.292335 3.80056 -0.292335 6.50601 1.37701 8.17469L10.0863 16.8806L4.19205 22.7725C2.52271 24.4412 2.52271 27.1466 4.19205 28.8153C5.86139 30.484 8.56792 30.484 10.2373 28.8153L19.1542 19.902Z" />,
  ],
})
