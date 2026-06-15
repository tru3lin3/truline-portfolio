import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'sticky', top: 0, backgroundColor: 'black',
      padding: '1rem 2rem', display: 'flex', gap: '2rem',
      zIndex: 1000, borderBottom: '1px solid #333'
    }}>
      <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>HOME</a>
      <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</a>
      <a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>PROJECTS</a>
      <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>CONTACT</a>
    </nav>
  );
};

export default Navbar;