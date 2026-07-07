import React from "react";
import screenshotImg from "../../assets/home_screenshot_1.jpg";

export default function PortfolioPage({ lang, setPage }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Chatbot de IA Embutido",
      titleEn: "Biographical AI Chatbot",
      descPt: "Um agente conversacional de inteligência artificial alimentado por dados biográficos para responder a recrutadores e visitantes.",
      descEn: "A biographical AI-powered chatbot designed to answer recruiter and visitor questions in real-time.",
      icon: "// CHATBOT"
    },
    {
      titlePt: "Suporte Bilíngue Nativo",
      titleEn: "Native Bilingual Support",
      descPt: "Alternância fluida e instantânea entre os idiomas Português e Inglês em todas as seções e descrições.",
      descEn: "Seamless and instant language toggle between Portuguese and English across all pages and content.",
      icon: "// GLOBAL"
    },
    {
      titlePt: "Pipeline de CI/CD",
      titleEn: "CI/CD Pipeline",
      descPt: "Integração contínua e deploy automatizado para GitHub Pages via workflows estruturados de GitHub Actions.",
      descEn: "Continuous integration and automated delivery to GitHub Pages via structured GitHub Actions workflows.",
      icon: "// AUTOMATION"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        
        {/* Back Button */}
        <div style={{ marginBottom: "1.5rem" }}>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setPage("projects")}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            &larr; {pt ? "Voltar para Projetos" : "Back to Projects"}
          </button>
        </div>

        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">React Frontend App</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Portfólio
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Este website de apresentação profissional. Construído sob um design cyberpunk retrô de pixels, com suporte completo a dois idiomas e IA conversacional integrada."
                : "This professional presentation website. Built with a retro-cyberpunk pixel aesthetic, complete bilingual support, and integrated conversational AI."
              }
            </p>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={screenshotImg} 
              alt="Portfolio Screenshot" 
              className="hero-image" 
              style={{ maxWidth: "400px", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0,0,0,0.3)", border: "2px solid var(--border)" }}
            />
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
                {pt ? "Framework & Estilo" : "Framework & Styling"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                React & Vanilla CSS
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Integração IA" : "AI Integration"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Biographical conversational AI API
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Deploy" : "Deployment"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                GitHub Pages & Actions CI/CD
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
