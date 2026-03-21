import { portfolioData } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-secondary-text text-sm">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-8 text-sm font-medium text-secondary-text">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
