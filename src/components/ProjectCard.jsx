import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ title, episodes, lastEdited }) {
  return (
    <Link to={`/project/${title}`} className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Icon Container */}
      <div className="bg-purple-600 rounded-lg w-16 h-16 flex items-center justify-center">
        <span className="text-white text-2xl font-bold">SP</span>
      </div>
      
      {/* Project Info */}
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{episodes} Episodes</p>
        <p className="text-xs text-gray-400">Last edited {lastEdited}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
