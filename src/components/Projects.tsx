"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, type Project } from "@/data/content";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedId(expandedId === title ? null : title);
  };

  return (
    <section id="projects" className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-secondary-text max-w-2xl mx-auto">
            A selection of my recent work, focusing on Machine Learning and intelligent systems, with a passion for Full Stack integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {portfolioData.projects.map((project: Project, index) => {
            const isExpanded = expandedId === project.title;
            
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-500 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-accent/5"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-md">
                      Featured
                    </span>
                  </div>
                )}

                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-accent transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 opacity-60">The Challenge</p>
                      <p className="text-sm text-secondary-text leading-relaxed">
                        {project.description.problem}
                      </p>
                    </div>
                    
                    <div className={`p-4 bg-accent/5 rounded-2xl border border-accent/10 group-hover:bg-accent/10 transition-colors duration-500`}>
                      <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2">The Solution</p>
                      <div className="relative">
                        <p className={`text-sm text-foreground leading-relaxed font-medium ${!isExpanded ? "line-clamp-3" : ""}`}>
                          {project.description.solution}
                        </p>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              {/* Extra space or content if needed, but line-clamp-none handles it */}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <button 
                          onClick={() => toggleExpand(project.title)}
                          className="mt-4 flex items-center gap-1.5 text-xs font-bold text-accent hover:opacity-70 transition-opacity"
                        >
                          {isExpanded ? (
                            <>Show Less <ChevronUp size={14} /></>
                          ) : (
                            <>Read More <ChevronDown size={14} /></>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-secondary/30 text-[9px] font-bold text-secondary-text rounded-lg border border-border/50 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-8 py-6 bg-secondary/10 dark:bg-accent/5 border-t border-border/30 flex items-center gap-6">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-secondary-text hover:text-accent transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-accent hover:opacity-80 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      Live Preview
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
