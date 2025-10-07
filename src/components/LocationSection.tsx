import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-secondary mb-4">
            Nossa Localização
          </h2>
          <p className="text-muted-foreground text-lg">
            Visite nossa sede em Ribeirão Preto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-oswald font-bold text-2xl text-primary mb-2">
                    Endereço Completo
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rua Armiro Barbosa, 185<br />
                    Jardim Jóquei Clube<br />
                    Ribeirão Preto, SP<br />
                    CEP: 14090-000
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8 p-6 bg-muted rounded-lg">
                <h4 className="font-oswald font-semibold text-lg text-primary">
                  Horário de Funcionamento
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-semibold">7h às 17h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-semibold">7h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-semibold">Fechado</span>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Navigation className="w-4 h-4 mr-2" />
                Como Chegar
              </Button>
            </CardContent>
          </Card>

          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl border-2 border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4547634890947!2d-47.8169!3d-21.1767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzM2LjEiUyA0N8KwNDknMDAuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
