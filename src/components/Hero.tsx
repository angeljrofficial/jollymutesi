import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
          Jolly Mutesi
        </h1>
        <div className="text-xl md:text-2xl font-light mb-4 tracking-wide">
          Beauty, Leadership & Empowerment
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base mb-12 text-gray-200">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Miss Rwanda 2016
          </span>
          <span className="hidden md:block">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Miss World 2016 Representative
          </span>
          <span className="hidden md:block">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Motivational Speaker
          </span>
          <span className="hidden md:block">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Youth Advocate
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant transition-smooth"
            onClick={() => scrollToSection('#projects')}
          >
            See My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-foreground transition-smooth"
            onClick={() => scrollToSection('#contact')}
          >
            Contact Me
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-primary transition-smooth"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
