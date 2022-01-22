import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  Icon,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import {
  IoLogoInstagram,
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoFacebook,
} from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          mb={6}
          p={3}
          align="center"
        >
          Hello, I&apos;m a front-end developer based in Pakistan!
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Musa Malik
            </Heading>
            <p>( Artist / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/musa.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            My name is Musa and I am a passionate developer. I am working as a
            freelancer. I give myself a mission to produce creative websites and
            applications with beautifull details. I enrich the design with my
            own illustrations and designs that are created with precision and
            based on your desire.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Lahore, Pakistan
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Compeleted my Matriculation from Unique School System
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Compeleted my Intermediate from Forman Christian College
          </BioSection>
          <BioSection>
            <BioYear>2020 - Present</BioYear>
            Work as a Freelancer
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Sketching, Drawing, Photography, Playing Badminton, Coding
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
    
          <SimpleGrid columns={3} align="center">
            <Box>
              <Link
                href="https://www.instagram.com/malikk_musa/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  Instagram
                </Button>
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.facebook.com/malik.bhai.52090008/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}
                >
                  Facebook
                </Button>
              </Link>
            </Box>
            <Box>
              <Link href="https://github.com/MusaMalikx" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  Github
                </Button>
              </Link>
            </Box>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
