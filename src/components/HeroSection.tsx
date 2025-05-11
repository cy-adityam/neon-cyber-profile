
import React from "react";
import TypingEffect from "./TypingEffect";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const roles = [
    "Cybersecurity Officer",
    "Ethical Hacker",
    "Security Analyst",
    "Network Defender",
    "Threat Hunter"
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20 mt-16 md:mt-0 z-10">
        <div className="flex flex-col md:flex-row items-center transform-3d">
          {/* Profile Image */}
          <div 
            className={cn(
              "w-full md:w-2/5 flex justify-center mb-10 md:mb-0",
              "animate-fade-in transform-3d hover-lift"
            )}
          >
            <div className="relative transform-3d" style={{ transform: 'rotateY(5deg)' }}>
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-cyber-neon/50 p-1 transition-all duration-300 hover:border-cyber-neon">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyber-darkgray to-cyber-gray">
                  <img
                    src="/placeholder.svg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-cyber-neon/30 animate-pulse-glow"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-3/5 text-center md:text-left md:pl-10 transform-3d" style={{ transform: 'rotateY(-2deg)' }}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 font-orbitron hover-lift">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue to-cyber-neon">
                JOHN DOE
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-cyber-silver hover-lift">
              I am a{" "}
              <TypingEffect 
                texts={roles} 
                className="inline text-cyber-neon font-semibold"
              />
            </h2>

            <p className="text-muted-foreground mb-8 max-w-lg hover-lift">
              Specialized in protecting digital assets and infrastructure from 
              cyber threats. Expert in penetration testing, vulnerability assessment, 
              and implementing robust security solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 transform-3d">
              <Button 
                className="w-48 bg-cyber-blue hover:bg-cyber-neon text-white font-medium py-2 px-6 rounded-full cyber-glow hover-lift"
                onClick={() => scrollToAbout()}
              >
                Learn More
              </Button>
              <Button 
                variant="outline" 
                className="w-48 border-cyber-silver/50 hover:border-cyber-neon hover:text-cyber-neon hover-lift"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-transparent hover:bg-white/10 hover-lift"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-6 w-6 text-cyber-silver" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
