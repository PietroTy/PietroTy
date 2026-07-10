import React from "react";
import screenshotImg from "../../assets/stickers_bot_logo.png";

export default function StickersBotPage({ lang, setPage }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Conversão Instantânea",
      titleEn: "Instant Conversion",
      descPt: "Envie imagens, vídeos ou GIFs e receba figurinhas prontas em segundos diretamente no seu chat do WhatsApp.",
      descEn: "Send images, videos, or GIFs and receive WhatsApp-ready stickers in seconds directly in your chat.",
      icon: "// INSTANT"
    },
    {
      titlePt: "Figurinhas Animadas",
      titleEn: "Animated Stickers",
      descPt: "Suporte completo para conversão de vídeos curtos e GIFs em figurinhas animadas fluidas com peso otimizado.",
      descEn: "Full support for converting short video clips and GIFs into smooth, lightweight animated stickers.",
      icon: "// ANIMATED"
    },
    {
      titlePt: "Compressão Inteligente",
      titleEn: "Smart Compression",
      descPt: "Algoritmos de redução de ruído e redimensionamento automático para garantir compatibilidade com os limites do WhatsApp.",
      descEn: "Automated resizing and noise reduction algorithms to guarantee strict compliance with WhatsApp file size limits.",
      icon: "// COMPRESS"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        


        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">WhatsApp Web Bot</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Stickers Bot
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Um bot utilitário automatizado de figurinhas e conversão de mídias que otimiza imagens e vídeos em tempo real para os formatos oficiais do WhatsApp."
                : "An automated utility bot for generating WhatsApp stickers in real-time, optimizing and compressing user-sent media on the fly."
              }
            </p>

            <div style={{ marginTop: "2rem" }}>
              <a
                href="https://chat.whatsapp.com/KAg83JlOyWSGoHLBOLwrR8"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Testar no WhatsApp" : "Test on WhatsApp"} &rarr;</span>
              </a>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={screenshotImg} 
              alt="Stickers Bot Preview" 
              className="hero-image" 
              style={{ maxWidth: "320px", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)", border: "2px solid var(--border)" }}
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
                {pt ? "Servidor" : "Server"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Node.js & Express
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Manipulação de Imagem" : "Image Manipulation"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                sharp library & WebP converter
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Transcodificação" : "Transcoding"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                FFmpeg media pipelines
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
