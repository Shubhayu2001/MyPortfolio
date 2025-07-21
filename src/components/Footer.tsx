import { Heart, Github, Linkedin, Mail, Code } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Shubhayu2001',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shubhayu-banik-682967232',
      icon: Linkedin
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/qCJL2UIlP2/',
      icon: Code
    },
    {
      name: 'Email',
      url: 'mailto:shubhayubanik2001@gmail.com',
      icon: Mail
    }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">
              Shubhayu Banik
            </h3>
            <p className="text-muted-foreground">
              Aspiring IT Professional building AI-driven solutions for tomorrow's challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="block text-muted-foreground hover:text-brand-primary transition-colors duration-200 text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-brand-primary/10 rounded-lg transition-all duration-200 hover:scale-110 group"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-brand-primary transition-colors duration-200" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> by Shubhayu Banik
            <span className="mx-2">•</span>
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};