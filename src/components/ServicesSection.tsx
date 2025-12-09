import { Dog, Cat, Utensils, Pill, Camera, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Passeggiate",
      description: "Passeggiate su misura per il tuo cane, nel quartiere o nei parchi di Bergamo. Durata e intensità adattate alle esigenze.",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Dog,
      title: "Gioco e Compagnia",
      description: "Sessioni di gioco stimolanti e coccole per combattere la noia e mantenere il tuo amico felice mentre sei fuori.",
      color: "bg-pink/30",
      iconColor: "text-pink-dark",
    },
    {
      icon: Utensils,
      title: "Pasti e Idratazione",
      description: "Somministrazione puntuale di cibo e acqua fresca, rispettando le routine alimentari del tuo animale.",
      color: "bg-sage-light",
      iconColor: "text-primary",
    },
    {
      icon: Pill,
      title: "Farmaci e Cure",
      description: "Grazie alla mia formazione veterinaria, posso somministrare farmaci e monitorare lo stato di salute.",
      color: "bg-pink/30",
      iconColor: "text-pink-dark",
    },
    {
      icon: Camera,
      title: "Aggiornamenti Foto/Video",
      description: "Ricevi foto e video del tuo amico durante la giornata. Così sai sempre che sta bene e si diverte!",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Cat,
      title: "Cura Gatti",
      description: "Visite a domicilio per i tuoi mici: pulizia lettiera, gioco, cibo e tanto amore per i felini più esigenti.",
      color: "bg-sage-light",
      iconColor: "text-primary",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-primary bg-sage-light px-4 py-2 rounded-full mb-4">
            I Miei Servizi
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Tutto ciò che serve ai tuoi <span className="text-primary">amici pelosi</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Servizi personalizzati per cani e gatti, sempre con amore e professionalità.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
                <CardTitle className="font-display text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
