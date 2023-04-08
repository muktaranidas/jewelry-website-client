import React from "react";
import "./Product.css";

const Product = ({ product, setProductItem }) => {
  const { title, img, details, price } = product;
  // console.log(title);
  return (
    <div className="card card-compact w-96 text-black bg-orange-300 shadow-xl">
      <figure>
        <img src={img} alt="" className="categoryImage" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-4xl text-pink-700">{title}</h2>
        {/* {/* <p className="text-xl font-bold">Location: {location}</p> */}
        <p className="text-xl font-bold">
          Price: <small>{price}</small>
        </p>

        <p className="text-xl font-bold">
          details: <small>{details}</small>
        </p>

        <div className="card-actions justify-end">
          <label
            onClick={() => setProductItem(product)}
            htmlFor="booking-modal"
            className="btn btn-secondary"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Product;
