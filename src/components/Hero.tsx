import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-image.jpg';
import AnimatedText from './AnimatedText';
import TypingEffect from './TypingEffect';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typingTexts = [
    'Beauty Queen',
    'Motivational Speaker',
    'Youth Advocate',
    'Community Leader',
    'Change Maker'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <AnimatedText
          text="Jolly Mutesi"
          className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
        />
        <motion.div 
          className="text-xl md:text-2xl font-light mb-4 tracking-wide min-h-[2rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <TypingEffect texts={typingTexts} className="text-primary" />
        </motion.div>
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base mb-12 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0 }}
            />
            Miss Rwanda 2016
          </motion.span>
          <span className="hidden md:block">|</span>
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            />
            Miss World 2016 Representative
          </motion.span>
          <span className="hidden md:block">|</span>
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            />
            Motivational Speaker
          </motion.span>
          <span className="hidden md:block">|</span>
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
            />
            Youth Advocate
          </motion.span>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant transition-smooth"
              onClick={() => scrollToSection('#projects')}
            >
              See My Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground transition-smooth"
              onClick={() => scrollToSection('#contact')}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer hover:text-primary transition-smooth"
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default Hero;
