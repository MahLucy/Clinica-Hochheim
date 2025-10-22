'use client';

import {
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Grid,
  Image,
} from '@chakra-ui/react';

type DiferenciaisProps = {
  images?: string[];
};

const defaultImages = [
  '/dif-1.jpg', // 1ª coluna - imagem de cima
  '/dif-2.jpg', // 2ª coluna - imagem de cima
  '/dif-3.jpg', // 3ª coluna - imagem de cima
  '/dif-4.jpg', // 1ª coluna - imagem de baixo
  '/dif-5.jpg', // 2ª coluna - imagem de baixo
  '/dif-6.jpg', // 3ª coluna - imagem de baixo
];

// Alturas personalizadas conforme o Figma
const imageHeights = {
  md: [
    '549px', // 1ª coluna - cima
    '365px', // 2ª coluna - cima
    '549px', // 3ª coluna - cima
    '365px', // 1ª coluna - baixo
    '549px', // 2ª coluna - baixo
    '365px', // 3ª coluna - baixo
  ],
  base: [
    '10rem', // valores reduzidos para mobile
    '10rem',
    '10rem',
    '10rem',
    '10rem',
    '10rem',
  ],
};

const imageMargins = {
  md: [
    '',       // imagem 1
    '', // imagem 2
    '',       // imagem 3
    '',
    '-11rem',       // imagem 5
    '0', // imagem 6
  ],
  base: ['0', '0', '0', '0', '0', '0'],
};

export default function Diferenciais({ images = defaultImages }: DiferenciaisProps) {
  return (
    <Box as="section" bg="brand.20" py={{ base: 2, md: 16 }}>
      <Container maxW={{ base: '95%', md: '80%', lg: '70%' }}>
        <VStack spacing={{ base: 8, md: 10 }} alignItems="flex-start">
          {/* Cabeçalho */}
          <HStack spacing={4} justifyContent="flex-start">
            <Box w={{base:'6rem', md:"15rem"}}h="1rem" bg="brand.200" />
            <Heading as="h2" fontSize={{ base: '2xl', md: '5xl' }} color="brand.800">
              Diferenciais:
            </Heading>
          </HStack>

          {/* Pílulas */}
          <Stack spacing={4} w="full">
            <Text bg="brand.750" color="brand.10" rounded="full" px={{base: '1rem', md:"5rem" }} py={3}
              fontSize={{ base: 'md', md: '2rem' }} textAlign="start" fontWeight={200}
              w="fit-content" boxShadow="sm">
              Equipe técnica especializada
            </Text>
            <Text bg="brand.200" color="brand.800" rounded="full" px={{base: '1rem', md:"5rem" }} py={3}
              fontSize={{ base: 'md', md: '2rem' }} textAlign="start" fontWeight={200}
              w="fit-content" boxShadow="sm">
              Estrutura moderna
            </Text>
            <Text bg="white" color="brand.800" rounded="full" px={{base: '1rem', md:"5rem" }} py={3}
              fontSize={{ base: 'md', md: '2rem' }} textAlign="start" fontWeight={200}
              w="fit-content" boxShadow="sm">
              Equipamentos avançados
            </Text>
            <Text bg="brand.800" color="white" rounded="full" px={{base: '1rem', md:"5rem" }} py={3}
              fontSize={{ base: 'md', md: '2rem' }} textAlign="start" fontWeight={200}
              w="fit-content" boxShadow="sm">
              Protocolos personalizados
            </Text>
          </Stack>

          {/* Grade de imagens com alturas específicas */}
            <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={{ base: 2, md: 5 }}
            w="full"
            >
            {images.slice(0, 6).map((src, i) => (
              <Box
              key={i}
              overflow="hidden"
              rounded="2xl"
              mt={{ base: imageMargins.base[i], md: imageMargins.md[i] }}
              cursor="pointer"
              transition="opacity 200ms ease"
              _hover={{ opacity: 0.8 }}
              >
              <Image
                src={src}
                alt={`Diferencial ${i + 1}`}
                objectFit="cover"
                w="100%"
                h={{ base: imageHeights.base[i], md: imageHeights.md[i] }}
              />
              </Box>
            ))}
            </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
