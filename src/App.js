import React, { useState, useEffect } from "react";
import Ambient from "./components/common/Ambient";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import HomePage from "./components/sections/HomePage";
import ProjectsPage from "./components/sections/ProjectsPage";
import SkillsPage from "./components/sections/SkillsPage";
import ContactPage from "./components/sections/ContactPage";
import PitCraftPage from "./components/sections/PitCraftPage";
import LaPlayerPage from "./components/sections/LaPlayerPage";
import StickersBotPage from "./components/sections/StickersBotPage";
import WhatsAppBotPage from "./components/sections/WhatsAppBotPage";
import GameOfDronesPage from "./components/sections/GameOfDronesPage";
import DiscordBotPage from "./components/sections/DiscordBotPage";
import PortfolioPage from "./components/sections/PortfolioPage";
import EriumPage from "./components/sections/EriumPage";
import TyChat from "./components/chat/TyChat";
import "./styles/index.css";

const PAGE_KEYS = [
  "home", "projects", "skills", "contact", "pitcraft", 
  "pitcraft-seasons", "laplayer", "stickerbot", "whatsappbot", 
  "gameofdrones", "discordbot", "portfolio", "erium"
];

const PAGE_METADATA = {
  home: {
    pt: {
      title: "Pietro Ty | Data Engineer & Pesquisador em IA",
      desc: "Portfólio de Pietro Ty - Engenheiro de Dados, Desenvolvedor Full-Stack e Pesquisador em Inteligência Artificial. Especializado em automações inteligentes, pipelines de ETL em larga escala e soluções com LLMs."
    },
    en: {
      title: "Pietro Ty | Data Engineer & AI Researcher",
      desc: "Pietro Ty's Portfolio - Data Engineer, Full-Stack Developer, and AI Researcher. Specialized in intelligent automations, large-scale ETL pipelines, and LLM solutions."
    }
  },
  projects: {
    pt: {
      title: "Projetos | Pietro Ty",
      desc: "Explore os projetos desenvolvidos por Pietro Ty - Automações inteligentes, bots, APIs, scraping, pipelines de dados e mais."
    },
    en: {
      title: "Projects | Pietro Ty",
      desc: "Explore projects developed by Pietro Ty - Intelligent automations, bots, APIs, scraping, data pipelines, and more."
    }
  },
  skills: {
    pt: {
      title: "Habilidades | Pietro Ty",
      desc: "Competências e stack tecnológica de Pietro Ty: Python, Node.js, React, SQL, Cloud, DevOps, IA e Engenharia de Dados."
    },
    en: {
      title: "Skills | Pietro Ty",
      desc: "Skills and tech stack of Pietro Ty: Python, Node.js, React, SQL, Cloud, DevOps, AI, and Data Engineering."
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
      desc: "Jogo/simulação interativa de drones desenvolvido por Pietro Ty."
    },
    en: {
      title: "Game of Drones | Pietro Ty",
      desc: "Interactive drone simulation/game developed by Pietro Ty."
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
      title: "Erium | Pietro Ty",
      desc: "Conheça o Erium - Toolkit de auxílio a viagens aéreas desenvolvido por Pietro Ty como TCC técnico."
    },
    en: {
      title: "Erium | Pietro Ty",
      desc: "Meet Erium - A flight passenger assistance toolkit developed by Pietro Ty for his ETEC technical degree."
    }
  }
};

export default function App() {
  const [pageHistory, setPageHistory] = useState(["home"]);
  const page = pageHistory[pageHistory.length - 1] || "home";
  const [lang, setLang] = useState("pt");
  const [selectedSeasonId, setSelectedSeasonId] = useState("aether");

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
      const hash = window.location.hash.replace("#", "");
      if (PAGE_KEYS.includes(hash)) {
        setPageHistory((prev) => {
          if (prev[prev.length - 1] === hash) return prev;
          return [...prev, hash];
        });
      } else if (!hash) {
        setPageHistory(["home"]);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Sync hash and scroll on page change
  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "");
    if (page !== currentHash) {
      if (page === "home") {
        // Clear hash but keep anchor
        window.history.pushState(null, null, " ");
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
    setPageHistory((prev) => {
      if (prev.length <= 1) {
        window.location.hash = "";
        return ["home"];
      }
      const nextHist = prev.slice(0, -1);
      const prevPage = nextHist[nextHist.length - 1];
      window.location.hash = prevPage === "home" ? "" : prevPage;
      return nextHist;
    });
  };

  const canGoBack = pageHistory.length > 1;

  const pages = {
    home: <HomePage lang={lang} setPage={setPage} />,
    projects: <ProjectsPage lang={lang} setPage={setPage} />,
    skills: <SkillsPage lang={lang} />,
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

