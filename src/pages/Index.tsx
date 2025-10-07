import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import SalesSection from "@/components/SalesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <AboutSection />
      <StatsSection />
      <ContactSection />
      <LocationSection />
      <SalesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
