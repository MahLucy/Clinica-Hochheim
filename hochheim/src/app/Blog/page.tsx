import NavBar from '../Components/NavBar';
import HeroBanner from '../Components/HeroBanner';
import Especialidades from '../Components/Especialidades';
import Footer from '../Components/Footer';
import HistoriaHochheim from '../Components/HistoriaHochheim';
import Fisioterapia from '../Components/Fisioterapia';
import StripedCTA  from '../Components/StripedCTA';
import UltimasNoticias from '../Components//UltimasNoticias';
import ScrollToTopButton from '../Components/ScrollToTopButton'
import { ScrollFadeIn } from '../Components/ScrollFadeIn'

import { Box,} from '@chakra-ui/react';

export default function Blog() {
  return (
    <>
    <Box bg="brand.20">
      <ScrollFadeIn>
      <NavBar />
      <img src="/banner-servicos.png" alt="Banner Serviços" style={{ width: '100%', height: 'auto' }} />
      </ScrollFadeIn>
        <ScrollFadeIn>
      <UltimasNoticias
      noticias={[
        { id: 1, titulo: 'Notícia 01', resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', imagem: '/news/01.jpg', href: '/blog/noticia-01' },
        { id: 2, titulo: 'Notícia 02', resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', imagem: '/news/02.jpg', href: '/blog/noticia-02' },
        { id: 3, titulo: 'Notícia 03', resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', imagem: '/news/03.jpg', href: '/blog/noticia-03' },
        { id: 4, titulo: 'Notícia 04', resumo: 'Mais Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', imagem: '/news/04.jpg', href: '/blog/noticia-04' },
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
