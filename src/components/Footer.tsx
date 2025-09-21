import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Produtos", href: "#produtos" },
    { name: "Quem Somos", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  const products = [
    "Tubo Redondo",
    "Telha Vagalume",
    "Vigas Estruturais",
    "Perfis Metálicos",
    "Chapas de Aço",
    "Estruturas Personalizadas",
  ];

  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">GUERAÇO</h1>
                <p className="text-xs text-muted-foreground">Estruturas Metálicas</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Especialistas em soluções em aço de alta qualidade para indústrias, 
              construções e projetos personalizados há mais de 15 anos.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Ribeirão Preto, SP</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">(16) 3615-9230</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">contato@gueraco.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Nossos Produtos</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-muted-foreground hover:text-accent transition-colors duration-300 cursor-pointer">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Contato</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Endereço:</h4>
                <p className="text-sm text-muted-foreground">
                  Rua Armiro Barbosa, 185<br />
                  Jardim Jóquei Clube<br />
                  Ribeirão Preto, SP
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Horário:</h4>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Seg-Sex: 7h às 17h</span>
                </div>
                <p className="text-sm text-muted-foreground ml-6">Sáb: 7h às 12h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 GuerAço - Estruturas Metálicas. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;