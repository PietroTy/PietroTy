import React, { useState } from "react";
import imobsystemLogo from "../../assets/imobsystem_logo.jpg";

export default function ImobSystemPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = useState(null);

  const features = [
    {
      titlePt: "Cadastro de Imóveis & Proprietários",
      titleEn: "Property & Owner Management",
      descPt: "Módulo completo CRUD para registro de imóveis residenciais/comerciais, gerenciamento de dados de proprietários e histórico de contratos.",
      descEn: "Full CRUD module for registering residential/commercial properties, landlord data profiles, and contract history.",
      iconPt: "// GESTÃO DE IMÓVEIS",
      iconEn: "// PROPERTY MANAGEMENT"
    },
    {
      titlePt: "Busca com Filtros Avançados",
      titleEn: "Advanced Multi-filter Search",
      descPt: "Mecanismo de busca dinâmica por localização/bairro, categoria de imóvel (casa, apto, terreno), número de quartos e faixa de preço.",
      descEn: "Dynamic search engine filtering by location/neighborhood, property category (house, condo, land), rooms, and price range.",
      iconPt: "// FILTROS DINÂMICOS",
      iconEn: "// ADVANCED FILTERS"
    },
    {
      titlePt: "Arquitetura C# & ASP.NET Core",
      titleEn: "C# & ASP.NET Core Architecture",
      descPt: "Backend estruturado em camadas no ecossistema .NET com ASP.NET Core MVC, Entity Framework ORM e validação de modelo de dados.",
      descEn: "Tiered backend architecture built on .NET using ASP.NET Core MVC, Entity Framework ORM, and strong model validations.",
      iconPt: "// BACKEND .NET",
      iconEn: "// .NET CORE BACKEND"
    },
    {
      titlePt: "Banco Relacional SQL Server",
      titleEn: "SQL Server Relational Database",
      descPt: "Modelagem relacional em Microsoft SQL Server com chaves estrangeiras, views otimizadas e scripts de migração de banco.",
      descEn: "Relational database modeling in SQL Server featuring foreign key constraints, optimized views, and migration scripts.",
      iconPt: "// BANCO SQL SERVER",
      iconEn: "// SQL SERVER DB"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Projeto Acadêmico ETEC • C# • .NET • ASP.NET Core • Entity Framework • SQL Server</div>
            <h1 className="hero-title">
              ImobSystem
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Sistema completo para gerenciamento de imóveis, clientes e proprietários desenvolvido durante o ensino técnico na ETEC em C# e ASP.NET Core com Entity Framework e SQL Server."
                : "Real estate, client, and landlord management system developed during technical school (ETEC) using C#, .NET, and ASP.NET Core with Entity Framework and SQL Server."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "PROJETO TÉCNICO ETEC" : "ETEC CAPSTONE PROJECT"}
              </span>
              <button className="btn btn-fill" onClick={() => setPage("contact")}>
                {pt ? "Entre em contato" : "Get in touch"} &rarr;
              </button>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={imobsystemLogo} 
              alt="ImobSystem" 
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

        {/* Technical Overview */}
        <section style={{ marginTop: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--p2)", fontFamily: "var(--mono)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            <span>{`// CONTEXTO DO PROJETO`}</span>
          </div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "1.8rem" }}>
            {pt ? "Desenvolvimento na ETEC" : "ETEC Development Context"}
          </h2>

          <div style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: "0px", padding: "2rem",
            fontSize: "0.95rem", color: "var(--muted2)", lineHeight: "1.8"
          }}>
            <p style={{ margin: "0 0 1rem" }}>
              {pt 
                ? "Desenvolvido como projeto prático no curso técnico em Desenvolvimento de Sistemas da ETEC (Centro Paula Souza), consolidando conceitos de Programação Orientada a Objetos em C# e banco de dados relacional."
                : "Created as a hands-on project in the Systems Development technical program at ETEC (Centro Paula Souza), consolidating Object-Oriented Programming principles in C# and relational databases."
              }
            </p>
            <p style={{ margin: 0 }}>
              {pt 
                ? "O sistema automatizou tarefas de cadastramento de imóveis, consulta de disponibilidade por cliente e cálculo de contrato, utilizando Entity Framework para mapeamento objeto-relacional."
                : "The system automated property registration tasks, availability queries per client, and contract calculation using Entity Framework ORM."
              }
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
