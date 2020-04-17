import React from "react";

const Project = ({ name, description, stacks, category, projectImage }) => (
  <div className="w-full md:w-1/4 rounded overflow-hidden shadow-lg">
    <img
      className="w-full h-48"
      src={projectImage ? projectImage : "https://source.unsplash.com/random"}
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="mb-4">
        <span className="static rounded bg-blue-500 uppercase px-1 py-1 text-xs font-bold text-white">
          {category}
        </span>
        <span className="font-bold text-xl mb-2 px-16">{name}</span>
      </div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 py-4">
      {stacks
        ? stacks.map((stack) => (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              key={stack}
            >
              {stack}
            </span>
          ))
        : null}
    </div>
  </div>
);
export default Project;
