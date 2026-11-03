import React from "react";
import lapisLogo from "../../assets/lapis_card.png";

export default function CrmEngajaPage({ lang, setPage }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Várias Empresas, Um Sistema",
      titleEn: "Many Companies, One System",
      descPt: "Arquitetura multiempresa: cada empresa usa o mesmo CRM com os próprios dados isolados no banco, com regras de acesso por empresa.",
      descEn: "Multi-tenant architecture: each company uses the same CRM with its own data isolated in the database, with per-company access rules.",
      iconPt: "// MULTIEMPRESA",
      iconEn: "// MULTI-TENANT"
    },
    {
      titlePt: "Do Comercial ao Financeiro",
      titleEn: "From Sales to Finance",
      descPt: "Contatos, empresas, funil de vendas, tarefas, projetos, pedidos, produtos, estoque, financeiro e logística no mesmo lugar, com relatórios de BI.",
      descEn: "Contacts, companies, sales pipeline, tasks, projects, orders, products, inventory, finance, and logistics in one place, with BI reports.",
      iconPt: "// MÓDULOS",
      iconEn: "// MODULES"
    },
    {
      titlePt: "PostgreSQL & Auditoria",
      titleEn: "PostgreSQL & Audit Trail",
      descPt: "Modelagem relacional em PostgreSQL com registro de auditoria das alterações e eventos para integrações.",
      descEn: "Relational PostgreSQL modeling with an audit trail of changes and events for integrations.",
      iconPt: "// BANCO POSTGRESQL",
      iconEn: "// POSTGRESQL DB"
    },
    {
      titlePt: "Testado de Ponta a Ponta",
      titleEn: "Tested End to End",
      descPt: "API em Node.js (Fastify) com testes automatizados rodando contra um PostgreSQL de verdade, e front em React.",
      descEn: "Node.js (Fastify) API with automated tests running against a real PostgreSQL database, plus a React front end.",
      iconPt: "// QUALIDADE",
      iconEn: "// QUALITY"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">White-label • Multiempresa • Node.js • React • PostgreSQL</div>
            <h1 className="hero-title">Lápis CRM</h1>
            <p className="hero-subtitle">
              {pt 
                ? "CRM white-label e multiempresa: várias empresas usam o mesmo sistema, cada uma com seus dados isolados. Feito em Node.js, React e PostgreSQL, cobre do comercial ao financeiro, com relatórios de BI."
                : "White-label, multi-tenant CRM: several companies share the same system, each with its own isolated data. Built with Node.js, React, and PostgreSQL, it covers sales through finance, with BI reports."
              }
            </p>

            <div style={{ marginTop: "2rem" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "EM DESENVOLVIMENTO · CÓDIGO PRIVADO" : "IN DEVELOPMENT · PRIVATE CODE"}
              </span>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={lapisLogo} alt="Lápis CRM" className="hero-logo" style={{ maxWidth: "340px", display: "block" }} />
          </div>
        </section>

        {/* Confidentiality & Corporate Production Notice */}
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
            {pt ? "// SOBRE O PROJETO" : "// ABOUT THE PROJECT"}
          </h2>
          <div style={{ color: "var(--text)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  O Lápis CRM nasceu para organizar atendimento, vendas e pós-venda num lugar só e virou um produto <strong>white-label</strong>: a mesma base atende várias empresas, cada uma com a sua marca e os seus dados.
                </p>
                <p style={{ margin: 0 }}>
                  Está em desenvolvimento, e a <strong>Engaja Soluções Corporativas</strong> é a primeira empresa a usar. O código é privado.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  Lápis CRM started as a way to keep customer support, sales, and after-sales in one place and became a <strong>white-label</strong> product: the same codebase serves several companies, each with its own brand and data.
                </p>
                <p style={{ margin: 0 }}>
                  It is in development, and <strong>Engaja Soluções Corporativas</strong> is the first company using it. The code is private.
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
                {pt ? "Banco de Dados" : "Database Engine"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                PostgreSQL Relacional
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Backend" : "Backend"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Node.js (Fastify)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Front-end" : "Front end"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                React
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Status do Projeto" : "Project Status"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                {pt ? "Em desenvolvimento" : "In development"}
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
