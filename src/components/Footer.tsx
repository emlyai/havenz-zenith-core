import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-havenz-navy text-primary-foreground">
      {/* Contact info row */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-body font-semibold tracking-wider mb-4">Corporate Office</h4>
              <div className="space-y-2 text-sm font-body text-primary-foreground/60">
                <a href="mailto:info@havenzcorp.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Mail size={14} /> info@havenzcorp.com
                </a>
                <a href="tel:+14038307209" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Phone size={14} /> + 1 403 830 7209
                </a>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>1331 Macleod Trail SE #600, Calgary, AB T2G 0K3</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-body font-semibold tracking-wider mb-4">AHI - AI Hub of Innovation</h4>
              <div className="space-y-2 text-sm font-body text-primary-foreground/60">
                <a href="mailto:info@havenzcorp.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Mail size={14} /> info@havenzcorp.com
                </a>
                <a href="tel:+14038307209" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Phone size={14} /> + 1 403 830 7209
                </a>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>1331 Macleod Trail SE #600, Calgary, AB T2G 0K3</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-body font-semibold tracking-wider mb-4">AHI Red Deer - Sustainable Innovation Campus</h4>
              <div className="space-y-2 text-sm font-body text-primary-foreground/60">
                <a href="mailto:info@havenzcorp.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Mail size={14} /> info@havenzcorp.com
                </a>
                <a href="tel:+14038307209" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Phone size={14} /> + 1 403 830 7209
                </a>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>Red Deer County, AB T4S 2M4</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-body font-semibold tracking-wider mb-4">Media Inquiries</h4>
              <div className="space-y-2 text-sm font-body text-primary-foreground/60">
                <p>Rick Fraser</p>
                <a href="mailto:rick@prairieskystrategy.ca" className="hover:text-primary-foreground transition-colors block">
                  rick@prairieskystrategy.ca
                </a>
                <a href="tel:+14037017584" className="hover:text-primary-foreground transition-colors block">
                  + 1 403.701.7584
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
              <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" stroke="hsl(170, 65%, 50%)" strokeWidth="1.5" fill="none" />
              <polygon points="20,8 30,14 30,26 20,32 10,26 10,14" stroke="hsl(170, 65%, 50%)" strokeWidth="1" fill="none" opacity="0.6" />
              <circle cx="20" cy="20" r="3" fill="hsl(170, 65%, 50%)" opacity="0.8" />
            </svg>
            <span className="text-xs font-body tracking-[0.2em] text-primary-foreground/60">
              H A V E N Z &nbsp; S M A R T &nbsp; C O M M U N I T I E S
            </span>
          </div>
          <p className="text-xs font-body text-primary-foreground/40">
            © {new Date().getFullYear()} Havenz Smart Communities Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
