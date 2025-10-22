// src/app/kids/page.tsx (exemplo de rota)
// *Não precisa de "use client" aqui*

import NavBar from '../Components/NavBar';
import AboutKids from '../Components/AboutKids';
import { ScrollFadeIn } from '../Components/ScrollFadeIn';
import GradeImagens from '../Components/GradeImagens';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import Footer from '../Components/Footer';
import NatacaoKids from '../Components/NatacaoKids';
import Depoimentos from '../Components/Depoimentos';

import {
  Box,
  Container,
  HStack,
  Image,
} from '@chakra-ui/react';

export default function Page() {
  return (
    <>
    <Box bg={'brand.20'}>
  <ScrollFadeIn>
        <NavBar />
        {/* se preferir, use <Image> do Chakra */}
        <img
          src="/banner-kids.png"
          alt="Banner Serviços"
          style={{ width: '100%', display: 'block' }}
          draggable={false}
        />
      </ScrollFadeIn>

      {/* Bloco “Sobre” */}
      <ScrollFadeIn>
        <AboutKids iconSrc="/icons/natacao.png" />
      </ScrollFadeIn>

      {/* Aviso / orientação com ícone */}
      <Box as="section" py={{ base: 10, md: 16 }}>
        <Container maxW={{ base: '92%', md: '70%', lg: '60%' }}>
          <HStack align="start" spacing={{ base: 4, md: 6 }}>
            <Box
              w={{ base: '5rem', md: '12rem' }}
              h="46px"
              rounded="full"
              display="grid"
              placeItems="center"
              flexShrink={0}
            >
              <Image src="/icons/coracao.png" alt="" draggable={false} w={'12rem'}/>
            </Box>

            <Box
              as="p"
              fontSize={{ base: 'lg', md: '3rem' }}
              lineHeight={{ base: '1.2', md: '1.5' }}
              fontWeight="800"
              color="brand.800"
              mb={0}
              
            >
              Aqui, aprender a nadar é sinônimo de bem-estar, segurança e autoconfiança.
            </Box>
          </HStack>
        </Container>
      </Box>

      {/* Grade de imagens */}
      <ScrollFadeIn>
        <GradeImagens
          images={[
            '/dif-1.png',
            '/dif-2.png',
            '/dif-3.png',
            '/dif-4.png',
            '/dif-5.png',
            '/dif-6.png',
          ]}
        />
      </ScrollFadeIn>
     <ScrollFadeIn>
      <NatacaoKids />
       </ScrollFadeIn>
      <ScrollToTopButton />
      <ScrollFadeIn>
                  <Depoimentos
              itens={[
                { nome: 'Nome', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident.' },
                { nome: 'Nome', texto: 'ELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident.ELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ', marginTop: '3rem' },
                { nome: 'Nome', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident.' },
              ]}
              />
            </ScrollFadeIn>
      {/* Rodapé */}
      <ScrollFadeIn>
        <Footer />
      </ScrollFadeIn>
      </Box>
    </>
  );
}
