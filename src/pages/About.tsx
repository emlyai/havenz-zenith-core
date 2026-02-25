import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const timeline = [
  { year: "2010", title: "Founded", desc: "Havenz Smart Communities came into existence on a legacy of collaboration and strategic alliances." },
  { year: "2024", title: "Accelerating", desc: "Managing thousands of acres primed for development, embarking on an accelerated journey of vision." },
  { year: "2025", title: "Building", desc: "Active construction and development phase, spearheading various projects through the pipeline." },
  { year: "2026", title: "Leading", desc: "Multiple asset classes under construction, leading in Smart Real Estate & Innovation." },
];

const team = [
  { name: "Sunny Sarpal", initials: "SS" },
  { name: "John Burdiga", initials: "JB" },
  { name: "Dominic Friio", initials: "DF" },
  { name: "Dennis Cheng", initials: "DC" },
  { name: "Nelson Liem", initials: "NL" },
];

const partnersLogos = [
  "GGA Architecture", "Telus", "Samsung", "Energy Haven",
  "Century 21", "M3 Development", "Red Deer County",
  "Mobility Quotient", "Monarch Collective", "Exmerce",
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

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-16 min-h-[60vh] flex items-center bg-havenz-navy overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(173_58%_39%_/_0.08)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(hsl(173 58% 39% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(173 58% 39% / 0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
          {/* Floating shapes */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 3, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[12%] w-[200px] h-[200px] border border-havenz-teal/8 rounded-full hidden sm:block"
          />
          <motion.div
            animate={{ y: [10, -15, 10], scale: [1, 1.05, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-[8%] w-[150px] h-[150px] border border-havenz-cyan/5 rounded-full hidden sm:block"
          />
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <motion.div variants={heroStagger} initial="hidden" animate="visible">
              <motion.p variants={heroChild} className="text-xs font-body uppercase tracking-[0.25em] text-havenz-teal mb-5">About Havenz</motion.p>
              <motion.h1 variants={heroChild} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-[1.1] max-w-3xl">
                Pioneering Sustainable{" "}
                <span className="text-gradient">Development</span>
              </motion.h1>
              <motion.p variants={heroChild} className="mt-6 text-lg text-primary-foreground/50 font-body max-w-2xl leading-relaxed">
                Transforming Real Estate with ESG+R, Data-Driven Smart Communities focused on Food, Energy, Data, and Job Security.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">Our Story</p>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-6">More Than Real Estate</h2>
                  <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
                    <p>
                      At Havenz Smart Communities, we are revolutionizing the industry by spearheading projects that prioritize sustainability and innovation. Our approach is rooted in creating ESG+R compliant, data-driven, and template-based smart communities.
                    </p>
                    <p>
                      We specialize across all asset classes, with a core focus on food security, energy sustainability, data integrity, and job stability.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-7">
                <ScrollReveal delay={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-2xl overflow-hidden border border-border shadow-xl"
                  >
                    <img
                      src="https://www.havenz.ai/wp-content/uploads/2024/05/Enscape_1-min.png"
                      alt="AHI Red Deer Campus"
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-secondary/30">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5 text-center">Journey</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-16">A Legacy of Progress</h2>
            </ScrollReveal>

            <div className="relative">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border origin-top"
              />

              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.15}>
                  <div className={`relative flex items-start mb-16 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background z-10"
                    />
                    <div className={`ml-16 md:ml-0 md:w-[44%] ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}>
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-body font-semibold rounded-full mb-3">{item.year}</span>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Integrated Development */}
        <section className="relative py-32 bg-havenz-navy overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(173_58%_39%_/_0.06)_0%,_transparent_50%)]" />
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, -2, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[5%] w-[250px] h-[250px] border border-havenz-teal/5 rounded-full hidden sm:block"
          />
          <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-havenz-teal mb-5">Approach</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-8">
                Integrated Development
              </h2>
              <div className="space-y-5 text-primary-foreground/50 font-body leading-relaxed max-w-3xl">
                <p>
                  We take pride in our role as integrators, leveraging strategic relationships to handle all aspects of our developments. We collaborate with partners and landowners to apply our templates and expertise.
                </p>
                <p>
                  If you have land ready for development and a vision for a great project, we are eager to partner with you.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-body font-medium text-havenz-teal mt-8 hover:gap-3 transition-all duration-300">
                Partner with us <ArrowUpRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Energy Haven Partnership */}
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5">Strategic Alliance</p>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    Energy Haven Partnership
                  </h2>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">
                    Through our partnership with Energy Haven — Clean Energy Infrastructure Partnership, we deploy green and renewable energy projects focused on power generation. Together, we advance ESG projects aligned with Scope 1, 2, 3 mandates.
                  </p>
                  <Link to="/services">
                    <Button className="bg-gradient-brand text-accent-foreground hover:opacity-90 font-body text-sm rounded-full px-8 h-10 shadow-lg shadow-accent/20">
                      Explore Services <ArrowRight className="ml-2" size={14} />
                    </Button>
                  </Link>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-5">
                <ScrollReveal delay={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-2xl overflow-hidden border border-border shadow-xl"
                  >
                    <img
                      src="https://www.havenz.ai/wp-content/uploads/2024/04/image-london-c.jpg"
                      alt="Havenz Sustainable Energy Centre - Langdon"
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Team & Partners */}
        <section className="section-padding bg-secondary/30">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-accent mb-5 text-center">Our People</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-16">
                Leadership & Partners
              </h2>
            </ScrollReveal>

            {/* Team */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">
              {team.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-colors duration-500"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 rounded-full bg-havenz-navy mx-auto mb-4 flex items-center justify-center"
                    >
                      <span className="text-lg font-heading font-bold text-havenz-teal">{member.initials}</span>
                    </motion.div>
                    <h3 className="text-sm font-body font-semibold text-foreground">{member.name}</h3>
                    <p className="text-xs font-body text-muted-foreground mt-1">Havenz Smart Communities</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Partners */}
            <div className="flex flex-wrap justify-center gap-3">
              {partnersLogos.map((partner, i) => (
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

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
