import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">QuickBites</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Delivering happiness one bite at a time. Fresh ingredients, fast delivery, and flavors you'll love.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Twitter", "Facebook"].map((s) => (
                <a key={s} href="#" className="text-primary-foreground/40 hover:text-primary transition-colors text-sm">
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Partner with us", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {["Help Center", "Raise a Complaint", "Safety", "Terms & Conditions", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                support@quickbites.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                123 Food Street, Bangalore, India
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-primary-foreground/60 mb-3">Subscribe for offers</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="p-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          <p>© 2026 QuickBites. All rights reserved. Made with ❤️ for food lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
