import aboutPortrait from '@/assets/about-portrait.jpg';
import { Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
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

            <div className="mt-8 p-6 bg-secondary/30 rounded-lg border-l-4 border-primary">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-xl font-display italic text-foreground">
                "Empowerment begins with belief in yourself."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Jolly Mutesi</p>
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold rounded-lg opacity-20 blur-xl"></div>
              <img
                src={aboutPortrait}
                alt="Jolly Mutesi professional portrait"
                className="relative rounded-lg shadow-elegant w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
