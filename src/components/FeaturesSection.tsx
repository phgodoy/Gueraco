import { Factory, Truck, Users } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "PRODUTOS DE ALTA QUALIDADE",
    description: "Utilizamos apenas materiais de primeira linha e processos rigorosos de controle de qualidade."
  },
  {
    icon: Truck,
    title: "ENTREGA RÁPIDA",
    description: "Logística otimizada para garantir que seus produtos cheguem no prazo combinado."
  },
  {
    icon: Users,
    title: "ATENDIMENTO PERSONALIZADO",
    description: "Equipe especializada para atender suas necessidades específicas."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-oswald font-bold text-xl text-white mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
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
