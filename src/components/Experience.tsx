import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, Building, ExternalLink} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {CardFooter} from '@/components/ui/card';


const Experience = () => {
  const internships = [
    {
      company: "Ardent Computech Pvt Ltd.",
      position: "Data Science Artificial Intelligence and Machine Learning using Python Intern",
      duration: "July 2024 - Aug 2024",
      location: "Kolkata",
      description: "Developed an AI/ML model using Python, and make a website using HTML.",
      skills: ["Python", "Flask", "Numpy", "Pandas", "Scikit-learn", "HTML", "CSS", "JavaScript", "Git", "GitHub"],
      certificatesURL: "https://drive.google.com/file/d/1WS9G4VJfnA_hGSwgxSYKot-bAPmUQPk7/view?usp=drive_link"
    },
    {
      company: "Cognifyz Technologies",
      position: "Data Science Intern",
      duration: "May 2025 - Jun 2025",
      location: "Remote",
      description: "Worked on real-time data science tasks, demostrating strong analytical thinking and attention to details.",
      skills: ["Python", "Flask", "Numpy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      certificatesURL: "https://drive.google.com/file/d/1m6nyq4OfxhXbxXwaiDiBd21OvLPGNUsr/view?usp=drive_link"
    }
  ];

  const certificates = [
    {
      title: "Python for Data Science and AI/ML",
      issuer: "Ardent",
      date: "Aug 2024",
      description: "Proficiency in Python data structure and analysis libraries.",
      Url: "https://drive.google.com/file/d/1W4GAB-ze84bQvpGoiK8VkXDL1UiinVMo/view?usp=drive_link"
    },
    {
      title: "SQL and Relational Databases",
      issuer: "IBM",
      date: "Aug 2024",
      description: "Gained practical knowledge in SQL queries, database design, and relational database.",
      Url: "https://drive.google.com/file/d/1oX6H_r6suWCjOR8giK__N0lB2B_-rZ95/view?usp=drive_link"
    },
    {
      title: "ACM UG PROJECT CONTEST 2025",
      issuer: "ACM Kolkata Chapter",
      date: "May 2025",
      description: "Has presented project in the final round of the ACM UG PROJECT contest 2025.",
      Url: "https://drive.google.com/file/d/1oUsLSeXwcOTKDro94EfZ-sOclYeDi6-M/view?usp=drive_link"
    }
  ];



  return (
    <section id="experience" className="py-20 px-4 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-text bg-clip-text text-transparent mb-4">
            Experience & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey through internships and continuous learning
          </p>
        </div>

        <Tabs defaultValue="internships" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 glass">
            <TabsTrigger value="internships" className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              Internships
            </TabsTrigger>
            <TabsTrigger value="certificates" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Certificates
            </TabsTrigger>
          </TabsList>

          <TabsContent value="internships" className="space-y-6">
            <div className="grid gap-6 md:gap-8">
              {internships.map((internship, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 glass border-2">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2 text-foreground">
                          {internship.position}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {internship.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {internship.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {internship.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                    <CardFooter className="pt-4 flex flex-wrap gap-3">
                    {internship.certificatesURL && (
                      <Button variant="outline" size="sm" className="w-fit" onClick={() => window.open(internship.certificatesURL, '_blank')}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificates
                      </Button>
                    )}
                    </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {certificates.map((certificate, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 glass border-2">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1 text-foreground">
                          {certificate.title}
                        </CardTitle>
                        <CardDescription className="font-medium text-primary">
                          {certificate.issuer}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        Issued: {certificate.date}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {certificate.description}
                      </p>
                    </div>
                  </CardContent>
                    <CardFooter className="pt-4 flex flex-wrap gap-3">
                      {certificate.Url && (
                      <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => window.open(certificate.Url, '_blank')}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificates
                      </Button>
                      )}
                    </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;