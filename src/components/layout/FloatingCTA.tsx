import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, FileText } from "lucide-react";
import { COMPANY } from "@/constants/constants";

export const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Desktop Sticky Call Button */}
      <div className="hidden md:block fixed bottom-6 left-6 z-40">
        <motion.a
          href={`tel:${COMPANY.phone}`}
          className="flex items-center gap-3 bg-accent text-white px-5 py-3 rounded-full shadow-orange hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
          >
            <Phone className="w-5 h-5" />
          </motion.div>
          <span className="font-semibold">{COMPANY.phone}</span>
        </motion.a>
      </div>

      {/* Mobile Floating Action Buttons */}
      <div className="md:hidden fixed bottom-4 right-4 z-40">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3"
            >
              <motion.a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 bg-accent text-white px-4 py-3 rounded-full shadow-lg whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Call Now</span>
              </motion.a>
              <motion.a
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I need a moving quote`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 whatsapp-btn text-white px-4 py-3 rounded-full whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">WhatsApp</span>
              </motion.a>
              <motion.a
                href="/contact"
                className="flex items-center gap-2 bg-primary text-white px-4 py-3 rounded-full shadow-lg whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">Get Quote</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors ${
            isExpanded ? "bg-foreground text-white" : "bg-accent text-white"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isExpanded ? {} : { scale: [1, 1.1, 1] }}
          transition={isExpanded ? {} : { repeat: Infinity, duration: 2 }}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Desktop WhatsApp Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <motion.a
          href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I need a moving quote`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 whatsapp-btn text-white px-5 py-3 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <MessageCircle className="w-5 h-5" />
          </motion.div>
          <span className="font-semibold">WhatsApp Us</span>
        </motion.a>
      </div>
    </>
  );
};
