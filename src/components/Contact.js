import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Contact Me",
      description: "Feel free to reach out through any of the following channels:",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      instagram: "Instagram",
    },
    pt: {
      title: "Entre em Contato",
      description: "Fique à vontade para me contatar por meio de qualquer um dos seguintes canais:",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      instagram: "Instagram",
    },
  };

  const links = [
    {
      href: "mailto:pietro.turcimm@gmail.com",
      label: content[language].email,
      aria: "Email Pietro",
      icon: <FaEnvelope style={{ verticalAlign: "middle", marginRight: 8 }} />,
    },
    {
      href: "https://linkedin.com/in/pietro-turci-2a419229a",
      label: content[language].linkedin,
      aria: "Pietro's LinkedIn",
      icon: <FaLinkedin style={{ verticalAlign: "middle", marginRight: 8 }} />,
    },
    {
      href: "https://github.com/PietroTy",
      label: content[language].github,
      aria: "Pietro's GitHub",
      icon: <FaGithub style={{ verticalAlign: "middle", marginRight: 8 }} />,
    },
    {
      href: "https://x.com/pit_cromado",
      label: content[language].twitter,
      aria: "Pietro's Twitter",
      icon: <FaTwitter style={{ verticalAlign: "middle", marginRight: 8 }} />,
    },
    {
      href: "https://www.instagram.com/pit_tmm/",
      label: content[language].instagram,
      aria: "Pietro's Instagram",
      icon: <FaInstagram style={{ verticalAlign: "middle", marginRight: 8 }} />,
    },
  ];

  return (
    <section id="contact">
      <div className="contact-content">
        <h2>{content[language].title}</h2>
        <p>{content[language].description}</p>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.aria}
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
