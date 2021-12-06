import { Box, Container, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import Main from "components/layouts/main";
import Image from 'next/image';

import minesweeperAI from '../public/images/minesweeperai.png';

/**
* @file projects.js
* @author Devin Arena
* @since 12/5/2021
* @description Projects page, displays list of projects as tiles.
*/
const Projects = () => {

    const ProjectItem = ({ children, image, title }) => {

        return (
            <Flex w='100%' direction='column' justify='center' align='center'>
                <Image src={image} alt={title} />
                <Heading as='h3' fontSize='2xl'>
                    {title}
                </Heading>
                <Text>
                    {children}
                </Text>
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

                <SimpleGrid mt={8} columns={[1, 2, 3]} gap={5}>
                    <ProjectItem image={minesweeperAI} title='Minesweeper AI'>
                        Test text here!
                    </ProjectItem>
                </SimpleGrid>

            </Container>
        </Main>
    );
};

export default Projects;