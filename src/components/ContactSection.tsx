import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rua Armiro Barbosa, 185", "Jardim Jóquei Clube", "Ribeirão Preto, SP"],
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["(16) 3615-9230", "WhatsApp: (16) 99136-6236"],
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@gueraco.com.br", "vendas@gueraco.com.br"],
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: ["Segunda à Sexta: 7h às 17h", "Sábado: 7h às 12h"],
    },
  ];

  const salesTeam = [
    {
      name: "DAGMAR",
      phone: "16 9709-6075",
      email: "dagmar.jose@terra.com.br",
    },
    {
      name: "PAULO GUERRA",
      phone: "16 99136-6236",
      email: "paulo.gueraco@gmail.com",
    },
    {
      name: "GABRIEL",
      phone: "16 9176-0284",
      email: "gabriel.gueraco@gmail.com",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-transparent bg-gradient-accent bg-clip-text">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco e faça seu orçamento. Nossa equipe está pronta para atender suas necessidades.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="bg-card border-border/50 hover:border-accent/50 transition-all duration-300 group hover:shadow-elevation">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow">
                    <IconComponent className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Sales Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Nossa Equipe de <span className="text-transparent bg-gradient-accent bg-clip-text">Vendas</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salesTeam.map((member, index) => (
              <Card key={index} className="bg-card border-border/50 hover:border-accent/50 transition-all duration-300 group hover:shadow-elevation">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-metal rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-foreground">{member.name.charAt(0)}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {member.name}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-accent" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 text-accent" />
                      <span className="break-all">{member.email}</span>
                    </div>
                  </div>
                  <Button variant="industrial" size="sm" className="mt-4 w-full">
                    Entrar em Contato
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 shadow-elevation">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solicite um orçamento personalizado e descubra como podemos ajudar a transformar suas ideias em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Solicitar Orçamento Agora
            </Button>
            <Button variant="spark" size="lg">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;