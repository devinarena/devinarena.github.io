import { Box } from "@chakra-ui/layout";
import Head from "next/head";

/**
* @file main.js
* @author Devin Arena
* @since 12/3/2021
* @description Main container, used for formatting.
*/
const Main = ({ children, title }) => {

    return (
        <Box as="main">
            <Head>
                <title>{title} - Devin Arena</title>
                <meta name="og:title" content={title} />
            </Head>
            {children}
        </Box>
    );
}

export default Main;