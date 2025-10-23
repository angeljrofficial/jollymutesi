import aboutPortrait from '@/assets/about-portrait.jpg';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import ParallaxSection from './ParallaxSection';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-background via-secondary/5 to-accent/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/15 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Me</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            My Journey
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="left" className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              About Jolly Mutesi
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Jolly Mutesi is a Rwandan model, beauty queen, and activist who has become a powerful
                voice for change and empowerment across Africa. Crowned Miss Rwanda 2016, she
                represented Rwanda at Miss World 2016 and has since dedicated her platform to making a
                lasting impact on communities.
              </p>
              <p>
                With a passion for youth empowerment and women's advocacy, Jolly has led numerous
                initiatives focused on education, nutrition, and personal development. Her work extends
                from children's homes to national stages, where she inspires thousands through
                motivational speaking and mentorship programs.
              </p>
              <p>
                As Vice President of the Miss East Africa Pageant and a recipient of the Best
                Motivational Speaker award at the Zikomo Awards 2023, Jolly continues to break barriers
                and create opportunities for the next generation of leaders.
              </p>
            </div>

            {/* Inspiration Quote Card */}
            <motion.div
              className="mt-8 p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center gap-2 mb-3"
                whileHover={{ scale: 1.05 }}
              >
                <Quote className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-primary tracking-wide">INSPIRATION</span>
              </motion.div>
              <p className="text-foreground/90 italic text-base leading-relaxed font-medium">
                "Empowerment begins with belief in yourself and extends to uplifting others."
              </p>
              <p className="text-muted-foreground text-sm mt-3 font-semibold">— Jolly Mutesi</p>
            </motion.div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="order-1 md:order-2">
            <ParallaxSection offset={30}>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-gold rounded-lg opacity-20 blur-xl"
                  animate={{ opacity: [0.15, 0.25, 0.15] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
                <img
                  src="https://umuryango.rw/local/cache-vignettes/L487xH604/arton62671-64216.png?1707947245"
                  alt="Jolly Mutesi professional portrait"
                  className="relative rounded-lg shadow-elegant w-full object-cover aspect-[3/4]"
                  style={{ filter: 'brightness(1.1) contrast(1.1) saturate(1.1)' }}
                />
              </motion.div>
            </ParallaxSection>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
