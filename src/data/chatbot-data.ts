export type QuickResponse = {
  keywords: string[];
  response: string;
};

export const chatbotData: QuickResponse[] = [
  // PROJECTS - TrendPulse
  {
    keywords: ["trendpulse", "trend pulse", "google trends", "global search"],
    response: "**TrendPulse** is a real-time data visualization platform that demystifies global search patterns. Built with Next.js for high performance and Recharts for interactive visualization, it allows users to track and compare trending topics across different geographic regions and categories. Much like Google Trends, the platform provides actionable insights through dynamic charts and regional filtering, making complex search data accessible and intuitive. The premium interface ensures a seamless user experience while handling intensive real-time data fetching, making it an essential tool for understanding global shifts in public interest."
  },
  {
    keywords: ["trendpulse tech", "trendpulse stack"],
    response: "TrendPulse was built using **React**, **Next.js**, **Tailwind CSS**, and **Recharts** for the visualization layer."
  },
  {
    keywords: ["trendpulse features", "trendpulse dashboard"],
    response: "Key features include real-time trending search tracking, regional filtering (similar to Google Trends), and dynamic data visualization with Recharts."
  },
  {
    keywords: ["trendpulse goal", "purpose of trendpulse"],
    response: "The goal was to make global search trends interactive and accessible, allowing users to compare trends across regions easily."
  },

  // PROJECTS - IVR Analytics
  {
    keywords: ["ivr", "call transcript", "call analytics", "analytical system"],
    response: "The **IVR Call Transcript and Issue Analytical System** is a sophisticated NLP pipeline built to automate the extraction of actionable insights from high volumes of call recordings. The system converts audio into precise transcripts and identifies core customer issues using BERT for semantic understanding, spaCy for entity extraction, and NLTK for text processing. This automation eliminates the bottleneck of manual analysis, providing data-driven insights through a dynamic React dashboard integrated with Supabase. It significantly improves operational efficiency and service quality for industrial-scale communication tracking."
  },
  {
    keywords: ["ivr nlp", "ivr models"],
    response: "The system uses **BERT** for deep understanding, **spaCy** for entity extraction, and **NLTK** for text processing."
  },
  {
    keywords: ["ivr problem", "ivr solution"],
    response: "The problem was the time-consuming manual analysis of high-volume IVR recordings. The solution was an automated NLP pipeline that identifies customer issues in real-time."
  },
  {
    keywords: ["ivr tech", "ivr stack"],
    response: "IVR Analytics uses **Node.js**, **React**, **Supabase**, and major NLP libraries like **BERT** and **spaCy**."
  },

  // PROJECTS - Deadlock Detection
  {
    keywords: ["deadlock", "detection system", "banker", "os algorithm"],
    response: "The **Computer Deadlock Detection System** is a visual simulation tool designed to detect and resolve critical failures in multi-process Operating Systems. Using the Banker's Algorithm and Wait-for-Graph analysis, the system identifies circular waits and unsafe states that lead to system-wide stalls. Developed in Python, the tool provides immediate visual feedback on process resource allocation, helping students and developers understand process states and resource synchronization. It ensures that resource stalls are detected and resolved before they impact system stability, making it a reliable utility for complex OS architectures."
  },
  {
    keywords: ["banker algorithm", "deadlock algorithm"],
    response: "Tanmay implemented the **Banker's Algorithm** to ensure safe resource allocation and prevent deadlocks before they occur."
  },
  {
    keywords: ["deadlock wait-for-graph", "deadlock graph"],
    response: "The system uses **Wait-for-Graph** analysis to detect circular waits, which is a key condition for deadlocks in Operating Systems."
  },

  // PROJECTS - Sentiment Analysis
  {
    keywords: ["sentiment analysis", "social media", "electoral forecasting", "vader", "tf-idf"],
    response: "This project is a robust machine learning system designed for real-time electoral forecasting by analyzing vast amounts of social media sentiment. By utilizing VADER for specialized sentiment scoring and TF-IDF for high-dimensional feature extraction, the model achieved a remarkable **99.94% accuracy** with Logistic Regression. The system processes unstructured digital discourse at scale, identifying subtle shifts in societal opinion across different regions. It demonstrates the power of combining traditional NLP techniques with modern classification models to derive predictive intelligence from complex data streams."
  },
  {
    keywords: ["sentiment accuracy", "sentiment percentage"],
    response: "The project achieved a very high accuracy of **99.94%** using a Logistic Regression model."
  },
  {
    keywords: ["tf-idf", "vader"],
    response: "Tanmay used **TF-IDF** for feature extraction and **VADER** for specialized sentiment scoring of social media text."
  },

  // PROJECTS - SCR Efficiency
  {
    keywords: ["scr efficiency", "powerplant", "nox emissions", "iot"],
    response: "The **SCR Efficiency** project is an IoT-based monitoring system focusing on industrial optimization and environmental compliance in power plants. By leveraging advanced data structures like Heaps for priority-based task scheduling and Tries for efficient indexing, the system successfully reduced operational conflicts by 40%. The platform provides dynamic, real-time tracking of NOx emissions, bridging the gap between low-level sensor data and high-level industrial management. This solution ensures that emission targets are met consistently while optimizing the selective catalytic reduction process."
  },
  {
    keywords: ["heaps and tries", "data structures project"],
    response: "In the SCR Efficiency project, Tanmay used **Heaps** for priority-based scheduling and **Tries** for efficient data indexing."
  },

  // MACHINE LEARNING - Supervised
  {
    keywords: ["supervised learning", "classification", "regression"],
    response: "Tanmay is proficient in **Supervised Learning**, including:\n\n• **Regression**: Linear, Logistic, and Polynomial.\n• **Classification**: SVM, Random Forest, Decision Trees, and K-Nearest Neighbors."
  },
  {
    keywords: ["logistic regression project"],
    response: "He used **Logistic Regression** in his Sentiment Analysis project, achieving 99.94% accuracy."
  },
  {
    keywords: ["svm", "support vector machine"],
    response: "Tanmay has hands-on experience with **SVMs** for complex classification tasks in Machine Learning."
  },
  {
    keywords: ["random forest", "ensemble methods"],
    response: "He uses **Random Forest** and other ensemble techniques to build robust and accurate predictive models."
  },

  // MACHINE LEARNING - Unsupervised
  {
    keywords: ["unsupervised learning", "clustering", "dimensionality reduction"],
    response: "In **Unsupervised Learning**, Tanmay works with:\n\n• **Clustering**: K-Means and Hierarchical Clustering.\n• **Dimensionality Reduction**: Principal Component Analysis (PCA) and t-SNE."
  },
  {
    keywords: ["k-means", "clustering experience"],
    response: "He has used **K-Means clustering** for customer segmentation and finding patterns in unlabeled datasets."
  },
  {
    keywords: ["pca", "dimensionality"],
    response: "He utilizes **PCA** to simplify complex datasets while retaining essential features for better model performance."
  },

  // MACHINE LEARNING - Reinforcement Learning
  {
    keywords: ["reinforcement learning", "q-learning", "agent learning"],
    response: "Tanmay has explored **Reinforcement Learning (RL)**, focusing on building agents that learn through reward-based feedback loops. 🤖"
  },
  {
    keywords: ["markov decision process", "mdp"],
    response: "He understands the fundamentals of **MDP** as the mathematical framework for modeling reinforcement learning problems."
  },

  // MACHINE LEARNING - NLP
  {
    keywords: ["nlp skillset", "natural language processing skills", "nlp skills", "nlp"],
    response: "Tanmay's **NLP** specialty includes:\n\n• **Models**: BERT, Transformer architectures.\n• **Libraries**: spaCy, NLTK, TextBlob.\n• **Tasks**: Sentiment analysis, POS tagging, Named Entity Recognition (NER)."
  },
  {
    keywords: ["bert project", "transformer experience", "bert", "transforer"],
    response: "He integrated **BERT** into his IVR Analytical System to provide deep semantic understanding of call transcripts."
  },
  {
    keywords: ["spacy", "nltk", "textblob"],
    response: "These are his go-to libraries for tokenization, lemmatization, and core text processing tasks."
  },

  // AUTOMATION
  {
    keywords: ["automation anywhere", "rpa", "robotic process automation"],
    response: "Tanmay has hands-on experience with **Automation Anywhere** for building enterprise-grade robotic process automation (RPA) bots. 🤖"
  },
  {
    keywords: ["n8n", "workflow automation", "no-code tools"],
    response: "He uses **n8n** for creating powerful, self-hosted workflow automations to connect various services and APIs seamlessly."
  },
  {
    keywords: ["automation tools", "experience in automation"],
    response: "His automation toolkit includes **Automation Anywhere** (RPA) and **n8n** (General Workflow Automation)."
  },
  {
    keywords: ["why automation", "benefit of n8n"],
    response: "Automation increases efficiency. He uses **n8n** specifically for its flexibility in connecting different technical stacks without heavy custom coding."
  },

  // TECHNICAL SKILLS - Languages
  {
    keywords: ["programming languages", "coding languages", "what languages do you know", "coding", "language"],
    response: "Tanmay is proficient in a wide range of languages including **Python**, **C++**, **Java**, **C**, **JavaScript**, and **TypeScript**. 💻"
  },
  {
    keywords: ["python expert", "experience in python", "python score", "python"],
    response: "Python is his primary language for AI and ML. He scored a **98% Grade** in Google's Python Crash Course! 🐍"
  },
  {
    keywords: ["cpp", "c++ experience"],
    response: "He uses **C++** for competitive programming and understanding low-level system design."
  },
  {
    keywords: ["typescript", "javascript focus"],
    response: "For web development, he prefers **TypeScript** for its type safety and **JavaScript/React** for building interactive UIs."
  },

  // TECHNICAL SKILLS - Frontend
  {
    keywords: ["frontend skills", "web tech", "ui development"],
    response: "His frontend stack includes **React**, **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**."
  },
  {
    keywords: ["is this website responsive", "mobile view"],
    response: "Yes! This portfolio is fully responsive, built with **Tailwind CSS** to look great on any device."
  },
  {
    keywords: ["animations", "framer motion"],
    response: "He uses **Framer Motion** for all the smooth, premium-feel animations you see across this site."
  },

  // TECHNICAL SKILLS - Backend
  {
    keywords: ["backend skills", "server side"],
    response: "On the backend, Tanmay excels with **Node.js**, **Express**, and creating efficient **REST APIs**."
  },
  {
    keywords: ["database experience", "sql", "postgres"],
    response: "He works with **PostgreSQL**, **MySQL**, and **Supabase** for robust data management and real-time features."
  },
  {
    keywords: ["supabase", "realtime database"],
    response: "He often uses **Supabase** for its excellent authentication and real-time database capabilities."
  },

  // EDUCATION
  {
    keywords: ["education", "university", "college", "lpu", "where did you study", "academic background"],
    response: "Tanmay is pursuing a **B.Tech in CSE** at **Lovely Professional University (LPU)** (CGPA: 7). He completed his schooling at **Beersheba Senior Secondary School**, scoring **75%** in Inter and **79%** in High School. 🎓"
  },
  {
    keywords: ["schooling", "intermediate", "high school", "school", "where did you go to school"],
    response: "He completed his studies at **Beersheba Senior Secondary School**. He achieved **75%** in Intermediate and **79%** in High School."
  },
  {
    keywords: ["when will you graduate", "graduation year"],
    response: "He is currently in his degree program at LPU, actively building his career in AI and Web Dev."
  },

  // CERTIFICATIONS
  {
    keywords: ["certifications", "extra courses", "what have you studied", "certified in"],
    response: "Tanmay holds over 10 professional certifications from **Google**, **IBM**, **Coursera**, **Infosys**, and **Udemy**. These cover Python, AI, Networking, and Operating Systems."
  },
  {
    keywords: ["google certification", "google courses"],
    response: "He has multiple Google certifications, including the **Crash Course on Python** (with a 98% score) and **The Bits and Bytes of Computer Networking**."
  },
  {
    keywords: ["ibm certification", "ibm hardware", "ibm os"],
    response: "He is certified by **IBM** in **Introduction to Hardware and Operating Systems**."
  },
  {
    keywords: ["infosys certifications", "springboard", "infosys courses"],
    response: "From Infosys Springboard, he has certifications in **ChatGPT-4 Prompt Engineering**, **Generative AI**, **Computational Theory**, and **No-Code AI Solutions**."
  },
  {
    keywords: ["digital systems", "digital systems certification", "logic gates course", "barcelona university"],
    response: "He is certified in **Digital Systems: From Logic Gates to Processors** by the **Universitat Autònoma de Barcelona**."
  },
  {
    keywords: ["packet switching", "packet switching certification", "networking algorithms", "colorado university"],
    response: "He holds a certification in **Packet Switching Networks and Algorithms** from the **University of Colorado System**."
  },
  {
    keywords: ["network communication", "network communication certification", "networking fundamentals"],
    response: "He is certified in **Fundamentals of Network Communication** by the **University of Colorado System**."
  },
  {
    keywords: ["udemy certification", "generative ai course"],
    response: "He is certified in **Master Generative AI & Generative AI tools** from **Udemy**."
  },

  // ACHIEVEMENTS
  {
    keywords: ["achievements", "awards", "prizes", "accomplishments", "recognition", "what have you achieved"],
    response: "Tanmay has several key achievements:\n\n• **3rd position** in the Cyber Security Hackathon 🏆\n• **Algorithmic Excellence** recognition at LPU\n• **Project Innovation** for building multiple ML/Web apps\n• **Competitive Programming** success since 2023"
  },
  {
    keywords: ["hackathon winner", "cyber security prize", "hackathon position"],
    response: "He secured the **3rd Position** in a college-level **Cyber Security Hackathon**, demonstrating skills in vulnerability assessment and network security! 🏆"
  },
  {
    keywords: ["algorithmic excellence", "coding excellence", "complexity optimization"],
    response: "Tanmay is recognized for **Algorithmic Excellence** at LPU, focusing on high-performance problem solving and time complexity optimization."
  },
  {
    keywords: ["project innovation", "academic projects", "flask projects"],
    response: "His **Project Innovation** achievement highlights his work building multiple academic and personal projects in Machine Learning and Web Development using Python, Flask, and various APIs."
  },
  {
    keywords: ["competitive programming", "coding contests", "technical assessments"],
    response: "He has been active in **Competitive Programming** since August 2023, participating in numerous coding contests and technical assessments."
  },

  // PERSONAL & INTERESTS
  {
    keywords: ["hobbies", "interest", "what do you do", "free time", "leisure"],
    response: "Outside of coding, Tanmay has a diverse range of interests:\n\n• **Reading**: He's currently into **Self-Improvement** books.\n• **Travelling**: He loves visiting **Hilly Places** to recharge.\n• **Music**: He enjoys **Qawwalis**, though his taste varies with his mood.\n• **Poetry**: He is currently learning the art of **Poetry**!\n\nHe also enjoys exploring new AI tools and contributing to open-source projects."
  },
  {
    keywords: ["reading", "books", "favorite book", "what do you read"],
    response: "Tanmay is currently focused on **Self-Improvement** books. He loves reading things that help him grow personally and professionally."
  },
  {
    keywords: ["travelling", "travel", "explore", "mountains", "hills", "hilly places"],
    response: "He is a big fan of **Hilly Places**. There's something about the mountains that he finds incredibly refreshing and inspiring."
  },
  {
    keywords: ["music", "listening to music", "songs", "qawwalis", "qwallies"],
    response: "His current favorite genre is **Qawwali**. However, his musical taste is quite dynamic and often depends on his mood at the time!"
  },
  {
    keywords: ["learning new skills", "non-technical skills", "growth mindset", "poetry", "poems"],
    response: "Tanmay is a lifelong learner. Currently, he is focused on learning **Poetry**! He enjoys picking up skills that are completely different from his technical field."
  },
  {
    keywords: ["why ai", "why machine learning"],
    response: "He is fascinated by how data can be transformed into intelligence to solve complex real-world problems."
  },
  {
    keywords: ["career goal", "future plans"],
    response: "He aims to become a lead AI engineer, building systems that make a tangible difference in how people interact with technology."
  },

  // HIRE & CONTACT
  {
    keywords: ["hire you", "job", "internship", "collaboration"],
    response: "Tanmay is open to **Internship** and **Full-time** roles! You can reach him at **tanmayjoshi043@gmail.com**. 🚀"
  },
  {
    keywords: ["email address", "contact mail"],
    response: "His email is **tanmayjoshi043@gmail.com**. Feel free to drop a message!"
  },
  {
    keywords: ["linkedin profile"],
    response: "You can find him on LinkedIn at: **[joshitanmay1618](https://linkedin.com/in/joshitanmay1618)**."
  },
  {
    keywords: ["github link"],
    response: "Check out all his projects on GitHub: **[tanmayjoshi2023](https://github.com/tanmayjoshi2023)**."
  },
  {
    keywords: ["location", "where are you based"],
    response: "He is based in India and is open to remote or relocation opportunities."
  },

  // GENERAL BOT
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    response: "Hello! I'm Tanmay's AI Assistant. How can I help you learn more about his background and projects today? 👋"
  },
  {
    keywords: ["help", "what can you do"],
    response: "I can answer questions about Tanmay's:\n• **Projects** (TrendPulse, IVR, etc.)\n• **Skills** (ML, Web, Automation)\n• **Experience** (LPU, Hackathons)\n• **Contact Info**"
  },
  {
    keywords: ["thank you", "thanks"],
    response: "You're very welcome! Let me know if you have any other questions. 😊"
  },
  {
    keywords: ["bye", "goodbye"],
    response: "Goodbye! Have a great day and thanks for visiting Tanmay's portfolio. 👋"
  },
  {
    keywords: ["who made you", "how were you built"],
    response: "I was built using **React** and **Framer Motion** as part of Tanmay's portfolio! I'm designed to provide quick info about his career."
  },

  // CONTINUING WITH MORE DETAILED QUESTIONS...
  {
    keywords: ["is tanmay a developer", "is he good at coding"],
    response: "Absolutely! Tanmay is a highly capable Machine Learning Engineer with Full Stack interests with a strong foundation in CS algorithms and AI/ML."
  },
  {
    keywords: ["cv url", "resume link"],
    response: "You can download his full CV by clicking the 'Download CV' button in the Hero section, or I can provide specific details here!"
  },
  {
    keywords: ["mobile number", "phone number"],
    response: "You can contact him directly at **+91-7452986606**. 📱"
  },
  {
    keywords: ["intermediate percentage"],
    response: "He scored **75%** in his Intermediate (PCM + CS) exams."
  },
  {
    keywords: ["tenth grade", "school percentage"],
    response: "Tanmay has always been a strong student, maintaining consistent performance through school and university."
  },
  {
    keywords: ["what tech does he use for nlp", "nlp tech"],
    response: "For NLP, he primarily uses **Python** with libraries like **BERT**, **spaCy**, **NLTK**, **TF-IDF** and **VADER**."
  },
  {
    keywords: ["does he know react", "react"],
    response: "Yes, **React** is his primary frontend framework. He uses it for building high-performance, interactive web apps like this trendpulse etc!"
  },
  {
    keywords: ["does he know nextjs", "nextjs"],
    response: "Yes, he's proficient in **Next.js**, using it for SEO-optimized and server-rendered web applications."
  },
  {
    keywords: ["does he know nodejs"],
    response: "Yes, he uses **Node.js** and **Express** for building scalable backends and APIs."
  },
  {
    keywords: ["does he know python"],
    response: "Yes, **Python** is one of his strongest languages, especially for data science, AI, and ML tasks."
  },
  {
    keywords: ["does he know c++"],
    response: "Yes, he has a strong grasp of **C++**. He uses it for competitive programming and deep-diving into algorithms."
  },
  {
    keywords: ["does he know java"],
    response: "Yes, **Java** is part of his core language toolkit, learned during his university studies."
  },
  {
    keywords: ["does he know database", "sql skills", "mysql postgres"],
    response: "Yes, he works with both SQL (**MySQL**, **PostgreSQL**) and modern cloud solutions like **Supabase** for real-time data management."
  },
  {
    keywords: ["does he know git", "github profile"],
    response: "Yes, he is very comfortable with **Git** and **GitHub** for version control and collaboration."
  },
  {
    keywords: ["is he a student", "what do he do right now"],
    response: "Yes, he is a dedicated student at **Lovely Professional University**, currently in his B.Tech program."
  },
  {
    keywords: ["is he a freelancer", "freelancer"],
    response: "Yes Tanmay is a Part time Freelancer, always open to opportunities in various fields.He has worked on many personal and academic projects and is now looking for professional opportunities to apply his skills."
  },
  {
    keywords: ["current projects"],
    response: "His current focus is on **AI-driven web apps** and **Intelligent Automation** using RPA tools."
  },
  {
    keywords: ["trending searches project"],
    response: "That's **TrendPulse**! It's one of his featured projects that visualizes real-time global search trends."
  },
  {
    keywords: ["election prediction project"],
    response: "That's his **Sentiment Analysis of Social Media** project, which used Logistic Regression to predict outcomes with 99.94% accuracy."
  },
  {
    keywords: ["process management project"],
    response: "That would be the **Deadlock Detection System**, which simulates OS resource allocation and management."
  },
  {
    keywords: ["iot project"],
    response: "His **SCR Efficiency** project is a great example of his work in IoT and industrial data optimization."
  },
  {
    keywords: ["nlp call transcripts"],
    response: "That project (IVR Analytical System) used **BERT** and **spaCy** to extract customer issues from audio transcripts automatically."
  },
  {
    keywords: ["full list of projects"],
    response: "Tanmay has worked on: \n1. **IVR Analytics** (NLP)\n2. **Sentiment Analysis** (ML)\n3. **TrendPulse** (Web Dev)\n4. **Deadlock Detection** (OS)\n5. **SCR Efficiency** (IoT)\n\nYou can see them all in the 'Projects' section!"
  },
  {
    keywords: ["what is his name"],
    response: "His name is **Tanmay Joshi**."
  },
  {
    keywords: ["what is his role"],
    response: "He is an aspiring **Machine Learning Engineer with Full Stack interests** and **AI Engineer**."
  },
  {
    keywords: ["best achievement"],
    response: "Securing **3rd Position** in the Cyber Security Hackathon is one of his proudest moments!"
  },
  {
    keywords: ["why hire him"],
    response: "You should hire Tanmay because he combines **strong technical skills** (AI, ML, Web) with a **problem-solving mindset** and a proven ability to build complex, reliable systems."
  },
  {
    keywords: ["is he available for work"],
    response: "Yes, he is actively seeking internship and full-time opportunities! 🚀"
  },
  {
    keywords: ["can he build a website"],
    response: "Yes! He can build anything from simple landing pages to complex, data-driven web applications using **React** and **Node.js**."
  },
  {
    keywords: ["can he build a chatbot"],
    response: "Yes, I am proof of that! He can design and implement custom AI chatbots for various use cases."
  },
  {
    keywords: ["can he build ml model"],
    response: "Definitely. He has extensive experience building, training, and deploying ML models for classification, regression, and sentiment analysis."
  },
  {
    keywords: ["does he know automation"],
    response: "Yes, he is skilled in **Automation Anywhere** (RPA) and **n8n** for streamlining workflows."
  },
  {
    keywords: ["does he do open source"],
    response: "He loves the open-source community and contributes to projects that align with his interests in AI and web tech."
  },

  // MORE QUESTIONS TO REACH ~150 (ADDING MORE VARIATIONS AND NICHE TOPICS)
  {
    keywords: ["machine learning technologies"],
    response: "He works with **Scikit-learn**, **Pandas**, **NumPy**, **Matplotlib**, and more for data science and modeling."
  },
  {
    keywords: ["enterprise automation"],
    response: "He leverages **Automation Anywhere** for enterprise-scale robotic process automation."
  },
  {
    keywords: ["is he in india", "India"],
    response: "Yes, he is based in India."
  },
  {
    keywords: ["college ranking"],
    response: "He studies at **LPU**, one of the prominent private technical universities in India."
  },
  {
    keywords: ["technical stack summary", "tech stack list", "what techs do he knows"],
    response: "Summary: **Python**, **C/C++**, **Java**, **TypeScript/React/Next.js**, **Node/Express**, **PostgreSQL/Supabase**, and **Docker** for containerization."
  },
  {
    keywords: ["expertise", "specialize", "focus"],
    response: "Tanmay specializes in **Machine Learning**, including Supervised, Unsupervised, and Reinforcement Learning. He is also a passionate Full Stack Enthusiast who builds web applications to deploy his intelligent models."
  },
  {
    keywords: ["frontend vs backend", "web Dev", " web development"],
    response: "Tanmay is comfortable with both! He enjoys crafting beautiful UIs on the frontend and building robust systems on the backend."
  },
  {
    keywords: ["is he hard working"],
    response: "His track record of projects and certifications shows a high level of dedication and hard work. 🚀"
  },
  {
    keywords: ["can he use docker", "containerization skills"],
    response: "Yes, he uses **Docker** for containerizing applications, ensuring consistent environments across development and production."
  },
  {
    keywords: ["is he good at math"],
    response: "His work in ML and competitive programming requires strong mathematical foundations, especially in statistics and linear algebra."
  },
  {
    keywords: ["does he know cloud", "what cloud tech do he knows"],
    response: "He has experience using **Supabase** (BaaS) and has a general understanding of cloud infrastructure."
  },
  {
    keywords: ["mobile app development", "type of developmet he knows"],
    response: "He primarily focuses on **Responsive Web Development**, which ensures high performance on mobile devices."
  },
  {
    keywords: ["data structures and algorithms", "dsa"],
    response: "He has a deep interest in **DSA** and practices regularly to improve his algorithmic efficiency."
  },
  {
    keywords: ["os algorithms experience", "os"],
    response: "Through his Deadlock Detection project, he has practical experience implementing complex OS algorithms."
  },
  {
    keywords: ["networking basics", "networking"],
    response: "Yes, he holds multiple certifications in **Computer Networking** and understands core protocols and packet switching."
  },
  {
    keywords: ["generative ai tools", "gen ai", " gen ai tools"],
    response: "He's familiar with **ChatGPT-4 Prompt Engineering** and various no-code GenAI platforms."
  },
  {
    keywords: ["can he optimize logic", "logic building"],
    response: "Yes, his achievement in 'Algorithmic Excellence' highlights his ability to optimize code for time and space complexity."
  },
  {
    keywords: ["does he use tailwind", "tailwind css"],
    response: "Yes! This portfolio was styled using **Tailwind CSS** for a modern, sleek look."
  },
  {
    keywords: ["does he use sass", "css frameworks"],
    response: "While he prefers **Tailwind**, he has a solid understanding of modern CSS and styling frameworks."
  },
  {
    keywords: ["how to contact for hire", "contact", "colab", "hire"],
    response: "Please email him at **tanmayjoshi043@gmail.com** for any professional inquiries."
  },
  {
    keywords: ["where can i see his code", "github"],
    response: "You can find his source code for most projects on his **GitHub: [tanmayjoshi2023](https://github.com/tanmayjoshi2023)**."
  },
  {
    keywords: ["is he active on github"],
    response: "Yes, he regularly pushes updates to his project repositories and explores new technologies."
  },
  {
    keywords: ["best project for recruiters"],
    response: "Recruiters should check out **TrendPulse** for web skills and **IVR Analytics** for ML/NLP expertise!"
  },
  {
    keywords: ["ivr analytics accuracy"],
    response: "While the project focused more on extraction efficiency, the underlying BERT models provide high semantic accuracy for issue identification."
  },
  {
    keywords: ["did he win hackathons"],
    response: "Yes, he secured **3rd place** in a Cyber Security Hackathon in a college level Hackathon .Lovely Professional University."
  },
  {
    keywords: ["what university"],
    response: "Lovely Professional University (LPU)."
  },
  {
    keywords: ["intermediate score"],
    response: "75% in PCM + CS."
  },
  {
    keywords: ["favorite subject"],
    response: "Artificial Intelligence, OS , networking, electronics, and DSA are among his favorites!"
  },
  {
    keywords: ["how to hire as intern"],
    response: "You can reach out via LinkedIn or Email. He is highly motivated and ready to contribute to a professional team."
  },
  {
    keywords: ["is he a full stack dev", "full stack",],
    response: "Tanmay is primarily a **Machine Learning Engineer** who is also a highly passionate **Full Stack Enthusiast**. He specializes in building intelligent systems and then crafting the full-stack web applications needed to deploy and visualize those models."
  },
  {
    keywords: ["is he proficient in java", "java", "do he knows java"],
    response: "Yes, he has academic and project experience in Java."
  },
  {
    keywords: ["is he proficient in c++", "do he knows c++", "do he knows cpp"],
    response: "Yes, he uses C++ regularly for competitive programming."
  },
  {
    keywords: ["can he work with teams"],
    response: "Yes, his experience in hackathons has taught him the value of effective team communication and collaboration."
  },
  {
    keywords: ["does he understand business needs"],
    response: "Yes, projects like IVR Analytics show his ability to solve real-world business problems through automation."
  },
  {
    keywords: ["scr efficiency result"],
    response: "Reduced monitoring conflicts by 40% using optimized scheduling."
  },
  {
    keywords: ["nox monitoring"],
    response: "This refers to his IoT project for monitoring emissions in power plants."
  },
  {
    keywords: ["is he ambitious"],
    response: "His constant learning (10+ certs) and project work suggest a highly ambitious and goal-oriented individual."
  },
  {
    keywords: ["can i call him"],
    response: "You can reach him at **+91-7452986606**."
  },
  {
    keywords: ["cv location", "cv download"],
    response: "Look for the 'Download CV' button on the main page!"
  },
  {
    keywords: ["certificates issuer", "where have he done certificates from"],
    response: "He have done various certificates issued by Google, IBM, Infosys, Udemy, and University of Colorado."
  },
  {
    keywords: ["no code ai tools"],
    response: "He is certified in building GenAI solutions using no-code platforms."
  },
  {
    keywords: ["packet switching skills"],
    response: "He has deeply studied packet switching algorithms and network communications."
  },
  {
    keywords: ["does he use linkedin"],
    response: "Yes, he is active on LinkedIn for professional networking."
  },
  {
    keywords: ["sentiment analysis model type"],
    response: "It used a **Logistic Regression** classifier with TF-IDF and VADER."
  },
  {
    keywords: ["deadlock detection algorithm"],
    response: "He implemented the **Banker's Algorithm** for safe state detection."
  },
  {
    keywords: ["ivr analysis platform"],
    response: "It uses a React frontend with a Supabase backend for real-time analytics."
  },
  {
    keywords: ["is he familiar with prompts"],
    response: "Yes, he has specialized certification in **ChatGPT-4 Prompt Engineering**."
  },
  {
    keywords: ["why hire an ai developer"],
    response: "AI developers like Tanmay can help businesses automate mundane tasks and derive insights from vast amounts of data."
  },
  {
    keywords: ["is he a good choice for startups", "startups"],
    response: "Yes! His full-stack skills and ability to build end-to-end AI solutions make him a perfect fit for fast-moving startups."
  },
  {
    keywords: ["can he relocate"],
    response: "Yes, he is open to relocation for the right opportunity."
  },
  {
    keywords: ["is he a quick learner"],
    response: "Completing 10+ professional certifications in a short time is a testament to how quickly he picks up new concepts."
  },
  {
    keywords: ["work history"],
    response: "Currently focused on academic excellence and building a high-impact project portfolio."
  },
  {
    keywords: ["personal website url"],
    response: "You are currently on his personal portfolio website! Check out the various sections to learn more."
  },
  {
    keywords: ["social media sentiment project"],
    response: "He achieved 99.94% accuracy in predicting election outcomes using social media data."
  },
  {
    keywords: ["customer issue extraction"],
    response: "This is a key feature of his IVR Analytical System using BERT and spaCy."
  },
  {
    keywords: ["is he professional"],
    response: "Yes, Tanmay maintains a high level of professionalism in all his technical and collaborative engagements."
  },
  {
    keywords: ["can he use pandas"],
    response: "Yes, **Pandas** is his main tool for data manipulation and analysis."
  },
  {
    keywords: ["can he use numpy"],
    response: "Yes, he uses **NumPy** for numerical computations in ML models."
  },
  {
    keywords: ["matplotlib experience"],
    response: "He uses **Matplotlib** and **Seaborn** to create insightful data visualizations."
  },
  {
    keywords: ["what is rpa"],
    response: "RPA stands for Robotic Process Automation. He uses tools like **Automation Anywhere** to automate repetitive tasks."
  },
  {
    keywords: ["n8n vs automation anywhere"],
    response: "He uses **n8n** for general workflow automation and **Automation Anywhere** for enterprise RPA."
  },
  {
    keywords: ["is he good at databases"],
    response: "Yes, he has a solid understanding of relational databases and modern cloud-based data solutions."
  },
  {
    keywords: ["is he proficient in next.js"],
    response: "Yes, he uses Next.js for building scalable and fast web applications."
  },
  {
    keywords: ["is he proficient in tailwind"],
    response: "Yes, he uses Tailwind CSS for rapid and modern UI development."
  },
  {
    keywords: ["framer motion experience"],
    response: "He uses Framer Motion to add engaging animations and transitions to web projects."
  },
  {
    keywords: ["what is a deadlock"],
    response: "A deadlock is a situation where processes are unable to proceed because each is waiting for a resource held by another. He built a system to detect this!"
  },
  {
    keywords: ["computational theory skills"],
    response: "He is certified in Computational Theory, covering language principles and finite automata."
  },
  {
    keywords: ["beersheba senior secondary school", "high school", "school percentage"],
    response: "Tanmay completed his schooling at Beersheba. He scored **75%** in Intermediate and **79%** in High School."
  },
  {
    keywords: ["lovely professional university ranking"],
    response: "LPU is highly regarded for its engineering programs and technical focus in India."
  },
  {
    keywords: ["where can i contact", "can you share me his contacts"],
    response: "Email: tanmayjoshi043@gmail.com | Mobile: +91-7452986606"
  },
  {
    keywords: ["what is hls tailored colors"],
    response: "He uses curated color palettes to give his websites a premium and modern feel."
  },
  {
    keywords: ["is the assistant helpful"],
    response: "I try my best! I have access to all of Tanmay's professional data to help you learn about him."
  },
  {
    keywords: ["more info on trendpulse"],
    response: "TrendPulse uses real-time API data to visualize global search trends with interactive charts."
  },
  {
    keywords: ["more info on ivr project"],
    response: "It converts recordings to transcripts and uses NLP models to categorize customer issues automatically."
  },
  {
    keywords: ["more info on sentiment analysis"],
    response: "It uses VADER for sentiment scoring and Logistic Regression for highly accurate outcome predictions."
  },
  {
    keywords: ["more info on deadlock system"],
    response: "It's a visual simulator for process resource allocation using the Banker's Algorithm."
  },
  {
    keywords: ["is he from india"],
    response: "Yes, Tanmay is based in India."
  },
  {
    keywords: ["can he handle pressure"],
    response: "His participation in hackathons and competitive programming shows he performs well under time constraints."
  },
  {
    keywords: ["what apps can he build"],
    response: "He builds everything from analytical dashboards to complex AI-powered web platforms."
  },
  {
    keywords: ["why focus on intelligent automation"],
    response: "He believes automation is the future for improving efficiency and reducing error in business processes."
  },
  {
    keywords: ["is he a full-stack engineer"],
    response: "Yes, he is a **Machine Learning Engineer** with strong **Full Stack** capabilities, handling both the AI models and the web interfaces (React/Node) needed to support them."
  },
  {
    keywords: ["how to hire as full time"],
    response: "Please reach out via email: tanmayjoshi043@gmail.com to discuss opportunities."
  },
  {
    keywords: ["is this website premium"],
    response: "Yes, it's designed with a premium feel using modern typography, glassmorphism, and smooth animations."
  },
  {
    keywords: ["what is glassmorphism"],
    response: "It's a design style using transparency and blur effects, which Tanmay has incorporated into parts of this site."
  },
  {
    keywords: ["is he active in community"],
    response: "He is active in technical and non technical societies at LPU and contributes enthusiastically in all societies."
  },
  {
    keywords: ["is he a good colleague", "team work", "team player"],
    response: "Given his collaborative success in hackathons, he is a great teammate who values open communication."
  },
  {
    keywords: ["what makes him unique"],
    response: "His ability to integrate complex AI/ML models directly into high-quality web applications sets him apart."
  },
  {
    keywords: ["can he build a ecommerce website"],
    response: "Yes, with his full-stack skills, he can build secure and scalable e-commerce platforms."
  },
  {
    keywords: ["can he build a saas product"],
    response: "Yes, those are exactly the kind of complex systems he enjoys building from start to finish."
  },
  {
    keywords: ["is he available to talk now"],
    response: "The best way is to email him at tanmayjoshi043@gmail.com or either Whatsapp at +91-7452986606; he'll respond as soon as possible!"
  },
  {
    keywords: ["can he work in us time zone"],
    response: "He is flexible and can adjust his schedule for international collaboration."
  },
  {
    keywords: ["does he use vscode", "vs code"],
    response: "Yes, **VS Code** is his primary IDE for all development work."
  },
  {
    keywords: ["does he use kaggle", "kaggle"],
    response: "Yes, he uses **Kaggle** for exploring datasets and competing in ML challenges."
  },
  {
    keywords: ["is he open for collaboration"],
    response: "Yes, he's always looking to join forces on innovative tech projects!"
  },
  {
    keywords: ["project visualizations"],
    response: "He uses libraries like **Recharts** and **Matplotlib** for high-quality data visualizations."
  },
  {
    keywords: ["does he know scikit-learn"],
    response: "Yes, it's his primary library for traditional machine learning models."
  },
  {
    keywords: ["is he skilled in data science"],
    response: "Yes, his ML and NLP projects demonstrate a strong foundation in data science principles."
  },
  {
    keywords: ["is he a frontend specialist"],
    response: "While he does full-stack, he has a very high level of skill in modern frontend development using React and Tailwind."
  },
  {
    keywords: ["is he a backend specialist"],
    response: "He is equally strong in building robust, secure, and scalable backends using Node.js."
  },
  {
    keywords: ["is he an ai specialist"],
    response: "Yes, his work in NLP, sentiment analysis, and various ML domains highlights his AI specialization."
  },
  {
    keywords: ["how to see certificates gallery", "tell me about your certificates"],
    response: "Head over to the 'Certificates' section on the main page to see them all!"
  },
  {
    keywords: ["project showcase", "tell me about your projects"],
    response: "You can see all his top projects in the 'Projects' section, complete with descriptions and tech stacks."
  },
  {
    keywords: ["graduation status", "tell me about your graduation"],
    response: "He is currently a student at LPU, building his career through academic and project work."
  },
  {
    keywords: ["what is n8n used for"],
    response: "He uses n8n for connecting various apps and APIs to automate complex workflows without writing logic from scratch."
  },
  {
    keywords: ["what is automation anywhere iq bot"],
    response: "While he has general AA skills, he understands how RPA can be used for intelligent document processing and more."
  },
  {
    keywords: ["is he familiar with supervised vs unsupervised"],
    response: "Yes, he has deep knowledge of both and knows when to apply each for optimal results."
  },
  {
    keywords: ["does he know clustering"],
    response: "Yes, he is proficient in clustering techniques like K-Means for unsupervised learning."
  },
  {
    keywords: ["does he know reinforcement learning agents"],
    response: "Yes, he has worked on fundamental RL concepts and agent-based learning."
  },
  {
    keywords: ["can he build a dashboard"],
    response: "Yes! His IVR Analytics and TrendPulse projects both feature advanced interactive dashboards."
  },
  {
    keywords: ["is he ready for hire", "looking for opportunities"],
    response: "Yes, he's ready to bring his AI and Web skills to your team! 🚀"
  }
];
