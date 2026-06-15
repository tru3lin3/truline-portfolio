import React from 'react';
import ProjectCard from './Project';
// Updated imports to match your new filenames in src/assets/
import jilockImg from '../assets/JiLock.jpg'; 
import alphaImg from '../assets/Alphawrights.png';

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '4rem 2rem' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }}>
        Selected Work
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        
        <ProjectCard 
          image={jilockImg}
          title="JILOCK"
          tech="Flutter / Firebase"
          description="A productivity and accountability application designed to help users stay committed to their objectives. Features include streak tracking, motivational quote integration, and real-time verification systems."
          link="#"
        />

        <ProjectCard 
          image={alphaImg}
          title="ALPHAWRIGHTS"
          tech="React / TypeScript / Tailwind"
          description="A bespoke digital showcase for custom metal fabrication. I engineered this platform to categorize and display high-end metalworks, ranging from architectural gates and staircases to custom office furniture."
          link="https://alphawrightscustomfabricators.pw/"
        />
        
      </div>
    </section>
  );
};

export default Projects;