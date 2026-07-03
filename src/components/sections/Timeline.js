import React, { useState } from "react";
import { TIMELINE } from "../../data/timeline";

export default function Timeline({ lang }) {
  const [openIndex, setOpenIndex] = useState(null);
  const BL = { work: "trabalho", education: "educação", research: "pesquisa", personal: "pessoal" };
  const BE = { work: "work", education: "education", research: "research", personal: "personal" };

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="tl-container">
      <div className="tl-rail" />
      <div className="tl-grid">
        {[...TIMELINE].reverse().map((item, i) => {
          const row = i + 1;
          const col = i % 2 === 0 ? 1 : 3;
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              data-index={i}
              className={`tl-item${isOpen ? " open" : ""}`}
              style={{ "--row": row, "--col": col }}
              onClick={() => toggleOpen(i)}
            >
              <div className="tl-dot" />
              <div className="tl-year">{item.year}</div>
              <div className="tl-role">
                {lang === "pt" ? item.rolePt : item.roleEn}
                <span className={`badge badge-${item.type}`}>
                  {lang === "pt" ? BL[item.type] : BE[item.type]}
                </span>
              </div>
              <div className="tl-place">{lang === "pt" ? item.placePt : item.placeEn}</div>
              <div className="tl-expand">
                <div className="tl-desc">{lang === "pt" ? item.descPt : item.descEn}</div>
                <div className="tl-tags">
                  {item.tags.map((t) => (
                    <span key={t} className="chip chip-p">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
