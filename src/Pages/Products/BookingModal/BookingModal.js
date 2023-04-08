import React from "react";

const BookingModal = ({ productItem, setProductItem }) => {
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Please Book Now</h3>
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input w-full input-bordered"
            />
            <input
              name="text"
              type="text"
              placeholder="Product name"
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="input w-full input-bordered btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
