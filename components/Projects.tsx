import React from 'react';
import { projectsData } from '../constants';
import Carousel from './Carousel';

const Projects: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center text-neutral-100 mb-12 p-12">Projetos em Destaque</h2>
      <div className="space-y-12">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl"
            style={{
              background: '#1000ff0',
              boxShadow: '9px 9px 16px #cba532, -9px -9px 16px #002641'
            }}
          >
            <Carousel items={project.items} aspectRatio={project.aspectRatio} />
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-neutral-400 mb-2">{project.title}</h3>
              <p className="text-neutral-200">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
