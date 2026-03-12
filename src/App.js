import React from 'react';
import Header from './components/common/Header';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { LanguageProvider } from './context/LanguageContext';
import './styles/global.css';

function App() {
    return (
        <LanguageProvider>
            <div>
                <Header />
                <main>
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
            </div>
        </LanguageProvider>
    );
}

export default App;
