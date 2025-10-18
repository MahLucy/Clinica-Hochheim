'use client';

import { Box, Container, VStack, Text, Button } from '@chakra-ui/react';

export default function CallToAction() {
  return (
    <Box
      as="section"
      bg="brand.800" // azul escuro principal
      color="white"
      py={{ base: 12, md: 16 }}
      textAlign="center"
    >
      <Container maxW={{ base: '90%', md: '70%' }}>
        <VStack spacing={6}>
          {/* Texto principal */}
          <Text
            fontSize={{ base: 'lg', md: '5xl' }}
            fontWeight="500"
            lineHeight={1.2}
          >
            Para mais informações ou <br /> para agendar sua consulta:
          </Text>

          {/* Botão CTA */}
          <Button
            size="2xl"
            rounded="full"
            px={{ base: 8, md: '7rem' }}
            py={{ base: 6, md: 7 }}
            fontSize={{ base: 'md', md: '2rem' }}
            fontWeight="600"
            color="brand.10"
            bg="brand.750"
            _hover={{ filter: 'brightness(1.20)' }}
            boxShadow="md"
            transition="all 0.3s ease"
            w={{ base: 'full', sm: 'auto' }}
          >
            Agende a sua consulta
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
