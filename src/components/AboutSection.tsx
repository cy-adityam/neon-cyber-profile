
import React from "react";
import { Shield, Code, Lock, Server } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, className }) => (
  <Card className={cn("cyber-card p-6", className)}>
    <div className="mb-4 text-cyber-neon">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </Card>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
            <span className="border-b-2 border-cyber-neon pb-1">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over 8 years of experience in cybersecurity, I specialize in protecting
            digital infrastructure and securing networks against advanced threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 font-orbitron">Who I Am</h3>
            <p className="text-muted-foreground">
              I'm a cybersecurity professional dedicated to keeping organizations safe from
              digital threats. With a background in computer science and specialized training
              in ethical hacking, I've helped numerous companies identify vulnerabilities and
              strengthen their security posture.
            </p>
            <p className="text-muted-foreground">
              My approach combines technical expertise with a deep understanding of threat 
              actor behaviors, enabling me to anticipate potential attack vectors and implement
              proactive defenses.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 font-orbitron">My Expertise</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyber-neon rounded-full mr-2"></div>
                <span>Penetration Testing & Vulnerability Assessment</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyber-neon rounded-full mr-2"></div>
                <span>Network Security Architecture</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyber-neon rounded-full mr-2"></div>
                <span>SIEM Implementation & Management</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyber-neon rounded-full mr-2"></div>
                <span>Incident Response & Forensic Analysis</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyber-neon rounded-full mr-2"></div>
                <span>Security Awareness Training</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyber-neon rounded-full mr-2"></div>
                <span>Cloud Security & DevSecOps</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            icon={<Shield size={36} />}
            title="Security Assessment"
            description="Comprehensive vulnerability scanning and penetration testing to identify weaknesses in your systems."
          />
          <SkillCard
            icon={<Code size={36} />}
            title="Secure Coding"
            description="Implement secure coding practices and review code to eliminate security flaws."
            className="sm:translate-y-4"
          />
          <SkillCard
            icon={<Lock size={36} />}
            title="Data Protection"
            description="Implement encryption and access controls to safeguard sensitive information."
          />
          <SkillCard
            icon={<Server size={36} />}
            title="Network Defense"
            description="Design and implement robust network security architecture to prevent unauthorized access."
            className="sm:translate-y-4"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
