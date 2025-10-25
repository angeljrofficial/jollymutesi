import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users, Award, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SpeakingDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API or CMS
  const speakingEngagements = [
    {
      id: '1',
      title: 'TEDx Kigali: Empowering Young Leaders',
      date: 'March 2018',
      location: 'Kigali, Rwanda',
      audience: '500+ attendees',
      description: 'Delivered a powerful talk on the importance of empowering young African women to become leaders in their communities.',
      type: 'Keynote',
      image: 'https://pbs.twimg.com/media/GqLM1qJW0AANFb_?format=jpg&name=large',
      impact: 'Inspired 200+ young women to start leadership programs',
      fullContent: `
        <p>At TEDx Kigali 2018, Jolly Mutesi delivered one of the most powerful and memorable talks in the event's history. Her presentation, "Empowering the Next Generation: Beauty Beyond the Crown," challenged conventional notions of beauty, success, and leadership.</p>

        <h3>The Setting</h3>

        <p>The Kigali Convention Centre was packed with over 500 enthusiastic attendees, ranging from students to business leaders, all eager to hear Jolly's insights on youth empowerment and leadership.</p>

        <h3>Key Messages</h3>

        <p>Throughout her 15-minute presentation, Jolly emphasized three core principles:</p>

        <ul>
          <li><strong>Redefining Beauty:</strong> Moving beyond physical appearance to focus on character, impact, and the positive change we bring to our communities</li>
          <li><strong>Leadership as Service:</strong> True leaders don't seek power—they seek opportunities to serve and uplift others</li>
          <li><strong>Empowerment Through Action:</strong> Small, consistent actions can create transformative change in communities</li>
        </ul>

        <h3>Personal Stories</h3>

        <p>Jolly shared intimate stories from her journey, including:</p>

        <blockquote>"When I was crowned Miss Rwanda, many people congratulated me on my beauty. But I wanted them to see beyond the crown. I wanted them to see the potential for change, the opportunity to inspire, and the responsibility to serve."</blockquote>

        <p>She described her early struggles with self-doubt and how she learned to channel her platform into meaningful action.</p>

        <h3>The Impact</h3>

        <p>The talk resonated deeply with the audience. Within weeks of the presentation:</p>

        <ul>
          <li>Over 200 young women reached out to Jolly expressing interest in starting their own leadership initiatives</li>
          <li>Three corporate sponsors committed to funding youth empowerment programs</li>
          <li>The video of the talk reached over 500,000 views across various platforms</li>
          <li>Educational institutions across Rwanda incorporated elements of her message into their leadership curricula</li>
        </ul>

        <h3>Continuing Legacy</h3>

        <p>The TEDx Kigali talk marked a turning point in Jolly's career as a motivational speaker. It opened doors to speaking engagements across Africa and established her as a thought leader on youth empowerment and women's leadership.</p>

        <p>"That talk changed everything for me," Jolly reflects. "It wasn't just about sharing my story—it was about starting a conversation that continues to this day."</p>
      `,
      organizer: 'TEDx Kigali',
      venue: 'Kigali Convention Centre',
      videoLink: '#',
      tags: ['TEDx', 'Youth Empowerment', 'Leadership', 'Women in Leadership']
    },
    {
      id: '2',
      title: 'Women in Leadership Summit',
      date: 'June 2019',
      location: 'Nairobi, Kenya',
      audience: '300+ participants',
      description: 'Spoke about breaking barriers and creating opportunities for women in traditionally male-dominated fields.',
      type: 'Panel Discussion',
      image: 'https://pbs.twimg.com/media/GhHhg9kXMAA6SyO?format=jpg&name=large',
      impact: 'Led to partnerships with 5 corporate organizations',
      fullContent: `
        <p>The Women in Leadership Summit 2019 in Nairobi brought together influential women leaders from across East Africa. Jolly Mutesi was invited as a panelist to discuss breaking barriers in male-dominated fields.</p>

        <h3>The Panel</h3>

        <p>Jolly shared the stage with four other remarkable women leaders:</p>

        <ul>
          <li>Dr. Sarah Wanjiru - CEO of a leading tech company</li>
          <li>Hon. Grace Nambi - Member of Parliament, Uganda</li>
          <li>Prof. Aisha Mohammed - University Vice Chancellor</li>
          <li>Mary Ochieng - Founder of a successful construction firm</li>
        </ul>

        <h3>Key Discussion Points</h3>

        <p>The panel explored several critical themes:</p>

        <h4>1. Breaking Through Glass Ceilings</h4>

        <p>Jolly shared her experience in the beauty pageant industry and how she transformed the platform into a vehicle for social change.</p>

        <blockquote>"People often underestimate the power and intelligence of beauty queens. We're told to smile and wave, but we have voices, ideas, and the determination to create change."</blockquote>

        <h4>2. Mentorship and Networking</h4>

        <p>The panelists emphasized the critical role of mentorship in women's career advancement. Jolly discussed her mentorship programs for young women in Rwanda.</p>

        <h4>3. Work-Life Balance</h4>

        <p>An honest discussion about the challenges of balancing professional ambitions with personal life, family expectations, and self-care.</p>

        <h3>Interactive Workshops</h3>

        <p>Following the panel, Jolly facilitated a workshop on "Building Confidence and Leadership Presence" with 50 young professional women.</p>

        <h3>Outcomes and Impact</h3>

        <p>The summit produced tangible results:</p>

        <ul>
          <li>Five major corporations committed to implementing diversity and inclusion programs</li>
          <li>A regional women's leadership network was established</li>
          <li>Funding was secured for leadership training programs across three East African countries</li>
          <li>Over 100 mentorship relationships were formed during the event</li>
        </ul>

        <h3>Personal Reflections</h3>

        <p>"This summit reminded me that I'm not alone in my journey," Jolly said. "When women come together to support, challenge, and inspire each other, incredible things happen."</p>
      `,
      organizer: 'Women Leadership Forum East Africa',
      venue: 'Radisson Blu Hotel, Nairobi',
      videoLink: '#',
      tags: ['Women in Leadership', 'Career Development', 'Diversity', 'Professional Growth']
    },
    {
      id: '3',
      title: 'East African Youth Conference',
      date: 'September 2020',
      location: 'Dar es Salaam, Tanzania',
      audience: '1,000+ youth',
      description: 'Motivational session focusing on personal development, goal setting, and community impact.',
      type: 'Workshop',
      image: 'https://pbs.twimg.com/media/GhFIGF-WsAAxp7H?format=jpg&name=large',
      impact: 'Established youth mentorship network across 3 countries',
      fullContent: `
        <p>The East African Youth Conference 2020 was a landmark event, bringing together over 1,000 young people from Kenya, Uganda, Tanzania, and Rwanda. Despite the challenges posed by the global pandemic, the organizers successfully created a hybrid event that maximized both safety and participation.</p>

        <h3>Opening Keynote</h3>

        <p>Jolly delivered the opening keynote address, titled "Your Time is Now: Unleashing Youth Potential in East Africa."</p>

        <h3>Key Themes</h3>

        <h4>1. Personal Development</h4>

        <p>Jolly emphasized the importance of continuous learning and self-improvement:</p>

        <blockquote>"Your education doesn't end when you leave school. Every day is an opportunity to learn something new, to grow stronger, and to become more capable of creating the change you want to see."</blockquote>

        <h4>2. Goal Setting and Achievement</h4>

        <p>She introduced her "DREAM" framework for goal achievement:</p>

        <ul>
          <li><strong>D</strong>efine your vision clearly</li>
          <li><strong>R</strong>esearch and plan your path</li>
          <li><strong>E</strong>xecute with consistency</li>
          <li><strong>A</strong>dapt to challenges</li>
          <li><strong>M</strong>easure your progress</li>
        </ul>

        <h4>3. Community Impact</h4>

        <p>The session explored how young people can create meaningful change in their communities, even with limited resources.</p>

        <h3>Interactive Workshops</h3>

        <p>Following the keynote, Jolly facilitated several interactive workshops:</p>

        <ul>
          <li><strong>Leadership Skills Development:</strong> Practical exercises in communication, decision-making, and team building</li>
          <li><strong>Social Entrepreneurship:</strong> How to start community projects that generate both impact and income</li>
          <li><strong>Public Speaking Confidence:</strong> Techniques for effective communication and presentation</li>
        </ul>

        <h3>Mentorship Network Launch</h3>

        <p>One of the most significant outcomes of the conference was the establishment of the East African Youth Mentorship Network. This initiative connects young people with experienced professionals across three countries.</p>

        <p>The network includes:</p>

        <ul>
          <li>Over 200 mentors from various industries</li>
          <li>500+ mentees in the first cohort</li>
          <li>Quarterly virtual meetups and annual in-person gatherings</li>
          <li>Resource library with career guidance materials</li>
        </ul>

        <h3>Participant Testimonials</h3>

        <blockquote>"Jolly's session changed my perspective on what's possible. I went home and started my own community library project, which now serves 300 children in my village." - Sarah, 22, Tanzania</blockquote>

        <blockquote>"The mentorship I received through the network Jolly helped establish has been life-changing. I'm now pursuing my dream career in technology." - James, 24, Kenya</blockquote>

        <h3>Long-term Impact</h3>

        <p>Three years after the conference, the impact continues to grow. The youth mentorship network has expanded to include over 1,000 active participants, and alumni have started more than 50 community development projects across East Africa.</p>
      `,
      organizer: 'East African Youth Forum',
      venue: 'Julius Nyerere International Convention Centre',
      videoLink: '#',
      tags: ['Youth Development', 'Mentorship', 'Personal Growth', 'Community Building']
    },
    {
      id: '4',
      title: 'Miss East Africa Pageant Opening Ceremony',
      date: 'November 2021',
      location: 'Kampala, Uganda',
      audience: '2,000+ attendees',
      description: 'Delivered the opening keynote as Vice President, inspiring contestants and celebrating beauty with purpose.',
      type: 'Ceremony',
      image: 'https://pbs.twimg.com/media/GftnYNtXkAAyS_y?format=jpg&name=large',
      impact: 'Increased pageant focus on social impact by 40%',
      fullContent: `
        <p>As Vice President of the Miss East Africa Pageant, Jolly Mutesi had the honor of delivering the opening keynote at the 2021 ceremony in Kampala. Her speech set the tone for a pageant that would prioritize social impact alongside traditional elements of beauty and grace.</p>

        <h3>Redefining Beauty Pageants</h3>

        <p>Jolly's address challenged the pageant community to evolve with the times:</p>

        <blockquote>"Beauty pageants have often been criticized as superficial. But what if we could transform them into platforms for positive change? What if every contestant left not just with a crown, but with the skills, network, and resources to make a real difference in their communities?"</blockquote>

        <h3>The New Framework</h3>

        <p>Under Jolly's leadership as Vice President, the Miss East Africa Pageant introduced several innovations:</p>

        <h4>1. Social Impact Projects</h4>

        <p>Each contestant was required to design and begin implementing a community development project. Projects ranged from educational programs to environmental initiatives to health awareness campaigns.</p>

        <h4>2. Leadership Training</h4>

        <p>All contestants participated in intensive leadership workshops covering:</p>

        <ul>
          <li>Public speaking and media training</li>
          <li>Project management and fundraising</li>
          <li>Social entrepreneurship</li>
          <li>Community organizing</li>
        </ul>

        <h4>3. Mentorship Program</h4>

        <p>Each contestant was paired with an established leader in their field of interest, creating lasting relationships beyond the pageant.</p>

        <h3>The Contestants' Response</h3>

        <p>The contestants embraced the new direction enthusiastically. Over the course of the pageant:</p>

        <ul>
          <li>20 contestants launched community projects reaching over 5,000 beneficiaries</li>
          <li>Collective fundraising efforts exceeded $50,000</li>
          <li>Media coverage shifted from focusing on physical appearance to highlighting social impact initiatives</li>
        </ul>

        <h3>Cultural Celebration</h3>

        <p>The ceremony also celebrated East African culture through:</p>

        <ul>
          <li>Traditional dance performances from all participating countries</li>
          <li>Showcase of local fashion designers</li>
          <li>Exhibition of East African art and crafts</li>
          <li>Culinary experience featuring regional cuisines</li>
        </ul>

        <h3>Industry Impact</h3>

        <p>Jolly's vision for "beauty with purpose" influenced the broader pageant industry in East Africa. Within a year:</p>

        <ul>
          <li>Three other major pageants adopted similar social impact frameworks</li>
          <li>Corporate sponsors increased their support, attracted by the positive community impact</li>
          <li>Media coverage of pageants became more substantive, focusing on contestants' initiatives and ideas</li>
          <li>Public perception of beauty pageants improved significantly, especially among young women</li>
        </ul>

        <h3>Winner's Platform</h3>

        <p>The 2021 winner used her platform to launch a mental health awareness campaign that has since reached over 100,000 young people across East Africa.</p>

        <h3>Jolly's Reflection</h3>

        <p>"This pageant represents the future I dreamed of when I was crowned Miss Rwanda," Jolly shared. "It proves that beauty and purpose are not contradictory—they can work together to create meaningful change."</p>
      `,
      organizer: 'Miss East Africa Organization',
      venue: 'Serena Hotel, Kampala',
      videoLink: '#',
      tags: ['Beauty Pageants', 'Social Impact', 'Women Empowerment', 'Cultural Celebration']
    },
    {
      id: '5',
      title: 'Corporate Leadership Workshop',
      date: 'February 2022',
      location: 'Addis Ababa, Ethiopia',
      audience: '150 executives',
      description: 'Workshop on inclusive leadership and creating diverse workplaces that empower all employees.',
      type: 'Corporate Training',
      image: 'https://pbs.twimg.com/media/GfQZVFKXMAA66e8?format=jpg&name=large',
      impact: 'Implemented diversity initiatives in 12 companies',
      fullContent: `
        <p>In February 2022, Jolly Mutesi was invited to facilitate a corporate leadership workshop in Addis Ababa for 150 executives from major companies across East Africa. The two-day intensive workshop focused on inclusive leadership and building diverse, equitable workplaces.</p>

        <h3>Workshop Overview</h3>

        <p>The workshop was designed to help corporate leaders understand and implement inclusive leadership practices that would benefit both their organizations and the broader community.</p>

        <h3>Day One: Understanding Inclusive Leadership</h3>

        <h4>Morning Session: The Business Case for Diversity</h4>

        <p>Jolly presented compelling research showing that diverse companies:</p>

        <ul>
          <li>Are 35% more likely to outperform their competitors</li>
          <li>Have 19% higher innovation revenue</li>
          <li>Experience 70% greater likelihood of capturing new markets</li>
          <li>Show improved decision-making and problem-solving</li>
        </ul>

        <h4>Afternoon Session: Unconscious Bias</h4>

        <p>Through interactive exercises, participants identified their own unconscious biases and learned strategies to overcome them in hiring, promotion, and daily interactions.</p>

        <blockquote>"The first step to creating an inclusive workplace is recognizing that we all have biases. The question is: what are we going to do about them?" - Jolly Mutesi</blockquote>

        <h3>Day Two: Implementation Strategies</h3>

        <h4>Morning Session: Building Inclusive Teams</h4>

        <p>Practical strategies for:</p>

        <ul>
          <li>Inclusive hiring practices</li>
          <li>Creating psychologically safe environments</li>
          <li>Equitable performance evaluation systems</li>
          <li>Mentorship and sponsorship programs</li>
        </ul>

        <h4>Afternoon Session: Action Planning</h4>

        <p>Each participant developed a concrete action plan for implementing inclusive leadership practices in their organization, including:</p>

        <ul>
          <li>Specific, measurable goals</li>
          <li>Timeline for implementation</li>
          <li>Metrics for tracking progress</li>
          <li>Potential challenges and mitigation strategies</li>
        </ul>

        <h3>Interactive Elements</h3>

        <p>The workshop included:</p>

        <ul>
          <li>Role-playing exercises</li>
          <li>Case study analyses</li>
          <li>Small group discussions</li>
          <li>Panel discussion with successful diversity champions</li>
          <li>Networking sessions</li>
        </ul>

        <h3>Personal Stories</h3>

        <p>Jolly shared her own experiences facing bias and stereotypes in her career:</p>

        <blockquote>"When I walked into my first corporate speaking engagement, I could see the skepticism on people's faces. A beauty queen talking about leadership? But I had worked hard, studied, and had valuable insights to share. We need to look beyond surface impressions and give everyone the opportunity to demonstrate their capabilities."</blockquote>

        <h3>Measurable Impact</h3>

        <p>Within six months of the workshop:</p>

        <ul>
          <li>12 participating companies launched formal diversity and inclusion initiatives</li>
          <li>Female representation in leadership positions increased by an average of 23% across participating companies</li>
          <li>Employee satisfaction scores improved significantly, particularly among underrepresented groups</li>
          <li>Several companies reported improved innovation metrics and market performance</li>
        </ul>

        <h3>Follow-Up Program</h3>

        <p>Jolly established a six-month follow-up program including:</p>

        <ul>
          <li>Monthly check-in calls with participants</li>
          <li>Quarterly group learning sessions</li>
          <li>Sharing of best practices and lessons learned</li>
          <li>Additional resources and tools</li>
        </ul>

        <h3>Participant Feedback</h3>

        <blockquote>"This workshop fundamentally changed how I think about leadership. Jolly's combination of research, personal experience, and practical tools gave me everything I needed to start making real changes in my organization." - CEO, Major Manufacturing Company</blockquote>

        <blockquote>"I've attended many corporate trainings, but this was different. Jolly challenged us to think deeply about our values and our impact, not just our bottom line." - HR Director, Financial Services Firm</blockquote>

        <h3>Expanding Impact</h3>

        <p>The success of this workshop led to:</p>

        <ul>
          <li>Invitations to facilitate similar workshops in Kenya, Tanzania, and Rwanda</li>
          <li>Development of an online course on inclusive leadership</li>
          <li>Creation of a corporate diversity consulting practice</li>
          <li>Partnership with several business schools to integrate inclusive leadership into their curricula</li>
        </ul>
      `,
      organizer: 'East African Business Forum',
      venue: 'Sheraton Addis',
      videoLink: '#',
      tags: ['Corporate Training', 'Diversity & Inclusion', 'Leadership Development', 'Workplace Culture']
    },
    {
      id: '6',
      title: 'International Women\'s Day Celebration',
      date: 'March 2023',
      location: 'Kigali, Rwanda',
      audience: '800+ women',
      description: 'Celebrated women\'s achievements and discussed the future of gender equality in Rwanda and Africa.',
      type: 'Celebration',
      image: 'https://pbs.twimg.com/media/Ge06bNyWAAA1RAq?format=jpg&name=large',
      impact: 'Launched women\'s entrepreneurship fund with $50K',
      fullContent: `
        <p>The International Women's Day 2023 celebration in Kigali was a powerful gathering of over 800 women from diverse backgrounds—entrepreneurs, students, professionals, activists, and community leaders. Jolly Mutesi was the keynote speaker for this momentous occasion.</p>

        <h3>The Theme: "Breaking Barriers, Building Futures"</h3>

        <p>The event focused on celebrating women's achievements while addressing the challenges that remain in achieving full gender equality.</p>

        <h3>Keynote Address</h3>

        <p>Jolly's speech wove together personal stories, historical context, and a vision for the future:</p>

        <h4>Honoring Progress</h4>

        <p>She began by acknowledging Rwanda's remarkable progress in gender equality:</p>

        <blockquote>"Rwanda has shown the world what's possible when we commit to women's empowerment. With 61% of parliamentary seats held by women, we lead the world. But leadership positions are just one part of the equation. True equality means economic empowerment, freedom from violence, and the ability for every woman to pursue her dreams without limitation."</blockquote>

        <h4>Addressing Challenges</h4>

        <p>Jolly spoke candidly about remaining challenges:</p>

        <ul>
          <li>Gender-based violence</li>
          <li>Limited access to capital for women entrepreneurs</li>
          <li>Persistent stereotypes about women's capabilities</li>
          <li>Unequal distribution of household and care work</li>
          <li>Digital divide affecting women's access to technology</li>
        </ul>

        <h4>Vision for the Future</h4>

        <p>She outlined a bold vision for gender equality in Rwanda and across Africa:</p>

        <blockquote>"I dream of an Africa where a girl child can aspire to any position, any career, any dream—and have the support and resources to achieve it. Where women's economic empowerment is not a program but a reality. Where men and women work together as equal partners in building our continent's future."</blockquote>

        <h3>Panel Discussions</h3>

        <p>The event featured several panel discussions on key topics:</p>

        <h4>Women in Technology</h4>

        <p>Female tech entrepreneurs and engineers discussed opportunities and challenges in the digital economy.</p>

        <h4>Economic Empowerment</h4>

        <p>Business leaders shared strategies for women's economic advancement and financial independence.</p>

        <h4>Women in Politics</h4>

        <p>Political leaders discussed the impact of women's representation in government and pathways for emerging female leaders.</p>

        <h3>Major Announcement: Women's Entrepreneurship Fund</h3>

        <p>The highlight of the event was the launch of a $50,000 Women's Entrepreneurship Fund, created through partnerships between Jolly's foundation, corporate sponsors, and international organizations.</p>

        <h4>Fund Details:</h4>

        <ul>
          <li>Provides small business loans of $500-$5,000 to women entrepreneurs</li>
          <li>Includes business training and mentorship support</li>
          <li>Focuses on women in rural areas and underserved communities</li>
          <li>Offers favorable terms with flexible repayment schedules</li>
          <li>Has already supported 100+ women in its first year</li>
        </ul>

        <h3>Skills Workshops</h3>

        <p>Throughout the day, participants could attend various workshops:</p>

        <ul>
          <li>Financial Literacy and Money Management</li>
          <li>Digital Skills for Business</li>
          <li>Negotiation and Advocacy</li>
          <li>Personal Branding and Marketing</li>
          <li>Leadership and Team Building</li>
        </ul>

        <h3>Success Stories</h3>

        <p>The event showcased success stories of Rwandan women who have overcome barriers:</p>

        <ul>
          <li>A former domestic worker who now owns three restaurants</li>
          <li>A single mother who became a successful tech entrepreneur</li>
          <li>A rural farmer who transformed her community through agricultural innovation</li>
          <li>A young engineer leading a major infrastructure project</li>
        </ul>

        <h3>Networking and Community Building</h3>

        <p>The event facilitated connections among women across different sectors and backgrounds, creating a powerful network for mutual support and collaboration.</p>

        <h3>Cultural Celebration</h3>

        <p>The day also included:</p>

        <ul>
          <li>Performances by female Rwandan artists</li>
          <li>Exhibition of women-owned businesses and products</li>
          <li>Fashion show featuring female designers</li>
          <li>Film screenings about women's achievements</li>
        </ul>

        <h3>Call to Action</h3>

        <p>Jolly concluded with a powerful call to action:</p>

        <blockquote>"Today, we celebrate. Tomorrow, we continue the work. Each one of us has a role to play in advancing women's equality—whether it's mentoring a young woman, supporting women-owned businesses, challenging sexist attitudes, or running for office ourselves. The future we want won't just happen—we must create it together."</blockquote>

        <h3>Continuing Impact</h3>

        <p>The event sparked ongoing initiatives:</p>

        <ul>
          <li>Formation of women's business cooperatives</li>
          <li>Expansion of the entrepreneurship fund</li>
          <li>Monthly women's networking events</li>
          <li>Advocacy campaigns for gender-equitable policies</li>
          <li>Scholarship program for girls in STEM fields</li>
        </ul>

        <h3>Participant Reflections</h3>

        <blockquote>"This event reminded me that I'm not alone in my struggles and aspirations. Seeing so many successful women and hearing their stories gave me the confidence to pursue my business dreams." - Marie, Aspiring Entrepreneur</blockquote>

        <blockquote>"Jolly's words and the launch of the entrepreneurship fund changed my life. I received a loan, started my business, and now I'm employing three other women." - Claire, Business Owner</blockquote>
      `,
      organizer: 'Rwanda Women\'s Forum',
      venue: 'Intare Conference Arena',
      videoLink: '#',
      tags: ['Women Empowerment', 'Gender Equality', 'Entrepreneurship', 'International Women Day']
    }
  ];

  const engagement = speakingEngagements.find(eng => eng.id === id);

  if (!engagement) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Speaking Engagement Not Found</h1>
          <Link to="/#speaking" className="text-primary hover:text-primary/80">
            Return to Speaking & Appearances
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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary/10 via-background to-primary/10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 bg-secondary/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/#speaking"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Speaking & Appearances
            </Link>

            <motion.span
              className="inline-block px-4 py-2 bg-gradient-to-r from-secondary/20 to-primary/20 text-foreground rounded-full text-sm font-semibold mb-4 border border-secondary/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 400 }}
            >
              {engagement.type}
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {engagement.title}
            </motion.h1>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-3 bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-secondary/20"
                whileHover={{ scale: 1.02, borderColor: 'rgba(147, 51, 234, 0.4)' }}
                transition={{ duration: 0.2 }}
              >
                <Calendar className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-xs text-muted-foreground">Date</p>
                  <p className="font-semibold">{engagement.date}</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-primary/20"
                whileHover={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-semibold">{engagement.location}</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-accent/20"
                whileHover={{ scale: 1.02, borderColor: 'rgba(51, 51, 51, 0.4)' }}
                transition={{ duration: 0.2 }}
              >
                <Users className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Audience</p>
                  <p className="font-semibold">{engagement.audience}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {engagement.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {engagement.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-secondary/10 to-primary/10 text-foreground rounded-full text-sm font-medium border border-secondary/20"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(147, 51, 234, 0.4)' }}
                  transition={{ duration: 0.2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Impact Badge */}
            <motion.div
              className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                >
                  <Award className="w-8 h-8 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    Impact & Legacy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {engagement.impact}
                  </p>
                </div>
              </div>
            </motion.div>

            {engagement.videoLink && (
              <motion.a
                href={engagement.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 400 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Video
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <img
                src={engagement.image}
                alt={engagement.title}
                className="relative w-full h-[500px] md:h-[600px] object-cover object-top rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="text-muted-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: engagement.fullContent }}
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                }}
              />
            </motion.div>

            {/* Additional Info Section */}
            <motion.div
              className="mt-16 grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-br from-secondary/10 to-primary/5 p-6 rounded-2xl border border-secondary/20"
                whileHover={{ scale: 1.02, borderColor: 'rgba(147, 51, 234, 0.4)' }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">Event Details</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">Organizer:</strong> {engagement.organizer}</p>
                  <p><strong className="text-foreground">Venue:</strong> {engagement.venue}</p>
                  <p><strong className="text-foreground">Type:</strong> {engagement.type}</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-primary/10 to-accent/5 p-6 rounded-2xl border border-primary/20"
                whileHover={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">Book Jolly</h3>
                <p className="text-muted-foreground mb-4">
                  Interested in having Jolly speak at your event? Get in touch to discuss availability and topics.
                </p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
                >
                  Contact for Speaking
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="mt-12 text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 p-8 md:p-12 rounded-3xl border border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Want to See More?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore more speaking engagements, workshops, and inspiring talks from Jolly Mutesi.
              </p>
              <Link
                to="/#speaking"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                View All Speaking Engagements
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeakingDetail;