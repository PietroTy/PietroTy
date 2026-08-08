import React from "react";
import eriumLogo from "../../assets/erium_logo.jpg";

export default function EriumPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Cálculo de Bagagem",
      titleEn: "Baggage Calculator",
      descPt: "Módulo interativo para pesagem, dimensões e cálculo de taxas adicionais com base em diretrizes reais da ANAC.",
      descEn: "Interactive module for weighing, dimension check, and fee calculations based on real ANAC guidelines.",
      icon: "// BAGGAGE"
    },
    {
      titlePt: "Controle de Passaporte",
      titleEn: "Passport Validation",
      descPt: "Checklist inteligente e simulador de requisitos para emissão e validade de documentos internacionais de viagem.",
      descEn: "Smart checklist and requirements simulator for the issuance and validity of international travel documents.",
      icon: "// PASSPORT"
    },
    {
      titlePt: "Normas de Voo",
      titleEn: "Flight Regulations",
      descPt: "Biblioteca centralizada de regras de conduta, direitos do passageiro e regulamentos de segurança de aviação.",
      descEn: "Centralized library of conduct rules, passenger rights, and aviation safety regulations.",
      icon: "// RULES"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">

        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">
              {pt ? "TCC • Ensino Técnico em Desenvolvimento de Sistemas (CPS / ETEC)" : "Capstone • Systems Development Tech Degree (CPS / ETEC)"}
            </div>
            <h1 className="hero-title">
              Erium TCC
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Trabalho de Conclusão de Curso (TCC) do Ensino Técnico em Desenvolvimento de Sistemas no Centro Paula Souza (ETEC). Um toolkit full-stack completo para auxílio a passageiros de viagens aéreas, com frontend em TypeScript/Vite/React e backend em Node.js/Express na Vercel."
                : "Capstone Project (TCC) for the Systems Development Tech Degree at Centro Paula Souza (ETEC). A full-stack air travel passenger toolkit with a TypeScript/Vite/React frontend and Node.js/Express backend on Vercel."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://erium-api.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 24px" }}
              >
                <span>{pt ? "Acessar API na Vercel" : "Access Vercel API"} &rarr;</span>
              </a>
              <a
                href="https://github.com/anthonyDev01/TCC--Erium"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 24px" }}
              >
                <span>{pt ? "GitHub (Frontend)" : "GitHub (Frontend)"} &rarr;</span>
              </a>
              <a
                href="https://github.com/anthonyDev01/Erium-api"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 24px" }}
              >
                <span>{pt ? "GitHub (Backend)" : "GitHub (Backend)"} &rarr;</span>
              </a>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => setModalData(eriumLogo)}
            >
              <img 
                src={eriumLogo} 
                alt="Erium Logo Centro Paula Souza" 
                className="hero-image" 
                style={{ maxWidth: "280px", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.5)", border: "2px solid var(--border)" }}
              />
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="features-section" style={{ marginTop: "3rem" }}>
          {features.map((f, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-wrapper">{f.icon}</div>
              <h3 className="feature-title">{pt ? f.titlePt : f.titleEn}</h3>
              <p className="feature-description">{pt ? f.descPt : f.descEn}</p>
            </div>
          ))}
        </section>

        {/* Academic Capstone & Team Section */}
        <section 
          style={{ 
            marginTop: "4rem", 
            background: "rgba(124, 58, 237, 0.05)", 
            border: "1px solid rgba(124, 58, 237, 0.2)", 
            borderRadius: "24px", 
            padding: "2.5rem 2rem" 
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--p2)", fontFamily: "var(--mono)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <span>{`// ACADEMIC CAPSTONE & TEAM`}</span>
          </div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "1rem", color: "#fff" }}>
            {pt ? "Trabalho de Conclusão de Curso (TCC) - ETEC / CPS" : "Technical Capstone Project (TCC) - ETEC / CPS"}
          </h2>
          <p style={{ color: "var(--muted2)", lineHeight: "1.7", fontSize: "0.98rem", marginBottom: "1.5rem" }}>
            {pt ? (
              <>
                O <strong>Erium TCC</strong> foi desenvolvido como projeto final de graduação técnica do curso de <strong>Técnico em Desenvolvimento de Sistemas</strong> no <strong>Centro Paula Souza (ETEC)</strong>. A arquitetura foi dividida entre o cliente web em <strong>TypeScript / React / Vite</strong> e o servidor API RESTful em <strong>Node.js / Express</strong> (hospedado na Vercel), construído de forma colaborativa por uma equipe com contribuição direta do dev <strong>Anthony Chukwudi</strong> (<a href="https://github.com/anthonyDev01" target="_blank" rel="noopener noreferrer" style={{ color: "var(--p2)", textDecoration: "underline" }}>@anthonyDev01</a>).
              </>
            ) : (
              <>
                <strong>Erium TCC</strong> was developed as the final capstone project for the <strong>Systems Development Tech Degree</strong> at <strong>Centro Paula Souza (ETEC)</strong>. The architecture is split between a <strong>TypeScript / React / Vite</strong> web frontend and a <strong>Node.js / Express</strong> RESTful API backend (hosted on Vercel), collaboratively built in a team featuring direct contributions from <strong>Anthony Chukwudi</strong> (<a href="https://github.com/anthonyDev01" target="_blank" rel="noopener noreferrer" style={{ color: "var(--p2)", textDecoration: "underline" }}>@anthonyDev01</a>).
              </>
            )}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--card)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
              <div style={{ color: "var(--p2)", fontFamily: "var(--mono)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                {`// FRONTEND WEB (TYPESCRIPT / VITE)`}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "#fff" }}>
                TCC--Erium (TypeScript + CSS)
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--muted2)", lineHeight: "1.5", marginBottom: "1.2rem" }}>
                {pt 
                  ? "Aplicação web em TypeScript (70.8%), React e Vite com telas de login, gerenciamento de mala e animações." 
                  : "TypeScript (70.8%) React & Vite web app featuring authentication screens, luggage management, and animations."}
              </p>
              <a
                href="https://github.com/anthonyDev01/TCC--Erium"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: "8px 16px", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span>{pt ? "Acessar Repositório Frontend" : "Access Frontend Repo"} &rarr;</span>
              </a>
            </div>

            <div style={{ background: "var(--card)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
              <div style={{ color: "var(--p2)", fontFamily: "var(--mono)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                {`// BACKEND API (NODE.JS / VERCEL)`}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "#fff" }}>
                Erium-api (JavaScript / Express)
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--muted2)", lineHeight: "1.5", marginBottom: "1.2rem" }}>
                {pt 
                  ? "API RESTful em Node.js (100% JavaScript) com rotas de autenticação, middlewares e persistência de dados em banco, hospedada na Vercel." 
                  : "RESTful Node.js (100% JavaScript) API with authentication routes, middlewares, and database persistence hosted on Vercel."}
              </p>
              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                <a
                  href="https://erium-api.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-fill"
                  style={{ padding: "8px 16px", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <span>{pt ? "Ver na Vercel" : "View on Vercel"} &rarr;</span>
                </a>
                <a
                  href="https://github.com/anthonyDev01/Erium-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: "8px 16px", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <span>{pt ? "GitHub API" : "GitHub API"} &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Image Modal */}
        {modalData && (
          <div 
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(10px)",
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              cursor: "pointer"
            }}
            onClick={() => setModalData(null)}
          >
            <div 
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <button
                onClick={() => setModalData(null)}
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "0",
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  color: "#fff",
                  fontSize: "1.5rem",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
                }}
                title={pt ? "Fechar" : "Close"}
              >
                ✕
              </button>
              <img 
                src={modalData} 
                alt="Erium Logo Screenshot"
                style={{
                  maxHeight: "80vh",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "28px",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9)",
                  border: "3px solid rgba(255,255,255,0.2)"
                }}
              />
            </div>
          </div>
        )}

        {/* Tech Stack Footer */}
        <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                Frontend Web
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                TypeScript (70.8%), React & Vite
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                Backend API
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Node.js, Express & JavaScript (Vercel)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                Hospedagem & API
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                erium-api.vercel.app
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
