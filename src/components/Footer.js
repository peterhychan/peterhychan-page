import React from "react";

const Footer = () => (
  <div className="w-full bg-blue-900">
    <div className="flex flex-wrap text-center text-white">
      <div className="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
        <div className="my-6 ml-3 text-xl font-semibold">ABOUT ME</div>
        <p className="p-3 text-gray-400">
          Peter Chan is a software engineer who lives in San Francisco,
          California. His specialty is full-stack application development. He
          speaks fluent English, Mandarin, and Cantonese. Thanks for visiting!
        </p>
      </div>

      <div className="w-full md:w-1/3 p-5 border-r border-blue-800">
        <div className="my-6 text-xl font-semibold">CONTACT ME</div>
        <p className="mt-8 text-gray-400">
          Feel free to contact me. Below are my social pages or you can message
          me via the message box on the right.
        </p>
        <div className="relative w-20 h-10 mx-auto my-4">
          <div className="flex justify-center items-center absolute left-0 top-0 w-10 h-10 bg-blue-500 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/peterhoychan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-linkedin-in fa-lg text-white"
                href="https://www.linkedin.com/in/peterhoychan/"
                target="_blank"
                rel="noopener noreferrer"
              ></i>
            </a>
          </div>
          <div className="flex justify-center items-center absolute top-0 right-0 w-10 h-10 bg-white">
            <a
              href="https://www.github.com/peterhychan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-lg text-black"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p5">
        <div className="mt-6 text-xl font-semibold">MESSAGE ME</div>
        <form
          className="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded"
          action="https://submit-form.com/q6kS3fLZKNDEbWD3DFBlZ"
          target="_self"
        >
          <div className="flex items-center mb-4">
            <input
              className="w-24 h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
              type="text"
              name="subject"
              placeholder="Name"
            />
            <input
              className="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <textarea
              className="w-full h-20 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900 text-white"
              name="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <button
              className="w-full py-2 px-4 rounded bg-blue-400 hover:bg-green-400 text-white font-bold"
              type="submit"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Footer;
