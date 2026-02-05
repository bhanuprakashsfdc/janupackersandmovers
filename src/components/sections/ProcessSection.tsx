import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/constants/constants";

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-primary overflow-hidden">
      <div className="container-fluid relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 relative z-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-accent font-semibold text-sm mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-display-sm font-bold text-white mb-4">
            Your Moving Journey Made Simple
          </h2>
          <p className="text-white/70 text-lg">
            From your first inquiry to settling into your new space, we make
            every step seamless and stress-free.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative z-10">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-white/10" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex lg:justify-center mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg shadow-orange">
                      {step.step}
                    </div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 lg:mx-auto text-accent">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-16 w-0.5 h-full bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
