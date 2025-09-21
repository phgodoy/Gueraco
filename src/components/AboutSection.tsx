import { Button } from "@/components/ui/button";
import { Shield, Award, Clock, Star, Users } from "lucide-react";
import steelBeams from "@/assets/steel-beams.jpg";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "12K", label: "Clientes", color: "text-accent" },
    { icon: Award, value: "55%", label: "Crescimento Anual", color: "text-accent" },
    { icon: Star, value: "5K", label: "Número de Projetos", color: "text-accent" },
    { icon: Shield, value: "99%", label: "Avaliações Positivas", color: "text-accent" },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Quem <span className="text-transparent bg-gradient-accent bg-clip-text">Somos</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A GuerAço é especializada em soluções em aço para indústrias, construções e 
                projetos personalizados. Atuamos há mais de 15 anos no mercado, oferecendo 
                produtos de alta qualidade, entrega rápida e atendimento especializado.
              </p>
              
              <p>
                Nosso compromisso é garantir resistência, durabilidade e confiança em cada 
                fornecimento. Utilizamos tecnologia de ponta e os melhores materiais para 
                entregar soluções que superam as expectativas dos nossos clientes.
              </p>
              
              <p>
                Com uma equipe altamente qualificada e processos rigorosamente controlados, 
                mantemos os mais altos padrões de qualidade em todos os nossos produtos e serviços.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="hero" size="lg">
                Conheça Nossa História
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevation">
              <img
                src={steelBeams}
                alt="Estruturas metálicas em estoque"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-elevation">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">15+</div>
                  <div className="text-xs text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Garantia de Qualidade</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 mx-auto mb-4 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;