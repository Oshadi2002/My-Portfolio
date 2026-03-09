import { GraduationCap, Code, FolderGit2 } from "lucide-react";
import { Badge } from "../components/ui/badge";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

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
