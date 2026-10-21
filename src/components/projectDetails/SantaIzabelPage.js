import React from "react";
import siLogo from "../../assets/santa_izabel_card.png";

export default function SantaIzabelPage({ lang, setPage }) {
  const pt = lang === "pt";

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
      descPt: "Design moderno alinhado à marca Santa Izabel / Herder, com tipografia legível e contraste visual marcante.",
      descEn: "Modern design in line with the Santa Izabel / Herder brand, with clean typography and strong visual contrast.",
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
            <div className="hero-tag">Landing page sob contrato • React • Implementos Agrícolas • SEO</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Santa Izabel & Herder Agro
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Landing page que fui contratado para desenvolver para a Santa Izabel, fabricante de implementos agrícolas de São João da Boa Vista que, junto com a Herder do Brasil, faz parte do grupo americano Alamo. Catálogo industrial, responsividade e captação de leads."
                : "Landing page I was hired to build for Santa Izabel, an agricultural implements maker from São João da Boa Vista that, together with Herder do Brasil, belongs to the US-based Alamo Group. Industrial catalog, responsive design, and lead capture."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "PROJETO SOB CONTRATO" : "CLIENT PROJECT"}
              </span>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={siLogo} alt="Santa Izabel" className="hero-logo" style={{ maxWidth: "340px", display: "block" }} />
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
