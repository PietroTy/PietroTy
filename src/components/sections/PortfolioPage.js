import React from "react";

export default function PortfolioPage({ lang, setPage }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Chatbot de IA Embutido",
      titleEn: "Biographical AI Chatbot",
      descPt: "Um agente conversacional de inteligência artificial alimentado por dados biográficos para responder a recrutadores e visitantes.",
      descEn: "A biographical AI-powered chatbot designed to answer recruiter and visitor questions in real-time.",
      icon: "// CHATBOT"
    },
    {
      titlePt: "Suporte Bilíngue Nativo",
      titleEn: "Native Bilingual Support",
      descPt: "Alternância fluida e instantânea entre os idiomas Português e Inglês em todas as seções e descrições.",
      descEn: "Seamless and instant language toggle between Portuguese and English across all pages and content.",
      icon: "// GLOBAL"
    },
    {
      titlePt: "Pipeline de CI/CD",
      titleEn: "CI/CD Pipeline",
      descPt: "Integração contínua e deploy automatizado para GitHub Pages via workflows estruturados de GitHub Actions.",
      descEn: "Continuous integration and automated delivery to GitHub Pages via structured GitHub Actions workflows.",
      icon: "// AUTOMATION"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        


        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">React Frontend App</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Portfólio
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Este website de apresentação profissional. Construído sob um design cyberpunk retrô de pixels, com suporte completo a dois idiomas e IA conversacional integrada."
                : "This professional presentation website. Built with a retro-cyberpunk pixel aesthetic, complete bilingual support, and integrated conversational AI."
              }
            </p>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={process.env.PUBLIC_URL + "/agent_ty_clean.png"} 
              alt="Agent Ty Logo" 
              className="hero-logo" 
              style={{ maxWidth: "260px", display: "block" }}
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

        {/* Project Story Section */}
        <section style={{ marginTop: "4rem", borderTop: "1px dashed var(--border)", paddingTop: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", marginBottom: "1.5rem" }}>
            {pt ? "A História do Projeto" : "The Project's Story"}
          </h2>
          <p style={{ color: "var(--muted2)", lineHeight: "1.8", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            {pt 
              ? "O portfólio nasceu com a missão de unificar a presença digital do Pietro, servindo como uma central para todos os seus projetos e experimentos técnicos. Mais do que um simples currículo visual, o objetivo era construir uma experiência cyberpunk interativa e imersiva."
              : "This portfolio was born with the mission of unifying Pietro's digital presence, serving as a hub for all his technical projects and experiments. More than a simple visual resume, the goal was to build an interactive and immersive cyberpunk experience."
            }
          </p>
          <p style={{ color: "var(--muted2)", lineHeight: "1.8", fontSize: "0.95rem" }}>
            {pt
              ? "Durante o desenvolvimento, surgiu a ideia de criar o Ty: um assistente virtual inteligente capaz de conversar com visitantes e recrutadores sobre a trajetória profissional do Pietro. Representado pelo mascote de coelho em pixel-art, o Ty evoluiu de um simples bot de chat para se tornar a própria identidade visual e alma interativa deste portfólio."
              : "During development, the idea of creating Ty was born: a smart virtual assistant capable of chatting with visitors and recruiters about Pietro's professional journey. Represented by the pixel-art bunny mascot, Ty evolved from a simple chatbot to become the visual identity and interactive soul of this portfolio."
            }
          </p>
        </section>

        {/* Tech Stack Footer */}
        <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Framework & Estilo" : "Framework & Styling"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                React & Vanilla CSS
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Integração IA" : "AI Integration"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Biographical conversational AI API
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Deploy" : "Deployment"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                GitHub Pages & Actions CI/CD
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
