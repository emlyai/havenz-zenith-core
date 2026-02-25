import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, ArrowUpRight, X, MapPin, CheckCircle2 } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  category: string;
  image: string;
  desc: string;
  details: string[];
  location: string;
}

const projects: Project[] = [
  {
    title: "AHI Red Deer",
    subtitle: "Sustainable Innovation Campus",
    category: "Flagship Project",
    image: "https://www.havenz.ai/wp-content/uploads/2024/05/Enscape_1-min.png",
    desc: "A groundbreaking smart campus integrating clean energy, digital connectivity, and sustainable living — setting new standards for AI-powered communities in Alberta.",
    location: "Red Deer County, AB",
    details: [
      "480-acre master-planned campus with 8M+ sqft of mixed-use development",
      "Integrated clean energy grid with solar, wind, and battery storage",
      "Digital connectivity backbone with sovereign AI data infrastructure",
      "Mixed-use zoning: residential, commercial, industrial, and agricultural",
      "ESG+R compliant design aligned with Scope 1, 2, 3 emissions mandates",
    ],
  },
  {
    title: "Havenz Sustainable Energy Centre",
    subtitle: "Langdon",
    category: "Data Centre & Transport Hub",
    image: "https://www.havenz.ai/wp-content/uploads/2024/04/image-london-c.jpg",
    desc: "Where clean power, AI infrastructure, and food resilience converge. A next-generation data centre and transport hub built for sovereign innovation.",
    location: "Langdon, AB",
    details: [
      "Next-generation data centre powered by on-site renewable energy",
      "Integrated transport hub with smart logistics and EV infrastructure",
      "Food resilience systems including vertical farming and cold storage",
      "Clean power generation feeding both on-site and grid-connected systems",
      "Sovereign AI compute infrastructure for Canadian data sovereignty",
    ],
  },
  {
    title: "Moon Haven",
    subtitle: "Country Residential & Cabin Development",
    category: "Sustainable Living",
    image: "https://www.havenz.ai/wp-content/uploads/2024/04/moon-haven-c.png",
    desc: "A serene country residential development blending sustainable living with modern comfort, nestled in Alberta's natural landscape.",
    location: "Alberta, Canada",
    details: [
      "Country residential lots with modern cabin-style architecture",
      "Off-grid capable energy systems with solar and battery backup",
      "Nature-integrated design preserving Alberta's natural landscape",
      "Community amenities including trails, gathering spaces, and gardens",
    ],
  },
  {
    title: "AHI Calgary",
    subtitle: "Smart Mobility & Energy Hub",
    category: "Smart Infrastructure",
    image: "https://www.havenz.ai/wp-content/uploads/2024/04/AHI-CALGARY–HAVENZ-SMART-MOBILITYm.png",
    desc: "A 7.9-acre smart mobility and energy hub strategically located in Calgary, featuring on-site EV charging and district energy systems.",
    location: "Calgary, AB",
    details: [
      "7.9-acre strategic urban site in Calgary's innovation corridor",
      "On-site EV charging infrastructure with fast and ultra-fast stations",
      "District energy systems providing clean heating and cooling",
      "Smart mobility integration with transit and micro-mobility networks",
      "Mixed-use commercial and innovation spaces",
    ],
  },
  {
    title: "AHI Fort McMurray",
    subtitle: "Green Lifestyle & Trade Center",
    category: "Mixed Use",
    image: "https://www.havenz.ai/wp-content/uploads/2024/04/AHI-FORT-MCMURRAY-m.png",
    desc: "A green lifestyle and trade center bringing sustainable commerce and community living to Fort McMurray's evolving landscape.",
    location: "Fort McMurray, AB",
    details: [
      "Green lifestyle centre with sustainable retail and dining",
      "Trade and commerce spaces supporting local entrepreneurship",
      "Community living integrated with green infrastructure",
      "Energy-efficient building systems exceeding code requirements",
    ],
  },
  {
    title: "RISE Headquarters",
    subtitle: "Innovation Hub",
    category: "Commercial",
    image: "https://www.havenz.ai/wp-content/uploads/2024/04/rise-hadquarter-02.png",
    desc: "A state-of-the-art headquarters designed for innovation, collaboration, and sustainable enterprise operations.",
    location: "Alberta, Canada",
    details: [
      "State-of-the-art commercial headquarters for innovation-driven enterprises",
      "Collaborative workspace design with flexible floor plans",
      "Sustainable building systems with net-zero operational targets",
      "Advanced digital infrastructure for smart building operations",
    ],
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

function ProjectModalContent({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-accent/10 backdrop-blur-sm text-accent text-xs font-body font-semibold rounded-full border border-accent/20">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-heading font-bold text-foreground">{project.title}</h3>
          <p className="text-sm font-heading font-medium text-accent/80 mt-1">{project.subtitle}</p>
        </div>

        <div className="flex items-center gap-1.5 text-sm font-body text-muted-foreground">
          <MapPin size={14} className="text-accent shrink-0" />
          {project.location}
        </div>

        <p className="text-sm font-body text-muted-foreground leading-relaxed">
          {project.desc}
        </p>

        {/* Details */}
        <div className="pt-2 space-y-2.5">
          <p className="text-xs font-body uppercase tracking-[0.2em] text-accent font-semibold">Key Features</p>
          {project.details.map((detail) => (
            <div key={detail} className="flex items-start gap-2.5">
              <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
              <span className="text-sm font-body text-muted-foreground leading-relaxed">{detail}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Link to="/contact" onClick={onClose}>
            <Button className="bg-gradient-brand text-accent-foreground hover:opacity-90 font-body text-sm tracking-wide rounded-full px-8 h-10 shadow-lg shadow-accent/20 w-full sm:w-auto">
              Contact Us About This Project <ArrowRight className="ml-2" size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isMobile = useIsMobile();

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
            className="absolute top-1/3 right-[12%] w-[200px] h-[200px] border border-havenz-teal/8 rounded-full hidden sm:block"
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
                  <motion.div
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-colors duration-500 cursor-pointer"
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
                        View Details <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal - Desktop: Dialog, Mobile: Drawer */}
        {isMobile ? (
          <Drawer open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
            <DrawerContent className="max-h-[90vh]">
              <DrawerHeader className="sr-only">
                <DrawerTitle>{selectedProject?.title}</DrawerTitle>
                <DrawerDescription>{selectedProject?.subtitle}</DrawerDescription>
              </DrawerHeader>
              <div className="overflow-y-auto">
                {selectedProject && (
                  <ProjectModalContent project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
            <DialogContent className="max-w-2xl p-0 overflow-hidden bg-card border-border gap-0 max-h-[90vh] overflow-y-auto">
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedProject?.title}</DialogTitle>
                <DialogDescription>{selectedProject?.subtitle}</DialogDescription>
              </DialogHeader>
              {selectedProject && (
                <ProjectModalContent project={selectedProject} onClose={() => setSelectedProject(null)} />
              )}
            </DialogContent>
          </Dialog>
        )}

        {/* CTA */}
        <section className="relative py-32 bg-havenz-navy overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(173_58%_39%_/_0.06)_0%,_transparent_60%)]" />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-havenz-teal hidden sm:block"
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
