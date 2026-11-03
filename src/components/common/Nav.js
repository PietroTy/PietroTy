import React from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function Nav({ page, setPage, lang, setLang, handleBack, canGoBack }) {
  const t =
    lang === "pt"
      ? { home: "Início", skills: "Habilidades", projects: "Portfólio", contact: "Contato", back: "Voltar" }
      : { home: "Home", skills: "Skills", projects: "Portfolio", contact: "Contact", back: "Back" };

  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="nav-logo" onClick={() => setPage("home")}>
          Pietro<em>Ty</em>
        </div>
        {page !== "home" && (
          <button
            className="nav-back-btn active"
            onClick={handleBack}
            title={t.back}
            aria-label={t.back}
          >
            <FiArrowLeft className="nav-back-icon" />
            <span className="nav-back-text">{t.back}</span>
          </button>
        )}
      </div>
      <div className="nav-links">
        {[
          ["home", t.home],
          ["skills", t.skills],
          ["projects", t.projects],
          ["contact", t.contact],
        ].map(([k, l]) => (
          <button
            key={k}
            className={`nav-btn${page === k ? " active" : ""}`}
            onClick={() => setPage(k)}
          >
            {l}
          </button>
        ))}

        <button
          className="nav-btn nav-lang"
          onClick={() => setLang((l) => (l === "pt" ? "en" : "pt"))}
        >
          {lang === "pt" ? "EN" : "PT"}
        </button>
      </div>
    </nav>
  );
}
