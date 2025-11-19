import { GraduationCap, Award, Calendar } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { motion } from "framer-motion";

const education = [
  {
    id: 1,
    degree: "Higher National Diploma in Information Technology",
    institution: "SLIATE Galle",
    location: "Galle, Sri Lanka",
    period: "2023 - Present",
    details: [],
    status: "In Progress",
  },
  {
    id: 2,
    degree: "Advanced Level",
    institution: "MR/Thihagoda National School",
    location: "Matara, Sri Lanka",
    period: "2021",
    details: ["2 (C) passes", "1 (S) passes", " in Technology Stream"],
    status: "Completed",
  },
  {
    id: 3,
    degree: "Ordinary Level",
    institution: "MR/Thihagoda National School",
    location: "Matara, Sri Lanka",
    period: "2017",
    details: ["4 (A) passes", "3 (B) passes", "2 (C) passes"],
    status: "Completed",
  },
];

const certificates = [
  {
    title: "Certificate of English Language",
    institution: "BritishWay English Academy, Matara",
    year: "2025",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      {/* Subtle gradient lighting for modern theme */}
      <div className="absolute -top-32 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Academic Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and milestones that built my technical foundation
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="relative p-6 rounded-3xl bg-background/60 backdrop-blur-xl border border-border/40 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Timeline dot */}
                <div className="absolute -left-4 top-6 p-2 rounded-full bg-background border-2 border-primary shadow-sm">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>

                {/* Degree & Status */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                  <Badge
                    variant={edu.status === "In Progress" ? "default" : "secondary"}
                    className="flex items-center gap-1"
                  >
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </Badge>
                </div>

                <p className="text-primary/90 font-medium">{edu.institution}</p>

                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-1">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.status}</span>
                </div>

                {/* Details */}
                {edu.details.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-3">
                    {edu.details.map((detail, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/20"
                      >
                        {detail}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certificates Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-8 rounded-3xl bg-background/60 backdrop-blur-xl border border-border/40 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Certificates</h3>
            </div>
            <div className="space-y-4">
              {certificates.map((cert, i) => (
                <div key={i}>
                  <p className="font-medium text-lg">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">{cert.institution}</p>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
