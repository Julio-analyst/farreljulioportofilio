export const site = {
  name: "Farrel Julio Akbar",
  role: "Data Science | Data Engineering | AI & Automation | ML & Cloud Analytics",
  tagline:
    "Membangun brand profesional yang rapi, informatif, dan siap tumbuh.",
  taglineEn:
    "Building a professional brand that is clean, informative, and ready to grow.",
  location: "Bogor, West Java, Indonesia",
  email: "farelrel12345@gmail.com",
  github: "https://github.com/Julio-analyst",
  linkedin: "https://www.linkedin.com/in/farrel-julio-427143288/",
  cvPath: "/farrel-julio-cv.pdf",
  avatarUrl: "/profile.jpg",
  headline: "Data Science | Data Engineering | AI Automation | Cloud Analytics",
  connections: "500+",
  bio:
    "Final-year Data Science student at ITERA with hands-on experience building end-to-end ML pipelines, data engineering workflows, RAG assistants, forecasting models, and real-time CDC replication. Focused on professional branding, production-ready MLOps, and scalable analytics.",
  bioEn:
    "Final-year Data Science student at ITERA with hands-on experience in end-to-end ML pipelines, data engineering workflows, RAG assistants, forecasting, and real-time CDC replication. Focused on professional branding, production-ready MLOps, and scalable analytics.",
};

export const navLinks = [
  { href: "/", label: "Home", labelEn: "Home" },
  { href: "/resume", label: "Resume", labelEn: "Resume" },
  { href: "/portfolio", label: "Portfolio", labelEn: "Portfolio" },
  { href: "/achievements", label: "Achievement", labelEn: "Achievements" },
  { href: "/other-activity", label: "Other Activity", labelEn: "Other Activity" },
];

export const heroStats = [
  { label: "Public flagship repos", labelEn: "Public flagship repos", value: "3" },
  { label: "Competition proof points", labelEn: "Competition proof points", value: "2+" },
  { label: "Study base", labelEn: "Study base", value: "ITERA" },
];

export const whatPeopleSayAboutMe = [
  {
    title: "Clear communicator",
    titleEn: "Clear communicator",
    description: "Mampu menjelaskan kerja teknis dengan bahasa yang sederhana dan enak dibaca.",
    descriptionEn: "Explains technical work in a simple, easy-to-read way.",
  },
  {
    title: "Fast builder",
    titleEn: "Fast builder",
    description: "Cepat mengubah ide menjadi prototype yang bisa diuji dan dipresentasikan.",
    descriptionEn: "Turns ideas into testable, presentable prototypes quickly.",
  },
  {
    title: "Balanced thinker",
    titleEn: "Balanced thinker",
    description: "Menjaga keseimbangan antara analisis, engineering discipline, dan storytelling.",
    descriptionEn: "Balances analysis, engineering discipline, and storytelling.",
  },
];

export const skills = [
  {
    category: "Core stack",
    categoryEn: "Core stack",
    items: ["Python", "R", "SQL", "TensorFlow", "Keras", "Scikit-learn"],
  },
  {
    category: "Data engineering",
    categoryEn: "Data engineering",
    items: ["ETL", "CDC", "Debezium", "Kafka", "PostgreSQL", "MySQL", "Hive"],
  },
  {
    category: "MLOps & delivery",
    categoryEn: "MLOps & delivery",
    items: ["MLflow", "DVC", "CI/CD", "Docker", "Grafana", "Monitoring"],
  },
  {
    category: "Apps & storytelling",
    categoryEn: "Apps & storytelling",
    items: ["Streamlit", "OpenAI", "FAISS", "Plotly", "Matplotlib", "Seaborn"],
  },
];

export const featuredProjects = [
  {
    title: "impact-of-ai-asean",
    titleEn: "Impact of AI in ASEAN",
    category: "Forecasting + data storytelling",
    categoryEn: "Forecasting & data storytelling",
    summary:
      "LSTM-based forecasting that shows how AI adoption may shape ASEAN GDP trends, packaged for competition storytelling and infographic delivery.",
    summaryEn:
      "LSTM forecasting and visualization exploring AI adoption scenarios across ASEAN economies, prepared for infographic delivery and competition storytelling.",
    impact: "RASIO 8.0 finalist",
    impactEn: "RASIO 8.0 finalist",
    stack: ["Python", "TensorFlow", "Notebook", "Data Visualization"],
    href: "https://github.com/Julio-analyst/impact-of-ai-asean",
  },
  {
    title: "IDISbot",
    titleEn: "IDISbot",
    category: "AI investment assistant",
    categoryEn: "AI investment assistant",
    summary:
      "Streamlit RAG chatbot for investment Q&A with live market data, indicators, and a strict educational disclaimer.",
    summaryEn:
      "A Streamlit RAG chatbot combining live market data and retrieval-augmented generation to assist investment learning and research.",
    impact: "OpenAI + FAISS + YFinance",
    impactEn: "OpenAI + FAISS + YFinance",
    stack: ["Python", "OpenAI", "FAISS", "YFinance"],
    href: "https://github.com/Julio-analyst/IDISbot",
  },
  {
    title: "debezium-cdc-mirroring",
    titleEn: "Debezium CDC mirroring",
    category: "CDC / streaming pipeline",
    categoryEn: "CDC / streaming pipeline",
    summary:
      "Real-time PostgreSQL replication with Debezium, Kafka, Kafka Connect, and dynamic scripts for monitoring and validation.",
    summaryEn:
      "An implementation of log-based change data capture (CDC) using Debezium and Kafka for reliable replication and monitoring.",
    impact: "Log-based replication",
    impactEn: "Log-based replication",
    stack: ["Kafka", "Debezium", "PostgreSQL", "PowerShell"],
    href: "https://github.com/Julio-analyst/debezium-cdc-mirroring",
  },
];

export const repositoryGroups = [
  {
    title: "AI, ML & Data Science",
    titleEn: "AI, ML & Data Science",
    description:
      "Repositori yang menampilkan eksperimen model, forecasting, computer vision, dan aplikasi AI.",
    descriptionEn:
      "Repositories showing model experiments, forecasting, computer vision, and AI applications.",
    repos: [
      {
        name: "impact-of-ai-asean",
        href: "https://github.com/Julio-analyst/impact-of-ai-asean",
        summary:
          "LSTM-based forecasting untuk melihat dampak adopsi AI terhadap tren ekonomi ASEAN.",
        summaryEn:
          "LSTM forecasting to explore how AI adoption may shape ASEAN economic trends.",
        stack: ["Python", "TensorFlow", "Notebook"],
      },
      {
        name: "IDISbot",
        href: "https://github.com/Julio-analyst/IDISbot",
        summary:
          "RAG chatbot untuk pertanyaan investasi dengan data pasar realtime dan disclaimer edukatif.",
        summaryEn:
          "RAG chatbot for investment Q&A with live market data and an educational disclaimer.",
        stack: ["Python", "OpenAI", "FAISS"],
      },
      {
        name: "RAGSYSTEM-renewabledocument",
        href: "https://github.com/Julio-analyst/RAGSYSTEM-renewabledocument",
        summary:
          "Eksperimen RAG untuk eksplorasi dokumen terkait energi terbarukan.",
        summaryEn:
          "RAG experiment for renewable-energy document exploration.",
        stack: ["Python", "RAG", "Docs"],
      },
      {
        name: "gender-detection-cnn-streamlit",
        href: "https://github.com/Julio-analyst/gender-detection-cnn-streamlit",
        summary:
          "Aplikasi Streamlit untuk gender detection berbasis CNN.",
        summaryEn:
          "Streamlit app for CNN-based gender detection.",
        stack: ["Python", "Streamlit", "CNN"],
      },
      {
        name: "gender-detection-cnn",
        href: "https://github.com/Julio-analyst/gender-detection-cnn",
        summary:
          "Baseline CNN project untuk eksperimen gender detection.",
        summaryEn:
          "Baseline CNN project for gender-detection experiments.",
        stack: ["Python", "CNN", "Notebook"],
      },
      {
        name: "gender-voice-detection",
        href: "https://github.com/Julio-analyst/gender-voice-detection",
        summary:
          "Model deteksi gender berbasis suara.",
        summaryEn:
          "Voice-based gender detection model.",
        stack: ["Python", "Audio", "ML"],
      },
      {
        name: "Riau-Temp-GWL-Regression",
        href: "https://github.com/Julio-analyst/Riau-Temp-GWL-Regression",
        summary:
          "Analisis pengaruh temperatur terhadap groundwater level di Riau dengan regresi linear.",
        summaryEn:
          "Analyzes the effect of temperature on groundwater level in Riau using linear regression.",
        stack: ["R", "Regression", "Analysis"],
      },
      {
        name: "lampung-rumah-knn-classifier",
        href: "https://github.com/Julio-analyst/lampung-rumah-knn-classifier",
        summary:
          "KNN classifier untuk eksperimen klasifikasi rumah di Lampung.",
        summaryEn:
          "KNN classifier experiment for Lampung house classification.",
        stack: ["Python", "KNN", "Notebook"],
      },
    ],
  },
  {
    title: "Data Engineering & Streaming",
    titleEn: "Data Engineering & Streaming",
    description:
      "Repositori yang fokus pada CDC, pipeline streaming, replication, dan monitoring data.",
    descriptionEn:
      "Repositories focused on CDC, streaming pipelines, replication, and data monitoring.",
    repos: [
      {
        name: "debezium-cdc-mirroring",
        href: "https://github.com/Julio-analyst/debezium-cdc-mirroring",
        summary:
          "Real-time PostgreSQL replication dengan Debezium, Kafka, dan validation scripts.",
        summaryEn:
          "Real-time PostgreSQL replication using Debezium, Kafka, and validation scripts.",
        stack: ["Kafka", "Debezium", "PostgreSQL"],
      },
      {
        name: "cdc-psql-clickhouse",
        href: "https://github.com/Julio-analyst/cdc-psql-clickhouse",
        summary:
          "CDC pipeline dari PostgreSQL ke ClickHouse.",
        summaryEn:
          "CDC pipeline from PostgreSQL to ClickHouse.",
        stack: ["CDC", "PostgreSQL", "ClickHouse"],
      },
      {
        name: "flink-datastream-monitoring",
        href: "https://github.com/Julio-analyst/flink-datastream-monitoring",
        summary:
          "Dockerized streaming stack untuk monitoring dan analytics near real-time.",
        summaryEn:
          "Dockerized streaming stack for near real-time monitoring and analytics.",
        stack: ["Flink", "Kafka", "Superset"],
      },
      {
        name: "hadoop-food-trade-analysis",
        href: "https://github.com/Julio-analyst/hadoop-food-trade-analysis",
        summary:
          "Analisis perdagangan pangan dengan Hadoop.",
        summaryEn:
          "Food trade analysis with Hadoop.",
        stack: ["Hadoop", "Python", "Analytics"],
      },
    ],
  },
  {
    title: "Profile & Utility",
    titleEn: "Profile & Utility",
    description:
      "Repositori pendukung untuk profil GitHub, showcase, dan eksperimen ringan.",
    descriptionEn:
      "Supporting repositories for GitHub profile, showcase, and lightweight experiments.",
    repos: [
      {
        name: "Julio-analyst",
        href: "https://github.com/Julio-analyst/Julio-analyst",
        summary:
          "Profile README sebagai landing page personal GitHub.",
        summaryEn:
          "Profile README as the personal GitHub landing page.",
        stack: ["Markdown", "GitHub README"],
      },
      {
        name: "snk",
        href: "https://github.com/Julio-analyst/snk",
        summary:
          "Fork snake animation untuk grafik kontribusi GitHub.",
        summaryEn:
          "Snake animation fork for GitHub contribution graphics.",
        stack: ["TypeScript", "SVG", "Automation"],
      },
    ],
  },
];

export const certificates = [
  {
    title: "Data Preparation in Data Science using R",
    titleEn: "Data Preparation in Data Science using R",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Sep 2024",
    credentialId: "#DQLABDTWR1KNNFHT",
    description:
      "Pembersihan dan persiapan data dengan R untuk analisis yang lebih siap pakai.",
    descriptionEn:
      "Data cleaning and preparation with R for analysis-ready workflows.",
    skills: ["Data Analysis", "Data Science"],
  },
  {
    title: "Data Visualization in Data Science using R",
    titleEn: "Data Visualization in Data Science using R",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABDTVISEMSTOB",
    description:
      "Pendalaman visualisasi data menggunakan ggplot2 untuk komunikasi insight yang efektif.",
    descriptionEn:
      "Deeper work with ggplot2 for effective data storytelling and insight communication.",
    skills: ["Data Analysis", "Data Visualization"],
  },
  {
    title: "Introduction to Data Analytics on Google Cloud",
    titleEn: "Introduction to Data Analytics on Google Cloud",
    issuer: "Google Cloud",
    issuerEn: "Google Cloud",
    published: "Jan 2024",
    credentialId: "Google Cloud skill badge",
    description:
      "Pengenalan ekosistem analytics di Google Cloud.",
    descriptionEn:
      "Introduction to the analytics ecosystem on Google Cloud.",
    skills: ["Cloud Analytics", "Google Cloud"],
  },
  {
    title: "Statistics using R for Data Science",
    titleEn: "Statistics using R for Data Science",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABINTS1QUTICD",
    description:
      "Dasar statistik untuk analisis data yang lebih kuat dan terukur.",
    descriptionEn:
      "Statistics fundamentals for stronger, more measurable data analysis.",
    skills: ["Data Analytics", "Data Visualization"],
  },
  {
    title: "Fundamental Data Visualization using R",
    titleEn: "Fundamental Data Visualization using R",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABINTR1TCJDFI",
    description:
      "Fundamental visualisasi data sebagai alat komunikasi insight.",
    descriptionEn:
      "Fundamentals of data visualization as a communication tool for insights.",
    skills: ["Data Analytics", "Data Visualization"],
  },
  {
    title: "R for Data Professional - Part 3",
    titleEn: "R for Data Professional - Part 3",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABRFDPGLOHWB",
    description:
      "Lanjutan pembelajaran R untuk workflow data professional.",
    descriptionEn:
      "Advanced R learning for data-professional workflows.",
    skills: ["Statistical Data Analysis", "Analisis Data"],
  },
  {
    title: "R for Data Professional - Part 2",
    titleEn: "R for Data Professional - Part 2",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABRFDPRAVHQQ",
    description:
      "Penguatan skill R untuk analisis dan praktik data profesional.",
    descriptionEn:
      "Strengthening R skills for analysis and professional data practice.",
    skills: ["Statistical Data Analysis", "Analisis Data"],
  },
  {
    title: "R for Data Professional - Part 1",
    titleEn: "R for Data Professional - Part 1",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABRFDPSCIIVI",
    description:
      "Dasar awal R untuk kebutuhan profesional data.",
    descriptionEn:
      "Introductory R foundations for professional data work.",
    skills: ["Statistical Data Analysis", "Analisis Data"],
  },
  {
    title: "R Fundamental for Data Science",
    titleEn: "R Fundamental for Data Science",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABINTR1ETKGNN",
    description:
      "Fondasi R untuk pemodelan dan analisis data science.",
    descriptionEn:
      "R foundations for data-science modeling and analysis.",
    skills: ["Statistical Data Analysis", "Analisis Data"],
  },
  {
    title: "Introduction to Data Science with R",
    titleEn: "Introduction to Data Science with R",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABBGINRKEGBNF",
    description:
      "Pengenalan alur kerja data science dengan R.",
    descriptionEn:
      "Introduction to the data-science workflow using R.",
    skills: ["Analisis Data", "Data Analysis"],
  },
  {
    title: "Data Wrangling Python",
    titleEn: "Data Wrangling Python",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABDTWP1KOVTRC",
    description:
      "Teknik data wrangling dengan Python untuk membersihkan dan menyiapkan data.",
    descriptionEn:
      "Python data-wrangling techniques for cleaning and preparing datasets.",
    skills: ["Data Wrangling", "Python"],
  },
  {
    title: "Python Fundamental for Data Science",
    titleEn: "Python Fundamental for Data Science",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABINTP1PLOFNB",
    description:
      "Dasar Python untuk kebutuhan data science.",
    descriptionEn:
      "Python fundamentals for data-science work.",
    skills: ["Python", "Analisis Data"],
  },
  {
    title: "Introduction to Data Science with Python",
    titleEn: "Introduction to Data Science with Python",
    issuer: "DQLab",
    issuerEn: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABINTP1AMRIRQ",
    description:
      "Pengenalan data science dengan Python untuk analisis dan eksplorasi data.",
    descriptionEn:
      "Introduction to data science with Python for analysis and exploration.",
    skills: ["Data Analytics", "Python"],
  },
];

export const achievements = [
  {
    title: "Finalist RASIO 8.0",
    titleEn: "RASIO 8.0 Finalist",
    description: "Top 10 finalist in the infographic track for AI impact on ASEAN industry and economy.",
    descriptionEn:
      "Top 10 finalist in the infographic track exploring AI's economic and industry impact across ASEAN.",
    type: "Competition",
  },
  {
    title: "Semifinalist Enterns IBC",
    titleEn: "Enterns IBC Semifinalist",
    description: "Reached the semifinal stage in an international business case competition.",
    descriptionEn: "Reached the semifinal stage in an international business case competition.",
    type: "Competition",
  },
  {
    title: "Data Scientist Intern at Telkom",
    titleEn: "Data Scientist Intern at Telkom",
    description: "Built a RAG chatbot and supporting data pipelines inside the AI & Automation division.",
    descriptionEn:
      "Built a retrieval-augmented generation chatbot and supporting data pipelines within the AI & Automation division.",
    type: "Internship",
  },
];

export const activityPillars = [
  {
    title: "Learning in public",
    titleEn: "Learning in public",
    description:
      "Share experiments, notes, and useful findings so the portfolio feels active and real.",
    descriptionEn:
      "Share experiments, notes, and useful findings so the portfolio feels active and verifiable.",
  },
  {
    title: "Community leadership",
    titleEn: "Community leadership",
    description:
      "Show committee roles, organizing work, and team leadership from campus activities.",
    descriptionEn:
      "Show committee roles, organizing work, and leadership experience from campus activities.",
  },
  {
    title: "Business ownership",
    titleEn: "Business ownership",
    description:
      "Include the Bakmi Rempah story to show ownership, operations, and growth outside campus.",
    descriptionEn:
      "Include the Bakmi Rempah story to demonstrate small-business operations, growth, and customer focus.",
  },
  {
    title: "Future activities",
    titleEn: "Future activities",
    description:
      "Keep room for mentoring, workshops, speaking, or LinkedIn articles as new proof points.",
    descriptionEn:
      "Reserve space for mentoring, workshops, speaking, and published articles as future proof points.",
  },
];

export const resumeSections = [
  {
    title: "Profile summary",
    description:
      "Final-year Data Science student at ITERA with hands-on experience in ML, deep learning, and MLOps.",
    descriptionEn:
      "Final-year Data Science student at ITERA with practical experience in machine learning, deep learning, and MLOps.",
  },
  {
    title: "Experience focus",
    description:
      "End-to-end ML pipelines, RAG assistants, CDC replication, dashboards, and production-minded delivery.",
    descriptionEn:
      "End-to-end ML pipelines, retrieval-augmented assistants, change data capture replication, dashboards, and production-focused delivery.",
  },
  {
    title: "Current direction",
    description:
      "Targeting internships and roles that combine analysis, engineering discipline, and business storytelling.",
    descriptionEn:
      "Seeking internships and roles that blend analytical skills, engineering discipline, and business storytelling.",
  },
];

export const educationHistory = [
  {
    school: "Institut Teknologi Sumatera (ITERA)",
    period: "Aug 2022 - Present",
    detail: "Undergraduate in Data Science, Science Faculty.",
    detailEn: "Undergraduate degree in Data Science, Faculty of Science.",
    note: "Final-year student",
    noteEn: "Final-year student",
  },
  {
    school: "SMAN 2 Bogor",
    period: "Jul 2019 - May 2022",
    detail: "High School Diploma in MIPA, 87.00/100.00",
    detailEn: "High school diploma (science stream), GPA equivalent 87/100.",
    note: "Bogor, Indonesia",
    noteEn: "Bogor, Indonesia",
  },
];

export const workHistory = [
  {
    company: "PT Telekomunikasi Indonesia",
    period: "Jun 2025 - Dec 2025",
    role: "Data Scientist Intern | Artificial Intelligence & Automation Division",
    roleEn: "Data Scientist Intern | AI & Automation Division",
    detail:
      "Built an AI-powered RAG chatbot, connected knowledge sources, and supported near real-time analytics pipelines.",
    detailEn:
      "Developed a retrieval-augmented chatbot, integrated knowledge sources, and supported near real-time analytics pipelines.",
  },
  {
    company: "Rajawali Academy",
    period: "Jul 2024 - Aug 2024",
    role: "Internship",
    roleEn: "Intern",
    detail:
      "Automated assessment and scoring workflows, supported websites and identity systems, and helped marketing execution.",
    detailEn:
      "Automated assessment workflows, supported web and identity systems, and assisted marketing execution.",
  },
  {
    company: "Bakmi Rempah",
    period: "Jan 2021 - May 2023",
    role: "Owner",
    roleEn: "Owner",
    detail:
      "Managed operations, inventory, cash flow, digital promotion, product expansion, and business licensing.",
    detailEn:
      "Managed daily operations, inventory, finances, digital marketing, product expansion, and licensing.",
  },
];

export const organizationHistory = [
  {
    organization: "DAMASKUS",
    period: "Jan 2024 - Present",
    role: "Capo",
    roleEn: "Capo",
    detail: "Led sports events and helped run activities for the Data Science community at ITERA.",
    detailEn: "Led sports events and supported community activities for the Data Science student group at ITERA.",
  },
  {
    organization: "Magenta 22",
    period: "Oct 2022 - Dec 2022",
    role: "Chief Committee",
    roleEn: "Chief of Committee",
    detail: "Coordinated multiple divisions and committee members for a 140+ participant event.",
    detailEn: "Coordinated divisions and committee members for an event with 140+ participants.",
  },
  {
    organization: "First Gathering D'23",
    period: "2023",
    role: "Head of Division, Field Committee",
    roleEn: "Head of Division, Field Committee",
    detail: "Managed field staff and event flow for 250+ participants.",
    detailEn: "Managed field operations and staff for an event with over 250 participants.",
  },
];
