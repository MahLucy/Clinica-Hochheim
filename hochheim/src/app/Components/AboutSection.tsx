'use client';

import { Box, Container, VStack, Text, Image } from '@chakra-ui/react';

type AboutSectionProps = {
  iconSrc?: string;
};

export default function AboutSection({ iconSrc = '/about-icon.png' }: AboutSectionProps) {
  return (
    <Box as="section" bg="brand.20" color="brand.800" py={{ base: 16, md: 24 }}>
      <Container maxW={{ base: '90%', md: '70%', lg: '60%' }}>
        <VStack spacing={{ base: 8, md: 10 }} textAlign="justify" >
          {/* Ícone superior */}
          <Image
            src={iconSrc}
            alt="Ícone fisioterapia"
            h={{ base: '5rem', md: '10rem' }}
            w="auto"
            draggable={false}
          />

          {/* Primeiro parágrafo */}
          <Text
            fontSize={{ base: 'lg', md: '4xl' }}
            lineHeight={{base:'1', md:'1.5'}}
            fontWeight="300"
          >
            A <Box as="b">Clínica Hochheim</Box> é referência regional
            em fisioterapia e reabilitação, unindo{' '}
            <Box as="b">experiência clínica, estrutura avançada</Box> e{' '}
            <Box as="b">metodologias personalizadas</Box>.
          </Text>

          {/* Segundo parágrafo */}
          <Text
            fontSize={{ base: 'lg', md: '4xl' }}
            lineHeight={{base:'1', md:'1.5'}}
            fontWeight="300"
          >
            Com mais de <Box as="b">20 anos</Box> de atuação, somos reconhecidos pela{' '}
            <Box as="b">excelência clínica, estrutura</Box> e um portfólio completo de
            especialidades —{' '}
            <Box as="b">
              sempre com foco na restauração funcional, no alívio da dor e na retomada
              da autonomia.
            </Box>
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
