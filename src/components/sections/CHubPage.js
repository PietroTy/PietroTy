import React from "react";
import chubLogo from "../../assets/chub_logo.png";

export default function CHubPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "30+ Minijogos em WebAssembly",
      titleEn: "30+ WebAssembly Minigames",
      descPt: "Coletânea com mais de 30 jogos (clones retrô e criações autorais) compilados nativamente em C via Emscripten para rodar no navegador.",
      descEn: "Collection of over 30 games (retro clones and original titles) compiled natively in C via Emscripten to run smoothly inside any web browser.",
      iconPt: "// JOGOS & WEBASSEMBLY",
      iconEn: "// WEBASSEMBLY GAMES"
    },
    {
      titlePt: "Arte Procedural por Código & C/Raylib",
      titleEn: "Procedural Code Art & C/Raylib",
      descPt: "Toda a arte, spritemaps e elementos visuais são desenhados por algoritmos e primitiva gráfica procedural no Raylib em linguagem C pura.",
      descEn: "All visual artwork, spritemaps, and UI elements are rendered algorithmically via Raylib graphic primitives written in pure C.",
      iconPt: "// MOTOR EM C",
      iconEn: "// C ENGINE"
    },
    {
      titlePt: "Nostalgia dos Portais Flash (Kizi & Click Jogos)",
      titleEn: "Flash Game Portal Nostalgia (Kizi & ClickJogos)",
      descPt: "Interface desenvolvida para evocar a atmosfera nostálgica dos clássicos portais de jogos em Flash dos anos 2000.",
      descEn: "Interface designed to recreate the nostalgic atmosphere of 2000s web Flash game hubs.",
      iconPt: "// NOSTALGIA FLASH",
      iconEn: "// FLASH PORTAL"
    },
    {
      titlePt: "Ciclo de Aprendizado Acadêmico",
      titleEn: "Academic Learning Milestone",
      descPt: "Projeto iniciado no 1º semestre da faculdade e entregue como trabalho final na última disciplina com o Prof. Dr. David Buzatto.",
      descEn: "Project started in the 1st semester of Computer Science and delivered as the final capstone project for Prof. Dr. David Buzatto.",
      iconPt: "// TRAJETÓRIA",
      iconEn: "// MILESTONE"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">C • Raylib • WebAssembly • HTML5</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              cHUB
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Portal interativo com mais de 30 minijogos desenvolvidos integralmente em linguagem C com Raylib e compilados para WebAssembly. Inspirado em clássicos portais Flash como Kizi e Click Jogos."
                : "Interactive portal featuring over 30 minigames built in C with Raylib and compiled to WebAssembly. Inspired by classic web Flash game portals like Kizi and Click Jogos."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://pietroty.github.io/Chub/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Jogar cHUB no Browser" : "Play cHUB in Browser"} &rarr;</span>
              </a>
              <a
                href="https://github.com/PietroTy/Chub"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 24px" }}
              >
                <span>{pt ? "Repositório GitHub" : "GitHub Repository"}</span>
              </a>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => setModalData(chubLogo)}
            >
              <img 
                src={chubLogo} 
                alt="cHUB Logo" 
                className="hero-logo"
                style={{ maxWidth: "320px", display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* Origin Story Section */}
        <section 
          style={{
            marginTop: "3.5rem",
            background: "rgba(168, 85, 247, 0.06)",
            border: "1px solid rgba(168, 85, 247, 0.25)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#a855f7", marginBottom: "1rem" }}>
            {pt ? "📖 A História por Trás do cHUB" : "📖 The Story Behind cHUB"}
          </h2>
          <div style={{ color: "var(--fg)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  Os meus primeiros joguinhos em C utilizando a biblioteca Raylib foram desenvolvidos durante as aulas do{" "}
                  <a 
                    href="https://github.com/davidbuzatto" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: "#a855f7", textDecoration: "underline", fontWeight: "600" }}
                  >
                    Professor Doutor David Buzatto
                  </a>
                  , ainda no 1º semestre do bacharelado em Ciência da Computação.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Na época, eu compilava os projetos e distribuía os arquivos executáveis (<code>.exe</code>) via WhatsApp para os meus colegas de sala jogarem nos intervalos. Os primeiros títulos criados foram um clone de <strong>Snake</strong> e outro de <strong>Flappy Bird</strong>.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Conforme avancei no curso, continuei expandindo o acervo de jogos e concretizei a ideia do <strong>cHUB</strong> — uma coletânea unificada inspirada nos nostálgicos portais de jogos em Flash da infância, como o <i>Kizi</i> e o <i>Click Jogos</i>.
                </p>
                <p style={{ margin: 0, fontWeight: "600", color: "var(--p2)" }}>
                  Por fim, entreguei o cHUB como o projeto final da última matéria que cursei com o Prof. Dr. David Buzatto, encerrando com chave de ouro esse importante ciclo acadêmico.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  My very first C games using the Raylib framework were developed during classes with{" "}
                  <a 
                    href="https://github.com/davidbuzatto" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: "#a855f7", textDecoration: "underline", fontWeight: "600" }}
                  >
                    Professor Dr. David Buzatto
                  </a>
                  , during my 1st semester of the Computer Science Bachelor's degree.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Back then, I compiled the projects into executable <code>.exe</code> files and shared them with my classmates over WhatsApp so everyone could play during breaks. The very first games created were a <strong>Snake</strong> clone and a <strong>Flappy Bird</strong> clone.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  As I progressed through college, I kept expanding the game library and materialized the concept of <strong>cHUB</strong> — a unified arcade portal inspired by childhood Flash game hubs like <i>Kizi</i> and <i>ClickJogos</i>.
                </p>
                <p style={{ margin: 0, fontWeight: "600", color: "var(--p2)" }}>
                  Ultimately, I submitted cHUB as the final capstone project for the last course I took with Prof. Dr. David Buzatto, closing a full academic circle.
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
                {pt ? "Linguagem Base" : "Core Language"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Linguagem C (C99)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Biblioteca Gráfica" : "Graphics Library"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Raylib Framework
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Compilação Web" : "Web Target"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                WebAssembly (Emscripten)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Orientador Acadêmico" : "Academic Advisor"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Prof. Dr. David Buzatto
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
