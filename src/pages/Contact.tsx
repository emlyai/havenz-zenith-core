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
    name: "AHI Headquarters",
    address: "1840, 444 5th Ave SW, Calgary, AB T2P 2T8",
    email: "info@havenzcorp.com",
    phone: "+1 403 830 7209",
  },
  {
    name: "AHI Red Deer Campus",
    address: "Red Deer County, AB T4S 2M4",
    email: "info@havenzcorp.com",
    phone: "+1 403 830 7209",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-[1.1]">
              Let's Talk
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              Building relationships, one conversation at a time. Have a project in mind?
              We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Offices */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <ScrollReveal className="lg:col-span-3">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-body font-medium text-primary mb-2 block">Name</label>
                    <Input
                      placeholder="Your name"
                      className="font-body rounded-xl border-border focus:border-accent h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-primary mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="font-body rounded-xl border-border focus:border-accent h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-primary mb-2 block">Subject</label>
                  <Input
                    placeholder="How can we help?"
                    className="font-body rounded-xl border-border focus:border-accent h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-primary mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="font-body rounded-xl border-border focus:border-accent resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-body rounded-full px-10 w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </ScrollReveal>

            {/* Offices */}
            <div className="lg:col-span-2 space-y-6">
              {offices.map((office, i) => (
                <ScrollReveal key={office.name} delay={i * 0.12}>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="text-lg font-display font-bold text-primary mb-4">{office.name}</h3>
                    <div className="space-y-3 text-sm font-body text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <a href={`mailto:${office.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                        <Mail size={16} className="text-accent shrink-0" />
                        {office.email}
                      </a>
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                        <Phone size={16} className="text-accent shrink-0" />
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Media Inquiries */}
              <ScrollReveal delay={0.4}>
                <div className="p-6 rounded-2xl bg-havenz-warm border border-border">
                  <h3 className="text-lg font-display font-bold text-primary mb-4">Media Inquiries</h3>
                  <div className="space-y-2 text-sm font-body text-muted-foreground">
                    <p className="font-medium text-primary">Rick Fraser</p>
                    <a href="mailto:rick@prairieskystrategy.ca" className="block hover:text-primary transition-colors">
                      rick@prairieskystrategy.ca
                    </a>
                    <a href="tel:+14037017584" className="block hover:text-primary transition-colors">
                      +1 403 701 7584
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
