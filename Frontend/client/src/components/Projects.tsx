import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, Github, Code, Cpu, Rocket } from "lucide-react";
import { motion } from "framer-motion";

import restaurantImage from '@assets/generated_images/doctor_appoinment.jpeg';
import studentImage from '@assets/generated_images/Student_management_app_mockup_7b7c2c9a.png';
import tourismImage from '@assets/generated_images/weather_app.jpeg';
const projects = [
  {
    id: 1,
    title: "Doctor-Appointment-Web-Application",
    type: "Individual Project",
    description: "A web application for booking doctor appointments, allowing patients to view doctors, check availability, and schedule visits online.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: restaurantImage,
    githubLink: "https://github.com/Oshadi2002/Doctor-Appointment-Web-Application",
    demoLink: "https://yourdemo.com/doctor-appointment-web"
  },
  {
    id: 2,
    title: "Student Management System",
    type: "Group Project",
    description: "Cross-platform Student System using Flutter & Firebase for real-time data, attendance, grades, and reports.",
    technologies: ["Flutter", "Firebase"],
    image: studentImage,
    githubLink: "https://github.com/yourusername/student-management-system",
    demoLink: "https://yourdemo.com/student-management-system"
  },
  {
    id: 3,
    title: "Weather App",
    type: "Individual Project",
    description: "A simple web app that fetches and displays real-time weather data, temperature, and conditions using a public API.",
    technologies: ["React", "Node.js", "CSS", "OpenWeatherMap API"],
    image: tourismImage,
    githubLink: "https://github.com/Oshadi2002/Weather-App",
    demoLink: "https://yourdemo.com/tourism-website"
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const floatingIcons = [Code, Cpu, Rocket];

  const loadMoreProjects = () => setVisibleProjects(projects.length);
  const showLessProjects = () => setVisibleProjects(3);

  return (
    <section
      id="projects"
      className="relative py-16 overflow-hidden bg-gradient-to-b from-background/50 via-muted/20 to-background/80"
    >
      {/* Floating Background Icons */}
      {floatingIcons.map((Icon, i) => (
        <div
          key={i}
          className="absolute text-primary/10"
          style={{
            top: `${10 + i * 35}%`,
            left: `${5 + i * 35}%`,
            fontSize: 64,
          }}
        >
          <Icon />
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            💻 A showcase of my development work, from database systems to web and mobile applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="flex flex-col h-full overflow-hidden rounded-3xl bg-background/50 backdrop-blur-xl border border-border/30 shadow-md hover:shadow-2xl transition duration-500 group">
                {/* Image */}
                <div className="aspect-video overflow-hidden rounded-t-3xl bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <CardHeader className="p-6 flex-grow">
                  <Badge variant="outline" className="mb-3 px-3 py-1 rounded-full text-sm text-primary border border-primary/30">
                    {project.type}
                  </Badge>
                  <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Technologies */}
                <CardContent className="px-6 py-2">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs font-mono bg-primary/10 border border-primary/20 rounded-full px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Buttons */}
                <CardFooter className="px-6 py-4 flex gap-2 flex-wrap">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
                    onClick={() => window.open(project.demoLink, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </CardFooter>

                {/* Gradient accent overlay */}
                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-20 pointer-events-none"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More / Show Less */}
        <div className="text-center mt-12">
          {visibleProjects < projects.length ? (
            <Button
              onClick={loadMoreProjects}
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              More Projects
            </Button>
          ) : (
            <Button
              onClick={showLessProjects}
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
