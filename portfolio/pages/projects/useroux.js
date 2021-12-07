import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';
import Image from 'next/image';
import Main from "components/layouts/main";

import simulator from '../../public/images/useroux.png';
import { Grow, SlideIn } from "components/animated";

const UseRoux = () => {

    return (
        <Main title='UseRoux'>
            <Container px={10} pt={20} maxW='container.md'>

                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1'>
                            UseRoux
                        </Heading>
                        <Heading as='h3' variant='projectDate' ml={3} borderRadius={5}>
                            October 2021 -
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0.2} time={1} direction='left'>
                        <Text variant='indented'>
                            UseRoux is a solve-sharing and walkthrough webapp. Currently, the simulator allows users to walk through solves, giving them step by step instructions on the optimal solution for a certain scramble. The goal is to help teach people how to both use the Roux speedsolving method and improve their solves.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.4} time={1} direction='right'>
                        <Text variant='indented'>
                            The simulator uses Three.js to build a 3D speedcube. The cube rotates according to the current scramble. The user can walk through each step using the left and right arrows, and the cube will follow the solution steps.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.6} time={1} direction='left'>
                        <Text variant='indented'>
                            Currently in development is the site allowing users to upload their solves. Solvers will be able to register for an account and post their solutions to scrambles to the internet. Users can also browse and view solves in the simulator.
                        </Text>
                    </SlideIn>
                </Box>

                <Box mt={8}>
                    <SlideIn delay={0.8} time={1} direction='right'>
                        <Flex align='center'>
                            <Text variant='projectLabel'>
                                Platform
                            </Text>
                            <Text ml={2}>
                                Web Application
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Tech Stack
                            </Text>
                            <Text ml={2}>
                                NodeJS, ReactJS, ThreeJS, Webpack, Express, JWT
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.2} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Try It
                            </Text>
                            <Text ml={2}>
                                NodeJS, ReactJS, ThreeJS, Webpack, Express, JWT
                            </Text>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.4} time={1}>
                    <Box mt={8}>
                        <Image src={simulator} />
                    </Box>
                </Grow>

                <Grow delay={1.6} time={1}>
                    <Box mt={3} align='center'>
                        <NextLink href='/projects' passHref>
                            <Button align='center' leftIcon={<ChevronLeftIcon />} colorScheme='blue'>
                                Projects
                            </Button>
                        </NextLink>
                    </Box>
                </Grow>

            </Container>
        </Main>
    );
};

export default UseRoux;