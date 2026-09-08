import React from "react";
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="Tailwind CSS hero component"
          src={bookImg}
          className="max-w-sm rounded-lg shadow-2xl ml-30"
        />
        <div>
          <h1 className="text-5xl font-bold">Book to freshen up <br /> your bookshelf</h1>
          
          <button className="btn btn-primary mt-10">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
