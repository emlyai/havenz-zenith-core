import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import havenzLogo from "@/assets/havenz-logo.png";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center bg-havenz-navy overflow-hidden">
        {/* Geometric background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(220_25%_16%)_0%,_hsl(220_25%_8%)_50%,_hsl(220_25%_5%)_100%)]" />
          {/* Floating geometric shapes */}
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
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(hsl(173 58% 39% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(173 58% 39% / 0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <img src={havenzLogo} alt="Havenz" className="h-16 md:h-20 w-auto mx-auto mix-blend-screen" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold text-primary-foreground leading-[1.05] tracking-tight"
          >
            Building Tomorrow's
            <br />
            <span className="text-gradient">Smart Communities</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-lg md:text-xl text-primary-foreground/50 font-body max-w-2xl mx-auto leading-relaxed"
          >
            Pioneering sustainable development through ESG+R compliant, AI-powered infrastructure
            — shaping the future of power, compute, and sovereign innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-brand text-accent-foreground hover:opacity-90 font-body text-sm tracking-wide rounded-full px-10 h-12 shadow-xl shadow-accent/20">
                Start a Conversation <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="font-body text-sm tracking-wide rounded-full px-10 h-12 border-primary-foreground/15 text-primary-foreground/80 hover:bg-primary-foreground/5 hover:text-primary-foreground">
                Explore Services
              </Button>
            </Link>
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
                <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/20 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 h-full">
                  <div className="absolute top-6 right-6 text-[4rem] font-heading font-bold text-border/50 leading-none select-none group-hover:text-accent/10 transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="relative z-10 pt-8">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{item.label}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-brand rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
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
                <div className="group relative">
                  <span className="text-6xl font-heading font-bold text-accent/10 block mb-4 group-hover:text-accent/20 transition-colors duration-500">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FLAGSHIP PROJECT ═══════════════════ */}
      <section className="relative py-32 bg-havenz-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(173_58%_39%_/_0.08)_0%,_transparent_60%)]" />
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-body uppercase tracking-[0.25em] text-havenz-teal mb-5">Flagship Project</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-[1.1] mb-6">
                AHI Red Deer
              </h2>
              <p className="text-xl font-heading text-havenz-teal mb-6">Sustainable Innovation Campus</p>
              <p className="text-primary-foreground/50 font-body max-w-2xl mx-auto leading-relaxed mb-10">
                A groundbreaking smart campus integrating clean energy, digital connectivity, and sustainable living — setting new standards for AI-powered communities in Alberta.
              </p>
              <Link to="/about">
                <Button className="bg-gradient-brand text-accent-foreground hover:opacity-90 font-body text-sm tracking-wide rounded-full px-10 h-12 shadow-xl shadow-accent/20">
                  Discover More
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ DISCOVER OUR STORY ═══════════════════ */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">About Havenz</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
              Discover Our Story
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "What We Do", content: "We transform real estate and infrastructure through data-driven, AI-enhanced, and energy-resilient development models across all asset classes." },
              { title: "Our Mission", content: "To disrupt traditional development by building AI-powered, energy-efficient, and data-centric communities — scalable and aligned with the circular economy." },
              { title: "Our Vision", content: "To pioneer the next generation of smart living — communities that balance energy, data, food, and job security for future-ready cities." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <div className="p-8 rounded-2xl bg-secondary/50 border border-border h-full">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-4">{item.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                <div className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-body text-muted-foreground hover:text-accent hover:border-accent/20 transition-all duration-300 cursor-default">
                  {partner}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-32 bg-havenz-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(173_58%_39%_/_0.06)_0%,_transparent_60%)]" />
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
  );
};

export default Index;
