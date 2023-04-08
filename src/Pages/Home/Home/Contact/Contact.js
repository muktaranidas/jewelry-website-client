import React from "react";
import girlGif from "../../../../assets/images/girl.gif";

const Contact = () => {
  return (
    <section className="py-6 bg-gray-800 my-12">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <img src={girlGif} alt="" className="w-[500px] h-[400px] my-auto" />

        <form
          novalidate=""
          className="flex flex-col py-6 my-12 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid text-white"
        >
          <label className="block ">
            <span className="mb-1 ">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block w-full p-4 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-2 bg-gray-800"
            />
          </label>
          <label className="block">
            <span className="mb-1 ">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="block w-full p-4 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800 border-2"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="5"
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  bg-gray-800 border-2"
            ></textarea>
          </label>
          <a
            href="#_"
            class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md hover:border-2 hover:w-3/2 hover:mx-auto"
          >
            <span class=" h-full bg-gradient-to-br absolute"></span>
            <span class="relative px-6 py-3 transition-all ease-out bg-blue-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span class="relative text-white">Please Send</span>
            </span>
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
