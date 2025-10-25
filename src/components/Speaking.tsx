import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { Link } from 'react-router-dom';

const Speaking = () => {
  const speakingEngagements = [
    {
      id: '1',
      title: 'TEDx Kigali: Empowering Young Leaders',
      date: 'March 2018',
      location: 'Kigali, Rwanda',
      audience: '500+ attendees',
      description: 'Delivered a powerful talk on the importance of empowering young African women to become leaders in their communities.',
      type: 'Keynote',
      image: 'https://pbs.twimg.com/media/GqLM1qJW0AANFb_?format=jpg&name=360x360',
      impact: 'Inspired 200+ young women to start leadership programs'
    },
    {
      id: '2',
      title: 'Women in Leadership Summit',
      date: 'June 2019',
      location: 'Nairobi, Kenya',
      audience: '300+ participants',
      description: 'Spoke about breaking barriers and creating opportunities for women in traditionally male-dominated fields.',
      type: 'Panel Discussion',
      image: 'https://pbs.twimg.com/media/GhHhg9kXMAA6SyO?format=jpg&name=small',
      impact: 'Led to partnerships with 5 corporate organizations'
    },
    {
      id: '3',
      title: 'East African Youth Conference',
      date: 'September 2020',
      location: 'Dar es Salaam, Tanzania',
      audience: '1,000+ youth',
      description: 'Motivational session focusing on personal development, goal setting, and community impact.',
      type: 'Workshop',
      image: 'https://pbs.twimg.com/media/GhFIGF-WsAAxp7H?format=jpg&name=small',
      impact: 'Established youth mentorship network across 3 countries'
    },
    {
      id: '4',
      title: 'Miss East Africa Pageant Opening Ceremony',
      date: 'November 2021',
      location: 'Kampala, Uganda',
      audience: '2,000+ attendees',
      description: 'Delivered the opening keynote as Vice President, inspiring contestants and celebrating beauty with purpose.',
      type: 'Ceremony',
      image: 'https://pbs.twimg.com/media/GftnYNtXkAAyS_y?format=jpg&name=360x360',
      impact: 'Increased pageant focus on social impact by 40%'
    },
    {
      id: '5',
      title: 'Corporate Leadership Workshop',
      date: 'February 2022',
      location: 'Addis Ababa, Ethiopia',
      audience: '150 executives',
      description: 'Workshop on inclusive leadership and creating diverse workplaces that empower all employees.',
      type: 'Corporate Training',
      image: 'https://pbs.twimg.com/media/GfQZVFKXMAA66e8?format=jpg&name=360x360',
      impact: 'Implemented diversity initiatives in 12 companies'
    },
    {
      id: '6',
      title: 'International Women\'s Day Celebration',
      date: 'March 2023',
      location: 'Kigali, Rwanda',
      audience: '800+ women',
      description: 'Celebrated women\'s achievements and discussed the future of gender equality in Rwanda and Africa.',
      type: 'Celebration',
      image: 'https://pbs.twimg.com/media/Ge06bNyWAAA1RAq?format=jpg&name=360x360',
      impact: 'Launched women\'s entrepreneurship fund with $50K'
    }
  ];

  return (
    <section id="speaking" className="py-20 md:py-32 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden">
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-primary/15 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />
        {/* Floating speech bubbles */}
        <motion.div
          className="absolute top-32 right-32 w-16 h-16 bg-white/5 rounded-full blur-lg"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-32 w-12 h-12 bg-primary/10 rounded-full blur-md"
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
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
            className="inline-block px-6 py-2 bg-secondary/10 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Speaking & Appearances</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Voice of Inspiration
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"
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
            Sharing messages of empowerment, leadership, and positive change across Africa and beyond
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {speakingEngagements.map((engagement, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}>
              <motion.div
                className="group bg-background/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 border border-secondary/20"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', stiffness: 300, damping: 25 }}
                viewport={{ once: true }}
              >
                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, rgba(147,51,234,0.1), rgba(59,130,246,0.1), rgba(16,185,129,0.1))',
                    padding: '2px'
                  }}
                >
                  <div className="w-full h-full bg-background/90 rounded-2xl" />
                </motion.div>

                {/* Content Card Above Image */}
                <motion.div
                  className="p-6 bg-gradient-to-r from-secondary/5 to-primary/5 border-b border-secondary/10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="flex items-center justify-between mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="bg-gradient-to-r from-secondary to-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {engagement.type}
                    </motion.span>
                    <motion.div
                      className="flex items-center gap-1 text-muted-foreground text-xs"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Users className="w-3 h-3" />
                      <span>{engagement.audience}</span>
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-lg font-display font-bold text-foreground mb-2 leading-tight line-clamp-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {engagement.title}
                  </motion.h3>

                  <motion.div
                    className="flex items-center gap-3 text-xs text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-secondary" />
                      <span>{engagement.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span>{engagement.location}</span>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={engagement.image}
                    alt={engagement.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Floating impact badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white font-semibold"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    Impact
                  </motion.div>
                </motion.div>

                {/* Description and Impact Section */}
                <motion.div
                  className="p-6 bg-gradient-to-r from-secondary/5 to-primary/5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="text-muted-foreground leading-relaxed mb-4 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {engagement.description}
                  </motion.p>

                  <motion.div
                    className="bg-gradient-to-r from-secondary/10 to-primary/10 p-3 rounded-xl border border-secondary/20"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.p
                      className="text-xs font-semibold text-foreground mb-1"
                      whileHover={{ scale: 1.02 }}
                    >
                      💫 Impact:
                    </motion.p>
                  <motion.p
                    className="text-xs text-muted-foreground"
                    whileHover={{ color: '#6366f1' }}
                    transition={{ duration: 0.3 }}
                  >
                    {engagement.impact}
                  </motion.p>
                </motion.div>

                {/* Read More Link */}
                <motion.div
                  className="mt-4 pt-4 border-t border-secondary/10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/speaking/${engagement.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm transition-colors duration-300 group/link"
                  >
                    <motion.span
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      Read Full Story
                    </motion.span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
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

export default Speaking;
