import React from "react";
import calciteLogo from "../../assets/calcite_card.png";

export default function CalcitePage({ lang }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Notas no formato do Obsidian",
      titleEn: "Obsidian-Compatible Notes",
      descPt: "Lê e grava os mesmos arquivos .md do vault, então tudo continua abrindo no Obsidian sem conversão.",
      descEn: "Reads and writes the vault's own .md files, so everything still opens in Obsidian with no conversion.",
      iconPt: "// MARKDOWN",
      iconEn: "// MARKDOWN"
    },
    {
      titlePt: "Kanban & Pipeline",
      titleEn: "Kanban & Pipeline",
      descPt: "Kanban de tarefas e um pipeline de projetos que se reorganiza sozinho conforme as tarefas abertas de cada projeto.",
      descEn: "A task kanban and a project pipeline that reorganizes itself based on each project's open tasks.",
      iconPt: "// KANBAN",
      iconEn: "// KANBAN"
    },
    {
      titlePt: "Agente que escreve",
      titleEn: "Writing Agent",
      descPt: "Um agente com LLM propõe mudanças nas notas a partir de uma descrição; nada é gravado sem aprovação.",
      descEn: "An LLM agent proposes note changes from a plain description; nothing is saved without approval.",
      iconPt: "// LLM",
      iconEn: "// LLM"
    },
    {
      titlePt: "Planilhas & Anexos",
      titleEn: "Spreadsheets & Attachments",
      descPt: "Notas viram planilhas com abas e resumo calculado, e aceitam anexos como áudio e documentos.",
      descEn: "Notes can become spreadsheets with tabs and computed summaries, and accept attachments like audio and documents.",
      iconPt: "// PLANILHAS",
      iconEn: "// SPREADSHEETS"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Go • React • Markdown • LLM</div>
            <h1 className="hero-title">Calcite</h1>
            <p className="hero-subtitle">
              {pt
                ? "Segundo cérebro web: notas, kanban, pipeline de projetos e planilhas num só lugar, acessível de qualquer dispositivo e compatível com o Obsidian."
                : "A web-based second brain: notes, kanban, project pipeline, and spreadsheets in one place, reachable from any device and compatible with Obsidian."}
            </p>
            <div style={{ marginTop: "2rem" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "USO PESSOAL" : "PERSONAL TOOL"}
              </span>
            </div>
          </div>
          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={calciteLogo} alt="Calcite" className="hero-logo" style={{ maxWidth: "340px", display: "block" }} />
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

        <section style={{ marginTop: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "1.8rem" }}>
            {pt ? "Sobre o Desenvolvimento" : "Development Overview"}
          </h2>
          <div style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: "0px", padding: "2rem",
            fontSize: "0.95rem", color: "var(--muted2)", lineHeight: "1.8"
          }}>
            <p style={{ margin: "0 0 1rem" }}>
              {pt
                ? "Nasceu de dois limites do Obsidian: o kanban era travado e não conversava com as notas, e acessar o vault fora do PC era sempre uma gambiarra. Em vez de migrar, construí uma camada web por cima do mesmo vault."
                : "It came from two Obsidian limits: the kanban was clunky and disconnected from the notes, and reaching the vault away from the PC was always a hack. Instead of migrating, I built a web layer on top of the same vault."}
            </p>
            <p style={{ margin: 0 }}>
              {pt
                ? "O servidor é em Go, com o front em React embutido no próprio binário e acesso protegido por senha. Roda como serviço sempre ligado na minha máquina e fica disponível pela internet por um túnel da Cloudflare."
                : "The server is written in Go, with the React front end embedded in the binary and password-protected access. It runs as an always-on service on my machine and is reachable online through a Cloudflare tunnel."}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
