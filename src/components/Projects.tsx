import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Document Analysis Tool",
      description: "Full-stack AI-powered tool extracting and analyzing KPIs from charts and tables across PPTX, Excel, and images using GPT-4 Vision.",
      tech: ["React", "Tailwind CSS", "Flask", "GPT-4 Vision"],
      link: "#",
      github: "#"
    },
    {
      title: "3D Medical Chatbot",
      description: "Unity-based 3D human body model with local chatbot using LLaMA 3 and advanced RAG techniques including Graph RAG.",
      tech: ["Unity", "LLaMA 3", "RAG", "Python"],
      link: "#",
      github: "#"
    },
    {
      title: "AWS Cloud Chatbot",
      description: "Robust chatbot leveraging AWS services for backend with sleek native React application for engaging frontend experience.",
      tech: ["React Native", "AWS", "Cloud Services"],
      link: "#",
      github: "#"
    },
    {
      title: "Data Validation Tool",
      description: "User-friendly data validation application simplifying data validation across multiple detailed pages.",
      tech: ["Python", "Streamlit", "Pandas"],
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
        
        <div className="grid md:grid-cols-2 gap-8">
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