const Footer = () => {
const productLinks = [
    "Tubo Redondo",
    "Perfil Estrutural",
    "Tubo Metalon",
    "Telha Simples e Sanduíche",
    "Cantoneira Laminada",
    "Ferro Redondo Maciço"
  ];
  
  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "Produtos", href: "#produtos" },
    { label: "Quem Somos", href: "#sobre" },
    { label: "Contato", href: "#contato" },
    { label: "Localização", href: "#local" }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div>
                 <span className="text-gray-400">GUER</span>
                 <span className="text-blue-1000">AÇO</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Especialistas em soluções em aço de alta qualidade para indústrias, construções e projetos personalizados há mais de 15 anos.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                📍 Ribeirão Preto, SP
              </p>
              <p className="flex items-center gap-2">
                📞 (16) 3615-9230
              </p>
              <p className="flex items-center gap-2">
                ✉️ contato@gueraco.com.br
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-oswald font-semibold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald font-semibold text-lg mb-6">Produtos</h4>
            <ul className="space-y-3">
              {productLinks.map((product, index) => (
                <li key={index}>
                  <a href="#produtos" className="text-white/80 hover:text-accent transition-colors text-sm">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald font-semibold text-lg mb-6">Horário de Funcionamento</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white/90 font-medium">Segunda a Sexta</p>
                <p className="text-white/70">7h às 17h</p>
              </div>
              <div>
                <p className="text-white/90 font-medium">Sábado</p>
                <p className="text-white/70">7h às 12h</p>
              </div>
              <div>
                <p className="text-white/90 font-medium">Domingo</p>
                <p className="text-white/70">Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              © 2025 GuerAço - Aço Estrutural. Todos os direitos reservados.
            </p>
             {/*<div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
             </div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
