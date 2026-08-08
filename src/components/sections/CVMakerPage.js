import React from "react";

export default function CVMakerPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Análise Estrutural OOXML (.docx)",
      titleEn: "OOXML Document Parsing (.docx)",
      descPt: "Leitura profunda e manipulação da estrutura interna de arquivos do Microsoft Word sem perder o layout original.",
      descEn: "Deep parsing and XML manipulation of Microsoft Word files preserving original document layouts and styling.",
      iconPt: "// ANÁLISE OOXML",
      iconEn: "// OOXML PARSER"
    },
    {
      titlePt: "Adaptação por IA Sabiá-4",
      titleEn: "Sabiá-4 AI Resume Adaptation",
      descPt: "Reescrita e otimização de experiências e qualificações com foco nos requisitos e palavras-chave de uma vaga específica.",
      descEn: "Targeted rewriting and enhancement of resume achievements aligned with specific job post requirements.",
      iconPt: "// REESCRITA COM IA",
      iconEn: "// SABIÁ-4 AI"
    },
    {
      titlePt: "Exportação em PDF Headless",
      titleEn: "Headless LibreOffice PDF Export",
      descPt: "Conversão serverless automatizada para PDF via LibreOffice em modo headless, mantendo fidelidade de tipografia.",
      descEn: "Automated serverless conversion to crisp PDF format via headless LibreOffice engine with exact typography.",
      iconPt: "// CONVERSÃO PDF",
      iconEn: "// PDF EXPORT"
    },
    {
      titlePt: "Interface Simples em Streamlit",
      titleEn: "Streamlit Web Interface",
      descPt: "Upload intuitivo do arquivo DOCX original, colagem da descrição da vaga desejada e download imediato do currículo final.",
      descEn: "Seamless workflow: upload DOCX, paste target job description, and download your tailored PDF resume.",
      iconPt: "// INTERFACE STREAMLIT",
      iconEn: "// STREAMLIT UI"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Python • Streamlit • Sabiá-4 LLM • LibreOffice Headless</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              CVMaker
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Gerador e otimizador inteligente de currículos em Python. Analisa a estrutura de arquivos DOCX, reescreve experiências usando o LLM Sabiá-4 para adequá-las a vagas específicas e exporta para PDF sem alterar a formatação."
                : "Intelligent resume generator and tailored adapter in Python. Parses DOCX OOXML structures, rewrites career sections with Sabiá-4 LLM for target job roles, and exports to PDF preserving original formatting."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://cvmaker-ty.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Acessar CVMaker" : "Access CVMaker"} &rarr;</span>
              </a>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{
                width: "260px",
                height: "200px",
                background: "linear-gradient(135deg, #1e40af, #3b82f6)",
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
              onClick={() => setModalData("cvmaker_card")}
            >
              <div style={{ fontSize: "4rem" }}>🎯</div>
              <div style={{ fontFamily: "var(--mono)", color: "#fff", fontWeight: "bold", fontSize: "1.1rem" }}>CVMaker AI</div>
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
                {pt ? "Linguagem" : "Language"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Python 3.10+
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Modelo de Linguagem" : "Language Model"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Maritaca Sabiá-4
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Engine de PDF" : "PDF Engine"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                LibreOffice Headless & python-docx
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
                background: "linear-gradient(135deg, #1e40af, var(--card))",
                border: "2px solid var(--border)",
                borderRadius: "24px",
                textAlign: "center",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
                cursor: "default"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🎯</div>
              <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "0.8rem", fontFamily: "var(--mono)" }}>CVMaker AI</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.6 }}>
                {pt 
                  ? "Gerador inteligente de currículos em Python com adaptação de experiências via IA Sabiá-4 e exportação para PDF via LibreOffice headless."
                  : "Intelligent Python resume generator with Sabiá-4 AI experience adaptation and headless LibreOffice PDF export."
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
