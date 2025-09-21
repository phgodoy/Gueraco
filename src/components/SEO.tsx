import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "GuerAço - Estruturas Metálicas de Alta Qualidade | Aço Industrial",
  description = "GuerAço oferece estruturas metálicas de alta qualidade para indústrias e construções. Tubos, telhas, vigas e projetos personalizados com entrega rápida em Ribeirão Preto, SP.",
  keywords = "estruturas metálicas, aço industrial, tubos de aço, telhas metálicas, vigas estruturais, Ribeirão Preto",
  image = "/og-image.jpg",
  url = "https://gueraco.lovable.app"
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'website', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Structured data
    let structuredData = document.querySelector('#structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      structuredData.setAttribute('id', 'structured-data');
      document.head.appendChild(structuredData);
    }

    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GuerAço Estruturas Metálicas",
      "alternateName": "GuerAço",
      "description": description,
      "url": url,
      "logo": `${url}/logo.png`,
      "image": `${url}${image}`,
      "telephone": "+55-16-3615-9230",
      "email": "contato@gueraco.com.br",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Armiro Barbosa, 185",
        "addressLocality": "Ribeirão Preto",
        "addressRegion": "SP",
        "postalCode": "14040-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-21.1767",
        "longitude": "-47.8208"
      },
      "openingHours": [
        "Mo-Fr 07:00-17:00",
        "Sa 07:00-12:00"
      ],
      "founder": {
        "@type": "Person",
        "name": "Paulo Guerra"
      },
      "foundingDate": "2009",
      "numberOfEmployees": "10-50",
      "areaServed": {
        "@type": "State",
        "name": "São Paulo"
      },
      "serviceType": [
        "Estruturas Metálicas",
        "Tubos de Aço", 
        "Telhas Metálicas",
        "Vigas Estruturais",
        "Projetos Personalizados"
      ]
    };

    structuredData.textContent = JSON.stringify(organizationData);

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;