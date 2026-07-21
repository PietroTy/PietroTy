export const PROJECTS = [
  {
    "id": "chub",
    "namePt": "cHUB",
    "nameEn": "cHUB",
    "taglinePt": "Projeto público",
    "taglineEn": "Public project",
    "descPt": "Hub com mais de 30 minijogos, entre clones e originais, desenvolvidos integralmente em C com Raylib e compilados para WebAssembly. A arte é renderizada proceduralmente por código, com foco em performance, simplicidade e identidade retro coesa.",
    "descEn": "Hub with over 30 clone and original minigames built entirely in C with Raylib and compiled to WebAssembly. Art is rendered procedurally in code, with a focus on performance, simplicity, and cohesive retro design.",
    "tags": [
      "C",
      "Raylib",
      "WebAssembly",
      "HTML"
    ],
    "link": "https://pietroty.github.io/Chub/",
    "featured": true,
    "color": "#a855f7"
  },
  {
    "id": "whatsapp-bot",
    "namePt": "Bot de WhatsApp",
    "nameEn": "WhatsApp Bot",
    "taglinePt": "Projeto público / automação",
    "taglineEn": "Public project / automation",
    "descPt": "Ecossistema modular de automação e IA para WhatsApp com memória persistente, respostas por LLM, atuação como SDR, jornal diário personalizado, comandos, Termo/Dueto/Quarteto e processamento de mídia. O projeto possui implementações e integrações com whatsapp-web.js e Evolution API.",
    "descEn": "Modular WhatsApp automation and AI ecosystem with persistent memory, LLM responses, SDR workflows, customized daily news feeds, commands, word games, and media processing. The project includes implementations and integrations using whatsapp-web.js and Evolution API.",
    "tags": [
      "JavaScript",
      "Node.js",
      "whatsapp-web.js",
      "Evolution API"
    ],
    "link": "https://github.com/PietroTy/bot-whatsapp",
    "featured": false,
    "color": "#22c55e"
  },
  {
    "id": "laplayer",
    "namePt": "LaPlayer",
    "nameEn": "LaPlayer",
    "taglinePt": "Aplicativo mobile self-hosted",
    "taglineEn": "Self-hosted mobile application",
    "descPt": "Cliente de música em Dart/Flutter com interface inspirada no Spotify, biblioteca hospedada em servidor próprio, metadados via Spotify API, extração com yt-dlp, backend Python, cache local, modo offline e armazenamento de metadados/cache criptografado.",
    "descEn": "Dart/Flutter music client inspired by Spotify, with a self-hosted library, Spotify API metadata, yt-dlp extraction, Python backend, local caching, offline mode, and encrypted metadata/cache storage.",
    "tags": [
      "Dart",
      "Flutter",
      "Python",
      "Spotify API"
    ],
    "link": null,
    "featured": false,
    "color": "#1db954",
    "apk": "app_release.apk"
  },
  {
    "id": "crm-engaja",
    "namePt": "CRM Corporativo, BI e Integrações",
    "nameEn": "Corporate CRM, BI & Integrations",
    "taglinePt": "Solução corporativa privada",
    "taglineEn": "Private corporate solution",
    "descPt": "CRM corporativo customizado arquitetado, desenvolvido, implantado e posteriormente comercializado para novos clientes. Integra bancos PostgreSQL, dashboards e relatórios executivos no Power BI, automações com n8n/Python e integrações com Evolution API, Chatwoot, Cloudfy, Stripe e APIs de negócio.",
    "descEn": "Custom corporate CRM architected, developed, deployed, and later commercialized to new clients. It integrates PostgreSQL databases, Power BI executive dashboards and reports, n8n/Python automation, and business integrations using Evolution API, Chatwoot, Cloudfy, Stripe, and APIs.",
    "tags": [
      "PostgreSQL",
      "Power BI",
      "DAX",
      "Power Query"
    ],
    "link": null,
    "featured": true,
    "color": "#7c3aed"
  },
  {
    "id": "cvmaker",
    "namePt": "CVMaker",
    "nameEn": "CVMaker",
    "taglinePt": "Aplicação pública",
    "taglineEn": "Public application",
    "descPt": "Gerador e adaptador inteligente de currículos em Python/Streamlit. Analisa a estrutura OOXML de arquivos DOCX, reescreve seções com Sabiá-4 conforme uma vaga, preserva a formatação original e exporta para PDF com LibreOffice headless.",
    "descEn": "Intelligent resume generator and adapter in Python/Streamlit. It analyzes DOCX OOXML, rewrites sections with Sabiá-4 for a target role, preserves the original formatting, and exports to PDF through headless LibreOffice.",
    "tags": [
      "Python",
      "Streamlit",
      "Sabiá-4",
      "OOXML"
    ],
    "link": "https://cvmaker-ty.streamlit.app/",
    "featured": false,
    "color": "#3b82f6"
  },
  {
    "id": "drone-autonomo",
    "namePt": "Game of Drones",
    "nameEn": "Game of Drones",
    "taglinePt": "Projeto acadêmico extracurricular",
    "taglineEn": "Extracurricular academic project",
    "descPt": "Software de visão computacional, inteligência embarcada e Machine Learning desenvolvido pela equipe Game of Drones do IFSP para um quadricóptero autônomo no contexto da Competição EletroQuad SAE BRASIL. Incluiu leitura de trajetórias, controle PID, desvio de obstáculos, integração com telemetria e otimização em Raspberry Pi/Linux para missões sem piloto.",
    "descEn": "Computer vision, embedded intelligence, and machine learning software developed by IFSP's Game of Drones team for an autonomous quadrotor in the EletroQuad SAE BRASIL competition. It covered track reading, PID control, obstacle avoidance, telemetry integration, and Raspberry Pi/Linux optimization for uncrewed missions.",
    "tags": [
      "Python",
      "OpenCV",
      "NumPy",
      "Machine Learning"
    ],
    "link": null,
    "featured": false,
    "color": "#10b981"
  },
  {
    "id": "escriba",
    "namePt": "Escriba AI",
    "nameEn": "Escriba AI",
    "taglinePt": "Pesquisa aplicada e produto em uso",
    "taglineEn": "Applied research and product in use",
    "descPt": "Plataforma de geração e adaptação de textos acadêmicos usando múltiplos LLMs especializados em português, com engenharia de prompt multicamada, checagem cruzada, mitigação de alucinações e formatação ABNT. Criada no COSAIC/IFSP-ENAP e utilizada em consultoria para pesquisa de doutorado na PUC.",
    "descEn": "Academic writing and adaptation platform using multiple Portuguese-specialized LLMs, multi-layer prompt engineering, cross-checking, hallucination mitigation, and ABNT formatting. Created during the COSAIC/IFSP-ENAP research project and used in consulting for PUC doctoral research.",
    "tags": [
      "Python",
      "Streamlit",
      "Maritaca AI",
      "Sabiá"
    ],
    "link": "https://escriba.streamlit.app/",
    "featured": true,
    "color": "#f59e0b"
  },
  {
    "id": "erium",
    "namePt": "Erium",
    "nameEn": "Erium",
    "taglinePt": "TCC técnico",
    "taglineEn": "Technical capstone project",
    "descPt": "Toolkit full-stack para passageiros de viagens aéreas, com cálculo de bagagem, validação de passaporte, consulta de normas de voo, banco SQL, consumo de APIs externas e API própria desenvolvida pela equipe.",
    "descEn": "Full-stack toolkit for air passengers, including baggage calculations, passport validation, flight regulations, a SQL database, external API consumption, and a custom team-built API.",
    "tags": [
      "Java",
      "Spring Boot",
      "React",
      "JavaScript"
    ],
    "link": null,
    "featured": false,
    "color": "#10b981"
  },
  {
    "id": "bot-figurinhas",
    "namePt": "Stickers Bot",
    "nameEn": "Stickers Bot",
    "taglinePt": "Serviço para WhatsApp",
    "taglineEn": "WhatsApp service",
    "descPt": "Serviço de conversão em tempo real de imagens, GIFs e vídeos em figurinhas estáticas ou animadas, usando pipelines de FFmpeg e sharp para compressão WebP. Comunidade informada com mais de 100 usuários ativos.",
    "descEn": "Real-time service that converts images, GIFs, and videos into static or animated WhatsApp stickers using FFmpeg and sharp pipelines for WebP compression. Reported community of over 100 active users.",
    "tags": [
      "JavaScript",
      "Node.js",
      "FFmpeg",
      "sharp"
    ],
    "link": "https://chat.whatsapp.com/KAg83JlOyWSGoHLBOLwrR8",
    "featured": false,
    "color": "#14b8a6"
  },
  {
    "id": "dshub",
    "namePt": "Data Science Hub",
    "nameEn": "Data Science Hub",
    "taglinePt": "Portfólio de dados",
    "taglineEn": "Data portfolio",
    "descPt": "Portal em Streamlit que centraliza soluções de Business Intelligence, Big Data e Machine Learning para casos de fintech, modelagem de risco, growth/marketing analytics e saúde preditiva.",
    "descEn": "Streamlit portal centralizing Business Intelligence, Big Data, and Machine Learning solutions for fintech, risk modeling, growth/marketing analytics, and predictive health use cases.",
    "tags": [
      "Python",
      "Streamlit",
      "Pandas",
      "Scikit-learn"
    ],
    "link": "https://datascienceh.streamlit.app/",
    "featured": true,
    "color": "#0ea5e9"
  },
  {
    "id": "magik-tarot",
    "namePt": "MagikTarot",
    "nameEn": "MagikTarot",
    "taglinePt": "Plataforma web comercial",
    "taglineEn": "Commercial web platform",
    "descPt": "Plataforma comercial de Tarot com UX rica, Mercado Pago, painel administrativo e PDFs dinâmicos. Incluiu tagueamento, Google Tag Manager, Google Ad Manager, tráfego pago, SEO, comunidade, automação de Pinterest com geração/publicação de pins e gestão de domínio.",
    "descEn": "Commercial Tarot platform with rich UX, Mercado Pago, an admin dashboard, and dynamic PDFs. It included tracking, Google Tag Manager, Google Ad Manager, paid traffic, SEO, community building, Pinterest pin automation, and domain management.",
    "tags": [
      "React",
      "Node.js",
      "Mercado Pago",
      "Google Tag Manager",
      "Pinterest Automation",
      "SEO"
    ],
    "link": "https://magiktarot.com.br/",
    "featured": false,
    "color": "#7c3aed"
  },
  {
    "id": "tv2",
    "namePt": "TV2",
    "nameEn": "TV2",
    "taglinePt": "Aplicação web em tempo real",
    "taglineEn": "Real-time web application",
    "descPt": "Plataforma Node.js de TV/streaming com extensa curadoria de programação e um sistema robusto de sincronização de reprodução entre usuários. Usa Socket.io para manter estado, posição e comandos de mídia consistentes em tempo real, além de chat integrado e autenticação Google OAuth via Passport.",
    "descEn": "Node.js TV/streaming platform with extensive programming curation and a robust multi-user playback synchronization system. It uses Socket.io to keep media state, position, and controls consistent in real time, with integrated chat and Google OAuth authentication through Passport.",
    "tags": [
      "Node.js",
      "Socket.io",
      "JavaScript",
      "Google OAuth"
    ],
    "link": "https://github.com/PietroTy/tv2",
    "featured": false,
    "color": "#0ea5e9"
  },
  {
    "id": "etl-cnpj",
    "namePt": "Pipeline ETL e Engine de Análise de CNPJs Públicos",
    "nameEn": "ETL Pipeline & Public CNPJ Analysis Engine",
    "taglinePt": "Engenharia de dados",
    "taglineEn": "Data engineering",
    "descPt": "Pipeline para extração, tratamento, higienização, cruzamento e carga da base de dados abertos da Receita Federal, incluindo CNPJs, sócios e CNAEs. Projetado para processar milhões de registros e suportar inteligência de mercado, análise empresarial e detecção de padrões.",
    "descEn": "Pipeline for extracting, cleaning, joining, and loading Brazilian Federal Revenue open data, including companies, partners, and economic activity codes. Designed to process millions of records for market intelligence, business analysis, and pattern detection.",
    "tags": [
      "Python",
      "Pandas",
      "NumPy",
      "PostgreSQL"
    ],
    "link": null,
    "featured": true,
    "color": "#06b6d4"
  },
  {
    "id": "bleach-co",
    "namePt": "Bleach.co",
    "nameEn": "Bleach.co",
    "taglinePt": "E-commerce e site institucional",
    "taglineEn": "E-commerce and institutional website",
    "descPt": "Site institucional e e-commerce conceitual para marca de streetwear, desenvolvido com React/Next.js, design minimalista, transições de alta fidelidade e foco em performance.",
    "descEn": "Conceptual institutional website and e-commerce for a streetwear brand, built with React/Next.js, minimalist design, high-fidelity transitions, and performance optimization.",
    "tags": [
      "React",
      "Next.js",
      "JavaScript",
      "CSS Grid"
    ],
    "link": "https://github.com/PietroTy/site-bleach.co",
    "featured": false,
    "color": "#ffffff"
  },
  {
    "id": "discord-bot",
    "namePt": "Bot de Discord",
    "nameEn": "Discord Bot",
    "taglinePt": "Projeto público",
    "taglineEn": "Public project",
    "descPt": "Bot de administração e entretenimento com comandos de moderação, economia virtual e minijogos, desenvolvido com Node.js e Discord.js.",
    "descEn": "Administration and entertainment bot with moderation commands, a virtual economy, and minigames, built with Node.js and Discord.js.",
    "tags": [
      "JavaScript",
      "Node.js",
      "Discord.js"
    ],
    "link": "https://github.com/PietroTy/bot-discord",
    "featured": false,
    "color": "#5865f2"
  },
  {
    "id": "pitcraft",
    "namePt": "PitCraft",
    "nameEn": "PitCraft",
    "taglinePt": "Infraestrutura e comunidade",
    "taglineEn": "Infrastructure and community",
    "descPt": "Infraestrutura Linux para servidores Minecraft Java/Forge/Fabric/NeoForge/Spigot por temporadas, com automações Bash, sincronização de modpacks, DNS dinâmico, backups, plugins, crossplay via Geyser e chat de voz por proximidade.",
    "descEn": "Linux infrastructure for seasonal Minecraft Java/Forge/Fabric/NeoForge/Spigot servers with Bash automation, modpack synchronization, dynamic DNS, backups, plugins, Geyser crossplay, and proximity voice chat.",
    "tags": [
      "Java",
      "Linux",
      "Bash",
      "Forge"
    ],
    "link": "https://chat.whatsapp.com/GQ1gUaywKX6CUQZtiItgEh",
    "featured": true,
    "color": "#f43f5e"
  },
  {
    "id": "portfolio",
    "namePt": "Portfólio",
    "nameEn": "Portfolio",
    "taglinePt": "Site público",
    "taglineEn": "Public website",
    "descPt": "Portfólio bilíngue em React com identidade pixel/cyberpunk, chatbot Ty integrado a LLM e base biográfica, páginas detalhadas de projetos, design responsivo e deploy automatizado por GitHub Actions.",
    "descEn": "Bilingual React portfolio with a pixel/cyberpunk identity, Ty chatbot connected to an LLM and biographical knowledge base, detailed project pages, responsive design, and automated GitHub Actions deployment.",
    "tags": [
      "React",
      "JavaScript",
      "LLM API",
      "i18n"
    ],
    "link": "https://pietroty.github.io/PietroTy/",
    "featured": false,
    "color": "#9d5cfc"
  }
];
