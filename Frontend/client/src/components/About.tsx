import { GraduationCap, Code, FolderGit2 } from "lucide-react";
import { Badge } from "../components/ui/badge";

export default function About() {
  return (
    <section id="about" className="relatipx-6 bg-gradient-to-b from-background via-background to-muted/10 overflow-hidden">
      {/* Subtle floating gradients */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl animate-pulse"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Professional Profile</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              I'm currently pursuing a Higher National Diploma in Information Technology at SLIATE Labuduwa. 
              My passion lies in creating efficient digital solutions that solve real-world problems. 
              With a strong foundation in web development and mobile applications, I'm eager to contribute 
              to innovative projects and grow as a professional developer.
            </p>
            <div className="flex gap-3">
              <Badge variant="secondary" className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                English
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                Sinhala
              </Badge>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6">
            <div className="relative p-6 rounded-3xl bg-background/50 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-2xl transition duration-500">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-20 animate-pulse"></div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className="text-sm text-muted-foreground">HNDIT at SLIATE Galle</p>
                </div>
              </div>
            </div>

            <div className="relative p-6 rounded-3xl bg-background/50 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-2xl transition duration-500">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-20 animate-pulse"></div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-chart-2/10">
                  <FolderGit2 className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Projects Completed</h4>
                  <p className="text-sm text-muted-foreground">3 Major Projects</p>
                </div>
              </div>
            </div>

            <div className="relative p-6 rounded-3xl bg-background/50 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-2xl transition duration-500">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-20 animate-pulse"></div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-chart-3/10">
                  <Code className="h-6 w-6 text-chart-3" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Tech Skills</h4>
                  <p className="text-sm text-muted-foreground">Full-Stack Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
