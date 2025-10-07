import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl text-secondary mb-6">
              Somos
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A GuerAço é especializada em soluções em aço para indústrias, construções e projetos personalizados. Atuamos há mais de 15 anos no mercado, oferecendo produtos de alta qualidade, entrega rápida e atendimento especializado.
              </p>
              <p>
                Nosso compromisso é garantir resistência, durabilidade e confiança em cada fornecimento. Utilizamos tecnologia de ponta e os melhores materiais para entregar soluções que superam as expectativas dos nossos clientes.
              </p>
              <p>
                Com uma equipe altamente qualificada e processos rigorosamente controlados, mantemos os mais altos padrões de qualidade em todos os nossos produtos e serviços.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8 mb-8">
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-4xl font-oswald font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-4xl font-oswald font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
            
            <Button size="lg" className="mt-4">
              Conheça Nossa História
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              {/*Assets <img 
                src={steelBeamsImg}
                alt="Estruturas metálicas" 
                className="w-full h-full object-cover"
              />*/}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-oswald font-bold">5K+</div>
              <div className="text-sm font-medium">Projetos Concluídos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
