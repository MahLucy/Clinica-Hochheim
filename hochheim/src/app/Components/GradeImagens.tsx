'use client';

import {
  Box,
  Container,
  VStack,
  Grid,
  Image,
} from '@chakra-ui/react';

type ImagensProps = {
  images?: string[];
};

const defaultImages = [
  '/dif-1.jpg',
  '/dif-2.jpg',
  '/dif-3.jpg',
  '/dif-4.jpg',
  '/dif-5.jpg',
  '/dif-6.jpg',
] as const;

// Alturas por breakpoint
const imageHeights = {
  base: ['10rem', '10rem', '10rem', '10rem', '10rem', '10rem'],
  md:   ['549px', '365px', '549px', '365px', '549px', '365px'],
} as const;

// Offsets (margem-top) por breakpoint
const imageMargins = {
  base: ['0', '0', '0', '0', '0', '0'],
  md:   ['0', '0', '0', '0', '-11rem', '0'],
} as const;

export default function GradeImagens({ images = defaultImages as unknown as string[] }: ImagensProps) {
  return (
    <Box as="section" bg="brand.20" py={{ base: 2, md: 16 }} bgColor={'brand.20'}>
      <Container maxW={{ base: '95%', md: '80%', lg: '70%' }}>
        <VStack spacing={{ base: 8, md: 10 }} alignItems="flex-start">
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
                _hover={{ opacity: 0.85 }}
              >
                <Image
                  src={src}
                  alt={`Diferencial ${i + 1}`}
                  objectFit="cover"
                  w="100%"
                  h={{ base: imageHeights.base[i], md: imageHeights.md[i] }}
                  loading="lazy"
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
