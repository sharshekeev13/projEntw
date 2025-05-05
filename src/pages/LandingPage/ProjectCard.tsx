// components/ProjectCard.tsx
import React from 'react';
import graduationCap from '../../assets/vector-cap.png';
import { Project } from '../../types/Project';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="relative bg-white rounded-lg shadow-md p-4 overflow-hidden">
            <div>
                <h2 className="font-bold text-sm mb-2 py-2" style={{ color: 'rgb(37,58,103)' }}>{project.title}</h2>
                <p className="text-sm"><strong>Author:</strong> {project.author}</p>
                <p className="text-sm"><strong>Betreuer:</strong> {project.supervisor}</p>
                <p className="text-sm pt-2"><strong>Datum:</strong> {project.date}</p>
            </div>
            <img
                src={graduationCap}
                alt="Graduation Cap"
                className="absolute bottom-0 right-0 w-24 opacity-20 transform -rotate-12 translate-x-6"
            />
        </div>
    );
};


export default ProjectCard;
