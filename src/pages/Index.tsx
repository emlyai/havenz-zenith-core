import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const pillars = [
  { label: "Food Security", desc: "Agricultural resilience embedded into community infrastructure" },
  { label: "Energy Sustainability", desc: "Green energy solutions aligned with Scope 1, 2, 3 mandates" },
  { label: "Data Integrity", desc: "Sovereign AI and secure digital infrastructure for smart communities" },
  { label: "Job Stability", desc: "Sustainable economic ecosystems generating lasting employment" },
];

const processSteps = [
  { num: "01", title: "Location & Partnerships", desc: "Identifying strategic site partnerships in key locations worldwide." },
  { num: "02", title: "Vision & Design", desc: "Collaborating with partners to envision innovative, sustainable communities." },
  { num: "03", title: "Planning & Integration", desc: "Prioritizing food, energy, job, and data security for long-term success." },
  { num: "04", title: "Build & Deliver", desc: "Transforming ideas into tangible, thriving communities." },
];

const marqueeWords = [
  "Sustainable", "Innovation", "Prosperity", "Resilience",
  "Self-Sufficiency", "Connectivity", "Future-Proof", "Net-Zero",
];

const partners = [
  "GGA Architecture", "Telus", "Samsung", "Energy Haven", "Century 21",
  "M3 Development", "Red Deer County", "Mobility Quotient", "Monarch Collective", "Exmerce",
];

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center bg-havenz-navy overflow-hidden">
          {/* Geometric background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(220_25%_16%)_0%,_hsl(220_25%_8%)_50%,_hsl(220_25%_5%)_100%)]" />
            <motion.div
              animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-[15%] w-[300px] h-[300px] border border-havenz-teal/10 rounded-full"
            />
            <motion.div
              animate={{ y: [20, -20, 20], rotate: [0, -3, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/3 left-[10%] w-[200px] h-[200px] border border-havenz-cyan/5 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-havenz-teal"
            />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(hsl(173 58% 39% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(173 58% 39% / 0.3) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
            <motion.div variants={heroStagger} initial="hidden" animate="visible">
              <motion.p variants={heroChild} className="text-xs font-body uppercase tracking-[0.3em] text-havenz-teal/80 mb-8">
                Havenz Smart Communities
              </motion.p>

              <motion.h1 variants={heroChild} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold text-primary-foreground leading-[1.05] tracking-tight">
                Building Tomorrow's
                <br />
                <span className="text-gradient">Smart Communities</span>
              </motion.h1>

              <motion.p variants={heroChild} className="mt-8 text-lg md:text-xl text-primary-foreground/50 font-body max-w-2xl mx-auto leading-relaxed">
                Pioneering sustainable development through ESG+R compliant, AI-powered infrastructure
                — shaping the future of power, compute, and sovereign innovation.
              </motion.p>

              <motion.div variants={heroChild} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-brand text-accent-foreground hover:opacity-90 font-body text-sm tracking-wide rounded-full px-10 h-12 shadow-xl shadow-accent/20">
                    Start a Conversation <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="font-body text-sm tracking-wide rounded-full px-10 h-12 border-primary-foreground/20 text-primary-foreground/80 bg-transparent hover:bg-primary-foreground/5 hover:text-primary-foreground">
                    Explore Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-5 h-9 border border-primary-foreground/15 rounded-full flex items-start justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-havenz-teal/50" />
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════════════ MISSION STATEMENT ═══════════════════ */}
        <section className="section-padding bg-background relative">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">Our Vision</p>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-[1.1]">
                    Creating Tomorrow's{" "}
                    <span className="text-gradient">Smart Communities</span>{" "}
                    Today
                  </h2>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-7">
                <ScrollReveal delay={0.2}>
                  <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                    We transform real estate and infrastructure through data-driven, AI-enhanced, and energy-resilient development models. We design, build, and operate smart campuses that integrate clean energy, digital connectivity, and sustainable growth.
                  </p>
                  <Link to="/about" className="inline-flex items-center gap-2 text-sm font-body font-medium text-accent hover:gap-3 transition-all duration-300">
                    Learn our story <ArrowUpRight size={16} />
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ FOUR PILLARS ═══════════════════ */}
        <section className="section-padding bg-secondary/50 relative overflow-hidden">
          <div className="absolute inset-0 geometric-grid opacity-30" />
          <div className="mx-auto max-w-6xl relative z-10">
            <ScrollReveal>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5 text-center">What Drives Us</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-16">
                Four Pillars of Impact
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-colors duration-500 h-full"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-brand mb-6 group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative z-10">
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{item.label}</h3>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-brand rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ STATS ═══════════════════ */}
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <AnimatedCounter end={8000000} suffix="+" label="Sqft Under Planning" formatAsMillions />
              <AnimatedCounter end={5000} suffix="+" label="Acres Under Management" />
              <AnimatedCounter end={12} suffix="+" label="Strategic Partnerships" />
            </div>
          </div>
        </section>

        {/* ═══════════════════ MARQUEE ═══════════════════ */}
        <section className="py-5 bg-havenz-navy overflow-hidden border-y border-primary-foreground/5">
          <div className="flex">
            <div className="animate-marquee flex whitespace-nowrap">
              {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
                <span key={i} className="text-sm md:text-base font-heading font-medium text-primary-foreground/30 mx-10 uppercase tracking-widest">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ PROCESS ═══════════════════ */}
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">How We Work</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16">
                From Vision to Reality
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group relative"
                  >
                    <motion.span
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.3 }}
                      className="text-6xl font-heading font-bold text-accent/10 block mb-4 group-hover:text-accent/20 transition-colors duration-500"
                    >
                      {step.num}
                    </motion.span>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ FLAGSHIP PROJECT ═══════════════════ */}
        <section className="relative py-32 bg-havenz-navy overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(173_58%_39%_/_0.08)_0%,_transparent_60%)]" />
          <motion.div
            animate={{ y: [-12, 12, -12], rotate: [0, 3, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[5%] w-[200px] h-[200px] border border-havenz-teal/5 rounded-full"
          />
          <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <p className="text-xs font-body uppercase tracking-[0.25em] text-havenz-teal mb-5">Flagship Project</p>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-[1.1] mb-6">
                    AHI Red Deer
                  </h2>
                  <p className="text-xl font-heading text-havenz-teal mb-4">
                    Sustainable Innovation Campus
                  </p>
                  <p className="text-primary-foreground/50 font-body leading-relaxed mb-8">
                    A groundbreaking smart campus integrating clean energy, digital connectivity, and sustainable living — setting new standards for AI-powered communities in Alberta.
                  </p>
                  <Link to="/projects">
                    <Button className="bg-gradient-brand text-accent-foreground hover:opacity-90 font-body text-sm tracking-wide rounded-full px-10 h-12 shadow-xl shadow-accent/20">
                      View All Projects
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-2xl overflow-hidden border border-primary-foreground/10 shadow-2xl"
                >
                  <img
                    src="https://www.havenz.ai/wp-content/uploads/2024/05/Enscape_1-min.png"
                    alt="AHI Red Deer Sustainable Innovation Campus"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════ LATEST PROJECTS ═══════════════════ */}
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">Portfolio</p>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    Latest Projects
                  </h2>
                </div>
                <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-sm font-body font-medium text-accent hover:gap-3 transition-all duration-300">
                  View all projects <ArrowUpRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Sustainable Energy Centre",
                  category: "Data Centre & Transport Hub",
                  image: "https://www.havenz.ai/wp-content/uploads/2024/04/image-london-c.jpg",
                },
                {
                  title: "Moon Haven",
                  category: "Sustainable Living",
                  image: "https://www.havenz.ai/wp-content/uploads/2024/04/moon-haven-c.png",
                },
                {
                  title: "AHI Calgary",
                  category: "Smart Infrastructure",
                  image: "https://www.havenz.ai/wp-content/uploads/2024/04/AHI-CALGARY–HAVENZ-SMART-MOBILITYm.png",
                },
              ].map((project, i) => (
                <ScrollReveal key={project.title} delay={i * 0.1}>
                  <Link to="/projects">
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-colors duration-500"
                    >
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <span className="absolute top-3 left-3 px-3 py-1 bg-accent/10 backdrop-blur-sm text-accent text-xs font-body font-semibold rounded-full border border-accent/20">
                          {project.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-base font-heading font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <Link to="/projects" className="md:hidden inline-flex items-center gap-2 text-sm font-body font-medium text-accent mt-8 hover:gap-3 transition-all duration-300">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        {/* ═══════════════════ PARTNERS ═══════════════════ */}
        <section className="py-20 px-6 bg-secondary/30 border-y border-border">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5 text-center">Ecosystem</p>
              <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-12">
                Partners & Collaborators
              </h2>
            </ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {partners.map((partner, i) => (
                <ScrollReveal key={partner} delay={i * 0.04}>
                  <motion.div
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-body text-muted-foreground hover:text-accent hover:border-accent/20 transition-colors duration-300 cursor-default"
                  >
                    {partner}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ CTA ═══════════════════ */}
        <section className="relative py-32 bg-havenz-navy overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(173_58%_39%_/_0.06)_0%,_transparent_60%)]" />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-havenz-teal"
          />
          <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
            <ScrollReveal>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-havenz-teal mb-5">Ready?</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Let's Build the Future
              </h2>
              <p className="text-lg font-body text-primary-foreground/50 mb-10 max-w-xl mx-auto">
                Whether you have land ready for development or a vision for a sustainable project — we're eager to partner with you.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-brand text-accent-foreground hover:opacity-90 font-body text-sm tracking-wide rounded-full px-10 h-12 shadow-xl shadow-accent/20">
                  Start a Conversation <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
