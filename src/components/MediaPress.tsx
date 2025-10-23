import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const MediaPress = () => {
  const mediaItems = [
    {
      id: '1',
      type: 'article',
      title: 'Miss Rwanda 2016: A Voice for Change',
      outlet: 'The New Times',
      date: '2016',
      description: 'Comprehensive coverage of Jolly\'s crowning and her vision for youth empowerment.',
      image: 'https://pbs.twimg.com/media/G2reTNjWgAEu4H8?format=jpg&name=small'
    },
    {
      id: '2',
      type: 'interview',
      title: 'From Beauty Queen to Change Maker',
      outlet: 'BBC Africa',
      date: '2017',
      description: 'In-depth interview discussing her transition from pageantry to activism.',
      image: 'https://pbs.twimg.com/media/G1Egn1LXIAA1vwT?format=png&name=small'
    },
    {
      id: '3',
      type: 'video',
      title: 'Motivational Speech at TEDx Kigali',
      outlet: 'TEDx',
      date: '2018',
      description: 'Powerful talk on empowering young African women to lead.',
      image: 'https://pbs.twimg.com/media/GqLM1qJW0AANFb_?format=jpg&name=360x360'
    },
    {
      id: '4',
      type: 'article',
      title: 'Zikomo Awards: Best Motivational Speaker',
      outlet: 'KT Press',
      date: '2023',
      description: 'Recognition for her outstanding contributions to motivational speaking.',
      image: 'https://pbs.twimg.com/media/GhHhg9kXMAA6SyO?format=jpg&name=small'
    },
    {
      id: '5',
      type: 'podcast',
      title: 'Voices of Africa: Jolly Mutesi',
      outlet: 'Africa Voices Podcast',
      date: '2023',
      description: 'Discussion on leadership, beauty, and social impact in modern Africa.',
      image: 'https://pbs.twimg.com/media/GhFIGF-WsAAxp7H?format=jpg&name=small'
    },
    {
      id: '6',
      type: 'article',
      title: 'Community Nutrition Program Success',
      outlet: 'Rwanda Today',
      date: '2024',
      description: 'Coverage of her nutrition initiative\'s impact on local communities.',
      image: 'https://pbs.twimg.com/media/GftnYNtXkAAyS_y?format=jpg&name=360x360'
    }
  ];

  return (
    <section id="media-press" className="py-20 md:py-32 bg-gradient-to-br from-background via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-36 h-36 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-28 h-28 bg-primary/15 rounded-full blur-2xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
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
            className="inline-block px-6 py-2 bg-accent/10 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Media & Press</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            In the Spotlight
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"
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
            Featured in leading media outlets and platforms across Africa and beyond
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} direction="up">
              <motion.div
                className="group relative bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary/10"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.type === 'video' && (
                        <motion.div
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                      <span className="text-white font-bold text-sm uppercase tracking-wider">
                        {item.type}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <div className="p-6">
                  <motion.div
                    className="flex items-center justify-between mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      {item.outlet}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.date}
                    </span>
                  </motion.div>

                  <motion.h3
                    className="text-lg font-display font-bold text-foreground mb-3 leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-muted-foreground mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {item.description}
                  </motion.p>

                  <motion.a
                    href={`/media-press/${item.id}`}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm transition-colors duration-300 group/link"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPress;
