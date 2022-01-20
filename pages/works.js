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

const Works = () => {
    return (
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
            </SimpleGrid>
        </Container>
    )
}

export default Works