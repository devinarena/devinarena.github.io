
import { ChevronRightIcon, InfoIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Heading, Text, List, ListItem, Link } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import { AiFillLinkedin } from 'react-icons/ai';
import ExperienceEntry from 'components/expentry';
import Main from 'components/layouts/main';

/**
* @file index.js
* @author Devin Arena
* @since 12/3/2021
* @description The homepage for my web portfolio.
*/
const Home = () => {

  return (
    <Main title='Homepage'>
      <Container px={10} pt={20} maxW='container.md'>

        <Box display='flex' flexDirection='column'>
          <Heading as='h1' fontSize={{ base: '5xl' }}>
            Devin Arena
          </Heading>
          <Text fontSize={{ base: 'xl', md: '2xl' }}>
            Student and Software Engineer
          </Text>
        </Box>

        <Box mt={8}>
          <Heading as='h3' variant='sectionTitle'>
            About
          </Heading>
          <Text variant='indented'>
            My name is Devin Arena, and I'm currently a student and software engineer based in Naples, Florida. I currently attend Florida Gulf Coast University pursuing a Bachelor's of Science in Software Engineering. I found my love for programming early, at the age of 9. Ever since, I've enjoyed designing and building websites, apps, and games. Creating useful software and enjoyable games are some of my favorite hobbies.
          </Text>

          <Box align='center' mt={3}>
            <Button align='center' rightIcon={<ChevronRightIcon />} colorScheme='blue' >
              Projects
            </Button>
          </Box>
        </Box>

        <Box mt={8}>
          <Heading as='h3' variant='sectionTitle'>
            Education &amp; Experience
          </Heading>
          <ExperienceEntry date='2019 - Present'>
            Pursuing Bachelor's of Science at Florida Gulf Coast University
          </ExperienceEntry>
          <ExperienceEntry date='Spring 2022'>
            Incoming Embedded Software Engineering Intern at Syracuse Research Corporation Inc.
          </ExperienceEntry>
          <Box mt={3} align='center'>
            <Button align='center' rightIcon={<InfoIcon />} colorScheme='blue'>
              Resume
            </Button>
          </Box>
        </Box>

        <Box mt={8}>
          <Heading as='h3' variant='sectionTitle'>
            Hobbies
          </Heading>
          <Text>
            Game Development (Godot), Building Apps &amp; Websites, Writing Music, Playing Piano, Running, Playing Soccer
          </Text>
        </Box>

        <Box mt={8}>
          <Heading as='h3' variant='sectionTitle'>
            Contact
          </Heading>
          <List styleType='none'>
            <ListItem>
              <Link href="https://www.linkedin.com/in/devin-arena/" display='inline-flex'
                alignItems='center' style={{ gap: 4 }} fontSize='2xl' >
                <AiFillLinkedin />
                LinkedIn
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/devinarena/devinarena.github.io" display='inline-flex'
                alignItems='center' style={{ gap: 4 }}  fontSize='2xl'>
                <VscGithub />
                GitHub
              </Link>
            </ListItem>
          </List>
        </Box>

      </Container>
    </Main >
  );
};

export default Home;