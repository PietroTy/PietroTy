import React, { useState } from "react";
import { SKILLS, CERTIFICATIONS } from "../../data/skills";

import SectionHeader from "../common/SectionHeader";
import {
  FiCode, FiDatabase, FiLayers, FiCpu, FiTerminal, FiGlobe, FiFilter,
  FiActivity, FiUsers, FiMessageSquare, FiShield
} from "react-icons/fi";
import {
  SiPython, SiPostgresql, SiJavascript, SiTypescript, SiCplusplus, SiReact, SiNextdotjs,
  SiNodedotjs, SiFlutter, SiN8N, SiOpencv, SiDuckdb, SiDocker, SiLinux,
  SiAmazonwebservices, SiPuppeteer, SiGit, SiApachespark, SiC, SiPhp, SiR, SiGnubash,
  SiOracle, SiMysql, SiScikitlearn, SiPytorch, SiJupyter, SiAngular, SiJquery,
  SiSpringboot, SiTailwindcss, SiStreamlit, SiWebassembly, SiJira,
  SiFigma, SiRaspberrypi, SiAndroidstudio
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbPrompt, TbRobot, TbBrain, TbGitFork, TbChartBar } from "react-icons/tb";

export default function SkillsPage({ lang }) {
  const pt = lang === "pt";
  const [cat, setCat] = useState("all");

  const cats = [
    ["all", pt ? "todos" : "all"],
    ["language", pt ? "linguagens" : "languages"],
    ["data", pt ? "dados / analytics" : "data / analytics"],
    ["framework", "frameworks"],
    ["ai", "AI / Auto"],
    ["tool", pt ? "ferramentas" : "tools"],
    ["soft", pt ? "gestão / soft" : "management / soft"],
  ];

  // Cohesive shades of purple/violet for a unified purple palette
  const categoryConfig = {
    language: {
      labelPt: "Linguagens",
      labelEn: "Languages",
      icon: FiCode,
      color: "#c084fc", // Orchid Purple
    },
    data: {
      labelPt: "Dados & Analytics",
      labelEn: "Data & Analytics",
      icon: FiDatabase,
      color: "#a78bfa", // Soft Purple
    },
    framework: {
      labelPt: "Frameworks & Web",
      labelEn: "Frameworks & Web",
      icon: FiLayers,
      color: "#8b5cf6", // Deep Purple
    },
    ai: {
      labelPt: "IA & Automação",
      labelEn: "AI & Automation",
      icon: FiCpu,
      color: "#7c3aed", // Royal Purple
    },
    tool: {
      labelPt: "Ferramentas & Infra",
      labelEn: "Tools & Infrastructure",
      icon: FiTerminal,
      color: "#6d28d9", // Dark Violet
    },
    soft: {
      labelPt: "Gestão & Soft Skills",
      labelEn: "Management & Soft Skills",
      icon: FiUsers,
      color: "#5b21b6", // Deep Royal Purple
    },
  };

  // Specific icons for each individual skill
  const skillIconMap = {
    "Python": SiPython,
    "SQL / PostgreSQL": SiPostgresql,
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "C / C++": SiCplusplus,
    "Java": FaJava,
    "C#": SiC,
    "PHP": SiPhp,
    "Bash": SiGnubash,
    "R": SiR,
    "Oracle / MySQL": SiOracle,
    "SQLite": SiMysql,
    "React": SiReact,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    "APIs REST": FiGlobe,
    "Flutter / Dart": SiFlutter,
    "React Native": SiReact,
    "Angular": SiAngular,
    "jQuery": SiJquery,
    "Spring Boot": SiSpringboot,
    "Tailwind / SASS": SiTailwindcss,
    "LLMs / Prompts": TbPrompt,
    "Agentes de IA": TbRobot,
    "n8n": SiN8N,
    "Machine Learning": TbBrain,
    "OpenCV": SiOpencv,
    "Scikit-learn": SiScikitlearn,
    "PyTorch": SiPytorch,
    "LangChain / CrewAI": FiCpu,
    "Streamlit / Gradio": SiStreamlit,
    "Jupyter / Colab": SiJupyter,
    "ETL / Pipelines": TbGitFork,
    "Power BI": TbChartBar,
    "DuckDB": SiDuckdb,
    "Data Wrangling": FiFilter,
    "Spark / Databricks": SiApachespark,
    "DAX / Power Query": TbChartBar,
    "Modelagem Dimensional": FiDatabase,
    "Séries Temporais": FiActivity,
    "Git / GitHub": SiGit,
    "Docker": SiDocker,
    "Linux": SiLinux,
    "AWS / GCP": SiAmazonwebservices,
    "Playwright": SiPuppeteer,
    "CI / CD": FiActivity,
    "Figma": SiFigma,
    "Evolution API": FiGlobe,
    "Chatwoot / Stripe": FiMessageSquare,
    "Raspberry Pi / Arduino": SiRaspberrypi,
    "Android Studio": SiAndroidstudio,
    "WebAssembly / FFmpeg": SiWebassembly,
    "Scrum / Kanban / Jira": SiJira,
    "Liderança Técnica": FiUsers,
    "WCAG / Acessibilidade": FiShield,
    "Inglês Fluente (TOEFL)": FiGlobe,
    "Idiomas Adicionais": FiGlobe
  };

  return (
    <div className="page">
      <div className="section">
        <SectionHeader
          tag="skills"
          title={pt ? <>Meu <em>toolkit</em></> : <>My <em>toolkit</em></>}
        />

        <div className="sk-filters">
          {cats.map(([k, l]) => (
            <button
              key={k}
              className={`sk-filter${cat === k ? " on" : ""}`}
              onClick={() => setCat(k)}
            >
              {l}
            </button>
          ))}
        </div>

        <div className={`sk-cards-grid${cat !== "all" ? " single-card" : ""}`}>
          {Object.entries(categoryConfig)
            .filter(([key]) => cat === "all" || cat === key)
            .map(([key, config]) => {
              const Icon = config.icon;
              const categorySkills = SKILLS.filter((s) => s.category === key);
              return (
                <div key={key} className="sk-card" style={{ "--card-color": config.color }}>
                  <div className="sk-card-header">
                    <div className="sk-card-icon-wrapper">
                      <Icon className="sk-card-icon" />
                    </div>
                    <h3 className="sk-card-title">{pt ? config.labelPt : config.labelEn}</h3>
                  </div>
                  <div className="sk-card-body">
                    {categorySkills.map((s) => {
                      const SkillIcon = skillIconMap[s.name];
                      return (
                        <div key={s.name} className="sk-item">
                          <div className="sk-item-info">
                            <span className="sk-item-name">
                              {SkillIcon && <SkillIcon className="sk-item-icon" />}
                              {s.name}
                            </span>
                            <span className="sk-item-pct">{s.level}%</span>
                          </div>
                          <div className="sk-item-track">
                            <div className="sk-item-fill" style={{ "--level": `${s.level}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="extras-grid">
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
