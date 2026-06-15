import React from 'react';

const ProjectCard = ({ title, description, tech, image, link }) => {
  return (
    <div style={{
      border: '1px solid #333',
      padding: '2rem',
      backgroundColor: '#0a0a0a', 
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      transition: 'all 0.3s ease'
    }}>
      {/* 
        CHANGED: 
        1. objectFit: 'contain' ensures the WHOLE image is visible.
        2. backgroundColor: '#000' fills the empty space if the image ratio doesn't match.
      */}
      <div style={{ 
        height: '400px', // Increased height slightly
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000', 
        border: '1px solid #222'
      }}>
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain' // This shows the whole image
          }} 
        />
      </div>

      <h3 style={{ fontSize: '2rem', color: 'var(--accent-red)', margin: 0, textTransform: 'uppercase' }}>{title}</h3>
      <p style={{ fontSize: '1rem', color: '#888', letterSpacing: '2px', textTransform: 'uppercase' }}>{tech}</p>
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: '#eee' }}>{description}</p>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          color: 'white', 
          textDecoration: 'none', 
          borderBottom: '2px solid var(--accent-red)',
          paddingBottom: '0.2rem',
          width: 'fit-content'
        }}
      >
        VIEW LIVE PROJECT →
      </a>
    </div>
  );
};

export default ProjectCard;