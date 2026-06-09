import React, { useState, useEffect } from "react";
import Ambient from "./components/common/Ambient";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import HomePage from "./components/sections/HomePage";
import ProjectsPage from "./components/sections/ProjectsPage";
import SkillsPage from "./components/sections/SkillsPage";
import ContactPage from "./components/sections/ContactPage";
import TyChat from "./components/chat/TyChat";
import "./styles/index.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const pages = {
    home: <HomePage lang={lang} setPage={setPage} />,
    projects: <ProjectsPage lang={lang} />,
    skills: <SkillsPage lang={lang} />,
    contact: <ContactPage lang={lang} />,
  };

  return (
    <>
      <Ambient />
      <Nav page={page} setPage={setPage} lang={lang} setLang={setLang} />
      {pages[page]}
      <Footer lang={lang} />
      <TyChat lang={lang} />
    </>
  );
}
