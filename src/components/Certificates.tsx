"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/content";
import { X, ExternalLink, Award } from "lucide-react";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof portfolioData.certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-secondary-text max-w-2xl mx-auto">
            Professional certifications and courses achieved in Gen AI, LLMs, and Computational Theory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-[2rem] overflow-hidden hover:border-accent/40 transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-accent/5"
            >
              <div className="aspect-[4/3] bg-muted/20 relative overflow-hidden flex items-center justify-center p-4">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner bg-background/50">
                  <img 
                      src={cert.imageUrl} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cert.title)}&background=2563EB&color=fff&size=512`;
                      }}
                  />
                </div>
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award className="w-4 h-4 text-accent" />
                  </div>
                </div>
                <h3 className="text-sm font-black text-foreground mb-3 line-clamp-2 min-h-[2.5rem] leading-snug group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-border/30 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-secondary-text uppercase tracking-widest leading-none">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] text-accent font-black">
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Preview */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card border border-border max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{selectedCert.title}</h3>
                    <p className="text-sm text-secondary-text">{selectedCert.issuer}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 hover:bg-border rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="aspect-video bg-background flex items-center justify-center p-4">
                  <div className="w-full h-full border-4 border-accent/20 rounded-lg flex items-center justify-center relative overflow-hidden bg-white/5">
                    <img 
                      src={selectedCert.imageUrl} 
                      alt={selectedCert.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLDivElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'text-center p-8';
                            placeholder.innerHTML = `
                                <div class="w-16 h-16 text-accent/20 mx-auto mb-4"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15l-3-3m3 3l3-3m-3 3V9M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></div>
                                <p class="text-secondary-text text-sm">Certificate Image Preview</p>
                                <p class="text-[10px] text-secondary-text/50 mt-2 uppercase tracking-widest">${selectedCert.date}</p>
                            `;
                            parent.appendChild(placeholder);
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
