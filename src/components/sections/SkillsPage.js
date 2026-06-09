import React, { useState } from "react";
import { SKILLS, EXTRAS } from "../../data/skills";
import SectionHeader from "../common/SectionHeader";

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
  ];

  const filtered = cat === "all" ? SKILLS : SKILLS.filter((s) => s.category === cat);

  return (
    <div className="page">
      <div className="section">
        <SectionHeader
          tag="skills"
          title={
            pt ? (
              <>Meu <em>toolkit</em></>
            ) : (
              <>My <em>toolkit</em></>
            )
          }
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
        <div className="sk-grid">
          {filtered.map((s) => (
            <div key={s.name} className="sk-row">
              <span className="sk-name">{s.name}</span>
              <div className="sk-track">
                <div className="sk-fill" style={{ width: `${s.level}%` }} />
              </div>
              <span className="sk-pct">{s.level}%</span>
            </div>
          ))}
        </div>
        <div className="extras">
          <div className="extras-title">{pt ? "também uso" : "also use"}</div>
          <div className="extras-chips">
            {EXTRAS.map((t) => (
              <span key={t.en} className="chip">{pt ? t.pt : t.en}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
