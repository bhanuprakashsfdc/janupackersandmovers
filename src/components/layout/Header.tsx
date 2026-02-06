import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, COMPANY, SERVICES } from "@/constants/constants";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/index.html") return location.pathname === "/" || location.pathname === "/index.html";
    return location.pathname === href || location.pathname.startsWith(href.replace(".html", ""));
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-4"
        )}
      >
        <div className="container-fluid">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/index.html" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-orange-dark flex items-center justify-center shadow-orange">
                <span className="text-white font-bold text-lg"><img src="/logo.png" alt="Girl in a jacket"/></span>
              </div>
              <div className="hidden sm:block">
                <span
                  className={cn(
                    "font-bold text-lg transition-colors",
                    isScrolled ? "text-primary" : "text-white"
                  )}
                >
                  {COMPANY.name}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="relative group">
                  {link.label === "Services" ? (
                    <button
                      className={cn(
                        "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1",
                        isScrolled
                          ? isActive(link.href)
                            ? "text-accent"
                            : "text-foreground hover:text-accent hover:bg-accent/5"
                          : isActive(link.href)
                          ? "text-accent"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                        isScrolled
                          ? isActive(link.href)
                            ? "text-accent"
                            : "text-foreground hover:text-accent hover:bg-accent/5"
                          : isActive(link.href)
                          ? "text-accent"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Services Dropdown */}
                  {link.label === "Services" && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <div className="bg-white rounded-xl shadow-xl border border-border p-2 min-w-[280px]">
                            {SERVICES.slice(0, 6).map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.slug}.html`}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                              >
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                  <service.icon className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-foreground">
                                  {service.title}
                                </span>
                              </Link>
                            ))}
                            <div className="border-t border-border mt-2 pt-2">
                              <Link
                                to="/services.html"
                                className="block px-4 py-2 text-accent font-medium hover:bg-accent/5 rounded-lg transition-colors"
                              >
                                View All Services →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant={isScrolled ? "outline" : "heroOutline"}
                size="sm"
                asChild
              >
                <a href={`tel:${COMPANY.phone}`}>
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button variant="accent" size="sm" asChild>
                <Link to="/contact.html">Get Free Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X
                  className={cn(
                    "w-6 h-6",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                />
              ) : (
                <Menu
                  className={cn(
                    "w-6 h-6",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute top-0 right-0 w-[300px] h-full bg-white shadow-2xl"
            >
              <div className="p-6 pt-20">
                <nav className="space-y-2">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg font-medium transition-colors",
                        isActive(link.href)
                          ? "bg-accent/10 text-accent"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 space-y-3">
                  <Button variant="accent" className="w-full" asChild>
                    <Link to="/contact.html">Get Free Quote</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`tel:${COMPANY.phone}`}>
                      <Phone className="w-4 h-4" />
                      {COMPANY.phone}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
