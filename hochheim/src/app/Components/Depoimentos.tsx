'use client';

import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

type Depoimento = {
  nome: string;
  texto: string;
  marginTop?: string; 
};

type Props = {
  itens?: Depoimento[];
};

const defaultItens: Depoimento[] = [
  {
    nome: 'Nome',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    nome: 'Nome',
    texto:
      'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    marginTop: '3rem',
  },
  {
    nome: 'Nome',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function Depoimentos({ itens = defaultItens }: Props) {
  return (
    <Box as="section" bg="brand.20" py={{ base: 12, md: 16 }}>
      <Container maxW={{ base: '92%', md: '80%', lg: '70%' }}>
        {/* Título + divisor */}
        <VStack spacing={2}>
          <Heading
            as="h2"
            size={{ base: 'lg', md: "2xl" }}
            color="brand.800"
            letterSpacing="wide"
          >
            DEPOIMENTOS
          </Heading>
          <Box display="flex" alignItems="center" gap={2} marginBottom={{base:'3rem', md:'0'}}>
            <Box w="64px" h="4px" bg="brand.200" rounded="full" />
            <Box
              w="10px"
              h="10px"
              bg="brand.200"
              transform="rotate(45deg)"
              rounded="2px"
            />
            <Box w="64px" h="4px" bg="brand.200" rounded="full"/>
          </Box>
        </VStack>

        {/* Cards */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={{ base: 6, md: "4rem"}}
          alignItems={'start'}
        >
          {itens.map((d, i) => (
            <Box
              key={i}
              bg="white"
              borderWidth="1px"
              borderColor="brand.800" // brand.800 com alpha
              rounded="2xl"
              p={{ base: 5, md: '3.5rem' }}
              boxShadow="sm"
              marginTop={{base:'0', md: d.marginTop ?? 0}}

            >
              <VStack align="start" spacing={3}>
                <Text
                  as="p"
                  fontWeight={600}
                  color="brand.800"
                  fontSize={{ base: 'lg', md: "3xl" }}
                >
                  {d.nome}
                </Text>

                <Text
                  as="p"
                  color="brand.750"
                  fontWeight={100}
                  lineHeight={1.7}
                  textAlign={"justify"}
                >
                  {d.texto}
                </Text>
              </VStack>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
