import React from 'react';

const ProjectCard = ({ title, description, tech, image, link, isLive }) => {
  return (
    <div style={{
      border: '1px solid #333',
      padding: '2rem',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      height: '100%',
    }}>
      <div style={{ 
        height: '300px', 
        border: '2px solid #fff', 
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-red)', margin: 0 }}>{title}</h3>
      <p style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase' }}>{tech}</p>
      <p style={{ lineHeight: '1.5', fontSize: '1rem', color: '#eee' }}>{description}</p>
      
      {isLive ? (
        <a href={link} target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>View Project →</a>
      ) : (
        <p style={{ color: '#ff5757', fontSize: '0.8rem', fontWeight: 'bold' }}>
          * APP UNDER FINAL DEVELOPMENT. CHECK BACK SOON.
        </p>
      )}
    </div>
  );
};

export default ProjectCard;