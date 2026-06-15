import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: '8rem 2rem', borderBottom: '1px solid #333' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', color: 'var(--accent-red)', marginBottom: '2rem' }}>
          ABOUT ME
        </h2>
        <p style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 3rem)', 
          lineHeight: '1.2', 
          maxWidth: '900px',
          fontWeight: '300' 
        }}>
          I am a Software Engineer and Full Stack Developer. 
          I specialize in building high-performance mobile applications and 
          bold web experiences that bridge complex logic with intuitive design.
        </p>
      </motion.div>
    </section>
  );
};

export default About;