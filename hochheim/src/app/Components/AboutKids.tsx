'use client';

import { Box, Container, VStack, Text, Image } from '@chakra-ui/react';

type AboutSectionProps = {
  iconSrc?: string;
};

export default function AboutSection({ iconSrc = '/about-icon.png' }: AboutSectionProps) {
  return (
    <Box as="section" bg="brand.20" color="brand.800" py={{ base: 10, md: 24 }}>
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
            Há mais de <Box as="b">14 anos</Box> a <Box as="b">Hochheim Kids</Box> ensina
            bebês e crianças a nadarem com <Box as="b">segurança, respeitando cada fase do desenvolvimento motor.{' '}</Box>
          </Text>

          {/* Segundo parágrafo */}
          <Text
            fontSize={{ base: 'lg', md: '4xl' }}
            lineHeight={{base:'1', md:'1.5'}}
            fontWeight="300"
          >
            O espaço foi criado especialmente para o público infantil: 
            um <Box as="b">ambiente climatizado,</Box> com <Box as="b">piscina aquecida o ano inteiro,</Box>
            que proporciona conforto e tranquilidade para pais e alunos.{' '}
          </Text>

           {/* terceiro parágrafo */}
          <Text
            fontSize={{ base: 'lg', md: '4xl' }}
            lineHeight={{base:'1', md:'1.5'}}
            fontWeight="300"
          >
            Nossa metodologia combina <Box as="b">atividades lúdicas e técnicas construtivas</Box>
            conduzidas por professores graduados e registrados
            Conselho Regional de Educação Física (CREF/SC).
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
