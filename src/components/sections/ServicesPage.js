import React, { useState } from "react";
import { CERTIFICATIONS, SKILLS } from "../../data/skills";
import SectionHeader from "../common/SectionHeader";
import {
  FiGlobe, FiBarChart2, FiZap, FiMessageCircle, FiChevronDown, FiChevronUp
} from "react-icons/fi";

const SERVICES = [
  {
    id: "web",
    iconComponent: FiGlobe,
    color: "#9d5cfc",
    titlePt: "Sites & Landing Pages de Alta Conversão",
    titleEn: "High-Conversion Websites & Landing Pages",
    tagPt: "DESENVOLVIMENTO WEB SOB MEDIDA",
    tagEn: "CUSTOM WEB DEVELOPMENT",
    descPt: "Desenvolvo o site ou a landing page da sua empresa do zero. Um visual profissional e moderno, de carregamento ultra rápido no celular, otimizado para o Google (SEO) e planejado para transformar visitantes em clientes reais.",
    descEn: "I build your company's website or landing page from scratch. Modern professional look, lightning-fast on mobile, Google SEO optimized, and designed to turn visitors into real clients.",
    bulletsPt: [
      "Sites institucionais, landing pages e portfólios completos",
      "Design responsivo com carregamento rápido e otimizado",
      "Posicionamento e otimização para pesquisas no Google (SEO)",
      "Integração com formulários, WhatsApp, analytics e CRM",
    ],
    bulletsEn: [
      "Institutional websites, landing pages, and full portals",
      "Responsive design with fast, optimized loading times",
      "Google Search positioning and technical SEO optimization",
      "Direct integration with forms, WhatsApp, analytics, and CRM",
    ],
    badges: ["React", "Next.js", "JavaScript", "CSS/SCSS", "SEO", "TypeScript"],
  },
  {
    id: "data",
    iconComponent: FiBarChart2,
    color: "#a78bfa",
    titlePt: "Consultoria & Gestão de Dados (Power BI)",
    titleEn: "Data Consulting & Power BI Dashboards",
    tagPt: "DADOS & BUSINESS INTELLIGENCE",
    tagEn: "DATA & BUSINESS INTELLIGENCE",
    descPt: "Organizo os dados da sua empresa e crio painéis interativos (Power BI) para você acompanhar vendas, faturamento e metas em tempo real, sem depender de planilhas manuais ou relatórios lentos.",
    descEn: "I organize your company's data and build interactive Power BI dashboards so you can monitor sales, revenue, and KPIs in real time without slow, manual spreadsheets.",
    bulletsPt: [
      "Painéis e relatórios executivos interativos no Power BI",
      "Unificação de dados de planilhas, bancos de dados e ERPs",
      "Métricas claras para tomadas de decisão rápidas e seguras",
      "Análise de desempenho operacional, financeiro e comercial",
    ],
    bulletsEn: [
      "Interactive Power BI dashboards and executive reports",
      "Data unification across spreadsheets, databases, and ERPs",
      "Clear metrics for quick, confident decision-making",
      "Operational, financial, and sales performance analytics",
    ],
    badges: ["PostgreSQL", "Power BI", "Python", "DAX", "ETL", "Pandas"],
  },
  {
    id: "automation",
    iconComponent: FiZap,
    color: "#c084fc",
    titlePt: "Automação de Processos & Sistemas",
    titleEn: "Process & System Automation",
    tagPt: "AUTOMAÇÃO DE ROTINAS",
    tagEn: "WORKFLOW AUTOMATION",
    descPt: "Elimino tarefas manuais e repetitivas da sua equipe. Conecto seus sistemas (n8n/Python) para gerar documentos, enviar notificações, atualizar cadastros e economizar centenas de horas de trabalho mensal.",
    descEn: "I eliminate manual, repetitive tasks for your team. I connect your systems (n8n/Python) to generate documents, send alerts, update records, and save hundreds of monthly working hours.",
    bulletsPt: [
      "Automação de rotinas administrativas, financeiras e operacionais",
      "Integração automática entre sistemas internos, APIs e gateways de pagamento",
      "Geração automática de relatórios, arquivos e comprovantes",
      "Redução drástica de erros manuais e ganho de produtividade",
    ],
    bulletsEn: [
      "Automation of administrative, financial, and operational tasks",
      "Seamless integration between internal systems, APIs, and payment gateways",
      "Automated document, file, and receipt generation",
      "Drastic reduction of manual errors and major productivity gains",
    ],
    badges: ["n8n", "Python", "LLMs", "APIs REST", "Chatwoot", "Node.js"],
  },
  {
    id: "bots",
    iconComponent: FiMessageCircle,
    color: "#7c3aed",
    titlePt: "Bots para WhatsApp & Atendimento com IA",
    titleEn: "WhatsApp Bots & AI Customer Service",
    tagPt: "ATENDIMENTO INTELIGENTE 24/7",
    tagEn: "24/7 INTELLIGENT CUSTOMER SERVICE",
    descPt: "Desenvolvo atendentes virtuais no WhatsApp que respondem dúvidas, qualificam clientes, agendam reuniões e vendem 24 horas por dia, 7 dias por semana, totalmente integrados ao seu CRM e banco de dados.",
    descEn: "I develop virtual assistants for WhatsApp that answer questions, qualify leads, schedule meetings, and generate sales 24/7, fully integrated into your CRM and database.",
    bulletsPt: [
      "Atendimento automático e inteligente 24/7 no WhatsApp",
      "Qualificação automática de leads e agendamento de reuniões",
      "Integração com bancos de dados, Chatwoot e CRM da empresa",
      "Uso de Inteligência Artificial para conversas naturais e eficientes",
    ],
    bulletsEn: [
      "24/7 automated and intelligent WhatsApp service",
      "Lead qualification and automatic meeting scheduling",
      "Integration with databases, Chatwoot, and company CRM",
      "AI models for natural, efficient customer interactions",
    ],
    badges: ["Node.js", "Evolution API", "whatsapp-web.js", "Discord.js", "MongoDB"],
  },
];

// Grouped skills for the full stack section
const STACK_GROUPS = [
  { labelPt: "Linguagens", labelEn: "Languages", cats: ["language"] },
  { labelPt: "Frameworks & Web", labelEn: "Frameworks & Web", cats: ["framework"] },
  { labelPt: "IA & Automação", labelEn: "AI & Automation", cats: ["ai"] },
  { labelPt: "Dados & Analytics", labelEn: "Data & Analytics", cats: ["data"] },
  { labelPt: "Ferramentas & Infra", labelEn: "Tools & Infra", cats: ["tool"] },
];

export default function ServicesPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [showFullStack, setShowFullStack] = useState(false);

  return (
    <div className="page">
      <div className="section">
        <SectionHeader
          tag={pt ? "serviços & soluções" : "services & solutions"}
          title={pt ? <>Como posso <em>ajudar sua empresa</em></> : <>How I can <em>help your business</em></>}
          sub={
            pt
              ? "Soluções práticas e inteligentes para automatizar processos, aumentar suas vendas e estruturar seus dados."
              : "Practical, intelligent solutions to automate workflows, boost your sales, and organize your data."
          }
        />

        {/* Service Cards (Large, Always Expanded) */}
        <div className="srv-grid">
          {SERVICES.map((srv) => {
            const Icon = srv.iconComponent;

            return (
              <div
                key={srv.id}
                className="srv-card srv-card--open"
                style={{ "--srv-color": srv.color }}
              >
                {/* Card Header */}
                <div className="srv-card-header">
                  <div className="srv-icon-wrapper">
                    <Icon className="srv-icon" />
                  </div>
                  <div className="srv-header-text">
                    <div className="srv-tag">{pt ? srv.tagPt : srv.tagEn}</div>
                    <h3 className="srv-title">{pt ? srv.titlePt : srv.titleEn}</h3>
                  </div>
                </div>

                {/* Card Body (Always visible) */}
                <div className="srv-card-body srv-card-body--open">
                  <p className="srv-desc">{pt ? srv.descPt : srv.descEn}</p>

                  <ul className="srv-bullets">
                    {(pt ? srv.bulletsPt : srv.bulletsEn).map((b, i) => (
                      <li key={i} className="srv-bullet">
                        <span className="srv-bullet-dot" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="srv-badges">
                    {srv.badges.map((badge) => (
                      <span key={badge} className="srv-badge">
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Contact Button */}
                  <div className="srv-action-wrap">
                    <button
                      className="btn btn-fill srv-cta"
                      onClick={() => setPage("contact")}
                    >
                      {pt ? "Entre em contato" : "Get in touch"} &rarr;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Stack Expandable */}
        <div className="srv-stack-section">
          <button
            className="srv-stack-toggle"
            onClick={() => setShowFullStack((p) => !p)}
          >
            <span>{pt ? "// ver stack de tecnologias completa" : "// view full tech stack"}</span>
            {showFullStack ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {showFullStack && (
            <div className="srv-stack-grid">
              {STACK_GROUPS.map((group) => (
                <div key={group.labelPt} className="srv-stack-group">
                  <div className="srv-stack-label">
                    {pt ? group.labelPt : group.labelEn}
                  </div>
                  <div className="srv-stack-chips">
                    {SKILLS.filter((s) => group.cats.includes(s.category)).map(
                      (skill) => (
                        <span key={skill.name} className="chip chip-p">
                          {skill.name}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Certifications */}
        <div className="extras-grid" style={{ marginTop: showFullStack ? "1.5rem" : "3rem" }}>
          <div className="extras-panel">
            <div className="extras-title">{pt ? "certificações" : "certifications"}</div>
            <div className="extras-chips">
              {CERTIFICATIONS.map((c) => (
                <span
                  key={c.nameEn}
                  className="chip"
                  title={pt ? c.detailPt : c.detailEn}
                >
                  {pt ? c.namePt : c.nameEn} · {c.issuer}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
