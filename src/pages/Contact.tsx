import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const offices = [
  {
    name: "Corporate Office",
    address: "1331 Macleod Trail SE #600, Calgary, AB T2G 0K3",
    email: "info@havenzcorp.com",
    phone: "+1 403 830 7209",
  },
  {
    name: "AHI - AI Hub of Innovation",
    address: "1331 Macleod Trail SE #600, Calgary, AB T2G 0K3",
    email: "info@havenzcorp.com",
    phone: "+1 403 830 7209",
  },
  {
    name: "AHI Red Deer - Sustainable Innovation Campus",
    address: "Red Deer County, AB T4S 2M4",
    email: "info@havenzcorp.com",
    phone: "+1 403 830 7209",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end bg-havenz-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-havenz-dark/30 to-havenz-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-havenz-navy via-transparent to-transparent" />
        {/* Starry effect with dots */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-primary-foreground/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 lg:px-8 w-full">
          <p className="text-sm font-body uppercase tracking-[0.3em] text-havenz-teal mb-2">Contact</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <ScrollReveal>
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  Contact Us
                </h1>
                <div className="w-16 h-1 bg-accent mb-6" />
                <h2 className="text-xl font-display font-semibold text-foreground mb-8">
                  Have a project in mind? Let's discuss the details!
                </h2>

                <div className="mb-8">
                  <p className="text-sm font-body font-semibold text-foreground mb-1">Call Us</p>
                  <a href="tel:+14038307209" className="text-2xl font-display font-bold text-foreground hover:text-accent transition-colors">
                    + 1 (403) 830 7209
                  </a>
                </div>

                <div>
                  <p className="text-sm font-body font-semibold text-foreground mb-1">Media inquiries</p>
                  <p className="text-lg font-display font-semibold text-foreground">Rick Fraser</p>
                  <a href="mailto:rick@prairieskystrategy.ca" className="text-sm font-body text-accent hover:underline block">
                    rick@prairieskystrategy.ca
                  </a>
                  <a href="tel:+14037017584" className="text-lg font-display font-bold text-foreground mt-1 block">
                    + 1 403.701.7584
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Form */}
            <ScrollReveal delay={0.2}>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-2 block">Name *</label>
                  <Input
                    placeholder="Your name"
                    className="font-body border-border focus:border-accent h-12 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-2 block">Email *</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="font-body border-border focus:border-accent h-12 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-2 block">Phone Number</label>
                  <Input
                    placeholder="Your phone number"
                    className="font-body border-border focus:border-accent h-12 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-2 block">Your Message *</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="font-body border-border focus:border-accent resize-none rounded-md"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-sm tracking-wider rounded-full px-10"
                >
                  Submit
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, i) => (
              <ScrollReveal key={office.name} delay={i * 0.1}>
                <div className="p-6">
                  <h3 className="text-sm font-body font-semibold text-foreground mb-4">{office.name}</h3>
                  <div className="space-y-3 text-sm font-body text-muted-foreground">
                    <a href={`mailto:${office.email}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <Mail size={14} className="text-accent shrink-0" />
                      {office.email}
                    </a>
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <Phone size={14} className="text-accent shrink-0" />
                      {office.phone}
                    </a>
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="text-accent mt-0.5 shrink-0" />
                      <span>{office.address}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Media */}
            <ScrollReveal delay={0.3}>
              <div className="p-6">
                <h3 className="text-sm font-body font-semibold text-foreground mb-4">Media Inquiries</h3>
                <div className="space-y-2 text-sm font-body text-muted-foreground">
                  <p>Rick Fraser</p>
                  <a href="mailto:rick@prairieskystrategy.ca" className="block hover:text-foreground transition-colors">
                    rick@prairieskystrategy.ca
                  </a>
                  <a href="tel:+14037017584" className="block hover:text-foreground transition-colors">
                    + 1 403.701.7584
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
