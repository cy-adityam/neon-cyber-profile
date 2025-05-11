import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  element: HTMLDivElement;
}

interface Connection {
  element: HTMLDivElement;
}

const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>(0);
  const mousePosition = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize particles
    const createParticles = () => {
      // Clean up existing particles
      particlesRef.current.forEach(particle => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
      
      particlesRef.current = [];
      
      // Calculate number of particles based on screen size
      const particleCount = Math.min(50, Math.floor(window.innerWidth * window.innerHeight / 10000));
      
      for (let i = 0; i < particleCount; i++) {
        const element = document.createElement("div");
        element.className = "particle";
        
        const size = Math.random() * 3 + 1;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.opacity = (Math.random() * 0.5 + 0.3).toString();
        
        const x = Math.random() * container.offsetWidth;
        const y = Math.random() * container.offsetHeight;
        element.style.transform = `translate(${x}px, ${y}px)`;
        
        container.appendChild(element);
        
        particlesRef.current.push({
          x,
          y,
          size,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          element
        });
      }
    };
    
    // Create connections between particles
    const createConnections = () => {
      // Clean up existing connections
      connectionsRef.current.forEach(connection => {
        if (connection.element.parentNode) {
          connection.element.parentNode.removeChild(connection.element);
        }
      });
      
      connectionsRef.current = [];
      
      // Create connection pool
      for (let i = 0; i < 30; i++) {
        const element = document.createElement("div");
        element.className = "connection";
        element.style.opacity = "0"; // Start invisible
        
        container.appendChild(element);
        
        connectionsRef.current.push({
          element
        });
      }
    };

    // Animation function
    const animate = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      
      // Update particle positions
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check and bounce
        if (particle.x <= 0 || particle.x >= width) {
          particle.speedX *= -1;
        }
        
        if (particle.y <= 0 || particle.y >= height) {
          particle.speedY *= -1;
        }
        
        // Keep particles within bounds
        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));
        
        particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
      });
      
      // Update connections
      let connectionIndex = 0;
      
      // Connect particles within range
      for (let i = 0; i < particlesRef.current.length && connectionIndex < connectionsRef.current.length; i++) {
        const particleA = particlesRef.current[i];
        
        // Connect to nearby particles
        for (let j = i + 1; j < particlesRef.current.length && connectionIndex < connectionsRef.current.length; j++) {
          const particleB = particlesRef.current[j];
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Connect particles if they're close enough
          if (distance < 150) {
            const connection = connectionsRef.current[connectionIndex];
            connectionIndex++;
            
            // Calculate connection position and dimensions
            const x1 = particleA.x;
            const y1 = particleA.y;
            const x2 = particleB.x;
            const y2 = particleB.y;
            
            // Calculate angle
            const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
            
            connection.element.style.width = `${distance}px`;
            connection.element.style.left = `${x1}px`;
            connection.element.style.top = `${y1}px`;
            connection.element.style.transform = `rotate(${angle}deg)`;
            connection.element.style.opacity = (0.2 - distance / 150 * 0.2).toString();
          }
        }
        
        // Connect to mouse if hovering
        if (isHovering.current && connectionIndex < connectionsRef.current.length) {
          const dx = particleA.x - mousePosition.current.x;
          const dy = particleA.y - mousePosition.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const connection = connectionsRef.current[connectionIndex];
            connectionIndex++;
            
            // Calculate connection position and dimensions
            const x1 = particleA.x;
            const y1 = particleA.y;
            const x2 = mousePosition.current.x;
            const y2 = mousePosition.current.y;
            
            // Calculate angle
            const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
            
            connection.element.style.width = `${distance}px`;
            connection.element.style.left = `${x1}px`;
            connection.element.style.top = `${y1}px`;
            connection.element.style.transform = `rotate(${angle}deg)`;
            
            // Make connections to mouse more visible
            connection.element.style.opacity = (0.3 - distance / 150 * 0.3).toString();
            connection.element.style.background = "linear-gradient(90deg, rgba(0, 255, 255, 0.1), rgba(0, 255, 255, 0.3))";
          }
        }
      }
      
      // Hide unused connections
      for (let i = connectionIndex; i < connectionsRef.current.length; i++) {
        connectionsRef.current[i].element.style.opacity = "0";
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    
    const handleMouseEnter = () => {
      isHovering.current = true;
    };
    
    const handleMouseLeave = () => {
      isHovering.current = false;
    };
    
    const handleResize = () => {
      createParticles();
      createConnections();
    };
    
    // Set up
    createParticles();
    createConnections();
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Event listeners
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      
      // Remove particles and connections
      particlesRef.current.forEach(particle => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
      
      connectionsRef.current.forEach(connection => {
        if (connection.element.parentNode) {
          connection.element.parentNode.removeChild(connection.element);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
