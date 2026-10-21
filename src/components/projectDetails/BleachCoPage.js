import React from "react";
import bleachcoLogo from "../../assets/bleach_co_card.png";

export default function BleachCoPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Checkout & Frete",
      titleEn: "Checkout & Shipping",
      descPt: "Pagamento por PIX e cartão via Mercado Pago e cálculo de frete em tempo real, com pedidos registrados no backend.",
      descEn: "PIX and card payments through Mercado Pago and real-time shipping quotes, with orders recorded in the back end.",
      iconPt: "// CHECKOUT & FRETE",
      iconEn: "// CHECKOUT & SHIPPING"
    },
    {
      titlePt: "Esqueleto 3D",
      titleEn: "3D Skeleton",
      descPt: "Um esqueleto em Three.js veste a camiseta de cada estampa; um clique troca a estampa no próprio modelo.",
      descEn: "A Three.js skeleton wears each print's shirt; one click swaps the print right on the model.",
      iconPt: "// THREE.JS",
      iconEn: "// THREE.JS"
    },
    {
      titlePt: "Manchas Procedurais",
      titleEn: "Procedural Stains",
      descPt: "Manchas de água sanitária geradas por código no fundo e nos títulos, que o visitante também pinta arrastando o dedo.",
      descEn: "Code-generated bleach stains across the background and headings, which visitors can also paint by dragging.",
      iconPt: "// CANVAS",
      iconEn: "// CANVAS"
    },
    {
      titlePt: "Catálogo & SEO",
      titleEn: "Catalog & SEO",
      descPt: "Páginas de estampa com fotos de frente e costas, rotas estáticas geradas no build e sitemap para busca orgânica.",
      descEn: "Print pages with front and back photos, static routes generated at build time, and a sitemap for organic search.",
      iconPt: "// CATÁLOGO & SEO",
      iconEn: "// CATALOG & SEO"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">React • Three.js • Node.js • E-commerce sob contrato</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Bleach.co
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Site e e-commerce da Bleach.co, marca paulistana de camisetas alvejadas à mão. Fui contratado para fazer a loja inteira: front, backend, pagamentos, frete e a parte visual interativa."
                : "Website and online store for Bleach.co, a São Paulo brand of hand-bleached t-shirts. I was hired to build the whole store: front end, back end, payments, shipping, and the interactive visuals."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://bleachco.com.br/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Acessar Site" : "Visit Website"} &rarr;</span>
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
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "0px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ fontSize: "1.2rem", fontFamily: "var(--mono)", fontWeight: "700", color: "var(--p2)", marginBottom: "1rem", letterSpacing: "0.05em" }}>
            {pt ? "// PROJETO SOB CONTRATO" : "// CLIENT PROJECT"}
          </h2>
          <div style={{ color: "var(--text)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  A <strong>Bleach.co</strong> me contratou para tirar a loja do papel. Desenvolvi sozinho o site e toda a estrutura por trás dele: catálogo, carrinho, checkout com Mercado Pago, cálculo de frete e o backend em Node.js/Express que registra os pedidos.
                </p>
                <p style={{ margin: 0 }}>
                  A identidade da marca pedia um site que parecesse feito à mão, então a parte visual virou o centro do projeto: um <strong>esqueleto 3D em Three.js</strong> que veste cada estampa, manchas de água sanitária geradas por código e uma estética pixelada consistente em todas as páginas.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  <strong>Bleach.co</strong> hired me to get their store off the ground. I built the website and everything behind it on my own: catalog, cart, Mercado Pago checkout, shipping quotes, and the Node.js/Express back end that records orders.
                </p>
                <p style={{ margin: 0 }}>
                  The brand wanted a site that felt handmade, so the visuals became the core of the project: a <strong>Three.js 3D skeleton</strong> that wears each print, code-generated bleach stains, and a consistent pixelated look across every page.
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
                React & Three.js
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Pagamentos & Frete" : "Payments & Shipping"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Mercado Pago (PIX e cartão)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Backend" : "Back End"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Node.js & Express
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
