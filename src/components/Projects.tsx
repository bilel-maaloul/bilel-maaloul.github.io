import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online store with payment integration, inventory management, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team features.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#",
      github: "#"
    },
    {
      title: "AI Content Generator",
      description: "Content creation tool powered by AI for generating articles, social media posts, and more.",
      tech: ["Next.js", "OpenAI API", "TypeScript"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card 
              key={idx}
              className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-[var(--glow-primary)] group"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;