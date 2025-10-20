'use client';

import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';

import instagram from '../../../public/icons/instagram.png';
import whatsapp from '../../../public/icons/whatsapp.png';
import linkedin from '../../../public/icons/linkedin.png';



export default function Footer() {
  return (
    <Box as="footer" bg="brand.750" color="white" py={{ base: 10, md: 12 }}>
      <Container maxW={{ base: '92%', md: '80%', lg: '75%' }}>
        {/* Área principal */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={10}
          textAlign={{ base: 'center', md: 'left' }}
          alignItems="center"
        >
          {/* Coluna 1 - Logo + frase */}
          <GridItem>
            <VStack
              spacing={3}
              align={{ base: 'center', md: 'start' }}
              justify="center"
              width={'100%'}
            >
              <Image
                src="/logo.png"
                alt="Logo Hochheim"
                w="150px"
                draggable={false}
              />
              <Text
                fontSize={{ base: 'sm', md: '1.5rem' }}
                maxW="20rem"
                lineHeight="1.5"
                opacity={0.9}
                fontWeight={100}
              >
                Cuidado técnico, estrutura completa e foco absoluto na sua saúde.
              </Text>
            </VStack>
          </GridItem>

          {/* Coluna 2 - Menu rápido */}
          <GridItem>
            <VStack
              spacing={2}
              align={{ base: 'center', md: 'center' }}
              justify="center"
              alignItems={'center'}
            >
              <Text
                as="h3"
                fontWeight="800"
                textTransform="uppercase"
                mb={2}
                borderBottom="2px solid white"
                display="inline-block"
                fontSize={"2xl"}

              >
                Menu Rápido
              </Text>
              <Link href="#sobre" _hover={{ textDecoration: 'underline' }} fontSize={"2xl"} fontWeight={100}>
                Sobre
              </Link>
              <Link href="#servicos" _hover={{ textDecoration: 'underline' }} fontSize={"2xl"} fontWeight={100}>
                Serviços
              </Link>
              <Link href="#blog" _hover={{ textDecoration: 'underline' }} fontSize={"2xl"} fontWeight={100}>
                Blog
              </Link>
              <Link href="#kids" _hover={{ textDecoration: 'underline' }} fontSize={"2xl"} fontWeight={100}>
                Kids Hochheim
              </Link>
            </VStack>
          </GridItem>

          {/* Coluna 3 - Contato + redes */}
          <GridItem>
            <VStack
              spacing={0}
              align={{ base: 'center', md: 'center' }}
              justify="center"
            >
              <Text fontSize={"2xl"} fontWeight={100}>Blumenau - SC</Text>
              <Text fontSize={"2xl"} fontWeight={100}>email@email.com.br</Text>
              <Text fontSize={"2xl"} fontWeight={100}>47 99999-9999</Text>

              <HStack spacing={3} pt={2}>
                 <Link href="#" _hover={{ opacity: 0.8 }}>
                  <Image
                    src={linkedin.src}
                    alt="LinkedIn"
                    boxSize="50px"
                    draggable={false}
                  />
                </Link>
                <Link href="#" _hover={{ opacity: 0.8 }}>
                  <Image
                    src={whatsapp.src}
                    alt="WhatsApp"
                    boxSize="50px"
                    draggable={false}
                  />
                </Link>
                <Link href="#" _hover={{ opacity: 0.8 }}>
                  <Image
                    src={instagram.src}
                    alt="Instagram"
                    boxSize="50px"
                    draggable={false}
                  />
                </Link>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>

        {/* Linha inferior */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          mt={10}
          pt={6}
          fontSize="xl"
          opacity={0.85}
        >
          <Text textAlign={{ base: 'center', md: 'left' }}>
            Copyright © todos os direitos reservados
          </Text>
          <Text textAlign={{ base: 'center', md: 'right' }}>
            Desenvolvido por <b>Agência Publiquei</b>
          </Text>
        </Grid>
      </Container>
    </Box>
  );
}
