import React, { useState } from "react";
import engajaLogo from "../../assets/engaja_logo.jpg";
import screenshot1 from "../../assets/engaja_screenshot_1.png";
import screenshot2 from "../../assets/engaja_screenshot_2.png";
import screenshot3 from "../../assets/engaja_screenshot_3.png";

export default function EngajaSitePage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = useState(null);

  const features = [
    {
      titlePt: "Otimização Avançada de SEO",
      titleEn: "Advanced Technical SEO",
      descPt: "Arquitetura técnica e semântica projetada para ranqueamento nos mecanismos de busca, com meta tags dinâmicas, dados estruturados JSON-LD e tempos mínimos de carregamento.",
      descEn: "Technical and semantic architecture designed for search engine positioning, featuring dynamic meta tags, JSON-LD structured data, and sub-second load times.",
      iconPt: "// SEO TÉCNICO",
      iconEn: "// TECHNICAL SEO"
    },
    {
      titlePt: "Identidade Visual & UX Corporativa",
      titleEn: "Corporate Identity & High-Conversion UX",
      descPt: "Design moderno e elegante adaptado para o setor corporativo, focado na jornada do usuário, clareza na proposta de valor e conversão em agendamentos de reuniões.",
      descEn: "Modern and elegant design tailored for corporate enterprise services, focused on user journey clarity, value proposition presentation, and lead conversion.",
      iconPt: "// DESIGN & CONVERSÃO",
      iconEn: "// UX & CONVERSION"
    },
    {
      titlePt: "Arquitetura 100% Responsiva & Ultra-Rápida",
      titleEn: "Fully Responsive & Lightning Fast",
      descPt: "Layout fluido adaptável a smartphones, tablets e desktops de alta resolução, otimizado para atingir métricas máximas nos testes de velocidade do Google Core Web Vitals.",
      descEn: "Fluid responsive layout engineered across mobile, tablet, and high-res desktop viewports, optimized for maximum Google Core Web Vitals performance scores.",
      iconPt: "// ALTA PERFORMANCE",
      iconEn: "// CORE WEB VITALS"
    }
  ];

  const screenshots = [
    {
      img: screenshot1,
      tag: "HOME & HERO",
      titlePt: "Apresentação & Identidade Corporativa",
      titleEn: "Hero Section & Brand Identity",
      descPt: "Visualização da seção principal com a proposta de valor, navegação fluida e elementos visuais de alta conversão.",
      descEn: "Main hero section view featuring brand value proposition, clean navigation, and call-to-action elements."
    },
    {
      img: screenshot2,
      tag: "SOLUÇÕES & SERVIÇOS",
      titlePt: "Apresentação dos Serviços Corporativos",
      titleEn: "Corporate Services & Solutions",
      descPt: "Seção detalhada de soluções e diferenciais da Engaja Soluções Corporativas com grid moderno e legibilidade otimizada.",
      descEn: "Detailed solution showcase highlighting Engaja Corporate Solutions features with modern grid layout and maximum readability."
    },
    {
      img: screenshot3,
      tag: "RODAPÉ & CONTATO",
      titlePt: "Canais de Atendimento & Captura de Leads",
      titleEn: "Contact Channels & Lead Capture",
      descPt: "Rodapé institucional com informações de contato, links rápidos, localização e formulário de atendimento em tempo real.",
      descEn: "Institutional footer with contact details, quick links, location info, and real-time lead capture form."
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Engaja Soluções Corporativas • Landing Page & SEO</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Engaja Soluções Corporativas
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Site institucional completo e landing page corporativa de alta conversão desenvolvida para a Engaja Soluções Corporativas, com foco total em SEO técnico, performance e experiência do usuário."
                : "Full institutional website and high-conversion landing page built for Engaja Corporate Solutions, focused on technical SEO, performance, and user experience."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="https://engaja.com.br/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Acessar Site Oficial (engaja.com.br)" : "Visit Official Website (engaja.com.br)"} &rarr;</span>
              </a>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{ cursor: "pointer", display: "inline-block", padding: "1.5rem", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "4px" }}
              onClick={() => setModalData(engajaLogo)}
            >
              <img 
                src={engajaLogo} 
                alt="Engaja Logo" 
                className="hero-logo"
                style={{ maxWidth: "260px", width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="features-section" style={{ marginTop: "3rem" }}>
          {features.map((f, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-wrapper">{pt ? f.iconPt : f.iconEn}</div>
              <h3 className="feature-title">{pt ? f.titlePt : f.titleEn}</h3>
              <p className="feature-description">{pt ? f.descPt : f.descEn}</p>
            </div>
          ))}
        </section>

        {/* Interface Screenshot Showcase */}
        <section style={{ marginTop: "4rem" }}>
          <div className="section-header" style={{ marginBottom: "2.5rem" }}>
            <div className="section-tag">{pt ? "Interface & SEO" : "UI/UX & Live Website Showcase"}</div>
            <h2 className="section-title">{pt ? "Demonstração do Site Online" : "Live Website Showcase"}</h2>
            <p style={{ color: "var(--muted2)", fontSize: "0.95rem", marginTop: "0.5rem", maxWidth: "600px" }}>
              {pt 
                ? "Clique em qualquer imagem para ampliar em tela cheia."
                : "Click on any screenshot to view in full resolution."}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {screenshots.map((s, idx) => (
              <div 
                key={idx}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0px",
                  padding: "2rem",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "2.5rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
              >
                {/* Screenshot Column */}
                <div 
                  style={{ 
                    flex: "1 1 340px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    order: idx % 2 === 1 ? 2 : 1
                  }}
                >
                  <div 
                    style={{ cursor: "pointer", display: "inline-block", width: "100%" }}
                    onClick={() => setModalData(s)}
                  >
                    <img 
                      src={s.img} 
                      alt={pt ? s.titlePt : s.titleEn}
                      style={{ 
                        width: "100%", 
                        height: "auto", 
                        borderRadius: "4px",
                        border: "1px solid var(--border)",
                        display: "block",
                        transition: "transform 0.2s ease"
                      }}
                    />
                  </div>
                </div>

                {/* Description Column */}
                <div style={{ flex: "1 1 300px", order: idx % 2 === 1 ? 1 : 2 }}>
                  <div style={{ color: "var(--p2)", fontFamily: "var(--mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    {`// ${s.tag}`}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.8rem", color: "var(--text)" }}>
                    {pt ? s.titlePt : s.titleEn}
                  </h3>
                  <p style={{ color: "var(--muted2)", fontSize: "0.92rem", lineHeight: "1.7" }}>
                    {pt ? s.descPt : s.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for full screen view */}
        {modalData && (
          <div 
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              padding: "2rem"
            }}
            onClick={() => setModalData(null)}
          >
            <div style={{ relative: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
              <img 
                src={typeof modalData === "string" ? modalData : modalData.img} 
                alt="Preview" 
                style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "4px" }}
              />
              <p style={{ textAlign: "center", color: "var(--muted2)", marginTop: "1rem", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>
                {pt ? "Clique em qualquer lugar para fechar" : "Click anywhere to close"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
