
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-orbitron font-bold text-foreground">
              <span className="text-cyber-neon">&lt;</span>CYBER<span className="text-cyber-neon">&gt;</span>
            </span>
            <p className="text-muted-foreground mt-2">
              Securing the digital landscape, one byte at a time.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyber-neon transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyber-neon transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-muted-foreground hover:text-cyber-neon transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
