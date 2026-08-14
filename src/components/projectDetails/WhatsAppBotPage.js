import React from "react";
import screenshotImg from "../../assets/whatsapp_bot_screenshot.jpg";

export default function WhatsAppBotPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Primeira Experiência com APIs & LLMs em JS",
      titleEn: "First LLM & API Milestone in JS",
      descPt: "Projeto marco onde Pietro implementou suas primeiras integrações com modelos de linguagem (Maritaca AI) e gateways de API via JavaScript.",
      descEn: "Key milestone project where Pietro built his first LLM integrations (Maritaca AI) and API gateways using JavaScript.",
      iconPt: "// MARCO DE CARREIRA",
      iconEn: "// CAREER MILESTONE"
    },
    {
      titlePt: "Porta de Entrada para a Engaja Soluções",
      titleEn: "Gateway to Engaja Soluções",
      descPt: "O sucesso desta arquitetura abriu as portas para a contratação de Pietro na Engaja, atuando na estrutura e manutenção de agentes de IA.",
      descEn: "The success of this architecture directly landed Pietro his job at Engaja Soluções Corporativas building AI agent infrastructure.",
      iconPt: "// OPORTUNIDADE ENGAJA",
      iconEn: "// ENGAJA OPPORTUNITY"
    },
    {
      titlePt: "Automação de Jornal Diário em Grupos",
      titleEn: "Daily News Feed Automation",
      descPt: "Disparo diário automatizado de resumos de notícias personalizados e boletins informativos em múltiplos grupos do WhatsApp.",
      descEn: "Automated daily dispatch of custom news summaries and newsletters to multiple WhatsApp communities.",
      iconPt: "// AUTOMAÇÃO DIÁRIA",
      iconEn: "// DAILY NEWS FEED"
    },
    {
      titlePt: "Memória Persistente & Jogos (Termo/Dueto)",
      titleEn: "Persistent Memory & Word Games",
      descPt: "Manutenção do contexto de conversa por usuário e integração de jogos interativos de adivinhação de palavras diretamente no chat.",
      descEn: "Maintains full contextual memory per user with built-in interactive word games directly playable in WhatsApp.",
      iconPt: "// MEMÓRIA & JOGOS",
      iconEn: "// MEMORY & GAMES"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">JavaScript • Node.js • Evolution API • LLMs (Maritaca)</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Bot de WhatsApp
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Ecossistema de IA e automação para WhatsApp. Representou a primeira experiência de Pietro integrando LLMs e APIs em JavaScript — projeto determinante para a sua contratação na Engaja Soluções Corporativas."
                : "AI & automation ecosystem for WhatsApp. Marked Pietro's first hands-on experience integrating LLMs and APIs in JavaScript — the pivotal project that secured his position at Engaja Soluções Corporativas."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
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
                style={{ maxWidth: "300px", borderRadius: "0px", boxShadow: "0 15px 40px rgba(0,0,0,0.5)", border: "1px solid var(--border)" }}
              />
            </div>
          </div>
        </section>

        {/* PitmuNews Origin & Career Milestone Story Section */}
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
            {pt ? "// A ORIGEM DO PITMUNEWS & OPORTUNIDADE ENGAJA" : "// PITMUNEWS ORIGIN & ENGAJA OPPORTUNITY"}
          </h2>
          <div style={{ color: "var(--text)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  A ideia do envio do jornal diário <strong>PitmuNews</strong> nasceu em um grupo de amigos próximos. Um dos integrantes costumava encaminhar manualmente um resumo diário de notícias pego pronto de um site. Porém, quando ele esquecia ou não podia enviar, a galera sentia falta do tão amado jornal. Foi então que tive a ideia de automatizar totalmente a entrega desse boletim.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Com o tempo, fui além da simples automação: adaptei o conteúdo até criar um <strong>jornal próprio feito sob medida</strong> — incluindo felicitações automáticas de aniversário para integrantes do grupo, notícias relevantes sobre jogos e interesses do grupo, piadas internas e estatísticas.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  O projeto escalou para um robô completo que entrega o jornal em múltiplos grupos, possui minijogos interativos de adivinhação de palavras (como <i>Termo</i> e <i>Dueto</i>) e integra um chatbot de IA com memória de contexto e consulta de informações.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Esta foi a minha primeira grande experiência prática integrando APIs REST e modelos de linguagem (LLMs) em JavaScript. A proficiência técnica demonstrada foi o grande diferencial que me <strong>conseguiu o primeiro emprego na Engaja Soluções Corporativas</strong>, onde passei a projetar e manter infraestruturas de agentes de IA.
                </p>
                <p style={{ margin: 0, fontWeight: "600", color: "var(--p2)" }}>
                  <i>Atualmente, o bot continua 100% ativo e operante.</i>
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  The idea for the daily <strong>PitmuNews</strong> newsletter started in a close friends' group. A friend used to manually forward a daily news summary fetched from a website. Whenever he forgot or couldn't post it, everyone missed the beloved daily digest. That inspired me to automate the entire dispatch.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Over time, I expanded far beyond basic automation: I transformed it into a <strong>fully customized daily newsletter</strong>—featuring birthday announcements for group members, curated gaming and tech news, inside jokes, and group interests.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  The project scaled into a feature-packed bot serving multiple WhatsApp communities with automated news feeds, interactive word games (like <i>Termo</i> and <i>Dueto</i>), and an AI conversational agent with persistent memory.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  This was my first major hands-on experience building REST API and LLM integrations in JavaScript. The technical depth of this project was the exact catalyst that <strong>landed my first job at Engaja Soluções Corporativas</strong> building enterprise AI agent infrastructure.
                </p>
                <p style={{ margin: 0, fontWeight: "600", color: "var(--p2)" }}>
                  <i>Today, the bot remains 100% active and running.</i>
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
                Node.js & JavaScript (ES6+)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Modelos de IA" : "AI Models"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Maritaca LLM API (Sabiá)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Gateway API" : "API Gateway"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Evolution API & Webhooks
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Impacto na Carreira" : "Career Impact"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Contratação na Engaja Soluções
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
                borderRadius: "0px",
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
                  borderRadius: "0px"
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
