import { useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadCV = () => {
    setIsDownloading(true);

    // Force download without preview
    const link = document.createElement("a");
    link.href = "/attached_assets/W.A.O.K.Rathna.pdf"; // public folder path
    link.download = "W.A.O.K.Rathna_CV.pdf"; // saved file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
    }, 1200);

    setTimeout(() => setIsDownloaded(false), 3000);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 py-24 bg-gradient-to-b from-background via-background to-muted/10 overflow-hidden gap-8"
    >
      {/* Profile Image */}
      <div className="flex-shrink-0 relative w-64 h-64 md:w-80 md:h-80 group">
        <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl transform group-hover:scale-105 transition duration-500">
          <img
            src="dist/assets/pic1.jpeg"
            alt="Oshadi Kawshani"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      {/* Right Side Content */}
      <div className="flex-1 max-w-2xl space-y-6 text-center md:text-left">
        {/* Name + Title */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            Oshadi Kawshani
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Software Developer
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-6 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Matara, Sri Lanka</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span>kawshaniweerasekara@gmail.com</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="group border-border hover:bg-primary hover:text-white transition-all duration-300 rounded-full"
          >
            <a
              href="https://github.com/oshadi2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </Button>

          <Button
            variant="outline"
            size="sm"
            asChild
            className="group border-border hover:bg-primary hover:text-white transition-all duration-300 rounded-full"
          >
            <a
              href="https://www.linkedin.com/in/oshadi-kawshani-143737360/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 rounded-full flex items-center gap-2 justify-center"
            onClick={scrollToProjects}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleDownloadCV}
            className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full flex items-center justify-center gap-2"
          >
            {isDownloaded ? (
              <>
                <Check className="h-4 w-4 text-green-500 animate-bounce" />
                Downloaded
              </>
            ) : (
              <>
                <Download
                  className={`h-4 w-4 ${isDownloading ? "animate-spin" : ""}`}
                />
                {isDownloading ? "Downloading..." : "Download CV"}
              </>
            )}
          </Button>
        </div>

        {/* Summary */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-foreground">
            Professional Summary
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed mt-2">
            Passionate and detail-oriented <b>Information Technology undergraduate</b> pursuing HNDIT at SLIATE Labuduwa. 
            A fast learner with a creative mindset and strong problem-solving skills, eager to apply academic knowledge 
            to real-world software development challenges and deliver impactful, user-centered digital solutions.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-foreground mb-2">Core Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML/CSS",
              "JavaScript",
              "PHP",
              "MySQL",
              "React",
              "Flutter",
              "Firebase",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all rounded-full"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
