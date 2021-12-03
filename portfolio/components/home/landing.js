import { Box, Flex, Heading } from '@chakra-ui/react';

/**
* @file landing.js
* @author Devin Arena
* @since 12/3/2021
* @description Main component on the homepage, shows my name and a picture of me.
*/
const Landing = (props) => {
    return (
        <Flex w='100%' minH='100vh' direction='row' align='center' justify='center'>
            <Flex flex='1' direction='column' align='center' justify='center'>
                <Heading as='h3' size='2xl'>Devin Arena</Heading>
                <Heading as='h1' size='lg'>Student and Software Engineer</Heading>
            </Flex>
            <Box flex='2'>

            </Box>
        </Flex>
    );
};

export default Landing;