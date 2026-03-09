// src/components/WorkExperience.tsx
import { Card } from "../components/ui/card";
import { Briefcase, Calendar, MapPin, Sparkles, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "NAITA - National Apprentice and Industrial Training Authority",
    duration: "Sep 2025 - Mar 2026",
    description: "Worked on React-based web applications, improving Fullstack and optimizing performance.",
    location: "Colombo, Sri Lanka",
    tags: ["React", "Fullstack", "Performance"],
    color: "from-blue-500 to-cyan-500",
  },

];

export default function WorkExperience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section header with creative typography */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-primary/10 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences and solving real-world problems
          </p>
        </div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-primary z-10"></div>

              {/* Content card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <Card className="group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Card content */}
                  <div className="relative p-8">
                    {/* Header with icon and role */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold text-primary mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Details grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{exp.location || "Sri Lanka"}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white border border-white/20`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Learn more link */}
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300 group/link"
                    >
                      View achievements
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full blur-xl opacity-20`}></div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 group"
          >
            Let's work together
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}