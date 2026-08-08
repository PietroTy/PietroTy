import React from "react";
import screenshotImg from "../../assets/magik_tarot_logo.png";

export default function MagikTarotPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Integração Mercado Pago",
      titleEn: "Mercado Pago Integration",
      descPt: "Checkout transparente automatizado com webhooks de confirmação instantânea para liberação automática de tiragens de Tarot.",
      descEn: "Transparent automated checkout with instant confirmation webhooks for automated Tarot reading delivery.",
      iconPt: "// PAGAMENTOS",
      iconEn: "// PAYMENT"
    },
    {
      titlePt: "Áudio Ambiente & Relatórios PDF",
      titleEn: "Ambient Audio & PDF Reports",
      descPt: "Experiência imersiva com áudio ambiente e geração de relatórios detalhados em PDF para download ao final da consulta.",
      descEn: "Immersive experience with ambient audio tracks and automatic export of detailed Tarot reading reports in PDF format.",
      iconPt: "// ÁUDIO & PDF",
      iconEn: "// AUDIO & PDF"
    },
    {
      titlePt: "Painel Administrativo & Métricas",
      titleEn: "Admin Dashboard & Metrics",
      descPt: "Painel completo para gestão de consultas, controle financeiro, métricas de vendas e administração do catálogo de leituras.",
      descEn: "Complete dashboard for managing readings, financial metrics, sales reports, and consultation catalog administration.",
      iconPt: "// PAINEL ADMIN",
      iconEn: "// DASHBOARD"
    },
    {
      titlePt: "Otimização SEO & Performance",
      titleEn: "SEO Optimization & Performance",
      descPt: "Rotas estáticas estruturadas para mecanismos de busca, metadados OpenGraph ricos e tempos de carregamento otimizados.",
      descEn: "Static routes optimized for search engines, rich OpenGraph metadata, and tuned load performance.",
      iconPt: "// SEO & PERFORMANCE",
      iconEn: "// SEO & PERF"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">React • Node.js • E-Commerce</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              MagikTarot
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Plataforma comercial automatizada de consultas de Tarot. Conta com pagamentos via Mercado Pago, áudio imersivo, geração de relatórios em PDF e painel administrativo."
                : "Automated commercial Tarot consultation platform featuring Mercado Pago payments, ambient audio, PDF report generation, and an administrative dashboard."
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
                style={{ maxWidth: "340px", borderRadius: "16px", boxShadow: "0 15px 40px rgba(0,0,0,0.5)", border: "2px solid var(--border)" }}
              />
            </div>
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
                {pt ? "Frontend" : "Frontend"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                React & Modern CSS
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Backend & APIs" : "Backend & APIs"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Node.js & Express
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Gateway de Pagamento" : "Payment Gateway"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Mercado Pago API
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Geração & SEO" : "Generation & SEO"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                PDF Engine & Static SEO
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
