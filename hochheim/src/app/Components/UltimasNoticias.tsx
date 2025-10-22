'use client';

import {
  Box,
  Container,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
  Image,
  IconButton,
  useToken,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRef } from 'react';

type Noticia = {
  id: string | number;
  titulo: string;
  resumo: string;
  imagem?: string;  // /public/...
  href?: string;    // link para o post
};

type Props = {
  tituloSeccao?: string;
  noticias?: Noticia[];
};

const DADOS_FAKE: Noticia[] = [
  { id: 1, titulo: 'Notícia 01', resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imagem: '', href: '#' },
  { id: 2, titulo: 'Notícia 02', resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imagem: '', href: '#' },
  { id: 3, titulo: 'Notícia 03', resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imagem: '', href: '#' },
  { id: 4, titulo: 'Notícia 04', resumo: 'Outro item para demonstrar o scroll horizontal responsivo.', imagem: '', href: '#' },
];

export default function UltimasNoticias({
  tituloSeccao = 'ÚLTIMAS NOTÍCIAS',
  noticias = DADOS_FAKE,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [brand200, brand800] = useToken('colors', ['brand.200', 'brand.800']);

  const scrollBy = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    // largura aproximada do card + gap
    const delta = Math.round(el.clientWidth * 0.1);
    el.scrollBy({ left: dir === 'left' ? -delta : delta, behavior: 'smooth' });
  };

  return (
    <Box as="section" bg="brand.20" py={{ base: 10, md: 16 }}>
      <Container maxW={{ base: '92%', md: '85%', lg: '75%' }}>

        {/* Título com divisor/diamante */}
        <VStack spacing={2} mb={{ base: 6, md: 20 }}>
          <Heading
            as="h2"
            fontSize={{ base: 'xl', md: '4xl' }}
            color="brand.800"
            letterSpacing="widest"
            fontWeight={800}
          >
            {tituloSeccao}
          </Heading>
          <HStack spacing={2}>
            <Box w="70px" h="3px" bg="brand.200" rounded="full" />
            <Box w="8px" h="8px" bg="brand.200" transform="rotate(45deg)" rounded="2px" />
            <Box w="70px" h="3px" bg="brand.200" rounded="full" />
          </HStack>
        </VStack>

        {/* Carrossel */}
        <Box position="relative">
          {/* Botões laterais */}
          <IconButton
            aria-label="Anterior"
            icon={<ChevronLeftIcon boxSize={6} />}
            onClick={() => scrollBy('left')}
            position="absolute"
            left="-16"
            top="42%"
            transform="translateY(-50%)"
            rounded="full"
            bg="brand.800"
            color="white"
            border="1px solid"
            borderColor="blackAlpha.200"
            boxShadow="sm"
            _hover={{
            bg: 'brand.500',
            }}
            display={{ base: 'none', md: 'inline-flex' }}
          />
          <IconButton
            aria-label="Próximo"
            icon={<ChevronRightIcon boxSize={6} />}
            onClick={() => scrollBy('right')}
            position="absolute"
            right="-16"
            top="42%"
            transform="translateY(-50%)"
            rounded="full"
            bg="brand.800"
            color="white"
            border="1px solid"
            borderColor="blackAlpha.200"
            boxShadow="sm"
            _hover= {{bg: 'brand.500'}}
            display={{ base: 'none', md: 'inline-flex' }}
          />

          {/* Trilho rolável */}
          <Box
            ref={trackRef}
            overflowX="auto"
            scrollBehavior="initial"
            css={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            sx={{
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            <HStack
              spacing={{ base: 4, md: 6 }}
              minW="full"
              // wrap responsivo: cada card tem uma largura mínima
            >
              {noticias.map((n) => (
                <NewsCard key={n.id} n={n} brand200={brand200} brand800={brand800} />
              ))}
            </HStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function NewsCard({
  n,
  brand200,
  brand800,
}: {
  n: Noticia;
  brand200: string;
  brand800: string;
}) {
  return (
    <VStack
      align="stretch"
      bg="white"
      rounded="2xl"
      boxShadow="sm"
      minW={{ base: '85%', sm: '60%', md: '32%' }} 
      maxW={{ md: '32%' }}
      overflow="hidden"
    >
      {/* Topo (imagem) */}
      {n.imagem ? (
        <Image
          src={n.imagem}
          alt={n.titulo}
          h={{ base: '6rem', md: '13rem' }}
          objectFit="cover"
          w="100%"
          bg="brand.800"
        />
      ) : (
        <Box
          h={{ base: '6rem', md: '13rem' }}
          bg="brand.800"
          color="white"
          display="grid"
          placeItems="center"
          fontWeight={700}
        >
          imagem
        </Box>
      )}

      {/* Corpo */}
      <VStack align="start" spacing={3} bg="white" p={{ base: 4, md: 5 }}>
        <Text as="p" fontWeight={800} color="brand.800" fontSize={{base:'1rem', md:'2xl'}} noOfLines={2}>
          {n.titulo}
        </Text>
        <Text as="p" fontWeight={300} lineHeight={1.6} color="brand.750" noOfLines={4} fontSize={{base:'1rem', md:'xl'}}>
          {n.resumo}
        </Text>

        <Button
          as={NextLink}
          href={n.href || '#'}
          size="sm"
          rounded="full"
          alignSelf="flex-start"
          px={10}
          bg="brand.800"
          color="white"
          _hover={{ bg: 'brand.700' }}
        >
          Saiba mais
        </Button>
      </VStack>
    </VStack>
  );
}
