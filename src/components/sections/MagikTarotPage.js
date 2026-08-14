import React from "react";
import screenshotImg from "../../assets/magik_tarot_logo.png";

export default function MagikTarotPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Assets Visuais Gerados por IA",
      titleEn: "AI-Generated Visual Assets",
      descPt: "Toda a direção de arte, ilustrações das cartas e elementos visuais da plataforma foram gerados via Inteligência Artificial.",
      descEn: "Complete art direction, card illustrations, and platform visual elements generated via Generative AI.",
      iconPt: "// ARTES GERADAS POR IA",
      iconEn: "// AI GENERATED ART"
    },
    {
      titlePt: "Google Ads & Tag Manager (GTM)",
      titleEn: "Google Ads & Tag Manager (GTM)",
      descPt: "Configuração completa de tagueamento avançado com Google Tag Manager, pixels de conversão e gestão de campanhas de tráfego no Google Ads.",
      descEn: "Advanced tagging setup with Google Tag Manager, conversion tracking pixels, and paid traffic campaign management in Google Ads.",
      iconPt: "// GOOGLE ADS & GTM",
      iconEn: "// ADS & TRACKING"
    },
    {
      titlePt: "Checkout Mercado Pago & Webhooks",
      titleEn: "Mercado Pago Checkout & Webhooks",
      descPt: "Checkout transparente automatizado com webhooks de confirmação instantânea para liberação automática de tiragens de Tarot.",
      descEn: "Transparent automated checkout with instant confirmation webhooks for automated Tarot reading delivery.",
      iconPt: "// CHECKOUT TRANSPARENTE",
      iconEn: "// PAYMENT GATEWAY"
    },
    {
      titlePt: "Áudio Ambiente & Relatórios PDF",
      titleEn: "Ambient Audio & PDF Reports",
      descPt: "Experiência imersiva com áudio ambiente e geração de relatórios detalhados em PDF para download ao final da consulta.",
      descEn: "Immersive experience with ambient audio tracks and automatic export of detailed Tarot reading reports in PDF format.",
      iconPt: "// ÁUDIO & PDF",
      iconEn: "// AUDIO & PDF"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">React • Node.js • E-Commerce • AI Art Assets • Google Ads</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              MagikTarot
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Plataforma comercial de Tarot com ecossistema digital completo. Desenvolvida 100% por Pietro, com assets visuais gerados por IA, campanhas no Google Ads, tagueamento com Google Tag Manager e Mercado Pago."
                : "Commercial Tarot platform with a full digital ecosystem. Built 100% by Pietro, featuring AI-generated visual assets, Google Ads campaigns, Google Tag Manager tracking, and Mercado Pago checkout."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://magiktarot.com.br/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Acessar MagikTarot" : "Access MagikTarot"} &rarr;</span>
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
                alt="MagikTarot Preview" 
                className="hero-image" 
                style={{ maxWidth: "340px", borderRadius: "0px", boxShadow: "0 15px 40px rgba(0,0,0,0.5)", border: "1px solid var(--border)" }}
              />
            </div>
          </div>
        </section>

        {/* Story Section */}
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
            {pt ? "// E-COMMERCE & TRÁFEGO PAGO" : "// E-COMMERCE & PAID TRAFFIC"}
          </h2>
          <div style={{ color: "var(--text)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <p>
                Semelhante ao escopo do <i>Bleach.co</i>, o <strong>MagikTarot</strong> foi projetado e desenvolvido integralmente por Pietro. Toda a identidade artística e ilustrações de cartas foram produzidas via <strong>Inteligência Artificial Generativa</strong>. Além do código frontend/backend, Pietro configurou toda a estrutura de tráfego pago, incluindo criação de campanhas no <strong>Google Ads</strong> e implementação avançada de tagueamento de eventos via <strong>Google Tag Manager (GTM)</strong>.
              </p>
            ) : (
              <p>
                Similar in scope to <i>Bleach.co</i>, <strong>MagikTarot</strong> was architected and built end-to-end by Pietro. All visual assets and card art were created using <strong>Generative AI</strong>. Beyond frontend and backend engineering, Pietro managed paid acquisition by building <strong>Google Ads</strong> campaigns and implementing event tracking via <strong>Google Tag Manager (GTM)</strong>.
              </p>
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
                {pt ? "Frontend & Node.js" : "Frontend & Node.js"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                React & Node.js API
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Assets Visuals" : "Visual Assets"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Generative AI Art
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Tráfego & Analytics" : "Traffic & Analytics"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Google Ads & Google Tag Manager
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
