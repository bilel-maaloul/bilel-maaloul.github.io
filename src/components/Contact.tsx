import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/bilel-maaloul" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/maaloul-bilel-78204222a" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Have a project in mind or want to collaborate? Let's connect!
        </p>
        
        <Card className="p-8 bg-card border-border">
          <div className="text-center space-y-8">
            <div>
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Email Me</h3>
              <a 
                href="mailto:bilelmaaloulmaaloul@gmail.com"
                className="text-primary hover:text-secondary transition-colors text-lg"
              >
                bilelmaaloulmaaloul@gmail.com
              </a>
            </div>
            
            <div className="pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-6">Connect on Social</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="lg"
                    className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                    asChild
                  >
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;