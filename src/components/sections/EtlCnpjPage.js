import React from "react";

export default function EtlCnpjPage({ lang, setPage }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Processamento de Big Data",
      titleEn: "Big Data Processing",
      descPt: "Manipulação eficiente de arquivos ZIP gigantescos contendo milhões de registros públicos da Receita Federal.",
      descEn: "Efficient extraction and processing of massive ZIP archives containing millions of public company records.",
      icon: "// STORAGE"
    },
    {
      titlePt: "Limpeza & Modelagem",
      titleEn: "Cleaning & Modeling",
      descPt: "Normalização e higienização de strings, validação de chaves estrangeiras e modelagem otimizada de dados.",
      descEn: "String normalization, automated foreign key validation, and optimized schema modeling.",
      icon: "// MODELING"
    },
    {
      titlePt: "Carga de Alta Velocidade",
      titleEn: "High-Speed Load",
      descPt: "Inserção em lote com multi-threading para otimizar o tempo de persistência no PostgreSQL.",
      descEn: "Multi-threaded batch inserts optimized to load millions of records into PostgreSQL databases in minutes.",
      icon: "// PIPELINE"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        


        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Data Engineering</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              ETL CNPJ
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Um pipeline robusto em Python e Pandas projetado para extrair, tratar e carregar a base de dados pública nacional de CNPJs em um banco de dados PostgreSQL."
                : "A high-performance Python and Pandas ETL pipeline built to extract, clean, model, and load millions of public Brazilian business registry records into PostgreSQL."
              }
            </p>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{
                width: "250px",
                height: "180px",
                background: "linear-gradient(135deg, var(--p1), var(--ink2))",
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
              <div style={{ fontFamily: "var(--mono)", color: "#fff", fontSize: "1.2rem", fontWeight: "bold" }}>[POSTGRES]</div>
              <div style={{ fontFamily: "var(--mono)", color: "var(--p2)", fontSize: "0.9rem" }}>&uarr; LOAD (PANDAS)</div>
              <div style={{ fontFamily: "var(--mono)", color: "var(--p2)", fontSize: "0.9rem" }}>&uarr; TRANSFORM (ZIP/CSV)</div>
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
                {pt ? "Linguagem" : "Language"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Python 3
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Análise de Dados" : "Data Analysis"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Pandas & NumPy
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Banco de Dados" : "Database"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                PostgreSQL & SQLAlchemy
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
