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
import EtlCnpjPage from "./components/sections/EtlCnpjPage";
import DiscordBotPage from "./components/sections/DiscordBotPage";
import PortfolioPage from "./components/sections/PortfolioPage";
import TyChat from "./components/chat/TyChat";
import "./styles/index.css";

const PAGE_KEYS = [
  "home", "projects", "skills", "contact", "pitcraft", 
  "pitcraft-seasons", "laplayer", "stickerbot", "whatsappbot", 
  "gameofdrones", "etl", "discordbot", "portfolio"
];

export default function App() {
  const [pageHistory, setPageHistory] = useState(["home"]);
  const page = pageHistory[pageHistory.length - 1] || "home";
  const [lang, setLang] = useState("pt");
  const [selectedSeasonId, setSelectedSeasonId] = useState("aether");

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
    etl: <EtlCnpjPage lang={lang} setPage={setPage} />,
    discordbot: <DiscordBotPage lang={lang} setPage={setPage} />,
    portfolio: <PortfolioPage lang={lang} setPage={setPage} />,
  };

  return (
    <>
      <Ambient />
      <Nav page={page} setPage={setPage} lang={lang} setLang={setLang} handleBack={handleBack} canGoBack={canGoBack} />
      {pages[page]}
      <Footer lang={lang} />
      <TyChat lang={lang} />
    </>
  );
}

