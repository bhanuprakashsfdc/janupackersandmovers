import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Target,
  Heart,
  Shield,
  Truck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { COMPANY, SEO_DATA, TRUST_BADGES } from "@/constants/constants";
import { CTASection } from "@/components/sections/CTASection";

const About = () => {
  const milestones = [
    { year: "2009", event: "Founded with a single truck and a vision" },
    { year: "2012", event: "Expanded to 50 cities across India" },
    { year: "2015", event: "Launched vehicle transportation division" },
    { year: "2018", event: "Reached 25,000 successful relocations" },
    { year: "2021", event: "Opened warehousing facilities in 10 metros" },
    { year: "2024", event: "Serving 500+ cities with 50,000+ moves" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Every item is handled with care, packed with premium materials, and insured for your peace of mind.",
    },
    {
      icon: Heart,
      title: "Customer Obsession",
      description:
        "Your satisfaction drives us. We go above and beyond to ensure a stress-free moving experience.",
    },
    {
      icon: Target,
      title: "Precision & Reliability",
      description:
        "On-time delivery, systematic processes, and attention to detail in every step of your move.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Trained, verified, and experienced professionals who treat your belongings like their own.",
    },
  ];

  return (
    <HelmetProvider>
      <SEO
        title={SEO_DATA.about.title}
        description={SEO_DATA.about.description}
        keywords={SEO_DATA.about.keywords}
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-display-md font-bold text-white mb-6">
                Moving India Forward Since 2009
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {COMPANY.name} is India's most trusted name in relocation
                services. With {COMPANY.experience} of dedication, we've helped
                over {COMPANY.happyCustomers} families and businesses move
                seamlessly across {COMPANY.cities} cities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-accent py-8 -mt-1">
          <div className="container-fluid">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: COMPANY.experience, label: "Experience" },
                { value: COMPANY.movesCompleted, label: "Successful Moves" },
                { value: COMPANY.happyCustomers, label: "Happy Customers" },
                { value: COMPANY.cities, label: "Cities Covered" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container-fluid">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From Humble Beginnings to India's Trusted Movers
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    What started as a small family business with one truck and a
                    passion for service has grown into one of India's most
                    reliable moving companies. Our founder's simple philosophy
                    was clear: treat every customer's belongings as if they were
                    your own.
                  </p>
                  <p>
                    Over {COMPANY.experience}, this principle has guided every
                    decision we've made. From investing in the best packing
                    materials to training our team in customer service
                    excellence, we've built a reputation that speaks for itself.
                  </p>
                  <p>
                    Today, we operate across {COMPANY.cities} cities with a fleet
                    of modern vehicles and a team of dedicated professionals.
                    But our core values remain unchanged: safety, reliability,
                    and customer satisfaction above all.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                  <Truck className="w-16 h-16 mb-6 text-accent" />
                  <h3 className="text-2xl font-bold mb-4">
                    Our Journey Through The Years
                  </h3>
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-16 text-accent font-bold">
                          {milestone.year}
                        </div>
                        <div className="text-white/80">{milestone.event}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-gradient-surface">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Drives Us Every Day
              </h2>
              <p className="text-muted-foreground text-lg">
                Our values are not just words on paper—they're the foundation of
                every move we handle.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="section-padding bg-background">
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                Recognition
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Awards & Certifications
              </h2>
              <p className="text-muted-foreground text-lg">
                Our commitment to excellence has been recognized by industry
                bodies and customers alike.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Best Packers & Movers",
                  org: "India Moving Association",
                  year: "2022, 2023, 2024",
                },
                {
                  title: "Customer Excellence Award",
                  org: "Service Quality Council",
                  year: "2023",
                },
                {
                  title: "ISO 9001:2015 Certified",
                  org: "Quality Management",
                  year: "Since 2018",
                },
              ].map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-1">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{award.org}</p>
                  <p className="text-accent text-sm font-medium mt-2">
                    {award.year}
                  </p>
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

export default About;
