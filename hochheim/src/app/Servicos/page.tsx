import NavBar from '../Components/NavBar';
import HeroBanner from '../Components/HeroBanner';
import Especialidades from '../Components/Especialidades';
import Footer from '../Components/Footer';
import HistoriaHochheim from '../Components/HistoriaHochheim';
import Fisioterapia from '../Components/Fisioterapia';
import StripedCTA  from '../Components/StripedCTA';
import ScrollToTopButton from '../Components/ScrollToTopButton'
import { ScrollFadeIn } from '../Components/ScrollFadeIn'

import { Box,} from '@chakra-ui/react';



export default function Servicos() {
  return (
    <>      
    <Box bg="brand.20">
      <ScrollFadeIn>
      <NavBar />
      <img src="/banner-servicos.png" alt="Banner Serviços" style={{ width: '100%'}} />
      </ScrollFadeIn>
        <ScrollFadeIn>
        <HistoriaHochheim
        iconSrc="/icons/saude.png"
        img1="/historia.png"
        img2="/historia.png"
      />
      </ScrollFadeIn>
      <ScrollFadeIn>
     <img src="/historia.png" alt="Banner Serviços" style={{ width: '100%', height: '50rem' }} />
     </ScrollFadeIn>
     <ScrollFadeIn>
    <Especialidades
        destaques={[
          { titulo: 'Reabilitação funcional', descricao: 'Programa de exercícios personalizados que visa melhorar o desempenho, pre-venir lesões e promover independência funcional, com versões específicas para atletas (pré-treino) e para o público 60+ (mobilidade, equilíbrio e prevenção de quedas).', image: '/historia.png' },
          { titulo: 'Palminhas posturais (convencionais e em impressão 3D)', descricao: 'Confeccionadas a partir de avaliação biomecânica e baropodométrica, aju-dam a corrigir padrões de pisada e distribuir melhor as cargas articulares. As palmilhas em impressão 3D ofere-cem ainda mais precisão no ajuste, proporcionando um encaixe total-mente personalizado ao formato dos pés e às necessidades específicas de cada paciente, com alta durabilidade e conforto.', image: '/historia.png' },
          { titulo: 'Acupuntura', descricao: 'Técnica da medicina integrativa que promove regulação neuromuscular e alívio de dores por meio de estímulos em pontos específicos.', image: '/historia.png' },
        ]}
        itens={[
          { titulo: 'Pilates', descricao: 'Método baseado em controle motor e respiração, indicado para melhora da estabilidade, mobilidade e fortalecimento muscular.', image: '/historia.png' },
          { titulo: 'DTM', descricao: 'Tratamento especializado para dor e disfunções na articulação da mandíbula, com foco em relaxamento muscular e rea-linhamento funcional.', image: '/historia.png' },
          { titulo: 'RPG', descricao: 'Terapia postural que atua sobre cadeias musculares, buscando o reequilíbrio do corpo por meio de posicionamentos guiados e respiração.', image: '/historia.png' },
          { titulo: 'Recovery Pump', descricao: 'Terapia de compressão pneu-mática intermitente, indicada para recuperação muscular, alívio de fadiga e melhora da circulação.', image: '/historia.png' },
          { titulo: 'Liberação Miofascial', descricao: 'Técnica manual aplicada para reduzir tensões, melhorar a mobilidade e restaurar a função muscular e articular.', image: '/historia.png' },
          { titulo: 'Ozonioterapia', descricao: 'Uso terapêutico do ozônio para fins anti-inflamatórios, analgési-cos e cicatrizantes, como recurso complementar à reabilitação.', image: '/historia.png' },
        ]}
      />
      </ScrollFadeIn>
      <ScrollFadeIn>
      <Fisioterapia />
      </ScrollFadeIn>
      <ScrollFadeIn>
      <StripedCTA faixaSrc="/Faixa.png" />
      </ScrollFadeIn>
      <ScrollToTopButton />
      <ScrollFadeIn>
        <Footer />
        </ScrollFadeIn>
        </Box>
    </>
  );
}
