import { motion } from "framer-motion";
import { TRUST_BADGES } from "@/constants/constants";

export const TrustBadgesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-fluid">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-display-sm font-bold text-foreground mb-4">
            India's Most Trusted Moving Partner
          </h2>
          <p className="text-muted-foreground text-lg">
            15+ years of excellence in making relocations seamless, safe, and
            stress-free for families and businesses across India.
          </p>
        </motion.div>

        {/* Trust Badges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_BADGES.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="trust-badge group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <badge.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {badge.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
