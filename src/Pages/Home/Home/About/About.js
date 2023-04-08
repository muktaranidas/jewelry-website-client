import React from "react";
import image from "../../../../assets/images/about/about.gif";

const About = () => {
  return (
    <div className="hero  mt-8 ">
      <div className="hero-content grid sm:grid-cols-1 lg:grid-cols-2 ">
        <img src={image} className="w-full " alt="" />
        <div className=" mx-8 ml-16">
          <h1 className="text-4xl font-bold text-pink-500">LOOKI'S JWELARY!</h1>
          <p className="py-6  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minus
            assumenda aliquam quia blanditiis ipsa possimus eligendi magni,
            recusandae deserunt. Officia perferendis assumenda in, illum nostrum
            impedit facere voluptatibus expedita.
          </p>
          <div className="mt-4">
            <a href="#_" class=" relative px-6 py-3 font-bold text-black group">
              <span class=" absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span class="absolute  inset-0 w-full h-full border-4 border-pink-600"></span>
              <span class="relative  ">See Details</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
