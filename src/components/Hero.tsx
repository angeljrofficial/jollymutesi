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
<<<<<<< HEAD
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-secondary/30 rounded-full blur-lg"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-accent/40 rounded-full blur-md"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
=======
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
<<<<<<< HEAD
        <source src="https://video.twimg.com/amplify_video/1970118913632407552/vid/avc1/2160x3840/QJ8bNpjyhbGXIg1b.mp4" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/30 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <AnimatedText
            text="Jolly Mutesi"
            className="text-5xl md:text-7xl font-display font-bold mb-2 leading-tight text-shadow-lg"
          />
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="text-xl md:text-2xl font-light mb-6 tracking-wide min-h-[2rem]"
=======
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <AnimatedText
          text="Jolly Mutesi"
          className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
        />
        <motion.div 
          className="text-xl md:text-2xl font-light mb-4 tracking-wide min-h-[2rem]"
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
<<<<<<< HEAD
          <TypingEffect texts={typingTexts} className="text-primary drop-shadow-lg" />
        </motion.div>
        <motion.div
=======
          <TypingEffect texts={typingTexts} className="text-primary" />
        </motion.div>
        <motion.div 
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base mb-12 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
<<<<<<< HEAD
          <motion.span
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
=======
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0 }}
            />
            Miss Rwanda 2016
          </motion.span>
          <span className="hidden md:block">|</span>
<<<<<<< HEAD
          <motion.span
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
=======
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            />
<<<<<<< HEAD
            Miss World Representative
          </motion.span>
          <span className="hidden md:block">|</span>
          <motion.span
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
=======
            Miss World 2016 Representative
          </motion.span>
          <span className="hidden md:block">|</span>
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            />
            Motivational Speaker
          </motion.span>
          <span className="hidden md:block">|</span>
<<<<<<< HEAD
          <motion.span
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
=======
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
            />
            Youth Advocate
          </motion.span>
        </motion.div>

<<<<<<< HEAD
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
=======
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
<<<<<<< HEAD
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-2xl transition-all duration-300 px-8 py-3 text-lg font-semibold"
=======
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant transition-smooth"
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
              onClick={() => scrollToSection('#projects')}
            >
              See My Work
            </Button>
          </motion.div>
<<<<<<< HEAD
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-foreground transition-all duration-300 backdrop-blur-sm bg-white/10 px-8 py-3 text-lg font-semibold"
=======
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground transition-smooth"
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
              onClick={() => scrollToSection('#contact')}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection('#about')}
<<<<<<< HEAD
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer hover:text-primary transition-all duration-300 group"
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300"
          animate={{ boxShadow: ['0 0 20px rgba(255,255,255,0.1)', '0 0 30px rgba(255,255,255,0.3)', '0 0 20px rgba(255,255,255,0.1)'] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
=======
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer hover:text-primary transition-smooth"
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="h-8 w-8" />
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
      </motion.button>
    </section>
  );
};

export default Hero;
