import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative  w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3 ">
        <h1 className="lg:text-6xl text-3xl  font-bold text-white">
          Jewellery <br /> Is Your Dream
          <br />
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-5/12	 mt-12">
        <p className="text-white text-xl hidden lg:flex">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          dignissimos nesciunt odio incidunt quod minus unde voluptate iure,
          distinctio asperiores sit temporibus velit qui culpa ut illum nam nisi
          nostrum.
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 lg:left-24 lg:top-3/4  left-16 top-44   w-2/5">
        <button className="btn bg-orange-500  font-bold mr-5">
          Explore More
        </button>
        <button className="btn btn-outline border-white text-white">
          Latest Book
        </button>
      </div>

      <div className="absolute flex justify-center  lg:justify-end transform -translate-y-1/2 left-5 right-5 -bottom-2 lg:bottom-0 ">
        <a href={`#slide${prev}`} className="btn btn-circle  mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle bg-orange-500">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
