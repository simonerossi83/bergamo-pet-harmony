import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, MapPin, Clock, Phone } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/39XXXXXXXXXX?text=Ciao! Vorrei informazioni sui servizi di pet sitting.", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Zona Servita",
      value: "Bergamo e provincia",
    },
    {
      icon: Clock,
      label: "Disponibilità",
      value: "Lun - Dom, 7:00 - 21:00",
    },
    {
      icon: Phone,
      label: "Telefono",
      value: "+39 XXX XXX XXXX",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@bergamopetharmony.it",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div>
            <span className="inline-block text-sm font-medium text-primary bg-sage-light px-4 py-2 rounded-full mb-4">
              Contatti
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Pronta a prendermi cura del tuo <span className="text-primary">amico peloso?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Contattami per un primo incontro conoscitivo gratuito. Sarò felice di incontrare 
              te e il tuo animale per capire come posso aiutarvi al meglio.
            </p>

            {/* WhatsApp CTA */}
            <Button 
              variant="whatsapp" 
              size="xl" 
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto mb-8"
            >
              <MessageCircle className="h-5 w-5" />
              Scrivimi su WhatsApp
            </Button>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-sage-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card Column */}
          <Card className="border-0 shadow-elevated bg-gradient-to-br from-card to-sage-light/30 overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Primo incontro gratuito
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Prima di iniziare qualsiasi servizio, organizzo sempre un incontro conoscitivo 
                  per presentarmi al tuo animale e capire le sue esigenze specifiche.
                </p>
                <ul className="text-left space-y-3 mb-8">
                  {[
                    "Incontro a casa tua o in un parco",
                    "Conosciamo insieme il tuo animale",
                    "Parliamo delle sue abitudini",
                    "Nessun impegno, solo informazioni",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <div className="w-6 h-6 bg-pink/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  className="w-full"
                >
                  Prenota il tuo incontro
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
