import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background border-t border-border/40 backdrop-blur-xl">
      {/* Decorative glows - smaller & subtler */}
      <div className="absolute -top-10 left-0 w-60 h-60 bg-blue-500/10 blur-2xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 blur-2xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 py-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Oshadi Kawshani
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Software Developer · HNDIT Student
            </p>
          </div>

          {/* Social buttons */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://github.com/oshadi2002"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://www.linkedin.com/in/oshadi-kawshani-143737360/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <a href="mailto:kawshaniweerasekara@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-4 border-t border-border/40 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-foreground">Oshadi Kawshani</span> — All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
