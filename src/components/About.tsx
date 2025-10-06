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
            <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
            <p className="text-muted-foreground">
              Building intelligent systems with deep learning, NLP, and transformers for real-world applications.
            </p>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[var(--glow-primary)]">
            <Palette className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Full-Stack Development</h3>
            <p className="text-muted-foreground">
              Creating end-to-end solutions with React, Python, and cloud technologies.
            </p>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[var(--glow-primary)]">
            <Rocket className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Hackathon Champion</h3>
            <p className="text-muted-foreground">
              Multiple award winner in AI hackathons, demonstrating creativity and technical excellence.
            </p>
          </Card>
        </div>
        
        <div className="prose prose-invert mx-auto text-center max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Currently pursuing a Computer Engineering degree at Institut Supérieur des Arts Multimédia de la Manouba,
            with a background in Business Intelligence from IHEC CARTHAGE. Active participant in hackathons with
            multiple top placements, including second place finishes at AI hackathons.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I've worked on cutting-edge AI projects including GPT-4 Vision integrations, RAG systems with LLaMA 3,
            and cloud-based chatbots. As a former Data Science Instructor at GoMyCode, I'm passionate about sharing
            knowledge and helping others grow in their tech journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;