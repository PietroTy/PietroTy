import React, { useState } from "react";
import n8nLogo from "../../assets/n8n_logo.png";

export default function N8nFormsPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = useState(null);

  const features = [
    {
      titlePt: "Formulários Dinâmicos & Validação",
      titleEn: "Dynamic Forms & Data Validation",
      descPt: "Construção de interfaces de coleta de dados com validações dinâmicas de campos, formatação de CPF/CNPJ em tempo real e prevenção de envios duplicados.",
      descEn: "Data collection UI with dynamic field validation, real-time Brazilian Tax ID (CPF/CNPJ) formatting, and duplicate submission prevention.",
      iconPt: "// FORMULÁRIOS DINÂMICOS",
      iconEn: "// DYNAMIC FORMS"
    },
    {
      titlePt: "Pipelines de Automação no n8n",
      titleEn: "n8n Automation Pipelines",
      descPt: "Fluxos de trabalho low-code/no-code no n8n para orquestração de dados, transformação de JSONs, parsing de arquivos e integração de APIs.",
      descEn: "Workflow automation pipelines in n8n orchestrating data ingestion, JSON transformation, file parsing, and API integrations.",
      iconPt: "// WORKFLOWS N8N",
      iconEn: "// N8N PIPELINES"
    },
    {
      titlePt: "Integração com Banco PostgreSQL",
      titleEn: "PostgreSQL DB Integration",
      descPt: "Persistência direta de respostas e históricos de auditoria em banco de dados relacional PostgreSQL otimizado com índices e tabelas parametrizadas.",
      descEn: "Direct storage of response logs and audit trails in an optimized PostgreSQL relational database featuring indexed schemas.",
      iconPt: "// BANCO POSTGRESQL",
      iconEn: "// POSTGRESQL DB"
    },
    {
      titlePt: "Disparo de Webhooks & Notificações",
      titleEn: "Webhooks & Real-time Alerts",
      descPt: "Envio instantâneo de alertas por e-mail e mensagens automatizadas no WhatsApp/Slack no momento em que um formulário é preenchido.",
      descEn: "Instant email alerts and automated WhatsApp/Slack notification triggers executed immediately upon form submission.",
      iconPt: "// NOTIFICAÇÕES EM TEMPO REAL",
      iconEn: "// INSTANT ALERTS"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Automação de Processos • n8n • PostgreSQL • Node.js • Webhooks</div>
            <h1 className="hero-title">
              Formulários & Workflows n8n
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Sistema de formulários corporativos dinâmicos integrados a bancos de dados PostgreSQL e ferramentas internas através de pipelines no n8n. Automação de validações, disparos de webhooks e alertas em tempo real."
                : "Dynamic corporate form system connected to PostgreSQL databases and internal microservices through n8n automation pipelines. Includes data validation, webhook triggers, and real-time alerts."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "SISTEMA DE AUTOMAÇÃO INTERNA" : "INTERNAL AUTOMATION SYSTEM"}
              </span>
              <button className="btn btn-fill" onClick={() => setPage("contact")}>
                {pt ? "Entre em contato" : "Get in touch"} &rarr;
              </button>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={n8nLogo} 
              alt="n8n" 
              style={{
                maxWidth: "320px",
                width: "100%",
                maxHeight: "240px",
                objectFit: "contain",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0",
                padding: "1rem"
              }}
            />
          </div>
        </section>

        {/* Feature Grid */}
        <section className="features-section" style={{ marginTop: "3rem" }}>
          {features.map((f, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-wrapper">{pt ? f.iconPt : f.iconEn}</div>
              <h3 className="feature-title">{pt ? f.titlePt : f.titleEn}</h3>
              <p className="feature-description">{pt ? f.descPt : f.descEn}</p>
            </div>
          ))}
        </section>

        {/* Overview Section */}
        <section style={{ marginTop: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--p2)", fontFamily: "var(--mono)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            <span>{`// ARQUITETURA DE DADOS`}</span>
          </div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "1.8rem" }}>
            {pt ? "Funcionamento do Pipeline" : "Pipeline Mechanics"}
          </h2>

          <div style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: "0px", padding: "2rem",
            fontSize: "0.95rem", color: "var(--muted2)", lineHeight: "1.8"
          }}>
            <p style={{ margin: "0 0 1rem" }}>
              {pt 
                ? "Os formulários coletam os dados dos usuários com validação no lado do cliente. Ao serem submetidos, os payloads JSON são enviados diretamente para um endpoint webhook customizado hospedado no n8n."
                : "Forms capture user inputs with client-side field validation. Upon submission, raw JSON payloads hit a secured n8n webhook endpoint."
              }
            </p>
            <p style={{ margin: 0 }}>
              {pt 
                ? "No n8n, os dados passam por sanetização, rotulagem e inserção estruturada no PostgreSQL, notificando a equipe responsável via e-mail e mensagem instantânea de forma totalmente transparente."
                : "Inside n8n, inputs undergo sanitization, tagging, and structured insertion into PostgreSQL, notifying relevant teams instantly via email and push messaging."
              }
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
