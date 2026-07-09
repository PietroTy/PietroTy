import React from "react";
import screenshotImg from "../../assets/game_of_drones.png";

export default function GameOfDronesPage({ lang, setPage }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Processamento com OpenCV",
      titleEn: "OpenCV Processing",
      descPt: "Filtros de cor, detecção de contornos e transformações espaciais aplicadas em tempo real a 30 FPS.",
      descEn: "Color filtering, contour detection, and spatial transformations computed in real-time at 30 FPS.",
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
            <div className="hero-tag">Computer Vision & ML</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Game of Drones
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Algoritmos de visão computacional embarcados em Raspberry Pi para detecção de trajetórias e desvio de obstáculos, desenvolvido para a equipe competitiva Game of Drones do IFSP."
                : "Computer vision and machine learning algorithms embedded in a Raspberry Pi for real-time track following and obstacle avoidance, built for the IFSP Game of Drones competition team."
              }
            </p>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={screenshotImg} 
              alt="Game of Drones Preview" 
              className="hero-image" 
              style={{ maxWidth: "400px", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0,0,0,0.3)", border: "2px solid var(--border)" }}
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
