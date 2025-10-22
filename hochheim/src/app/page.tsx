import NavBar from './Components/NavBar';
import HeroBanner from './Components/HeroBanner';
import AboutSection from './Components/AboutSection';
import Diferenciais from './Components/Diferenciais';
import CallToAction from './Components/CallToAction';
import Orientacoes from './Components/OrientacaoAgendamento';
import Forms from './Components/Forms';
import Depoimentos from './Components/Depoimentos';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton'
import { ScrollFadeIn } from './Components/ScrollFadeIn'

import { Box,} from '@chakra-ui/react';


export default function Page() {
  return (
    <>
    <Box bg="brand.20">
    <ScrollFadeIn>
      <NavBar />
      <HeroBanner imageSrc="/banner.png" arrowSrc="/arrow.png" />
      </ScrollFadeIn>
      <ScrollFadeIn>
      <AboutSection iconSrc="/icons/iconeBolaExercicio.png" />      
      </ScrollFadeIn>
      <ScrollFadeIn>
      <Diferenciais
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
      <CallToAction />
      </ScrollFadeIn>
      <ScrollFadeIn>
      <Orientacoes
        iconAgenda="/icons/agenda.png"
        iconConvenio="/icons/convenio.png"
        bulletIcon="/icons/bullet-triangle.png"
      />
      </ScrollFadeIn> 
      <ScrollFadeIn>
         <Box
      as="section"
      id="contato" 
      >
      <Forms/>
      </Box>
      </ScrollFadeIn>
      <ScrollFadeIn>
            <Depoimentos
        itens={[
          { nome: 'Nome', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident.' },
          { nome: 'Nome', texto: 'ELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident.ELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ', marginTop: '3rem' },
          { nome: 'Nome', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident.' },
        ]}
        />
      </ScrollFadeIn>
        <ScrollToTopButton />
         <ScrollFadeIn>
        <Footer />
        </ScrollFadeIn>
        </Box>
    </>
  );
}
