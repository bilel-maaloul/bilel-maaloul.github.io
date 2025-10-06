import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Data Science",
      skills: ["Deep Learning", "NLP", "Transformers", "TensorFlow", "Python", "Data Science"]
    },
    {
      title: "Development",
      skills: ["React JS", "React Native", "Flask", "SQL", "OOP", "Unity"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Streamlit", "Pandas", "Git", "GPT-4 Vision", "LLaMA 3"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-2xl font-bold text-primary mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <Badge 
                    key={skillIdx}
                    variant="secondary"
                    className="text-base py-2 px-4 bg-card hover:bg-primary/20 hover:border-primary/50 transition-all"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;