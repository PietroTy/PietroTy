import React, { useState, useEffect } from "react";
import { TIMELINE } from "../../data/timeline";

export default function Timeline({ lang }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const BL = { work: "trabalho", education: "educação", research: "pesquisa", personal: "pessoal" };
  const BE = { work: "work", education: "education", research: "research", personal: "personal" };

  const toggleOpen = (index) => {
    if (window.innerWidth <= 768) {
      setClickedIndex(clickedIndex === index ? null : index);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const handleScroll = () => {
      const items = document.querySelectorAll(".tl-item");
      let closestIndex = null;
      let minDistance = Infinity;
      const centerY = window.innerHeight / 2;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenterY - centerY);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = parseInt(item.getAttribute("data-index"), 10);
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="tl-container">
      <div className="tl-rail" />
      <div className="tl-grid">
        {[...TIMELINE].reverse().map((item, i) => {
          const row = i + 1;
          const col = i % 2 === 0 ? 1 : 3;
          const isOpen = activeIndex === i || clickedIndex === i;
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
