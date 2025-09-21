import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-welding.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Soldagem industrial com faíscas"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Sparkles Effect */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-spark rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-spark rounded-full animate-pulse delay-700"></div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Estruturas de Alta Qualidade</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            AÇO DE ALTA{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              QUALIDADE
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Estruturas metálicas resistentes e personalizadas para indústrias, construções e projetos especiais.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">12K+</div>
              <div className="text-sm text-muted-foreground">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">55%</div>
              <div className="text-sm text-muted-foreground">Crescimento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">5K+</div>
              <div className="text-sm text-muted-foreground">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">99%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" className="group">
              Solicitar Orçamento
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="spark" size="xl">
              Ver Nossos Produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;