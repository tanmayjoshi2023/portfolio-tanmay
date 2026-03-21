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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all flex flex-col h-full"
            >
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-sm text-secondary-text leading-relaxed">
                      {project.description.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {project.description.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background text-[10px] font-bold text-secondary-text rounded border border-border uppercase tracking-tight"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-6 bg-background/50 border-t border-border flex items-center justify-between">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-secondary-text hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Codebase
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    Live Demo
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
