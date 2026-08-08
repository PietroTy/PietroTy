import React from "react";
import chubLogo from "../../assets/chub_logo.png";

export default function CHubPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Nostalgia dos Jogos Flash (Kizi & Click Jogos)",
      titleEn: "Nostalgic Flash Games (Kizi & Click Jogos)",
      descPt: "Inspirado nas clássicas plataformas de jogos em Flash da infância, reunindo jogos retrô 2D em uma única vitrine interativa.",
      descEn: "Inspired by classic childhood Flash game portals, combining retro 2D games into a single interactive showcase.",
      iconPt: "// CONCEITO RETRÔ",
      iconEn: "// RETRO CONCEPT"
    },
    {
      titlePt: "Primeiros Jogos em C com Raylib",
      titleEn: "First C Games with Raylib",
      descPt: "Desenvolvidos do zero em C com a biblioteca Raylib durante o 1º semestre da faculdade, incluindo clássicos como Snake e Flappy Bird.",
      descEn: "Built from scratch in C with the Raylib library during the 1st semester of computer science, including Snake and Flappy Bird clones.",
      iconPt: "// LINGUAGEM C & RAYLIB",
      iconEn: "// C & RAYLIB"
    },
    {
      titlePt: "Compilação Web via WebAssembly (Emscripten)",
      titleEn: "WebAssembly Compilation (Emscripten)",
      descPt: "Compilação de código de baixo nível em C diretamente para WebAssembly (WASM), permitindo rodar jogos de alta performance no navegador.",
      descEn: "Low-level C code compiled directly to WebAssembly (WASM) using Emscripten for smooth in-browser game execution.",
      iconPt: "// WEBASSEMBLY (WASM)",
      iconEn: "// WEBASSEMBLY"
    },
    {
      titlePt: "Projeto Final de Graduação Acadêmica",
      titleEn: "Final Academic Capstone Project",
      descPt: "Entregue como projeto de conclusão de ciclo para o Prof. Dr. David Buzatto no IFSP, consolidando o aprendizado em Ciência da Computação.",
      descEn: "Delivered as the final course project for Prof. Dr. David Buzatto at IFSP, completing a foundational computer science milestone.",
      iconPt: "// PROJETO ACADÊMICO",
      iconEn: "// ACADEMIC CAPSTONE"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">C • Raylib • WebAssembly (Emscripten) • HTML5</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              cHUB
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Portal retro de minijogos 2D desenvolvidos em linguagem C com Raylib e compilados para WebAssembly. Inspirado no Kizi e Click Jogos, nasceu das primeiras aulas de programação no bacharelado."
                : "Retro 2D minigame portal built in C with Raylib and compiled to WebAssembly. Inspired by classic Flash platforms, born during early computer science classes."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://pietroty.github.io/chub/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Acessar cHUB" : "Access cHUB"} &rarr;</span>
              </a>
              <a
                href="https://github.com/PietroTy/chub"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Repositório GitHub" : "GitHub Repository"} &rarr;</span>
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
          <h2 style={{ fontSize: "1.2rem", fontFamily: "var(--mono)", fontWeight: "700", color: "#a855f7", marginBottom: "1rem", letterSpacing: "0.05em" }}>
            {pt ? "// HISTÓRIA DO PROJETO & HOMENAGEM ACADÊMICA" : "// PROJECT STORY & ACADEMIC DEDICATION"}
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
                    Professor David Buzatto, PhD
                  </a>
                  , back in my 1st semester of Computer Science.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  At the time, I compiled the executables (<code>.exe</code>) and shared them via WhatsApp with my classmates to play during class breaks. The first titles built were clones of <strong>Snake</strong> and <strong>Flappy Bird</strong>.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  As I progressed through the program, I kept expanding the game library and materialized <strong>cHUB</strong> — a unified games hub inspired by classic childhood Flash portals like <i>Kizi</i> and <i>Click Jogos</i>.
                </p>
                <p style={{ margin: 0, fontWeight: "600", color: "var(--p2)" }}>
                  Finally, I delivered cHUB as the final project for my last course under Prof. Dr. David Buzatto, completing an important academic chapter.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Feature Grid */}
        <section className="features-section" style={{ marginTop: "3.5rem" }}>
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
                Linguagem C (ANSI / C99)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Engine de Gráficos" : "Graphics Engine"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Raylib Framework 2D
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Compilação Web" : "Web Compiler"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Emscripten & WebAssembly (WASM)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Mentoria Acadêmica" : "Academic Mentor"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Prof. Dr. David Buzatto (IFSP)
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
