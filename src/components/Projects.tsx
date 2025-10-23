import { Card, CardContent } from '@/components/ui/card';
import communityWork from '@/assets/community-work.jpg';
import nutritionProgram from '@/assets/nutrition-program.jpg';
import youthWorkshop from '@/assets/youth-workshop.jpg';
import { Heart, Apple, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import AnimatedCounter from './AnimatedCounter';

const projects = [
  {
    icon: Heart,
    image: communityWork,
    title: "Children's Home Visits",
    description:
      'Regular visits to children\'s homes providing emotional support, mentorship, and resources to vulnerable children across Rwanda.',
    impact: '500+ children reached annually',
    impactNumber: 500,
  },
  {
    icon: Apple,
    image: nutritionProgram,
    title: 'Nutrition Programs',
    description:
      'Advocating for and implementing healthy meal programs for youth, ensuring proper nutrition for growing minds and bodies.',
    impact: '1,000+ meals provided monthly',
    impactNumber: 1000,
  },
  {
    icon: Lightbulb,
    image: youthWorkshop,
    title: 'Youth Empowerment Workshops',
    description:
      'Interactive workshops and seminars focused on leadership development, self-confidence, and career guidance for young people.',
    impact: '50+ workshops conducted',
    impactNumber: 50,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Projects & Community Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making a tangible difference through dedicated community outreach and empowerment initiatives
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <RevealOnScroll key={index} delay={index * 0.15} direction="up">
<<<<<<< HEAD
                <div>
                  <Card className="group overflow-hidden border-2 hover:border-primary/20 hover:shadow-elegant transition-smooth h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-elegant">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
=======
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="group overflow-hidden border-2 hover:border-primary/20 hover:shadow-elegant transition-smooth h-full">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div 
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-elegant"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </motion.div>
>>>>>>> d8248894b1745140dfb0398dbbddefd329649113
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
<<<<<<< HEAD
                      <div className="pt-4 border-t border-border">
                        <span className="text-sm font-semibold text-primary">
                          <AnimatedCounter
                            end={project.impactNumber}
                            suffix={index === 1 ? "+ meals provided monthly" : index === 2 ? "+ workshops conducted" : "+ children reached annually"}
                          />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
=======
                      <motion.div 
                        className="pt-4 border-t border-border"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <span className="text-sm font-semibold text-primary">
                          <AnimatedCounter 
                            end={project.impactNumber} 
                            suffix={index === 1 ? "+ meals provided monthly" : index === 2 ? "+ workshops conducted" : "+ children reached annually"} 
                          />
                        </span>
                      </motion.div>
                    </CardContent>
                  </Card>
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

export default Projects;
