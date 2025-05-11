
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC²",
    date: "2022",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Offensive Security Certified Professional (OSCP)",
    issuer: "Offensive Security",
    date: "2021",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2020",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Certified Cloud Security Professional (CCSP)",
    issuer: "ISC²",
    date: "2022",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Certified Information Security Manager (CISM)",
    issuer: "ISACA",
    date: "2021",
    image: "/placeholder.svg"
  }
];

const CertificatesSection: React.FC = () => {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  
  const featuredCertificates = certificates.slice(0, 3);
  const allCertificates = certificates;
  
  const toggleShowAll = () => {
    setShowAllCertificates(!showAllCertificates);
  };

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
            <span className="border-b-2 border-cyber-neon pb-1">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications that validate my expertise and commitment to cybersecurity excellence.
          </p>
        </div>

        {/* Featured Certificates Carousel */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center font-orbitron">Featured Certifications</h3>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {featuredCertificates.map((cert) => (
                <CarouselItem key={cert.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="cyber-card flex flex-col h-full overflow-hidden">
                      <div className="relative pt-[56.25%] bg-cyber-darkgray">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img 
                            src={cert.image} 
                            alt={cert.title} 
                            className="w-full h-full object-cover"
                          />
                          <Award className="absolute text-cyber-neon/50 w-16 h-16" />
                        </div>
                      </div>
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                          <h4 className="font-medium mb-1 line-clamp-2">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <p className="text-sm text-cyber-lightblue mt-2">{cert.date}</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Button to toggle all certificates */}
        <div className="flex justify-center mb-8">
          <Button
            variant="outline"
            onClick={toggleShowAll}
            className="border-cyber-silver/50 hover:border-cyber-neon hover:text-cyber-neon"
          >
            {showAllCertificates ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" /> Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" /> View All Certifications
              </>
            )}
          </Button>
        </div>

        {/* All Certificates Grid */}
        {showAllCertificates && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in">
            {allCertificates.map((cert) => (
              <Card key={cert.id} className="cyber-card overflow-hidden">
                <div className="p-4 flex items-start space-x-4">
                  <Award className="text-cyber-neon w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-cyber-lightblue mt-2">{cert.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;
