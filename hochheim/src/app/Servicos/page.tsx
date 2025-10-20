import NavBar from '../Components/NavBar';
import HeroBanner from '../Components/HeroBanner';
import Forms from '../Components/Forms';
import Footer from '../Components/Footer';
import HistoriaHochheim from '../Components/HistoriaHochheim';

export default function Servicos() {
  return (
    <>
      <NavBar active="sobre" />
      <img src="/banner-servicos.png" alt="Banner Serviços" style={{ width: '100%', height: 'auto' }} />
        <HistoriaHochheim
        iconSrc="/icons/saude.png"
        img1="/historia.png"
        img2="/historia.png"
      />
     <img src="/historia.png" alt="Banner Serviços" style={{ width: '100%', height: '50rem' }} />

        <Footer />
    </>
  );
}
