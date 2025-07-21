import { GraduationCap, Calendar, MapPin, ExternalLink} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const About = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Government College of Engineering and Textile Technology, Serampore",
      period: "2022-2025",
      grade: "CGPA: 8.18",
      status: "Current"
    },
    {
      degree: "Diploma in Electronics & Telecommunication Engineering",
      institution: "Central Calcutta Polytechnic, Kolkata",
      period: "2019-2022",
      grade: "83.8%",
      status: "Completed"
    },
    {
      degree: "Higher Secondary",
      institution: "Ballygunge Government High School, Kolkata",
      period: "2017-2019",
      grade: "66.6%",
      status: "Completed"
    },
    {
      degree: "Madhyamik",
      institution: "Sarat Chandra Sur Institution, Kolkata",
      period: "2017",
      grade: "84.14%",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology and innovation, I'm dedicated to creating meaningful solutions through code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am currently pursuing B.Tech in Information Technology with strong programming, 
                web development, and problem-solving skills. I demonstrate proficiency in data 
                structures, object-oriented design, SQL, Python, and maintain a proactive approach 
                to learning emerging technologies.
              </p>
              <p>
                My passion lies in artificial intelligence and machine learning, where I've worked 
                on projects ranging from healthcare applications to environmental analysis. I believe 
                in the power of technology to solve real-world problems and make a positive impact 
                on society.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and staying updated with the latest trends in AI/ML and software development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Kolkata, India
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                Available for opportunities
              </div>
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => window.open('https://drive.google.com/drive/folders/1e1QfmfOsAeDxgEy7CFX6DKRKHcnJwks8?usp=drive_link', '_blank')}>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Resume
            </Button>
          </div>

          {/* Education */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center text-xs">
                        <GraduationCap className="h-4 w-4 mr-1 text-brand-primary" />
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-brand-primary/10 text-brand-primary' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{edu.period}</span>
                      <span className="font-medium text-brand-primary">{edu.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};