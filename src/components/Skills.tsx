import { Code, Database, Brain, Globe, Server, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 60 },
        { name: "C", level: 50 },
        { name: "Java", level: 50 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "NumPy", level: 80 },
        { name: "Pandas", level: 80 },
        { name: "scikit-learn", level: 75 },
        { name: "Matplotlib", level: 80 },
        { name: "Seaborn", level: 70 }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "Flask", level: 65 },
        { name: "Streamlit", level: 50 },
        { name: "HTML/CSS", level: 70 },
        { name: "React", level: 70 },
        { name: "REST APIs", level: 65 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "Git", level: 70 },
        { name: "Google Colab", level: 85 },
        { name: "VsCode", level: 90 }
      ]
    },
    {
      title: "Core Concepts",
      icon: Cpu,
      skills: [
        { name: "Data Structures", level: 75 },
        { name: "OOP", level: 80 },
        { name: "Algorithms", level: 70 },
        { name: "Computer Networks", level: 75 },
        { name: "System Design", level: 70 }
      ]
    }
  ];

  const technologies = [
    "Python", "JavaScript", "Flask", "Streamlit", "NumPy", "Pandas", 
    "scikit-learn", "MySQL", "Git", "Linux", "Machine Learning", 
    "Data Analysis", "REST APIs", "Object-Oriented Programming", "Seaborn",
    "HTML", "React", "Data Structures", "Kotlin", "Java", "google Colab", "VsCode", "Power BI"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in software development and AI/ML.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 fade-in">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-brand-primary/10 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-muted hover:bg-brand-primary/10 hover:text-brand-primary transition-colors duration-200 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};