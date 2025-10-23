import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Speaking from '@/components/Speaking';
import MediaPress from '@/components/MediaPress';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <VisionMission />
      <Achievements />
      <Projects />
      <Speaking />
      <MediaPress />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
