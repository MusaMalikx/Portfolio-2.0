import {
  Badge,
  Link,
  Container,
  ListItem,
  List,
  Button,
  Icon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { IoLink, IoLogoGithub } from "react-icons/io5";

const Work = () => {
  return (
    <Layout title="Amazon">
      <Container>
        <Title>
          Amazon <Badge>2020</Badge>
        </Title>
        <P>
          An Amazon Clone website that sells books, music, movies, housewares,
          electronics, toys, and many other goods.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              color="#DA1212"
              href="https://amazon-wine-one.vercel.app"
              target="_blank"
            >
              <Button
                variant="link"
                colorScheme="red"
                fontSize={13}
                leftIcon={<Icon as={IoLink} />}
              >
                https://amazon-wine-one.vercel.app{" "}
                <ExternalLinkIcon mx="2px" />
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/IOS/Android</span>
          </ListItem> */}
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, Redux, Firebase, NextJS</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>

            <Link
              color="#DA1212"
              href="https://github.com/MusaMalikx/Amazon"
              target="_blank"
            >
              <Button
                variant="link"
                colorScheme="red"
                leftIcon={<Icon as={IoLogoGithub} />}
                fontSize={13}
              >
                https://github.com/MusaMalikx/Amazon{" "}
                <ExternalLinkIcon mx="2px" />
              </Button>
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/amazon_01.PNG" alt="netflix" />
        <WorkImage src="/images/works/amazon_02.PNG" alt="netflix" />
      </Container>
    </Layout>
  );
};

export default Work;
