import React from "react";
import bleachcoLogo from "../../assets/bleach_co_logo.png";

export default function BleachCoPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Processos de Pagamento & Frete",
      titleEn: "Payment Gateways & Freight Engine",
      descPt: "Integração nativa de checkout para pagamentos via PIX/Cartão e calculador de frete em tempo real com regras de envio.",
      descEn: "Native checkout integration for instant PIX/Credit payments and real-time shipping cost calculator with custom rules.",
      iconPt: "// CHECKOUT & FRETE",
      iconEn: "// CHECKOUT & SHIPPING"
    },
    {
      titlePt: "Identidade Visual & Direção de Fotografia",
      titleEn: "Visual Identity & Photography Direction",
      descPt: "Concepção completa da marca, criação de logo, escolha tipográfica e fotografia autoral para assets do site e propagandas.",
      descEn: "Complete brand conceptualization, logo creation, typography, and original photography for website assets and ad campaigns.",
      iconPt: "// FOTOGRAFIA & ASSETS",
      iconEn: "// BRANDING & PHOTOS"
    },
    {
      titlePt: "Produção, SEO & Marketing",
      titleEn: "Apparel Production, SEO & Marketing",
      descPt: "Acompanhamento do processo fabril das camisetas, otimização de SEO para busca orgânica e estratégia de tráfego.",
      descEn: "Hands-on garment manufacturing pipeline supervision, SEO search engine optimization, and performance marketing.",
      iconPt: "// PRODUÇÃO & SEO",
      iconEn: "// PRODUCTION & SEO"
    },
    {
      titlePt: "Arquitetura React & Next.js",
      titleEn: "React & Next.js Architecture",
      descPt: "Desenvolvimento com Server-Side Rendering (SSR) e otimização dinâmica para navegação tátil e fluida.",
      descEn: "Built with Server-Side Rendering (SSR) and dynamic optimizations for instant catalog and product page loads.",
      iconPt: "// REACT & NEXT.JS",
      iconEn: "// NEXT.JS ENGINE"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">React • Next.js • E-Commerce • Marca Própria de Streetwear</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Bleach.co
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Marca autoral de camisetas e e-commerce de streetwear desenvolvido integralmente do zero. Cobertura completa: idealização de marca, identidade visual, pagamentos, frete, fotografia de assets, marketing e SEO."
                : "Own streetwear t-shirt brand and e-commerce platform built from scratch. End-to-end coverage: brand conceptualization, visual identity, payments, freight, photography, marketing, and SEO."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://github.com/PietroTy/site-bleach.co"
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
              onClick={() => setModalData(bleachcoLogo)}
            >
              <img 
                src={bleachcoLogo} 
                alt="Bleach.co Logo" 
                className="hero-logo"
                style={{ maxWidth: "340px", display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* Dedicated Story & Concept Section */}
        <section 
          style={{
            marginTop: "3.5rem",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          }}
        >
          <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#fff", marginBottom: "1rem" }}>
            {pt ? "👕 Marca Autoral & Ecossistema de E-Commerce Completo" : "👕 Own Streetwear Brand & Full E-Commerce Ecosystem"}
          </h2>
          <div style={{ color: "var(--fg)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  A <strong>Bleach.co</strong> é a minha marca própria de camisetas streetwear, projetada do conceito inicial à operação final. Todo o site e a estrutura tecnológica foram desenvolvidos inteiramente por mim — incluindo os processos de pagamento (checkout transparente), cálculo automatizado de frete, estratégias de SEO e marketing.
                </p>
                <p style={{ margin: 0 }}>
                  Além do desenvolvimento de software em React/Next.js, atuei diretamente na idealização da marca, identidade visual, acompanhamento dos processos de produção têxtil e na <strong>direção de fotografia autoral</strong> para a produção de assets visuais e campanhas publicitárias do site, sempre com o objetivo de entregar uma estética marcante e uma experiência de compra completamente sem fricção (<i>seamless</i>).
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  <strong>Bleach.co</strong> is my own streetwear apparel brand, built from initial concept to live operations. The entire website and tech stack were built single-handedly — including payment gateways, automated shipping cost calculation, SEO strategy, and marketing pipelines.
                </p>
                <p style={{ margin: 0 }}>
                  Beyond software engineering with React/Next.js, I handled brand conceptualization, visual identity, garment manufacturing supervision, and <strong>original photography direction</strong> for website assets and ad campaigns — with the core goal of delivering a bold visual identity and a <i>seamless</i> client experience.
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
                {pt ? "Framework Frontend" : "Frontend Framework"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Next.js & React
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Pagamentos & Frete" : "Payments & Shipping"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                PIX, Cartão & Calculador de Frete
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Assets & Fotografia" : "Assets & Media"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Direção de Fotografia & SEO
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
