import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-display font-bold tracking-tight">Havenz</span>
            <span className="text-xs uppercase tracking-[0.3em] ml-2 opacity-70">Corp</span>
            <p className="mt-4 text-sm leading-relaxed opacity-70 font-body">
              Pioneering sustainable development through ESG+R compliant, data-driven smart communities.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-body font-semibold uppercase tracking-widest mb-4 opacity-70">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-body opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-body font-semibold uppercase tracking-widest mb-4 opacity-70">Contact</h4>
            <div className="flex flex-col gap-3 text-sm font-body opacity-70">
              <a href="mailto:info@havenzcorp.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Mail size={14} /> info@havenzcorp.com
              </a>
              <a href="tel:+14038307209" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Phone size={14} /> +1 403 830 7209
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>1331 Macleod Trail SE #600, Calgary, AB</span>
              </div>
            </div>
          </div>

          {/* Media */}
          <div>
            <h4 className="text-sm font-body font-semibold uppercase tracking-widest mb-4 opacity-70">Media Inquiries</h4>
            <div className="text-sm font-body opacity-70 space-y-1">
              <p>Rick Fraser</p>
              <a href="mailto:rick@prairieskystrategy.ca" className="hover:opacity-100 transition-opacity block">
                rick@prairieskystrategy.ca
              </a>
              <a href="tel:+14037017584" className="hover:opacity-100 transition-opacity block">
                +1 403 701 7584
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs font-body opacity-50">
          © {new Date().getFullYear()} Havenz Smart Communities Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
