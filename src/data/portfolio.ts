export interface ProjectCaseStudy {
  slug: string;
  title: string;
  titleEn: string;
  shortTitle: string;
  shortTitleEn: string;
  category: string;
  categoryEn: string;
  badge: string;
  badgeEn: string;
  period: string;
  institution: string;
  role: string;
  roleEn: string;
  thumbnail: string;
  summary: string;
  summaryEn: string;
  problem: string;
  problemEn: string;
  users: string;
  usersEn: string;
  solution: string;
  solutionEn: string;
  personalContribution: string[];
  personalContributionEn: string[];
  stack: { name: string; role: string; roleEn: string }[];
  metrics: { label: string; labelEn: string; value: string }[];
  architectureDiagram?: string;
  screenshots: { url: string; caption: string; captionEn: string }[];
  limitations: string[];
  limitationsEn: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const site = {
  name: "Farrel Julio Akbar",
  role: "Data & Technology Problem Solver",
  roleEn: "Data & Technology Professional",
  subRole: "Data Analytics & BI • Data Engineering • AI & Automation",
  subRoleEn: "Data Analytics & BI • Data Engineering • AI & Automation",
  tagline: "Mengolah data menjadi dashboard monitoring, sistem integrasi real-time, dan aplikasi AI untuk mendukung keputusan bisnis dan kebijakan.",
  taglineEn: "Transforming data into monitoring dashboards, real-time integration pipelines, and AI applications to support strategic business and policy decisions.",
  location: "Bogor & Lampung, Indonesia",
  email: "farelrel12345@gmail.com",
  phone: "+62 817-7416-0107",
  github: "https://github.com/Julio-analyst",
  linkedin: "https://www.linkedin.com/in/farrel-julio-427143288/",
  cvPath: "/farrel-julio-cv.pdf",
  avatarUrl: "/profile.jpg",
  avatarTransparent: "/profile-transparent.png",
  bio: "Lulusan Sains Data Institut Teknologi Sumatera dengan pengalaman lintas industri di Bank Indonesia dan Telkom Indonesia. Berfokus pada business intelligence, data engineering, otomasi alur kerja, dan solusi AI yang teruji.",
  bioEn: "Data Science graduate from Institut Teknologi Sumatera with industry experience at Bank Indonesia and Telkom Indonesia. Focused on business intelligence, data engineering, workflow automation, and production-tested AI solutions.",
};

export const navLinks = [
  { href: "/", label: "Home", labelEn: "Home" },
  { href: "/resume", label: "Resume", labelEn: "Resume" },
  { href: "/portfolio", label: "Portfolio", labelEn: "Portfolio" },
  { href: "/achievements", label: "Prestasi", labelEn: "Achievements" },
  { href: "/other-activity", label: "Aktivitas & Kepemimpinan", labelEn: "Activities & Leadership" },
];

export const heroStats = [
  {
    value: "9 Komoditas",
    valueEn: "9 Commodities",
    label: "Sistem EWS & monitoring inflasi harga pangan di 15 kab/kota Lampung",
    labelEn: "EWS & food price inflation monitoring across 15 regencies in Lampung",
  },
  {
    value: "5–80 Juta Baris",
    valueEn: "5–80M Rows",
    label: "Pengujian benchmark performa CDC (PeerDB vs Debezium)",
    labelEn: "CDC replication benchmark simulation (PeerDB vs Debezium)",
  },
  {
    value: "~30% Efisiensi",
    valueEn: "~30% Efficiency",
    label: "Peningkatan kecepatan temu balik pedoman via RAG chatbot & n8n",
    labelEn: "Information retrieval speed improvement via RAG chatbot & n8n",
  },
];

export const institutionBadges = [
  {
    name: "Bank Indonesia",
    sub: "Data Science Intern (FPKP)",
    subEn: "Data Science Intern (FPKP)",
    logo: "/logo-bank-indonesia-transparent.png",
    period: "Mei 2026 – Sekarang",
    periodEn: "May 2026 – Present",
  },
  {
    name: "Telkom Indonesia",
    sub: "Data Scientist Intern (AI & Automation)",
    subEn: "Data Scientist Intern (AI & Automation)",
    logo: "/logo_telkom.svg",
    period: "Jun 2025 – Des 2025",
    periodEn: "Jun 2025 – Dec 2025",
  },
  {
    name: "Sains Data ITERA",
    sub: "Sarjana Sains Data (IPK 3,00)",
    subEn: "Bachelor of Data Science (GPA 3.00)",
    logo: "/logo-sains data itera.png",
    period: "2022 – 2026",
    periodEn: "2022 – 2026",
  },
];

export const whatPeopleSayAboutMe = [
  {
    title: "Rekomendasi Magang — Asyraf Ilmansyah Hia",
    titleEn: "Internship Recommendation — Asyraf Ilmansyah Hia",
    description:
      "Sangat menyenangkan bekerja bersama Farrel selama masa magangnya. Dia secara konsisten menunjukkan etos kerja yang kuat, semangat belajar yang tinggi, dan sikap yang sangat positif. Farrel menyelesaikan tugas-tugasnya dengan penuh ketelitian dan menunjukkan potensi besar untuk peran-peran masa depan. Saya sangat merekomendasikan Farrel kepada rekruter atau organisasi mana pun yang mencari anggota tim yang andal dan cakap.",
    descriptionEn:
      "It was a pleasure working with Farrel during his internship. He consistently demonstrated a strong work ethic, eagerness to learn, and a positive attitude. Farrel completed his tasks with diligence and showed great potential for future roles. I truly enjoyed mentoring him and would gladly recommend him to any recruiter or organization looking for a reliable and capable team member.",
    issuer: "Asyraf Ilmansyah Hia",
    issuerRole: "Data Analytics & AI Team Lead at Telkom Indonesia",
  },
];

export const skills = [
  {
    category: "Analytics & Business Intelligence",
    categoryEn: "Analytics & Business Intelligence",
    summary: "Eksplorasi data, perumusan indikator, dan penyajian insight visual untuk pengambil keputusan.",
    summaryEn: "Data exploration, KPI formulation, and visual storytelling for strategic decision makers.",
    items: ["Power BI", "Looker Studio", "Python (Pandas, NumPy)", "R (ggplot2)", "SQL", "Excel", "Time Series Analysis", "PCA & Volatility Modeling"],
  },
  {
    category: "Data Engineering & Streaming",
    categoryEn: "Data Engineering & Streaming",
    summary: "Membangun saluran integrasi data real-time, replikasi database, dan sistem analitik terdistribusi.",
    summaryEn: "Building real-time data pipelines, database replication, and distributed analytics systems.",
    items: ["Change Data Capture (CDC)", "Debezium", "PeerDB", "Apache Kafka", "Apache Flink", "PostgreSQL", "ClickHouse", "BigQuery", "Docker"],
  },
  {
    category: "AI, NLP & Automation",
    categoryEn: "AI, NLP & Automation",
    summary: "Orkestrasi alur kerja cerdas, pencarian dokumen berbasis vektor (RAG), dan automasi proses.",
    summaryEn: "Intelligent workflow orchestration, vector-based document retrieval (RAG), and process automation.",
    items: ["n8n Workflow Automation", "RAG (Retrieval-Augmented Generation)", "OpenAI & Groq API", "Pinecone & Supabase Vector", "Streamlit", "Telegram Bot API"],
  },
  {
    category: "MLOps & System Observability",
    categoryEn: "MLOps & System Observability",
    summary: "Pelatihan model, pelacakan eksperimen, deployment kontainer, dan pemantauan performa sistem.",
    summaryEn: "Model training, experiment tracking, containerized deployment, and system health observability.",
    items: ["MLflow", "DVC", "Docker", "GitHub Actions CI/CD", "Grafana", "Prometheus", "Percona Monitoring", "FastAPI / Gradio"],
  },
];

export const caseStudies: ProjectCaseStudy[] = [
  {
    slug: "food-price-monitoring-ews",
    title: "Sistem Pemantauan Harga Pangan & Early Warning System (EWS)",
    titleEn: "Food Price Monitoring & Early Warning System (EWS)",
    shortTitle: "EWS & Monitoring Harga Pangan",
    shortTitleEn: "Food Price EWS & Monitoring",
    category: "Analytics, BI & Regional Policy",
    categoryEn: "Analytics, BI & Regional Policy",
    badge: "Bank Indonesia KPw Lampung",
    badgeEn: "Bank Indonesia Lampung",
    period: "2026",
    institution: "Bank Indonesia, Kantor Perwakilan Provinsi Lampung",
    role: "Data Science Intern (FPKP)",
    roleEn: "Data Science Intern (FPKP)",
    thumbnail: "/projects/ews/dashboard-monitoring.png",
    summary: "Sistem monitoring terintegrasi dan sistem peringatan dini (EWS) untuk 9 komoditas pangan strategis di 15 kabupaten/kota Lampung menggunakan data PIHPS, formula volatilitas, pembobotan PCA, dan dashboard interaktif.",
    summaryEn: "Integrated food price monitoring and Early Warning System (EWS) for 9 strategic commodities across 15 regencies in Lampung using PIHPS data, volatility adjustment, PCA weighting, and interactive dashboards.",
    problem: "Fluktuasi harga komoditas pangan pokok (volatile food) di daerah sering kali terjadi mendadak dan berdampak langsung pada laju inflasi daerah serta daya beli masyarakat. Analis ekonomi dan Tim Pengendalian Inflasi Daerah (TPID) membutuhkan alat deteksi dini yang tidak hanya mencatat harga historis, tetapi mampu mendeteksi anomali harga sebelum lonjakan ekstrem terjadi.",
    problemEn: "Volatile food commodity price swings often trigger sudden regional inflation and affect consumer purchasing power. Economic analysts and the Regional Inflation Control Team (TPID) needed an early warning mechanism capable of flagging price anomalies before extreme spikes materialize.",
    users: "Ekonom & analis Kantor Perwakilan Bank Indonesia Provinsi Lampung, Tim Pengendalian Inflasi Daerah (TPID), dan Pemerintah Provinsi Lampung.",
    usersEn: "Central Bank economists, regional analysts at Bank Indonesia Lampung, TPID, and Regional Government stakeholders.",
    solution: "Membangun pipeline data end-to-end yang mengambil data harian PIHPS, melakukan validasi dan pembersihan otomatis, menghitung Compound Quarterly Growth Rate (CQGR), CAGR, volatilitas bergulir, serta indikator kuartalan (Q-IPA) dan tahunan (A-IPA). Pembobotan gamma berbasis Principal Component Analysis (PCA) digunakan untuk menyusun skor komposit status: Normal (<0,5), Waspada (0,5–<1,0), dan Peringatan (≥1,0).",
    solutionEn: "Engineered an end-to-end data pipeline processing daily PIHPS data, automated validation, calculating Compound Quarterly Growth Rate (CQGR), CAGR, rolling volatility, quarterly IPA, and annual IPA. PCA-derived gamma weights produce a composite anomaly score categorized into Normal (<0.5), Alert (0.5–<1.0), and Warning (≥1.0).",
    personalContribution: [
      "Mengembangkan prototype analitik dan formula kalkulasi statistik dari FAO (volatility-adjusted growth, Q-IPA, A-IPA, pembobotan PCA) secara mandiri menggunakan Python dan Excel.",
      "Merancang struktur penyimpanan data terpusat dan logika transformasi data PIHPS untuk 9 komoditas strategis.",
      "Mendesain panel visualisasi dashboard di Power BI dan Looker Studio untuk pemantauan tren, ranking risiko harga, dan heatmap harian status anomali.",
      "Menyajikan hasil analisis kepada analis senior Bank Indonesia guna mendukung rekomendasi kebijakan waktu intervensi pasar.",
    ],
    personalContributionEn: [
      "Independently engineered the FAO statistical formulas and analytical prototypes (volatility-adjusted growth, Q-IPA, A-IPA, PCA gamma weighting) using Python and Excel.",
      "Designed the centralized data storage schema and automated PIHPS transformation logic for 9 strategic commodities.",
      "Created dashboard panels in Power BI and Looker Studio displaying price trends, risk rankings, and daily anomaly status heatmaps.",
      "Presented analytical findings to senior economists to support market intervention timing and policy recommendations.",
    ],
    stack: [
      { name: "Python (Pandas, NumPy)", role: "Validasi, pembersihan data harian, dan kalkulasi statistik", roleEn: "Data validation, cleaning, and statistical indicator calculation" },
      { name: "PIHPS API / Data", role: "Sumber data harga pangan resmi tingkat produsen dan konsumen", roleEn: "Official food price benchmark dataset at producer & consumer levels" },
      { name: "Power BI & Looker Studio", role: "Penyusunan dashboard eksekutif, ranking risiko, dan heatmap", roleEn: "Executive dashboard delivery, risk ranking, and daily status heatmaps" },
      { name: "PCA & Time Series Analysis", role: "Pembobotan gamma objektif dan penentuan threshold status risiko", roleEn: "Objective gamma weighting and risk status threshold modeling" },
    ],
    metrics: [
      { label: "Komoditas Terpantau", labelEn: "Monitored Commodities", value: "9 Komoditas Strategis" },
      { label: "Cakupan Wilayah", labelEn: "Regional Coverage", value: "15 Kabupaten/Kota" },
      { label: "Klasifikasi Risiko", labelEn: "Risk Classification", value: "Normal, Waspada, Peringatan" },
      { label: "Pembaruan Data", labelEn: "Data Frequency", value: "Harian (Daily PIHPS)" },
    ],
    screenshots: [
      {
        url: "/projects/ews/dashboard-monitoring.png",
        caption: "Panel Monitoring Harga Komoditas Strategis: Menampilkan harga aktual vs HAP (Harga Acuan Penjualan), gap persentase, dan tren harian.",
        captionEn: "Strategic Commodity Monitoring Panel: Displaying current price vs benchmark (HAP), gap percentages, and historical movement.",
      },
      {
        url: "/projects/ews/risk-heatmap.png",
        caption: "Panel Peringatan Dini & Heatmap Risiko: Klasifikasi status Price Alert/Watch/Normal serta heatmap matriks risiko harian.",
        captionEn: "Early Warning & Risk Heatmap Panel: Price Alert/Watch/Normal classification with daily anomaly status matrix.",
      },
      {
        url: "/projects/ews/pipeline-architecture.png",
        caption: "Diagram Alur Pipeline Data EWS: Dari konsumsi data mentah PIHPS, transformasi terpusat, hingga dua panel analitik.",
        captionEn: "EWS Pipeline Architecture: From raw PIHPS ingestion, centralized transformation, to dual analytical delivery panels.",
      },
    ],
    limitations: [
      "Implementasi produksi pada website kolaborasi BI & Pemprov didelegasikan ke vendor mitra; Farrel bertanggung jawab penuh atas formulasi statistik, pembersihan data, dan prototype dashboard.",
      "Model beroperasi sebagai pendukung keputusan (*decision support*), bukan pengendali harga otomatis tanpa intervensi manusia.",
    ],
    limitationsEn: [
      "Production deployment on the institutional web portal was handled by a partner vendor; Farrel was responsible for analytical prototyping, formulas, and dashboards.",
      "The system serves as decision-support tooling, not an automated price regulator.",
    ],
  },
  {
    slug: "debezium-cdc-replication-benchmarking",
    title: "Replikasi Database Real-Time CDC & Benchmarking Performa (PeerDB vs Debezium)",
    titleEn: "Real-Time CDC Replication & Performance Benchmarking (PeerDB vs Debezium)",
    shortTitle: "CDC Replication & Observability",
    shortTitleEn: "CDC Replication & Observability",
    category: "Data Engineering & Systems",
    categoryEn: "Data Engineering & Systems",
    badge: "Tugas Akhir ITERA & Telkom",
    badgeEn: "Bachelor Thesis & Telkom",
    period: "2025–2026",
    institution: "Institut Teknologi Sumatera (Tugas Akhir) & PT Telkom Indonesia",
    role: "Data Engineer / Researcher",
    roleEn: "Data Engineer / Researcher",
    thumbnail: "/projects/cdc/grafana-dashboard.png",
    summary: "Implementasi pipeline Change Data Capture (CDC) real-time menggunakan Debezium, Kafka, dan PostgreSQL, disertai riset komparasi empiris terhadap PeerDB pada beban 5 hingga 80 juta baris dengan pemantauan Grafana dan Prometheus.",
    summaryEn: "Implementation of real-time log-based Change Data Capture (CDC) pipelines using Debezium, Kafka, and PostgreSQL, accompanied by an empirical benchmark against PeerDB across 5M to 80M rows monitored via Grafana and Prometheus.",
    problem: "Sistem pengolahan data analitik konvensional yang mengandalkan batch ETL berkala sering memicu latensi data tinggi dan membebani database operasional. Tim membutuhkan replikasi near real-time yang stabil, efisien terhadap sumber daya CPU/RAM, serta dapat diandalkan pada volume data besar.",
    problemEn: "Conventional batch ETL pipelines introduce high data latency and put heavy query overhead on operational transactional databases. Modern data teams require near real-time replication that balances latency, CPU/RAM utilization, and high data volume throughput.",
    users: "Data engineers, database administrators (DBA), dan tim platform analitik real-time.",
    usersEn: "Data engineers, database administrators (DBAs), and real-time data platform teams.",
    solution: "Merancang arsitektur replikasi berbasis log database WAL (Write-Ahead Log) menggunakan Debezium Source Connector, Apache Kafka Broker, dan JDBC Sink Connector untuk mereplikasi perubahan data ke target PostgreSQL. Melakukan eksperimen terukur pada beban 5M, 10M, 20M, 40M, dan 80M baris dengan 5 kali replikasi per skenario di DigitalOcean Droplet, dipantau menggunakan Node Exporter, Prometheus, dan Grafana.",
    solutionEn: "Architected a log-based WAL replication pipeline using Debezium Source Connector, Kafka Broker, and JDBC Sink Connector to replicate changes into a target database. Conducted rigorous benchmark simulations on 5M, 10M, 20M, 40M, and 80M row insert workloads with 5 repetitions per scenario on DigitalOcean, monitored via Prometheus, Node Exporter, and Grafana.",
    personalContribution: [
      "Mengonfigurasi dan mengorkestrasi container Docker untuk PostgreSQL (Source & Target), Debezium, Kafka Connect, Zookeeper/Kafka Broker, Prometheus, dan Grafana.",
      "Menulis skrip PowerShell dan SQL untuk pengujian otomatisasi beban insert serta validasi integritas data antar database.",
      "Membangun dashboard observabilitas di Grafana untuk memantau metrik real-time: CPU busy, RAM utilization, network traffic, dan disk I/O.",
      "Menganalisis hasil benchmark: menemukan bahwa PeerDB lebih efisien pada beban kecil (<10M), sedangkan Debezium jauh lebih stabil dan unggul pada beban skala besar (40M–80M).",
    ],
    personalContributionEn: [
      "Configured and orchestrated Docker containers for PostgreSQL (Source & Target), Debezium, Kafka Connect, Kafka Broker, Prometheus, and Grafana.",
      "Authored PowerShell automation scripts and SQL routines for bulk insert workload testing and data integrity verification.",
      "Built custom Grafana observability dashboards monitoring CPU utilization, RAM usage, network throughput, and disk I/O.",
      "Analyzed benchmark results: established that PeerDB excels on smaller workloads (<10M rows), while Debezium exhibits superior stability on massive continuous loads (40M–80M rows).",
    ],
    stack: [
      { name: "Debezium Engine", role: "Menangkap mutasi data dari PostgreSQL Write-Ahead Log (WAL)", roleEn: "Captures database change events directly from PostgreSQL WAL" },
      { name: "Apache Kafka & Connect", role: "Message broker terdistribusi pengantar event stream perubahan data", roleEn: "Distributed streaming platform transporting change event records" },
      { name: "PostgreSQL (Source & Target)", role: "Database sumber transaksi dan database target analitik (Upsert)", roleEn: "Source transactional database and target analytical replica (Upsert)" },
      { name: "Grafana & Prometheus", role: "Observabilitas real-time metrik sistem, CPU, RAM, dan latensi", roleEn: "Real-time system observability for CPU, RAM, network, and latency" },
      { name: "Docker & DigitalOcean", role: "Lingkungan pengujian kontainer yang konsisten dan reproducible", roleEn: "Reproducible containerized test environment on cloud droplets" },
    ],
    metrics: [
      { label: "Beban Pengujian", labelEn: "Test Workload Scale", value: "5M – 80M Baris Data" },
      { label: "Replikasi Eksperimen", labelEn: "Experiment Repetitions", value: "5x per Skenario" },
      { label: "Temuan Beban Ringan", labelEn: "Light Workload Leader", value: "PeerDB (~43-81s pada 5-10M)" },
      { label: "Temuan Beban Berat", labelEn: "Heavy Workload Leader", value: "Debezium (Stabil hingga 80M)" },
    ],
    screenshots: [
      {
        url: "/projects/cdc/grafana-dashboard.png",
        caption: "Dashboard Observabilitas Grafana: Memantau CPU load, RAM used (43.4%), swap memory, dan disk space saat simulasi replikasi berlangsung.",
        captionEn: "Grafana Observability Dashboard: Real-time monitoring of CPU load, RAM used (43.4%), swap memory, and disk space during CDC simulation.",
      },
      {
        url: "/projects/cdc/cdc-architecture.png",
        caption: "Diagram Arsitektur Alur CDC: PSQL Source -> WAL -> Debezium Source Connector -> Event CDC (JSON) -> Kafka Broker -> JDBC Sink -> Target.",
        captionEn: "CDC Pipeline Architecture: PSQL Source -> WAL -> Debezium Source Connector -> Event CDC (JSON) -> Kafka Broker -> JDBC Sink -> Target.",
      },
      {
        url: "/projects/cdc/debezium-concept.png",
        caption: "Konsep Replikasi Debezium: Sinkronisasi real-time antar basis data lokal tanpa query batch berkala.",
        captionEn: "Debezium Replication Concept: Near real-time synchronization between local databases avoiding polling overhead.",
      },
    ],
    limitations: [
      "Eksperimen tugas akhir difokuskan pada beban insert-only untuk mengukur batas throughput maksimum; pengujian multi-node update/delete kompleks disarankan untuk riset lanjutan.",
      "Penelitian dilakukan pada DigitalOcean droplet tunggal berkapasitas terkontrol untuk isolasi parameter metrik.",
    ],
    limitationsEn: [
      "Thesis simulation focused on insert-only loads to measure peak throughput ceiling; multi-node update/delete benchmarking recommended for future work.",
      "Conducted on isolated DigitalOcean virtual droplet environment to maintain controlled metric parameters.",
    ],
    githubUrl: "https://github.com/Julio-analyst/debezium-cdc-mirroring",
  },
  {
    slug: "rag-chatbot-knowledge-automation",
    title: "Otomasi Asisten Pengetahuan RAG Berbasis n8n & Multi-Platform",
    titleEn: "Automated Knowledge RAG Chatbot using n8n & Multi-Platform Workflow",
    shortTitle: "RAG Chatbot Automation",
    shortTitleEn: "RAG Chatbot Automation",
    category: "AI & Workflow Automation",
    categoryEn: "AI & Workflow Automation",
    badge: "Telkom Indonesia",
    badgeEn: "Telkom Indonesia",
    period: "2025",
    institution: "PT Telekomunikasi Indonesia (Divisi AI & Otomasi)",
    role: "Data Scientist Intern",
    roleEn: "Data Scientist Intern",
    thumbnail: "/projects/rag/n8n-agent-workflow.png",
    summary: "Asisten AI interaktif berbasis Retrieval-Augmented Generation (RAG) yang diorkestrasi menggunakan n8n, menghubungkan penyimpanan Google Drive, Pinecone Vector Database, dan LLM untuk menjawab pedoman internal secara akurat melalui Telegram dan Web.",
    summaryEn: "Interactive Retrieval-Augmented Generation (RAG) assistant orchestrated via n8n, connecting Google Drive knowledge repositories, Pinecone Vector DB, and LLMs to answer internal inquiries accurately via Telegram and Web.",
    problem: "Karyawan dan administrator sering kali menghabiskan waktu signifikan mencari informasi di dalam ratusan halaman dokumen pedoman, SOP, dan regulasi internal yang tersimpan terpisah-pisah, mengakibatkan inefisiensi koordinasi.",
    problemEn: "Employees and administrators spend excessive hours navigating hundreds of pages across disparate SOPs, guidelines, and manuals, creating coordination friction and slow response times.",
    users: "Staf internal, administrator operasional, dan anggota tim yang memerlukan akses cepat ke panduan kerja Telkom.",
    usersEn: "Internal employees, operational administrators, and team members requiring rapid lookup of guidelines.",
    solution: "Merancang dua alur n8n terpisah: (1) Ingestion pipeline otomatis yang mendeteksi dokumen baru di Google Drive, memecah teks (*recursive text splitter*), menghasilkan embedding via OpenAI, dan menyimpannya di Pinecone. (2) AI Agent workflow yang menerima pesan chat (Telegram/Web), menelusuri potongan konteks relevan di vector store, lalu memformulasikan respons akurat dengan Groq/OpenAI.",
    solutionEn: "Built two distinct n8n workflows: (1) Automated ingestion pipeline triggering on Google Drive updates, chunking text with recursive character splitters, computing OpenAI embeddings, and indexing in Pinecone. (2) Conversational AI agent pipeline receiving inquiries, querying Pinecone, and synthesizing answers via Groq/OpenAI.",
    personalContribution: [
      "Merancang dan mengimplementasikan seluruh workflow otomasi n8n dari ingestion dokumen hingga integrasi antarmuka chat.",
      "Mengonfigurasi vector storage di Pinecone dan Supabase, serta menyetel parameter chunk size dan similarity search threshold.",
      "Mengintegrasikan webhook chat dengan bot Telegram (`dasboardadminfarrel bot`) dan aplikasi web Streamlit.",
      "Mencapai peningkatan efisiensi akses informasi internal bagi admin dan pengguna hingga ~30%.",
    ],
    personalContributionEn: [
      "Designed and implemented the complete n8n automation architecture from document ingestion to chat interface integration.",
      "Configured vector storage in Pinecone and Supabase, tuning chunk sizes and similarity retrieval thresholds.",
      "Connected chat webhooks with a live Telegram bot (`dasboardadminfarrel bot`) and Streamlit web UI.",
      "Achieved an estimated ~30% improvement in administrative information lookup efficiency.",
    ],
    stack: [
      { name: "n8n Workflow Automation", role: "Orkestrator alur kerja visual tanpa server untuk integrasi multi-aplikasi", roleEn: "Visual workflow orchestrator for end-to-end multi-app integration" },
      { name: "OpenAI & Groq LLMs", role: "Model bahasa untuk penalaran dan perumusan jawaban kontekstual", roleEn: "Large language models for context reasoning and accurate synthesis" },
      { name: "Pinecone / Supabase Vector", role: "Penyimpanan vektor berkecepatan tinggi untuk similarity search dokumen", roleEn: "High-performance vector database for semantic similarity search" },
      { name: "Telegram Bot API", role: "Antarmuka interaktif yang mudah diakses pengguna langsung dari ponsel", roleEn: "Mobile-first conversational interface accessible directly from smartphones" },
    ],
    metrics: [
      { label: "Peningkatan Efisiensi", labelEn: "Efficiency Gain", value: "~30% Lebih Cepat" },
      { label: "Pipeline Terintegrasi", labelEn: "Pipeline Architecture", value: "Dual n8n Workflows" },
      { label: "Kanal Komunikasi", labelEn: "Deployment Channels", value: "Telegram & Web App" },
      { label: "Vector Search", labelEn: "Vector Search Engine", value: "Pinecone + OpenAI" },
    ],
    screenshots: [
      {
        url: "/projects/rag/n8n-agent-workflow.png",
        caption: "Workflow AI Agent di n8n: Alur pesan masuk -> AI Agent -> Pinecone Vector Store -> Groq Chat Model -> Respons pengguna.",
        captionEn: "n8n AI Agent Workflow: Incoming message -> AI Agent -> Pinecone Vector Store -> Groq Chat Model -> User response.",
      },
      {
        url: "/projects/rag/n8n-ingestion-workflow.png",
        caption: "Workflow Ingestion Dokumen: Google Drive Trigger mendeteksi file baru -> Recursive Text Splitter -> Pinecone Embeddings.",
        captionEn: "Document Ingestion Workflow: Google Drive Trigger -> Recursive Character Text Splitter -> Pinecone Embeddings Indexing.",
      },
      {
        url: "/projects/rag/telegram-chat.png",
        caption: "Antarmuka Live Telegram Bot: Pengguna menanyakan SOP internal dan bot menjawab secara terstruktur disertai tautan pedoman terkait.",
        captionEn: "Live Telegram Bot Interface: User querying internal guidelines with the bot responding in structured, citation-backed answers.",
      },
    ],
    limitations: [
      "Dokumen internal yang ditampilkan pada portofolio publik disensor/disintesis demi menjaga kerahasiaan data perusahaan Telkom Indonesia.",
      "Kualitas jawaban sangat bergantung pada keteraturan struktur teks dokumen sumber yang diunggah ke Google Drive.",
    ],
    limitationsEn: [
      "Internal documentation shown on public demo is redacted/synthesized to adhere to Telkom enterprise confidentiality policies.",
      "Response fidelity depends directly on the structural quality of source documents uploaded to the knowledge drive.",
    ],
  },
  {
    slug: "gender-voice-detection-mlops",
    title: "Deteksi Gender dari Suara Berbasis Deep Learning & MLOps Platform",
    titleEn: "Voice Gender Classification Platform with End-to-End MLOps",
    shortTitle: "Voice Classification & MLOps",
    shortTitleEn: "Voice Classification & MLOps",
    category: "Machine Learning & MLOps",
    categoryEn: "Machine Learning & MLOps",
    badge: "Hugging Face & Open Source",
    badgeEn: "Hugging Face & Open Source",
    period: "2025",
    institution: "Institut Teknologi Sumatera (Proyek R&D Mandiri)",
    role: "ML Engineer / Developer",
    roleEn: "ML Engineer / Developer",
    thumbnail: "/projects/voice/huggingface-ui.png",
    summary: "Platform klasifikasi gender berbasis audio yang mengekstraksi fitur MFCC menggunakan Librosa, melatih model Deep Learning (RNN, LSTM, GRU), dan mengintegrasikan alur kerja MLOps (MLflow, DVC, CI/CD) hingga deployment di Hugging Face Spaces.",
    summaryEn: "Audio-based gender classification platform extracting MFCC features via Librosa, training Deep Learning models (RNN, LSTM, GRU), and integrating an MLOps pipeline (MLflow, DVC, CI/CD) deployed to Hugging Face Spaces.",
    problem: "Sering kali model machine learning audio berhenti pada notebook eksperimen tanpa pipeline deployment yang reproducible, version control data yang jelas, atau antarmuka yang dapat diuji langsung oleh pengguna umum.",
    problemEn: "Audio machine learning models often remain trapped in static research notebooks without reproducible pipelines, data versioning, or accessible user interfaces for real-time validation.",
    users: "Pengembang sistem biometrik suara, peneliti audio processing, dan pengguna interaktif.",
    usersEn: "Speech processing researchers, voice biometrics developers, and interactive web users.",
    solution: "Membangun sistem terstruktur: pemrosesan audio mentah menjadi MFCC (Mel-frequency cepstral coefficients), pelatihan arsitektur RNN/LSTM/GRU di TensorFlow/Keras, pelacakan metrik eksperimen dengan MLflow, pengelolaan versi dataset dengan DVC, serta kontainerisasi FastAPI/Gradio yang di-deploy otomatis via GitHub Actions ke Hugging Face Spaces.",
    solutionEn: "Architected a full cycle: raw audio preprocessing to MFCCs, deep learning training (RNN/LSTM/GRU) in TensorFlow/Keras, experiment tracking in MLflow, dataset versioning in DVC, and automated container deployment via GitHub Actions to Hugging Face Spaces.",
    personalContribution: [
      "Mengekstraksi fitur spektral audio menggunakan Librosa dan menyusun pipeline augmentasi data suara.",
      "Melatih dan membandingkan performa arsitektur RNN, LSTM, dan GRU untuk klasifikasi biner suara pria/wanita.",
      "Mengintegrasikan pelacakan metrik dan artefak model menggunakan MLflow dan DVC.",
      "Membangun antarmuka web interaktif dengan Gradio/FastAPI serta mengonfigurasi deployment Docker di Hugging Face Spaces.",
    ],
    personalContributionEn: [
      "Engineered spectral audio feature extraction using Librosa and structured data augmentation workflows.",
      "Trained and evaluated RNN, LSTM, and GRU architectures for binary voice gender classification.",
      "Integrated experiment metric logging and model artifact versioning using MLflow and DVC.",
      "Constructed the interactive Gradio/FastAPI web interface and configured Docker deployment on Hugging Face Spaces.",
    ],
    stack: [
      { name: "TensorFlow & Keras", role: "Arsitektur Deep Learning (RNN, LSTM, GRU) untuk klasifikasi sequence audio", roleEn: "Deep learning modeling (RNN, LSTM, GRU) for audio sequence classification" },
      { name: "Librosa", role: "Ekstraksi fitur audio: MFCC, Chroma, dan Spectral Contrast", roleEn: "Audio feature extraction: MFCCs, chroma, and spectral properties" },
      { name: "MLflow & DVC", role: "Version control data, model artifacts, dan experiment tracking", roleEn: "Dataset versioning, model artifact registry, and experiment tracking" },
      { name: "FastAPI & Gradio", role: "Backend inference dan antarmuka web interaktif pengguna", roleEn: "Inference backend and interactive user interface" },
      { name: "Hugging Face Spaces & Docker", role: "Cloud hosting dan kontainerisasi aplikasi produksi", roleEn: "Containerized cloud deployment on Hugging Face Spaces" },
    ],
    metrics: [
      { label: "Ekstraksi Fitur", labelEn: "Feature Extraction", value: "MFCC Spectral Audio" },
      { label: "Arsitektur Model", labelEn: "Model Architectures", value: "RNN, LSTM, GRU" },
      { label: "Deployment", labelEn: "Deployment Platform", value: "Hugging Face Spaces" },
      { label: "MLOps Stack", labelEn: "MLOps Tooling", value: "MLflow + DVC + CI/CD" },
    ],
    screenshots: [
      {
        url: "/projects/voice/huggingface-ui.png",
        caption: "Antarmuka Live di Hugging Face Spaces: Pengguna dapat mengunggah file audio (MP3, WAV, M4A) atau merekam suara langsung, memilih model, dan memperoleh hasil prediksi secara instan.",
        captionEn: "Live Hugging Face Spaces Interface: Users upload audio files or record voice directly, select models, and receive real-time classification.",
      },
    ],
    limitations: [
      "Performa model sangat dipengaruhi oleh tingkat kebisingan latar belakang (background noise) dan kualitas mikrofon pengirim.",
    ],
    limitationsEn: [
      "Inference accuracy can vary based on ambient background noise and input microphone fidelity.",
    ],
    githubUrl: "https://github.com/Julio-analyst/gender-voice-detection",
    liveUrl: "https://huggingface.co/spaces/Farrel-Akbar/gendervoicedetection",
  },
];

export const secondaryProjects = [
  {
    title: "impact-of-ai-asean",
    displayTitle: "Proyeksi Dampak AI Terhadap Perekonomian ASEAN",
    displayTitleEn: "Forecasting AI Adoption Impact on ASEAN Economies",
    category: "Forecasting & Data Storytelling",
    categoryEn: "Forecasting & Data Storytelling",
    summary: "Pemodelan forecasting berbasis LSTM dan visualisasi komprehensif mengenai skenario adopsi kecerdasan buatan terhadap GDP negara-negara ASEAN. Dikemas untuk kompetisi infografis nasional.",
    summaryEn: "LSTM-based forecasting and data visualization exploring AI adoption scenarios across ASEAN economies, packaged for national infographic competition delivery.",
    impact: "Finalis Top 10 RASIO 8.0 UNPAD",
    impactEn: "Top 10 Finalist RASIO 8.0 UNPAD",
    stack: ["Python", "TensorFlow", "Time Series", "Data Visualization"],
    href: "https://github.com/Julio-analyst/impact-of-ai-asean",
  },
  {
    title: "IDISbot",
    displayTitle: "IDISbot — AI Financial & Investment Learning Assistant",
    displayTitleEn: "IDISbot — AI Financial & Investment Learning Assistant",
    category: "AI & Financial Analytics",
    categoryEn: "AI & Financial Analytics",
    summary: "Aplikasi Streamlit interaktif yang memadukan RAG untuk literasi keuangan dengan feed data pasar saham secara real-time via YFinance.",
    summaryEn: "Streamlit application combining retrieval-augmented generation for financial literacy with live market data feeds via YFinance.",
    impact: "OpenAI + FAISS + YFinance",
    impactEn: "OpenAI + FAISS + YFinance",
    stack: ["Python", "OpenAI", "FAISS", "Streamlit", "YFinance"],
    href: "https://github.com/Julio-analyst/IDISbot",
  },
  {
    title: "flink-datastream-monitoring",
    displayTitle: "Near Real-Time Data Streaming & Monitoring dengan Apache Flink",
    displayTitleEn: "Near Real-Time Streaming & Monitoring with Apache Flink",
    category: "Streaming & Big Data",
    categoryEn: "Streaming & Big Data",
    summary: "Lingkungan Dockerized untuk pengolahan aliran data berlatensi rendah menggunakan Apache Flink, Kafka, dan dashboard analitik interaktif.",
    summaryEn: "Dockerized streaming pipeline for low-latency data processing using Apache Flink, Kafka, and dashboard visualization.",
    impact: "Low-latency Stream Processing",
    impactEn: "Low-latency Stream Processing",
    stack: ["Apache Flink", "Kafka", "Docker", "Analytics"],
    href: "https://github.com/Julio-analyst/flink-datastream-monitoring",
  },
  {
    title: "hadoop-food-trade-analysis",
    displayTitle: "Analisis Pola Perdagangan Pangan Menggunakan Ekosistem Hadoop",
    displayTitleEn: "Food Commodity Trade Analysis with Hadoop Ecosystem",
    category: "Big Data Analytics",
    categoryEn: "Big Data Analytics",
    summary: "Pemrosesan terdistribusi untuk menganalisis arus data perdagangan pangan skala besar dengan MapReduce dan Hive.",
    summaryEn: "Distributed batch data processing analyzing large-scale food trade patterns using MapReduce and Hive.",
    impact: "Distributed Batch Processing",
    impactEn: "Distributed Batch Processing",
    stack: ["Hadoop", "Hive", "Python", "Big Data"],
    href: "https://github.com/Julio-analyst/hadoop-food-trade-analysis",
  },
  {
    title: "Riau-Temp-GWL-Regression",
    displayTitle: "Pemodelan Pengaruh Temperatur Terhadap Muka Air Tanah di Riau",
    displayTitleEn: "Groundwater Level vs Temperature Regression in Riau",
    category: "Environmental Data Science",
    categoryEn: "Environmental Data Science",
    summary: "Studi statistik dan pemodelan regresi linier untuk menganalisis dinamika penurunan muka air tanah gambut berdasarkan fluktuasi temperatur.",
    summaryEn: "Statistical modeling and linear regression exploring peatland groundwater level variations driven by temperature anomalies.",
    impact: "Environmental Analytics",
    impactEn: "Environmental Analytics",
    stack: ["R", "Statistical Regression", "ggplot2"],
    href: "https://github.com/Julio-analyst/Riau-Temp-GWL-Regression",
  },
];

export const achievements = [
  {
    title: "Finalis RASIO 8.0 Infographic Competition",
    titleEn: "Finalist, RASIO 8.0 Infographic Competition",
    organizer: "Universitas Padjadjaran",
    year: "2024",
    type: "Kompetisi",
    typeEn: "Competition",
    description: "Meraih predikat Finalis (Top 10) tingkat nasional dalam kompetisi infografis data bertema dampak perkembangan kecerdasan buatan terhadap struktur ekonomi ASEAN.",
    descriptionEn: "Top 10 national finalist in the data infographic competition analyzing the socioeconomic impact of artificial intelligence across ASEAN.",
    relatedProject: "impact-of-ai-asean",
  },
  {
    title: "Semifinalis Enterns International Business Case Competition",
    titleEn: "Semifinalist, Enterns International Business Case Competition",
    organizer: "Universitas Indonesia",
    year: "2024",
    type: "Kompetisi",
    typeEn: "Competition",
    description: "Mencapai babak semifinal dalam kompetisi studi kasus bisnis internasional dengan merumuskan strategi transformasi berbasis teknologi dan data analitik.",
    descriptionEn: "Reached the semifinal stage in an international business case competition formulating data-driven strategic transformation frameworks.",
  },
  {
    title: "Institutional TOEFL — Skor 590",
    titleEn: "Institutional TOEFL — Score 590",
    organizer: "Pusat Bahasa Kampus",
    year: "2024",
    type: "Kemampuan Bahasa",
    typeEn: "Language Proficiency",
    description: "Menunjukkan kemahiran komunikasi bahasa Inggris profesional tingkat lanjut untuk keperluan teknis dan kolaborasi lintas organisasi.",
    descriptionEn: "Demonstrating advanced professional English proficiency for technical communication and international collaboration.",
  },
];

export const certificates = [
  {
    title: "Introduction to Data Analytics on Google Cloud",
    titleEn: "Introduction to Data Analytics on Google Cloud",
    issuer: "Google Cloud",
    published: "Jan 2024",
    credentialId: "Google Cloud Skill Badge",
    description: "Fondasi ekosistem cloud data analytics, BigQuery, dan arsitektur pengolahan data berskala enterprise di GCP.",
    descriptionEn: "Foundations of cloud data analytics, BigQuery, and enterprise-scale data architecture on GCP.",
    skills: ["Google Cloud", "BigQuery", "Cloud Analytics"],
  },
  {
    title: "Data Preparation in Data Science using R",
    titleEn: "Data Preparation in Data Science using R",
    issuer: "DQLab",
    published: "Sep 2024",
    credentialId: "#DQLABDTWR1KNNFHT",
    description: "Teknik pembersihan, validasi, dan transformasi data tabular menggunakan pustaka R untuk kesiapan analisis lanjutan.",
    descriptionEn: "Data cleaning, validation, and tabular data transformation using R libraries for advanced analysis workflows.",
    skills: ["R Programming", "Data Cleaning", "Data Wrangling"],
  },
  {
    title: "Data Visualization in Data Science using R",
    titleEn: "Data Visualization in Data Science using R",
    issuer: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABDTVISEMSTOB",
    description: "Penerapan prinsip visualisasi data tingkat lanjut dan data storytelling menggunakan ggplot2.",
    descriptionEn: "Advanced data visualization principles and storytelling workflows using ggplot2.",
    skills: ["Data Visualization", "ggplot2", "Data Storytelling"],
  },
  {
    title: "Statistics using R for Data Science",
    titleEn: "Statistics using R for Data Science",
    issuer: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABINTS1QUTICD",
    description: "Pengujian hipotesis, probabilitas, dan pemodelan statistik terapan untuk sains data.",
    descriptionEn: "Hypothesis testing, probability distributions, and applied statistical modeling for data science.",
    skills: ["Statistics", "Hypothesis Testing", "R"],
  },
  {
    title: "Data Wrangling with Python",
    titleEn: "Data Wrangling with Python",
    issuer: "DQLab",
    published: "Jul 2024",
    credentialId: "#DQLABDTWP1KOVTRC",
    description: "Eksplorasi dan manipulasi data tabular berskala besar dengan Pandas dan NumPy di lingkungan Python.",
    descriptionEn: "Large-scale tabular data exploration and manipulation using Pandas and NumPy in Python.",
    skills: ["Python", "Pandas", "NumPy"],
  },
];

export const workHistory = [
  {
    company: "Bank Indonesia — Kantor Perwakilan Provinsi Lampung",
    period: "Mei 2026 – Sekarang",
    periodEn: "May 2026 – Present",
    role: "Data Science Intern | Fungsi Perumusan Kebijakan Ekonomi & Keuangan Daerah (FPKP)",
    roleEn: "Data Science Intern | Regional Economic & Financial Policy Formulation (FPKP)",
    location: "Lampung, Indonesia",
    bullets: [
      "Menganalisis indikator makroekonomi, inflasi pangan, PDRB, dan tren sektoral di 15 kabupaten/kota se-Provinsi Lampung menggunakan Python, R, dan SQL.",
      "Mengembangkan prototype sistem otomasi monitoring harga dan Early Warning System (EWS) untuk 9 komoditas pangan strategis berbasis data PIHPS, formula volatilitas, dan pembobotan PCA.",
      "Membangun dashboard interaktif di Power BI dan Looker Studio untuk memantau status anomali harga pangan (Normal, Waspada, Peringatan) guna mendukung rekomendasi waktu intervensi pasar TPID.",
      "Merancang prototype analisis siklus bisnis regional (classical cycle & growth cycle) menggunakan penyesuaian musiman X-13 dan algoritma Bry-Boschan.",
      "Mendukung validasi hasil survei ekonomi dan analisis sentimen berita daerah untuk melengkapi kajian perumusan kebijakan bulanan.",
    ],
    bulletsEn: [
      "Analyzed macroeconomic indicators, food inflation, GRDP, and sectoral trends across 15 regencies in Lampung using Python, R, and SQL.",
      "Developed an automated food price monitoring prototype and Early Warning System (EWS) for 9 strategic commodities based on PIHPS data, volatility adjustment, and PCA weighting.",
      "Built interactive monitoring dashboards in Power BI and Looker Studio visualizing anomaly risk statuses (Normal, Alert, Warning) to inform TPID market intervention timing.",
      "Formulated regional business cycle prototypes (classical & growth cycles) utilizing X-13 seasonal adjustments and Bry-Boschan algorithms.",
      "Supported economic survey validations and news sentiment analysis to provide qualitative indicators for monthly policy reviews.",
    ],
  },
  {
    company: "PT Telekomunikasi Indonesia (Telkom Indonesia)",
    period: "Jun 2025 – Des 2025",
    periodEn: "Jun 2025 – Dec 2025",
    role: "Data Scientist Intern | Divisi Data Analytics, AI & Otomasi",
    roleEn: "Data Scientist Intern | Data Analytics, AI & Automation Division",
    location: "Jakarta, Indonesia",
    bullets: [
      "Mengembangkan asisten cerdas RAG (Retrieval-Augmented Generation) menggunakan n8n, Supabase, OpenAI, Groq, dan Telegram bot, mempermudah akses pedoman internal dengan efisiensi pencarian ~30%.",
      "Membangun arsitektur otomasi end-to-end: penyerapan dokumen Google Drive, pemecahan teks (*chunking*), indexing Pinecone Vector Store, hingga orchestration response.",
      "Mengimplementasikan pipeline Change Data Capture (CDC) real-time menggunakan Debezium, Apache Kafka, dan PostgreSQL untuk meminimalisasi latensi data replikasi.",
      "Membangun dashboard observabilitas performa sistem dan latensi database menggunakan Grafana dan Percona.",
    ],
    bulletsEn: [
      "Engineered an enterprise RAG chatbot using n8n, Supabase, OpenAI, Groq, and Telegram bot, accelerating internal policy lookup by ~30%.",
      "Constructed end-to-end knowledge automation: Google Drive file ingestion, recursive text chunking, Pinecone vector indexing, and conversational agent orchestration.",
      "Implemented a real-time log-based Change Data Capture (CDC) pipeline using Debezium, Kafka, and PostgreSQL to eliminate batch replication lag.",
      "Configured observability dashboards tracking database query latency and resource utilization with Grafana and Percona.",
    ],
  },
  {
    company: "Rajawali Academy",
    period: "Jul 2024 – Des 2024",
    periodEn: "Jul 2024 – Dec 2024",
    role: "IT Specialist Intern",
    roleEn: "IT Specialist Intern",
    location: "Bogor, Indonesia",
    bullets: [
      "Membangun sistem asesmen dan scoring otomatis berbasis Google Sheets dan Autocrat, memangkas waktu evaluasi manual tim operasional.",
      "Mendukung pengelolaan infrastruktur data warehouse dan pendataan katalog lebih dari 15.000 produk.",
      "Menerapkan strategi digital marketing berbasis data di Facebook Ads, TikTok Ads, dan Shopee, berkontribusi pada penjualan lebih dari 1.000 unit produk.",
    ],
    bulletsEn: [
      "Engineered automated scoring and assessment workflows with Google Sheets and Autocrat, eliminating manual administrative grading.",
      "Managed warehouse data cataloging and digital operational workflows covering 15,000+ SKU records.",
      "Executed data-driven digital ad campaigns across Facebook, TikTok, and Shopee, contributing to 1,000+ unit product sales.",
    ],
  },
  {
    company: "Bakmi Rempah",
    period: "2021 – 2024",
    periodEn: "2021 – 2024",
    role: "Owner & Operational Manager (Kewirausahaan Keluarga)",
    roleEn: "Owner & Operational Manager (Family Business)",
    location: "Bogor, Indonesia",
    bullets: [
      "Mengelola operasional harian usaha, pengendalian inventaris bahan baku, penetapan harga pokok penjualan (HPP), dan manajemen arus kas.",
      "Menjalankan inisiatif promosi digital dan pengelolaan hubungan pelanggan secara langsung.",
      "Mendapatkan pemahaman mendalam tentang eksekusi bisnis dunia nyata, efisiensi biaya, dan pengambilan keputusan di bawah tekanan pasar.",
    ],
    bulletsEn: [
      "Supervised daily food service operations, raw material inventory control, COGS calculation, and cash flow governance.",
      "Directed local digital marketing initiatives and managed direct consumer customer relationships.",
      "Acquired first-hand experience in commercial decision-making, cost optimization, and real-world business ownership.",
    ],
  },
];

export const educationHistory = [
  {
    school: "Institut Teknologi Sumatera (ITERA)",
    degree: "Sarjana Sains Data (S.Si.)",
    degreeEn: "Bachelor of Data Science (B.Sc. equivalent)",
    period: "Agustus 2022 – Juni 2026",
    periodEn: "Aug 2022 – Jun 2026",
    gpa: "IPK 3,00 / 4,00",
    gpaEn: "GPA 3.00 / 4.00",
    status: "Lulusan Sarjana Sains Data (SKL Terbit, Menunggu Wisuda)",
    statusEn: "Data Science Graduate (Degree Completed, Awaiting Formal Ceremony)",
    thesis: "Evaluasi Performa PeerDB dan Debezium dalam Simulasi Change Data Capture pada Docker Menggunakan Metrik Kinerja Sistem",
    thesisEn: "Performance Evaluation of PeerDB and Debezium in Docker-Based Change Data Capture Simulations Using System Performance Metrics",
    coursework: ["Big Data Analytics", "Data Engineering", "Machine Learning & Deep Learning", "Database Systems & SQL", "Cloud Computing", "Business Intelligence", "Applied Statistics", "Data Visualization"],
  },
  {
    school: "SMAN 2 Bogor",
    degree: "Pendidikan Menengah Atas (MIPA)",
    degreeEn: "High School Diploma (Natural Sciences)",
    period: "2019 – 2022",
    periodEn: "2019 – 2022",
    gpa: "Nilai Rata-rata 87,00 / 100,00",
    gpaEn: "Average Score 87.00 / 100.00",
    status: "Lulus",
    statusEn: "Graduated",
    thesis: "",
    thesisEn: "",
    coursework: [],
  },
];

export const leadershipActivities = [
  {
    title: "Magang Bank Indonesia — Capacity Building & Riset Ekonomi",
    titleEn: "Bank Indonesia Internship — Capacity Building & Economic Research",
    role: "Data Science Intern (FPKP)",
    roleEn: "Data Science Intern (FPKP)",
    period: "Mei 2026 – Sekarang",
    periodEn: "May 2026 – Present",
    image: "/activities/bi/bi-field-visit.jpg",
    description: "Berpartisipasi aktif dalam Capacity Building Enumerator Survei Bank Indonesia KPw Lampung, membangun sistem EWS harga pangan 9 komoditas, dan mendukung analisis makroekonomi regional untuk rekomendasi kebijakan TPID.",
    descriptionEn: "Actively participated in Bank Indonesia KPw Lampung Capacity Building events, built a food price EWS for 9 commodities, and supported regional macroeconomic analysis for TPID policy recommendations.",
    keyTakeaway: "Memahami ekosistem riset kebijakan bank sentral, kolaborasi lintas institusi, dan standar analisis ekonomi formal.",
    keyTakeawayEn: "Gained insight into central bank policy research workflows, cross-institutional collaboration, and formal economic analysis standards.",
  },
  {
    title: "MAGENTA 22 — Gathering Mahasiswa Sains Data ITERA",
    titleEn: "MAGENTA 22 — Data Science Student Gathering",
    role: "Ketua Panitia (Chief Committee)",
    roleEn: "Chief Committee / Event Director",
    period: "Okt 2022 – Des 2022",
    periodEn: "Oct 2022 – Dec 2022",
    image: "/activities/magenta/Screenshot 2026-10-05 142809.png",
    description: "Memimpin 5 divisi dan mengoordinasikan 27 panitia pelaksana untuk menyelenggarakan acara penyambutan mahasiswa baru Sains Data ITERA dengan jumlah 140+ peserta dan tingkat kehadiran 99%.",
    descriptionEn: "Directed 5 divisions and 27 committee members organizing the annual inaugural event for 140+ Data Science students at ITERA, achieving a 99% participant attendance rate.",
    keyTakeaway: "Mengasah kepemimpinan lintas fungsi, manajemen alur waktu kritis, dan komunikasi strategis kepada pemangku kepentingan kampus.",
    keyTakeawayEn: "Honed cross-functional leadership, critical-path event timelines, and stakeholder communication.",
  },
  {
    title: "Magang Telkom Indonesia — AI & Data Automation",
    titleEn: "Telkom Indonesia Internship — AI & Data Automation",
    role: "Data Scientist Intern",
    roleEn: "Data Scientist Intern",
    period: "Jun 2025 – Des 2025",
    periodEn: "Jun 2025 – Dec 2025",
    image: "/activities/magang telkom.jpg",
    description: "Membangun RAG chatbot berbasis n8n, Supabase, dan Telegram untuk mempercepat akses panduan internal, serta mengimplementasikan pipeline CDC real-time menggunakan Debezium dan Kafka di Divisi AI & Otomasi Telkom.",
    descriptionEn: "Built a RAG chatbot using n8n, Supabase, and Telegram to accelerate internal guideline access, and implemented real-time CDC pipelines with Debezium and Kafka at Telkom's AI & Automation Division.",
    keyTakeaway: "Pengalaman end-to-end dalam orkestrasi AI, integrasi data real-time, dan observabilitas sistem di lingkungan enterprise.",
    keyTakeawayEn: "End-to-end experience in AI orchestration, real-time data integration, and system observability in an enterprise environment.",
  },
  {
    title: "First Gathering D'23",
    titleEn: "First Gathering D'23",
    role: "Koordinator Lapangan (Head of Field Division)",
    roleEn: "Head of Field Operations Division",
    period: "2023",
    periodEn: "2023",
    image: "/activities/first-gathering/first-gathering-1.jpg",
    description: "Mengelola 15 staf operasional lapangan dan memastikan alur teknis acara berjalan lancar, aman, dan kondusif untuk lebih dari 250 peserta mahasiswa.",
    descriptionEn: "Managed 15 on-site field staff and oversaw technical logistics, participant safety, and operational flow for an assembly of 250+ attendees.",
    keyTakeaway: "Kemampuan mitigasi risiko insidental di lapangan dan koordinasi tim cepat dalam situasi dinamis.",
    keyTakeawayEn: "Real-time contingency mitigation and rapid team synchronization during live dynamic events.",
  },
  {
    title: "DAMASKUS — Komunitas Olahraga Mahasiswa Sains Data ITERA",
    titleEn: "DAMASKUS — Data Science Sports Community ITERA",
    role: "Capo / Koordinator Utama",
    roleEn: "Capo / Lead Community Coordinator",
    period: "Jan 2024 – Des 2025",
    periodEn: "Jan 2024 – Dec 2025",
    image: "/activities/damaskus/damaskus-1.jpg",
    description: "Memimpin dan mengoordinasikan agenda kegiatan olahraga berkala yang melibatkan lebih dari 200 mahasiswa Sains Data guna mempererat kebersamaan dan kesehatan mental antar angkatan.",
    descriptionEn: "Led and coordinated scheduled sports events engaging 200+ Data Science students to foster community camaraderie and well-being.",
    keyTakeaway: "Membangun keterlibatan komunitas sukarela yang solid melalui pendekatan personal dan atmosfer yang suportif.",
    keyTakeawayEn: "Built strong voluntary community engagement through empathetic interpersonal communication.",
  },
  {
    title: "Himpunan Mahasiswa Sains Data ITERA",
    titleEn: "Data Science Student Association ITERA",
    role: "Staf Divisi SSD (Storage Sains Data) / Kewirausahaan",
    roleEn: "Staff, SSD Division (Student Storage & Entrepreneurship)",
    period: "2023 – 2024",
    periodEn: "2023 – 2024",
    image: "/activities/hmsd/hmsd-1.jpg",
    description: "Mengelola inisiatif penggalangan dana mandiri himpunan dan unit usaha inventaris merchandise mahasiswa.",
    descriptionEn: "Managed autonomous student fund-raising drives and student merchandise inventory distribution initiatives.",
    keyTakeaway: "Menerapkan pencatatan keuangan dan manajemen stok barang secara transparan.",
    keyTakeawayEn: "Applied transparent inventory governance and sales ledger tracking.",
  },
  {
    title: "Bakmi Rempah — Usaha Kuliner Keluarga",
    titleEn: "Bakmi Rempah — Family Culinary Enterprise",
    role: "Owner & Manager",
    roleEn: "Owner & Manager",
    period: "2021 – 2024",
    periodEn: "2021 – 2024",
    image: "/activities/bakmi-rempah/bakmi-1.jpg",
    description: "Menjalankan pengelolaan usaha kuliner keluarga secara langsung: belanja pasokan, standarisasi resep, kalkulasi margin keuntungan, promosi lokal, dan pelayanan konsumen.",
    descriptionEn: "Directly managed family food business operations: procurement, recipe standardization, profit margin analysis, and customer service.",
    keyTakeaway: "Menanamkan empati komersial, ketelitian kalkulasi biaya, dan orientasi kepuasan pengguna akhir.",
    keyTakeawayEn: "Instilled commercial empathy, rigorous cost accounting, and customer-first orientation.",
  },
];
