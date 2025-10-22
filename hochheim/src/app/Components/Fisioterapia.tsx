'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

type CardItem = { titulo: string; texto: string };

type Props = {
  titulo?: string;
  subtitulo?: string;
  itens?: CardItem[];
};

// Alturas personalizadas conforme o Figma
const imageHeights = {
  md: [
    '25rem', // 1ª coluna - cima
    '30rem', // 2ª coluna - cima
    '30rem', // 3ª coluna - cima
    '25rem', // 1ª coluna - baixo
  ],
  base: [
    '12rem', // valores reduzidos para mobile
    '12rem',
    '12rem',
    '12rem',
  ],
};

const imageMargins = {
  md: [
    '',       // imagem 1
    '', // imagem 2
    '-5rem',       // imagem 3
    '',
  ],
  base: ['0', '0', '0', '0', '0', '0'],
};

const DEFAULT_ITEMS: CardItem[] = [
  {
    titulo: 'Fisioterapia pélvica',
    texto:
      'Atuação especializada na reabilitação da musculatura do assoalho pélvico, indicada para incontinência urinária, disfunções sexuais, dores pélvicas e pós-parto.',
  },
  {
    titulo: 'Fisioterapia aquática',
    texto:
      'Realizada em piscina aqueci-da e tratada com ozônio, reduz o impacto articular e permite movimentos com menor dor, sendo indicada para casos ortopédicos, neurológicos e pós-operatórios.',
  },
  {
    titulo: 'Fisioterapia neurológica pós AVC',
    texto:
      'Protocolo técnico voltado à recuperação de movimentos, equilíbrio e autonomia funcional em pacientes que sofreram Acidente Vascular Cerebral.',
  },
  {
    titulo: 'Fisioterapia ortopédica',
    texto:
      'Foco na recuperação funcional de lesões musculo-esqueléticas, cirurgias ortopédicas, dores crônicas e disfunções articulares.',
  },
];

export default function Fisioterapia({
  titulo = 'Fisioterapia',
  subtitulo = 'Tratamentos com base em avaliação funcional, voltados à reabilitação, alívio da dor e melhora da mobilidade.',
  itens = DEFAULT_ITEMS,
}: Props) {
  return (
    <Box as="section" bg="brand.800" color="white" py={{ base: 12, md: 16 }}>
      <Container maxW={{ base: '92%', md: '70%', lg: '60%' }}>
        {/* Cabeçalho */}
        <VStack spacing={{ base:1, md: 3 }} textAlign="center" mb={{ base: 8, md: 10 }}>
          <Heading fontWeight={800} color={'brand.200'} fontSize={{ base: '1.4rem', md: '3rem' }}> {titulo}</Heading>
          <Text fontWeight={300} lineHeight={1.1} opacity={0.95} color={'brand.20'} fontSize={{ base: '1.2rem', md: '2rem' }} w={{base:'95%', md: '60%'}} mb={{base:4, md:0}}>
            {subtitulo}
          </Text>
        </VStack>

        {/* Grid de cards */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 4 }} >
          {itens.map((it, i) => (
            <VStack
              key={i}
              align="start"
              spacing={2}
              bg="brand.1000" // leve contraste
              p={{ base: 4, md: 6 }}
              rounded="20px"
              h={{ base: imageHeights.base[i], md: imageHeights.md[i] }}
              mt={{ base: imageMargins.base[i], md: imageMargins.md[i] }}
              justifyContent={'center'}
            >
              <Text as="p" fontWeight={800} color={'brand.200'} fontSize={{ base: 'lg', md: '1.5rem' }}>
                {it.titulo}
              </Text>
              <Text as="p" fontWeight={300} lineHeight={{base:1.2, md:1.7}} opacity={0.95} color={'brand.20'} fontSize={{ base: 'm', md: '1.6rem' }} textAlign={'justify'}>
                {it.texto}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
