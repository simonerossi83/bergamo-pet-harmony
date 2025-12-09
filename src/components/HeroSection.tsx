import { Button } from "@/components/ui/button";
import { Heart, Shield, Star } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/39XXXXXXXXXX?text=Ciao! Vorrei informazioni sui servizi di pet sitting.", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPets}
          alt="Cane e gatto felici su un divano accogliente"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-pink/50 text-accent-foreground px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Tecnico Veterinario Qualificato</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Amore e cura per i tuoi{" "}
            <span className="text-primary">amici a quattro zampe</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Pet sitting professionale a Bergamo. Mentre sei via, i tuoi cani e gatti riceveranno tutto l'amore, 
            le coccole e le attenzioni che meritano.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" onClick={handleWhatsAppClick}>
              Contattami su WhatsApp
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">Scopri i Servizi</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">5.0 su Google</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="h-5 w-5 text-pink fill-pink" />
              <span className="text-sm">+150 animali accuditi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary/60 hover:text-primary transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
