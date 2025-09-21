import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import steelTubes from "@/assets/steel-tubes.jpg";
import metalRoofing from "@/assets/metal-roofing.jpg";
import steelBeams from "@/assets/steel-beams.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Tubo Redondo",
      description: "Tubos redondos de aço de alta resistência para diversas aplicações industriais e estruturais.",
      image: steelTubes,
    },
    {
      id: 2,
      name: "Telha Vagalume",
      description: "Telhas metálicas onduladas com excelente resistência e durabilidade para coberturas.",
      image: metalRoofing,
    },
    {
      id: 3,
      name: "Vigas Estruturais",
      description: "Vigas e perfis estruturais para construção civil e projetos industriais de grande porte.",
      image: steelBeams,
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-transparent bg-gradient-accent bg-clip-text">Produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de produtos em aço de alta qualidade para atender às suas necessidades específicas.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-card border-border/50 hover:border-accent/50 transition-all duration-300 group hover:shadow-elevation">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;