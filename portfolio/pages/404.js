import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import Link from "next/link";

import Main from "components/layouts/main";
import styles from '../components/styles/images.module.css';

import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Grow, SlideIn } from "components/animated";
import { Image } from "@chakra-ui/react";

/**
* @file index.js
* @author Devin Arena
* @since 12/3/2021
* @description The homepage for my web portfolio.
*/
const Home = () => {

    return (
        <Main title='Homepage'>
            <Container px={8} pt={20} maxW='container.md'>
                <Grow delay={0} time={0.4}>
                    <Image className={styles.doggos} src='/images/cutedoggos.png' alt='Doggos' />
                </Grow>
                <SlideIn delay={0.2} time={0.4} direction='right'>
                    <Flex direction='column' align='center'>
                        <Heading as='h1'>
                            404
                        </Heading>
                        <Text>
                            This resource could not be found
                        </Text>
                        <Text>
                            Here&apos;s a picture of my dogs though! :)
                        </Text>
                        <Link href='/' passHref>
                            <Button align='center' leftIcon={<ChevronLeftIcon />} colorScheme='blue' mt={5}>
                                Home
                            </Button>
                        </Link>
                    </Flex>
                </SlideIn>
            </Container>
        </Main>
    );
};

export default Home;