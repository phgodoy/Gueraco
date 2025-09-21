import { Factory, Truck, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Factory,
      title: "PRODUTOS DE ALTA QUALIDADE",
      description: "Utilizamos apenas materiais de primeira linha e processos rigorosos de controle de qualidade.",
    },
    {
      icon: Truck,
      title: "ENTREGA RÁPIDA",
      description: "Logística otimizada para garantir que seus produtos cheguem no prazo combinado.",
    },
    {
      icon: Users,
      title: "ATENDIMENTO PERSONALIZADO",
      description: "Equipe especializada para atender suas necessidades específicas e oferecer soluções customizadas.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-elevation transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-accent transition-colors font-heading">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;