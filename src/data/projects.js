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
      "jogo",
      "C",
      "Raylib",
      "WebAssembly"
    ],
    "link": "https://pietroty.github.io/Chub/",
    "featured": true,
    "color": "#a855f7"
  },
  {
    "id": "whatsapp-bot",
    "namePt": "Bot de WhatsApp",
    "nameEn": "WhatsApp Bot",
    "taglinePt": "Solução comercial ativo / carro-chefe",
    "taglineEn": "Commercial product / flagship service",
    "descPt": "Ecossistema modular de automação e IA para WhatsApp. Atualmente em uso comercial ativo em 3 empresas clientes como solução carro-chefe de atendimento, envio de notificações e engajamento. Inclui boletins automáticos (PitmuNews), minijogos (Termo/Dueto), agente inteligente por LLM e integrações via whatsapp-web.js e Evolution API.",
    "descEn": "Modular WhatsApp automation and AI ecosystem. Currently running in active commercial production across 3 business clients as a flagship customer engagement and service solution. Features automated digests (PitmuNews), mini-games (Termo/Dueto), LLM intelligent agents, and integrations via whatsapp-web.js and Evolution API.",
    "tags": [
      "bot",
      "JavaScript",
      "Node.js",
      "whatsapp-web.js"
    ],
    "link": "https://github.com/PietroTy/bot-whatsapp",
    "featured": false,
    "color": "#22c55e"
  },
  {
    "id": "laplayer",
    "namePt": "LaPlayer",
    "nameEn": "LaPlayer",
    "taglinePt": "Aplicativo mobile serverless",
    "taglineEn": "Serverless mobile application",
    "descPt": "Cliente de música em Dart/Flutter com interface inspirada no Spotify. Arquitetura 100% Serverless (client-side), rearquitetado com a engine do projeto music-tracker (por Vitor Cordeiro de Souza), conectando via librespot direto aos servidores do Spotify em .ogg Vorbis de alta qualidade. Conta com narração Vocaloid TTS do Android, banco de dados otimizado, cache criptografado e modo offline.",
    "descEn": "Dart/Flutter music client inspired by Spotify with 100% Serverless (client-side) architecture. Refactored with the music-tracker engine (by Vitor Cordeiro de Souza), streaming native high-quality .ogg Vorbis audio directly from Spotify via librespot. Features Android Vocaloid TTS narration, optimized database, encrypted cache, and offline mode.",
    "tags": [
      "app",
      "Flutter",
      "Dart",
      "Serverless"
    ],
    "link": null,
    "featured": false,
    "color": "#8b5cf6",
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
      "saas",
      "PostgreSQL",
      "Power BI",
      "DAX"
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
      "saas",
      "Python",
      "Streamlit",
      "Sabiá-4"
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
      "app",
      "Python",
      "OpenCV",
      "NumPy"
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
      "saas",
      "Python",
      "Streamlit",
      "Maritaca AI"
    ],
    "link": "https://escriba.streamlit.app/",
    "featured": true,
    "color": "#f59e0b"
  },
  {
    "id": "erium",
    "namePt": "Erium TCC",
    "nameEn": "Erium TCC",
    "taglinePt": "TCC - Técnico em Desenvolvimento de Sistemas (CPS / ETEC)",
    "taglineEn": "Capstone - Systems Development Tech Degree (CPS / ETEC)",
    "descPt": "Trabalho de Conclusão de Curso (TCC) do Ensino Técnico em Desenvolvimento de Sistemas no Centro Paula Souza (ETEC). Toolkit full-stack para auxílio a passageiros de viagens aéreas (cálculo de bagagem, validação de passaporte e normas de voo), com frontend em TypeScript/Vite/React e backend API em Node.js/Express hospedado na Vercel (erium-api.vercel.app), desenvolvido em equipe com Anthony Chukwudi.",
    "descEn": "Capstone project (TCC) for the Systems Development Tech Degree at Centro Paula Souza (ETEC). Full-stack air travel passenger toolkit with a TypeScript/Vite/React frontend and a Node.js/Express API backend hosted on Vercel (erium-api.vercel.app), developed in a team with Anthony Chukwudi.",
    "tags": [
      "app",
      "TypeScript",
      "React",
      "Node.js"
    ],
    "link": "https://erium-api.vercel.app",
    "featured": false,
    "color": "#10b981"
  },
  {
    "id": "bot-figurinhas",
    "namePt": "Stickers Bot",
    "nameEn": "Stickers Bot",
    "taglinePt": "Serviço para WhatsApp",
    "taglineEn": "WhatsApp service",
    "descPt": "Serviço de conversão em tempo real de imagens, GIFs e vídeos em figurinhas estáticas ou animadas (WebP via FFmpeg e sharp). Inspirado originalmente em um projeto no GitHub de Matheus Toniolli (matheust3) e reconstruído do zero em uma versão muito mais estável, rápida e polida em microserviço.",
    "descEn": "Real-time service converting images, GIFs, and videos into static/animated WhatsApp stickers (WebP via FFmpeg and sharp). Originally inspired by Matheus Toniolli's (matheust3) GitHub repo and rebuilt from scratch into a far more stable, fast, and polished standalone microservice.",
    "tags": [
      "bot",
      "JavaScript",
      "Node.js",
      "FFmpeg"
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
      "dados",
      "Python",
      "Streamlit",
      "Pandas"
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
      "saas",
      "React",
      "Node.js",
      "Mercado Pago"
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
    "descPt": "Plataforma Node.js de TV/streaming idealizada como uma vitrine alternativa para arte, música, animações e desenhos (antigos e novos) do YouTube, curados por amigos entusiastas da arte. Possui sincronização de reprodução em tempo real via Socket.io, chat retro e Google OAuth.",
    "descEn": "Node.js TV/streaming platform designed as an alternative showcase for visual art, music, classic & modern cartoons from YouTube, curated by art-loving friends. Features real-time multi-user playback sync via Socket.io, retro chat, and Google OAuth.",
    "tags": [
      "site",
      "Node.js",
      "Socket.io",
      "JavaScript"
    ],
    "link": "https://pietroty.github.io/tv2/",
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
      "dados",
      "Python",
      "Pandas",
      "NumPy"
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
      "site",
      "React",
      "Next.js",
      "JavaScript"
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
      "bot",
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
      "infra",
      "Linux",
      "Java",
      "Bash"
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
      "site",
      "React",
      "JavaScript",
      "LLM API"
    ],
    "link": "https://pietroty.github.io/PietroTy/",
    "featured": false,
    "color": "#9d5cfc"
  },
  {
    "id": "chatwoot-custom",
    "namePt": "Chatwoot Customizado",
    "nameEn": "Custom Chatwoot Integration",
    "taglinePt": "Solução corporativa / atendimento",
    "taglineEn": "Corporate customer service solution",
    "descPt": "Integração e personalização da plataforma omnichannel Chatwoot para atendimento corporativo em empresas. Customização de fluxos de triagem, distribuição de conversas, webhooks, relatórios de produtividade e conexão direta com canais como WhatsApp (Evolution API) e CRM.",
    "descEn": "Omnichannel Chatwoot platform integration and customization for enterprise customer service. Features custom routing workflows, chat distribution, webhooks, productivity reports, and direct integration with WhatsApp (Evolution API) and CRM.",
    "tags": [
      "saas",
      "Chatwoot",
      "Docker",
      "Node.js"
    ],
    "link": null,
    "featured": false,
    "color": "#0284c7"
  },
  {
    "id": "n8n-forms",
    "namePt": "Formulários & Workflows n8n",
    "nameEn": "n8n Forms & Workflows",
    "taglinePt": "Automação de processos & dados",
    "taglineEn": "Process automation & data flows",
    "descPt": "Sistema de formulários corporativos dinâmicos e altamente personalizados integrados a bancos de dados PostgreSQL e ferramentas internas via pipelines no n8n. Automação de validação de dados, envio de notificações e sincronização por webhooks em tempo real.",
    "descEn": "Custom dynamic corporate form system integrated with PostgreSQL databases and internal tools via n8n automation pipelines. Includes real-time data validation, notification triggers, and webhook synchronization.",
    "tags": [
      "saas",
      "n8n",
      "PostgreSQL",
      "Node.js"
    ],
    "link": null,
    "featured": true,
    "color": "#ea580c"
  },
  {
    "id": "engaja-site",
    "namePt": "Engaja Soluções Corporativas",
    "nameEn": "Engaja Corporate Solutions",
    "taglinePt": "Landing page & site completo (SEO)",
    "taglineEn": "Full landing page & portal (SEO)",
    "descPt": "Site institucional e landing page completa desenvolvida para a Engaja Soluções Corporativas. Foco total em otimização avançada de SEO técnico e semântico, arquitetura responsiva de alta conversão, tempos mínimos de carregamento e identidade visual corporativa.",
    "descEn": "Institutional website and full landing page built for Engaja Soluções Corporativas. Total focus on technical and semantic SEO, high-conversion responsive architecture, ultra-fast load times, and corporate brand identity.",
    "tags": [
      "site",
      "React",
      "SEO",
      "Next.js"
    ],
    "link": "https://engaja.com.br/",
    "featured": false,
    "color": "#7c3aed"
  },
  {
    "id": "imobsystem",
    "namePt": "ImobSystem",
    "nameEn": "ImobSystem",
    "taglinePt": "Projeto acadêmico (ETEC)",
    "taglineEn": "Academic project (ETEC)",
    "descPt": "Sistema para gerenciamento de imóveis, clientes e proprietários desenvolvido como projeto acadêmico na ETEC utilizando C#, .NET e ASP.NET Core com Entity Framework e SQL Server. Inclui busca avançada com filtros dinâmicos por localização, tipo de imóvel e faixa de preço.",
    "descEn": "Real estate, client, and landlord management system developed during technical school (ETEC) using C#, .NET, and ASP.NET Core with Entity Framework and SQL Server. Features advanced property search with filters by location, type, and price range.",
    "tags": [
      "saas",
      "C#",
      ".NET",
      "SQL Server"
    ],
    "link": null,
    "featured": true,
    "color": "#512bd4"
  },
  {
    "id": "santa-izabel",
    "namePt": "Santa Izabel & Herder Agro",
    "nameEn": "Santa Izabel & Herder Agro",
    "taglinePt": "Landing page industrial / agro",
    "taglineEn": "Industrial & agro landing page",
    "descPt": "Landing page completa de alta fidelidade visual desenvolvida para a multinacional Santa Izabel / Herder do Brasil (implementos agrícolas). Apresentação de catálogo industrial, responsividade total, UX moderna e foco em geração de leads comerciais.",
    "descEn": "High-fidelity full landing page developed for multinational Santa Izabel / Herder do Brasil (agricultural implements). Displays an industrial catalog with modern UX, full mobile responsiveness, and lead capture optimization.",
    "tags": [
      "site",
      "React",
      "JavaScript",
      "SEO"
    ],
    "link": null,
    "featured": false,
    "color": "#16a34a"
  },
  {
    "id": "farmais",
    "namePt": "Farmais",
    "nameEn": "Farmais",
    "taglinePt": "Trabalho acadêmico (IFSP)",
    "taglineEn": "Academic project (IFSP)",
    "descPt": "Catálogo online e consulta de produtos para farmácia desenvolvido como trabalho acadêmico no IFSP utilizando Vue.js e JavaScript. Consumo de API REST, sistema de busca em tempo real, navegação por categorias de medicamentos e filtros interativos.",
    "descEn": "Online pharmacy catalog and product lookup platform developed as an academic project at IFSP using Vue.js and JavaScript. Integrates REST APIs, real-time search, medicine category navigation, and dynamic filtering.",
    "tags": [
      "app",
      "Vue.js",
      "JavaScript",
      "REST API"
    ],
    "link": null,
    "featured": false,
    "color": "#41b883"
  }
];
