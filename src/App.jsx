import React, { useState } from 'react';
import './assets/css/App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import SocialIcons from './components/SocialIcons.jsx';
import VerticalEmail from './components/VerticalEmail.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header onSectionChange={handleSectionChange} activeSection={activeSection} />
      <SocialIcons />
      <VerticalEmail />
      <main>
        {activeSection === 'home' && <Hero />}
        {activeSection === 'about' && <About />}
      </main>
    </div>
  );
}

export default App;
