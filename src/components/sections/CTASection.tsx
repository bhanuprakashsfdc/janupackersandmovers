import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA_CONTENT, COMPANY } from "@/constants/constants";

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-fluid relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {CTA_CONTENT.primary.title}
          </h2>
          <p className="text-xl md:text-2xl text-accent font-semibold mb-4">
            {CTA_CONTENT.primary.subtitle}
          </p>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            {CTA_CONTENT.primary.description}
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "Free Survey & Quote",
              "No Hidden Charges",
              "Insurance Included",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="font-medium">{point}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild className="cta-glow">
              <Link to="/contact.html">
                {CTA_CONTENT.primary.buttonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href={`tel:${COMPANY.phone}`}>
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
