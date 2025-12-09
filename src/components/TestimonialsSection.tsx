import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marco B.",
      pet: "Labrador di 3 anni",
      text: "Giulia è fantastica! Il nostro Leo adora le passeggiate con lei. Sempre puntuale e le foto che ci manda ci fanno stare tranquilli durante i viaggi di lavoro.",
      rating: 5,
    },
    {
      name: "Francesca T.",
      pet: "2 gatti persiani",
      text: "Finalmente qualcuno di cui posso fidarmi per i miei mici. Giulia capisce davvero i gatti e la sua formazione veterinaria è un plus incredibile.",
      rating: 5,
    },
    {
      name: "Luca e Sara",
      pet: "Golden Retriever anziano",
      text: "Il nostro Rocky ha bisogno di farmaci quotidiani. Sapere che una professionista qualificata se ne prende cura ci dà una tranquillità enorme.",
      rating: 5,
    },
    {
      name: "Alessia M.",
      pet: "Beagle energico",
      text: "Consiglio Giulia a tutti! Milo torna sempre stanco e felice dalle sue passeggiate. Si vede che ama davvero gli animali.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-sage-light/50">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-accent-foreground bg-pink/50 px-4 py-2 rounded-full mb-4">
            Testimonianze
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Cosa dicono di me
          </h2>
          <p className="text-muted-foreground text-lg">
            Le parole dei miei clienti (e dei loro amici a quattro zampe!)
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-card bg-card hover:shadow-elevated transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-pink/60 mb-4" />
                
                {/* Text */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
