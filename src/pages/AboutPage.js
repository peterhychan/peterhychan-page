import React from "react";

const AboutPage = () => (
  <div className="w-full p-6 bg-blue-100">
    <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700">
      ABOUT
    </div>
    <div className="p-2 text-center text-lg text-gray-700">
      I am a Full-Stack Software Engineer.
    </div>
    <div className="flex justify-center flex-wrap p-10">
      <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
        <div className="flex items-center w-48 h-20 bg-orange-500">
          <i className="fas fa-server fa-3x mx-auto text-white"></i>
        </div>
        <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
          IT Support
        </p>
        <p className="p-2 text-sm text-gray-700">
          I have good fundamentals of IT Support by earning an IT Support
          Certificate by Google.
        </p>
      </div>
      <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
        <div className="flex items-center w-48 h-20 bg-green-500">
          <i className="fas fa-file-code fa-3x mx-auto text-white"></i>
        </div>
        <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
          Frontend Dev
        </p>
        <p className="p-2 text-sm text-gray-700">
          I have experience in HTML, CSS, JavaScript, and various front-end
          frameworks: React.js, Angular.js, Vue.js, Svelte.js .
        </p>
      </div>
      <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
        <div className="flex items-center w-48 h-20 bg-yellow-500">
          <i className="fas fa-database fa-3x mx-auto text-white"></i>
        </div>
        <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
          Backend Dev
        </p>
        <p className="p-2 text-sm text-gray-700">
          I have experience in Node.js, Python as well as the various
          frameworks: Express.js .
        </p>
      </div>
      <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
        <div className="flex items-center w-48 h-20 bg-teal-500">
          <i className="fas fa-laptop-code fa-3x mx-auto text-white"></i>
        </div>
        <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
          Full-Stack Dev
        </p>
        <p className="p-2 text-sm text-gray-700">
          I have experience in MERN stack and MEAN stack.
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
