import React from "react";
import image from "../../../../assets/images/about/about.gif";

const About = () => {
  return (
    <div className="hero  mt-8 ">
      <div className="hero-content grid sm:grid-cols-1 lg:grid-cols-2 ">
        <img src={image} className="w-full " alt="" />
        <div className="mx-8 ml-16">
          <h1 className="text-4xl font-bold text-pink-500">LOOKI'S JWELARY!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minus
            assumenda aliquam quia blanditiis ipsa possimus eligendi magni,
            recusandae deserunt. Officia perferendis assumenda in, illum nostrum
            impedit facere voluptatibus expedita.
          </p>
          <button className="btn btn-primary ">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default About;
