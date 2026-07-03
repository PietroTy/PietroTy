import React from "react";

export default function Nav({ page, setPage, lang, setLang }) {
  const t =
    lang === "pt"
      ? { home: "Início", projects: "Projetos", skills: "Skills", contact: "Contato" }
      : { home: "Home", projects: "Projects", skills: "Skills", contact: "Contact" };

  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => setPage("home")}>
        Pietro<em>Ty</em>
      </div>
      <div className="nav-links">
        {[
          ["home", t.home],
          ["projects", t.projects],
          ["skills", t.skills],
          ["pitcraft", "PitCraft"],
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
