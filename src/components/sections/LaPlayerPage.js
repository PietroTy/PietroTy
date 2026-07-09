import React from "react";
import screenshotImg from "../../assets/laplayer.png";
import screenshotImg2 from "../../assets/laplayer_2.png";

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
                href={process.env.PUBLIC_URL + "/app-release.apk"}
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
              src={process.env.PUBLIC_URL + "/app_logo_clean.png"} 
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
        <section style={{ marginTop: "4rem", textAlign: "center" }}>
          <div className="section-header">
            <div className="section-tag">{pt ? "Interface" : "UI/UX Showcase"}</div>
            <h2 className="section-title">{pt ? "Demonstração do Aplicativo" : "App Interface Demonstration"}</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <img 
              src={screenshotImg} 
              alt="LaPlayer Screenshot 1" 
              style={{ 
                maxWidth: "320px", 
                width: "100%", 
                borderRadius: "40px", 
                border: "4px solid var(--border)", 
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)" 
              }} 
            />
            <img 
              src={screenshotImg2} 
              alt="LaPlayer Screenshot 2" 
              style={{ 
                maxWidth: "320px", 
                width: "100%", 
                borderRadius: "40px", 
                border: "4px solid var(--border)", 
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)" 
              }} 
            />
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
