import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider } from './LanguageContext';
import './styles.css';

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
