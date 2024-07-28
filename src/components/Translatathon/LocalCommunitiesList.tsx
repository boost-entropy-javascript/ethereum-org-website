import { Box, Flex, Text } from "@chakra-ui/react"

import { ButtonLink } from "@/components/Buttons"
import { Image } from "@/components/Image"

import KipuLogo from "@/public/images/translatathon/kipu-logo.png"

const localCommunitiesData = [
  {
    organizer: "ETH Kypo",
    description:
      "ETH Kipu is an organization dedicated to supporting the Ethereum ecosystem in Latin America.",
    logo: KipuLogo,
    lumaLink: "https://example.com",
    location: "🇦🇷 Buenos Aires, Argentina",
  },
  {
    organizer: "ETH Kypo",
    description:
      "ETH Kipu is an organization dedicated to supporting the Ethereum ecosystem in Latin America.",
    logo: KipuLogo,
    lumaLink: "https://example.com",
    location: "🇦🇷 Buenos Aires, Argentina",
  },
  {
    organizer: "ETH Kypo",
    description:
      "ETH Kipu is an organization dedicated to supporting the Ethereum ecosystem in Latin America.",
    logo: KipuLogo,
    lumaLink: "https://example.com",
    location: "🇦🇷 Buenos Aires, Argentina",
  },
  {
    organizer: "ETH Kypo",
    description:
      "ETH Kipu is an organization dedicated to supporting the Ethereum ecosystem in Latin America.",
    logo: KipuLogo,
    lumaLink: "https://example.com",
    location: "🇦🇷 Buenos Aires, Argentina",
  },
  {
    organizer: "ETH Kypo",
    description:
      "ETH Kipu is an organization dedicated to supporting the Ethereum ecosystem in Latin America.",
    logo: KipuLogo,
    lumaLink: "https://example.com",
    location: "🇦🇷 Buenos Aires, Argentina",
  },
  {
    organizer: "ETH Kypo",
    description:
      "ETH Kipu is an organization dedicated to supporting the Ethereum ecosystem in Latin America.",
    logo: KipuLogo,
    lumaLink: "https://example.com",
    location: "🇦🇷 Buenos Aires, Argentina",
  },
  {
    organizer: "ETH Kypo",
    description:
      "ETH Kipu is an organization dedicated to supporting the Ethereum ecosystem in Latin America.",
    logo: KipuLogo,
    lumaLink: "https://example.com",
    location: "🇦🇷 Buenos Aires, Argentina",
  },
]

export const LocalCommunitiesList = () => {
  return (
    <Flex gap={4} direction="column">
      {localCommunitiesData.map((community, index) => (
        <Flex
          bg="background.highlight"
          key={index}
          direction={{ base: "column-reverse", md: "row" }}
          p={6}
          gap={8}
        >
          <Flex direction="column" gap={6}>
            <Flex
              borderRadius={80}
              bg="background.base"
              px={5}
              py={1}
              w="fit-content"
            >
              <Text fontWeight="bold">{community.location}</Text>
            </Flex>
            <Box>
              <Text size="sm" color="body.medium">
                Organizer:
              </Text>
              <Text size="lg" fontWeight="bold">
                {community.organizer}
              </Text>
            </Box>
            <Text>{community.description}</Text>
            <Flex>
              <ButtonLink
                href={community.lumaLink}
                variant="outline"
                color="body.base"
              >
                Luma link
              </ButtonLink>
            </Flex>
          </Flex>
          <Flex minW="90">
            <Image
              src={community.logo}
              alt={community.organizer}
              width="90"
              height="130"
              style={{ objectFit: "contain" }}
            />
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}
