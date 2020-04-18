import React from "react";
import SingleProject from "../components/SingleProject";

import data from "../utils/data";

const categories = [
  "All",
  "WebDev",
  "Frontend",
  "Backend",
  "Full-Stack",
  "Others",
];

const ProjectsPage = () => {
  return (
    <div className="w-full p-6 bg-blue-200">
      <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700">
        PROJECTS
      </div>
      <div className="p-2 text-center text-lg text-gray-700">
        I work on various side-projects.
      </div>
      <nav className="flex justify-center flex-wrap mt-4 mb-8 text-white">
        {categories.map((category) => (
          <div
            className="h-8 mr-2 px-3 py-1 bg-blue-400 text-center"
            key={category}
          >
            {category}
          </div>
        ))}
      </nav>
      <div className="flex justify-around flex-wrap py-4">
        {data.map((e, index) => {
          return (
            <SingleProject
              key={index}
              name={e.name}
              description={e.description}
              stacks={e.stacks}
              category={e.category[1]}
              deployedURL={e.deployedURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
