import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  Send,
} from "lucide-react";
import { COMPANY, QUOTE_FORM, SEO_DATA, SERVICES } from "@/constants/constants";
import { MapSection } from "@/components/sections/map";

const Contact = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    moveType: "",
    fromCity: "",
    toCity: "",
    moveDate: "",
    homeType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setFormStep(3); // Show success
  };

  return (
    <HelmetProvider>
      <SEO
        title={SEO_DATA.contact.title}
        description={SEO_DATA.contact.description}
        keywords={SEO_DATA.contact.keywords}
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
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-display-md font-bold text-white mb-6">
                Get Your Free Moving Quote
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Tell us about your move and receive a detailed quote within 30
                minutes. No obligations, completely free.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background -mt-10">
          <div className="container-fluid">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
                  {/* Progress Steps */}
                  <div className="flex items-center justify-between mb-8">
                    {[1, 2].map((step) => (
                      <div
                        key={step}
                        className={`flex items-center ${
                          step < 2 ? "flex-1" : ""
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            formStep >= step
                              ? "bg-accent text-white"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {formStep > step ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            step
                          )}
                        </div>
                        {step < 2 && (
                          <div
                            className={`flex-1 h-1 mx-4 ${
                              formStep > step ? "bg-accent" : "bg-muted"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {formStep === 3 ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-success" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Quote Request Submitted!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Our team will contact you within 30 minutes with a
                        detailed quote. Thank you for choosing {COMPANY.name}!
                      </p>
                      <Button
                        variant="accent"
                        asChild
                      >
                        <a
                          href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I just submitted a quote request`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {formStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-6"
                        >
                          <h3 className="text-xl font-bold text-foreground mb-4">
                            Personal Details
                          </h3>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                Full Name *
                              </label>
                              <Input
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    name: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                Phone Number *
                              </label>
                              <Input
                                type="tel"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Email Address
                            </label>
                            <Input
                              type="email"
                              placeholder="Enter email (optional)"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Type of Move *
                            </label>
                            <Select
                              value={formData.moveType}
                              onValueChange={(value) =>
                                setFormData({ ...formData, moveType: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select move type" />
                              </SelectTrigger>
                              <SelectContent>
                                {QUOTE_FORM.moveTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <Button
                            type="button"
                            variant="accent"
                            className="w-full"
                            onClick={() => setFormStep(2)}
                          >
                            Continue
                          </Button>
                        </motion.div>
                      )}

                      {formStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-6"
                        >
                          <h3 className="text-xl font-bold text-foreground mb-4">
                            Move Details
                          </h3>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                From City *
                              </label>
                              <Input
                                placeholder="Moving from"
                                value={formData.fromCity}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    fromCity: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                To City *
                              </label>
                              <Input
                                placeholder="Moving to"
                                value={formData.toCity}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    toCity: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                Moving Date
                              </label>
                              <Input
                                type="date"
                                value={formData.moveDate}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    moveDate: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                Property Type
                              </label>
                              <Select
                                value={formData.homeType}
                                onValueChange={(value) =>
                                  setFormData({ ...formData, homeType: value })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  {QUOTE_FORM.homeTypes.map((type) => (
                                    <SelectItem key={type} value={type}>
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Additional Requirements
                            </label>
                            <Textarea
                              placeholder="Any special items or requirements..."
                              rows={4}
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  message: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="flex gap-4">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setFormStep(1)}
                            >
                              Back
                            </Button>
                            <Button
                              type="submit"
                              variant="accent"
                              className="flex-1"
                            >
                              <Send className="w-5 h-5" />
                              Submit Quote Request
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Quick Contact */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm">Call Us</div>
                        <a
                          href={`tel:${COMPANY.phone}`}
                          className="font-semibold hover:text-accent transition-colors"
                        >
                          {COMPANY.phone}
                        </a>
                        <br />
                        <a
                          href={`tel:${COMPANY.alternatePhone}`}
                          className="text-white/70 text-sm"
                        >
                          {COMPANY.alternatePhone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm">WhatsApp</div>
                        <a
                          href={`https://wa.me/${COMPANY.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-accent transition-colors"
                        >
                          Chat Now
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm">Email</div>
                        <a
                          href={`mailto:${COMPANY.email}`}
                          className="font-semibold hover:text-accent transition-colors"
                        >
                          {COMPANY.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm">Working Hours</div>
                        <div className="font-semibold">{COMPANY.workingHours}</div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Address */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">
                        Head Office
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {COMPANY.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-gradient-surface rounded-2xl p-6">
                  <h4 className="font-bold text-foreground mb-4">Why Choose Us</h4>
                  <ul className="space-y-3">
                    {[
                      "Free survey & quote",
                      "No hidden charges",
                      "Insurance included",
                      "24/7 customer support",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <MapSection />
      </Layout>
    </HelmetProvider>
  );
};

export default Contact;
