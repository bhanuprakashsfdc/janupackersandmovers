import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustBadgesSection } from "@/components/sections/TrustBadgesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SEO_DATA } from "@/constants/constants";
import { MapSection } from "@/components/sections/map";



const Index = () => {
  return (
    <HelmetProvider>
      <SEO
        title={SEO_DATA.home.title}
        description={SEO_DATA.home.description}
        keywords={SEO_DATA.home.keywords}
      />
      <Layout>
        <HeroSection />
        <ServicesSection />
        <TrustBadgesSection />
        <ProcessSection />
        <TestimonialsSection />
        <LocationsSection />
        <FAQSection />
        <MapSection />
        <CTASection />
      </Layout>
    </HelmetProvider>
  );
};

export default Index;
