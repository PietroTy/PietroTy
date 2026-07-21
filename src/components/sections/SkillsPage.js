import React, { useState } from "react";
import { SKILLS, EXTRAS, CERTIFICATIONS, AWARDS } from "../../data/skills";
import { BCC_CURRICULUM } from "../../data/education";
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
    <div className="page"><div className="section">
      <SectionHeader tag="skills" title={pt ? <>Meu <em>toolkit</em></> : <>My <em>toolkit</em></>} />
      <div className="sk-filters">{cats.map(([k,l]) => <button key={k} className={`sk-filter${cat===k?" on":""}`} onClick={()=>setCat(k)}>{l}</button>)}</div>
      <div className="sk-grid">{filtered.map((s)=><div key={s.name} className="sk-row"><span className="sk-name">{s.name}</span><div className="sk-track"><div className="sk-fill" style={{width:`${s.level}%`}} /></div><span className="sk-pct">{s.level}%</span></div>)}</div>
      <div className="extras"><div className="extras-title">{pt?"também uso":"also use"}</div><div className="extras-chips">{EXTRAS.map((t)=><span key={t.en} className="chip">{pt?t.pt:t.en}</span>)}</div></div>
      <div className="extras" style={{marginTop:"3rem"}}><div className="extras-title">{pt?"certificações":"certifications"}</div><div className="extras-chips">{CERTIFICATIONS.map((c)=><span key={c.nameEn} className="chip" title={pt?c.detailPt:c.detailEn}>{pt?c.namePt:c.nameEn} · {c.issuer}</span>)}</div></div>
      <div className="extras" style={{marginTop:"2rem"}}><div className="extras-title">{pt?"reconhecimentos":"awards"}</div><div className="extras-chips">{AWARDS.map((a)=><span key={a.en} className="chip">{pt?a.pt:a.en}</span>)}</div></div>
      <div className="extras bcc-education" style={{marginTop:"3rem"}}>
        <div className="extras-title">{pt ? "formação em ciência da computação" : "computer science education"}</div>
        <p className="bcc-summary">
          {pt
            ? "Matriz integral de 8 semestres do IFSP-SBV. Abra um semestre para ver o que cada componente desenvolve. A lista descreve o percurso do curso e não implica que todas as disciplinas já foram concluídas."
            : "Eight-semester IFSP-SBV curriculum. Open a semester to see the skills developed by each component. The list describes the programme pathway and does not imply that every course has already been completed."}
        </p>
        <div className="bcc-semesters">
          {[1,2,3,4,5,6,7,8].map((semester) => (
            <details className="bcc-semester" key={semester}>
              <summary>{semester}º {pt ? "semestre" : "semester"}</summary>
              <div className="bcc-components">
                {BCC_CURRICULUM.componentes.filter((c) => c.semestre === semester).map((c) => (
                  <div className="bcc-component" key={c.codigo}>
                    <div className="bcc-component-head">
                      <strong>{pt ? c.componente_pt : c.componente_en}</strong>
                      <span>{c.codigo} · {String(c.carga_horaria_horas).replace(".", ",")} h</span>
                    </div>
                    <ul>{(pt ? c.competencias_pt : c.competencias_en).map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                ))}
              </div>
            </details>
          ))}
          <details className="bcc-semester">
            <summary>{pt ? "componentes optativos" : "elective components"}</summary>
            <div className="bcc-components">
              {BCC_CURRICULUM.componentes.filter((c) => c.semestre === "Optativa").map((c) => (
                <div className="bcc-component" key={c.codigo}>
                  <div className="bcc-component-head"><strong>{pt ? c.componente_pt : c.componente_en}</strong><span>{c.codigo} · {String(c.carga_horaria_horas).replace(".", ",")} h</span></div>
                  <ul>{(pt ? c.competencias_pt : c.competencias_en).map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
    </div></div>
  );
}
