import NavBar from './Components/NavBar';
import HeroBanner from './Components/HeroBanner';
import AboutSection from './Components/AboutSection';
import Diferenciais from './Components/Diferenciais';
import CallToAction from './Components/CallToAction';
import Orientacoes from './Components/OrientacaoAgendamento';
import Forms from './Components/Forms';






export default function Page() {
  return (
    <>
      <NavBar active="sobre" />
      <HeroBanner imageSrc="/banner.png" arrowSrc="/arrow.png" />
      <AboutSection iconSrc="/icons/iconeBolaExercicio.png" />
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
      <CallToAction />
      <Orientacoes
        iconAgenda="/icons/agenda.png"
        iconConvenio="/icons/convenio.png"
        bulletIcon="/icons/bullet-triangle.png"
      />
      <Forms/>
    </>
  );
}
