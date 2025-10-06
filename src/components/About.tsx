import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[var(--glow-primary)]">
            <Code2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Clean Code</h3>
            <p className="text-muted-foreground">
              Writing maintainable, scalable code with best practices and modern patterns.
            </p>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[var(--glow-primary)]">
            <Palette className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Design Focus</h3>
            <p className="text-muted-foreground">
              Creating intuitive, beautiful interfaces that users love to interact with.
            </p>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[var(--glow-primary)]">
            <Rocket className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Efficiently transforming ideas into production-ready applications.
            </p>
          </Card>
        </div>
        
        <div className="prose prose-invert mx-auto text-center max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate developer with experience in building full-stack web applications.
            My journey in tech has led me to work with various modern technologies and frameworks,
            always striving to create solutions that are both powerful and elegant. When I'm not coding,
            you'll find me exploring new technologies, contributing to open source, or sharing knowledge
            with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;