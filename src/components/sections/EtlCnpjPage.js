import React from "react";

export default function EtlCnpjPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Pipeline ETL de Alta Performance",
      titleEn: "High-Performance ETL Pipeline",
      descPt: "Arquitetura para baixar, descompactar, higienizar, normalizar e estruturar a base de dados abertos de CNPJs da Receita Federal.",
      descEn: "Engineered pipeline to download, decompress, clean, normalize, and load the entire Receita Federal CNPJ open database.",
      iconPt: "// PIPELINE DE DADOS",
      iconEn: "// DATA PIPELINE"
    },
    {
      titlePt: "Processamento de Milhões de Registros",
      titleEn: "Processing Millions of Records",
      descPt: "Otimização de memória em Python com Pandas/NumPy em lotes (chunks) para processamento eficiente de gigabytes de dados empresariais.",
      descEn: "Python memory optimization using Pandas/NumPy chunking strategy to process gigabytes of corporate records efficiently.",
      iconPt: "// BIG DATA & PYTHON",
      iconEn: "// BIG DATA"
    },
    {
      titlePt: "Cruzamento Relacional & Grafo de Sócios",
      titleEn: "Relational Joins & Partner Graph Analysis",
      descPt: "Modelagem de relacionamentos entre CNPJs, quadro de sócios e administradores (QSA), filiais e códigos de atividade econômica (CNAE).",
      descEn: "Complex join architecture connecting companies, partner boards (QSA), branches, and economic activity codes (CNAE).",
      iconPt: "// MODELAGEM & CONEXÕES",
      iconEn: "// GRAPH ANALYSIS"
    },
    {
      titlePt: "Inteligência de Mercado & Prospecção",
      titleEn: "Market Intelligence & Lead Generation",
      descPt: "Consultas analíticas rápidas para geração de inteligência de mercado, perfil de empresas, enriquecimento de leads e análise setorial.",
      descEn: "Fast analytical queries for market intelligence, company profiling, B2B lead enrichment, and sector-wide insights.",
      iconPt: "// INTELIGÊNCIA B2B",
      iconEn: "// MARKET INTELLIGENCE"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Python • Pandas • NumPy • PostgreSQL • Engenharia de Dados</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Pipeline ETL de CNPJs Públicos
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Engine de Engenharia de Dados para extração, tratamento, higienização, cruzamento relacional e carga da base completa de dados abertos da Receita Federal do Brasil (CNPJs, sócios e CNAEs)."
                : "Data Engineering pipeline for extracting, cleaning, normalizing, cross-joining, and loading the complete Brazilian Federal Revenue open data (CNPJ, partners, and CNAE codes)."
              }
            </p>

            <div style={{ marginTop: "2rem" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.85 }}>
                ⚡ {pt ? "Engenharia de Big Data / Milhões de Registros" : "Big Data Engineering / Millions of Records"}
              </span>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{
                width: "280px",
                height: "200px",
                background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                border: "2px solid var(--border)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                cursor: "pointer"
              }}
              onClick={() => setModalData("etl_card")}
            >
              <div style={{ fontSize: "3.5rem" }}>⚡</div>
              <div style={{ fontFamily: "var(--mono)", color: "#fff", fontWeight: "bold", fontSize: "1.1rem" }}>ETL CNPJ Engine</div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="features-section" style={{ marginTop: "3rem" }}>
          {features.map((f, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-wrapper">{pt ? f.iconPt || f.icon : f.iconEn || f.icon}</div>
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
                {pt ? "Linguagem Base" : "Core Language"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Python 3.11+
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Engine de Dados" : "Data Engine"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Pandas & NumPy Chunking
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Banco de Destino" : "Target Warehouse"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                PostgreSQL DB
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Fonte de Dados" : "Data Source"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Receita Federal do Brasil (Dados Abertos)
              </p>
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
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(8px)",
              zIndex: 99999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              cursor: "zoom-out"
            }}
            onClick={() => setModalData(null)}
          >
            <div 
              style={{
                position: "relative",
                maxWidth: "500px",
                padding: "2.5rem",
                background: "linear-gradient(135deg, #06b6d4, var(--card))",
                border: "2px solid var(--border)",
                borderRadius: "24px",
                textAlign: "center",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
                cursor: "default"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>⚡</div>
              <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "0.8rem", fontFamily: "var(--mono)" }}>ETL CNPJ Engine</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.6 }}>
                {pt 
                  ? "Pipeline de Engenharia de Dados de alta velocidade para raspagem, limpeza e carga relacional da base de CNPJs da Receita Federal."
                  : "High-speed Data Engineering pipeline for parsing, cleaning, and relational loading of official Receita Federal CNPJ datasets."
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
