import { Heart, PawPrint } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-light py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="font-display text-xl text-primary">Bergamo Pet Harmony</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">Chi Sono</a>
            <a href="#services" className="hover:text-primary transition-colors">Servizi</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonianze</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contatti</a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/20 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Bergamo Pet Harmony. Fatto con <Heart className="h-4 w-4 text-pink fill-pink" /> a Bergamo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
