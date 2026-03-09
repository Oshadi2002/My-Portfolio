import { useState } from "react";
import { ExternalLink, Github, Sparkles, Code2, Globe, Layers, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Project images ---
import naitaImg from "../assets/naita_mis_mockup.png";
import doctorImg from "../assets/doctor_appointment_mockup.png";
import weatherImg from "../assets/weather_app_mockup.png";
import portfolioImg from "../assets/portfolio_mockup.png";

// --------------------------------------------------------
// Project Data — all 5 repos from Oshadi2002
// --------------------------------------------------------
const projects = [
  {
    id: 1,
    title: "NAITA MIS – SIT Division",
    type: "Full Stack",
    category: "Web App",
    description:
      "A Management Information System built for the NAITA SIT Division. Features a React & TypeScript frontend with a Python backend, handling employee records, training modules, and departmental data management.",
    technologies: ["TypeScript", "React", "Python", "FastAPI"],
    image: naitaImg,
    githubLink: "https://github.com/Oshadi2002/NAITA-MIS---SIT-Division",
    demoLink: null,
    featured: true,
    gradient: "from-violet-500 to-indigo-500",
    accentColor: "#7c3aed",
  },
  {
    id: 2,
    title: "Doctor Appointment Web App",
    type: "Individual Project",
    category: "Web App",
    description:
      "A complete web application for booking doctor appointments. Patients can browse doctors, check real-time availability, and schedule visits online. Includes an admin dashboard for managing doctors and bookings.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: doctorImg,
    githubLink: "https://github.com/Oshadi2002/Doctor-Appointment-Web-Application",
    demoLink: "https://doctor-appointment-web-application.vercel.app",
    featured: true,
    gradient: "from-teal-500 to-cyan-500",
    accentColor: "#0d9488",
  },
  {
    id: 3,
    title: "Weather App",
    type: "Individual Project",
    category: "Web App",
    description:
      "A full-stack weather application with user authentication. Displays real-time weather data, temperature, humidity, and conditions via a public API. Features a responsive design with weather detail cards.",
    technologies: ["React", "Node.js", "CSS", "OpenWeatherMap API"],
    image: weatherImg,
    githubLink: "https://github.com/Oshadi2002/Weather-App",
    demoLink: null,
    featured: false,
    gradient: "from-blue-500 to-sky-400",
    accentColor: "#3b82f6",
  },
  {
    id: 4,
    title: "My Portfolio",
    type: "Personal Project",
    category: "Portfolio",
    description:
      "This very portfolio website! Built with React, TypeScript, Tailwind CSS, and Framer Motion. Features animated sections, a dark glassmorphism design, contact form integration, and fully responsive layout.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: portfolioImg,
    githubLink: "https://github.com/Oshadi2002/My-Portfolio",
    demoLink: null,
    featured: false,
    gradient: "from-pink-500 to-violet-500",
    accentColor: "#ec4899",
  },
];

const categories = ["All", "Web App", "Portfolio"];

// --------------------------------------------------------
// Animated card component
// --------------------------------------------------------
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      layout
      className="group relative flex flex-col rounded-xl overflow-hidden border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered ? `0 20px 60px -15px ${project.accentColor}40` : "none",
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/90 text-white backdrop-blur-sm">
          <Star className="h-3 w-3 fill-current" />
          Featured
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative aspect-[16/8] overflow-hidden bg-muted/30">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
        />

        {/* Hover action icons */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-4 w-4" /> Code
          </motion.a>
          {project.demoLink && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Type badge */}
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}
          >
            <Layers className="h-3 w-3" />
            {project.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-foreground leading-snug">{project.title}</h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed flex-1">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs font-mono font-medium border border-white/10 bg-white/5 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom links */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/8">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-3.5 w-3.5" /> View Code
          </a>
          {project.demoLink ? (
            <>
              <span className="text-white/20">·</span>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="h-3.5 w-3.5" /> Live Demo
              </a>
            </>
          ) : (
            <>
              <span className="text-white/20">·</span>
              <span className="text-xs text-muted-foreground/50 italic">No live demo</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// --------------------------------------------------------
// Main Component
// --------------------------------------------------------
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(240 10% 6%) 50%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #ec4899, transparent)" }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-violet-500/30 bg-violet-500/10 text-violet-400 mb-5">
            <Sparkles className="h-4 w-4" />
            GitHub Projects
          </span>

          <h2 className="text-5xl md:text-7xl font-black mb-4 leading-none">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work — from full-stack web apps to real-world management systems, built with modern technologies.
          </p>

          {/* GitHub link */}
          <motion.a
            href="https://github.com/Oshadi2002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github className="h-4 w-4" />
            github.com/Oshadi2002
          </motion.a>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex justify-center gap-2 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === cat
                ? "bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg shadow-violet-500/25"
                : "border border-white/15 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat === "All" && <Code2 className="inline h-3.5 w-3.5 mr-1.5 mb-0.5" />}
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project count */}
        <motion.p
          className="text-center text-sm text-muted-foreground/60 mb-8"
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Showing <span className="text-violet-400 font-semibold">{filtered.length}</span> project{filtered.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Grid */}
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground text-sm mb-4">
            Want to see more? Check out my GitHub profile for all repositories.
          </p>
          <motion.a
            href="https://github.com/Oshadi2002?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white shadow-lg"
            style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)" }}
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 12px 30px rgba(139,92,246,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Github className="h-5 w-5" />
            View All Repositories
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
