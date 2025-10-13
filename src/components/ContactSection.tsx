import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Localização",
    content: ["Rua Armiro Barbosa, 185", "Jardim Jóquei Clube", "Ribeirão Preto, SP"]
  },
  {
    icon: Phone,
    title: "Telefone",
    content: ["(16) 3615-9230", "WhatsApp: (16) 997096075"]
  },
  {
    icon: Mail,
    title: "E-mail",
    content: ["pvguerra@gmail.com", "gabriel.gueraco@gmail.com"]
  },
  {
    icon: Clock,
    title: "Horário",
    content: ["Segunda a Sexta: 7h às 17h:30", "Sábado e Domingo: Fechado"]
  }
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-secondary mb-4">
            Contato
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Entre em contato conosco e faça seu orçamento. Nossa equipe está pronta para atender suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-oswald font-semibold text-lg text-primary mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.content.map((line, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
