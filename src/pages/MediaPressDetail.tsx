import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, User, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const MediaPressDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API or CMS
  const mediaItems = [
    {
      id: '1',
      type: 'article',
      title: 'Miss Rwanda 2016: A Voice for Change',
      outlet: 'The New Times',
      date: '2016',
      location: 'Kigali, Rwanda',
      author: 'Sarah Johnson',
      description: 'Comprehensive coverage of Jolly\'s crowning and her vision for youth empowerment.',
      fullContent: `
        <p>In a stunning display of grace and determination, Jolly Mutesi was crowned Miss Rwanda 2016, marking the beginning of what would become a transformative journey in the world of beauty pageants and social activism.</p>

        <p>From the moment she stepped onto the stage, Jolly captivated the audience with her poise and eloquence. But it was her vision for change that truly set her apart from other contestants.</p>

        <h3>A Vision Beyond Beauty</h3>

        <p>"Beauty pageants are not just about crowns and glamour," Jolly stated in her acceptance speech. "They are platforms for change, opportunities to amplify voices that need to be heard."</p>

        <p>Her platform focused on three key areas:</p>
        <ul>
          <li>Youth empowerment through education</li>
          <li>Community development initiatives</li>
          <li>Breaking stereotypes about women in leadership</li>
        </ul>

        <h3>The Impact Journey Begins</h3>

        <p>Since her crowning, Jolly has been actively involved in various community projects, including nutrition programs, educational workshops, and leadership seminars for young women across Rwanda.</p>

        <p>"Every young person deserves the opportunity to dream big and work towards those dreams," she says. "My role is to show them that with determination and the right support, anything is possible."</p>
      `,
      image: 'https://pbs.twimg.com/media/G2reTNjWgAEu4H8?format=jpg&name=small',
      link: '#',
      tags: ['Miss Rwanda', 'Youth Empowerment', 'Leadership']
    },
    {
      id: '2',
      type: 'interview',
      title: 'From Beauty Queen to Change Maker',
      outlet: 'BBC Africa',
      date: '2017',
      location: 'Nairobi, Kenya',
      author: 'Michael Oduya',
      description: 'In-depth interview discussing her transition from pageantry to activism.',
      fullContent: `
        <p>In this exclusive interview, Jolly Mutesi opens up about her journey from beauty pageant winner to dedicated social activist, sharing insights into the challenges and triumphs of her transformative path.</p>

        <h3>The Transition</h3>

        <p>"Winning Miss Rwanda was just the beginning," Jolly explains. "It gave me a platform, but the real work started when I began using that platform to create meaningful change."</p>

        <p>She describes the initial challenges of balancing her public persona with her growing commitment to social causes.</p>

        <h3>Key Initiatives</h3>

        <p>During our conversation, Jolly highlighted several initiatives she's passionate about:</p>

        <blockquote>"Education is the foundation of everything. When we educate young people, especially young women, we empower them to become leaders in their communities."</blockquote>

        <p>Her work includes:</p>
        <ul>
          <li>School feeding programs in rural areas</li>
          <li>Scholarship programs for girls</li>
          <li>Leadership workshops and mentorship programs</li>
        </ul>

        <h3>Future Vision</h3>

        <p>Looking ahead, Jolly expresses her desire to expand her impact beyond Rwanda's borders, working with organizations across East Africa to create sustainable change.</p>
      `,
      image: 'https://pbs.twimg.com/media/G1Egn1LXIAA1vwT?format=png&name=small',
      link: '#',
      tags: ['Activism', 'Social Change', 'East Africa']
    },
    {
      id: '3',
      type: 'video',
      title: 'Motivational Speech at TEDx Kigali',
      outlet: 'TEDx',
      date: '2018',
      location: 'Kigali, Rwanda',
      author: 'TEDx Kigali Team',
      description: 'Powerful talk on empowering young African women to lead.',
      fullContent: `
        <p>Jolly Mutesi's TEDx Kigali talk, titled "Empowering the Next Generation: Beauty Beyond the Crown," has become one of the most viewed TEDx talks from Rwanda.</p>

        <h3>The Speech</h3>

        <p>In her 12-minute presentation, Jolly challenged conventional notions of beauty and leadership, arguing that true beauty lies in the impact we make on others' lives.</p>

        <h3>Key Messages</h3>

        <p>The talk centered around three main themes:</p>

        <ol>
          <li><strong>Redefining Beauty:</strong> Moving beyond physical appearance to character and impact</li>
          <li><strong>Leadership as Service:</strong> True leaders serve their communities first</li>
          <li><strong>Empowerment Through Action:</strong> Small actions can create significant change</li>
        </ol>

        <h3>Impact and Reach</h3>

        <p>The talk has been viewed over 500,000 times across various platforms and has inspired similar initiatives across Africa.</p>

        <p>"This talk represents a pivotal moment in my journey," Jolly reflects. "It helped me reach an even wider audience and sparked conversations about leadership and empowerment that continue today."</p>
      `,
      image: 'https://pbs.twimg.com/media/GqLM1qJW0AANFb_?format=jpg&name=360x360',
      link: '#',
      tags: ['TEDx', 'Motivational Speaking', 'Leadership']
    },
    {
      id: '4',
      type: 'article',
      title: 'Zikomo Awards: Best Motivational Speaker',
      outlet: 'KT Press',
      date: '2023',
      location: 'Lusaka, Zambia',
      author: 'Grace Mwanza',
      description: 'Recognition for her outstanding contributions to motivational speaking.',
      fullContent: `
        <p>Jolly Mutesi made history at the 2023 Zikomo Awards by becoming the first Rwandan to win the Best Motivational Speaker category, adding another prestigious accolade to her growing list of achievements.</p>

        <h3>The Award</h3>

        <p>The Zikomo Awards, established in 2015, recognize excellence in various fields across Southern Africa. The Best Motivational Speaker category is particularly competitive, with nominees from across the continent.</p>

        <h3>Jolly's Acceptance Speech</h3>

        <p>In her acceptance speech, Jolly dedicated the award to young people everywhere: "This award belongs to every young person who has ever doubted their ability to make a difference. Your voice matters, and your actions can change the world."</p>

        <h3>Her Speaking Journey</h3>

        <p>Jolly's speaking career spans conferences, corporate events, and community gatherings across Africa. Her unique blend of personal experience, humor, and powerful messaging has made her a sought-after speaker.</p>

        <p>Key topics she addresses include:</p>
        <ul>
          <li>Overcoming self-doubt</li>
          <li>Building resilience</li>
          <li>Creating positive change in communities</li>
          <li>Women in leadership</li>
        </ul>

        <h3>Future Plans</h3>

        <p>Following the award, Jolly announced plans to launch a speaker training program to help other young Africans develop their public speaking skills.</p>
      `,
      image: 'https://pbs.twimg.com/media/GhHhg9kXMAA6SyO?format=jpg&name=small',
      link: '#',
      tags: ['Awards', 'Motivational Speaking', 'Recognition']
    },
    {
      id: '5',
      type: 'podcast',
      title: 'Voices of Africa: Jolly Mutesi',
      outlet: 'Africa Voices Podcast',
      date: '2023',
      location: 'Virtual',
      author: 'Dr. Amara Okafor',
      description: 'Discussion on leadership, beauty, and social impact in modern Africa.',
      fullContent: `
        <p>In this episode of Africa Voices Podcast, host Dr. Amara Okafor sits down with Jolly Mutesi for an intimate conversation about leadership, beauty, and social impact in contemporary Africa.</p>

        <h3>Episode Highlights</h3>

        <p>The conversation covered a wide range of topics, from Jolly's early life in Rwanda to her current work in community development.</p>

        <h3>Key Discussion Points</h3>

        <ul>
          <li>The role of beauty pageants in modern society</li>
          <li>Balancing tradition and progress in African communities</li>
          <li>The importance of mental health in leadership</li>
          <li>Building sustainable community development programs</li>
          <li>The future of youth leadership in Africa</li>
        </ul>

        <h3>Personal Insights</h3>

        <p>Jolly shared personal stories about her journey, including challenges she faced and lessons learned along the way. She emphasized the importance of authenticity in leadership.</p>

        <blockquote>"Authenticity is not just about being yourself—it's about being the best version of yourself while staying true to your values and those of your community."</blockquote>

        <h3>Community Impact</h3>

        <p>The discussion also explored Jolly's various community initiatives, including nutrition programs, educational support, and women's empowerment projects.</p>

        <h3>Listener Response</h3>

        <p>This episode received overwhelmingly positive feedback, with many listeners praising the depth of the conversation and Jolly's insights into African leadership and development.</p>
      `,
      image: 'https://pbs.twimg.com/media/GhFIGF-WsAAxp7H?format=jpg&name=small',
      link: '#',
      tags: ['Podcast', 'Leadership', 'Community Development']
    },
    {
      id: '6',
      type: 'article',
      title: 'Community Nutrition Program Success',
      outlet: 'Rwanda Today',
      date: '2024',
      location: 'Kigali, Rwanda',
      author: 'Jean Baptiste Nkurunziza',
      description: 'Coverage of her nutrition initiative\'s impact on local communities.',
      fullContent: `
        <p>Jolly Mutesi's community nutrition program has achieved remarkable success, providing nutritious meals to over 2,000 children in rural Rwandan communities.</p>

        <h3>Program Overview</h3>

        <p>Launched in 2022, the nutrition program aims to address malnutrition among school children while promoting education about healthy eating habits.</p>

        <h3>Key Achievements</h3>

        <ul>
          <li>Served nutritious meals to 2,000+ children daily</li>
          <li>Reduced malnutrition rates by 35% in participating communities</li>
          <li>Improved school attendance by 28%</li>
          <li>Educated 5,000+ families on nutrition and hygiene</li>
        </ul>

        <h3>Program Components</h3>

        <p>The program includes:</p>
        <ul>
          <li>Daily school feeding</li>
          <li>Nutrition education workshops for parents</li>
          <li>Garden projects to promote local food production</li>
          <li>Health monitoring and medical referrals</li>
        </ul>

        <h3>Sustainability Focus</h3>

        <p>Unlike many aid programs, Jolly's initiative emphasizes sustainability through community involvement and local food production.</p>

        <blockquote>"We don't just want to feed children today—we want to teach communities how to feed themselves tomorrow," Jolly explains.</blockquote>

        <h3>Expansion Plans</h3>

        <p>Following the program's success, Jolly plans to expand to additional districts and explore partnerships with other East African countries.</p>

        <h3>Community Impact</h3>

        <p>Beyond nutrition, the program has improved school performance, reduced dropout rates, and strengthened community bonds.</p>
      `,
      image: 'https://pbs.twimg.com/media/GftnYNtXkAAyS_y?format=jpg&name=360x360',
      link: '#',
      tags: ['Nutrition', 'Community Development', 'Education']
    }
  ];

  const item = mediaItems.find(item => item.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/#media-press" className="text-primary hover:text-primary/80">
            Return to Media & Press
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/#media-press"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Media & Press
            </Link>

            <motion.span
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 400 }}
            >
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {item.title}
            </motion.h1>

            <motion.div
              className="flex flex-wrap justify-center gap-6 text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{item.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{item.location}</span>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {item.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {item.link && (
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 400 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Original Article
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              dangerouslySetInnerHTML={{ __html: item.fullContent }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaPressDetail;
