import heroImage from '@/assets/hero-image.jpg';
import speakingEvent from '@/assets/speaking-event.jpg';
import communityWork from '@/assets/community-work.jpg';
import nutritionProgram from '@/assets/nutrition-program.jpg';
import youthWorkshop from '@/assets/youth-workshop.jpg';
import aboutPortrait from '@/assets/about-portrait.jpg';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const galleryImages = [
  { src: 'https://pbs.twimg.com/media/G2reTNjWgAEu4H8?format=jpg&name=small', alt: 'Miss Rwanda 2016 Crowning', category: 'Pageant' },
  { src: 'https://pbs.twimg.com/media/G1Egn1LXIAA1vwT?format=png&name=small', alt: 'Motivational Speaking Event', category: 'Speaking' },
  { src: 'https://pbs.twimg.com/media/GqLM1qJW0AANFb_?format=jpg&name=360x360', alt: 'Community Service', category: 'Activism' },
  { src: 'https://pbs.twimg.com/media/GhHhg9kXMAA6SyO?format=jpg&name=small', alt: 'Nutrition Program', category: 'Activism' },
  { src: 'https://pbs.twimg.com/media/GhFIGF-WsAAxp7H?format=jpg&name=small', alt: 'Youth Workshop', category: 'Speaking' },
  { src: 'https://pbs.twimg.com/media/GftnYNtXkAAyS_y?format=jpg&name=360x360', alt: 'Professional Portrait', category: 'Modeling' },
  { src: 'https://pbs.twimg.com/media/GfQZVFKXMAA66e8?format=jpg&name=360x360', alt: 'Community Work', category: 'Activism' },
  { src: 'https://pbs.twimg.com/media/Ge06bNyWAAA1RAq?format=jpg&name=360x360', alt: 'Youth Empowerment', category: 'Speaking' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-br from-background via-secondary/5 to-accent/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
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
          className="absolute bottom-10 left-20 w-32 h-32 bg-secondary/8 rounded-full blur-2xl"
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Visual Journey
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
          >
            A visual journey through pageantry, public speaking, community service, and empowerment
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} direction="up">
              <motion.div
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 aspect-[4/3] cursor-pointer"
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
                />
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-full"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full mb-3 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {image.category}
                    </motion.span>
                    <motion.p
                      className="text-white font-semibold text-sm leading-tight"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {image.alt}
                    </motion.p>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                />
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
