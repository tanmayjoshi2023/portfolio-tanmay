"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/content";

type Message = {
  role: "user" | "bot";
  content: string;
};

const QUICK_QUESTIONS = [
  "Tell me about TrendPulse.",
  "How does your Deadlock Detection work?",
  "What is your primary expertise?",
  "Tell me about your IVR Analytics project.",
  "How can I hire you?",
];

export const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: `Hi there! 👋 I'm Tanmay's digital twin. I know everything about his career, projects, and skills. What would you like to know?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI "thinking"
    setTimeout(() => {
      const response = generateResponse(content);
      const botMessage: Message = { role: "bot", content: response };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();

    // 1. Specific Project Deep Dives (Highest Priority)
    if (q.includes("trendpulse") || q.includes("trend") || q.includes("pulse")) {
      return `**TrendPulse** is a real-time data visualization platform, much like Google Insights! 📈\n\nIt tracks worldwide trending searches and provides interactive charts to compare popularity across regions.\n\n• **Core Tech**: React, Next.js, and Recharts.\n• **Key Feature**: Dynamic regional filtering and real-time data updates.`;
    }

    if (q.includes("deadlock") || q.includes("operating system") || q.includes("detect")) {
      return `The **Computer Deadlock Detection System** is an OS-level simulation tool. 🛡️\n\nIt implements the **Banker's Algorithm** and **Wait-for-Graph analysis** to identify and resolve resource deadlocks visually.\n\n• **Tech**: Python & OS Simulation Logic.\n• **Impact**: Helps students and developers visualize process state management and resource allocation.`;
    }

    if (q.includes("ivr") || q.includes("call") || q.includes("transcript")) {
      return `The **IVR Call Transcript and Analytical System** is one of Tanmay's most advanced projects! 📞\n\nHe built an NLP pipeline to convert transcripts into actionable insights using **BERT, spaCy, and NLTK**.\n\n• **Dashboard**: Built with React for real-time visualization of customer issues.\n• **Goal**: Automate issue extraction from high-volume recordings.`;
    }

    if (q.includes("sentiment") || q.includes("social media") || q.includes("election")) {
      return `His **Sentiment Analysis** project was used for electoral forecasting! 🗳️\n\nIt analyzed vast social media public sentiment and achieved a staggering **99.94% accuracy** using a Logistic Regression model.\n\n• **Methods**: VADER & TF-IDF vectorization.`;
    }

    if (q.includes("scr") || q.includes("powerplant") || q.includes("nox")) {
      return `The **SCR Efficiency** project focused on IoT and industrial optimization. 🏭\n\nIt used advanced data structures like **Heaps and Tries** to reduce scheduling conflicts and monitor NOx emissions in real-time.`;
    }

    // 2. Specific Technology & Library Handlers (Requested by User)
    if (q.includes("full stack") || q.includes("web development") || q.includes("frontend") || q.includes("backend")) {
      return `For **Full Stack development**, Tanmay is proficient in:\n\n• **Frontend**: React, Next.js, TypeScript, Tailwind CSS, and Framer Motion.\n• **Backend**: Node.js, Express, and RESTful APIs.\n• **Databases**: Supabase, MySQL, and PostgreSQL.\n\nHe loves building responsive, premium-feel UIs with robust backends! 💻`;
    }

    if (q.includes("machine") || q.includes("ml") || q.includes("modeling")) {
      return `In the **Machine Learning** domain, Tanmay has worked extensively with:\n\n• **Data Processing**: NumPy and Pandas.\n• **Visualization**: Matplotlib and Seaborn.\n• **Modeling**: Scikit-Learn (Logistic Regression, SVM, Random Forest).\n• **Platforms**: Kaggle and Jupyter Notebooks.`;
    }

    if (q.includes("nlp") || q.includes("natural language") || q.includes("text") || q.includes("bert")) {
      return `Tanmay is a specialist in **Natural Language Processing (NLP)**. 📝\n\nHis toolkit includes:\n• **Deep Learning**: BERT (Bidirectional Encoder Representations from Transformers).\n• **Core Processing**: spaCy, NLTK, and TextBlob.\n• **Techniques**: TF-IDF, Topic Modeling, and VADER Sentiment Analysis.`;
    }

    // 3. General Categories (Skills, Education, etc.)
    if (q.includes("expertise") || q.includes("specialize") || q.includes("focus")) {
      return "Tanmay specializes in **Full Stack Development** with a heavy focus on **AI and Machine Learning**. He excels at bridging the gap between complex data models and beautiful, user-centric web interfaces.";
    }

    if (q.includes("skill") || q.includes("tech") || q.includes("language") || q.includes("stack")) {
      const skills = portfolioData.skills
        .map((s) => `• **${s.name}**: ${s.skills.join(", ")}`)
        .join("\n");
      return `Tanmay has a diverse tech stack:\n\n${skills}\n\nHe's particularly strong in **Python** and **React**!`;
    }

    if (q.includes("education") || q.includes("university") || q.includes("college") || q.includes("cgpa") || q.includes("school")) {
      const edu = portfolioData.education[0];
      const school = portfolioData.education[1];
      if (q.includes("cgpa") || q.includes("grade") || q.includes("percentage")) {
        return `Tanmay maintains a solid academic record: a **${edu.details}** in his current B.Tech (LPU), and he secured **${school.details}** in his Intermediate exams at Beersheba.`;
      }
      return `He is currently pursuing his **B.Tech in CSE** at ${edu.institution}. He's been consistently active in technical societies and coding contests since his first year!`;
    }

    if (q.includes("certificat") || q.includes("infosys") || q.includes("udemy") || q.includes("genai") || q.includes("google") || q.includes("ibm")) {
      const pythonCert = portfolioData.certificates.find(c => c.title.includes("Python"));
      const networkCerts = portfolioData.certificates.filter(c => c.title.includes("Network") || c.title.includes("Packet"));
      
      return `Tanmay is highly certified across multiple domains! 📜\n\n• **Main Achievement**: Scored a **98% Grade** in Google's **Crash Course on Python**.\n• **Networking**: Completed multiple courses from **Google** and **University of Colorado** on Packet Switching and Network Communication.\n• **Systems & OS**: Certified by **IBM** in Hardware/OS and **Barcelona** in Digital Systems.\n• **Generative AI**: Specialized in ChatGPT-4 Prompt Engineering and No-Code GenAI tools.\n\nHe currently holds over 10+ professional certifications!`;
    }

    if (q.includes("achievement") || q.includes("awards") || q.includes("win") || q.includes("hackathon")) {
      return `Tanmay recently achieved a major milestone: **3rd Position** in a college-level **Cyber Security Hackathon**! 🏆\n\nOther notable achievements include:\n• **Algorithmic Excellence**: Advanced problem-solving skills recognized at LPU.\n• **Competitive Programming**: Consistent participation in technical contests.\n• **Project Innovation**: Building high-impact solutions in ML and Web.`;
    }

    if (q.includes("contact") || q.includes("hired") || q.includes("hire") || q.includes("email") || q.includes("linkedin")) {
      return `Ready to collaborate? Reach out here:\n\n📧 **Email**: ${portfolioData.contact.email}\n🔗 **LinkedIn**: [joshitanmay1618](${portfolioData.contact.linkedin})\n🐙 **GitHub**: [tanmayjoshi2023](${portfolioData.contact.github})\n\nHe is currently open to internship and full-time opportunities! 🚀`;
    }

    if (q.includes("who are you") || q.includes("about") || q.includes("tanmay")) {
      return `${portfolioData.summary}\n\nIn short: code, coffee, and AI! 🚀`;
    }

    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hello! I'm Tanmay's AI Assistant. 👋 How can I help you explore his projects or technical expertise today?";
    }

    return "That's an interesting question! While I don't have a specific answer for that yet, I can tell you all about Tanmay's projects in **NLP**, **Full Stack Development**, or his **University achievements**. What would you like to see?";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-900 dark:bg-slate-800 text-white flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-700">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Portfolio Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] opacity-80 uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded-lg transition-colors"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user" ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}>
                      {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${
                      msg.role === "user" 
                        ? "bg-indigo-600 text-white rounded-tr-none" 
                        : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/50 dark:border-slate-700/50"
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                      <Bot size={16} />
                    </div>
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-none flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            {messages.length < 3 && !isTyping && (
               <div className="px-4 pb-2 flex flex-wrap gap-2">
                {QUICK_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-[11px] px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a question..."
                className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white p-2.5 rounded-xl transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bubble */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-slate-900 dark:bg-slate-800 text-white p-4 rounded-2xl shadow-2xl hover:shadow-indigo-500/20 transition-all flex items-center gap-3 overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-700"
        aria-label="Open AI Assistant"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && (
          <span className="font-medium text-sm pr-1">Ask anything</span>
        )}
        <Sparkles className="absolute top-1 right-1 opacity-40" size={12} />
      </motion.button>
    </div>
  );
};
