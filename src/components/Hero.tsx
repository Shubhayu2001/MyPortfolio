import { Github, Linkedin, Mail, Code, ArrowDown, Sparkles, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/shubhayu-profile.jpg';

export const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Shubhayu2001',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shubhayu-banik-682967232',
      icon: Linkedin,
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/qCJL2UIlP2/',
      icon: Code,
      color: 'hover:text-orange-500',
      bgColor: 'hover:bg-orange-50 dark:hover:bg-orange-900/20'
    },
    {
      name: 'Email',
      url: 'mailto:shubhayubanik2001@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-50 dark:hover:bg-red-900/20'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-brand-secondary/20 rounded-full blur-xl floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-brand-accent/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 backdrop-blur-sm rounded-full border border-foreground/20 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">Available for opportunities</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg font-medium text-brand-primary uppercase tracking-wider">
                  Welcome to my portfolio
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Hello, I'm{' '}
                  <span className="relative inline-block">
                    <span className="text-gradient">Shubhayu</span>
                    <div className="absolute -inset-1 bg-gradient-accent opacity-20 blur-lg rounded-lg"></div>
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground leading-relaxed">
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-brand-accent" />
                    AI/ML Enthusiast
                  </span>
                  <br />
                  <span className="text-brand-primary">Problem Solver</span>
                </h2>
              </div>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Building AI-driven solutions, one project at a time. Passionate about leveraging 
                <span className="text-brand-primary font-medium"> cutting-edge technology</span> to solve real-world problems.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-gradient-accent text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Let's Connect
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                className="group relative overflow-hidden glass border-2 border-white/30 dark:border-white/20 text-lg px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => window.open('https://github.com/Shubhayu2001', '_blank')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  View Projects
                </span>
              </Button>
              
              <Button 
                variant="ghost" 
                className="group relative overflow-hidden text-lg px-6 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105"
                onClick={scrollToAbout}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Resume
                </span>
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center justify-center w-14 h-14 glass rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${link.bgColor}`}
                  aria-label={link.name}
                >
                  <link.icon className={`w-6 h-6 text-muted-foreground transition-colors duration-200 ${link.color}`} />
                  <span className="absolute top-full mt-2 text-xs opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 text-muted-foreground whitespace-nowrap">
                  {link.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container with Glass Effect */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full glass rounded-3xl p-4 floating">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Shubhayu Banik"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 glass rounded-2xl flex items-center justify-center floating" style={{animationDelay: '0.5s'}}>
                <Code className="w-8 h-8 text-brand-primary" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 glass rounded-2xl flex items-center justify-center floating" style={{animationDelay: '1s'}}>
                <Sparkles className="w-10 h-10 text-brand-accent" />
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 w-full h-full">
                <div className="absolute -top-4 left-1/2 w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-brand-accent rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
                <div className="absolute -bottom-4 left-1/2 w-4 h-4 bg-brand-secondary rounded-full animate-pulse" style={{animationDelay: '1.4s'}}></div>
                <div className="absolute top-1/2 -left-4 w-2 h-2 bg-brand-primary rounded-full animate-pulse" style={{animationDelay: '2.1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToAbout}>
        <div className="flex flex-col items-center space-y-2 group">
          <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
          <div className="w-8 h-12 glass rounded-full flex justify-center items-start pt-2 group-hover:shadow-lg transition-all duration-300">
            <ArrowDown className="w-4 h-4 text-brand-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};