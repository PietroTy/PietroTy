import React from "react";
import screenshotImg from "../../assets/whatsapp_bot_screenshot.jpg";

export default function WhatsAppBotPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Modelo Maritaca LLM",
      titleEn: "Maritaca LLM Integration",
      descPt: "Respostas conversacionais de alto nível em português brasileiro por meio do LLM Maritaca integrado nativamente.",
      descEn: "High-quality conversational responses in Brazilian Portuguese powered by the native Maritaca LLM integration.",
      iconPt: "// INTELIGÊNCIA ARTIFICIAL",
      iconEn: "// BRAIN"
    },
    {
      titlePt: "Memória Persistente",
      titleEn: "Persistent Memory",
      descPt: "O bot mantém o contexto e histórico completo das conversas anteriores de cada usuário, garantindo diálogos fluidos.",
      descEn: "Maintains full contextual memory and conversation history for each user, allowing fluid and continuous dialogues.",
      iconPt: "// MEMÓRIA",
      iconEn: "// MEMORY"
    },
    {
      titlePt: "Jogos Interativos",
      titleEn: "Interactive Word Games",
      descPt: "Possui minijogos de adivinhação de palavras como 'Termo' e 'Dueto' embutidos diretamente no fluxo de conversas.",
      descEn: "Features built-in word-guessing games like 'Termo' and 'Dueto' directly playable in your WhatsApp chat.",
      iconPt: "// JOGOS",
      iconEn: "// PLAY"
    },
    {
      titlePt: "Automação SDR & Jornal",
      titleEn: "SDR & News Automation",
      descPt: "Atua como agente inteligente de SDR e alimenta vários grupos com uma automação de jornal diário personalizado.",
      descEn: "Acts as an intelligent SDR agent and feeds multiple groups with a customized daily news automation.",
      iconPt: "// AUTOMAÇÃO",
      iconEn: "// AUTOMATION"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        

        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Artificial Intelligence</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              WhatsApp Bot
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Um agente inteligente conversacional integrado ao WhatsApp via Evolution API. Oferece memória persistente, resumos diários de notícias e jogos de texto interativos."
                : "An intelligent conversational agent integrated with WhatsApp via Evolution API, featuring persistent memory, daily news summaries, and interactive text games."
              }
            </p>

            <div style={{ marginTop: "2rem" }}>
              <a
                href="https://github.com/PietroTy/bot-whatsapp"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Ver Repositório GitHub" : "View GitHub Repository"} &rarr;</span>
              </a>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => setModalData(screenshotImg)}
            >
              <img 
                src={screenshotImg} 
                alt="WhatsApp Bot Preview" 
                className="hero-image" 
                style={{ maxWidth: "300px", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.5)", border: "2px solid var(--border)" }}
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
              <button
                onClick={() => setModalData(null)}
                style={{
                  position: "absolute",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
                }}
                title={pt ? "Fechar" : "Close"}
              >
                ✕
              </button>
              <img 
                src={modalData} 
                alt="WhatsApp Bot Screenshot"
                style={{
                  maxHeight: "80vh",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "28px",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9)",
                  border: "3px solid rgba(255,255,255,0.2)"
                }}
              />
            </div>
          </div>
        )}

        {/* Tech Stack Footer */}
        <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Linguagem" : "Language"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Node.js & JavaScript
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Modelos de IA" : "AI Models"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Maritaca LLM API (Sabiá-2)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Integração WhatsApp" : "WhatsApp Integration"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Evolution API gateway
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
