import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { GALLERY_CATEGORIES, SEO_DATA } from "@/constants/constants";
import { CTASection } from "@/components/sections/CTASection";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("packing");

  // Placeholder gallery items
  const galleryItems = [
    { id: 1, category: "packing", title: "Professional Packing" },
    { id: 2, category: "packing", title: "Fragile Item Handling" },
    { id: 3, category: "packing", title: "Electronics Packing" },
    { id: 4, category: "loading", title: "Systematic Loading" },
    { id: 5, category: "loading", title: "Heavy Furniture Moving" },
    { id: 6, category: "loading", title: "Team at Work" },
    { id: 7, category: "fleet", title: "Modern Fleet" },
    { id: 8, category: "fleet", title: "Container Trucks" },
    { id: 9, category: "warehouse", title: "Storage Facility" },
    { id: 10, category: "warehouse", title: "Climate Control" },
    { id: 11, category: "team", title: "Expert Team" },
    { id: 12, category: "delivery", title: "Safe Delivery" },
  ];

  const filteredItems = galleryItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <HelmetProvider>
      <SEO
        title={SEO_DATA.gallery.title}
        description={SEO_DATA.gallery.description}
        keywords={SEO_DATA.gallery.keywords}
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
                Gallery
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-display-md font-bold text-white mb-6">
                Our Work in Pictures
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                See the quality and care we put into every move. Browse through
                our gallery showcasing our professional packing, fleet, and
                successful deliveries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-background">
          <div className="container-fluid">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {GALLERY_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-accent text-white"
                      : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted"
                >
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">📦</span>
                      </div>
                      <span className="text-foreground/50 text-sm">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Note */}
            <p className="text-center text-muted-foreground mt-8">
              More photos from our recent moves. Contact us to see more examples
              relevant to your move type.
            </p>
          </div>
        </section>

        <CTASection />
      </Layout>
    </HelmetProvider>
  );
};

export default Gallery;
