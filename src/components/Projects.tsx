import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
     {
      title: "Data Validation Tool",
      description: "User-friendly data validation application simplifying data validation across multiple detailed pages.",
      tech: ["Python", "Streamlit", "Pandas"],
      
      github: "https://github.com/bilel-maaloul/data_checker_poject"
    },
     {
      title: "AWS Cloud Chatbot",
      description: "Robust chatbot leveraging AWS services for backend with sleek native React application for engaging frontend experience.",
      tech: ["React Native", "AWS", "Cloud Services"],
      github: "https://github.com/bilel-maaloul/Mobile_App_Chatbot"
    },

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
