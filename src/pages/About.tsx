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

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end bg-havenz-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-havenz-dark/50 to-havenz-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-havenz-teal/5 to-accent/5" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 lg:px-8 w-full">
          <p className="text-sm font-body uppercase tracking-[0.3em] text-havenz-teal mb-2">About Us</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.1]">
                Pioneering Sustainable Development: Transforming Real Estate with Havenz Smart Communities
              </h1>
              <div className="w-16 h-1 bg-accent mt-6" />
              <h2 className="text-lg md:text-xl font-display text-havenz-teal mt-6 leading-relaxed">
                Leading the Way in ESG+R, Data-Driven Smart Communities with a Focus on Food, Energy, Data, and Job Security
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="aspect-[4/3] bg-gradient-to-br from-havenz-dark to-havenz-navy rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <svg viewBox="0 0 40 40" className="w-16 h-16 mx-auto mb-4" fill="none">
                    <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" stroke="hsl(170, 65%, 50%)" strokeWidth="1.5" fill="none" />
                    <polygon points="20,8 30,14 30,26 20,32 10,26 10,14" stroke="hsl(170, 65%, 50%)" strokeWidth="1" fill="none" opacity="0.6" />
                    <circle cx="20" cy="20" r="3" fill="hsl(170, 65%, 50%)" opacity="0.8" />
                  </svg>
                  <span className="text-sm font-body tracking-[0.3em] text-primary-foreground/60">H A V E N Z</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="section-padding bg-secondary">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                At Havenz Smart Communities, we are more than just a real estate development company – we are revolutionizing the industry by spearheading projects that prioritize sustainability and innovation. Our approach is rooted in creating ESG+R (Environmental, Social, Governance, and Resilience) compliant, data-driven, and template-based smart communities that redefine the standards of real estate development.
              </p>
              <p>
                We specialize in specific projects across all asset classes, with a core focus on ensuring food security, energy sustainability, data integrity, and job stability within our developments. By embedding these essential elements into our projects, we aim to address the critical challenges faced by communities today and offer sustainable solutions for the future.
              </p>
              <p>
                Aligned with global Scope 1, 2, 3 mandates, we are committed to developing projects that not only meet regulatory requirements but also set new benchmarks for environmental responsibility.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.15}>
                <div className={`relative flex items-start mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[42%] ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}>
                    <p className="text-sm font-body font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                    <span className="inline-block px-4 py-1 bg-accent text-accent-foreground text-sm font-body font-bold rounded-full">
                      {item.year}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Development Approach */}
      <section className="section-padding bg-havenz-navy text-primary-foreground">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Integrated Development Approach
            </h2>
            <p className="text-primary-foreground/60 font-body leading-relaxed max-w-3xl mb-8">
              At Havenz Smart Communities, we take pride in our role as integrators, leveraging strategic relationships to handle all aspects of our developments. Our goal is to collaborate with project partners and landowners to apply our templates and expertise in bringing projects to fruition.
            </p>
            <p className="text-primary-foreground/60 font-body leading-relaxed max-w-3xl mb-8">
              We prioritize seamless integration with landowners and municipalities to create sustainable and impactful developments. If you have land ready for development and a vision for a great project, we are eager to partner with you in making it a reality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Energy Haven Partnership */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Partnership with Energy Haven
            </h2>
            <h3 className="text-xl font-display text-havenz-teal mb-6">
              Driving Green & Renewable Energy Projects
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mb-8">
              Havenz Smart Communities is proud to announce our partnership with Energy Haven – Clean Energy Infrastructure Partnership, a leader in deploying green and renewable energy projects with a focus on power generation and infrastructure. Through this strategic alliance, we have the capabilities to advance ESG-focused projects aligning with Scope 1, 2, 3 mandates.
            </p>
            <Link to="/services">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-sm tracking-wider rounded-full px-8">
                Explore Services <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Collaborative Partnerships and Innovators' Showcase
              </h2>
              <p className="text-muted-foreground font-body mt-4">
                An Insight into the Diverse Network of Individuals and Companies Involved with Havenz Smart Communities
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-havenz-navy mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-havenz-teal">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-sm font-body font-semibold text-foreground">{member.name}</h3>
                  <p className="text-xs font-body text-muted-foreground mt-1">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {partnersLogos.map((partner, i) => (
              <ScrollReveal key={partner} delay={i * 0.05}>
                <div className="px-6 py-3 bg-card border border-border rounded-lg text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:border-accent/30 transition-all duration-300 cursor-default">
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
