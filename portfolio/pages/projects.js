import { Box, Container, Heading, Text, SimpleGrid, Flex, LinkBox, useColorModeValue } from "@chakra-ui/react";
import Main from "components/layouts/main";
import Image from 'next/image';
import NextLink from 'next/link';

import minesweeperAI from '../public/images/minesweeperai.png';

/**
* @file projects.js
* @author Devin Arena
* @since 12/5/2021
* @description Projects page, displays list of projects as tiles.
*/
const Projects = () => {

    const ProjectItem = ({ children, image, id, title }) => {

        return (
            <Flex w='100%' scale='0.9' direction='column' justify='flex-start' align='stretch'>
                <NextLink href={`projects/${id}`} passHref>
                    <LinkBox cursor='pointer' textAlign='center' transition='color 1s ease'
                        _hover={{ color: 'blue.500' }} >
                        <Image src={image} alt={title} placeholder='blur' loading='lazy' />
                        <Heading as='h3' fontSize='2xl' mt={1}>
                            {title}
                        </Heading>
                        <Text>
                            {children}
                        </Text>
                    </LinkBox>
                </NextLink>
            </Flex>
        );
    };

    return (
        <Main title='Projects'>
            <Container px={10} pt={20} maxW='container.md'>

                <Box display='flex' flexDirection='column'>
                    <Heading as='h1' fontSize={{ base: '5xl' }}>
                        Projects
                    </Heading>
                    <Text fontSize={{ base: 'kg', md: 'xl' }}>
                        These are a collection of the projects I've built and am most proud of.
                    </Text>
                </Box>

                <SimpleGrid mt={8} columns={[1, 1, 2, 3]} gap={5}>
                    <ProjectItem image={minesweeperAI} title='Minesweeper AI' id='minesweeperai'>
                        Test text here! Test text here! Test text here! Test text here!
                    </ProjectItem>
                    <ProjectItem image={minesweeperAI} title='Minesweeper AI' id='minesweeperai'>
                        Test text here!
                    </ProjectItem>
                    <ProjectItem image={minesweeperAI} title='Minesweeper AI' id='minesweeperai'>
                        Test text here!
                    </ProjectItem>
                    <ProjectItem image={minesweeperAI} title='Minesweeper AI' id='minesweeperai'>
                        Test text here!
                    </ProjectItem>
                    <ProjectItem image={minesweeperAI} title='Minesweeper AI' id='minesweeperai'>
                        Test text here!
                    </ProjectItem>
                    <ProjectItem image={minesweeperAI} title='Minesweeper AI' id='minesweeperai'>
                        An AI that solves mineweeper puzzles using real tactics. Built using vanilla JavaScript.
                    </ProjectItem>
                </SimpleGrid>

            </Container>
        </Main>
    );
};

export default Projects;