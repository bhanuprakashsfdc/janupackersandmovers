import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { FAQ } from "@/constants/constants";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayFAQs = FAQ.slice(0, 8);

  return (
    <section className="section-padding bg-gradient-surface">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get answers to common questions about our packing, moving, and
              relocation services. Can't find what you're looking for? Contact
              us directly.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-3 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-muted-foreground text-sm">
                  Customer Support
                </div>
              </div>
              <div className="px-4 py-3 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-foreground">30 Min</div>
                <div className="text-muted-foreground text-sm">
                  Response Time
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Accordion */}
          <div className="space-y-4">
            {displayFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        openIndex === index
                          ? "bg-accent text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
