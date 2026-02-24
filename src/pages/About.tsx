import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const timeline = [
  {
    year: "2010",
    title: "Founded",
    description: "Founded on a legacy of collaboration and strategic alliances, Havenz Smart Communities came into existence.",
  },
  {
    year: "2024",
    title: "Embarking",
    description: "Embarking on an accelerated journey of vision, Havenz Smart Communities manages thousands of acres primed for development.",
  },
  {
    year: "2025",
    title: "Stepping Forward",
    description: "Stepping into an era of active construction and development, spearheading various projects through the development pipeline.",
  },
  {
    year: "2026",
    title: "Leading Innovation",
    description: "Setting the course to have multiple asset classes under construction, leading in Smart Real Estate & Innovation.",
  },
];

const team = [
  { name: "Sunny Sarpal", role: "Havenz Smart Communities" },
  { name: "John Burdiga", role: "Havenz Smart Communities" },
  { name: "Dominic Friio", role: "Havenz Smart Communities" },
  { name: "Dennis Cheng", role: "Havenz Smart Communities" },
  { name: "Nelson Liem", role: "Havenz Smart Communities" },
];

const partnersLogos = [
  "GGA Architecture", "Telus", "Samsung", "Energy Haven",
  "Century 21", "M3 Development", "Red Deer County",
  "Mobility Quotient", "Monarch Collective Inc.", "Exmerce",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">About Havenz</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-[1.1]">
              Our Story
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
              At Havenz Smart Communities, we are revolutionizing the industry by spearheading projects
              that prioritize sustainability and innovation. Our approach is rooted in creating ESG+R
              compliant, data-driven, template-based smart communities that redefine the standards
              of real estate development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">Our Mission</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  ESG+R at the Core
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  We specialize in projects across all asset classes, with a core focus on ensuring
                  food security, energy sustainability, data integrity, and job stability within our developments.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Aligned with global Scope 1, 2, 3 mandates, we develop projects that not only meet
                  regulatory requirements but set new benchmarks for environmental responsibility.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/10 via-secondary to-havenz-teal-light flex items-center justify-center p-12">
                <div className="text-center">
                  <p className="font-display text-6xl font-bold text-primary">E</p>
                  <p className="font-display text-6xl font-bold text-accent">S</p>
                  <p className="font-display text-6xl font-bold text-primary">G</p>
                  <p className="font-display text-4xl font-bold text-havenz-gold mt-2">+R</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-havenz-warm">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">Our Journey</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                A Legacy of Progress
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.15}>
                <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                    <span className="text-sm font-body font-semibold text-accent">{item.year}</span>
                    <h3 className="text-xl font-display font-bold text-primary mt-1">{item.title}</h3>
                    <p className="text-sm font-body text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Development Approach */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Integrated Development
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <p className="text-muted-foreground font-body leading-relaxed text-center max-w-3xl mx-auto">
                We take pride in our role as integrators, leveraging strategic relationships to handle all
                aspects of our developments. Our goal is to collaborate with project partners and landowners
                to apply our templates and expertise in bringing projects to fruition. We prioritize seamless
                integration with landowners and municipalities to create sustainable and impactful developments.
              </p>
              <div className="text-center mt-8">
                <Link to="/contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-body rounded-full px-8">
                    Partner With Us <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">Our People</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Leadership Team
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-accent">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-sm font-body font-semibold text-primary">{member.name}</h3>
                  <p className="text-xs font-body text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">Our Network</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Partners & Collaborators
              </h2>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-6">
            {partnersLogos.map((partner, i) => (
              <ScrollReveal key={partner} delay={i * 0.06}>
                <div className="px-8 py-4 bg-secondary rounded-xl text-sm font-body font-medium text-muted-foreground hover:text-primary hover:bg-accent/10 transition-all duration-300 cursor-default">
                  {partner}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
