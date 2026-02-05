import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { MapPin, CheckCircle2, Phone, ArrowRight, Star } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { LOCATIONS, SERVICES, COMPANY, FAQ } from "@/constants/constants";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

const LocationDetail = () => {
  const { slug } = useParams();
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
            <Link to="/locations" className="text-accent hover:underline">
              View All Locations
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Location-specific schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: `${COMPANY.name} - ${location.city}`,
    description: location.metaDescription,
    url: `/${location.slug}`,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: "IN",
    },
    areaServed: location.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  };

  return (
    <HelmetProvider>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        keywords={`packers movers ${location.city}, ${location.city} relocation, house shifting ${location.city}`}
        structuredData={localBusinessSchema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

          <div className="container-fluid relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/locations"
                className="hover:text-white transition-colors"
              >
                Locations
              </Link>
              <span>/</span>
              <span className="text-accent">{location.city}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-white/70 text-sm">{location.state}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-white/70 text-sm">
                        4.9 (500+ reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {location.heroTitle}
                </h1>
                <p className="text-xl text-white/80 leading-relaxed mb-8">
                  {location.heroDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="accent" size="lg" asChild>
                    <Link to="/contact">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <a href={`tel:${COMPANY.phone}`}>
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>

              {/* Local Features */}
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Why Choose Us in {location.city}
                  </h3>
                  <ul className="space-y-3">
                    {location.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-white/90"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-background">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                Service Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Areas We Serve in {location.city}
              </h2>
              <p className="text-muted-foreground text-lg">
                We provide complete packing and moving services across all major
                localities in {location.city} and surrounding areas.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3 justify-center">
              {location.areas.map((area, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="px-4 py-2 rounded-full bg-card border border-border text-foreground hover:border-accent hover:bg-accent/5 transition-colors cursor-default"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Services in Location */}
        <section className="section-padding bg-gradient-surface">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Moving Services in {location.city}
              </h2>
              <p className="text-muted-foreground text-lg">
                Complete range of relocation services tailored for{" "}
                {location.city}'s unique requirements.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block h-full bg-card rounded-xl border border-border p-6 hover:border-accent hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title} in {location.city}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Trust Proof */}
        <section className="py-16 bg-accent">
          <div className="container-fluid">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: "5000+", label: `Moves in ${location.city}` },
                { value: "4.9★", label: "Local Rating" },
                { value: "Same Day", label: "Service Available" },
                { value: "Free", label: "Survey & Quote" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection />
        <CTASection />
      </Layout>
    </HelmetProvider>
  );
};

export default LocationDetail;
