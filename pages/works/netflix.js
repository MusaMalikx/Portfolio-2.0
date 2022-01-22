import { Badge, Link, Container, ListItem, List, Icon, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { IoLink, IoLogoGithub } from "react-icons/io5";

const Work = () => {
  return (
    <Layout title="Netflix">
      <Container>
        <Title>
          Netflix <Badge>2020</Badge>
        </Title>
        <P>A Netlix clone app to watch Movies and TV Series</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://netflix-2-0.vercel.app"
              target="_blank"
              >
               <Button
                variant="link"
                colorScheme="red"
                fontSize={13}
                leftIcon={<Icon as={IoLink} />}
              >
                https://netflix-2-0.vercel.app/  <ExternalLinkIcon mx="2px" />
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/IOS/Android</span>
          </ListItem> */}
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, Redux, Firebase</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>

            <Link
              color="#DA1212"
              href="https://github.com/MusaMalikx/Netflix-2.0"
              target="_blank"
            >
              <Button
                variant="link"
                colorScheme="red"
                leftIcon={<Icon as={IoLogoGithub} />}
                fontSize={13}
              >
                https://github.com/MusaMalikx/Netflix-2.0  <ExternalLinkIcon mx="2px" />
              </Button>
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/netflix_01.PNG" alt="netflix" />
        <WorkImage src="/images/works/netflix_02.PNG" alt="netflix" />
      </Container>
    </Layout>
  );
};

export default Work;
