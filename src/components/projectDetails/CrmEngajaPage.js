import React from "react";

export default function CrmEngajaPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

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
      descPt: "Contatos, empresas, funil de vendas, tarefas, projetos, pedidos, produtos, estoque, financeiro e logística no mesmo lugar.",
      descEn: "Contacts, companies, sales pipeline, tasks, projects, orders, products, inventory, finance, and logistics in one place.",
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
            <div className="hero-tag">Multiempresa • Node.js • React • PostgreSQL</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              CRM White-label
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "CRM multiempresa: várias empresas usam o mesmo sistema, cada uma com seus dados isolados. Feito em Node.js, React e PostgreSQL, cobre do comercial ao financeiro."
                : "Multi-tenant CRM: several companies share the same system, each with its own isolated data. Built with Node.js, React, and PostgreSQL, it covers sales through finance."
              }
            </p>

            <div style={{ marginTop: "2rem" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "EM DESENVOLVIMENTO · CÓDIGO PRIVADO" : "IN DEVELOPMENT · PRIVATE CODE"}
              </span>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{
                width: "280px",
                height: "200px",
                background: "linear-gradient(135deg, var(--p1), var(--p2))",
                borderRadius: "0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                border: "1px solid var(--border)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                cursor: "pointer"
              }}
              onClick={() => setModalData("crm_card")}
            >
              <div style={{ fontFamily: "var(--mono)", color: "#fff", fontWeight: "bold", fontSize: "1.8rem" }}>CRM</div>
              <div style={{ fontFamily: "var(--mono)", color: "rgba(255,255,255,0.8)", fontWeight: "bold", fontSize: "0.9rem" }}>White-label CRM</div>
            </div>
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
                  O CRM nasceu para organizar atendimento, vendas e pós-venda num lugar só e virou um produto <strong>white-label</strong>: a mesma base atende várias empresas, cada uma com a sua marca e os seus dados.
                </p>
                <p style={{ margin: 0 }}>
                  Está em desenvolvimento, e a <strong>Engaja Soluções Corporativas</strong> é a primeira empresa a usar. O código é privado.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  The CRM started as a way to keep customer support, sales, and after-sales in one place and became a <strong>white-label</strong> product: the same codebase serves several companies, each with its own brand and data.
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
                maxWidth: "500px",
                padding: "2.5rem",
                background: "linear-gradient(135deg, var(--p1), var(--card))",
                border: "1px solid var(--border)",
                borderRadius: "0px",
                textAlign: "center",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
                cursor: "default"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ fontFamily: "var(--mono)", fontSize: "3rem", fontWeight: "bold", color: "#fff", marginBottom: "1rem" }}>CRM</div>
              <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "0.8rem", fontFamily: "var(--mono)" }}>White-label CRM</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.6 }}>
                {pt 
                  ? "CRM multiempresa em Node.js, React e PostgreSQL, em desenvolvimento."
                  : "Multi-tenant CRM in Node.js, React, and PostgreSQL, in development."
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
