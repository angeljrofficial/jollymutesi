import { Crown, Award, Users, Mic } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const achievements = [
  {
    icon: Crown,
    year: '2016',
    title: 'Miss Rwanda',
    description: 'Crowned Miss Rwanda 2016, representing the nation with grace and distinction.',
  },
  {
    icon: Award,
    year: '2016',
    title: 'Miss World Representative',
    description: 'Represented Rwanda at the prestigious Miss World 2016 international pageant.',
  },
  {
    icon: Users,
    year: '2020',
    title: 'Vice President, Miss East Africa',
    description: 'Leading and mentoring beauty queens across East Africa, promoting regional unity.',
  },
  {
    icon: Mic,
    year: '2023',
    title: 'Best Motivational Speaker',
    description: 'Awarded Best Motivational Speaker at the Zikomo Awards for inspiring youth.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Achievements & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of excellence, leadership, and impact across multiple platforms
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <RevealOnScroll key={index} delay={index * 0.1} direction="up">
<<<<<<< HEAD
                <div>
=======
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
                  <Card className="group hover:shadow-elegant transition-smooth border-2 hover:border-primary/20 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
<<<<<<< HEAD
                          <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                            <Icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-primary mb-1">
                            {achievement.year}
                          </div>
=======
                          <motion.div 
                            className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="h-8 w-8 text-primary-foreground" />
                          </motion.div>
                        </div>
                        <div className="flex-1">
                          <motion.div 
                            className="text-sm font-semibold text-primary mb-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {achievement.year}
                          </motion.div>
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
                          <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                            {achievement.title}
                          </h3>
                          <p className="text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
<<<<<<< HEAD
                </div>
=======
                </motion.div>
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
