import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { SERVICES, SEO_DATA } from "@/constants/constants";
import { CTASection } from "@/components/sections/CTASection";

const Services = () => {
  return (
    <HelmetProvider>
      <SEO
        title={SEO_DATA.services.title}
        description={SEO_DATA.services.description}
        keywords={SEO_DATA.services.keywords}
      />
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

          <div className="container-fluid relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-accent font-semibold text-sm mb-6">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-display-md font-bold text-white mb-6">
                Complete Relocation Solutions for Every Need
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                From household shifting to industrial relocations, we offer
                comprehensive moving services tailored to your specific
                requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-fluid">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block h-full bg-card rounded-2xl border border-border hover:border-accent overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Icon Header */}
                    <div className="bg-gradient-surface p-8 flex justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                        <service.icon className="w-10 h-10" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Features Preview */}
                      <ul className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-2 text-accent font-semibold">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </HelmetProvider>
  );
};

export default Services;
