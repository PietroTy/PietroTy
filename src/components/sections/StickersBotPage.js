import React from "react";
import screenshotImg from "../../assets/stickers_bot_logo.png";

export default function StickersBotPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Conversão Instantânea & Pipeline WebP",
      titleEn: "Instant Conversion & WebP Pipeline",
      descPt: "Envie imagens, vídeos ou GIFs e receba figurinhas prontas em segundos diretamente no seu chat do WhatsApp via FFmpeg e sharp.",
      descEn: "Send images, videos, or GIFs and receive WhatsApp-ready stickers in seconds via FFmpeg and sharp WebP pipelines.",
      iconPt: "// CONVERSÃO EM TEMPO REAL",
      iconEn: "// REAL-TIME ENGINE"
    },
    {
      titlePt: "Figurinhas Animadas Otimizadas",
      titleEn: "Lightweight Animated Stickers",
      descPt: "Suporte completo para conversão de vídeos curtos e GIFs em figurinhas animadas fluidas respeitando o limite rigoroso do WhatsApp.",
      descEn: "Full support for converting short video clips and GIFs into smooth, lightweight animated stickers under WhatsApp payload limits.",
      iconPt: "// ANIMADO",
      iconEn: "// ANIMATED WEBP"
    },
    {
      titlePt: "Gestão de Erros On-Demand",
      titleEn: "On-Demand Error Handling",
      descPt: "Tratamento em tempo real de exceções em formatos de arquivo corrompidos, arquivos pesados e concorrência de requisições simultâneas.",
      descEn: "Real-time exception handling for corrupted files, heavy video encodings, and high concurrent user traffic spikes.",
      iconPt: "// TRATAMENTO DE ERROS",
      iconEn: "// ERROR HANDLING"
    },
    {
      titlePt: "Comunidade Ativa & Escala",
      titleEn: "Active Community & Scale",
      descPt: "Projeto que se tornou um produto independente devido à escala, com grupo próprio e mais de 100 usuários ativos criando figurinhas diariamente.",
      descEn: "Spin-off product built to scale, featuring a dedicated community group of 100+ active users daily.",
      iconPt: "// COMUNIDADE E ESCALA",
      iconEn: "// COMMUNITY SCALE"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Node.js • FFmpeg • sharp • WebP • WhatsApp Bot API</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Stickers Bot
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Serviço automatizado de alta performance para criação e conversão de figurinhas estáticas e animadas. Nascido como um módulo do Bot de WhatsApp, tornou-se um produto independente com comunidade ativa diária."
                : "High-performance automated service for generating static and animated WhatsApp stickers. Born as a module of the main WhatsApp bot, it spun off into an independent product with an active daily community."
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
            <div 
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => setModalData(screenshotImg)}
            >
              <img 
                src={screenshotImg} 
                alt="Stickers Bot Preview" 
                className="hero-image" 
                style={{ maxWidth: "320px", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)", border: "2px solid var(--border)" }}
              />
            </div>
          </div>
        </section>

        {/* Spin-off Story Section */}
        <section 
          style={{
            marginTop: "3.5rem",
            background: "rgba(20, 184, 166, 0.06)",
            border: "1px solid rgba(20, 184, 166, 0.25)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ fontSize: "1.2rem", fontFamily: "var(--mono)", fontWeight: "700", color: "#14b8a6", marginBottom: "1rem", letterSpacing: "0.05em" }}>
            {pt ? "// SPIN-OFF INDEPENDENTE & ESCALA DE USUÁRIOS" : "// INDEPENDENT SPIN-OFF & USER SCALE"}
          </h2>
          <div style={{ color: "var(--fg)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  O <strong>Stickers Bot</strong> nasceu originalmente como uma funcionalidade embutida dentro do Bot de WhatsApp principal. No entanto, o volume massivo de requisições de mídia fez com que o serviço se tornasse um projeto independente por questões de arquitetura e performance.
                </p>
                <p style={{ margin: 0 }}>
                  Apenas a comunidade e grupo oficial do bot contam com <strong>dezenas de usuários ativos criando figurinhas diariamente</strong>. Essa operação real proporcionou a Pietro uma valiosa experiência em <strong>gerenciamento de projetos, otimização de conversão de mídia em tempo real e tratamento de erros on-demand</strong> sob alta demanda.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  <strong>Stickers Bot</strong> originally started as a built-in feature inside the main WhatsApp bot. However, the massive volume of incoming media conversion requests required spinning off the project into an independent microservice for performance and architecture reasons.
                </p>
                <p style={{ margin: 0 }}>
                  The official community group alone supports <strong>over 100 active users creating stickers every single day</strong>. Managing this live production workload provided Pietro with hands-on expertise in <strong>project scalability, real-time media transcoding, and on-demand error handling</strong>.
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
                {pt ? "Servidor" : "Server Engine"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Node.js & Express
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Processamento de Imagem" : "Image Processing"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                sharp library & WebP pipeline
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Transcodificação" : "Transcoding"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                FFmpeg video pipelines
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Comunidade" : "Community"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                100+ Usuários Ativos / Dia
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
