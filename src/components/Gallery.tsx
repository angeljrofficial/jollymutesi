import heroImage from '@/assets/hero-image.jpg';
import speakingEvent from '@/assets/speaking-event.jpg';
import communityWork from '@/assets/community-work.jpg';
import nutritionProgram from '@/assets/nutrition-program.jpg';
import youthWorkshop from '@/assets/youth-workshop.jpg';
import aboutPortrait from '@/assets/about-portrait.jpg';

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
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through pageantry, public speaking, community service, and empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-smooth aspect-[4/3] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end">
                <div className="p-6 w-full">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
