import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FunnyDoll from './components/FunnyDoll';

function App() {
  return (
    <div style={{ 
      maxWidth: '100vw', 
      overflowX: 'hidden'
    }}>
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <Projects />
      <div id="contact"><Footer /></div>
      <FunnyDoll />
    </div>
  );
}