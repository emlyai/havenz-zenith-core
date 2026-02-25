import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AHI Red Deer",
    subtitle: "Sustainable Innovation Campus",
    category: "Flagship Project",
    image: "https://www.havenz.ai/wp-content/uploads/2024/05/Enscape_1-min.png",
    desc: "A groundbreaking smart campus integrating clean energy, digital connectivity, and sustainable living — setting new standards for AI-powered communities in Alberta.",
    link: "https://www.havenz.ai/portfolio/ahi-red-deer-sustainable-innovation-campus/",
  },
  {
    title: "Havenz Sustainable Energy Centre",
    subtitle: "Langdon",
    category: "Data Centre & Transport Hub",
    image: "https://www.havenz.ai/wp-content/uploads/2024/04/image-london-c.jpg",
    desc: "Where clean power, AI infrastructure, and food resilience converge. A next-generation data centre and transport hub built for sovereign innovation.",
    link: "https://www.havenz.ai/portfolio/where-clean-power-ai-infrastructure-and-food-resilience-converge-welcome-to-havenz-sustainable-energy-centre/",
  },
  {
    title: "Moon Haven",
    subtitle: "Country Residential & Cabin Development",
    category: "Sustainable Living",
    image: "https://www.havenz.ai/wp-content/uploads/2024/04/moon-haven-c.png",
    desc: "A serene country residential development blending sustainable living with modern comfort, nestled in Alberta's natural landscape.",
    link: "https://www.havenz.ai/portfolio/moon-haven-country-residential-cabin-development/",
  },
  {
    title: "AHI Calgary",
    subtitle: "Smart Mobility & Energy Hub",
    category: "Smart Infrastructure",
    image: "https://www.havenz.ai/wp-content/uploads/2024/04/AHI-CALGARY–HAVENZ-SMART-MOBILITYm.png",
    desc: "A 7.9-acre smart mobility and energy hub strategically located in Calgary, featuring on-site EV charging and district energy systems.",
    link: "https://www.havenz.ai/portfolio/ahi-calgary-havenz-smart-mobility-and-energy-hub/",
  },
  {
    title: "AHI Fort McMurray",
    subtitle: "Green Lifestyle & Trade Center",
    category: "Mixed Use",
    image: "https://www.havenz.ai/wp-content/uploads/2024/04/AHI-FORT-MCMURRAY-m.png",
    desc: "A green lifestyle and trade center bringing sustainable commerce and community living to Fort McMurray's evolving landscape.",
    link: "https://www.havenz.ai/portfolio/ahi-fort-mcmurray-havenz-green-lifestyle-and-trade-center/",
  },
  {
    title: "RISE Headquarters",
    subtitle: "Innovation Hub",
    category: "Commercial",
    image: "https://www.havenz.ai/wp-content/uploads/2024/04/rise-hadquarter-02.png",
    desc: "A state-of-the-art headquarters designed for innovation, collaboration, and sustainable enterprise operations.",
    link: "https://www.havenz.ai/portfolio/rise-headquarters/",
  },
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

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-16 min-h-[50vh] flex items-center bg-havenz-navy overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(173_58%_39%_/_0.08)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(hsl(173 58% 39% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(173 58% 39% / 0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 3, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[12%] w-[200px] h-[200px] border border-havenz-teal/8 rounded-full"
          />
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <motion.div variants={heroStagger} initial="hidden" animate="visible">
              <motion.p variants={heroChild} className="text-xs font-body uppercase tracking-[0.25em] text-havenz-teal mb-5">
                Portfolio
              </motion.p>
              <motion.h1 variants={heroChild} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-[1.1] max-w-3xl">
                Our <span className="text-gradient">Projects</span>
              </motion.h1>
              <motion.p variants={heroChild} className="mt-6 text-lg text-primary-foreground/50 font-body max-w-2xl leading-relaxed">
                Explore our portfolio of smart communities, sustainable campuses, and innovation hubs across Alberta and beyond.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <ScrollReveal key={project.title} delay={i * 0.08}>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-colors duration-500"
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-accent/10 backdrop-blur-sm text-accent text-xs font-body font-semibold rounded-full border border-accent/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm font-heading font-medium text-accent/80 mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
                        {project.desc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-accent group-hover:gap-2.5 transition-all duration-300">
                        View Project <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 bg-havenz-navy overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(173_58%_39%_/_0.06)_0%,_transparent_60%)]" />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-havenz-teal"
          />
          <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
            <ScrollReveal>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-havenz-teal mb-5">Have a Vision?</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                Let's Build Together
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

export default Projects;
