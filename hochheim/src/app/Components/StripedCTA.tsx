'use client';

import {
  Box,
  Button,
  Container,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';

type StripedCTAProps = {
  faixaSrc?: string; // caminho da imagem da faixa
  ctaText?: string;
  ctaHref?: string;
};

export default function StripedCTA({
  faixaSrc = '/imagens/faixa-hochheim.png',
  ctaText = 'Agende a sua consulta',
  ctaHref = '/contato',
}: StripedCTAProps) {
  return (
    <Box as="section" bg="brand.20" marginTop={{ base: '5rem', md: '10rem' }}>
      {/* Faixa superior */}
      <Image
        src={faixaSrc}
        alt="Faixa Clínica Hochheim & Hochheim Kids"
        w="100%"
        h={{ base: '5rem', md: '10rem' }}
        objectFit="cover"
        draggable={false}
      />

      {/* Conteúdo central */}
      <Container maxW={{ base: '92%', md: '70%' }} marginTop={{ base: '1rem', md: '5rem' }} marginBottom={{ base: '1rem', md: '5rem' }}>
        <VStack py={{ base: 12, md: 20 }} spacing={6} textAlign="center">
          <Text
            color="brand.800"
            fontWeight={500}
            fontSize={{ base: 'xl', md: '5xl' }}
            lineHeight={1.4}
          >
            Para mais informações ou <br /> para agendar sua consulta:
          </Text>

          <Button
            as={NextLink}
            href={ctaHref}
            rounded="full"
            px={{ base: 8, md: 12 }}
            py={{ base: 6, md: 7 }}
            fontSize={{ base: 'md', md: '4xl' }}
            color="white"
            bg="brand.750"
            _hover={{ bg: 'brand.900' }}
          >
            {ctaText}
          </Button>
        </VStack>
      </Container>

      {/* Faixa inferior */}
      <Image
        src={faixaSrc}
        alt="Faixa Clínica Hochheim & Hochheim Kids"
        w="100%"
        h={{ base: '5rem', md: '10rem' }}
        objectFit="cover"
        draggable={false}
        marginBottom={{ base: '5rem', md: '10rem' }}
      />
    </Box>
  );
}
