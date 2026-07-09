import React from "react";
import SectionHeader from "../common/SectionHeader";
import Timeline from "./Timeline";
import pitImg from "../../assets/pit.png";

export default function HomePage({ lang, setPage }) {
  const pt = lang === "pt";
  const currentYear = new Date().getFullYear();
  const devYears = currentYear - 2020;
  const dataYears = currentYear - 2024;

  return (
    <div className="page">
      <div className="hero">
        <div className="hero-image-wrapper">
          <img src={pitImg} alt="Pietro Ty" className="hero-avatar" />
        </div>
        <div className="hero-kicker">
          AI Researcher &amp; Data Engineer | Full-Stack Developer | Python &middot; Machine Learning &middot; LLMs
        </div>
        <h1 className="hero-h1">
          {pt ? "Oi, sou o" : "Hi, I'm"}
          <span className="line2">Pietro!</span>
        </h1>
        <p className="hero-desc">
          {pt ? (
            <>
              Desenvolvedor <strong>Full-Stack</strong>, Engenheiro de <strong>Dados</strong> e
              Pesquisador em <strong>IA</strong>. Especializado em automações inteligentes, pipelines de ETL em larga escala, e soluções com LLMs.
            </>
          ) : (
            <>
              <strong>Full-Stack</strong> Developer, <strong>Data</strong> Engineer, and 
              <strong>AI</strong> Researcher. Specialized in intelligent automations, large-scale ETL pipelines, and LLM solutions.
            </>
          )}
        </p>
        <div className="hero-actions">
          <button className="btn btn-fill" onClick={() => setPage("projects")}>
            {pt ? "Ver projetos" : "View projects"} &rarr;
          </button>
        </div>
        <div className="hero-stats">
          {[
            ["12+", pt ? "projetos open source" : "open source projects"],
            [`${devYears}+`, pt ? "anos desenvolvendo" : "years developing"],
            [`${dataYears}+`, pt ? "anos na área de dados" : "years in data"],
          ].map(([v, l]) => (
            <div
              key={l}
              className="stat"
              style={{ cursor: "pointer" }}
              onClick={() => document.getElementById("timeline-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="stat-val">{v}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div id="timeline-section" className="section">
        <div className="rule" />
        <SectionHeader
          tag={pt ? "trajetória" : "experience"}
          title={
            pt ? (
              <>Minha <em>carreira</em></>
            ) : (
              <>My <em>career</em></>
            )
          }
          sub={pt ? "Clique em cada item para expandir." : "Click each item to expand."}
        />
        <Timeline lang={lang} />
      </div>
    </div>
  );
}
