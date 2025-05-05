// components/ProjectGrid.tsx
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../types/Project';

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
    author: 'Tomke Brammerloh',
    supervisor: 'Prof. Hartmann',
    date: '13.02.2025'
  },

  {
    id: 2,
    title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
    author: 'Tomke Brammerloh',
    supervisor: 'Prof. Hartmann',
    date: '13.02.2025'
  },

  {
    id: 3,
    title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
    author: 'Tomke Brammerloh',
    supervisor: 'Prof. Hartmann',
    date: '13.02.2025'
  },

  {
    id: 4,
    title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
    author: 'Tomke Brammerloh',
    supervisor: 'Prof. Hartmann',
    date: '13.02.2025'
  },

  {
    id: 5,
    title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
    author: 'Tomke Brammerloh',
    supervisor: 'Prof. Hartmann',
    date: '13.02.2025'
  },

  {
    id: 6,
    title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
    author: 'Tomke Brammerloh',
    supervisor: 'Prof. Hartmann',
    date: '13.02.2025'
  },
  
];

const ProjectGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);

  return (
    <div className="px-28 py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="text-white px-6 py-2 rounded-lg hover:bg-blue-800" style={{backgroundColor: 'rgb(37,58,103)'}}>
          Mehr
        </button>
      </div>
    </div>
  );
};

export default ProjectGrid;
