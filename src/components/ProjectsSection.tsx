
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Network Vulnerability Scanner",
    description: "An automated tool that detects security vulnerabilities in network infrastructure and provides remediation recommendations.",
    image: "/placeholder.svg",
    tags: ["Python", "Network Security", "Automation"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Secure Auth System",
    description: "A multi-factor authentication system with biometric verification and anomaly detection for suspicious login attempts.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "Biometrics"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Threat Intelligence Dashboard",
    description: "Real-time dashboard for monitoring and analyzing cyber threats across an organization's infrastructure.",
    image: "/placeholder.svg",
    tags: ["Data Visualization", "React", "API Integration"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Encrypted Messaging App",
    description: "End-to-end encrypted messaging application with secure file sharing and ephemeral messages.",
    image: "/placeholder.svg",
    tags: ["Encryption", "React Native", "Firebase"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
            <span className="border-b-2 border-cyber-neon pb-1">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my cybersecurity projects, tools, and applications developed to enhance digital security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="cyber-card overflow-hidden group">
              <div className="relative pt-[56.25%] bg-cyber-darkgray overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-cyber-darkgray/80 backdrop-blur-sm text-cyber-silver rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyber-neon transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-cyber-silver/30 hover:border-cyber-neon hover:text-cyber-neon"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="mr-1 h-4 w-4" /> Demo
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-cyber-silver/30 hover:border-cyber-neon hover:text-cyber-neon"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" /> Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
