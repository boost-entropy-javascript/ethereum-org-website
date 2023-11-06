import * as React from "react"
import { createIcon } from "@chakra-ui/react"

import { commonIconDefaultProps } from "../utils"

export const RPCImportingIcon = createIcon({
  displayName: "RPCImportingIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: [
    <path d="M128 49C130.947 49 133.335 51.3886 133.335 54.335V101.906L152.368 82.8725C154.452 80.789 157.83 80.789 159.913 82.8724C161.997 84.9559 161.997 88.3338 159.913 90.4173L131.773 118.558C130.772 119.559 129.415 120.121 128 120.121C126.585 120.121 125.228 119.559 124.228 118.558L96.087 90.4173C94.0035 88.3338 94.0035 84.9559 96.087 82.8724C98.1704 80.789 101.548 80.789 103.632 82.8724L122.665 101.906V54.335C122.665 51.3886 125.054 49 128 49Z" />,
    <path d="M58.835 152.17V163H79C82.4988 163 85.335 165.836 85.335 169.335V201.335C85.335 204.834 82.4988 207.67 79 207.67H27C23.5013 207.67 20.665 204.834 20.665 201.335V169.335C20.665 165.836 23.5013 163 27 163H48.165V147.835C48.165 144.336 51.0013 141.5 54.5 141.5H202C205.499 141.5 208.335 144.336 208.335 147.835V163H228C231.499 163 234.335 165.836 234.335 169.335V201.335C234.335 204.834 231.499 207.67 228 207.67H176C172.501 207.67 169.665 204.834 169.665 201.335V169.335C169.665 165.836 172.501 163 176 163H197.665V152.17H133.335V163H154C157.499 163 160.335 165.836 160.335 169.335V201.335C160.335 204.834 157.499 207.67 154 207.67H102C98.5013 207.67 95.665 204.834 95.665 201.335V169.335C95.665 165.836 98.5013 163 102 163H122.665V152.17H58.835ZM31.335 173.67V197H74.665V173.67H31.335ZM106.335 173.67V197H149.665V173.67H106.335ZM180.335 197V173.67H223.665V197H180.335Z" />,
  ],
})
