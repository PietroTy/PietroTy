import React from "react";

export default function EriumPage({ lang, setPage }) {
  const pt = lang === "pt";

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
            <div className="hero-tag">{pt ? "Projeto Acadêmico ETEC" : "ETEC Academic Project"}</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Erium
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Um toolkit full-stack completo para auxílio a passageiros de viagens aéreas, abrangendo regras de aviação, documentação e simulação de bagagem."
                : "A comprehensive full-stack toolkit for air travel passenger assistance, covering aviation rules, documentation guidelines, and baggage simulations."
              }
            </p>

            <div style={{ marginTop: "2rem" }}>
              <button
                onClick={() => setPage("projects")}
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>&larr; {pt ? "Voltar para Projetos" : "Back to Projects"}</span>
              </button>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{
                width: "250px",
                height: "180px",
                background: "linear-gradient(135deg, #10b981, var(--ink2))",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                border: "2px solid var(--border)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
              }}
            >
              <div style={{ fontFamily: "var(--mono)", color: "#fff", fontSize: "1.2rem", fontWeight: "bold" }}>[ERIUM]</div>
              <div style={{ fontFamily: "var(--mono)", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Java / React / SQL</div>
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

        {/* Tech Stack Footer */}
        <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                Backend
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Java & Spring Boot
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                Frontend
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                React.js
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                Database
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                MySQL / PostgreSQL
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
