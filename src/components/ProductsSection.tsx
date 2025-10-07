import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUp } from "lucide-react";
  
{/*Assets */}
import tuboRedondo from "@/assets/TuboRedondo.jpg";
import tuboMetalon from "@/assets/TuboMetalon.jpg";
import telhaSimplesSanduiche from "@/assets/TelhaSimpleseSanduiche.jpg";
import cantoneiraLaminada from "@/assets/CantoneiraLaminada.jpg";
import ferroRedondoMaciço from "@/assets/FerroRedondoMacico.jpg";
import perfilEstrutural from "@/assets/PerfilEstrutural.jpg";

const products = [
  {
    title: "Tubo Redondo",
    description:
      "O tubo redondo é a escolha ideal para quem busca resistência, leveza e versatilidade. Ele suporta impactos em várias direções, garante um acabamento moderno e facilita cortes e soldas, trazendo agilidade para qualquer projeto. Seja em corrimões, móveis, portões ou estruturas metálicas, o tubo redondo entrega robustez sem excesso de peso e com visual diferenciado.",
    image: tuboRedondo
  },
  {
    title: "Perfil Estrutural",
    description:
      "O perfil estrutural é essencial para quem busca resistência e praticidade na obra, sendo amplamente utilizado em galpões, portões, mezaninos e diversas estruturas metálicas. Na GuerAço você encontra os principais tipos: perfil cartola, ideal para serralheria e estruturas leves; perfil enrijecido, perfeito para suportar cargas maiores; e perfil simples, prático e econômico para diferentes projetos.",
    image: perfilEstrutural
  },
  {
    title: "Tubo Metalon",
    description:
      "O tubo metalon é um dos materiais mais versáteis da serralheria e da construção civil, sendo usado em portões, grades, corrimões, móveis e estruturas metálicas em geral. Sua principal vantagem é a combinação de leveza e resistência, garantindo praticidade sem abrir mão da segurança. O formato reto e as medidas padronizadas facilitam cortes, encaixes e soldas, otimizando tempo e proporcionando acabamento profissional.",
    image: tuboMetalon
  },
  {
    title: "Telha Simples e Sanduíche",
    description:
      "A telha galvalume é ideal para quem busca durabilidade, resistência e ótimo custo-benefício. Produzida em aço revestido com alumínio e zinco, oferece proteção contra corrosão, suporta variações climáticas e possui longa vida útil. Leve e prática de instalar, é perfeita para coberturas residenciais, comerciais e industriais. Já a telha sanduíche é composta por duas chapas metálicas com núcleo isolante (EPS ou PU), garantindo conforto térmico e acústico, sendo ideal para galpões, indústrias e residências que buscam eficiência e qualidade de vida.",
    image: telhaSimplesSanduiche
  },
  {
    title: "Cantoneira Laminada",
    description:
      "As cantoneiras laminadas são indispensáveis na construção civil e na serralheria, oferecendo resistência, estabilidade e praticidade em diversos tipos de estruturas. Muito utilizadas em reforços, esquadrias, torres e colunas metálicas, garantem durabilidade e excelente desempenho em projetos que exigem segurança e qualidade.",
    image: cantoneiraLaminada
  },
  {
    title: "Ferro Redondo Maciço",
    description:
      "O ferro redondo maciço se destaca pela robustez e longa vida útil, sendo utilizado em eixos, pinos, corrimões, equipamentos agrícolas, móveis e diversas estruturas metálicas. Sua forma sólida proporciona alta resistência a impactos e torções, tornando-o uma solução confiável e duradoura para diferentes tipos de projetos.",
    image: ferroRedondoMaciço
  }
];


const ProductsSection = () => {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getPreview = (text, isExpanded) => {
    if (isExpanded) return text;
    return text.length > 180 ? text.slice(0, 180) + "..." : text;
  };

  return (
    <section id="produtos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-primary mb-4">
            Produtos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma ampla gama de produtos em aço de alta qualidade para atender às suas necessidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const isExpanded = expanded[index] || false;
            return (
              <Card
                key={index}
                className="group overflow-hidden border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-oswald font-semibold text-2xl text-primary mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {getPreview(product.description, isExpanded)}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => toggleDescription(index)}
                    className="text-secondary hover:text-secondary group/btn p-0 h-auto font-semibold"
                  >
                    {isExpanded ? "Mostrar menos" : "Saiba mais"}
                    {isExpanded ? (
                      <ArrowUp className="ml-2 h-4 w-4 transition-transform" />
                    ) : (
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/*<div className="text-center">
          <Button size="lg" variant="default">
            Ver Todos os Produtos
          </Button>
        </div>*/}
      </div>
    </section>
  );
};

export default ProductsSection;
