import { Box } from "@chakra-ui/layout";
import Head from "next/head";

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