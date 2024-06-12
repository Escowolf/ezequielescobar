import React from 'react';
import './about.css';

function About() {
  return (
    <div className='default-section two-column-section'>
      <p className='left-column'><h1>About</h1>
      My focus of interest has been data persistence, integration via API, requirements gathering, data analysis, integrations, and metadata analysis. I also have a slight flirtation with UX. I am proactive in identifying and resolving problems, always looking for new ways to improve routines and operations.</p>
      
      <div className='right-column'>
      <img className='perfil' src="./images/perfil.png" alt="null" />
      <span className='losango1'></span>
      <span className='losango2'></span>
      </div>
      

    </div>
  );
}

export default About;
