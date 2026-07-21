export const SKILLS = [
  // Linguagens (language)
  { name: "Python", level: 96, category: "language" },
  { name: "SQL / PostgreSQL", level: 94, category: "language" },
  { name: "JavaScript", level: 88, category: "language" },
  { name: "TypeScript", level: 88, category: "language" },
  { name: "C / C++", level: 88, category: "language" },
  { name: "Java", level: 78, category: "language" },
  { name: "C#", level: 80, category: "language" },
  { name: "PHP", level: 78, category: "language" },
  { name: "Bash", level: 85, category: "language" },
  { name: "R", level: 75, category: "language" },
  { name: "Oracle / MySQL", level: 86, category: "language" },
  { name: "SQLite", level: 88, category: "language" },

  // Frameworks (framework)
  { name: "React", level: 88, category: "framework" },
  { name: "Next.js", level: 88, category: "framework" },
  { name: "Node.js", level: 88, category: "framework" },
  { name: "APIs REST", level: 86, category: "framework" },
  { name: "Flutter / Dart", level: 88, category: "framework" },
  { name: "React Native", level: 84, category: "framework" },
  { name: "Angular", level: 76, category: "framework" },
  { name: "jQuery", level: 74, category: "framework" },
  { name: "Spring Boot", level: 78, category: "framework" },
  { name: "Tailwind / SASS", level: 90, category: "framework" },

  // IA (ai)
  { name: "LLMs / Prompts", level: 96, category: "ai" },
  { name: "Agentes de IA", level: 95, category: "ai" },
  { name: "n8n", level: 95, category: "ai" },
  { name: "Machine Learning", level: 86, category: "ai" },
  { name: "OpenCV", level: 82, category: "ai" },
  { name: "Scikit-learn", level: 88, category: "ai" },
  { name: "PyTorch", level: 80, category: "ai" },
  { name: "LangChain / CrewAI", level: 92, category: "ai" },
  { name: "Streamlit / Gradio", level: 90, category: "ai" },
  { name: "Jupyter / Colab", level: 92, category: "ai" },

  // Dados (data)
  { name: "ETL / Pipelines", level: 94, category: "data" },
  { name: "Power BI", level: 92, category: "data" },
  { name: "DuckDB", level: 90, category: "data" },
  { name: "Data Wrangling", level: 96, category: "data" },
  { name: "Spark / Databricks", level: 84, category: "data" },
  { name: "DAX / Power Query", level: 92, category: "data" },
  { name: "Modelagem Dimensional", level: 90, category: "data" },
  { name: "Séries Temporais", level: 86, category: "data" },

  // Ferramentas & Infra (tool)
  { name: "Git / GitHub", level: 88, category: "tool" },
  { name: "Docker", level: 86, category: "tool" },
  { name: "Linux", level: 86, category: "tool" },
  { name: "AWS / GCP", level: 80, category: "tool" },
  { name: "Playwright", level: 84, category: "tool" },
  { name: "CI / CD", level: 85, category: "tool" },
  { name: "Figma", level: 84, category: "tool" },
  { name: "Evolution API", level: 88, category: "tool" },
  { name: "Chatwoot / Stripe", level: 85, category: "tool" },
  { name: "Raspberry Pi / Arduino", level: 80, category: "tool" },
  { name: "Android Studio", level: 82, category: "tool" },
  { name: "WebAssembly / FFmpeg", level: 82, category: "tool" },

  // Gestão & Soft Skills (soft)
  { name: "Scrum / Kanban / Jira", level: 90, category: "soft" },
  { name: "Liderança Técnica", level: 88, category: "soft" },
  { name: "WCAG / Acessibilidade", level: 86, category: "soft" },
  { name: "Inglês Fluente (TOEFL)", level: 95, category: "soft" },
  { name: "Idiomas Adicionais", level: 75, category: "soft" }
];

export const EXTRAS = []; // All extras successfully migrated to the core SKILLS toolkit!

export const CERTIFICATIONS = [
  {
    namePt: "Microsoft Power BI Para Business Intelligence e Data Science",
    nameEn: "Microsoft Power BI for Business Intelligence and Data Science",
    issuer: "Data Science Academy",
    detailPt: "72 h/a · Power BI, DAX, Power Query M, SQL Analytics, R/Python, ML e séries temporais",
    detailEn: "72 hours · Power BI, DAX, Power Query M, SQL Analytics, R/Python, ML, and time series"
  },
  {
    namePt: "TOEFL ITP — Prata (Nível CEFR B2)",
    nameEn: "TOEFL ITP — Silver (CEFR B2 Level)",
    issuer: "Mastertest / TOEFL",
    detailPt: "613 pontos (Listening: 59, Structure: 62, Reading: 63) · 30 de julho de 2025",
    detailEn: "613 score (Listening: 59, Structure: 62, Reading: 63) · July 30, 2025"
  },
  {
    namePt: "Exame da Trilha de Técnico em Redes",
    nameEn: "IT Essentials / Network Technician Pathway",
    issuer: "Cisco Networking Academy",
    detailPt: "Conclusão e aprovação no exame de redes da Cisco · 04 de outubro de 2025",
    detailEn: "Completion and passing of the Cisco network examination · October 04, 2025"
  },
  {
    namePt: "Gerenciamento de Ameaças Cibernéticas",
    nameEn: "Cybersecurity Threat Management",
    issuer: "Cisco Academy / Centro Paula Souza (CPS)",
    detailPt: "Mitigação de ameaças, segurança ofensiva/defensiva e proteção de redes · 21 de setembro de 2025",
    detailEn: "Threat mitigation, offensive/defensive security, and network protection · September 21, 2025"
  },
  {
    namePt: "Jornada Inteligência Artificial",
    nameEn: "AI Journey",
    issuer: "Hashtag Treinamentos",
    detailPt: "8 h/a · Desenvolvimento prático de aplicações integradas com IA · 10 de abril de 2025",
    detailEn: "8 hours · Practical development of AI-integrated applications · April 10, 2025"
  },
  {
    namePt: "LGPD e Marco Civil da Internet: Segurança e Privacidade",
    nameEn: "LGPD & Brazilian Civil Rights Framework for the Internet",
    issuer: "IFSP - São João da Boa Vista",
    detailPt: "2 h/a · Segurança, liberdade e privacidade no uso de dados · 16 de abril de 2025",
    detailEn: "2 hours · Security, freedom, and privacy in data usage · April 16, 2025"
  },
  {
    namePt: "Organização de Oficina Lógica Aplicada à Computação",
    nameEn: "Logic Applied to Computing Workshop Organization",
    issuer: "IFSP (Semana Nacional de C&T)",
    detailPt: "6 h/a · Atuação como Organizador de oficinas de lógica computacional · 03 de outubro de 2024",
    detailEn: "6 hours · Served as Organizer for computer logic workshops · October 03, 2024"
  },
  {
    namePt: "Curso Completo de Inglês + Teachers Course",
    nameEn: "Complete English Program + Teachers Course",
    issuer: "CCAA",
    detailPt: "Curso de formação avançada de professores e fluência acadêmica/profissional",
    detailEn: "Advanced teacher training and academic/professional fluency"
  }
];

