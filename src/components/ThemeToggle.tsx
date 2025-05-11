
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if dark mode is stored in localStorage
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return savedTheme === "dark" || (!savedTheme && prefersDark);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full bg-transparent border-cyber-silver/30 hover:border-cyber-neon/70 w-9 h-9"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-yellow-200" />
      ) : (
        <Moon className="h-5 w-5 text-cyber-blue" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
