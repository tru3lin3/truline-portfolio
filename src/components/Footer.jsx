import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '4rem 2rem',
      marginTop: '4rem',
      borderTop: '1px solid #333',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: '2rem'
    }}>
      {/* Contact Section */}
      <div>
        <p style={{ color: '#f4efef', marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>
          Let's talk
        </p>
        <a 
          href="mailto:mkhaghulitruline@gmail.com" 
          style={{ 
            color: 'var(--accent-red)', 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
            textDecoration: 'none',
            fontWeight: '800'
          }}
        >
          mkhaghulitruline@gmail.com
        </a>
       <p style={{ color: '#f4efef', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>
          Call: +254 706 193 309
        </p>
      </div>

      {/* Copyright/Info */}
      <div style={{ textAlign: 'right' }}>
        <p style={{ margin: 0, fontSize: '1.5rem', color: '#f4efef' }}>
          &copy; {new Date().getFullYear()} TRULINE MWAVISHI
        </p>
      </div>
    </footer>
  );
};

export default Footer;