import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

function Header() {
    const { language, toggleLanguage } = useContext(LanguageContext);

    const navItems = {
        en: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        pt: {
            about: "Sobre",
            skills: "Habilidades",
            projects: "Projetos",
            contact: "Contato"
        }
    };

    return (
        <header>
            <div className="header-left">
                <span className="logo" tabIndex="0">
                    <span className="pietro">Pietro</span>
                    <span className="ty">Ty</span>
                </span>
            </div>
            <nav aria-label="Main navigation">
                <ul>
                    <li><a href="#about">{navItems[language].about}</a></li>
                    <li><a href="#skills">{navItems[language].skills}</a></li>
                    <li><a href="#projects">{navItems[language].projects}</a></li>
                    <li><a href="#contact">{navItems[language].contact}</a></li>
                </ul>
            </nav>
            <button onClick={toggleLanguage} className="language-toggle">
                {language === 'en' ? 'Pt-Br' : 'En'}
            </button>
        </header>
    );
}

export default Header;
