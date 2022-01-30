import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children }) => {
  return (
    <Box>
      <NextLink href="/works">
        <Link>
          <Button variant="link" colorScheme="red">
            Works
          </Button>
        </Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  );
};

export const WorkImage = ({ src, alt }) => {
  return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />;
};

export const Meta = ({ children }) => {
  return (
    <Badge bg="rgb(255, 23, 0,  0.4)" mr={2}>
      {children}
    </Badge>
  );
};
