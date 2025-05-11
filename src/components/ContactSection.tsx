
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted");
    // For a real implementation, you would integrate with a form service
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
            <span className="border-b-2 border-cyber-neon pb-1">Contact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 font-orbitron">Get In Touch</h3>
            
            <p className="text-muted-foreground mb-8">
              Whether you're interested in my services, have a project in mind, or just want to connect,
              I'd love to hear from you. Fill out the form or reach me through my social channels.
            </p>
            
            <div className="flex flex-col space-y-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 neo-box rounded-lg cyber-glow group hover:border-cyber-neon/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-cyber-darkgray flex items-center justify-center mr-4 group-hover:bg-cyber-gray transition-colors">
                  <Github className="w-5 h-5 text-cyber-neon" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-sm text-muted-foreground">@cybersecurity-expert</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 neo-box rounded-lg cyber-glow group hover:border-cyber-neon/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-cyber-darkgray flex items-center justify-center mr-4 group-hover:bg-cyber-gray transition-colors">
                  <Linkedin className="w-5 h-5 text-cyber-neon" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-sm text-muted-foreground">in/john-doe-cyber</p>
                </div>
              </a>
              
              <a 
                href="mailto:contact@example.com" 
                className="flex items-center p-4 neo-box rounded-lg cyber-glow group hover:border-cyber-neon/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-cyber-darkgray flex items-center justify-center mr-4 group-hover:bg-cyber-gray transition-colors">
                  <Mail className="w-5 h-5 text-cyber-neon" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm text-muted-foreground">contact@example.com</p>
                </div>
              </a>
            </div>
          </div>
          
          <Card className="lg:col-span-3 cyber-card p-6">
            <h3 className="text-xl font-semibold mb-6 font-orbitron">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="cyber-input"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="cyber-input"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  className="cyber-input"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={5}
                  className="cyber-input resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-cyber-blue hover:bg-cyber-neon text-white font-medium py-2 px-6 rounded-full cyber-glow"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
