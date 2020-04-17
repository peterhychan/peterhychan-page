import React from "react";
import Project from "../components/Project";

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
            className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer"
            key={category}
          >
            {category}
          </div>
        ))}
      </nav>
      <div className="flex justify-around flex-wrap">
        <Project
          name="Web"
          description="HTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML Page"
          stacks={["HTML", "CSS"]}
          category="Web Dev"
          projectImage="https://source.unsplash.com/user/erondu"
        />
        <Project
          name="Web"
          description="HTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML Page"
          stacks={["HTML", "CSS"]}
          category="Frontend"
        />
        <Project
          name="Web"
          description="HTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML PageHTML Page"
          stacks={["HTML", "CSS"]}
          category="Others"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
