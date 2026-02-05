import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SERVICES, COMPANY } from "@/constants/constants";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <Link to="/services" className="text-accent hover:underline">
              View All Services
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(
    0,
    3
  );

  return (
    <HelmetProvider>
      <SEO
        title={`${service.title} - Professional ${service.title} Services | SwiftMove Packers`}
        description={service.fullDescription}
        keywords={`${service.title.toLowerCase()}, ${service.title.toLowerCase()} services, packers movers ${service.title.toLowerCase()}`}
      />
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

          <div className="container-fluid relative z-10">
            <div className="flex items-center gap-2 text-white/60 mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <span>/</span>
              <span className="text-accent">{service.title}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 text-accent">
                  <service.icon className="w-10 h-10" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-white/80 leading-relaxed mb-8">
                  {service.shortDescription}
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

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Service Highlights
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-white/90"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Details */}
        <section className="section-padding bg-background">
          <div className="container-fluid">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    About Our {service.title} Service
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.fullDescription}
                  </p>

                  {/* Features */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    What's Included
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Key Benefits
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-foreground font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  {/* Quick Contact */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary rounded-2xl p-6 text-white"
                  >
                    <h3 className="text-xl font-bold mb-4">Need This Service?</h3>
                    <p className="text-white/80 mb-6">
                      Get a free quote for {service.title.toLowerCase()} today.
                      Our experts are ready to help.
                    </p>
                    <Button
                      variant="accent"
                      className="w-full mb-3"
                      asChild
                    >
                      <Link to="/contact">Get Free Quote</Link>
                    </Button>
                    <Button
                      variant="heroOutline"
                      className="w-full"
                      asChild
                    >
                      <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
                    </Button>
                  </motion.div>

                  {/* Related Services */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      Related Services
                    </h3>
                    <ul className="space-y-3">
                      {relatedServices.map((related) => (
                        <li key={related.id}>
                          <Link
                            to={`/services/${related.slug}`}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                              <related.icon className="w-5 h-5" />
                            </div>
                            <span className="text-foreground font-medium">
                              {related.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
        <CTASection />
      </Layout>
    </HelmetProvider>
  );
};

export default ServiceDetail;
