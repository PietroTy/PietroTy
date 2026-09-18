import React, { useState } from "react";

export default function SantaIzabelPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = useState(null);

  const features = [
    {
      titlePt: "Catálogo de Implementos Agrícolas",
      titleEn: "Agricultural Implements Showcase",
      descPt: "Apresentação estruturada da linha completa de implementos industriais, com especificações técnicas, aplicações no campo e imagens em alta definição.",
      descEn: "Structured display of the entire industrial implement lineup featuring technical specs, field applications, and HD media.",
      iconPt: "// CATÁLOGO INDUSTRIAL",
      iconEn: "// INDUSTRIAL CATALOG"
    },
    {
      titlePt: "Layout de Alta Fidelidade Visual",
      titleEn: "High-Fidelity Visual Design",
      descPt: "Design moderno alinhado à força da marca multinacional Santa Izabel / Herder, com tipografia legível e contraste visual marcante.",
      descEn: "Modern design conveying the heritage of Santa Izabel / Herder multinational, featuring clean typography and strong visual contrast.",
      iconPt: "// UX / UI DESIGN",
      iconEn: "// VISUAL DESIGN"
    },
    {
      titlePt: "Geração de Leads & Cotações",
      titleEn: "Lead Generation & Quotes",
      descPt: "Formulários otimizados de solicitação de orçamentos e cotações integrados diretamente com o departamento comercial da empresa.",
      descEn: "Optimized quote request and lead intake forms routing directly into the company's commercial sales team.",
      iconPt: "// CAPTURA DE LEADS",
      iconEn: "// LEAD CAPTURE"
    },
    {
      titlePt: "Performance & SEO no Agronegócio",
      titleEn: "Performance & Agro SEO",
      descPt: "Otimização de palavras-chave do setor agrícola, velocidade de carregamento rápida em conexões de zona rural e compatibilidade mobile.",
      descEn: "Agribusiness keyword optimization, fast load speeds engineered for rural mobile connections, and full responsive design.",
      iconPt: "// PERFORMANCE & SEO",
      iconEn: "// AGRO SEO & SPEED"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Landing Page Industrial • React • Implementos Agrícolas • SEO</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Santa Izabel & Herder Agro
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Landing page completa de alta fidelidade visual desenvolvida para a multinacional Santa Izabel / Herder do Brasil (implementos agrícolas). Apresentação de catálogo industrial, responsividade e captação de leads."
                : "High-fidelity landing page developed for multinational Santa Izabel / Herder do Brasil (agricultural implements). Displays industrial catalog specs, responsive design, and lead capture."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "PROJETO WEB INDUSTRIAL" : "INDUSTRIAL WEB PROJECT"}
              </span>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{
                width: "280px",
                padding: "2rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                textAlign: "center"
              }}
            >
              <div style={{ fontFamily: "var(--mono)", color: "#16a34a", fontSize: "1.6rem", fontWeight: "700" }}>
                🚜 Santa Izabel / Herder
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--muted2)", marginTop: "0.5rem" }}>
                Implementos Agrícolas
              </p>
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

        {/* Overview */}
        <section style={{ marginTop: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--p2)", fontFamily: "var(--mono)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            <span>{`// DESTAQUES DO PROJETO`}</span>
          </div>
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
                ? "Desenvolvido com foco no segmento industrial do agronegócio, o portal destaca os diferenciais técnicos das máquinas e implementos agrícolas da Santa Izabel e Herder do Brasil."
                : "Engineered specifically for the industrial agribusiness sector, the web portal showcases the technical advantages and durability of Santa Izabel & Herder implement machinery."
              }
            </p>
            <p style={{ margin: 0 }}>
              {pt 
                ? "Construído em React com componentes modulares, navegação por abas e formulários otimizados para rápida conversão em novos orçamentos."
                : "Built with modular React components, tabbed spec navigation, and converted lead intake forms optimized for commercial sales conversion."
              }
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
