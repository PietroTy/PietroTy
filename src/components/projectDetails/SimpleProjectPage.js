import React from "react";

// Página de projeto no formato da Calcite, montada a partir de src/data/projectPages.js.
export default function SimpleProjectPage({ lang, setPage, project }) {
  const pt = lang === "pt";
  const tr = (v) => (typeof v === "string" ? v : pt ? v.pt : v.en);

  return (
    <div className="page pitcraft-page">
      <div className="container">
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">{project.tag}</div>
            <h1 className="hero-title">{project.title}</h1>
            <p className="hero-subtitle">{tr(project.subtitle)}</p>
            {project.origin && (
              <p
                onClick={() => setPage(project.origin.page)}
                style={{ marginTop: "1rem", cursor: "pointer", fontFamily: "var(--mono)", fontSize: "0.85rem", color: "var(--p2)" }}
              >
                {"// "}{pt ? `Surgiu do ${project.origin.name}, o MVP original` : `Grew out of ${project.origin.name}, the original MVP`} &rarr;
              </p>
            )}
            <div style={{ marginTop: "2rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-fill">
                  {pt ? "Acessar site" : "Open website"} &rarr;
                </a>
              )}
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                {"// "}{tr(project.badge)}
              </span>
            </div>
          </div>
          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={project.logo} alt={project.title} className="hero-logo" style={{ maxWidth: "340px", display: "block" }} />
          </div>
        </section>

        <section className="features-section" style={{ marginTop: "3rem" }}>
          {project.features.map((f, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-wrapper">{"// "}{tr(f.icon)}</div>
              <h3 className="feature-title">{tr(f.title)}</h3>
              <p className="feature-description">{tr(f.desc)}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "1.8rem" }}>
            {pt ? "Sobre o Desenvolvimento" : "Development Overview"}
          </h2>
          <div style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: "0px", padding: "2rem",
            fontSize: "0.95rem", color: "var(--muted2)", lineHeight: "1.8"
          }}>
            {project.about.map((para, idx) => (
              <p key={idx} style={{ margin: idx === project.about.length - 1 ? 0 : "0 0 1rem" }}>{tr(para)}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
