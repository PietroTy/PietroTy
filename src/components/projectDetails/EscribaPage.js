import React from "react";
import escribaLogo from "../../assets/escriba_logo.png";

export default function EscribaPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Engenharia de Prompt & LLMs Estruturados",
      titleEn: "Prompt Engineering & Structured LLMs",
      descPt: "Uso estruturado e seguro de LLMs para auxílio na produção e refinamento de textos acadêmicos com preservação de rigor científico.",
      descEn: "Structured and secure application of LLMs for academic text drafting and refining while maintaining scientific rigor.",
      iconPt: "// INTELIGÊNCIA ARTIFICIAL",
      iconEn: "// LLM ARCHITECTURE"
    },
    {
      titlePt: "Proficiência com Maritaca AI (Sabiá)",
      titleEn: "Native Portuguese via Maritaca AI",
      descPt: "Adoção dos modelos Sabiá da Maritaca AI devido à altíssima proficiência na língua portuguesa para normas acadêmicas e excelente custo-benefício.",
      descEn: "Adoption of Maritaca AI Sabiá models for superior proficiency in Brazilian Portuguese academic writing and cost efficiency.",
      iconPt: "// MARITACA AI",
      iconEn: "// SABIÁ ENGINE"
    },
    {
      titlePt: "Mitigação de Alucinações & Checagem Cruzada",
      titleEn: "Hallucination Mitigation & Fact Checking",
      descPt: "Pipelines avançados de validação multicamada para verificação de conceitos e mitigação ativa de alucinações acadêmicas.",
      descEn: "Advanced multi-layer validation pipelines for contextual verification and active academic hallucination mitigation.",
      iconPt: "// CHECAGEM CRUZADA",
      iconEn: "// FACT CHECKING"
    },
    {
      titlePt: "Formatação ABNT & Citações Automáticas",
      titleEn: "ABNT Formatting & Automatic Citations",
      descPt: "Estruturação nos padrões ABNT com citação direta/indireta, referências bibliográficas rigorosas e regras acadêmicas.",
      descEn: "Automated structuring under official ABNT standards, direct/indirect citation handling, and rigorous academic referencing.",
      iconPt: "// NORMAS ABNT",
      iconEn: "// ABNT FORMAT"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Python • Streamlit • Maritaca AI (Sabiá) • Pesquisa Acadêmica</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Escriba AI
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Plataforma de inteligência artificial aplicada à pesquisa científica e redação acadêmica. Nascida durante a Iniciação Científica no bacharelado, utiliza LLMs especializados em português brasileiro com foco em estrutura segura, mitigação de alucinações e normas ABNT."
                : "Artificial intelligence platform applied to scientific research and academic writing. Born during a Scientific Initiation research project, utilizing Portuguese-specialized LLMs for secure structure, hallucination mitigation, and ABNT formatting."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://escriba.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Acessar Escriba AI" : "Access Escriba AI"} &rarr;</span>
              </a>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => setModalData(escribaLogo)}
            >
              <img 
                src={escribaLogo} 
                alt="Escriba AI Logo" 
                className="hero-logo"
                style={{ maxWidth: "340px", display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* Origin Story & Mentorship Section */}
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
            {pt ? "// INICIAÇÃO CIENTÍFICA, ORIENTAÇÃO & ARTIGO ACADÊMICO" : "// RESEARCH INITIATION, MENTORSHIP & PAPER"}
          </h2>
          <div style={{ color: "var(--text)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  O projeto do <strong>Escriba AI</strong> teve início durante o meu bacharelado em Ciência da Computação, no âmbito de uma <strong>Iniciação Científica (IC)</strong> focada em inovação tecnológica. O objetivo central era explorar a utilização de Modelos de Linguagem de Grande Porte (LLMs) de maneira estruturada, confiável e segura para o ambiente acadêmico.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  A ideia amadureceu e se consolidou sob a orientação valiosa da{" "}
                  <a 
                    href="https://www.linkedin.com/in/cristiane-freire-de-s%C3%A1-phd-ba36a7254/" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: "var(--p2)", textDecoration: "underline", fontWeight: "600" }}
                  >
                    Dra. Cristiane Freire de Sá, PhD
                  </a>
                  {" "}(Ph.D. em Linguística Aplicada, Learning Experience Architect & Senior LXD). A parceria e trocas de conhecimento durante o projeto foram fundamentais para modelar o Escriba respeitando as nuances linguísticas e as necessidades de pesquisadores.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Para a engine do sistema, a escolha da <strong>Maritaca AI (Modelos Sabiá)</strong> provou ser uma decisão estratégica decisiva: os modelos apresentaram proficiência ímpar na norma culta do português brasileiro para textos acadêmicos, aliada a um custo operacional drasticamente inferior ao de concorrentes internacionais.
                </p>
                <p style={{ margin: 0, fontWeight: "600", color: "var(--p2)" }}>
                  <i>Atualmente, estou trabalhando na escrita de um artigo acadêmico (paper) detalhando a arquitetura, o desenvolvimento, os desafios técnicos enfrentados e os resultados obtidos com o Escriba AI.</i>
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  The <strong>Escriba AI</strong> project began during my Computer Science Bachelor's degree within a <strong>Scientific Initiation (IC)</strong> research project focused on technological innovation. The core objective was exploring structured, reliable, and secure applications of LLMs in academic writing.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  The concept matured and took shape under the guidance and mentorship of{" "}
                  <a 
                    href="https://www.linkedin.com/in/cristiane-freire-de-s%C3%A1-phd-ba36a7254/" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: "var(--p2)", textDecoration: "underline", fontWeight: "600" }}
                  >
                    Dr. Cristiane Freire de Sá, PhD
                  </a>
                  {" "}(Ph.D. in Applied Linguistics, Learning Experience Architect & Senior LXD). Her linguistic expertise was essential in designing Escriba to meet rigorous academic standards.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  For the underlying engine, adopting <strong>Maritaca AI (Sabiá models)</strong> proved to be a key strategic decision: the models demonstrated unmatched fluency in Brazilian Portuguese academic prose, combined with high cost-efficiency compared to international LLM APIs.
                </p>
                <p style={{ margin: 0, fontWeight: "600", color: "var(--p2)" }}>
                  <i>I am currently writing an academic research paper documenting the technical architecture, development challenges, and evaluation results of Escriba AI.</i>
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
                {pt ? "Interface Web" : "Web UI"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Python & Streamlit
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Modelo Principal" : "Core Model"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Maritaca AI (Sabiá Models)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Orientação & Pesquisa" : "Mentorship & Research"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Dra. Cristiane Freire de Sá, PhD
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Publicação" : "Publication"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                {pt ? "Paper Acadêmico em Elaboração" : "Academic Paper in Progress"}
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
