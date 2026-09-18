import React, { useState, useEffect, useRef } from "react";
import Ambient from "./components/common/Ambient";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import HomePage from "./components/sections/HomePage";
import ServicesPage from "./components/sections/ServicesPage";
import ProjectsPage from "./components/sections/ProjectsPage";
import SkillsPage from "./components/sections/SkillsPage";
import ContactPage from "./components/sections/ContactPage";
import PitCraftPage from "./components/projectDetails/PitCraftPage";
import LaPlayerPage from "./components/projectDetails/LaPlayerPage";
import StickersBotPage from "./components/projectDetails/StickersBotPage";
import WhatsAppBotPage from "./components/projectDetails/WhatsAppBotPage";
import GameOfDronesPage from "./components/projectDetails/GameOfDronesPage";
import DiscordBotPage from "./components/projectDetails/DiscordBotPage";
import PortfolioPage from "./components/projectDetails/PortfolioPage";
import EriumPage from "./components/projectDetails/EriumPage";
import TV2Page from "./components/projectDetails/TV2Page";
import MagikTarotPage from "./components/projectDetails/MagikTarotPage";
import CHubPage from "./components/projectDetails/CHubPage";
import EscribaPage from "./components/projectDetails/EscribaPage";
import DSHubPage from "./components/projectDetails/DSHubPage";
import CVMakerPage from "./components/projectDetails/CVMakerPage";
import BleachCoPage from "./components/projectDetails/BleachCoPage";
import CrmEngajaPage from "./components/projectDetails/CrmEngajaPage";
import EtlCnpjPage from "./components/projectDetails/EtlCnpjPage";
import EngajaSitePage from "./components/projectDetails/EngajaSitePage";
import ChatwootPage from "./components/projectDetails/ChatwootPage";
import N8nFormsPage from "./components/projectDetails/N8nFormsPage";
import SantaIzabelPage from "./components/projectDetails/SantaIzabelPage";
import ImobSystemPage from "./components/projectDetails/ImobSystemPage";
import FarmaisPage from "./components/projectDetails/FarmaisPage";
import TyChat from "./components/chat/TyChat";
import "./styles/index.css";

const PAGE_KEYS = [
  "home", "services", "projects", "skills", "contact", "pitcraft", 
  "pitcraft-seasons", "laplayer", "stickerbot", "whatsappbot", 
  "gameofdrones", "discordbot", "portfolio", "erium", "tv2", "magiktarot", "magik-tarot",
  "chub", "escriba", "dshub", "cvmaker", "bleach-co", "bleachco", "crm-engaja", "crmengaja", "etl-cnpj", "etlcnpj",
  "engaja-site", "engajasite", "chatwoot-custom", "n8n-forms", "santa-izabel", "imobsystem", "farmais"
];

const PAGE_METADATA = {
  home: {
    pt: {
      title: "PietroTy | Consultor em Desenvolvimento de Dados",
      desc: "Portfólio de Pietro Turci Moraes Martins — Consultor em Desenvolvimento de Dados, Desenvolvedor Full-Stack, Engenheiro de Dados e Pesquisador em IA. Experiência com PostgreSQL, Power BI, ETL, automações e LLMs."
    },
    en: {
      title: "PietroTy | Data Development Consultant",
      desc: "Pietro Turci Moraes Martins' portfolio — Data Development Consultant, Full-Stack Developer, Data Engineer, and AI Researcher experienced with PostgreSQL, Power BI, ETL, automation, and LLMs."
    }
  },
  services: {
    pt: {
      title: "Serviços | Pietro Ty",
      desc: "Soluções em Desenvolvimento Web, Consultoria de Dados, Automações Inteligentes e Chatbots personalizados por Pietro Ty."
    },
    en: {
      title: "Services | Pietro Ty",
      desc: "Web Development, Data Consulting, Intelligent Automations, and Custom Chatbots by Pietro Ty."
    }
  },
  projects: {
    pt: {
      title: "Portfólio | Pietro Ty",
      desc: "Explore os projetos desenvolvidos por Pietro Ty - Automações inteligentes, bots, APIs, scraping, pipelines de dados e mais."
    },
    en: {
      title: "Portfolio | Pietro Ty",
      desc: "Explore projects developed by Pietro Ty - Intelligent automations, bots, APIs, scraping, data pipelines, and more."
    }
  },
  skills: {
    pt: {
      title: "Serviços & Habilidades | Pietro Ty",
      desc: "Competências e serviços oferecidos por Pietro Ty."
    },
    en: {
      title: "Services & Skills | Pietro Ty",
      desc: "Services and skills offered by Pietro Ty."
    }
  },
  contact: {
    pt: {
      title: "Contato | Pietro Ty",
      desc: "Entre em contato com Pietro Ty para oportunidades de desenvolvimento, pesquisa em IA, projetos freelancer ou parcerias."
    },
    en: {
      title: "Contact | Pietro Ty",
      desc: "Get in touch with Pietro Ty for development opportunities, AI research, freelance projects, or partnerships."
    }
  },
  pitcraft: {
    pt: {
      title: "PitCraft - Servidores de Minecraft | Pietro Ty",
      desc: "Central do servidor de Minecraft PitCraft. Alterne entre temporadas temáticas de mods e vanilla, com chat de voz por proximidade e IP dinâmico."
    },
    en: {
      title: "PitCraft - Minecraft Servers | Pietro Ty",
      desc: "PitCraft Minecraft server hub. Switch between themed modded and vanilla seasons, featuring proximity voice chat and dynamic IP."
    }
  },
  "pitcraft-seasons": {
    pt: {
      title: "PitCraft - Temporadas | Pietro Ty",
      desc: "Histórico, detalhes das instâncias de mods e andamento das temporadas do servidor de Minecraft PitCraft."
    },
    en: {
      title: "PitCraft - Seasons | Pietro Ty",
      desc: "History, details of modded instances, and progress of seasons on the PitCraft Minecraft server."
    }
  },
  laplayer: {
    pt: {
      title: "LaPlayer | Pietro Ty",
      desc: "Conheça o LaPlayer - Player de música e mídia premium desenvolvido por Pietro Ty."
    },
    en: {
      title: "LaPlayer | Pietro Ty",
      desc: "Meet LaPlayer - A premium music and media player developed by Pietro Ty."
    }
  },
  stickerbot: {
    pt: {
      title: "StickerBot | Pietro Ty",
      desc: "Bot automatizado para criação e conversão rápida de figurinhas e stickers."
    },
    en: {
      title: "StickerBot | Pietro Ty",
      desc: "Automated bot for fast sticker creation and conversion."
    }
  },
  whatsappbot: {
    pt: {
      title: "WhatsApp Bot | Pietro Ty",
      desc: "Solução automatizada de bot para WhatsApp com respostas inteligentes e fluxos dinâmicos."
    },
    en: {
      title: "WhatsApp Bot | Pietro Ty",
      desc: "Automated WhatsApp bot solution with intelligent responses and dynamic flows."
    }
  },
  gameofdrones: {
    pt: {
      title: "Game of Drones | Pietro Ty",
      desc: "Projeto de software, visão computacional e inteligência embarcada da equipe Game of Drones do IFSP para a Competição EletroQuad SAE BRASIL."
    },
    en: {
      title: "Game of Drones | Pietro Ty",
      desc: "Software, computer vision, and embedded intelligence project by IFSP's Game of Drones team for the EletroQuad SAE BRASIL competition."
    }
  },

  discordbot: {
    pt: {
      title: "Discord Bot | Pietro Ty",
      desc: "Bot de Discord multifuncional para moderação, utilitários e integração inteligente de chat."
    },
    en: {
      title: "Discord Bot | Pietro Ty",
      desc: "Multifunctional Discord bot for moderation, utilities, and smart chat integration."
    }
  },
  portfolio: {
    pt: {
      title: "Portfólio | Pietro Ty",
      desc: "Apresentação profissional e trajetória de carreira de Pietro Ty."
    },
    en: {
      title: "Portfolio | Pietro Ty",
      desc: "Professional showcase and career trajectory of Pietro Ty."
    }
  },
  erium: {
    pt: {
      title: "Erium TCC | Pietro Ty",
      desc: "Conheça o Erium TCC - Toolkit de auxílio a viagens aéreas desenvolvido como Trabalho de Conclusão de Curso do curso Técnico em Desenvolvimento de Sistemas na ETEC."
    },
    en: {
      title: "Erium TCC | Pietro Ty",
      desc: "Meet Erium TCC - A flight passenger assistance toolkit developed for the Systems Development technical degree at ETEC."
    }
  },
  tv2: {
    pt: {
      title: "TV2 | Pietro Ty",
      desc: "Conheça a TV2 - Plataforma de streaming/televisão sincronizada em tempo real com estética vintage CRT, controles rotativos analógicos e chat embutido em celular flip."
    },
    en: {
      title: "TV2 | Pietro Ty",
      desc: "Meet TV2 - A real-time synchronized TV and streaming platform featuring vintage CRT aesthetics, analog rotary knobs, and a retro flip-phone chat."
    }
  },
  magiktarot: {
    pt: {
      title: "MagikTarot | Pietro Ty",
      desc: "Conheça o MagikTarot - Plataforma automatizada de consultas de Tarot com Mercado Pago, áudio ambiente, relatórios em PDF e painel administrativo."
    },
    en: {
      title: "MagikTarot | Pietro Ty",
      desc: "Meet MagikTarot - Automated Tarot consultation platform featuring Mercado Pago payments, ambient audio, PDF report generation, and admin dashboard."
    }
  },
  "magik-tarot": {
    pt: {
      title: "MagikTarot | Pietro Ty",
      desc: "Conheça o MagikTarot - Plataforma automatizada de consultas de Tarot com Mercado Pago, áudio ambiente, relatórios em PDF e painel administrativo."
    },
    en: {
      title: "MagikTarot | Pietro Ty",
      desc: "Meet MagikTarot - Automated Tarot consultation platform featuring Mercado Pago payments, ambient audio, PDF report generation, and admin dashboard."
    }
  }
};

const getInitialPage = () => {
  const hash = window.location.hash.replace("#", "").trim();
  return PAGE_KEYS.includes(hash) ? hash : "home";
};

export default function App() {
  const [pageHistory, setPageHistory] = useState(() => [getInitialPage()]);
  const page = pageHistory[pageHistory.length - 1] || "home";
  const [lang, setLang] = useState("pt");
  const [selectedSeasonId, setSelectedSeasonId] = useState("aether");

  const isBackNavigation = useRef(false);

  // Sync document title and meta tags when page or language changes
  useEffect(() => {
    const pageMeta = PAGE_METADATA[page] || PAGE_METADATA.home;
    const meta = pageMeta[lang] || pageMeta.pt;
    document.title = meta.title;

    // Update meta description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", meta.desc);

    // Update OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.desc);

    // Update Twitter
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", meta.title);
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", meta.desc);
  }, [page, lang]);

  // Sync state from URL hash on load/hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").trim();
      const targetPage = PAGE_KEYS.includes(hash) ? hash : "home";

      if (isBackNavigation.current) {
        isBackNavigation.current = false;
        return;
      }

      setPageHistory((prev) => {
        const currentPage = prev[prev.length - 1];
        if (currentPage === targetPage) return prev;

        // If user clicked browser's native back button
        if (prev.length > 1 && prev[prev.length - 2] === targetPage) {
          return prev.slice(0, -1);
        }

        // Forward navigation
        return [...prev, targetPage];
      });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Sync hash and scroll on page change
  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "").trim();
    if (page !== currentHash) {
      if (page === "home") {
        if (window.location.hash) {
          window.history.pushState("", document.title, window.location.pathname + window.location.search);
        }
      } else {
        window.location.hash = page;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const setPage = (nextPage) => {
    if (PAGE_KEYS.includes(nextPage)) {
      window.location.hash = nextPage === "home" ? "" : nextPage;
    }
  };

  const handleBack = () => {
    isBackNavigation.current = true;
    setPageHistory((prev) => {
      if (prev.length > 1) {
        const nextHist = prev.slice(0, -1);
        const prevPage = nextHist[nextHist.length - 1];
        window.location.hash = prevPage === "home" ? "" : prevPage;
        return nextHist;
      }

      const currentPage = prev[prev.length - 1] || "home";
      const isMainSection = ["home", "projects", "skills", "contact"].includes(currentPage);
      const targetPage = isMainSection ? "home" : "projects";

      if (currentPage === targetPage) {
        if (targetPage !== "home") {
          window.location.hash = "";
          return ["home"];
        }
        return prev;
      }

      window.location.hash = targetPage === "home" ? "" : targetPage;
      return ["home", targetPage];
    });
  };

  const canGoBack = pageHistory.length > 1;

  const pages = {
    home: <HomePage lang={lang} setPage={setPage} />,
    services: <ServicesPage lang={lang} setPage={setPage} />,
    projects: <ProjectsPage lang={lang} setPage={setPage} />,
    skills: <ServicesPage lang={lang} setPage={setPage} />,
    contact: <ContactPage lang={lang} />,
    pitcraft: (
      <PitCraftPage
        lang={lang}
        subPage="hub"
        setSubPage={(p) => setPage(p === "temporadas" ? "pitcraft-seasons" : "pitcraft")}
        selectedSeasonId={selectedSeasonId}
        setSelectedSeasonId={setSelectedSeasonId}
      />
    ),
    "pitcraft-seasons": (
      <PitCraftPage
        lang={lang}
        subPage="temporadas"
        setSubPage={(p) => setPage(p === "temporadas" ? "pitcraft-seasons" : "pitcraft")}
        selectedSeasonId={selectedSeasonId}
        setSelectedSeasonId={setSelectedSeasonId}
      />
    ),
    laplayer: <LaPlayerPage lang={lang} setPage={setPage} />,
    stickerbot: <StickersBotPage lang={lang} setPage={setPage} />,
    whatsappbot: <WhatsAppBotPage lang={lang} setPage={setPage} />,
    gameofdrones: <GameOfDronesPage lang={lang} setPage={setPage} />,

    discordbot: <DiscordBotPage lang={lang} setPage={setPage} />,
    portfolio: <PortfolioPage lang={lang} setPage={setPage} />,
    erium: <EriumPage lang={lang} setPage={setPage} />,
    tv2: <TV2Page lang={lang} setPage={setPage} />,
    magiktarot: <MagikTarotPage lang={lang} setPage={setPage} />,
    "magik-tarot": <MagikTarotPage lang={lang} setPage={setPage} />,
    chub: <CHubPage lang={lang} setPage={setPage} />,
    escriba: <EscribaPage lang={lang} setPage={setPage} />,
    dshub: <DSHubPage lang={lang} setPage={setPage} />,
    cvmaker: <CVMakerPage lang={lang} setPage={setPage} />,
    "bleach-co": <BleachCoPage lang={lang} setPage={setPage} />,
    bleachco: <BleachCoPage lang={lang} setPage={setPage} />,
    "crm-engaja": <CrmEngajaPage lang={lang} setPage={setPage} />,
    crmengaja: <CrmEngajaPage lang={lang} setPage={setPage} />,
    "etl-cnpj": <EtlCnpjPage lang={lang} setPage={setPage} />,
    etlcnpj: <EtlCnpjPage lang={lang} setPage={setPage} />,
    "engaja-site": <EngajaSitePage lang={lang} setPage={setPage} />,
    engajasite: <EngajaSitePage lang={lang} setPage={setPage} />,
    "chatwoot-custom": <ChatwootPage lang={lang} setPage={setPage} />,
    chatwootcustom: <ChatwootPage lang={lang} setPage={setPage} />,
    "n8n-forms": <N8nFormsPage lang={lang} setPage={setPage} />,
    n8nforms: <N8nFormsPage lang={lang} setPage={setPage} />,
    "santa-izabel": <SantaIzabelPage lang={lang} setPage={setPage} />,
    santaizabel: <SantaIzabelPage lang={lang} setPage={setPage} />,
    imobsystem: <ImobSystemPage lang={lang} setPage={setPage} />,
    farmais: <FarmaisPage lang={lang} setPage={setPage} />,
  };

  return (
    <div className="app-wrapper">
      <Ambient />
      <Nav page={page} setPage={setPage} lang={lang} setLang={setLang} handleBack={handleBack} canGoBack={canGoBack} />
      {pages[page]}
      <Footer lang={lang} />
      <TyChat lang={lang} />
    </div>
  );
}

