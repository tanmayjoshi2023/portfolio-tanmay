"use client";

import { motion } from "framer-motion";
import { portfolioData, type Project } from "@/data/content";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-secondary-text max-w-2xl mx-auto">
            A selection of my recent work, focusing on ML, NLP, and Full Stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project: Project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-accent/5"
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
                
                <div className="space-y-6 mb-8">
                  <div className="relative overflow-hidden">
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 opacity-60">The Challenge</p>
                    <p className="text-sm text-secondary-text leading-relaxed">
                      {project.description.problem}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-accent/5 rounded-2xl border border-accent/10 group-hover:bg-accent/10 transition-colors duration-500">
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2">The Solution</p>
                    <p className="text-sm text-foreground leading-relaxed font-medium">
                      {project.description.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    </section>
  );
}
