import React from "react";
import SectionHeader from "../common/SectionHeader";
import Timeline from "./Timeline";
import pitImg from "../../assets/pit_avatar.png";

export default function HomePage({ lang, setPage }) {
  const pt = lang === "pt";
  const currentYear = new Date().getFullYear();
  const devYears = currentYear - 2021;
  const dataYears = currentYear - 2024;

  return (
    <div className="page">
      <div className="hero">
        <div className="hero-image-wrapper">
          <img src={pitImg} alt="Pietro Ty" className="hero-avatar" />
        </div>
        <div className="hero-kicker">
          Consultor em Desenvolvimento de Dados | Full-Stack | Data Engineering | AI
        </div>
        <h1 className="hero-h1">
          {pt ? "Oi, sou o" : "Hi, I'm"}
          <span className="line2">Pietro!</span>
        </h1>
        <p className="hero-desc">
          {pt ? (
            <>
              Consultor em <strong>Desenvolvimento de Dados</strong> na Engaja, Desenvolvedor <strong>Full-Stack</strong>, Engenheiro de <strong>Dados</strong> e Pesquisador em <strong>IA</strong>. Atua com PostgreSQL, Power BI, ETL, automações e produtos digitais de ponta a ponta.
            </>
          ) : (
            <>
              <strong>Data Development Consultant</strong> at Engaja, <strong>Full-Stack</strong> Developer, <strong>Data</strong> Engineer, and <strong>AI</strong> Researcher. Works with PostgreSQL, Power BI, ETL, automation, and end-to-end digital products.
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
            ["17+", pt ? "projetos e soluções" : "projects and solutions"],
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
