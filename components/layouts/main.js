import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelProgrammer from '../voxel-programmer'
import NoSsr from '../no-ssr'
import Image from 'next/image'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Musa Malik - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {/* <NoSsr> */}
                <Container maxW="container.sm">
                <Image src={'/coder.svg'} alt='coder' height={1080} width={1920}/>
                </Container>
                    {/* <VoxelProgrammer /> */}
                    { children }   
                {/* </NoSsr> */}
            </Container>
        </Box>
    )
}

export default Main