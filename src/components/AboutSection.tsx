import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Faz o conteúdo ocupar as 2 colunas */}
          <div className="md:col-span-2 flex flex-col items-center text-center">
            <h2 className="font-oswald font-bold text-4xl md:text-5xl text-secondary mb-6">
              Somos
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
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

            <div className="grid grid-cols-2 gap-6 mt-8 mb-8 max-w-md mx-auto">
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-4xl font-oswald font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-4xl font-oswald font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Se for descomentar a imagem, coloque-a aqui como 2ª coluna e remova md:col-span-2 acima */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
