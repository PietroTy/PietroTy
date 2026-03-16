import React from "react";
import { FaPython, FaCuttlefish, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaJava, FaTerminal, FaPhp } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export const skillsContent = {
  en: {
    title: "Skills",
    description:
      "Here are some of the technologies and languages I’ve worked with, along with my progress level.",
  },
  pt: {
    title: "Habilidades",
    description:
      "Aqui estão algumas das tecnologias e linguagens com as quais trabalhei, junto com meus níveis de progresso.",
  },
};

export const skillsData = [
  { name: "Python", percentage: 90, icon: <FaPython style={{ color: "#6A4C9C", marginRight: 8 }} /> },
  { name: "C", percentage: 85, icon: <FaCuttlefish style={{ color: "#6A4C9C", marginRight: 8 }} /> },
  { name: "JavaScript", percentage: 80, icon: <FaJs style={{ color: "#6A4C9C", marginRight: 8 }} /> },
  { name: "HTML", percentage: 75, icon: <FaHtml5 style={{ color: "#6A4C9C", marginRight: 8 }} /> },
  { name: "CSS", percentage: 70, icon: <FaCss3Alt style={{ color: "#6A4C9C", marginRight: 8 }} /> },
  { name: "TypeScript", percentage: 65, icon: <SiTypescript style={{ color: "#6A4C9C", marginRight: 8 }} /> },
  { name: "SQL", percentage: 65, icon: <FaDatabase style={{ color: "#6A4C9C", marginRight: 8 }} /> },
  { name: "Java", percentage: 60, icon: <FaJava style={{ color: "#6A4C9C", marginRight: 8 }} /> },
  { name: "Shell Script", percentage: 50, icon: <FaTerminal style={{ color: "#6A4C9C", marginRight: 8 }} /> },
  { name: "PHP", percentage: 30, icon: <FaPhp style={{ color: "#6A4C9C", marginRight: 8 }} /> },
];
