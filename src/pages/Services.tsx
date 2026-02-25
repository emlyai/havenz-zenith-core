import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
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

const listStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-16 min-h-[60vh] flex items-center bg-havenz-navy overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(173_58%_39%_/_0.08)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(hsl(173 58% 39% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(173 58% 39% / 0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
          <motion.div
            animate={{ y: [-12, 12, -12], rotate: [0, -4, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-[10%] w-[180px] h-[180px] border border-havenz-teal/8 rounded-full hidden sm:block"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-[15%] w-[300px] h-[300px] rounded-full bg-havenz-teal hidden sm:block"
          />
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <motion.div variants={heroStagger} initial="hidden" animate="visible">
              <motion.p variants={heroChild} className="text-xs font-body uppercase tracking-[0.25em] text-havenz-teal mb-5">Services</motion.p>
              <motion.h1 variants={heroChild} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-[1.1] max-w-3xl">
                What We{" "}
                <span className="text-gradient">Build</span>
              </motion.h1>
              <motion.p variants={heroChild} className="mt-6 text-lg text-primary-foreground/50 font-body max-w-2xl leading-relaxed">
                From smart communities to green energy infrastructure — integrated development solutions across all asset classes.
              </motion.p>
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
                  <motion.ul
                    variants={listStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-3"
                  >
                    {capabilities.map((item) => (
                      <motion.li key={item} variants={listItem} className="flex items-center gap-3 text-sm font-body text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-7">
                <ScrollReveal delay={0.15}>
                  <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">Principles</p>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-8">How We Operate</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {principles.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border transition-colors duration-300 hover:border-accent/20"
                      >
                        <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-sm font-body text-muted-foreground">{item}</span>
                      </motion.div>
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
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group relative p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-colors duration-500 h-full"
                  >
                    <motion.div
                      initial={{ opacity: 0.15 }}
                      whileHover={{ opacity: 0.3, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute top-8 right-8 text-[3rem] font-heading font-bold text-border leading-none select-none"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 pr-12">{service.title}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{service.desc}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-brand rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Scope 1, 2, 3 */}
        <section className="relative py-32 bg-havenz-navy overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(173_58%_39%_/_0.05)_0%,_transparent_60%)]" />
          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [0, 2, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] right-[8%] w-[220px] h-[220px] border border-havenz-teal/5 rounded-full hidden sm:block"
          />
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
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="p-8 rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.03] text-center h-full hover:border-havenz-teal/20 transition-colors duration-500"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-havenz-teal/30 mb-6"
                    >
                      <span className="text-lg font-heading font-bold text-havenz-teal">{item.scope.split(" ")[1]}</span>
                    </motion.div>
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
                  </motion.div>
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
                    <motion.div
                      key={step}
                      whileHover={{ x: 6, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex items-center gap-4 p-5 rounded-xl bg-secondary/50 border border-border group hover:border-accent/20 transition-colors duration-300"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors"
                      >
                        <span className="text-sm font-heading font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
                      </motion.div>
                      <span className="font-body font-medium text-foreground text-sm">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
