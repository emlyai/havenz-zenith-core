import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Zap, Database, Users, ArrowRight } from "lucide-react";

const valueProps = [
  {
    icon: Shield,
    title: "Food Security",
    description: "Embedding agricultural resilience into community infrastructure for long-term food sovereignty.",
  },
  {
    icon: Zap,
    title: "Energy Sustainability",
    description: "Deploying green and renewable energy solutions aligned with Scope 1, 2, 3 mandates.",
  },
  {
    icon: Database,
    title: "Data Integrity",
    description: "Building data-driven smart communities with sovereign AI and secure digital infrastructure.",
  },
  {
    icon: Users,
    title: "Job Stability",
    description: "Creating sustainable economic ecosystems that generate lasting employment opportunities.",
  },
];

const partners = [
  "GGA Architecture", "Telus", "Samsung", "Energy Haven",
  "Century 21", "M3 Development", "Red Deer County", "Mobility Quotient",
  "Monarch Collective", "Exmerce",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-havenz-teal-light opacity-60" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Sovereign AI · Infrastructure · Smart Communities
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary leading-[1.1] tracking-tight"
          >
            Pioneering Sustainable{" "}
            <span className="text-gradient">Development</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed"
          >
            Transforming real estate through ESG+R compliant, data-driven smart communities
            — shaping the future of power, infrastructure, and compute.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body rounded-full px-8 text-base">
                Let's Talk <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="font-body rounded-full px-8 text-base border-primary/20">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-primary/20 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Value Propositions */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">What We Do</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary">
                Building Tomorrow's Communities
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Milestones */}
      <section className="section-padding bg-havenz-warm">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">Our Impact</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Milestones That Matter
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedCounter end={2010} label="Year Founded" />
            <AnimatedCounter end={5000} suffix="+" label="Acres Managed" />
            <AnimatedCounter end={12} suffix="+" label="Projects in Pipeline" />
          </div>
        </div>
      </section>

      {/* Energy Haven Partnership */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">Strategic Partnership</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  Energy Haven Partnership
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Through our strategic alliance with Energy Haven — Clean Energy Infrastructure Partnership,
                  we deploy green and renewable energy projects focusing on power generation and infrastructure.
                  Together, we advance ESG-focused projects aligned with Scope 1, 2, 3 mandates.
                </p>
                <Link to="/services">
                  <Button variant="outline" className="font-body rounded-full px-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Explore Services <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/10 via-primary/5 to-havenz-teal-light flex items-center justify-center">
                  <div className="text-center p-8">
                    <Zap size={48} className="text-accent mx-auto mb-4" />
                    <p className="font-display text-2xl font-bold text-primary">Clean Energy</p>
                    <p className="font-body text-sm text-muted-foreground mt-2">Infrastructure Partnership</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent/10 blur-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partners Logo Strip */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="text-center text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-12">
              Trusted Partners & Collaborators
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {partners.map((partner, i) => (
              <ScrollReveal key={partner} delay={i * 0.06}>
                <div className="px-6 py-3 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default">
                  {partner}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-lg font-body opacity-80 mb-10 max-w-2xl mx-auto">
              Whether you have land ready for development or a vision for a sustainable project,
              we're eager to partner with you.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body rounded-full px-10 text-base">
                Let's Talk <ArrowRight className="ml-2" size={18} />
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
