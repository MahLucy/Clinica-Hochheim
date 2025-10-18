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
  '/dif-1.jpg',
  '/dif-2.jpg',
  '/dif-3.jpg',
  '/dif-4.jpg',
  '/dif-5.jpg',
  '/dif-6.jpg',
];

export default function Diferenciais({ images = defaultImages }: DiferenciaisProps) {
  return (
    <Box as="section" bg="brand.20" py={{ base: 12, md: 16 }}>
      <Container maxW={{ base: '95%', md: '80%', lg: '70%' }} >
        <VStack spacing={{ base: 8, md: 10 }} alignItems={"flex-start"}>

          {/* Título com filete à esquerda */}
          <HStack spacing={4}  justifyContent={"flex-start"}>
            <Box w="15rem" h="1rem" bg="brand.200" />
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '5xl' }}
              color="brand.800"
            >
              Diferenciais:
            </Heading>
          </HStack>

          {/* Pílulas */}
          <Stack spacing={4} w="full">
            <Text
              bg="brand.750"
              color="brand.10"
              rounded="full"
              px={'10rem'}
              py={3}
              fontSize={{ base: 'md', md: '3rem' }}
              textAlign="start"
              fontWeight={200}
              w="fit-content"   
              boxShadow="sm"
            >
              Equipe técnica especializada
            </Text>

            <Text
              bg="brand.200"
              color="brand.800"
              rounded="full"
              px={'10rem'}
              py={3}
              fontSize={{ base: 'md', md: '3rem' }}
              textAlign="start"
              fontWeight={200}
              w="fit-content"   
              boxShadow="sm"

            >
              Estrutura moderna
            </Text>

            <Text
              bg="white"
              color="brand.800"
              rounded="full"
              px={'10rem'}
              py={3}
              fontSize={{ base: 'md', md: '3rem' }}
              textAlign="start"
              fontWeight={200}
              boxShadow="sm"
              w="fit-content"
            >
              Equipamentos avançados
            </Text>

            <Text
              bg="brand.800"
              color="white"
              rounded="full"
              px={'10rem'}
              py={3}
              fontSize={{ base: 'md', md: '3rem' }}
              textAlign="start"
              fontWeight={200}
              w="fit-content"   
              boxShadow="sm"

            >
              Protocolos personalizados
            </Text>
          </Stack>

          {/* Grade de imagens */}
          <Grid
            templateColumns={{ base: '1fr 1fr', md: 'repeat(3, 1fr)' }}
            gap={6}
            w="full"
          >
            {images.slice(0, 6).map((src, i) => (
              <Box key={i} overflow="hidden" bg="white" rounded="2xl" boxShadow="sm">
                <Image
                  src={src}
                  alt={`Diferencial ${i + 1}`}
                  objectFit="cover"
                  w="100%"
                  h={{ base: '140px', md: '180px' }}
                  // cantos arredondados mais suaves, como no mock
                  borderRadius="24px"
                  draggable={false}
                />
              </Box>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
