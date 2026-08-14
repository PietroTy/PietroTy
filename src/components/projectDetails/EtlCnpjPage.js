import React from "react";

export default function EtlCnpjPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Pipeline ETL & Predição de Dados",
      titleEn: "ETL Pipeline & Data Prediction",
      descPt: "Arquitetura completa para coleta, tratamento, limpeza, análise exploratória e modelagem preditiva sobre dados empresariais.",
      descEn: "End-to-end data pipeline for ingestion, cleaning, normalization, exploratory analysis, and predictive modeling.",
      iconPt: "// PIPELINE DE DADOS",
      iconEn: "// DATA PIPELINE"
    },
    {
      titlePt: "Base de Dados Abertos da Receita Federal",
      titleEn: "Receita Federal Open Data API",
      descPt: "Processamento automatizado da API e base pública de dados de CNPJs, empresas, sócios (QSA), filiais e atividades econômicas (CNAE).",
      descEn: "Automated ingestion of official Receita Federal open CNPJ datasets, company structures, partner boards, and CNAE codes.",
      iconPt: "// DADOS PÚBLICOS CNPJ",
      iconEn: "// OPEN CNPJ DATA"
    },
    {
      titlePt: "Inteligência de Mercado & Prospecção B2B",
      titleEn: "Market Intelligence & B2B Prospecting",
      descPt: "Estruturação de dados para prospecção ativa de clientes, enriquecimento de leads B2B, análise setorial e identificação de padrões.",
      descEn: "Data structuring engineered for active client prospecting, B2B lead enrichment, sector analysis, and pattern detection.",
      iconPt: "// PROSPECÇÃO B2B",
      iconEn: "// B2B PROSPECTING"
    },
    {
      titlePt: "Processamento de Milhões de Registros",
      titleEn: "Processing Millions of Records",
      descPt: "Otimização de memória em Python com Pandas/NumPy em lotes (chunks) para carga relacional eficiente em PostgreSQL.",
      descEn: "Python memory optimization using Pandas/NumPy chunking strategy for high-speed relational loading into PostgreSQL.",
      iconPt: "// BIG DATA & PYTHON",
      iconEn: "// BIG DATA"
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
                ? "Engine de Engenharia de Dados desenvolvida para coleta, higienização, processamento, análise e preditor em larga escala com base nos dados abertos do CNPJ da Receita Federal."
                : "Data Engineering engine built for large-scale data collection, cleaning, processing, analysis, and prediction based on official Receita Federal open CNPJ data."
              }
            </p>

            <div style={{ marginTop: "2rem" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "ENGENHARIA DE BIG DATA / MILHÕES DE REGISTROS" : "BIG DATA ENGINEERING / MILLIONS OF RECORDS"}
              </span>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{
                width: "280px",
                height: "200px",
                background: "linear-gradient(135deg, var(--p1), var(--p2))",
                borderRadius: "0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                border: "1px solid var(--border)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                cursor: "pointer"
              }}
              onClick={() => setModalData("etl_card")}
            >
              <div style={{ fontFamily: "var(--mono)", color: "#fff", fontWeight: "bold", fontSize: "1.8rem" }}>ETL</div>
              <div style={{ fontFamily: "var(--mono)", color: "rgba(255,255,255,0.8)", fontWeight: "bold", fontSize: "0.9rem" }}>ETL CNPJ Engine</div>
            </div>
          </div>
        </section>

        {/* Co-Author & Project Context */}
        <section 
          style={{
            marginTop: "3.5rem",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "0px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ fontSize: "1.2rem", fontFamily: "var(--mono)", fontWeight: "700", color: "var(--p2)", marginBottom: "1rem", letterSpacing: "0.05em" }}>
            {pt ? "// DESENVOLVIMENTO CONJUNTO & INTELIGÊNCIA B2B" : "// CO-DEVELOPMENT & B2B MARKET INTELLIGENCE"}
          </h2>
          <div style={{ color: "var(--text)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  Este projeto de Engenharia e Inteligência de Dados foi desenvolvido conjuntamente por Pietro e{" "}
                  <a 
                    href="https://github.com/Ariel-Marques23" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: "var(--p2)", textDecoration: "underline", fontWeight: "600" }}
                  >
                    Ariel Marques Sartorio
                  </a>
                  .
                </p>
                <p style={{ margin: 0 }}>
                  A solução engloba todo o ciclo de vida dos dados: desde a coleta automatizada da fonte pública de dados da API/base aberta de CNPJs do Governo Federal, passando por tratamento, higienização, análises exploratórias, processamento em lotes e modelos de predição. O objetivo principal é subsidiar estratégias de prospecção comercial B2B, análise de mercado e inteligência corporativa.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  This Data Engineering and Intelligence project was co-developed by Pietro and{" "}
                  <a 
                    href="https://github.com/Ariel-Marques23" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: "var(--p2)", textDecoration: "underline", fontWeight: "600" }}
                  >
                    Ariel Marques Sartorio
                  </a>
                  .
                </p>
                <p style={{ margin: 0 }}>
                  The solution covers the entire data lifecycle: from automated collection of the official Brazilian Federal Revenue open CNPJ dataset to cleaning, normalization, exploratory analysis, batch processing, and prediction models. Its primary goal is supporting B2B market intelligence and client prospecting.
                </p>
              </>
            )}
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
                {pt ? "Co-Desenvolvedores" : "Co-Developers"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Pietro Ty & Ariel Marques Sartorio
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Linguagem & Libs" : "Language & Libs"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Python, Pandas & NumPy
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Banco de Dados" : "Database Engine"}
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
                Receita Federal do Brasil (CNPJ)
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
                background: "linear-gradient(135deg, var(--p1), var(--card))",
                border: "1px solid var(--border)",
                borderRadius: "0px",
                textAlign: "center",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
                cursor: "default"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ fontFamily: "var(--mono)", fontSize: "3rem", fontWeight: "bold", color: "#fff", marginBottom: "1rem" }}>ETL</div>
              <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "0.8rem", fontFamily: "var(--mono)" }}>ETL CNPJ Engine</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.6 }}>
                {pt 
                  ? "Pipeline de Engenharia de Dados desenvolvido conjuntamente por Pietro Ty e Ariel Marques Sartorio para prospecção e análise de mercado."
                  : "Data Engineering pipeline co-developed by Pietro Ty and Ariel Marques Sartorio for prospecting and market intelligence."
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
