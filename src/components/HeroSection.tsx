import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Estruturas de Alta Qualidade</span>
          </div>
          
          <h1 className="font-oswald font-bold text-5xl md:text-7xl mb-6 leading-tight">
            <span className="text-white">AÇO DE ALTA</span>
            <br />
            <span className="text-accent">QUALIDADE</span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Estruturas metálicas resistentes e personalizadas para indústrias, construções e projetos especiais.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { value: "12K+", label: "Clientes" },
              { value: "55%", label: "Crescimento" },
              { value: "5K+", label: "Projetos" },
              { value: "99%", label: "Avaliações" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-oswald font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
            href="https://wa.me/16991760284?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20com%20a%20GuerAço.%20Vi%20que%20vocês%20trabalham%20com%20soluções%20em%20aço%20para%20indústrias%20e%20construções%2C%20e%20quero%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold group">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
            <Button onClick={() => scrollToSection('produtos')} size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold">
              Ver Nossos Produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
