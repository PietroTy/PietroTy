import React from "react";
import escribaLogo from "../../assets/escriba_logo.png";

export default function EscribaPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Multi-LLM Ensemble de IA",
      titleEn: "Multi-LLM AI Ensemble",
      descPt: "Integração orquestrada de modelos especializados em português (Maritaca AI Sabiá, Sabiá-4 e OpenAI) para redação acadêmica de alta precisão.",
      descEn: "Orchestrated ensemble of Portuguese-specialized LLMs (Maritaca AI Sabiá, Sabiá-4, and OpenAI) for high-precision academic writing.",
      iconPt: "// INTELIGÊNCIA ARTIFICIAL",
      iconEn: "// LLM ENSEMBLE"
    },
    {
      titlePt: "Mitigação de Alucinações & Checagem Cruzada",
      titleEn: "Hallucination Mitigation & Fact Checking",
      descPt: "Pipelines avançados de validação multicamada para verificação contextual e mitigação ativa de alucinações acadêmicas.",
      descEn: "Advanced multi-layer validation pipelines for contextual verification and active academic hallucination mitigation.",
      iconPt: "// CHECAGEM CRUZADA",
      iconEn: "// FACT CHECKING"
    },
    {
      titlePt: "Formatação ABNT & Citações Automáticas",
      titleEn: "ABNT Formatting & Automatic Citations",
      descPt: "Estruturação automática nos padrões ABNT com citação direta/indireta, referências bibliográficas rigorosas e regras acadêmicas.",
      descEn: "Automated structuring under official ABNT standards, direct/indirect citation handling, and rigorous academic referencing.",
      iconPt: "// NORMAS ABNT",
      iconEn: "// ABNT FORMAT"
    },
    {
      titlePt: "Pesquisa Científica & Consultoria (COSAIC / PUC)",
      titleEn: "Research & Academic Consulting (COSAIC / PUC)",
      descPt: "Desenvolvido durante o projeto de pesquisa COSAIC (IFSP / ENAP) e utilizado em consultoria técnica para pesquisa de doutorado na PUC.",
      descEn: "Developed during the COSAIC research project (IFSP / ENAP) and applied in technical consulting for a PUC doctoral research project.",
      iconPt: "// PESQUISA APLICADA",
      iconEn: "// RESEARCH"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Python • Streamlit • Maritaca AI / Sabiá • LLM Research</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Escriba AI
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Plataforma de inteligência artificial aplicada à pesquisa científica e redação acadêmica. Utiliza múltiplos LLMs especializados em português brasileiro, mitigação de alucinações e formatação ABNT."
                : "Artificial intelligence platform applied to scientific research and academic writing. Powered by multiple Portuguese-specialized LLMs, hallucination mitigation, and ABNT formatting."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://escriba.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Acessar Escriba AI" : "Access Escriba AI"} &rarr;</span>
              </a>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => setModalData(escribaLogo)}
            >
              <img 
                src={escribaLogo} 
                alt="Escriba AI Logo" 
                className="hero-logo"
                style={{ maxWidth: "340px", display: "block" }}
              />
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

        {/* Academic Project Context */}
        <section 
          style={{
            marginTop: "3.5rem",
            background: "rgba(245, 158, 11, 0.06)",
            border: "1px solid rgba(245, 158, 11, 0.25)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#f59e0b", marginBottom: "1rem" }}>
            {pt ? "🎓 Origem em Pesquisa Aplicada & Uso Real em Doutorado" : "🎓 Academic Origin & Doctorate Application"}
          </h2>
          <p style={{ color: "var(--fg)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt 
              ? "O Escriba AI foi concebido e arquitetado no contexto do projeto de pesquisa COSAIC (IFSP / ENAP). A tecnologia de engenharia de prompts e ensemble de modelos desenvolvida na plataforma foi subsequentemente utilizada em consultoria técnica para suporte à escrita e estruturação de uma pesquisa de Doutorado na Pontifícia Universidade Católica (PUC)."
              : "Escriba AI was conceived and architected within the COSAIC research project (IFSP / ENAP). The prompt engineering and model ensemble technology developed in this platform was subsequently used in technical consulting for a Doctorate research project at Pontifical Catholic University (PUC)."
            }
          </p>
        </section>

        {/* Tech Stack Footer */}
        <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Interface Web" : "Web UI"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Python & Streamlit
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Modelos de IA" : "AI Models"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Maritaca Sabiá-3 & Sabiá-4
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Contexto Acadêmico" : "Academic Context"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                COSAIC / IFSP / ENAP / PUC
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
                maxWidth: "85vw",
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
                cursor: "default"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={typeof modalData === "string" ? modalData : modalData.img} 
                alt="Enlarged preview"
                style={{
                  maxHeight: "75vh",
                  maxWidth: "80vw",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
