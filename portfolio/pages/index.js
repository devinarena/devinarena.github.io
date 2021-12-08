
import { ChevronRightIcon, InfoIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Heading, Text, List, ListItem, Link } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import { AiFillLinkedin } from 'react-icons/ai';
import NextLink from 'next/link';
import ExperienceEntry from 'components/expentry';
import Main from 'components/layouts/main';
import { SlideIn } from 'components/animated';

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

        <SlideIn delay={0} time={1} direction='right'>
          <Box display='flex' flexDirection='column'>
            <Heading as='h1' fontSize={{ base: '5xl' }}>
              Devin Arena
            </Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              Student and Software Engineer
            </Text>
          </Box>
        </SlideIn>

        <SlideIn delay={0.4} time={1} direction='left'>
          <Box mt={8}>
            <Heading as='h3' variant='sectionTitle'>
              About
            </Heading>
            <Text variant='indented'>
              My name is Devin Arena, and I&apos;m currently a student and software engineer based in Naples, Florida. I currently attend Florida Gulf Coast University pursuing a Bachelor&apos;s of Science in Software Engineering. I found my love for programming early, at the age of 9. Ever since, I&apos;ve enjoyed designing and building websites, apps, and games. Creating useful software and enjoyable games are some of my favorite hobbies.
            </Text>

            <Box align='center' mt={3}>
              <NextLink href='/projects' passHref>
                <Button align='center' rightIcon={<ChevronRightIcon />} colorScheme='blue' >
                  Projects
                </Button>
              </NextLink>
            </Box>
          </Box>
        </SlideIn>

        <SlideIn delay={0.8} time={1} direction='right'>
          <Box mt={8}>
            <Heading as='h3' variant='sectionTitle'>
              Education &amp; Experience
            </Heading>
            <ExperienceEntry date='2019 - Present'>
              Pursuing Bachelor&apos;s of Science at Florida Gulf Coast University
            </ExperienceEntry>
            <ExperienceEntry date='Spring 2022'>
              Incoming Embedded Software Engineering Intern at Syracuse Research Corporation Inc.
            </ExperienceEntry>
            <Box mt={3} align='center'>
              <NextLink href='/Resume.pdf' passHref>
                <Button align='center' rightIcon={<InfoIcon />} colorScheme='blue'>
                  Resume
                </Button>
              </NextLink>
            </Box>
          </Box>
        </SlideIn>

        <SlideIn delay={1.2} time={1} direction='left'>
          <Box mt={8}>
            <Heading as='h3' variant='sectionTitle'>
              Hobbies
            </Heading>
            <Text>
              Game Development, Building Apps &amp; Websites, Speedcubing, Writing Music, Playing Piano, Soccer
            </Text>
          </Box>
        </SlideIn>

        <SlideIn delay={1.6} time={1} direction='right'>
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
                  alignItems='center' style={{ gap: 4 }} fontSize='2xl'>
                  <VscGithub />
                  GitHub
                </Link>
              </ListItem>
            </List>
          </Box>
        </SlideIn>

      </Container>
    </Main >
  );
};

export default Home;