import { ExternalLink, Github, FileText } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Projects = () => {
  const projects = [
    {
      title: "An Automated Detection Framework for Electrocardiogram Abnormalities of Heart Disease",
      description: "An AI-driven healthcare solution that analyzes ECG signals to detect cardiac abnormalities using machine learning algorithms. The system provides real-time analysis and generates detailed reports for medical professionals.",
      technologies: ["Python", "Streamlit", "scikit-learn", "joblib", "matplotlib", "NumPy", "Pandas"],
      githubUrl: "https://github.com/Shubhayu2001/An-Automated-Detection-Framework-For-Electrocardiogram-Abnormalities-of-Heart-Disease",
      liveUrl: null,
      type: "AI/ML Project",
      featured: true
    },
    {
      title: "An AI-driven GPT Model for Automated Detection of Heart Disease",
      description: "Published research work focusing on developing a GPT-based model for automated detection of heart disease. This project combines natural language processing with medical data analysis.",
      technologies: ["AI/ML", "GPT Models", "Medical Data Analysis", "Research"],
      githubUrl: null,
      liveUrl: null,
      paperUrl: "https://ieeexplore.ieee.org/document/10962954",
      type: "IEEE Published Paper",
      featured: true
    },
    {
      title: "Climate Impact on Crop Production Analysis",
      description: "A comprehensive data analysis platform that studies the relationship between climate patterns and crop production yields. Features predictive modeling and interactive visualizations.",
      technologies: ["Python", "Flask", "Data Analysis", "Machine Learning", "Visualization"],
      githubUrl: "https://github.com/Shubhayu2001/Climate-Impact-on-Crop-Production",
      liveUrl: null,
      type: "Data Science Project",
      featured: false
    },
    {
      title: "Sentiment Analysis Model",
      description: "SVM-based machine learning model for analyzing sentiment in text data. Includes a web interface built with Flask for real-time sentiment analysis of user inputs.",
      technologies: ["Python", "SVM", "Flask", "NLP", "scikit-learn", "Text Processing"],
      githubUrl: "https://github.com/Shubhayu2001/Sentiment-Analysis-Model",
      liveUrl: null,
      type: "Machine Learning",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in AI/ML, data science, and software development. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105 fade-in ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  {project.featured && (
                    <Badge className="bg-brand-primary text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technologies, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {technologies}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-4 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                )}
                
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                )}

                {project.paperUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.paperUrl, '_blank')}
                  >
                    <FileText className="h-4 w-4" />
                    Research Paper
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Want to see more of my work?
          </h3>
          <p className="text-muted-foreground mb-6">
            Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button
            className="btn-gradient"
            onClick={() => window.open('https://github.com/Shubhayu2001', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};