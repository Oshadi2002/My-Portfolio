import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// ─── Data ──────────────────────────────────────────────────────────────────
const education = [
  {
    id: 1,
    degree: "Higher National Diploma in Information Technology",
    short: "HNDIT",
    institution: "SLIATE Labuduwa",
    location: "Galle, Sri Lanka",
    period: "2023 – Present",
    details: [],
    status: "In Progress",
    gradient: "from-violet-500 to-indigo-500",
    accentColor: "#7c3aed",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "Advanced Level",
    short: "G.C.E A/L",
    institution: "MR/Thihagoda National School",
    location: "Matara, Sri Lanka",
    period: "2021",
    details: ["2 (C) passes", "1 (S) pass", "Technology Stream"],
    status: "Completed",
    gradient: "from-pink-500 to-rose-500",
    accentColor: "#ec4899",
    icon: "📚",
  },
  {
    id: 3,
    degree: "Ordinary Level",
    short: "G.C.E O/L",
    institution: "MR/Thihagoda National School",
    location: "Matara, Sri Lanka",
    period: "2017",
    details: ["4 (A) passes", "3 (B) passes", "2 (C) passes"],
    status: "Completed",
    gradient: "from-blue-500 to-cyan-500",
    accentColor: "#3b82f6",
    icon: "🏫",
  },
];

const certificates = [
  {
    title: "Certificate of English Language",
    institution: "BritishWay English Academy",
    location: "Matara, Sri Lanka",
    year: "2025",
    icon: "🌐",
    gradient: "from-emerald-500 to-teal-500",
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

// ─── Education Card ────────────────────────────────────────────────────────
function EduCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  const isInProgress = edu.status === "In Progress";

  return (
    <motion.div
      {...fadeUp(index * 0.12)}
      whileHover={{ y: -4 }}
      className="relative group"
    >
      {/* Left accent line */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${edu.gradient} opacity-80`}
      />

      <div
        className="relative ml-5 p-6 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 group-hover:border-white/20"
        style={{
          boxShadow: `0 0 0 0 ${edu.accentColor}00`,
          transition: "box-shadow 0.4s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = `0 8px 40px -12px ${edu.accentColor}50`)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = `0 0 0 0 ${edu.accentColor}00`)
        }
      >
        {/* Dot connector */}
        <div
          className={`absolute -left-[26px] top-6 w-4 h-4 rounded-full bg-gradient-to-br ${edu.gradient} shadow-lg ring-2 ring-background`}
        />

        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Emoji icon */}
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${edu.gradient} shadow-lg`}
          >
            {edu.icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Top row */}
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${edu.gradient} text-white`}
              >
                {edu.short}
              </span>

              {isInProgress ? (
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-amber-500/40 bg-amber-500/10 text-amber-400">
                  <Clock className="h-3 w-3" />
                  In Progress
                </span>
              ) : (
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" />
                  Completed
                </span>
              )}
            </div>

            {/* Degree */}
            <h3 className="text-lg font-bold text-foreground leading-snug mb-1">
              {edu.degree}
            </h3>

            {/* Institution */}
            <p className={`text-sm font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-2`}>
              {edu.institution}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {edu.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {edu.period}
              </span>
            </div>

            {/* Result badges */}
            {edu.details.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {edu.details.map((d, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-muted-foreground"
                  >
                    {d}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Certificate Card ──────────────────────────────────────────────────────
function CertCard({ cert, index }: { cert: typeof certificates[0]; index: number }) {
  return (
    <motion.div
      {...fadeUp(index * 0.1)}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative p-5 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 transition-all duration-400 flex items-start gap-4 group"
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-400`}
      />

      {/* Icon */}
      <div
        className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${cert.gradient} shadow-lg`}
      >
        {cert.icon}
      </div>

      <div>
        <p className="font-bold text-foreground text-sm">{cert.title}</p>
        <p className={`text-xs font-medium bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent mt-0.5`}>
          {cert.institution}
        </p>
        <div className="flex gap-3 mt-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{cert.location}</span>
          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{cert.year}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────
export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(240 10% 6%) 50%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #ec4899, transparent)" }}
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div className="text-center mb-16" {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-violet-500/30 bg-violet-500/10 text-violet-400 mb-5">
            <Sparkles className="h-4 w-4" />
            Academic Journey
          </span>

          <h2 className="text-5xl md:text-7xl font-black mb-4 leading-none">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Academic milestones and qualifications that shaped my technical foundation
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-pink-500/30 to-transparent rounded-full" />

          <div className="space-y-6">
            {education.map((edu, index) => (
              <EduCard key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>

        {/* ── Certificates ── */}
        <motion.div className="mt-16" {...fadeUp(0.4)}>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <Award className="h-4 w-4" />
              Certifications
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {certificates.map((cert, i) => (
              <CertCard key={i} cert={cert} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          className="mt-14 grid grid-cols-3 gap-4"
          {...fadeUp(0.5)}
        >
          {[
            { label: "Years Studying", value: "6+", icon: <BookOpen className="h-5 w-5" /> },
            { label: "Qualifications", value: "3", icon: <GraduationCap className="h-5 w-5" /> },
            { label: "Certificates", value: "1+", icon: <Award className="h-5 w-5" /> },
          ].map(({ label, value, icon }) => (
            <motion.div
              key={label}
              whileHover={{ y: -4, scale: 1.04 }}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300 text-center"
            >
              <span className="text-violet-400">{icon}</span>
              <span className="text-3xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                {value}
              </span>
              <span className="text-xs text-muted-foreground font-medium">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
