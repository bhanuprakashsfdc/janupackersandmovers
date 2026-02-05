import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight
} from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES, LOCATIONS } from "@/constants/constants";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-fluid py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">{COMPANY.name}</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              {COMPANY.description}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: COMPANY.socialLinks.facebook },
                { icon: Instagram, href: COMPANY.socialLinks.instagram },
                { icon: Twitter, href: COMPANY.socialLinks.twitter },
                { icon: Linkedin, href: COMPANY.socialLinks.linkedin },
                { icon: Youtube, href: COMPANY.socialLinks.youtube },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="block text-primary-foreground hover:text-accent transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                  <a
                    href={`tel:${COMPANY.alternatePhone}`}
                    className="block text-primary-foreground/80 text-sm"
                  >
                    {COMPANY.alternatePhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">{COMPANY.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">{COMPANY.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="font-bold text-lg mb-4">We Serve In</h3>
          <div className="flex flex-wrap gap-2">
            {LOCATIONS.map((location) => (
              <Link
                key={location.id}
                to={`/${location.slug}`}
                className="px-3 py-1.5 rounded-full bg-white/10 text-sm hover:bg-accent transition-colors"
              >
                {location.city}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-fluid py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.{" "}
              Created by{" "}
              <a
                href="https://anuhyadigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Anuhya Digital
              </a>
              . All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/sitemap"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
