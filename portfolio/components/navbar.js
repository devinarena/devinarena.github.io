import { Box, Container, Flex, Heading, Link, Stack } from '@chakra-ui/layout';
import ThemeButton from './themebutton';

import NextLink from 'next/link';

const Navbar = () => {
    return (
        <Box position='fixed' as='nav' w='100%' zIndex={999}
            top={0} transition='background 1s ease'
            backdropFilter='blur(20px)'
            bg='whiteAlpha.50' _hover={{ bg: 'whiteAlpha.200' }}>
            <Container display='flex' alignItems='center' justifyContent='space-between' p={3}>
                <Flex mr={3}>
                    <Heading as='h1' size='lg'>
                        <NextLink href='/' passHref>
                            <Link p={0} _hover={{}}>
                                Devin&nbsp;Arena
                            </Link>
                        </NextLink>
                    </Heading>
                </Flex>

                <Stack display={'flex'} direction='row' justify='flex-start'
                    align='center' w={{ base: 'full', md: 'auto' }}>
                    <NextLink href='/projects' passHref>
                        <Link>Projects</Link>
                    </NextLink>
                    <NextLink href='/' passHref>
                        <Link>GitHub</Link>
                    </NextLink>
                    <NextLink href='https://www.linkedin.com/in/devin-arena/' passHref>
                        <Link>LinkedIn</Link>
                    </NextLink>
                    <NextLink href='/' passHref>
                        <Link>Source</Link>
                    </NextLink>
                </Stack>


                <ThemeButton />
            </Container>
        </Box>
    );
}

export default Navbar;