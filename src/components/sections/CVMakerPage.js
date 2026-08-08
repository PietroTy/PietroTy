import React from "react";

export default function CVMakerPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Técnica de 'Ilhas de Palavras' & ATS",
      titleEn: "'Word Islands' Technique & ATS Keywords",
      descPt: "Identificação e extração inteligente de termos-chave e ilhas semânticas na descrição da vaga para maximizar a pontuação em algoritmos de triagem (ATS).",
      descEn: "Intelligent extraction of semantic keyword islands from job descriptions to maximize match scores in candidate screening algorithms (ATS).",
      iconPt: "// ILHAS DE PALAVRAS",
      iconEn: "// ATS KEYWORDS"
    },
    {
      titlePt: "Adaptação de Expertises via IA (Sabiá-4)",
      titleEn: "Expertise Adaptation via Sabiá-4 AI",
      descPt: "Reescrita contextual de conquistas e projetos do profissional para destacar as competências mais relevantes para cada oportunidade.",
      descEn: "Contextual rewriting of professional achievements and skills to highlight maximum relevance for every specific opportunity.",
      iconPt: "// REESCRITA COM IA",
      iconEn: "// SABIÁ-4 AI"
    },
    {
      titlePt: "Análise Estrutural OOXML & Templates",
      titleEn: "OOXML Parsing & Formatting Templates",
      descPt: "Manipulação profunda de arquivos .docx preservando fontes, margens e a identidade visual original do currículo sem quebras.",
      descEn: "Deep XML manipulation of .docx documents preserving fonts, margins, and original visual styling without broken elements.",
      iconPt: "// ANÁLISE OOXML",
      iconEn: "// OOXML TEMPLATES"
    },
    {
      titlePt: "Exportação em PDF via LibreOffice Headless",
      titleEn: "PDF Export via Headless LibreOffice",
      descPt: "Conversão serverless automatizada para PDF em alta definição, garantindo leitura perfeita por robôs e recrutadores.",
      descEn: "Automated serverless conversion to crisp PDF format ensuring perfect readability by both ATS parsers and human recruiters.",
      iconPt: "// EXPORTAÇÃO PDF",
      iconEn: "// PDF EXPORT"
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
                ? "Ferramenta desenvolvida para desmistificar e simplificar o exaustivo processo de candidatura a vagas. Centraliza dados profissionais, aplica técnicas de 'ilhas de palavras' para algoritmos ATS e adapta expertises via IA."
                : "A tool created to streamline the exhausting job application process. Centralizes candidate data, applies 'word islands' techniques for ATS search algorithms, and adapts professional expertise using Sabiá-4 AI."
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

        {/* Dedicated Purpose Section */}
        <section 
          style={{
            marginTop: "3.5rem",
            background: "rgba(59, 130, 246, 0.06)",
            border: "1px solid rgba(59, 130, 246, 0.25)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#3b82f6", marginBottom: "1rem" }}>
            {pt ? "🎯 Otimização de Processo & Ranqueamento em Algoritmos ATS" : "🎯 Workflow Optimization & ATS Ranking"}
          </h2>
          <div style={{ color: "var(--fg)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  O <strong>CVMaker</strong> foi criado especificamente para solucionar a frustração do exaustivo processo manual de envio de currículos. A aplicação unifica todo o histórico profissional em uma base centralizada e utiliza templates automatizados para fácil exportação.
                </p>
                <p style={{ margin: 0 }}>
                  A solução emprega técnicas avançadas como <strong>"ilhas de palavras"</strong> para mapear termos-chave essenciais na descrição de uma vaga e adaptar a apresentação das expertises do candidato com o apoio da IA <i>Sabiá-4</i>, garantindo melhor desempenho e compatibilidade com os algoritmos de busca e triagem (ATS) de recrutadores.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  <strong>CVMaker</strong> was built to eliminate the tedious friction of manual job applications. It consolidates all candidate experience records into a single database and leverages automated templates for seamless document rendering.
                </p>
                <p style={{ margin: 0 }}>
                  The engine utilizes advanced <strong>"word islands"</strong> techniques to identify key semantic concepts in job requirements and adapt candidate achievements via <i>Sabiá-4 AI</i>, maximizing search ranking and compatibility with Applicant Tracking System (ATS) algorithms.
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
                  ? "Gerador inteligente de currículos em Python com técnica de 'ilhas de palavras', otimização para algoritmos ATS e adaptação de expertises via IA Sabiá-4."
                  : "Intelligent Python resume generator with 'word islands' technique, ATS search optimization, and Sabiá-4 AI experience adaptation."
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
