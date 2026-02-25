import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const offices = [
  {
    name: "Corporate Office",
    address: "1331 Macleod Trail SE #600, Calgary, AB T2G 0K3",
    email: "info@havenzcorp.com",
    phone: "+1 (403) 830-7209",
  },
  {
    name: "AHI — AI Hub of Innovation",
    address: "1331 Macleod Trail SE #600, Calgary, AB T2G 0K3",
    email: "info@havenzcorp.com",
    phone: "+1 (403) 830-7209",
  },
  {
    name: "AHI Red Deer Campus",
    address: "Red Deer County, AB T4S 2M4",
    email: "info@havenzcorp.com",
    phone: "+1 (403) 830-7209",
  },
];

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const formFieldStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const formField = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-16 min-h-[50vh] flex items-center bg-havenz-navy overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(173_58%_39%_/_0.06)_0%,_transparent_60%)]" />
          {/* Stars - reduced count for performance */}
          <div className="absolute inset-0 overflow-hidden hidden sm:block">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
                className="absolute w-0.5 h-0.5 bg-primary-foreground rounded-full"
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              />
            ))}
          </div>
          {/* Floating shape */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[8%] w-[160px] h-[160px] border border-havenz-teal/6 rounded-full hidden sm:block"
          />
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <motion.div variants={heroStagger} initial="hidden" animate="visible">
              <motion.p variants={heroChild} className="text-xs font-body uppercase tracking-[0.25em] text-havenz-teal mb-5">Contact</motion.p>
              <motion.h1 variants={heroChild} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-[1.1]">
                Let's Build{" "}
                <span className="text-gradient">Together</span>
              </motion.h1>
              <motion.p variants={heroChild} className="mt-6 text-lg text-primary-foreground/50 font-body max-w-xl leading-relaxed">
                Have a project in mind? We'd love to hear about your vision.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left: Contact Info */}
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <div className="mb-10">
                    <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">Get in Touch</p>
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                      Contact Us
                    </h2>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      Building relationships, one conversation at a time. Don't hesitate to reach out.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <p className="text-xs font-body uppercase tracking-[0.15em] text-muted-foreground mb-2">Call Us</p>
                      <a href="tel:+14038307209" className="text-xl sm:text-2xl font-heading font-bold text-foreground hover:text-accent transition-colors flex items-center gap-2 group break-all sm:break-normal">
                        +1 (403) 830-7209
                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 text-accent transition-opacity" />
                      </a>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <p className="text-xs font-body uppercase tracking-[0.15em] text-muted-foreground mb-2">Email</p>
                      <a href="mailto:info@havenzcorp.com" className="text-lg font-body font-medium text-foreground hover:text-accent transition-colors flex items-center gap-2 group">
                        info@havenzcorp.com
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-accent transition-opacity" />
                      </a>
                    </motion.div>

                    <div className="pt-6 border-t border-border">
                      <p className="text-xs font-body uppercase tracking-[0.15em] text-muted-foreground mb-3">Media Inquiries</p>
                      <p className="text-sm font-body font-medium text-foreground">Rick Fraser</p>
                      <a href="mailto:rick@prairieskystrategy.ca" className="text-sm font-body text-accent hover:underline">
                        rick@prairieskystrategy.ca
                      </a>
                      <p className="text-sm font-body text-muted-foreground mt-1">+1 403.701.7584</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-7">
                <ScrollReveal delay={0.15}>
                  <motion.form
                    variants={formFieldStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-5 p-8 md:p-10 rounded-2xl bg-secondary/30 border border-border"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <motion.div variants={formField} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-body font-medium text-foreground mb-2 block uppercase tracking-wider">Name *</label>
                        <Input
                          placeholder="Your name"
                          className="font-body border-border bg-card focus:border-accent h-11 rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-body font-medium text-foreground mb-2 block uppercase tracking-wider">Email *</label>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          className="font-body border-border bg-card focus:border-accent h-11 rounded-lg text-sm"
                        />
                      </div>
                    </motion.div>
                    <motion.div variants={formField}>
                      <label className="text-xs font-body font-medium text-foreground mb-2 block uppercase tracking-wider">Phone</label>
                      <Input
                        placeholder="Your phone number"
                        className="font-body border-border bg-card focus:border-accent h-11 rounded-lg text-sm"
                      />
                    </motion.div>
                    <motion.div variants={formField}>
                      <label className="text-xs font-body font-medium text-foreground mb-2 block uppercase tracking-wider">Message *</label>
                      <Textarea
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="font-body border-border bg-card focus:border-accent resize-none rounded-lg text-sm"
                      />
                    </motion.div>
                    <motion.div variants={formField}>
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-gradient-brand text-accent-foreground hover:opacity-90 font-body text-sm tracking-wide rounded-full px-10 h-11 shadow-lg shadow-accent/20 w-full sm:w-auto"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.form>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-20 px-6 bg-secondary/30 border-t border-border">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, i) => (
                <ScrollReveal key={office.name} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="p-6 rounded-2xl bg-card border border-border h-full hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-colors duration-500"
                  >
                    <h3 className="text-sm font-heading font-semibold text-foreground mb-4">{office.name}</h3>
                    <div className="space-y-3 text-sm font-body text-muted-foreground">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={14} className="text-accent mt-0.5 shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <a href={`mailto:${office.email}`} className="flex items-center gap-2.5 hover:text-accent transition-colors">
                        <Mail size={14} className="text-accent shrink-0" />
                        {office.email}
                      </a>
                      <a href={`tel:${office.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2.5 hover:text-accent transition-colors">
                        <Phone size={14} className="text-accent shrink-0" />
                        {office.phone}
                      </a>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
