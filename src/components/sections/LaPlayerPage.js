import React from "react";
import screenshotImg1 from "../../assets/laplayer_screenshot_1.png";
import screenshotImg2 from "../../assets/laplayer_screenshot_2.png";
import screenshotImg3 from "../../assets/laplayer_screenshot_3.png";
import screenshotImg4 from "../../assets/laplayer_screenshot_4.png";

export default function LaPlayerPage({ lang, setPage }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Streaming Self-Hosted",
      titleEn: "Self-Hosted Streaming",
      descPt: "Toda a sua biblioteca de música hospedada em servidor doméstico próprio. Livre de anúncios, assinaturas e rastreadores.",
      descEn: "Your entire music library hosted on your own home server. 100% free of ads, subscription paywalls, and trackers.",
      icon: "// SERVER"
    },
    {
      titlePt: "Integração Spotify & YouTube",
      titleEn: "Spotify & YouTube Integration",
      descPt: "Metadados sincronizados com a API oficial do Spotify e extração inteligente de áudio via yt-dlp em servidores dedicados.",
      descEn: "Metadata synced with the official Spotify API, powered by intelligent yt-dlp audio extraction on dedicated backends.",
      icon: "// API"
    },
    {
      titlePt: "Modo Offline Completo",
      titleEn: "Full Offline Mode",
      descPt: "Baixe faixas diretamente para o armazenamento local do seu smartphone para ouvir sem internet em qualquer lugar.",
      descEn: "Download tracks directly to your device's local storage for uninterrupted offline playback anywhere.",
      icon: "// OFFLINE"
    }
  ];

  const screenshots = [
    {
      img: screenshotImg1,
      tag: "DASHBOARD",
      titlePt: "Dashboard & Estatísticas Pessoais",
      titleEn: "Personal Dashboard & Stats",
      descPt: "Estatísticas em tempo real de tempo ouvido, contagem de músicas, número de streams e ranking semanal das faixas mais tocadas.",
      descEn: "Real-time listening statistics featuring total playback time, track counts, streams, and weekly top played songs."
    },
    {
      img: screenshotImg2,
      tag: "PLAYER",
      titlePt: "Player Moderno de Alta Fidelidade",
      titleEn: "Modern High-Fidelity Player",
      descPt: "Interface de reprodução fluida com capas em alta definição, linha do tempo interativa, modo aleatório/repetição e fila inteligente.",
      descEn: "Sleek playback interface with high-res album covers, interactive timeline slider, shuffle/repeat modes, and queue management."
    },
    {
      img: screenshotImg3,
      tag: "LETRAS",
      titlePt: "Letras Sincronizadas em Tempo Real",
      titleEn: "Real-Time Synced Lyrics",
      descPt: "Acompanhe as letras das suas músicas em tempo real com sincronização verso a verso e destaque dinâmico na estrofe atual.",
      descEn: "Follow line-by-line synchronized lyrics in real time with dynamic active verse highlighting."
    },
    {
      img: screenshotImg4,
      tag: "BIBLIOTECA & OFFLINE",
      titlePt: "Playlists & Downloads Offline",
      titleEn: "Playlists & Offline Downloads",
      descPt: "Organize faixas em playlists, filtre por status (todas, baixadas, pendentes) e baixe áudios para ouvir sem internet.",
      descEn: "Organize playlists, filter tracks by status (all, downloaded, pending), and store audio locally for zero-data offline playback."
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        

        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Flutter Mobile App</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              LaPlayer
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Um reprodutor e gerenciador self-hosted de música que une a interface fluida do Spotify com a liberdade e autonomia da hospedagem própria."
                : "A self-hosted music streaming client combining the sleek Spotify mobile interface with absolute self-hosting freedom."
              }
            </p>

            {/* Download APK Button */}
            <div style={{ marginTop: "2rem" }}>
              <a
                href={process.env.PUBLIC_URL + "/app_release.apk"}
                download
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "18px", height: "18px" }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>{pt ? "Baixar APK Grátis" : "Download Free APK"}</span>
              </a>
              <p style={{ fontSize: "0.8rem", opacity: 0.5, marginTop: "0.6rem" }}>
                {pt ? "Compatível com Android 8.0+" : "Compatible with Android 8.0+"}
              </p>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={process.env.PUBLIC_URL + "/laplayer_logo.png"} 
              alt="LaPlayer Logo" 
              className="hero-logo"
              style={{ maxWidth: "280px", display: "block" }}
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

        {/* Interface Screenshot Showcase */}
        <section style={{ marginTop: "4rem" }}>
          <div className="section-header" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-tag">{pt ? "Interface & Funcionalidades" : "UI/UX & Feature Showcase"}</div>
            <h2 className="section-title">{pt ? "Demonstração do Aplicativo" : "App Interface Showcase"}</h2>
            <p style={{ color: "var(--muted2)", fontSize: "0.95rem", marginTop: "0.5rem", maxWidth: "600px", margin: "0.5rem auto 0" }}>
              {pt 
                ? "Demonstração visual das principais funcionalidades do LaPlayer em telas reais no Android."
                : "Visual showcase of key LaPlayer features captured directly on Android."}
            </p>
          </div>

          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
              gap: "2rem",
              alignItems: "stretch"
            }}
          >
            {screenshots.map((s, idx) => (
              <div 
                key={idx}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
              >
                <div 
                  style={{ 
                    fontSize: "0.7rem", 
                    color: "var(--p2)", 
                    fontFamily: "var(--mono)", 
                    letterSpacing: "0.12em",
                    marginBottom: "0.4rem"
                  }}
                >
                  {`// ${s.tag}`}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: "700", marginBottom: "0.4rem", color: "#fff" }}>
                  {pt ? s.titlePt : s.titleEn}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--muted2)", lineHeight: "1.5", marginBottom: "1.5rem" }}>
                  {pt ? s.descPt : s.descEn}
                </p>
                <div style={{ marginTop: "auto", width: "100%", display: "flex", justifyContent: "center" }}>
                  <img 
                    src={s.img} 
                    alt={pt ? s.titlePt : s.titleEn}
                    style={{ 
                      maxWidth: "240px", 
                      width: "100%", 
                      height: "auto", 
                      borderRadius: "24px", 
                      border: "3px solid rgba(255,255,255,0.12)", 
                      boxShadow: "0 15px 35px rgba(0,0,0,0.6)"
                    }} 
                  />
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
                {pt ? "Desenvolvimento" : "Development"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                {pt ? "Cliente Mobile em Dart/Flutter" : "Mobile Client built with Dart & Flutter"}
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Processamento de Mídia" : "Media Processing"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Python Backend + yt-dlp core parser
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Segurança" : "Security"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                {pt ? "Banco de dados e cache criptografados" : "Encrypted metadata storage and cache"}
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
