import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/15 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Vision & Mission</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            My Purpose
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
          <RevealOnScroll direction="left">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">My Vision</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  To create a world where every young woman believes in her power to lead, innovate, and transform her community. A world where beauty pageants are not just about crowns, but about cultivating confident leaders who drive positive change.
                </p>
              </motion.div>

              <motion.div
                className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl border border-secondary/20"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-4">My Mission</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  To empower young women across Africa and beyond through mentorship, education, and advocacy. To break barriers, challenge stereotypes, and create opportunities for the next generation of leaders to rise with confidence, courage, and compassion.
                </p>
              </motion.div>
            </motion.div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg opacity-20 blur-xl"
                animate={{ opacity: [0.15, 0.25, 0.15] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <div className="relative bg-gradient-to-br from-background to-secondary/5 p-8 rounded-2xl border border-primary/10">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  >
                    <span className="text-2xl">💫</span>
                  </motion.div>
                  <h4 className="text-xl font-display font-bold text-foreground mb-4">Core Values</h4>
                  <div className="space-y-3 text-left">
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground/80">Empowerment through Education</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-foreground/80">Inclusive Leadership</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground/80">Sustainable Community Impact</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground/80">Cultural Preservation & Innovation</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
