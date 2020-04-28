import React from "react";

const Header = () => (
  <div className="flex justify-center items-center py-4 bg-blue-900">
    <div className="flex-shrink-0 ml-10 cursor-pointer">
      <i className="fas fa-drafting-compass fa-2x text-white"></i>
      <span className="ml-1 text-3xl text-blue-200 font-semibold">
        {" "}
        <a
          className="text-white"
          href="https://my-dev-note.hoychanan.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peter Chan
        </a>
      </span>
    </div>
  </div>
);

export default Header;
