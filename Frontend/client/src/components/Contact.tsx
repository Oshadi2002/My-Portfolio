import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // EmailJS integration with loading spinner
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_mt65ofk", // 🔹 Your EmailJS service ID
        "template_71p3pw9", // 🔹 Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "1hzg79Lo5qdbfUaQE" // 🔹 Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          console.error("❌ Error sending email:", error);
          alert("Something went wrong. Please try again later.");
          setIsSending(false);
        }
      );
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kawshaniweerasekara@gmail.com", href: "mailto:kawshaniweerasekara@gmail.com" },
    { icon: Phone, label: "Phone", value: "0702398668", href: "tel:0702398668" },
    { icon: MapPin, label: "Location", value: "Ambagaha Koratuwa, Ihala Vitiyala, KaragodaUyangoda, Kamburupitiya, Sri Lanka", href: null },
    { icon: Github, label: "GitHub", value: "github.com/oshadi2002", href: "https://github.com/oshadi2002" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/oshadi-kawshani", href: "https://www.linkedin.com/in/oshadi-kawshani-143737360/" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          I'm currently seeking internship opportunities. Feel free to reach out!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="p-5 rounded-3xl bg-background/50 backdrop-blur-xl border border-border/30 shadow-md hover:shadow-2xl transition duration-500"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary transition-colors"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-2xl bg-background/50 backdrop-blur-xl border border-border/30"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-2xl bg-background/50 backdrop-blur-xl border border-border/30"
              />
              <Textarea
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="resize-none rounded-2xl bg-background/50 backdrop-blur-xl border border-border/30"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl flex items-center justify-center"
              >
                {isSending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Reference */}
        <Card className="mt-16 p-6 rounded-3xl bg-background/50 backdrop-blur-xl border border-border/30 shadow-md hover:shadow-2xl transition duration-500">
          <h3 className="text-xl font-semibold mb-4">Reference</h3>
          <div className="space-y-2">
            <p className="font-medium">Mr Kelum Shrimal Wejesinghe Abeygunawardhana </p>
            <p className="text-muted-foreground">Software Engineer </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
              <a href="tel:0718026983" className="hover:text-primary">
                Phone: 0766620969 
              </a>
              <a href="mailto:priyangika@sliate.ac.lk" className="hover:text-primary">
                Email:infokelumsrimal@gmail.com 
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
