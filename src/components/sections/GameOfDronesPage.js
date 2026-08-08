import React from "react";

export default function GameOfDronesPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);
  const logoImg = process.env.PUBLIC_URL + "/game_of_drones_clean.png";

  const features = [
    {
      titlePt: "Capitania de Software & Liderança de 15+ Alunos",
      titleEn: "Software Captain & 15+ Student Leadership",
      descPt: "Pietro atua como atual Capitão da área de Software na liga acadêmica do IFSP, liderando uma equipe multidisciplinar de mais de 15 alunos.",
      descEn: "Pietro serves as the current Software Captain at IFSP academic league, leading a multidisciplinary team of 15+ students.",
      iconPt: "// CAPITANIA & LIDERANÇA",
      iconEn: "// CAPTAIN & LEADERSHIP"
    },
    {
      titlePt: "Treinamento & Integração do YOLOv8n",
      titleEn: "YOLOv8n Training & Integration",
      descPt: "Treinamento de modelos neurais YOLOv8n customizados para tomada de decisão autônoma de voo conforme as regras das provas da EletroQuad.",
      descEn: "Training and integrating custom YOLOv8n neural models for autonomous flight decisions in specific competition mission stages.",
      iconPt: "// YOLOv8n & IA EMBARCADA",
      iconEn: "// EMBEDDED AI"
    },
    {
      titlePt: "Controles do Drone via Raspberry Pi",
      titleEn: "Raspberry Pi Drone Controls",
      descPt: "Desenvolvimento de todo o sistema de controle de voo, leitura de telemetria, alinhamento PID e acionamentos embarcados em Raspberry Pi.",
      descEn: "Development of flight control routines, telemetry reading, PID alignment, and embedded hardware triggers on Raspberry Pi.",
      iconPt: "// RASPBERRY PI & EMBARCADOS",
      iconEn: "// EMBEDDED HARDWARE"
    },
    {
      titlePt: "2º Ano Consecutivo de Classificação",
      titleEn: "2nd Consecutive Year Qualification",
      descPt: "Conquista da classificação nacional da equipe pelo 2º ano consecutivo na prestigiada competição universitária EletroQuad SAE BRASIL.",
      descEn: "Securing national competition qualification for the 2nd consecutive year in the prestigious EletroQuad SAE BRASIL league.",
      iconPt: "// CLASSIFICAÇÃO SAE",
      iconEn: "// SAE QUALIFICATION"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Liga Acadêmica IFSP • Capitania de Software • YOLOv8n • Raspberry Pi</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Game of Drones
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Liga acadêmica extracurricular do IFSP participante da Competição EletroQuad SAE BRASIL. Liderada por Pietro na capitania de software, projeta o sistema de controle autônomo, visão computacional e inteligência embarcada do drone."
                : "IFSP extracurricular academic league participating in the EletroQuad SAE BRASIL competition. Led by Pietro as Software Captain, designing the drone's autonomous flight control, computer vision, and embedded AI."
              }
            </p>
            <a
              href="https://saebrasil.org.br/programas-estudantis/eletroquad/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: "inline-flex", marginTop: "1rem" }}
            >
              {pt ? "Página oficial da EletroQuad SAE" : "Official EletroQuad SAE page"}
            </a>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => setModalData(logoImg)}
            >
              <img 
                src={logoImg} 
                alt="Game of Drones Logo" 
                className="hero-logo"
                style={{ maxWidth: "380px", display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* Captaincy & Team Story Section */}
        <section 
          style={{
            marginTop: "3.5rem",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ fontSize: "1.2rem", fontFamily: "var(--mono)", fontWeight: "700", color: "var(--p2)", marginBottom: "1rem", letterSpacing: "0.05em" }}>
            {pt ? "// CAPITANIA DE SOFTWARE, YOLOv8n & BI-CLASSIFICAÇÃO SAE" : "// SOFTWARE CAPTAINCY, YOLOv8n & SAE BI-QUALIFICATION"}
          </h2>
          <div style={{ color: "var(--text)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  No <strong>Game of Drones</strong> (liga acadêmica oficial do IFSP), Pietro exerce o papel de <strong>Capitão da equipe de Software</strong>, liderando um time multidisciplinar de mais de 15 alunos entre engenharia, computação e eletrônica.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Sob sua liderança técnica, a equipe desenvolveu todos os controles de voo embarcados em <strong>Raspberry Pi</strong>, além de treinar e integrar redes neurais <strong>YOLOv8n</strong> para tomada de decisão autônoma de voo e leitura de alvos durante missões específicas da competição.
                </p>
                <p style={{ margin: 0, fontWeight: "600", color: "var(--p2)" }}>
                  <i>Pelo 2º ano consecutivo, a equipe obteve a classificação oficial para a fase nacional da Competição EletroQuad SAE BRASIL, consolidando uma trajetória marcante de gestão técnica, trabalho em equipe e inovação embarcada.</i>
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  In the <strong>Game of Drones</strong> (IFSP official academic league), Pietro serves as the <strong>Software Captain</strong>, directing a multidisciplinary team of over 15 students across computer science, engineering, and electronics.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Under his technical leadership, the team engineered all flight control algorithms on <strong>Raspberry Pi</strong>, alongside training and deploying custom <strong>YOLOv8n</strong> neural networks for autonomous target detection and flight maneuvers.
                </p>
                <p style={{ margin: 0, fontWeight: "600", color: "var(--p2)" }}>
                  <i>For the 2nd consecutive year, the team earned national qualification in the EletroQuad SAE BRASIL competition, validating excellence in team leadership, embedded systems, and computer vision.</i>
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
                {pt ? "Liderança" : "Leadership"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Capitão de Software (15+ alunos)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Visão & IA" : "Vision & AI"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                YOLOv8n & OpenCV
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Embarcado" : "Embedded System"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Raspberry Pi / Linux / PID
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Conquista" : "Achievement"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Bi-Classificado SAE BRASIL
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
