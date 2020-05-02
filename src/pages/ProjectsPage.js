import React, { useState, useEffect } from "react";
import SingleProject from "../components/SingleProject";

const Categories = [
  "All",
  "WebDev",
  "Frontend",
  "Backend",
  "Full-Stack",
  "Others",
];

let Info = [];

const ProjectsPage = () => {
  const [projectsShown, setProjectsShownAndCategory] = useState({
    projectsArray: [...Info],
    category: "All",
  });

  useEffect(() => {
    fetch("https://personal-project-list.now.sh/")
      .then((res) => res.json())
      .then((json) => {
        Info = [...json];
        setProjectsShownAndCategory({
          projectsArray: [...Info],
          category: "All",
        });
      });
  }, []);

  const changeCategory = (category) => {
    const ProjectsShown = Info.filter(
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
        "Talk is cheap. Show me the code." - Linus Torvalds
      </div>{" "}
      <div className="p-2 text-center text-lg text-gray-700">
        "No problem." - Me
      </div>{" "}
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
              projectImage={e.projectImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
