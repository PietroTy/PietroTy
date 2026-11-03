import React, { useState, useEffect } from "react";
import SectionHeader from "../common/SectionHeader";
import Timeline from "./Timeline";
import PixelIcon from "../common/PixelIcon";
import pitImg from "../../assets/pit_avatar.png";

export default function HomePage({ lang, setPage }) {
  const pt = lang === "pt";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTimeline = () => {
    const el = document.getElementById("timeline-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page">
      <div className="hero">
        <div className="hero-image-wrapper">
          <img src={pitImg} alt="Pietro Ty" className="hero-avatar" />
        </div>
        <div className="hero-kicker">
          {pt
            ? "Desenvolvedor Júnior | Dados | SQL | BI | Automação com IA"
            : "Junior Developer | Data | SQL | BI | AI Automation"}
        </div>
        <h1 className="hero-h1">
          {pt ? "Oi, sou o" : "Hi, I'm"}
          <span className="line2">Pietro!</span>
        </h1>
        <p className="hero-desc">
          {pt ? (
            <>
              Desenvolvedor <strong>Full-Stack</strong> e estudante de Ciência da Computação no IFSP. Trabalho com <strong>dados</strong> (PostgreSQL, SQL, ETL e Power BI), <strong>automação com IA</strong> (n8n e agentes de WhatsApp) e sistemas web, do banco até a infraestrutura na nuvem.
            </>
          ) : (
            <>
              <strong>Full-Stack</strong> developer and Computer Science student at IFSP. I work with <strong>data</strong> (PostgreSQL, SQL, ETL, and Power BI), <strong>AI automation</strong> (n8n and WhatsApp agents), and web systems, from the database to cloud infrastructure.
            </>
          )}
        </p>

        <div className="hero-actions">
          <button className="btn btn-fill" onClick={() => setPage("projects")}>
            {pt ? "Ver portfólio" : "View portfolio"} &rarr;
          </button>
          <button className="btn btn-outline" onClick={() => setPage("contact")}>
            {pt ? "Entre em contato" : "Get in touch"} &rarr;
          </button>
        </div>

        <div
          className={`hero-scroll-indicator ${scrolled ? "hidden" : ""}`}
          onClick={scrollToTimeline}
          title={pt ? "Role para baixo" : "Scroll down"}
        >
          <span>{pt ? "Role para baixo" : "Scroll down"}</span>
          <PixelIcon name="chevron-down" size={16} className="hero-scroll-icon" />
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
