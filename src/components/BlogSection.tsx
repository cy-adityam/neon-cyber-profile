
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Rise of Ransomware-as-a-Service and How to Protect Your Organization",
    excerpt: "An in-depth look at the growing RaaS market and essential strategies to safeguard your systems.",
    image: "/placeholder.svg",
    date: "April 15, 2023",
    readTime: "8 min read",
    url: "#"
  },
  {
    id: 2,
    title: "Zero Trust Architecture: Implementation Guide for Modern Enterprises",
    excerpt: "Step-by-step approach to implementing a Zero Trust security model in your organization.",
    image: "/placeholder.svg",
    date: "March 22, 2023",
    readTime: "12 min read",
    url: "#"
  },
  {
    id: 3,
    title: "Securing Cloud Infrastructure: Common Pitfalls and Best Practices",
    excerpt: "Key security considerations when migrating to or operating in cloud environments.",
    image: "/placeholder.svg",
    date: "February 10, 2023",
    readTime: "10 min read",
    url: "#"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
            <span className="border-b-2 border-cyber-neon pb-1">Blog</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and analysis on cybersecurity trends and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="cyber-card overflow-hidden group hover:translate-y-[-5px] transition-all duration-300">
              <div className="relative pt-[56.25%] bg-cyber-darkgray overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-cyber-neon transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="link" 
                  className="p-0 text-cyber-lightblue hover:text-cyber-neon"
                  asChild
                >
                  <a href={post.url}>
                    Read Article <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-cyber-blue hover:bg-cyber-neon text-white font-medium py-2 px-6 rounded-full cyber-glow"
            asChild
          >
            <a href="#">View All Articles</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
