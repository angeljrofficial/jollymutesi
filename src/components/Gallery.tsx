import heroImage from '@/assets/hero-image.jpg';
import speakingEvent from '@/assets/speaking-event.jpg';
import communityWork from '@/assets/community-work.jpg';
import nutritionProgram from '@/assets/nutrition-program.jpg';
import youthWorkshop from '@/assets/youth-workshop.jpg';
import aboutPortrait from '@/assets/about-portrait.jpg';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const galleryImages = [
  { src: heroImage, alt: 'Miss Rwanda 2016 Crowning', category: 'Pageant' },
  { src: speakingEvent, alt: 'Motivational Speaking Event', category: 'Speaking' },
  { src: communityWork, alt: 'Community Service', category: 'Activism' },
  { src: nutritionProgram, alt: 'Nutrition Program', category: 'Activism' },
  { src: youthWorkshop, alt: 'Youth Workshop', category: 'Speaking' },
  { src: aboutPortrait, alt: 'Professional Portrait', category: 'Modeling' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through pageantry, public speaking, community service, and empowerment
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} direction="up">
              <motion.div
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-smooth aspect-[4/3] cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="p-6 w-full"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {image.category}
                    </motion.span>
                    <p className="text-white font-medium">{image.alt}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
