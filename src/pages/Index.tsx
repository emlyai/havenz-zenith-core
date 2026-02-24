import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const mandateColumns = [
  [
    "All Classes of Real Estate",
    "Infrastructure Development",
    "Smart Community Development",
    "Industry-leading technology and data",
    "Disruptive real estate innovation",
    "ESG+R commitment and excellence",
  ],
  [
    "Industrial Development",
    "(CRU) Commercial Retail Development",
    "Multi-Family Developments",
    "Aligned with emissions goals",
    "Reliable Net Zero energy",
    "Flexible business models",
  ],
  [
    "Land Acquisitions",
    "Vision & Master Planning",
    "(JV) Joint Ventures",
    "Forward-thinking projects",
    "Collaborative success",
    "Innovative sustainability practices",
  ],
];

const marqueeWords = [
  "Sustainable", "Innovation", "Prosperity", "Resilience",
  "Self-Sufficiency", "Connectivity", "Future-Proof",
];

const processSteps = [
  {
    num: "1",
    title: "Identifying Prime Location Partnerships",
    description: "Seeking strategic partnerships for site selection in key locations worldwide.",
  },
  {
    num: "2",
    title: "Collaborating on Vision and Design",
    description: "Working with partners to envision and design innovative and sustainable communities.",
  },
  {
    num: "3",
    title: "Planning for Success Together",
    description: "Planning and implementing projects that prioritize food, energy, job, and data security for long-term success.",
  },
  {
    num: "4",
    title: "Turning Vision into Reality",
    description: "Transforming ideas into tangible, thriving communities through collaboration and innovation.",
  },
];

const tabsContent = {
  "What We Do": "Havenz Smart Communities transforms real estate and infrastructure through data-driven, AI-enhanced, and energy-resilient development models. We design, build, and operate smart campuses and living spaces that integrate clean energy, digital connectivity, and sustainable growth frameworks.",
  "Mission": "To disrupt traditional development by building AI-powered, energy-efficient, and data-centric communities — scalable, repeatable, and aligned with the principles of the circular economy.",
  "Vision": "To pioneer the next generation of smart living — communities that balance energy, data, food, and job security, powered by innovation and sustainable design for future-ready cities.",
};

const partners = [
  "Sunny Sarpal", "John Burdiga", "Dominic Friio", "Dennis Cheng", "Nelson Liem",
  "GGA Architecture", "Telus", "Samsung", "Energy Haven", "Century 21",
  "M3 Development", "Red Deer County", "Mobility Quotient", "Monarch Collective Inc.", "Exmerce",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Dark background with bold text */}
      <section className="relative min-h-screen flex items-center justify-center bg-havenz-navy overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-havenz-navy via-havenz-dark to-havenz-navy" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-havenz-teal"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.02, 0.05, 0.02] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-primary-foreground leading-[1.05] tracking-tight"
          >
            Construct.{" "}
            <span className="text-havenz-teal">Innovate.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Link to="/services">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-sm tracking-wider rounded-full px-10">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Second Hero - "Creating Tomorrow's Smart Communities Today" */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
                Creating Tomorrow's Smart Communities Today
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-havenz-teal mb-4">
                  Innovative Real Estate Development Redefining Sustainability and Technology
                </h3>
                <Link to="/services">
                  <Button variant="outline" className="font-body text-sm tracking-wider rounded-full px-8 border-foreground/20 mt-4">
                    Our Mandates <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mandates - 3 column bullet lists */}
      <section className="section-padding bg-secondary">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {mandateColumns.map((col, ci) => (
              <ScrollReveal key={ci} delay={ci * 0.15}>
                <ul className="space-y-4">
                  {col.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-body text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-havenz-navy mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal>
              <AnimatedCounter end={8000000} suffix="" label="Sqft Under Planning For Future Construction" />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <AnimatedCounter end={5000} suffix="+" label="Acres Under Management For Future Development" />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <AnimatedCounter end={12} suffix="+" label="Partnerships In Play For Strategic Growth" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-6 bg-havenz-navy overflow-hidden">
        <div className="flex">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="text-lg md:text-xl font-display font-bold text-primary-foreground/80 mx-8">
                {word}
              </span>
            ))}
          </div>
        </div>
        <p className="text-center text-xs font-body text-primary-foreground/40 mt-4">
          Development and Management of All Types of Real Estate Asset Classes
        </p>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div className="group">
                  <div className="text-5xl font-display font-bold text-havenz-navy/10 mb-4 group-hover:text-havenz-teal/20 transition-colors">
                    {step.num}.
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Project */}
      <section className="section-padding bg-havenz-navy text-primary-foreground">
        <div className="mx-auto max-w-5xl text-center">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.3em] text-havenz-teal mb-4">Our Flagship Project</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              AHI Red Deer — Sustainable Innovation Campus
            </h2>
            <p className="text-primary-foreground/60 font-body max-w-2xl mx-auto leading-relaxed mb-8">
              A groundbreaking smart campus integrating clean energy, digital connectivity, and sustainable living — setting new standards for AI-powered communities in Alberta.
            </p>
            <Link to="/about">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-sm tracking-wider rounded-full px-8">
                Learn More
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Discover Our Story - Tabs */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Link to="/about" className="text-sm font-body uppercase tracking-[0.3em] text-accent hover:underline">About Us</Link>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
                "Discover Our Story"
              </h2>
              <p className="text-muted-foreground font-body mt-4">
                Development and Management of All Types of Real Estate Asset Classes
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              {Object.entries(tabsContent).map(([title, content]) => (
                <div key={title} className="border-l-4 border-accent pl-6 py-2">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{content}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partners & Collaborators */}
      <section className="section-padding bg-secondary">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Collaborators and Partners in Progress
              </h2>
              <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
                A Network of Visionaries and Innovators Shaping Tomorrow's Solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, i) => (
              <ScrollReveal key={partner} delay={i * 0.05}>
                <div className="px-6 py-3 bg-card border border-border rounded-lg text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:border-accent/30 hover:shadow-md transition-all duration-300 cursor-default">
                  {partner}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-havenz-navy text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.3em] text-havenz-teal mb-4">Contact Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg font-body text-primary-foreground/60 mb-4">
              Building Relationships, One Conversation at a Time
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
              Have a project in mind?
            </h3>
            <p className="text-lg font-body text-primary-foreground/60 mb-10">
              Do not hesitate to say Bonjour
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-sm tracking-wider rounded-full px-10">
                Let's Talk
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
