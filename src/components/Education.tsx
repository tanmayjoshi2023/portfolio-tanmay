"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-secondary-text max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </div>

        <div className="grid gap-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${edu.degree}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative flex flex-col sm:flex-row gap-6 p-8 rounded-[2rem] bg-card/40 backdrop-blur-md border border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent/10 rounded-[1.5rem] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div className="flex-grow pt-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-black text-foreground group-hover:text-accent transition-colors mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-accent font-bold text-sm uppercase tracking-wider">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="inline-flex text-[10px] font-black px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full whitespace-nowrap tracking-widest uppercase h-fit">
                    {edu.period}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-background/50 border border-border/30 group-hover:border-accent/20 transition-colors">
                  <p className="text-secondary-text leading-relaxed text-sm font-medium">
                    {edu.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
