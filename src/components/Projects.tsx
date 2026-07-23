import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "LangGraph Multi-Tool AI Agent",
      description:
        "A multi-tool AI agent with LLM intent routing, real-time web search, safe calculations, translation, chat memory, and a modern web interface.",
      tech: [
        "Python",
        "LangGraph",
        "LangChain",
        "OpenAI",
        "Flask",
        "SerpAPI",
      ],
      github:
        "https://github.com/bilel-maaloul/langgraph-multi-tool-agent",
    },
    {
      title: "KPI Analysis Agent",
      description:
        "An AI-powered KPI analysis assistant that processes business metrics and answers analytical questions using natural language.",
      tech: ["Python", "LangChain", "OpenAI", "Pandas", "Streamlit"],
      github: "https://github.com/bilel-maaloul/Kpi_Agent",
    },
    {
      title: "RAG Policy Q&A System",
      description:
        "A retrieval-augmented policy question-answering system with document retrieval, citations, refusal detection, batch evaluation, and a web dashboard.",
      tech: ["Python", "RAG", "OpenAI", "Flask", "Tailwind CSS"],
      github: "https://github.com/bilel-maaloul/rag-policy-qa",
    },
    {
      title: "Disaster Roof Detection",
      description:
        "A YOLOv8-based computer vision system that identifies roof types from aerial imagery to support disaster-response planning in rural Malawi.",
      tech: ["Python", "YOLOv8", "Computer Vision", "Jupyter"],
      github:
        "https://github.com/bilel-maaloul/disaster-roof-detection",
    },
    {
      title: "AWS Banking Chatbot",
      description:
        "A mobile banking chatbot designed to provide users with information about BIAT banking services through a React Native application and AWS cloud services.",
      tech: ["React Native", "Expo", "AWS", "AWS Amplify"],
      github: "https://github.com/bilel-maaloul/Mobile_App_Chatbot",
    },
    {
      title: "Brain Tumor Classification",
      description:
        "A deep-learning image classification project developed for a private Kaggle competition to classify brain tumor images.",
      tech: ["Python", "Deep Learning", "Computer Vision", "Jupyter"],
      github:
        "https://github.com/bilel-maaloul/brain-tumor-classification-",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.github}
              className="group flex h-full flex-col border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--glow-primary)]"
            >
              <CardHeader>
                <CardTitle className="text-xl">
                  {project.title}
                </CardTitle>

                <CardDescription className="leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto">
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group/code"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
