import React from 'react';
import { skillsData } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="mb-36 min-h-[900]">
      <h2 className="title-secundary text-3xl font-bold text-center text-neutral-100 mb-12 p-12 ">Principais Habilidades</h2>
     <div className="px-4 md:px-15 flex flex-col gap-y-8 mt-12">
  {skillsData.map((skill, index) => (
    <div
      key={index}
      className={`w-full md:w-80 md:h-48 p-6 rounded-lg transition-all duration-300 flex flex-col justify-center ${
        index % 2 === 0 ? 'md:self-start' : 'md:self-end'
      }`}
      style={{
        background: '#0f0f0f',
        boxShadow: '10px 10px 18px #0f0f0f, -10px -10px 18px #cba532'
      }}
    >
      <h3 className="text-xl font-semibold text-neutral-200 mb-3 text-center md:text-left">
        {skill.title}
      </h3>
      <p className="text-neutral-400 text-sm leading-relaxed text-center md:text-left">
        {skill.description}
      </p>
    </div>
  ))}
</div>
    </section >
  );
};


export default Skills;
