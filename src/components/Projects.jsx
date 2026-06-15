import React from 'react';
import ProjectCard from './Project';
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
          description="A task verification and productivity tool. Currently in its final development stages."
          isLive={false}
        />

        <ProjectCard 
          image={alphaImg}
          title="ALPHAWRIGHTS"
          tech="React / TypeScript"
          description="Custom fabrication showcase platform."
          link="https://alphawrightscustomfabricators.pw/"
          isLive={true}
        />
        
      </div>
    </section>
  );
};

export default Projects;