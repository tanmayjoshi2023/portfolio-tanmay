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
  role: "Machine Learning Engineer",
  summary: "A specialized Machine Learning Engineer with a deep passion for building intelligent systems. While my heart lies in AI and ML, I am equally enthusiastic about crafting seamless Full Stack web applications that bring complex models to life.",
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
      name: "Machine Learning Expertise",
      skills: ["Supervised Learning (Regression, Classification)", "Unsupervised Learning (Clustering, PCA)", "Reinforcement Learning", "NLP (BERT, NLTK, spaCy)", "Computer Vision Basics", "TF-IDF & VADER"],
    },
    {
      name: "Libraries & Frameworks",
      skills: ["React", "Next.js", "Node.js", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Express", "Framer Motion"],
    },
    {
      name: "Tools & Automation",
      skills: ["Automation Anywhere", "n8n", "Docker", "Git", "GitHub", "VS Code", "Kaggle", "Supabase", "Postman"],
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
        solution: "Built a sophisticated NLP pipeline to automate the extraction of actionable insights from high volumes of IVR call recordings. The system first converts audio into precise transcripts and then identifies core customer issues using a combination of BERT for semantic understanding, spaCy for entity extraction, and NLTK for text processing. This automation eliminates the bottleneck of manual call analysis, providing data-driven insights through a dynamic React dashboard integrated with Supabase. It serves as a powerful end-to-end solution for industrial-scale communication and issue tracking, significantly improving operational efficiency and service quality.",
      },
      techStack: ["Node.js", "React", "Supabase", "BERT", "NLTK", "spaCy"],
      githubUrl: "https://github.com/tanmayjoshi2023",
      featured: true,
    },
    {
      title: "Sentiment Analysis of Social Media",
      description: {
        problem: "Need for real-time electoral forecasting by analyzing vast amounts of public sentiment on social media.",
        solution: "Developed a robust machine learning system designed for real-time electoral forecasting by analyzing vast amounts of public sentiment on social media. By utilizing VADER for specialized sentiment scoring and TF-IDF for high-dimensional feature extraction, the model achieved a remarkable 99.94% accuracy with Logistic Regression. The system processes unstructured digital discourse at scale, identifying subtle shifts in societal opinion across different demographics and regions. This project demonstrates the power of combining traditional NLP techniques with modern classification models to derive predictive intelligence from complex social media data streams.",
      },
      techStack: ["Python", "VADER", "TF-IDF", "Scikit-learn", "Logistic Regression"],
      githubUrl: "https://github.com/tanmayjoshi2023",
    },
    {
      title: "TrendPulse",
      description: {
        problem: "Users often find it difficult to track and compare real-time global search trends across different regions and categories.",
        solution: "TrendPulse is a real-time data visualization platform that demystifies global search patterns. Built with Next.js for high performance and Recharts for interactive visualization, it allows users to track and compare trending topics across different geographic regions and categories. Much like Google Trends, the platform provides actionable insights through dynamic charts and regional filtering, making complex search data accessible and intuitive. The premium interface, styled with Tailwind CSS, ensures a seamless user experience while handling intensive real-time data fetching, making it an essential tool for understanding global shifts in public interest.",
      },
      techStack: ["React", "Next.js", "Tailwind CSS", "Recharts", "Lucide Icons"],
      githubUrl: "https://github.com/tanmayjoshi2023",
      featured: true,
    },
    {
      title: "Computer Deadlock Detection System",
      description: {
        problem: "Deadlocks in multi-process Operating Systems can stall resources and crash environments if not detected and resolved early.",
        solution: "Designed and implemented a visual simulation tool to detect and resolve critical failures in multi-process Operating Systems. Using the Banker's Algorithm and Wait-for-Graph analysis, the system identifies circular waits and unsafe states that lead to system-wide stalls. Developed in Python, the tool provides immediate visual feedback on process resource allocation, helping students and developers understand process states and resource synchronization. It serves as Both an educational platform and a reliable debugging utility for complex OS architectures, ensuring that resource stalls are detected and resolved before they impact system stability.",
      },
      techStack: ["Python", "OS Algorithms", "Resource Management", "Data Structures"],
      githubUrl: "https://github.com/tanmayjoshi2023",
    },
    {
      title: "SCR Efficiency in Powerplants",
      description: {
        problem: "Managing and monitoring NOx emissions in power plants required a dynamic, real-time solution.",
        solution: "Implemented an IoT-based monitoring system focusing on industrial optimization and environmental compliance in power plants. By leveraging advanced data structures like Heaps for priority-based task scheduling and Tries for efficient indexing of large datasets, the system successfully reduced operational conflicts by 40%. The platform provides dynamic, real-time tracking of NOx emissions, bridging the gap between low-level sensor data and high-level industrial management. This solution ensures that emission targets are met consistently while optimizing the selective catalytic reduction (SCR) process, demonstrating the intersection of Data Structures, IoT, and environmental engineering.",
      },
      techStack: ["JavaScript", "HTML5", "CSS3", "IoT", "Data Structures"],
      githubUrl: "https://github.com/tanmayjoshi2023",
    },
  ],
  certificates: [
    {
      title: "Crash Course on Python",
      issuer: "Google (Coursera)",
      date: "March 2024",
      imageUrl: "/certificates/python-crash-course.jpg",
    },
    {
      title: "Digital Systems: From Logic Gates to Processors",
      issuer: "Universitat Autònoma de Barcelona",
      date: "2024",
      imageUrl: "/certificates/digital-systems.png",
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "IBM",
      date: "2024",
      imageUrl: "/certificates/hardware-os-intro.png",
    },
    {
      title: "Packet Switching Networks and Algorithms",
      issuer: "University of Colorado System",
      date: "2024",
      imageUrl: "/certificates/packet-switching.png",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "2024",
      imageUrl: "/certificates/google-networking.png",
    },
    {
      title: "Fundamentals of Network Communication",
      issuer: "University of Colorado System",
      date: "2024",
      imageUrl: "/certificates/network-communication-fundamentals.png",
    },
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
      title: "Cyber Security Hackathon",
      description: "Secured 3rd position in a college-level Cyber Security Hackathon, demonstrating skills in vulnerability assessment and network security.",
      date: "Feb 2025",
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
      details: "Percentage: 75%",
    },
    {
      institution: "Beersheba Senior Secondary School",
      degree: "High School",
      period: "Apr 2020 - Mar 2021",
      details: "Percentage: 79%",
    },
  ],
};
