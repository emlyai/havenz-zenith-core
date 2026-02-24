import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const capabilities = [
  "All Classes of Real Estate",
  "Infrastructure Development",
  "Smart Community Development",
  "Industrial Development",
  "Commercial Retail Development",
  "Multi-Family Developments",
  "Land Acquisitions",
  "Vision & Master Planning",
  "Joint Ventures",
];

const principles = [
  "Industry-leading technology and data",
  "Disruptive real estate innovation",
  "ESG+R commitment and excellence",
  "Aligned with emissions goals",
  "Reliable Net Zero energy",
  "Flexible business models",
  "Forward-thinking projects",
  "Collaborative success",
];

const serviceDetails = [
  {
    title: "Smart Communities",
    desc: "Template-based, data-driven residential and mixed-use developments designed for resilience, sustainability, and AI-powered operations.",
  },
  {
    title: "Green Energy Infrastructure",
    desc: "Deploying renewable energy solutions through our Energy Haven partnership — solar, wind, and clean power generation at scale.",
  },
  {
    title: "ESG+R Compliance",
    desc: "Comprehensive environmental, social, governance, and resilience frameworks embedded into every project from day one.",
  },
  {
    title: "Sovereign AI & Data",
    desc: "Leveraging sovereign AI positioning and advanced analytics to optimize community design, operations, and long-term sustainability.",
  },
];

const scopeItems = [
  { scope: "Scope 1", title: "Direct Emissions", items: ["On-site energy management", "Fleet optimization", "Net-zero facility targets"] },
  { scope: "Scope 2", title: "Indirect Energy", items: ["Renewable procurement", "Green power agreements", "Grid-connected solar & wind"] },
  { scope: "Scope 3", title: "Value Chain", items: ["Supply chain optimization", "Sustainable materials", "Community impact metrics"] },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[60vh] flex items-center bg-havenz-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(173_58%_39%_/_0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(hsl(173 58% 39% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(173 58% 39% / 0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-body uppercase tracking-[0.25em] text-havenz-teal mb-5">Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-[1.1] max-w-3xl">
              What We{" "}
              <span className="text-gradient">Build</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/50 font-body max-w-2xl leading-relaxed">
              From smart communities to green energy infrastructure — integrated development solutions across all asset classes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview - Two columns */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">Capabilities</p>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Asset Classes</h2>
                <ul className="space-y-3">
                  {capabilities.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-body text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal delay={0.15}>
                <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">Principles</p>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-8">How We Operate</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {principles.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-body text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding bg-secondary/30">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">Core Services</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
              Beyond Expectations
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceDetails.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="group relative p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 h-full">
                  <div className="absolute top-8 right-8 text-[3rem] font-heading font-bold text-border/40 leading-none select-none group-hover:text-accent/10 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 pr-12">{service.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{service.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-brand rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scope 1, 2, 3 */}
      <section className="relative py-32 bg-havenz-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(173_58%_39%_/_0.05)_0%,_transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-xs font-body uppercase tracking-[0.25em] text-havenz-teal mb-5 text-center">Alignment</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground text-center mb-4">
              Scope 1, 2, 3 Compliance
            </h2>
            <p className="text-primary-foreground/50 font-body text-center max-w-2xl mx-auto mb-16">
              All developments designed to meet and exceed global emissions mandates.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scopeItems.map((item, i) => (
              <ScrollReveal key={item.scope} delay={i * 0.12}>
                <div className="p-8 rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.03] text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-havenz-teal/30 mb-6">
                    <span className="text-lg font-heading font-bold text-havenz-teal">{item.scope.split(" ")[1]}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary-foreground mb-1">{item.scope}</h3>
                  <p className="text-sm font-body text-havenz-teal mb-5">{item.title}</p>
                  <ul className="space-y-2 text-left">
                    {item.items.map((li) => (
                      <li key={li} className="flex items-center gap-2 text-sm font-body text-primary-foreground/50">
                        <div className="w-1 h-1 rounded-full bg-havenz-teal shrink-0" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">Collaborate</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Partnership Model
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                We collaborate with landowners and municipalities to apply our proven templates and expertise, transforming raw land into thriving, sustainable communities. If you have a vision, we're eager to partner.
              </p>
              <Link to="/contact">
                <Button className="bg-gradient-brand text-accent-foreground hover:opacity-90 font-body text-sm rounded-full px-8 h-10 shadow-lg shadow-accent/20">
                  Start a Conversation <ArrowRight className="ml-2" size={14} />
                </Button>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-3">
                {["Landowner Partnership", "Municipal Collaboration", "Template Application", "Project Execution"].map((step, i) => (
                  <div key={step} className="flex items-center gap-4 p-5 rounded-xl bg-secondary/50 border border-border group hover:border-accent/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <span className="text-sm font-heading font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="font-body font-medium text-foreground text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
