'use client';

import {
  Box,
  Container,
  HStack,
  VStack,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';

type NatacaoKidsProps = {
  iconSrc?: string;
};

export default function NatacaoKids({
  iconSrc = '/icons/touca-de-natacao.png',
}: NatacaoKidsProps) {
  return (
    <Box as="section" bg="#004567" color="white" py={{ base: 10, md: 16 }} mt={'3rem'}>
      <Container maxW={{ base: '92%', md: '70%', lg: '60%' }}>
        <VStack align="center" spacing={{ base: 5, md: 10 }}>
          {/* Linha com ícone + título */}
          <HStack
            spacing={{ base: 3, md: 10 }}
            align="center"
            flexDirection="row"
          >
            <Image
              src={iconSrc}
              alt="Ícone natação"
              draggable={false}
              w={{ base: '5rem', md: '10rem' }}
              h="auto"
            />
            <Text
              fontSize={{ base: 'lg', md: '4xl' }}
              fontWeight="bold"
              lineHeight={{ base: '1.3', md: '1.5' }}
              maxW="70%"
            >
              A natação infantil da Hochheim Kids é destinada a bebês e crianças
              de 6 meses a 12 anos.
            </Text>
          </HStack>

          {/* Texto e botão abaixo */}
          <VStack align="center" spacing={5}>
            <Text
              fontSize={{ base: 'md', md: '3xl' }}
              fontWeight="300"
              lineHeight={{ base: '1.5', md: '1.5' }}
              textAlign="justify"
            >
              A prática contribui para o desenvolvimento motor, respiratório e emocional da criança — promovendo auto-confiança, segurança no meio aquático e bem-estar físico desde os primeiros meses de vida.
            </Text>
            </VStack>
            <VStack align="center" spacing={5}>
            <Button
              bg="#1B7C9F"
              color="white"
              rounded="full"
              px={8}
              py={6}
              fontSize={{ base: 'sm', md: '2xl' }}
              fontWeight="600"
              transition="all 0.2s ease"
              _hover={{
                transform: 'translateY(-2px)',
                filter: 'brightness(1.1)',
              }}
            >
              Agende a aula experimental do seu filho
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
