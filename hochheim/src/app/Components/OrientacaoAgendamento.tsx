'use client';

import {
  Box,
  Container,
  Heading,
  HStack,
  VStack,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react';

type OrientacoesProps = {
  iconAgenda?: string;   // ex.: '/icons/agenda.png'
  iconConvenio?: string; // ex.: '/icons/convenio.png'
  bulletIcon?: string;   // ex.: '/icons/bullet-triangle.png'
};

const Bullet = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
  <HStack align="start" spacing={3}>
    <Image src={icon} alt="" w="12px" h="12px" mt="10px" draggable={false} />
    <Text fontSize={{ base: 'lg', md: '3vh' }} lineHeight={{base:'1', md:'1.5'}} fontWeight="100"color="brand.800" mb={3}>
      {children}
    </Text>
  </HStack>
);

export default function Orientacoes({
  iconAgenda = '/icons/agenda.png',
  iconConvenio = '/icons/convenio.png',
  bulletIcon = '/icons/bullet.png',
}: OrientacoesProps) {
  return (
    <Box as="section" bg="white" py={{ base: 10, md: 16 }} display={'flex'} flexDirection={"column"}>
      <Container maxW={{ base: '92%', md: '70%', lg: '60%' }}>
        {/* Título */}

          {/* Título com filete à esquerda */}
          <HStack spacing={4}  justifyContent={"flex-start"} gap={'2rem'}>
            <Box w="15rem" h="1rem" bg="brand.200" />
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '5xl' }}
              color="brand.800"
            >
              Agendamentos e orientações:
            </Heading>
          </HStack>

        {/* Subtítulo/intro */}
        <Text 
        fontSize={{ base: 'lg', md: '2rem' }}
        lineHeight={{base:'1', md:'1.5'}}
        fontWeight="100"color="brand.800"  
        mt={10}
        mb={6}>
          Nosso compromisso é oferecer um <b>atendimento organizado, pontual</b> e com
          <b> excelência técnica</b>. Para garantir a melhor experiência possível, observe as
          orientações abaixo:
        </Text>

        <Stack spacing={10}>

          {/* Bloco 1 */}
          <HStack align="start" spacing={4} flexDirection={'column'}>
            <Box display={'flex'} flexDirection={"row"} alignItems={'flex-start'} gap={"2rem"}>
            <Box
              w={{ base: '1rem', md: '5rem' }}
              h="46px"
              rounded="full"
              display="grid"
              placeItems="center"
              flexShrink={0}
            >
              <Image src={iconAgenda} alt=""  draggable={false} />
            </Box>

            <VStack align="start" spacing={4} >
            <Text 
                fontSize={{ base: 'lg', md: '2rem' }}
                lineHeight={{base:'1', md:'1.5'}}
                fontWeight="100" color="brand.800"  
                mb={6}>
                Recomendamos que a sua <b>consulta ou retorno</b> seja{' '}
                <b>agendado com antecedência</b>.
              </Text>
              </VStack>
            </Box>
              <VStack align="stretch" spacing={3} >
                <Bullet icon={bulletIcon} >
                  Caso não possa comparecer, pedimos que nos avise com a maior antecedência possível.
                </Bullet>
                <Bullet icon={bulletIcon}>
                  <b>Chegue com 15 minutos de antecedência</b>, especialmente em atendimentos com convênio,
                  para preenchimento das guias.
                </Bullet>
                <Bullet icon={bulletIcon}>
                  Mantemos uma <b>tolerância máxima de 10 minutos</b> de atraso, em respeito aos demais
                  horários já agendados.
                </Bullet>
                <Bullet icon={bulletIcon}>
                  <b>Na primeira consulta</b>, traga todos os exames, laudos e prescrições médicas que possuir.
                </Bullet>
                <Bullet icon={bulletIcon}>
                  Retornos para análise de exames devem ser <b>agendados previamente</b> — não realizamos esse
                  tipo de atendimento sem marcação.
                </Bullet>
                <Bullet icon={bulletIcon}>
                  Para realizar suas sessões, é obrigatória a apresentação do <b>cronograma de horários</b>,
                  entregue no dia da avaliação.
                </Bullet>
              </VStack>
          </HStack>

          {/* Bloco 2 */}
           <HStack align="start" spacing={10} flexDirection={'column'}>
            <Box display={'flex'} flexDirection={"row"} alignItems={'flex-start'} gap={"2rem"}>
            <Box
              w={{ base: '1rem', md: '5rem' }}
              h="46px"
              rounded="full"
              display="grid"
              placeItems="center"
              flexShrink={0}
            >
              <Image src={iconConvenio} alt=""  draggable={false} />
            </Box>

            <VStack align="start" spacing={4}>
            <Text 
                fontSize={{ base: 'lg', md: '2rem' }}
                lineHeight={{base:'1', md:'1.5'}}
                fontWeight="300"color="brand.800"  
                mb={6}>
                Se o atendimento for via <b>convênio</b>, não se esqueça de trazer:
              </Text>
              </VStack>
            </Box>

              <VStack align="stretch" spacing={3}>
            <Text 
                fontSize={{ base: 'lg', md: '2rem' }}
                lineHeight={{base:'1', md:'1.5'}}
                fontWeight="300"color="brand.800"  
                >
                <Bullet icon={bulletIcon}>Carteirinha atualizada;</Bullet>                </Text>

                <Bullet icon={bulletIcon}>Documento de identidade.</Bullet>
              </VStack>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
