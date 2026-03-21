export type Project = {
  title: string;
  description: {
    problem: string;
    solution: string;
  };
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
};

export type Achievement = {
  title: string;
  description: string;
  date: string;
};

export type PortfolioData = {
  name: string;
  role: string;
  summary: string;
  profileImage?: string;
  cvUrl?: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    mobile: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  certificates: Certificate[];
  achievements: Achievement[];
  education: {
    institution: string;
    degree: string;
    period: string;
    details: string;
  }[];
};

export const portfolioData: PortfolioData = {
  name: "Tanmay Joshi",
  role: "Full Stack Developer",
  summary: "A passionate software developer with expertise in AI, Machine Learning, and Web Technologies. Experienced in building NLP pipelines, predictive models, and interactive web applications using React and Node.js.",
  profileImage: "/profile.jpg",
  cvUrl: "/cv.docx",
  contact: {
    email: "tanmayjoshi043@gmail.com",
    linkedin: "https://linkedin.com/in/joshitanmay1618",
    github: "https://github.com/tanmayjoshi2023",
    mobile: "+91-7452986606",
  },
  skills: [
    {
      name: "Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      name: "Libraries & Frameworks",
      skills: ["React", "Next.js", "Node.js", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "BERT", "Spacy", "NLTK"],
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "VS Code", "Kaggle", "Supabase"],
    },
    {
      name: "Backend",
      skills: ["MySQL", "PostgreSQL", "Supabase", "REST APIs"],
    },
  ],
  projects: [
    {
      title: "IVR Call Transcript and Issue Analytical System",
      description: {
        problem: "Extracting actionable insights from high volumes of IVR call recordings manually was time-consuming and prone to error.",
        solution: "Built an NLP pipeline to convert recordings to transcripts and extract customer issues using spaCy, BERT, and NLTK. Integrated with a React dashboard for real-time visualization.",
      },
      techStack: ["Node.js", "React", "Supabase", "BERT", "NLTK", "spaCy"],
      githubUrl: "https://github.com/tanmayjoshi2023",
      featured: true,
    },
    {
      title: "Sentiment Analysis of Social Media",
      description: {
        problem: "Need for real-time electoral forecasting by analyzing vast amounts of public sentiment on social media.",
        solution: "Developed a machine learning system using VADER and TF-IDF to predict election outcomes. Achieved 99.94% accuracy with Logistic Regression.",
      },
      techStack: ["Python", "VADER", "TF-IDF", "Scikit-learn", "Logistic Regression"],
      githubUrl: "https://github.com/tanmayjoshi2023",
    },
    {
      title: "SCR Efficiency in Powerplants",
      description: {
        problem: "Managing and monitoring NOx emissions in power plants required a dynamic, real-time solution.",
        solution: "Implemented an IoT-based system using advanced data structures (Heaps, Tries) to optimize scheduling and reduce conflicts by 40%.",
      },
      techStack: ["JavaScript", "HTML5", "CSS3", "IoT", "Data Structures"],
      githubUrl: "https://github.com/tanmayjoshi2023",
    },
  ],
  certificates: [
    {
      title: "ChatGPT-4 Prompt Engineering",
      issuer: "Infosys Springboard",
      date: "August 2025",
      imageUrl: "/certificates/prompt-engineering.png",
    },
    {
      title: "Computational Theory: Language Principle & Finite Automata Theory",
      issuer: "Infosys Springboard",
      date: "August 2025",
      imageUrl: "/certificates/computational-theory.png",
    },
    {
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      issuer: "Infosys Springboard",
      date: "August 2025",
      imageUrl: "/certificates/gen-ai-no-code.png",
    },
    {
      title: "Master Generative AI & Generative AI tools",
      issuer: "Udemy",
      date: "August 2025",
      imageUrl: "/certificates/udemy-gen-ai.png",
    },
  ],
  achievements: [
    {
      title: "Algorithmic Excellence",
      description: "Consistently practiced coding and improved performance in algorithmic problem solving and time complexity optimization through regular challenges at LPU.",
      date: "Since Nov 2024",
    },
    {
      title: "Project Innovation",
      description: "Built multiple academic and personal projects in Machine Learning and Web Development, applying practical knowledge of Python, Flask, and APIs.",
      date: "Since Nov 2024",
    },
    {
      title: "Competitive Programming",
      description: "Participated in coding contests and technical assessments, gaining exposure to real-time problem-solving under time constraints.",
      date: "Since Aug 2023",
    },
  ],
  education: [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Since Aug 2023",
      details: "CGPA: 7",
    },
    {
      institution: "Beersheba Senior Secondary School",
      degree: "Intermediate - PCM + CS",
      period: "Apr 2022 - Mar 2023",
      details: "Percentage: 82%",
    },
  ],
};
