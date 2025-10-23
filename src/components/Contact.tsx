import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/mutesi_jolly/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/JollyMutesi', label: 'X (Twitter)' },
    { icon: Facebook, href: 'https://facebook.com/1702768153276387?ref=pl_edit_xav_ig_profile_page_web', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@missjollymutesi4044', label: 'YouTube' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and create positive change together
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="max-w-4xl mx-auto">
          <div>
            <Card className="shadow-elegant border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="transition-smooth focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="transition-smooth focus:ring-2 focus:ring-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                      placeholder="Tell me how I can help..."
                    />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant transition-smooth"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>

                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-xl font-display font-semibold mb-6 text-center text-foreground">
                    Connect on Social Media
                  </h3>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-secondary hover:bg-primary flex items-center justify-center transition-smooth group"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground transition-smooth" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;
