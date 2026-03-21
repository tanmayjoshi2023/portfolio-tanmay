"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {portfolioData.profileImage && (
            <div className="mb-12 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-accent/10 p-3 bg-gradient-to-tr from-accent/20 to-transparent shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] dark:shadow-[0_0_80px_-20px_rgba(59,130,246,0.4)]"
              >
                <div className="w-full h-full rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-white/20 dark:border-white/5">
                  <img
                    src={portfolioData.profileImage}
                    alt={portfolioData.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(portfolioData.name)}&background=2563EB&color=fff&size=512`;
                    }}
                  />
                </div>
              </motion.div>
            </div>
          )}
          <h2 className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
            Available for opportunities
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            I'm {portfolioData.name}
          </h1>
          <p className="text-xl md:text-2xl text-secondary-text mb-10 max-w-2xl mx-auto leading-relaxed">
            {portfolioData.role}. {portfolioData.summary.split(".")[0]}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-all flex items-center gap-2 group shadow-lg shadow-accent/20"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={portfolioData.cvUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-card text-foreground border border-border rounded-full font-medium hover:bg-border transition-all flex items-center gap-2"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
