import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <a href="#home" onClick={toggleMenu} style={linkStyle}>HOME</a>
      <a href="#about" onClick={toggleMenu} style={linkStyle}>ABOUT</a>
      <a href="#projects" onClick={toggleMenu} style={linkStyle}>PROJECTS</a>
      <a href="#contact" onClick={toggleMenu} style={linkStyle}>CONTACT</a>
    </>
  );

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>TRULINE</div>

      <div style={desktopMenu}>{navLinks}</div>

      <div style={hamburgerStyle} onClick={toggleMenu}>
        <div style={barStyle}></div>
        <div style={barStyle}></div>
        <div style={barStyle}></div>
      </div>

      {isOpen && (
        <div style={mobileMenuStyle}>
          <button onClick={toggleMenu} style={closeButtonStyle}>✕</button>
          <div style={mobileLinksContainer}>{navLinks}</div>
        </div>
      )}
    </nav>
  );
};

const navStyle = {
  position: 'sticky', top: 0, backgroundColor: 'black',
  padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between',
  alignItems: 'center', zIndex: 1000, borderBottom: '1px solid #333'
};

const linkStyle = { color: 'white', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '1px' };

const desktopMenu = { display: 'flex', gap: '2rem' };

const hamburgerStyle = { 
  display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer' 
};

const barStyle = { width: '25px', height: '3px', backgroundColor: 'white' };

const mobileMenuStyle = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
  backgroundColor: 'black', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', alignItems: 'center', zIndex: 2000
};

const mobileLinksContainer = { display: 'flex', flexDirection: 'column', gap: '3rem', fontSize: '2rem' };

const closeButtonStyle = { position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer' };

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (max-width: 768px) {
    div[style*="display: flex"][style*="gap: 2rem"] { display: none !important; }
    div[style*="display: none"][style*="flex-direction: column"] { display: flex !important; }
  }
`;
document.head.appendChild(styleSheet);

export default Navbar;