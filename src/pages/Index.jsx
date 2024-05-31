import React from "react";
import { Box, Container, VStack, HStack, Text, Heading, Button, Image, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => (
  <Box as="header" bg="gray.800" color="white" py={4}>
    <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
      <Heading as="h1" size="lg">
        Truly Trumbull
      </Heading>
      <HStack spacing={4}>
        <Link href="#home">Home</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact</Link>
      </HStack>
    </Container>
  </Box>
);

const HeroSection = () => (
  <Box as="section" bg="gray.100" py={20} textAlign="center">
    <Container maxW="container.lg">
      <Heading as="h2" size="2xl" mb={4}>
        Welcome to Truly Trumbull
      </Heading>
      <Text fontSize="xl" mb={8}>
        Discover the best of Trumbull with us.
      </Text>
      <Button colorScheme="teal" size="lg">
        Learn More
      </Button>
    </Container>
  </Box>
);

const ServicesSection = () => (
  <Box as="section" py={20} bg="white">
    <Container maxW="container.lg">
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Our Services
      </Heading>
      <VStack spacing={8}>
        <HStack spacing={8}>
          <Box width="300px" textAlign="center">
            <Image src="https://images.unsplash.com/photo-1714138667561-c97222b341d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxsb2NhbCUyMGJ1c2luZXNzfGVufDB8fHx8MTcxNzE2NjI5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Local Business" borderRadius="md" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Local Business
            </Heading>
            <Text>Support and discover local businesses in Trumbull.</Text>
          </Box>
          <Box width="300px" textAlign="center">
            <Image src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudHN8ZW58MHx8fHwxNzE3MTY2MjkxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Community Events" borderRadius="md" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Community Events
            </Heading>
            <Text>Join and participate in community events.</Text>
          </Box>
          <Box width="300px" textAlign="center">
            <Image src="https://images.unsplash.com/photo-1622018306727-d3f51a53525e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYWN0aXZpdGllc3xlbnwwfHx8fDE3MTcxNjYyOTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Outdoor Activities" borderRadius="md" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Outdoor Activities
            </Heading>
            <Text>Explore outdoor activities and parks.</Text>
          </Box>
        </HStack>
      </VStack>
    </Container>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="gray.800" color="white" py={8}>
    <Container maxW="container.lg" textAlign="center">
      <Text mb={4}>© 2023 Truly Trumbull. All rights reserved.</Text>
      <HStack spacing={4} justifyContent="center">
        <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
        <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
        <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
      </HStack>
    </Container>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </Box>
  );
};

export default Index;
