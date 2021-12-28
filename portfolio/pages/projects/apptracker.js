import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';
import { Image } from "@chakra-ui/react";

import Main from "components/layouts/main";
import { Grow, SlideIn } from "components/animated";

const UseRoux = () => {

    return (
        <Main title='AppTracker'>
            <Container px={8} pt={20} maxW='container.md'>

                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap'>
                            AppTracker
                        </Heading>
                        <Heading as='h3' variant='projectDate' ml={3} borderRadius={5} fontSize={{ base: 'md', md: 'xl' }}>
                            August 2021 - September 2021
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0.2} time={1} direction='left'>
                        <Text variant='indented'>
                            AppTracker is a web application developed using ReactJS. The app allows you to input information regarding your applications to companies. It tracks this information, displaying entries for each company as well as overall statistics.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.4} time={1} direction='right'>
                        <Text variant='indented'>
                            Users can enter company name/position title, date of application, and any notes about the company. The app will track application numbers, interviews, offers, and rejections.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.6} time={1} direction='left'>
                        <Text variant='indented'>
                            Also supports a light/dark theme, exporting company lists as JSON, and importing company lists from JSON files. All data is stored in Local Storage.
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
                    <SlideIn delay={1} time={0.9} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Tech Stack
                            </Text>
                            <Text ml={2}>
                                Javascript, NodeJS, ReactJS, JSON
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Link
                            </Text>
                            <NextLink href='https://projects.devinarena.com/AppTracker' passHref>
                                <Link ml={2} overflowWrap='anywhere' textAlign='center'>
                                    https://projects.devinarena.com/AppTracker
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.1} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/devinarena/AppTracker' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8} >
                        <Image src='/images/apptracker-desktop.png' alt='Apptracker Desktop' />
                    </Box>
                </Grow>

                <Grow delay={1.5} time={1}>
                    <Box display='flex' justifyContent='center' mt={4}>
                        <Image src='/images/apptracker-edit.png' alt='Apptracker Edit' />
                    </Box>
                </Grow>

                <Grow delay={1.7} time={1}>
                    <Box display='flex' justifyContent='center' mt={4}>
                        <Image src='/images/apptracker-mobile.png' alt='Apptracker Mobile' />
                    </Box>
                </Grow>

                <Grow delay={1.9} time={1}>
                    <Box mt={4} align='center'>
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