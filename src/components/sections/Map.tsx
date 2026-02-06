import { motion } from "framer-motion";

export const MapSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border shadow-sm"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.71948502771517!2d79.41153713746884!3d13.615551294530897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4bf259a3041b%3A0x609da1a6eb708c20!2sJanu%20packers%20and%20movers!5e1!3m2!1sen!2sin!4v1684135773827!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};
