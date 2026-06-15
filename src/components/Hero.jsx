import React from 'react';
import { useLoopingTypewriter } from '../hooks/useLoopingTypewriter';

const Hero = () => {
  const titles = ["SOFTWARE ENGINEER", "MOBILE DEVELOPER", "WEB DESIGNER"];
  const currentTitle = useLoopingTypewriter(titles);

  return (
    <section id="home" style={{ padding: '8rem 2rem', minHeight: '50vh' }}>
      <p style={{ color: 'var(--accent-red)', marginBottom: '1rem' }}>TRULINE MWAVISHI</p>
      <h1 style={{ 
          fontSize: 'clamp(4rem, 12vw, 12rem)', 
          lineHeight: '0.9', 
          color: 'white',
          margin: 0
        }}>
        {currentTitle}
        <span style={{ 
            animation: 'blink 1s step-end infinite',
            borderLeft: '5px solid var(--accent-red)',
            marginLeft: '10px' 
        }}>&nbsp;</span>
      </h1>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </section>
  );
};

export default Hero;