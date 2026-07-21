import React from "react";

export default function GameOfDronesPage({ lang, setPage }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Competição EletroQuad SAE BRASIL",
      titleEn: "EletroQuad SAE BRASIL Competition",
      descPt: "Competição universitária multidisciplinar de concepção, documentação, construção e voo autônomo de drones quadricópteros, com missões que envolvem inteligência embarcada, visão computacional e telemetria.",
      descEn: "A multidisciplinary university competition involving the design, documentation, construction, and autonomous flight of quadrotor drones in missions requiring embedded intelligence, computer vision, and telemetry.",
      icon: "// COMPETITION"
    },
    {
      titlePt: "Processamento com OpenCV",
      titleEn: "OpenCV Processing",
      descPt: "Filtros de cor, detecção de contornos e transformações espaciais aplicadas em tempo real para leitura de trajetória e apoio à tomada de decisão autônoma.",
      descEn: "Real-time color filtering, contour detection, and spatial transformations for track reading and autonomous decision support.",
      icon: "// VISION"
    },
    {
      titlePt: "Navegação Autônoma",
      titleEn: "Autonomous Navigation",
      descPt: "Algoritmos de controle proporcional, integral e derivativo (PID) para centralização e alinhamento em trajetórias.",
      descEn: "Proportional, integral, and derivative (PID) control loops for centring and track alignment.",
      icon: "// NAVIGATION"
    },
    {
      titlePt: "Hardware Embarcado",
      titleEn: "Embedded Hardware",
      descPt: "Otimização extrema para execução fluida em Raspberry Pi com consumo de bateria e peso reduzidos.",
      descEn: "Extreme code optimizations to achieve smooth execution on Raspberry Pi with minimal weight and power drain.",
      icon: "// HARDWARE"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        


        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">EletroQuad SAE BRASIL · Computer Vision & ML</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Game of Drones
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Software de visão computacional, inteligência embarcada e Machine Learning desenvolvido pela equipe oficial Game of Drones do IFSP para um quadricóptero autônomo na Competição EletroQuad SAE BRASIL."
                : "Computer vision, embedded intelligence, and machine learning software developed by IFSP's official Game of Drones team for an autonomous quadrotor in the EletroQuad SAE BRASIL competition."
              }
            </p>
            <a
              href="https://saebrasil.org.br/programas-estudantis/eletroquad/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: "inline-flex", marginTop: "1rem" }}
            >
              {pt ? "Página oficial da EletroQuad" : "Official EletroQuad page"}
            </a>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={process.env.PUBLIC_URL + "/game_of_drones_clean.png"} 
              alt="Game of Drones Logo" 
              className="hero-logo"
              style={{ maxWidth: "380px", display: "block" }}
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
                {pt ? "Linguagem" : "Language"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Python 3
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Processamento" : "Processing"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                OpenCV & NumPy
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Embarcado" : "Embedded"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Raspberry Pi / Linux OS
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
