'use client';

import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  VStack,
} from '@chakra-ui/react';

type HistoriaHochheimProps = {
  iconSrc?: string;
  img1?: string;
  img2?: string;
};

export default function HistoriaHochheim({
  iconSrc = '/icons/saude.png', // troque pelo seu ícone
  img1 = '/images/hist-1.jpg',
  img2 = '/images/hist-2.jpg',
}: HistoriaHochheimProps) {
  return (
    <Box as="section" bg="brand.20" color="brand.800" py={{ base: 10, md: 16 }}>
      <Container maxW={{ base: '92%', md: '70%', lg: '58%' }}>
        <VStack spacing={{ base: 6, md: "4rem" }} align="stretch">

          {/* Ícone topo */}
          <Box display="grid" placeItems="center" pb={2}>
            <Image src={iconSrc}
            alt="Ícone fisioterapia"
            h={{ base: '5rem', md: '10rem' }}
            w="auto"
            draggable={false} />
          </Box>

          {/* Parágrafo 1 */}
          <Box as="p" fontWeight={300} fontSize={{ base: 'lg', md: '2rem' }} lineHeight={{base:'1', md:'1.5'}} textAlign={'justify'}>
            A <Box as="span" fontWeight="bold">Clínica Hochheim</Box> nasceu da visão
            empreendedora da fisioterapeuta <Box as="span" fontWeight="bold">Ana Paula Hochheim</Box>,
            ainda durante sua formação acadêmica. Apaixonada por fisioterapia aquática, ela retornou
            a Blumenau com o desejo de implementar essa especialidade em sua cidade natal — tornando-se
            pioneira na região do Vale do Itajaí.
          </Box>

          {/* Bloco 1 — imagem à esquerda, texto à direita */}
          <Grid templateColumns={{ base: '1fr', md: '20rem 1fr' }} gap={5} alignItems="start">
            <GridItem>
              <MediaBox src={img1} />
            </GridItem>
            <GridItem>
              <Box as="p" fontWeight={300} fontSize={{ base: 'lg', md: '2rem' }} lineHeight={{base:'1', md:'1.5'}} textAlign={'justify'}>
                Com apoio da família e dedicação total, o projeto tornou-se realidade em
                <Box as="span" fontWeight="bold"> 24 de março de 2003</Box>, dando início a uma
                trajetória marcada por excelência clínica, expansão estruturada e evolução constante.
              </Box>
            </GridItem>
          </Grid>

          {/* Bloco 2 — texto à esquerda, imagem à direita */}
          <Grid templateColumns={{ base: '1fr', md: '1fr 20rem' }} gap={5} alignItems="start">
            <GridItem>
              <Box as="p" fontWeight={300} fontSize={{ base: 'lg', md: '2rem' }} lineHeight={{base:'1', md:'1.5'}} textAlign={'justify'}>
                Ao longo dos anos, a clínica ampliou seu portfólio com foco em especialidades técnicas,
                e criou unidades dedicadas como o <Box as="span" fontWeight="bold">Hochheim Kids</Box>,
                voltado à natação infantil, e o <Box as="span" fontWeight="bold">Day Spa Hochheim</Box>,
                espaço voltado ao cuidado terapêutico com conforto e exclusividade.
              </Box>
            </GridItem>
            <GridItem>
              <MediaBox src={img2} />
            </GridItem>
          </Grid>

          {/* Parágrafo final */}
          <Box as="p" fontWeight={300} fontSize={{ base: 'lg', md: '2rem' }} lineHeight={{base:'1', md:'1.5'}} textAlign={'justify'}>
            Hoje, com <Box as="span" fontWeight="bold">três unidades</Box>, uma estrutura moderna e
            uma equipe multidisciplinar qualificada, a Clínica Hochheim é referência regional em
            <Box as="span" fontWeight="bold"> fisioterapia e reabilitação funcional</Box> — mantendo
            sua essência: inovação, profissionalismo e compromisso com qualidade de vida.
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

/** Bloco reutilizável de mídia com cantos grandes e fallback */
function MediaBox({ src }: { src?: string }) {
  if (!src) {
    return (
      <Box
        bg="brand.800"
        color="white"
        rounded="20px"
        display="grid"
        placeItems="center"
        fontWeight="600"
        opacity={0.9}
      >
        imagem
      </Box>
    );
  }
  return (
    <Image
      src={src}
      alt=""
      w="100%"
      objectFit="cover"
      borderRadius="20px"
      draggable={false}
    />
  );
}
