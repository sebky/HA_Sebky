import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/JD.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an full stack developer based in Germany (Palatina)!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sebastian Kyereh (brotha_midnight)
          </Heading>
          <p>Digital Nomad ( Athlete | Artist | Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/seb.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Seb Ky is a full-stack developer based in Landau with a
          passion for building digital services and stuff he wants.  When not online, he loves
          hanging out with his buddies on the football field, in his atelier or in the gym.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1989</BioYear>
          Born in Sunyani, Ghana
        </BioSection>
        <BioSection>
          <BioYear>2010 to 2012</BioYear>
         Abschluss: Allgemeine Hochschulreife (Abitur)
        </BioSection>
        <BioSection>
          <BioYear>2014 - 2017</BioYear>
         Fachinformatiker: Anwendungsentwicklung
         CCNA
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Scholar at Techstarter
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/sebky" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @sebky
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/brotha.midnight" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @brotha_midnight
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1]} gap={6}>
          <GridItem
            href="https://www.youtube.com/@BlackSky85"
            title="BlkSky85"
            thumbnail={thumbYouTube}
          >
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
