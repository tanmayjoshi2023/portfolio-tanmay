"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 space-y-8"
          >
            <p className="text-lg text-secondary-text leading-relaxed">
              {portfolioData.summary}
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Skills & Technologies</h3>
              <div className="space-y-4">
                {portfolioData.skills.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <p className="text-xs font-bold text-accent uppercase tracking-wider">
                      {category.name}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-card border border-border text-secondary-text text-sm rounded-md hover:border-accent hover:text-accent transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
