import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience"; // New
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" }, // New
    { id: "experience", label: "Work Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text tracking-wide select-none">
            W.A.O.Kawshani
          </h1>

          <nav className="hidden md:flex items-center space-x-8 relative">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative pb-1 transition-all duration-300 hover:text-primary ${
                  activeSection === item.id ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-primary rounded-full transition-all duration-300"></span>
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-accent/30 transition"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-md animate-slideDown">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`transition-all hover:text-primary ${
                    activeSection === item.id ? "text-primary font-medium" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-50 md:pt-114 scroll-smooth">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><WorkExperience /></section> {/* New Section */}
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}
