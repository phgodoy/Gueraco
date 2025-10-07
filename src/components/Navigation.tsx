import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">

            {/* Texto do logo */}
            <div className="flex flex-col">
              <h1 className="font-oswald font-bold text-lg">
                <span className="text-gray-400">GUER</span>
                <span className="text-blue-1000">AÇO</span>
              </h1>
              <p className="text-xs text-muted-foreground">Aço Estrutural</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-secondary transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('produtos')} className="text-foreground hover:text-secondary transition-colors font-medium">
              Produtos
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-secondary transition-colors font-medium">
              Quem Somos
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-secondary transition-colors font-medium">
              Contato
            </button>
          </div>

          <Button className="hidden md:flex">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
