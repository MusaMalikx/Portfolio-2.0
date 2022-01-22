import { Badge, Link, Container, ListItem, List } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

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
            <Link color="#DA1212" href="https://netflix-2-0.vercel.app" target="_blank">
              https://netflix-2-0.vercel.app/ <ExternalLinkIcon mx="2px" />
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
        </List>

        <WorkImage src="/images/works/netflix_01.PNG" alt="netflix" />
        <WorkImage src="/images/works/netflix_02.PNG" alt="netflix" />
      </Container>
    </Layout>
  );
};

export default Work;
