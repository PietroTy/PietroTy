import React from "react";
import logoImg from "../../assets/tv2_logo.png";
import print1Img from "../../assets/tv2_screenshot_1.png";
import print2Img from "../../assets/tv2_screenshot_2.png";

export default function TV2Page({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Vitrine Alternativa & Curadoria Colaborativa",
      titleEn: "Alternative Showcase & Collaborative Curation",
      descPt: "Idealizada como uma vitrine cultural alternativa para arte, música, videoclipes, animações e desenhos (novos e clássicos) que possuem grande valor visual e estético no YouTube, tudo curado por amigos apaixonados por arte.",
      descEn: "Designed as an alternative cultural showcase for visual art, music, classic & modern cartoons from YouTube with rich aesthetic value, collaboratively curated by a community of art enthusiasts.",
      icon: "// ART & CURATION"
    },
    {
      titlePt: "Transmissão Sincronizada em Tempo Real",
      titleEn: "Real-Time Synced Broadcast",
      descPt: "Todos os espectadores assistem exatamente ao mesmo segundo do mesmo vídeo ou episódio em tempo real por meio de um agendador determinístico.",
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

  const gallery = [
    {
      img: print1Img,
      titlePt: "Transmissão ao Vivo em Tela CRT",
      titleEn: "CRT Live Broadcast",
      descPt: "Exibição sintonizada de animações, artes visuais e videoclipes em tempo real no gabinete de tubo analógico com OSD de programação.",
      descEn: "Live playback of cartoons, visual arts, and music videos in real time inside the vintage CRT cabinet with custom OSD."
    },
    {
      img: print2Img,
      titlePt: "Sintonia & Ruído Estático (Canvas)",
      titleEn: "Tuning & Canvas Static Noise",
      descPt: "Efeito clássico de estática/chiado analógico gerado via HTML5 Canvas durante a troca de canais e sintonização.",
      descEn: "Classic analog static noise generated dynamically via HTML5 Canvas shaders during channel switching and tuning."
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Node.js • Socket.io • Vitrine Cultural & Retro TV</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              TV2
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Plataforma de TV e streaming sincronizado idealizada como uma vitrine alternativa para a expressão artística e cultural. Reúne música, arte, animações clássicas e contemporâneas — tudo com alto valor visual disponível no YouTube e curado por um coletivo de amigos entusiastas de arte."
                : "Real-time synchronized TV and streaming platform designed as an alternative showcase for artistic and cultural expression. Features curated music, visual art, classic and contemporary cartoons — all with rich aesthetic value from YouTube, curated by a collective of art-loving friends."
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

          <div className="hero-logo-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={logoImg} 
              alt="TV2 Logo" 
              className="tv2-hero-logo" 
              onClick={() => setModalData(logoImg)}
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

        {/* Screenshots Showcase Gallery */}
        <section style={{ marginTop: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem", borderLeft: "4px solid var(--p2)", paddingLeft: "1rem" }}>
            {pt ? "Capturas da Interface & Efeitos" : "Interface Screenshots & Effects"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {gallery.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, border-color 0.3s ease"
                }}
                onClick={() => setModalData(item.img)}
              >
                <img 
                  src={item.img} 
                  alt={pt ? item.titlePt : item.titleEn}
                  style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "1.2rem" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--fg)" }}>{pt ? item.titlePt : item.titleEn}</h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--muted2)", marginTop: "0.4rem", lineHeight: 1.5 }}>
                    {pt ? item.descPt : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
