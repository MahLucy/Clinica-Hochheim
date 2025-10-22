'use client';

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
  Image,
  Text,
  HStack,
  SystemStyleObject,
} from '@chakra-ui/react';

type Especialidade = {
  titulo: string;
  descricao: string;
  image?: string;
};

type OrientacoesProps = {
  iconAgenda?: string;   // ex.: '/icons/agenda.png'
  iconConvenio?: string; // ex.: '/icons/convenio.png'
  bulletIcon?: string;   // ex.: '/icons/bullet-triangle.png'
};

type Props = {
  // agora está coerente com o default (3 itens)
  destaques?: [Especialidade, Especialidade, Especialidade];
  itens?: Especialidade[]; // os demais (grade 2 colunas)
};

type DescricaoProps = {
  titulo: string;
  texto: string;
  tituloStyle?: SystemStyleObject;
  textoStyle?: SystemStyleObject;
};

const placeholder = (h: string | number = '180px') => (
  <Box
    bg="brand.800"
    color="white"
    h={h}
    rounded="20px"
    display="grid"
    placeItems="center"
    fontWeight={600}
    opacity={0.95}
  >
    imagem
  </Box>
);

const Bullet = ({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) => (
  <HStack align="start" spacing={3}>
    <Image src={icon} alt="" w="12px" h="12px" mt="10px" draggable={false} />
    <Box
      as="p"
      fontSize={{ base: 'lg', md: '3vh' }}
      lineHeight={{ base: '1', md: '1.5' }}
      fontWeight={100}
      color="brand.800"
      mb={3}
    >
      {children}
    </Box>
  </HStack>
);

export default function Especialidades({
  destaques = [
    {
      titulo: 'Reabilitação funcional',
      descricao:
        'Programa de exercícios personalizados focados na restauração do movimento, prevenção de lesões e promoção da independência funcional no dia a dia.',
      image: '', // ex.: '/images/funcional.jpg'
    },
    {
      titulo: 'Palminhas posturais',
      descricao:
        'Confeccionadas a partir de avaliação biomecânica, auxiliam no alinhamento e conforto dos pés, contribuindo para melhor distribuição de cargas.',
      image: '',
    },
    {
      titulo: 'Acupuntura',
      descricao:
        'Técnica da medicina integrativa que promove regulação neuromuscular e alívio de dores por meio de estímulos em pontos específicos.',
      image: '',
    },
  ],
  itens = [
    {
      titulo: 'Pilates',
      descricao:
        'Método baseado em controle motor e respiração, indicado para melhora da estabilidade, mobilidade e fortalecimento muscular.',
      image: '',
    },
    {
      titulo: 'DTM',
      descricao:
        'Tratamento especializado para disfunções da articulação temporomandibular, com foco em alívio da dor e restabelecimento funcional.',
      image: '',
    },
    {
      titulo: 'RPG',
      descricao:
        'Reeducação postural global para correções de assimetrias, melhora do alinhamento e prevenção de sobrecargas.',
      image: '',
    },
    {
      titulo: 'Recovery Pump',
      descricao:
        'Tecnologia de compressão pneumática para recuperação muscular, redução de fadiga e melhora da circulação.',
      image: '',
    },
    {
      titulo: 'Liberação Miofascial',
      descricao:
        'Técnica manual aplicada para aliviar tensões, melhorar a mobilidade e restaurar a função músculo-articular.',
      image: '',
    },
    {
      titulo: 'Ozonioterapia',
      descricao:
        'Uso terapêutico de ozônio para fins anti-inflamatórios, analgésicos e cicatrizantes, como complemento a tratamentos.',
      image: '',
    },
  ],
}: Props) {
  return (
    <Box as="section" bg="brand.20" py={{ base: 12, md: 16 }}>
      <Container maxW={{ base: '92%', md: '75%', lg: '60%' }}>
        {/* Título com filete à esquerda */}
        <HStack
          spacing={4}
          justifyContent="flex-start"
          gap={{ base: '1rem', md: '2rem' }}
          marginBottom={20}
        >
          <Box w={{ base: '5rem', md: '15rem' }} h="1rem" bg="brand.200" />
          <Heading as="h2" fontSize={{ base: '2xl', md: '5xl' }} color="brand.800">
            Especialidades
          </Heading>
        </HStack>

        {/* Destaque 1 (texto à esquerda, imagem à direita) */}
        <Grid
          templateColumns={{ base: '1fr', md: '1.1fr 0.9fr' }}
          gap={{ base: 4, md: 6 }}
          mb={{ base: 8, md: 10 }}
          alignItems="center"
        >
          <Descricao
            titulo={destaques[0].titulo}
            texto={destaques[0].descricao}
            tituloStyle={{
              fontWeight: 600,
              fontSize: { base: 'xl', md: '3xl' },
              color: 'brand.750',
            }}
            textoStyle={{
              fontWeight: 100,
              fontSize: { base: 'lg', md: '1.5rem' },
              lineHeight: { base: '1.2', md: '1.5' },
              textAlign: 'justify',
              color: 'brand.800',
            }}
          />
          <GridItem>
            {destaques[0].image ? (
              <Image
                src={destaques[0].image}
                alt={destaques[0].titulo}
                w="100%"
                h={{ base: '200px', md: '30rem' }}
                objectFit="cover"
                borderRadius="20px"
                draggable={false}
              />
            ) : (
              placeholder('220px')
            )}
          </GridItem>
        </Grid>

        {/* Destaque 2 (imagem à esquerda, texto à direita) */}
        <Grid
          templateColumns={{ base: '1fr', md: '0.9fr 1.1fr' }}
          gap={{ base: 4, md: 6 }}
          mb={{ base: 8, md: 20 }}
          alignItems="center"
        >
          <GridItem>
            {destaques[1].image ? (
              <Image
                src={destaques[1].image}
                alt={destaques[1].titulo}
                w="100%"
                h={{ base: '200px', md: '30rem' }}
                objectFit="cover"
                borderRadius="20px"
                draggable={false}
              />
            ) : (
              placeholder('220px')
            )}
          </GridItem>
          <Descricao
            titulo={destaques[1].titulo}
            texto={destaques[1].descricao}
            tituloStyle={{
              fontWeight: 600,
              fontSize: { base: 'xl', md: '3xl' },
              color: 'brand.750',
            }}
            textoStyle={{
              fontWeight: 100,
              fontSize: { base: 'lg', md: '1.5rem' },
              lineHeight: { base: '1.2', md: '1.5' },
              textAlign: 'justify',
              color: 'brand.800',
            }}
          />
        </Grid>

        {/* Grade 2 colunas com os demais itens */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 7 }}>
          {itens.map((esp, i) => (
            <CardItem key={i} data={esp} />
          ))}
        </SimpleGrid>

        {/* Destaque 3 (texto à esquerda, imagem à direita) */}
        <Grid
          templateColumns={{ base: '1fr', md: '1.1fr 0.9fr' }}
          gap={{ base: 4, md: 6 }}
          mb={{ base: 8, md: 10 }}
          mt={{ base: 8, md: 20 }}
          alignItems="center"
        >
          <Descricao
            titulo={destaques[2].titulo}
            texto={destaques[2].descricao}
            tituloStyle={{
              fontWeight: 600,
              fontSize: { base: 'xl', md: '3xl' },
              color: 'brand.750',
            }}
            textoStyle={{
              fontWeight: 100,
              fontSize: { base: 'lg', md: '1.5rem' },
              lineHeight: { base: '1.2', md: '1.5' },
              textAlign: 'justify',
              color: 'brand.800',
            }}
          />
          <GridItem>
            {destaques[2].image ? (
              <Image
                src={destaques[2].image}
                alt={destaques[2].titulo}
                w="100%"
                h={{ base: '200px', md: '30rem' }}
                objectFit="cover"
                borderRadius="20px"
                draggable={false}
              />
            ) : (
              placeholder('220px')
            )}
          </GridItem>
        </Grid>

        {/* Bloco de avaliação/biomecânica */}
        <HStack align="start" spacing={4} flexDirection="column">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={{ base: '1rem', md: '2rem' }}
          >
            <Box
              w={{ base: '3rem', md: '5rem' }}
              rounded="full"
              display="grid"
              placeItems="center"
              flexShrink={0}
            >
              <Image src="/icons/Bioimpedancia.png" alt="" draggable={false} />
            </Box>

            <Box
              as="p"
              fontSize={{ base: 'lg', md: '2rem' }}
              lineHeight={{ base: '1', md: '1.5' }}
              fontWeight="100"
              color="brand.800"
            >
              Realizamos <b>Avaliação Física, Biomecânica e Funcional.</b>
            </Box>
          </Box>

          <VStack align="stretch" spacing={3} >
            <Box
              as="p"
              fontSize={{ base: 'lg', md: '3vh' }}
              lineHeight={{ base: '1', md: '1.5' }}
              fontWeight={100}
              color="brand.800"
            >
              Exame clínico detalhado que analisa postura, controle motor e
              padrões de movimento.
            </Box>
            <Bullet icon="/icons/bullet-triangle.png">
              Essencial para identificar disfunções e orientar condutas
              terapêuticas com <Box as="span" fontWeight="bold">precisão.</Box>
            </Bullet>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
}

function Descricao({ titulo, texto, tituloStyle, textoStyle }: DescricaoProps) {
  return (
    <GridItem>
      <VStack align="start" spacing={2}>
        <Text as="p" sx={tituloStyle}>
          {titulo}
        </Text>
        <Box as="p" sx={textoStyle}>
          {texto}
        </Box>
      </VStack>
    </GridItem>
  );
}

function CardItem({ data }: { data: Especialidade }) {
  return (
    <VStack align="start" spacing={3}>
      {data.image ? (
        <Image
          src={data.image}
          alt={data.titulo}
          w="100%"
          h={{ base: '140px', md: '20rem' }}
          objectFit="cover"
          borderRadius="16px"
          draggable={false}
        />
      ) : (
        placeholder('160px')
      )}
      <Text
        as="p"
        fontWeight={600}
        fontSize={{ base: 'lg', md: '1.7rem' }}
        lineHeight={{ base: '1.2', md: '1.5' }}
        color="brand.750"
      >
        {data.titulo}
      </Text>
      <Box
        as="p"
        color="brand.800"
        fontWeight={100}
        fontSize={{ base: 'lg', md: '1.5rem' }}
        lineHeight={{ base: '1.2', md: '1.5' }}
      >
        {data.descricao}
      </Box>
    </VStack>
  );
}
