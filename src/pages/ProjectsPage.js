import React, { useState } from "react";
import SingleProject from "../components/SingleProject";

import Data from "../utils/data";

const Categories = [
  "All",
  "WebDev",
  "Frontend",
  "Backend",
  "Full-Stack",
  "Others",
];

const ProjectsPage = () => {
  const [projectsShown, setProjectsShownAndCategory] = useState({
    projectsArray: [...Data],
    category: "All",
  });

  const changeCategory = (category) => {
    const ProjectsShown = Data.filter(
      (e) => e.category[1] === category || e.category[0] === category
    );
    setProjectsShownAndCategory({
      ...ProjectsShown,
      category: category,
      projectsArray: ProjectsShown,
    });
  };

  return (
    <div className="w-full p-6 bg-blue-200">
      <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700">
        PROJECTS
      </div>
      <div className="p-2 text-center text-lg text-gray-700">
        I work on various side-projects.
      </div>
      <nav className="flex justify-center flex-wrap mt-4 mb-8 text-white">
        {Categories.map((category) => (
          <div
            className={`h-8 mr-2 px-3 py-1 ${
              projectsShown.category === category
                ? "bg-blue-700 font-bold"
                : "bg-blue-400"
            } text-center cursor-pointer hover:bg-blue-300 hover:font-bold`}
            key={category}
            onClick={() => changeCategory(category)}
          >
            {category}
          </div>
        ))}
      </nav>
      <div className="flex justify-around flex-wrap py-4">
        {projectsShown.projectsArray.map((e, index) => {
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
