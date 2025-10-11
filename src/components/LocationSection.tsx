import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="local" className="py-24 bg-background">
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

              <Button
                asChild
                className="w-full"
                size="lg"
              >
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua%20Armiro%20Barbosa%2C%20185%2C%20Ribeir%C3%A3o%20Preto%2C%20SP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Como Chegar
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl border-2 border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.865433832837!2d-47.771629289409745!3d-21.157752880442775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf8204665d6f%3A0xd1adab6daad46d03!2sR.%20Armiro%20Barbosa%2C%20185%20-%20Jardim%20Joquei%20Clube%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1760211285269!5m2!1spt-BR!2sbr"
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
