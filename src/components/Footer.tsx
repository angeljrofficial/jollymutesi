const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-2 bg-gradient-gold bg-clip-text text-transparent">
            Jolly Mutesi
          </h3>
          <p className="text-accent-foreground/80 mb-4">
            Beauty, Leadership & Empowerment
          </p>
          <p className="text-sm text-accent-foreground/60">
            © {new Date().getFullYear()} Jolly Mutesi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
