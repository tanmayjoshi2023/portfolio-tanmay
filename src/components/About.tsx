"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-12 h-1 bg-accent rounded-full mb-6"></div>
            <p className="text-sm text-secondary-text uppercase tracking-[0.2em] font-bold">
              Driven by curiosity, powered by AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 space-y-12"
          >
            <p className="text-xl text-secondary-text leading-relaxed font-light">
              {portfolioData.summary}
            </p>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent" />
                Technical Arsenal
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {portfolioData.skills.map((category, catIndex) => (
                  <motion.div 
                    key={category.name} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (catIndex * 0.1) }}
                    className="space-y-4"
                  >
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">
                      {category.name}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border text-foreground text-xs font-medium rounded-xl hover:border-accent hover:shadow-[0_0_15px_-5px_rgba(59,130,246,0.3)] transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
