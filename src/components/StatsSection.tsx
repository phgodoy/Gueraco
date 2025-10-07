import { Users, TrendingUp, Briefcase, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12K",
    label: "Clientes"
  },
  {
    icon: TrendingUp,
    value: "55%",
    label: "Crescimento Anual"
  },
  {
    icon: Briefcase,
    value: "5K",
    label: "Número de Projetos"
  },
  {
    icon: Star,
    value: "99%",
    label: "Avaliações Positivas"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-4xl font-oswald font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
