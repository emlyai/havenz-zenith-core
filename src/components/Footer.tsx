import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import havenzLogo from "@/assets/havenz-logo-clean.png";

const offices = [
  {
    name: "Corporate Office",
    address: "1331 Macleod Trail SE #600, Calgary, AB T2G 0K3",
  },
  {
    name: "AHI — AI Hub of Innovation",
    address: "1331 Macleod Trail SE #600, Calgary, AB T2G 0K3",
  },
  {
    name: "AHI Red Deer Campus",
    address: "Red Deer County, AB T4S 2M4",
  },
];

const footerStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const footerChild = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Footer() {
  return (
    <footer className="bg-havenz-navy text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-brand opacity-40" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-8 lg:px-8 relative z-10">
        {/* Top section */}
        <motion.div
          variants={footerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20"
        >
          {/* Brand column */}
          <motion.div variants={footerChild} className="lg:col-span-4">
            <img src={havenzLogo} alt="Havenz Smart Communities" className="h-12 w-auto mb-6" />
            <p className="text-sm font-body text-primary-foreground/50 leading-relaxed max-w-xs">
              Pioneering the next generation of smart living — communities that balance energy, data, food, and job security.
            </p>
            <div className="flex gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                href="mailto:info@havenzcorp.com"
                className="w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/40 hover:text-havenz-teal hover:border-havenz-teal/30 transition-colors duration-300"
              >
                <Mail size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                href="tel:+14038307209"
                className="w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/40 hover:text-havenz-teal hover:border-havenz-teal/30 transition-colors duration-300"
              >
                <Phone size={16} />
              </motion.a>
            </div>
          </motion.div>

          {/* Nav column */}
          <motion.div variants={footerChild} className="lg:col-span-2">
            <h4 className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary-foreground/30 mb-6">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-body text-primary-foreground/50 hover:text-havenz-teal transition-colors duration-300 flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Offices */}
          <motion.div variants={footerChild} className="lg:col-span-3">
            <h4 className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary-foreground/30 mb-6">Offices</h4>
            <div className="space-y-5">
              {offices.map((office) => (
                <div key={office.name}>
                  <p className="text-sm font-body font-medium text-primary-foreground/70 mb-1">{office.name}</p>
                  <p className="text-xs font-body text-primary-foreground/40 flex items-start gap-1.5">
                    <MapPin size={12} className="mt-0.5 shrink-0" />
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={footerChild} className="lg:col-span-3">
            <h4 className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary-foreground/30 mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a href="mailto:info@havenzcorp.com" className="text-sm font-body text-primary-foreground/50 hover:text-havenz-teal transition-colors block">
                info@havenzcorp.com
              </a>
              <a href="tel:+14038307209" className="text-sm font-body text-primary-foreground/50 hover:text-havenz-teal transition-colors block">
                +1 (403) 830-7209
              </a>
              <div className="pt-4 border-t border-primary-foreground/5">
                <p className="text-xs font-body text-primary-foreground/30 mb-2">Media Inquiries</p>
                <p className="text-sm font-body text-primary-foreground/50">Rick Fraser</p>
                <a href="mailto:rick@prairieskystrategy.ca" className="text-xs font-body text-primary-foreground/40 hover:text-havenz-teal transition-colors">
                  rick@prairieskystrategy.ca
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-primary-foreground/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs font-body text-primary-foreground/30">
            © {new Date().getFullYear()} Havenz Smart Communities Inc.
          </p>
          <p className="text-xs font-body text-primary-foreground/20">
            Power · Infrastructure · Compute · Sovereign AI
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
