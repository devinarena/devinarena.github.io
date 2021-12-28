import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';
import Main from "components/layouts/main";

import { Grow, SlideIn } from "components/animated";

const UseRoux = () => {

    return (
        <Main title='Product Log'>
            <Container px={8} pt={20} maxW='container.md'>

                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap'>
                            Product Log
                        </Heading>
                        <Heading as='h3' variant='projectDate' ml={3} borderRadius={5} fontSize={{ base: 'md', md: 'xl' }}>
                            June 2021 - August 2021
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0.2} time={1} direction='left'>
                        <Text variant='indented'>
                            Product Log is a fun cataloging app allowing users to keep track of some of their purchases or collections.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.4} time={1} direction='right'>
                        <Text variant='indented'>
                            Users can enter UPCs or scan barcodes to add items to their collection. They can catalog the product&apos;s name, description, price, rating, and more. Users can sort products, recall using barcodes or UPCs and classify products using tags.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.6} time={1} direction='left'>
                        <Text variant='indented'>
                            All data is saved to a local SQLite database, which can be exported or imported into the mobile application.
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
                                Android
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={0.9} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Tech Stack
                            </Text>
                            <Text ml={2}>
                                Flutter, SQLite
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Link
                            </Text>
                            <NextLink href='https://play.google.com/store/apps/details?id=io.github.devinarena.productlog' passHref>
                                <Link ml={2}>
                                    Google Play Store
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.1} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/devinarena/ProductLog' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8} >
                        <Image src='/images/productlog_menu.png' alt='Menu' />
                    </Box>
                </Grow>

                <Grow delay={1.5} time={1}>
                    <Box display='flex' justifyContent='center' mt={4}>
                        <Image src='/images/productlog_product.png' alt='Product' />
                    </Box>
                </Grow>

                <Grow delay={1.7} time={1}>
                    <Box display='flex' justifyContent='center' mt={4}>
                        <Image src='/images/productlog_list.png' alt='Product List' />
                    </Box>
                </Grow>

                <Grow delay={1.9} time={1}>
                    <Box display='flex' justifyContent='center' mt={4}>
                        <Image src='/images/productlog_stats.png' alt='Collection stats' />
                    </Box>
                </Grow>

                <Grow delay={2.1} time={1}>
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