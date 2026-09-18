import React, { useState } from "react";
import farmaisLogo from "../../assets/farmais_logo.jpg";

export default function FarmaisPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = useState(null);

  const features = [
    {
      titlePt: "Catálogo Online de Farmácia",
      titleEn: "Online Pharmacy Catalog",
      descPt: "Navegação por categorias de medicamentos, cosméticos e higiene com exibição de preços, descrição e disponibilidade de estoque.",
      descEn: "Category navigation for medicines, cosmetics, and hygiene products featuring pricing, descriptions, and stock status.",
      iconPt: "// CATÁLOGO ONLINE",
      iconEn: "// PRODUCT CATALOG"
    },
    {
      titlePt: "Consumo de API REST",
      titleEn: "REST API Consumption",
      descPt: "Comunicação assíncrona com backend RESTful para consulta em tempo real de produtos, categorias e detalhes de medicamentos.",
      descEn: "Asynchronous communication with a RESTful backend for real-time querying of products, categories, and medicine details.",
      iconPt: "// API REST",
      iconEn: "// REST API SYNC"
    },
    {
      titlePt: "Busca Rápida & Filtros Reativos",
      titleEn: "Instant Search & Reactive Filters",
      descPt: "Mecanismo de pesquisa instantânea com debounce e reatividade com Vue.js para filtragem imediata conforme o usuário digita.",
      descEn: "Instant debounced search engine powered by Vue.js reactive state for immediate filtering as the user types.",
      iconPt: "// BUSCA REATIVA",
      iconEn: "// INSTANT SEARCH"
    },
    {
      titlePt: "Interface SPA com Vue.js",
      titleEn: "Single Page App (Vue.js)",
      descPt: "Frontend Single Page Application leve, com transições suaves de rotas e experiência do usuário sem recarregamento de página.",
      descEn: "Lightweight Single Page Application frontend built with Vue.js, featuring smooth routing and seamless zero-reload UX.",
      iconPt: "// VUE.JS FRONTEND",
      iconEn: "// VUE.JS SPA"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Trabalho Acadêmico IFSP • Vue.js • JavaScript • REST API • CSS</div>
            <h1 className="hero-title">
              Farmais
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Catálogo online e plataforma de consulta de produtos farmacêuticos desenvolvido como trabalho acadêmico no IFSP utilizando Vue.js, consumo de API REST e busca reativa."
                : "Online pharmacy catalog and product lookup platform developed as an academic project at IFSP using Vue.js, REST API consumption, and instant reactive search."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "PROJETO ACADÊMICO IFSP" : "IFSP ACADEMIC PROJECT"}
              </span>
              <button className="btn btn-fill" onClick={() => setPage("contact")}>
                {pt ? "Entre em contato" : "Get in touch"} &rarr;
              </button>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={farmaisLogo} 
              alt="Farmais" 
              style={{
                maxWidth: "320px",
                width: "100%",
                maxHeight: "240px",
                objectFit: "contain",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0",
                padding: "1rem"
              }}
            />
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
            <span>{`// DESTAQUES TÉCNICOS`}</span>
          </div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "1.8rem" }}>
            {pt ? "Desenvolvimento no IFSP" : "IFSP Development Overview"}
          </h2>

          <div style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: "0px", padding: "2rem",
            fontSize: "0.95rem", color: "var(--muted2)", lineHeight: "1.8"
          }}>
            <p style={{ margin: "0 0 1rem" }}>
              {pt 
                ? "Desenvolvido como projeto prático no curso de Bacharelado em Ciência da Computação no IFSP, aplicando conceitos de desenvolvimento web moderno com o framework reativo Vue.js."
                : "Developed as a practical project in the B.Sc. in Computer Science program at IFSP, applying modern web frontend principles using the reactive Vue.js framework."
              }
            </p>
            <p style={{ margin: 0 }}>
              {pt 
                ? "A aplicação consome serviços REST para montagem dinâmica de vitrines, filtros por categorias e consulta rápida de especificações técnicas dos remédios."
                : "The application consumes REST web services for dynamic store layout rendering, category filtering, and fast medicine specification lookup."
              }
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
