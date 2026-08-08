import React from "react";
import screenshotImg from "../../assets/tv2_logo.png";

export default function TV2Page({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Transmissão Sincronizada em Tempo Real",
      titleEn: "Real-Time Synced Broadcast",
      descPt: "Todos os espectadores assistem exatamente ao mesmo segundo do mesmo vídeo ou episódio em tempo real por meio de agendamento determinístico.",
      descEn: "All viewers watch the exact same second of the video or episode simultaneously in real time powered by a deterministic schedule engine.",
      icon: "// SYNCHRONIZED"
    },
    {
      titlePt: "Interface Retro CRT & Efeitos Analógicos",
      titleEn: "Retro CRT Interface & Analog Effects",
      descPt: "Simula uma TV de tubo vintage com linhas de varredura (scanlines), curvatura de vidro, ruído/chiado gerado via Canvas na troca de canal e OSD.",
      descEn: "Simulates a vintage CRT television complete with CSS scanlines, tube glass curvature, HTML5 Canvas static noise on channel change, and custom OSD.",
      icon: "// CRT SHADERS"
    },
    {
      titlePt: "Painel de Controle Físico",
      titleEn: "Physical Control Panel",
      descPt: "Controles analógicos interativos com botões giratórios (scroll para volume, clique para canais), botão Power funcional e chave seletora do chat.",
      descEn: "Interactive physical controls featuring rotary knobs (mouse scroll for volume, click for channels), responsive Power toggle button, and chat drawer switch.",
      icon: "// CONTROLS"
    },
    {
      titlePt: "Chat Retro Flip-Phone & OAuth",
      titleEn: "Retro Flip-Phone Chat & OAuth",
      descPt: "Chat ao vivo integrado na carcaça de um celular anos 2000 com contador de espectadores online em tempo real e login com Google OAuth.",
      descEn: "Live chat system embedded inside a 2000s flip phone mobile chassis with live spectator counter and Google OAuth authentication.",
      icon: "// CHAT & OAUTH"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Node.js • Socket.io • Real-Time CRT TV</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              TV2
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Plataforma de TV e streaming sincronizado em tempo real. Combina a nostalgia dos aparelhos de TV de tubo analógicos com chat ao vivo em estilo celular flip e autenticação via Google."
                : "Real-time synchronized TV and streaming platform. Blends vintage analog CRT television aesthetics with a retro flip-phone live chat and Google OAuth."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://pietroty.github.io/tv2/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Acessar TV2" : "Access TV2"} &rarr;</span>
              </a>
              <a
                href="https://github.com/PietroTy/tv2"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 24px" }}
              >
                <span>{pt ? "Repositório GitHub" : "GitHub Repository"}</span>
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
                alt="TV2 Logo" 
                className="hero-image" 
                style={{ 
                  width: "280px", 
                  height: "280px", 
                  objectFit: "cover", 
                  borderRadius: "16px", 
                  boxShadow: "0 15px 40px rgba(0,0,0,0.5)", 
                  border: "2px solid var(--border)" 
                }}
              />
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
                {pt ? "Servidor" : "Server"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Node.js & Express
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Comunicação Real-Time" : "Real-Time Messaging"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Socket.io (WebSockets)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Autenticação & Sessão" : "Auth & Sessions"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Passport.js & Google OAuth 2.0
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Frontend & Gráficos" : "Frontend & Graphics"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                HTML5 Canvas & CRT Shaders
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
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.85)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem"
            }}
            onClick={() => setModalData(null)}
          >
            <div style={{ relative: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
              <img 
                src={modalData} 
                alt="Enlarged preview" 
                style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "12px", border: "1px solid var(--border)" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
