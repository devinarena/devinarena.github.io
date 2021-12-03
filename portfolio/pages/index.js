
import { Box } from '@chakra-ui/layout';
import Landing from 'components/home/landing';
import Head from 'next/head';

/**
* @file index.js
* @author Devin Arena
* @since 12/3/2021
* @description The homepage for my web portfolio.
*/
const Home = (props) => {
  
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Devin Arena</title>
      </Head>
      <Landing />
    </Box>
  );
}

export default Home;