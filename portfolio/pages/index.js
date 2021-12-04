
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import Main from 'components/layouts/main';

/**
* @file index.js
* @author Devin Arena
* @since 12/3/2021
* @description The homepage for my web portfolio.
*/
const Home = () => {

  return (
    <Main title="Homepage">
      <Container p={8}>

        <Box display={{ md: "flex" }}>
          <Box flexGrow="1">
            <Heading as="h1" fontSize={{ base: "5xl" }}>
              Devin Arena
            </Heading>
            <Text as="p" fontSize={{ base: "xl", md: "2xl" }}>
              Student and Software Engineer
            </Text>
          </Box>
        </Box>

        <Box mt={8}>
          <Heading as="h3" variant="sectionTitle">
            About
          </Heading>
          <Text variant="indented">
            My name is Devin Arena, and I'm currently a student and software engineer based in Naples, Florida. I currently attend Florida Gulf Coast University pursuing a Bachelor's of Science in Software Engineering. I found my love for programming early, at the age of 9. Ever since, I've enjoyed designing and building websites, apps, and games. Creating useful software and enjoyable games are some of my favorite hobbies.
          </Text>

          <Box align="center" mt={3}>
            <Button align="center" rightIcon={<ChevronRightIcon />}>Projects</Button>
          </Box>
        </Box>

      </Container>
    </Main>
  );
}

export default Home;