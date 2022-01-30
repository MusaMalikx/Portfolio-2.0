import {
    Container,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbNetflix from '../public/images/works/netflix.jpg';
import thumbAmazon from '../public/images/works/amazon.jpg';
import thumbHulu from '../public/images/works/hulu.jpg';
import thumbKeeper from '../public/images/works/keeper.jpg';
import Layout from '../components/layouts/article';

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem id="netflix" title="Netflix" thumbnail={thumbNetflix}>
                            Netflix Clone to watch Movies and Tv shows
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem id="amazon" title="Amazon" thumbnail={thumbAmazon}>
                            Amazon Clone to watch buy things
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem id="hulu" title="Hulu" thumbnail={thumbHulu}>
                            Hulu Clone to watch buy Movies and Series
                        </WorkGridItem>
                    </Section>
                    {/* <Section delay={0.5}>
                        <WorkGridItem id="keeper" title="Keeper" thumbnail={thumbKeeper}>
                            Google Keep Clone to note important points and things
                        </WorkGridItem>
                    </Section> */}
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works