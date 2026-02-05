import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { LOCATIONS } from "@/constants/constants";

export const LocationsSection = () => {
  const featuredLocations = LOCATIONS.slice(0, 8);

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
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-display-sm font-bold text-foreground mb-4">
            We Cover All Major Cities in India
          </h2>
          <p className="text-muted-foreground text-lg">
            With our extensive network spanning 500+ cities, we're always close
            to you for reliable moving services.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/${location.slug}`}
                className="group block p-6 rounded-xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {location.city}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {location.state}
                    </p>
                    <div className="mt-2 text-accent text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Services
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Cities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            View All 500+ Service Cities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
