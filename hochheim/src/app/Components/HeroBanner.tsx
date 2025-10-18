'use client';

import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  HStack,
} from '@chakra-ui/react';

type HeroBannerProps = {
  imageSrc?: string; // foto da direita
  arrowSrc?: string; // imagem da setinha
};

export default function HeroBanner({
  imageSrc = '/hero.jpg',
  arrowSrc = '/arrow.png',
}: HeroBannerProps) {
  return (
    <Box as="section" bg="brand.800" color="white" py={{ base: 10, md: 12 }}>
      <Container maxW="80%">
        <Grid
          templateColumns={{ base: '1fr', md: '3fr 2fr' }}
          alignItems="center"
            gap={{ base: 8, md: 16 }}
        >
          {/* Texto */}
          <GridItem>
            <VStack align="flex-start">
                <Box gap={5} display="flex" flexDirection="column" >

                <Box>
              <HStack  opacity={0.85}>
                <Text fontSize="light" letterSpacing="widest" color={'brand.200'}>
                  CLÍNICA HOCHHEIM • HIDRO E TERAPIAS
                </Text>
                <Image src={arrowSrc} alt="seta decorativa"  position="absolute" top="14.5rem" left={'30rem'} h={{ base: '0px', md: '7rem' }}
    w="auto"/>
              </HStack>
              <Heading
                lineHeight={ 0.97}
                fontWeight={'normal'}
                fontSize={{ base: '2xl', md: '5xl' }}
              >
                Há mais de<br></br>
            </Heading>

                <Box as="span" fontWeight={{ base: '500', md: '900'}} display="inline-block" fontSize={{base:'2.5rem', md:'5rem'}} lineHeight={0.8}>
                  duas décadas
                </Box>

              <Text lineHeight={ 0.97} fontSize={{ base: '2xl', md: '5xl' }} fontWeight={ 'normal'} opacity={0.95}>
                restaurando movimentos<br></br> e recuperando{' '}
                <Box as="b">qualidade<br></br> de vida</Box> de nossos clientes.
              </Text>

              <Text lineHeight={ 1} fontSize={{ base: 'xl', md: '3xl' }} fontWeight={ 'hairline'} opacity={0.95}>
                Cuidado técnico, estrutura completa<br></br> e foco absoluto na sua saúde.
              </Text>
            </Box>
              <Button
                size="lg"
                rounded="full"
                px={8}
                fontWeight={500}
                color="#ffffffff"
                bg="#1B7C9F"
                _hover={{ filter: 'brightness(1.05)' }}
                boxShadow="md"
                height={'4rem'}
                fontSize={{ base: 'sm', md: '2rem' }}
                w={'75%'}
                
              >
                Agende a sua consulta
              </Button>
            </Box>
            </VStack>
          </GridItem>

          {/* Imagem à direita */}
          <GridItem>
            <Box
              p={{ base: 1.5, md: 2 }}
              boxShadow="inner"
              overflow="hidden"
              w="90%"
            >
              <Image
                src={imageSrc}
                alt="Estrutura da clínica"
                objectFit="cover"
                w="100%"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
