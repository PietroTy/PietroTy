import React from "react";

export default function SectionHeader({ tag, title, sub }) {
  return (
    <div className="sec-header">
      <div className="sec-tag">{tag}</div>
      <h2 className="sec-title">{title}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </div>
  );
}
