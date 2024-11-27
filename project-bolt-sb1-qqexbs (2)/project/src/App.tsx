import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import GameSection from './components/GameSection';
import Background from './components/Background';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return <Home />;
      case 'nosotros':
        return <About />;
      case 'RJ en consolas':
        return <GameSection title="Recomendaciones para Consolas" type="console" />;
      case 'RJ en celular':
        return <GameSection title="Recomendaciones para Celular" type="mobile" />;
      case 'RJ en PC':
        return <GameSection title="Recomendaciones para PC" type="pc" />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Background />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow mt-16 container mx-auto px-4">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;