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

        <div className="space-y-8">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground">{achievement.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-background rounded border border-border text-secondary-text">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-secondary-text leading-relaxed">
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
