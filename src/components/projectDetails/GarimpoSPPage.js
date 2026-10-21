import React from "react";
import garimpoLogo from "../../assets/garimpo_card.png";

export default function GarimpoSPPage({ lang }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Curadoria",
      titleEn: "Curation",
      descPt: "Seleção feita à mão dos brechós de São Paulo que valem a visita.",
      descEn: "A hand-picked selection of São Paulo thrift stores worth visiting.",
      iconPt: "// CURADORIA",
      iconEn: "// CURATION"
    },
    {
      titlePt: "Mapa",
      titleEn: "Map",
      descPt: "Os brechós ficam plotados num mapa para montar o roteiro de garimpo por região.",
      descEn: "Stores are plotted on a map so you can plan a thrifting route by area.",
      iconPt: "// MAPA",
      iconEn: "// MAP"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Curadoria • Mapa • Moda</div>
            <h1 className="hero-title">GarimpoSP</h1>
            <p className="hero-subtitle">
              {pt
                ? "Curadoria de brechós de São Paulo, plotados num site para quem gosta de garimpar roupa."
                : "A curated selection of São Paulo thrift stores, plotted on a website for people who love thrifting."}
            </p>
            <div style={{ marginTop: "2rem" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "PROJETO PESSOAL" : "PERSONAL PROJECT"}
              </span>
            </div>
          </div>
          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={garimpoLogo} alt="GarimpoSP" className="hero-logo" style={{ maxWidth: "340px", display: "block" }} />
          </div>
        </section>

        <section className="features-section" style={{ marginTop: "3rem" }}>
          {features.map((f, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-wrapper">{pt ? f.iconPt : f.iconEn}</div>
              <h3 className="feature-title">{pt ? f.titlePt : f.titleEn}</h3>
              <p className="feature-description">{pt ? f.descPt : f.descEn}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
