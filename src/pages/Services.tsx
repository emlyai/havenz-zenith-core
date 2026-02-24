import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2, Leaf, BarChart3, Cpu,
  ArrowRight, CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Smart Communities",
    description: "Template-based, data-driven residential and mixed-use developments designed for resilience and sustainability.",
    features: ["ESG+R compliant design", "Smart infrastructure integration", "Community-centric planning"],
  },
  {
    icon: Leaf,
    title: "Green Energy",
    description: "Deploying renewable energy solutions through our Energy Haven partnership for clean power generation.",
    features: ["Solar & wind integration", "Power generation infrastructure", "Carbon offset programs"],
  },
  {
    icon: BarChart3,
    title: "ESG+R Compliance",
    description: "Comprehensive environmental, social, governance, and resilience frameworks for all developments.",
    features: ["Scope 1, 2, 3 alignment", "Regulatory compliance", "Impact reporting & tracking"],
  },
  {
    icon: Cpu,
    title: "Data-Driven Development",
    description: "Leveraging sovereign AI and advanced analytics to optimize community design and operations.",
    features: ["Sovereign AI positioning", "Predictive analytics", "Digital twin modeling"],
  },
];

const scopeItems = [
  { scope: "Scope 1", title: "Direct Emissions", description: "On-site energy, fleet, and facilities management with net-zero targets." },
  { scope: "Scope 2", title: "Indirect Energy", description: "Renewable energy procurement and green power purchase agreements." },
  { scope: "Scope 3", title: "Value Chain", description: "Supply chain optimization, sustainable materials, and community impact." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-[1.1]">
              What We Build
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
              From smart communities to green energy infrastructure, we deliver integrated development
              solutions across all asset classes with a commitment to sustainability and innovation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.12}>
                <div className="group h-full p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-body text-muted-foreground">
                        <CheckCircle2 size={16} className="text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scope 1, 2, 3 */}
      <section className="section-padding bg-havenz-warm">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">Regulatory Alignment</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Scope 1, 2, 3 Compliance
              </h2>
              <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
                All our developments are designed to meet and exceed global emissions mandates
                across all three scopes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scopeItems.map((item, i) => (
              <ScrollReveal key={item.scope} delay={i * 0.15}>
                <div className="text-center p-8 rounded-2xl bg-card border border-border">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <span className="text-lg font-body font-bold text-accent">{item.scope.split(" ")[1]}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary mb-1">{item.scope}</h3>
                  <p className="text-sm font-body font-medium text-accent mb-3">{item.title}</p>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4">Collaboration</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  Partnership Model
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  We collaborate with landowners and municipalities to apply our proven templates
                  and expertise, transforming raw land into thriving, sustainable communities.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  If you have land ready for development and a vision for a great project,
                  we are eager to partner with you in making it a reality.
                </p>
                <Link to="/contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-body rounded-full px-8">
                    Start a Conversation <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-4">
                {["Landowner Partnership", "Municipal Collaboration", "Template Application", "Project Execution"].map((step, i) => (
                  <div key={step} className="flex items-center gap-4 p-5 rounded-xl bg-secondary">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-body font-bold text-accent">{i + 1}</span>
                    </div>
                    <span className="font-body font-medium text-primary">{step}</span>
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
