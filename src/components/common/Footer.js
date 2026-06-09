import React from "react";
import { LINKS } from "../../data/links";

export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <span>Pietro Turci Moraes Martins</span>
      <span className="footer-dot">.</span>
      <a href={LINKS.github} target="_blank" rel="noreferrer">
        @PietroTy
      </a>
      <span style={{ marginLeft: "0.25rem", opacity: 0.8 }}>{new Date().getFullYear()}</span>
    </footer>
  );
}
