import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Award, Clock } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";

const AboutSection = () => {
  const credentials = [
    { icon: GraduationCap, text: "Tecnico Veterinario" },
    { icon: Award, text: "5+ anni di esperienza" },
    { icon: Heart, text: "Passione autentica" },
    { icon: Clock, text: "Disponibilità flessibile" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={aboutPhoto}
                alt="Giulia, pet sitter professionista con un cagnolino"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-4 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-display text-foreground">Tecnico Veterinario</p>
                      <p className="text-sm text-muted-foreground">Certificato e qualificato</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink/40 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sage-light rounded-full blur-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div className="animate-slide-in-right">
            <Badge variant="secondary" className="mb-4 bg-pink/50 text-accent-foreground border-0">
              Chi Sono
            </Badge>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Ciao, sono <span className="text-primary">Giulia</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sono una <strong className="text-foreground">tecnico veterinario</strong> con una passione 
                profonda per gli animali che va oltre la professione. Da oltre 5 anni mi prendo cura di 
                cani e gatti nella zona di Bergamo, offrendo un servizio di pet sitting attento e personalizzato.
              </p>
              <p>
                La mia formazione veterinaria mi permette di <strong className="text-foreground">riconoscere 
                segnali di disagio</strong>, somministrare farmaci quando necessario e garantire sempre 
                il massimo benessere per i tuoi amici pelosi.
              </p>
              <p>
                Quando affidi a me il tuo animale, non è solo in buone mani: è in 
                <strong className="text-foreground"> mani esperte che lo ameranno</strong> come fai tu.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border/50"
                >
                  <div className="w-10 h-10 bg-sage-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <cred.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{cred.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
