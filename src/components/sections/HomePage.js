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
            ? "Desenvolvedor Júnior | BI | SQL | JS | .NET & C#"
            : "Junior Developer | BI | SQL | JS | .NET & C#"}
        </div>
        <h1 className="hero-h1">
          {pt ? "Oi, sou o" : "Hi, I'm"}
          <span className="line2">Pietro!</span>
        </h1>
        <p className="hero-desc">
          {pt ? (
            <>
              Desenvolvedor <strong>Full-Stack</strong> especialista em <strong>sistemas legados</strong> e na sua modernização. Atua com bancos relacionais (<strong>Oracle SQL</strong>, PostgreSQL e SQL Server), C#/.NET e pipelines de dados integrados a sistemas corporativos.
            </>
          ) : (
            <>
              <strong>Full-Stack</strong> Developer specialized in <strong>legacy systems</strong> and their modernization. Works with relational databases (<strong>Oracle SQL</strong>, PostgreSQL, and SQL Server), C#/.NET, and data pipelines integrated with corporate systems.
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
