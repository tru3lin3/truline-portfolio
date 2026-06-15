import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '4rem 2rem' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '3rem', color: 'white' }}>SELECTED WORK</h2>
      
      {/* The grid layout here handles responsiveness: it stacks on small screens */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        
        <ProjectCard 
          image="/JiLock.jpg"
          title="JILOCK"
          tech="Flutter / Firebase"
          description="A task verification and productivity tool. Currently in its final development stages."
          isLive={false}
        />

        <ProjectCard 
          image="/Alphawrights.png"
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