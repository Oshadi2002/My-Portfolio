// src/components/WorkExperience.tsx
import { Card } from "../components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "NAITA - National Apprentice and Industrial Training Authority",
    duration: "Sep 2025 - Mar 2026",
    description: "Worked on React-based web applications, improving Fullstack and optimizing performance.",
  },
 /* {
    role: "IT Support Assistant",
    company: "SLIATE Labuduwa",
    duration: "Jul 2024 - Dec 2024",
    description: "Provided IT support, maintained systems, and assisted with software deployment.",
  },*/
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="relative p-6 rounded-3xl bg-background/50 backdrop-blur-xl border border-gradient-to-tr border-blue-400/20 shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-500"
            >
              {/* Optional icon */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
              </div>

              <p className="text-primary/90 font-medium mb-2">{exp.company} · {exp.duration}</p>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
