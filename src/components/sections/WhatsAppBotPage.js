import React from "react";
import screenshotImg from "../../assets/stickers_bot.png";

export default function WhatsAppBotPage({ lang, setPage }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Modelo Maritaca LLM",
      titleEn: "Maritaca LLM Integration",
      descPt: "Respostas conversacionais de alto nível em português brasileiro por meio do LLM Maritaca integrado nativamente.",
      descEn: "High-quality conversational responses in Brazilian Portuguese powered by the native Maritaca LLM integration.",
      icon: "// BRAIN"
    },
    {
      titlePt: "Memória Persistente",
      titleEn: "Persistent Memory",
      descPt: "O bot mantém o contexto e histórico completo das conversas anteriores de cada usuário, garantindo diálogos fluidos.",
      descEn: "Maintains full contextual memory and conversation history for each user, allowing fluid and continuous dialogues.",
      icon: "// MEMORY"
    },
    {
      titlePt: "Jogos Interativos",
      titleEn: "Interactive Word Games",
      descPt: "Possui minijogos de adivinhação de palavras como 'Termo' e 'Dueto' embutidos diretamente no fluxo de conversas.",
      descEn: "Features built-in word-guessing games like 'Termo' and 'Dueto' directly playable in your WhatsApp chat.",
      icon: "// PLAY"
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
            <img 
              src={screenshotImg} 
              alt="WhatsApp Bot Preview" 
              className="hero-image" 
              style={{ maxWidth: "320px", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0,0,0,0.3)", border: "2px solid var(--border)" }}
            />
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
