import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const salesTeam = [
  {
    initial: "G",
    name: "GABRIEL",
    phone: "16 99176-0284",
    email: "gabriel.gueraco@gmail.com"
  },
  {
    initial: "P",
    name: "PAULO",
    phone: "16 99136-6236",
    email: "paulo.gueraco@gmail.com"
  },
  {
    initial: "D",
    name: "DAGMAR",
    phone: "16 99709-6075",
    email: "dagmar.jose@terra.com.br"
  },
];

const SalesSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-secondary mb-4">
            Vendas
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato com nossa equipe de vendas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {salesTeam.map((member, index) => (
            <Card key={index} className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-oswald font-bold text-white">
                    {member.initial}
                  </span>
                </div>
                <h3 className="font-oswald font-bold text-2xl text-secondary mb-6">
                  {member.name}
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{member.email}</span>
                  </div>
                </div>
                <Button className="w-full">
                  Entrar em Contato
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
