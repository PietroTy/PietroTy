import React from "react";

export default function DiscordBotPage({ lang, setPage }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Moderação Automatizada",
      titleEn: "Automated Moderation",
      descPt: "Controle automático de spam, filtragem de palavras e gerenciamento de permissões de usuários.",
      descEn: "Automatic spam prevention, custom word filters, and advanced user permission management.",
      icon: "// SHIELD"
    },
    {
      titlePt: "Economia Virtual",
      titleEn: "Virtual Economy",
      descPt: "Sistema completo de moedas virtuais, recompensas diárias, apostas e loja de itens customizados.",
      descEn: "Complete economy system featuring custom server coins, daily rewards, mini-games, and shop systems.",
      icon: "// COINS"
    },
    {
      titlePt: "Entretenimento",
      titleEn: "Entertainment",
      descPt: "Comandos divertidos de meme, enquetes, curiosidades e minijogos interativos para engajamento.",
      descEn: "Fun meme generation commands, automated server polls, trivia, and interactive mini-games.",
      icon: "// GAMES"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        
        {/* Back Button */}
        <div style={{ marginBottom: "1.5rem" }}>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setPage("projects")}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            &larr; {pt ? "Voltar para Projetos" : "Back to Projects"}
          </button>
        </div>

        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Discord Bot API</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Discord Bot
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Um assistente inteligente de moderação e entretenimento para servidores do Discord, oferecendo economia virtual, comandos interativos e gerenciamento automatizado."
                : "An intelligent moderation and entertainment assistant for Discord servers, featuring virtual economy systems, interactive commands, and automated management."
              }
            </p>

            <div style={{ marginTop: "2rem" }}>
              <a
                href="https://github.com/PietroTy/bot-discord"
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
              style={{
                width: "250px",
                height: "180px",
                background: "linear-gradient(135deg, #5865f2, var(--ink2))",
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
              <div style={{ fontFamily: "var(--mono)", color: "#fff", fontSize: "1.2rem", fontWeight: "bold" }}>[DISCORD BOT]</div>
              <div style={{ fontFamily: "var(--mono)", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Node.js / Discord.js</div>
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
                Node.js & JavaScript
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "API Library" : "API Library"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Discord.js v14
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Persistência" : "Persistence"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                SQLite (development) / PostgreSQL (production)
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
