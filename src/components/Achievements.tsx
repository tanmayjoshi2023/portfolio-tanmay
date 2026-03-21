"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Achievements</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-6"></div>
        </div>

        <div className="grid gap-6">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative flex gap-6 p-8 rounded-[2rem] bg-card/40 backdrop-blur-md border border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                {index !== portfolioData.achievements.length - 1 && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-accent/20 to-transparent" />
                )}
              </div>
              <div className="flex-grow pt-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-black text-foreground group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <span className="inline-flex text-[10px] font-black px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full whitespace-nowrap tracking-widest uppercase">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-secondary-text leading-relaxed text-sm font-medium">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
