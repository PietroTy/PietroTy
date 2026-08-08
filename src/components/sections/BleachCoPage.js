import React from "react";
import bleachcoLogo from "../../assets/bleach_co_logo.png";

export default function BleachCoPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Design Minimalista Streetwear",
      titleEn: "Minimalist Streetwear Aesthetic",
      descPt: "Identidade visual conceitual com tipografia contemporânea, paleta de cores monocromática e composição limpa inspirada na cultura urbana.",
      descEn: "Conceptual visual identity featuring contemporary typography, monochrome palette, and clean urban streetwear compositions.",
      iconPt: "// DESIGN CONCEITUAL",
      iconEn: "// STREETWEAR DESIGN"
    },
    {
      titlePt: "Arquitetura React & Next.js",
      titleEn: "React & Next.js Architecture",
      descPt: "Desenvolvimento com Server-Side Rendering (SSR) e otimização dinâmica para carregamento instantâneo de coleções e produtos.",
      descEn: "Built with Server-Side Rendering (SSR) and dynamic optimizations for instant catalog and product page loads.",
      iconPt: "// REACT & NEXT.JS",
      iconEn: "// NEXT.JS ENGINE"
    },
    {
      titlePt: "Micro-interações & Animações Fluidas",
      titleEn: "Micro-interactions & Smooth Motion",
      descPt: "Efeitos interativos de hover, transições de imagem suaves e navegação tátil projetada para elevar a experiência da marca.",
      descEn: "Interactive hover states, fluid image crossfades, and tactile navigation designed to elevate brand engagement.",
      iconPt: "// INTERAÇÃO & ANIMAÇÃO",
      iconEn: "// MOTION UX"
    },
    {
      titlePt: "Catálogo & Experiência de E-Commerce",
      titleEn: "Catalog & E-Commerce Flow",
      descPt: "Layout fluido para vitrine de peças, visualização de detalhes de produtos, seleção de tamanhos e fluxo conceitual de checkout.",
      descEn: "Fluid showcase layouts for streetwear apparel, product detail viewports, size selection, and conceptual checkout.",
      iconPt: "// E-COMMERCE",
      iconEn: "// SHOPPING FLOW"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">React • Next.js • E-Commerce Conceitual • Streetwear</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Bleach.co
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Plataforma institucional e e-commerce conceitual desenvolvido para marca de streetwear. Apresenta design minimalista, transições de imagem de alta fidelidade e arquitetura em Next.js com alto desempenho."
                : "Conceptual institutional website and e-commerce platform built for a streetwear brand. Features minimalist aesthetics, high-fidelity visual transitions, and high-performance Next.js architecture."
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
                {pt ? "Estilização" : "Styling System"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                CSS Modules & Flexbox/Grid
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Estilo Visual" : "Visual Identity"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Minimalist Monochromatic Streetwear
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
