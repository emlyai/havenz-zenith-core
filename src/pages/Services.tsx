import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const bulletCol1 = [
  "Industry-leading technology and data",
  "Disruptive real estate innovation",
  "ESG+R commitment and excellence",
  "Aligned with emissions goals",
  "Reliable Net Zero energy",
  "Flexible business models",
  "Forward-thinking projects",
  "Collaborative success",
  "Innovative sustainability practices",
];

const bulletCol2 = [
  "All Classes of Real Estate",
  "Infrastructure Development",
  "Smart Community Development",
  "Industrial Development",
  "(CRU) Commercial Retail Development",
  "Multi-Family Developments",
  "Land Acquisitions",
  "Vision & Master Planning",
  "(JV) Joint Ventures",
];

const serviceDetails = [
  {
    title: "Industry-leading technology and data",
    description: "Utilize cutting-edge technology and data analytics to provide unparalleled insights and solutions for smart community development. Our tech-driven approach ensures efficiency, sustainability, and optimal performance in all our projects.",
  },
  {
    title: "Disruptive real estate innovation",
    description: "Redefine the real estate landscape with groundbreaking innovations. By integrating advanced technologies and creative strategies, we drive significant value and transform traditional real estate paradigms.",
  },
  {
    title: "ESG+R commitment and excellence",
    description: "Exemplify our dedication to Environmental, Social, and Governance (ESG) standards plus Resilience. We integrate ESG principles into every aspect of our operations, ensuring sustainable and socially responsible developments.",
  },
  {
    title: "Aligned with emissions goals",
    description: "Commit to meeting and exceeding emissions reduction targets. Our projects are designed to minimize carbon footprints and contribute to global climate goals, ensuring a cleaner, greener future.",
  },
  {
    title: "Reliable Net Zero energy",
    description: "Achieve net-zero energy consumption by integrating renewable energy sources and energy-efficient designs. Our developments are built to produce as much energy as they consume, promoting environmental sustainability.",
  },
  {
    title: "Flexible business models",
    description: "Offer adaptable and innovative business models that cater to diverse market needs. Our flexible approach allows us to pivot and respond effectively to changing economic and environmental landscapes.",
  },
];

const scopeItems = [
  {
    scope: "Scope 1",
    title: "Direct Emissions",
    items: ["On-site energy management", "Fleet optimization", "Facilities with net-zero targets"],
  },
  {
    scope: "Scope 2",
    title: "Indirect Energy",
    items: ["Renewable energy procurement", "Green power purchase agreements", "Grid-connected solar & wind"],
  },
  {
    scope: "Scope 3",
    title: "Value Chain",
    items: ["Supply chain optimization", "Sustainable materials sourcing", "Community impact measurement"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end bg-havenz-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-havenz-dark/50 to-havenz-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-havenz-teal/5" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 lg:px-8 w-full">
          <p className="text-sm font-body uppercase tracking-[0.3em] text-havenz-teal mb-2">Services</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                Our Services
              </h1>
              <div className="w-16 h-1 bg-accent mt-6" />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <ul className="space-y-3">
                {bulletCol1.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-body text-muted-foreground">
                    <span className="w-2 h-2 rounded-full border border-havenz-navy mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ul className="space-y-3">
                {bulletCol2.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-body text-muted-foreground">
                    <span className="w-2 h-2 rounded-full border border-havenz-navy mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-secondary">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Construction Services that Go Beyond Expectations
            </h2>
            <div className="w-16 h-1 bg-accent mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceDetails.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="p-8 bg-card border border-border rounded-xl hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scope 1, 2, 3 */}
      <section className="section-padding bg-havenz-navy text-primary-foreground">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-body uppercase tracking-[0.3em] text-havenz-teal mb-4">Regulatory Alignment</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Scope 1, 2, 3 Compliance
              </h2>
              <p className="mt-4 text-primary-foreground/60 font-body max-w-2xl mx-auto">
                All our developments are designed to meet and exceed global emissions mandates across all three scopes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scopeItems.map((item, i) => (
              <ScrollReveal key={item.scope} delay={i * 0.15}>
                <div className="text-center p-8 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-havenz-teal mb-6">
                    <span className="text-lg font-body font-bold text-havenz-teal">{item.scope.split(" ")[1]}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold mb-1">{item.scope}</h3>
                  <p className="text-sm font-body font-medium text-havenz-teal mb-4">{item.title}</p>
                  <ul className="space-y-2 text-left">
                    {item.items.map((li) => (
                      <li key={li} className="flex items-center gap-2 text-sm font-body text-primary-foreground/60">
                        <CheckCircle2 size={14} className="text-havenz-teal shrink-0" />
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
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Partnership Model
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  We collaborate with landowners and municipalities to apply our proven templates and expertise, transforming raw land into thriving, sustainable communities.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  If you have land ready for development and a vision for a great project, we are eager to partner with you in making it a reality.
                </p>
                <Link to="/contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-sm tracking-wider rounded-full px-8">
                    Start a Conversation <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-4">
                {["Landowner Partnership", "Municipal Collaboration", "Template Application", "Project Execution"].map((step, i) => (
                  <div key={step} className="flex items-center gap-4 p-5 rounded-xl bg-secondary border border-border">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-body font-bold text-accent">{i + 1}</span>
                    </div>
                    <span className="font-body font-medium text-foreground">{step}</span>
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
