import styles from '../components/styles/images.module.css';

import { Box, Container, Heading, Text, SimpleGrid, Flex, LinkBox, useColorModeValue, Image } from "@chakra-ui/react";
import Main from "components/layouts/main";
import NextLink from 'next/link';

import { Grow, SlideIn } from 'components/animated';

/**
* @file projects.js
* @author Devin Arena
* @since 12/5/2021
* @description Projects page, displays list of projects as tiles.
*/
const Projects = () => {

    const ProjectItem = ({ children, image, id, title }) => {

        return (
            <Flex w='100%' direction='column' justify='flex-start' align='center'>
                <NextLink href={`projects/${id}`} passHref>
                    <LinkBox cursor='pointer' textAlign='center' transition='color 1s ease'
                        _hover={{ color: 'blue.500' }} >
                        <Image className={styles.projectCard} src={image} alt={title} placeholder='blur' loading='lazy' layout='intrinsic' />
                        <Heading as='h3' fontSize='2xl' mt={1}>
                            {title}
                        </Heading>
                        <Text mt={1}>
                            {children}
                        </Text>
                    </LinkBox>
                </NextLink>
            </Flex>
        );
    };

    return (
        <Main title='Projects'>
            <Container px={8} pt={20} maxW='container.md'>

                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='column'>
                        <Heading as='h1' fontSize={{ base: '5xl' }}>
                            Projects
                        </Heading>
                        <Text fontSize={{ base: 'kg', md: 'xl' }}>
                            These are a collection of the projects I&apos;ve built and am most proud of.
                        </Text>
                    </Box>
                </SlideIn>

                <SimpleGrid mt={8} columns={[1, 2, 2, 3]} gap={5}>
                    <Grow delay={0.4} time={0.8}>
                        <ProjectItem image='/images/useroux_card.png' title='UseRoux' id='useroux'>
                            A SpeedSolving guide, giving examples of how to solve a Rubik&apos;s cube properly in a cool 3D simulator.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0.6} time={0.8}>
                        <ProjectItem image='/images/pixelbackground_card.png' title='Pixel Background' id='pixelbackground'>
                            Generate amazing pixel art wallpapers using images from your favorite subreddits.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0.8} time={0.8}>
                        <ProjectItem image='/images/apptracker-desktop.png' title='AppTracker' id='apptracker'>
                            A useful web application for tracking internship/job applications I built for myself.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={1.0} time={0.8}>
                        <ProjectItem image='/images/pixelstriker_card.png' title='Pixel Striker' id='pixelstriker'>
                            Shoot and save goals in an endless arcade-style soccer app for Android.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={1.2} time={0.8}>
                        <ProjectItem image='/images/productlog_card.png' title='Product Log' id='productlog'>
                            Catalog purchases track collections using a fun barcode-scanning mobile app built with Flutter.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={1.4} time={0.8}>
                        <ProjectItem image='/images/minesweeperai_card.png' title='Minesweeper AI' id='minesweeperai'>
                            An AI that solves mineweeper puzzles using real tactics. Built using vanilla JavaScript.
                        </ProjectItem>
                    </Grow>
                </SimpleGrid>

            </Container>
        </Main>
    );
};

export default Projects;