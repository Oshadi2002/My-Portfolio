import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Check,
  Sparkles,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// --- Typing animation hook ---
function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

// --- Floating Orbs Background ---
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: `${180 + i * 60}px`,
            height: `${180 + i * 60}px`,
            background: i % 2 === 0
              ? "radial-gradient(circle, #6366f1, #a855f7)"
              : "radial-gradient(circle, #ec4899, #3b82f6)",
            top: `${[10, 55, 75, 20, 40, 65][i]}%`,
            left: `${[5, 70, 20, 85, 45, 60][i]}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
        />
      ))}
    </div>
  );
}

// --- Animated grid lines ---
function GridLines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  );
}

// --- Skill badge with staggered entry ---
const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 1.2 + i * 0.08, type: "spring", stiffness: 260, damping: 20 },
  }),
};

const SKILLS = ["React", "TypeScript", "Flutter", "PHP", "MySQL", "Firebase", "JavaScript"];
const ROLES = ["Software Developer", "IT Undergraduate", "UI/UX Enthusiast", "Problem Solver"];

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const typedRole = useTypingEffect(ROLES);

  // Magnetic cursor effect on profile image
  const imageRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.12);
    y.set((e.clientY - cy) * 0.12);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleDownloadCV = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = "../../src/assets/W.A.O.K.Rathna.pdf";
    link.download = "W.A.O.K.Rathna_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => { setIsDownloading(false); setIsDownloaded(true); }, 1200);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Shared fade-up animation
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-24 overflow-hidden gap-12"
      style={{ background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background)) 60%, hsl(240 10% 6%) 100%)" }}
    >
      <GridLines />
      <FloatingOrbs />

      {/* === LEFT: Profile Image === */}
      <motion.div
        className="flex-shrink-0 relative"
        ref={imageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        {...fadeUp(0)}
      >
        {/* Rotating ring */}
        <motion.div
          className="absolute -inset-4 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #3b82f6, #6366f1)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Blurred halo */}
        <motion.div
          className="absolute -inset-6 rounded-full blur-2xl opacity-40"
          style={{ background: "radial-gradient(circle, #6366f1 0%, #ec4899 60%, transparent 80%)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Image container */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl bg-background z-10">
          <img
            src="../../src/assets/pic1.jpg"
            alt="Oshadi Kawshani"
            className="w-full h-full object-cover"
          />
          {/* Shimmer overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
          />
        </div>

        {/* Sparkle badge */}
        <motion.div
          className="absolute -bottom-3 -right-3 z-20 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.1 }}
        >
          <Sparkles className="h-3 w-3" />
          Open to Work
        </motion.div>
      </motion.div>

      {/* === RIGHT: Content === */}
      <div className="flex-1 max-w-2xl space-y-6 text-center md:text-left z-10">

        {/* Greeting pill */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-violet-500/30 bg-violet-500/10 text-violet-400">
            <motion.span
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Hello, World! 👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.div {...fadeUp(0.2)} className="space-y-1">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
            <span className="block text-foreground">Oshadi</span>
            <span
              className="block bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text" }}
            >
              Kawshani
            </span>
          </h1>
        </motion.div>

        {/* Animated role */}
        <motion.div {...fadeUp(0.3)} className="h-8 flex items-center gap-1 justify-center md:justify-start">
          <span className="text-xl md:text-2xl font-semibold text-muted-foreground">
            {typedRole}
          </span>
          <motion.span
            className="inline-block w-0.5 h-6 bg-violet-400 rounded-full ml-0.5"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.div>

        {/* Contact Info */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 text-sm text-muted-foreground justify-center md:justify-start">
          {[
            { icon: <MapPin className="h-4 w-4" />, text: "Matara, Sri Lanka" },
            { icon: <Mail className="h-4 w-4" />, text: "kawshaniweerasekara@gmail.com" },
          ].map(({ icon, text }) => (
            <motion.div
              key={text}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(139,92,246,0.4)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-violet-400">{icon}</span>
              <span>{text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Social + Action Buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 justify-center md:justify-start">
          {/* GitHub */}
          <motion.a
            href="https://github.com/oshadi2002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm font-medium hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github className="h-4 w-4" /> GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/oshadi-kawshani-143737360/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </motion.a>

          {/* View Projects */}
          <motion.button
            className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
            style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)" }}
            onClick={scrollToProjects}
            whileHover={{ scale: 1.06, y: -2, boxShadow: "0 8px 25px rgba(139,92,246,0.45)" }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </motion.button>

          {/* Download CV */}
          <motion.button
            className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold border border-violet-500/40 text-violet-300 bg-violet-500/10 backdrop-blur-sm"
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.06, y: -2, backgroundColor: "rgba(139,92,246,0.2)" }}
            whileTap={{ scale: 0.97 }}
          >
            <AnimatePresence mode="wait">
              {isDownloaded ? (
                <motion.span key="done" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Check className="h-4 w-4 text-green-400" /> Downloaded!
                </motion.span>
              ) : (
                <motion.span key="dl" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Download className={`h-4 w-4 ${isDownloading ? "animate-bounce" : ""}`} />
                  {isDownloading ? "Downloading..." : "Download CV"}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Summary */}
        <motion.div
          {...fadeUp(0.6)}
          className="p-4 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-md"
        >
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            Passionate and detail-oriented{" "}
            <span className="text-violet-400 font-semibold">Information Technology undergraduate</span>{" "}
            pursuing HNDIT at SLIATE Labuduwa. A fast learner with a creative mindset and strong
            problem-solving skills, eager to apply academic knowledge to real-world software
            development challenges and deliver impactful, user-centered digital solutions.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div {...fadeUp(0.7)}>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Core Skills</p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {SKILLS.map((skill, i) => (
              <motion.span
                key={skill}
                custom={i}
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-3 py-1.5 rounded-full text-sm font-medium border border-violet-500/25 bg-violet-500/10 text-violet-300 cursor-default select-none"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-violet-400/60 to-transparent rounded-full"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
