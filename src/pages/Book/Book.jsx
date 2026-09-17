import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    bookId,
    bookName,
    image,
    rating,
    category,
    yearOfPublishing,
    tags,
    publisher,
  } = singleBook;
  
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-90 h-full shadow-xl p-4 border">
        <figure className="bg-gray-100 w-70 rounded-xl p-5 mx-auto">
          <img className="w-4/6" src={image} alt="Shoes" />
        </figure>

        <div className="card-body">
          <div className="flex justify-center gap-10">
            {tags.map((tag) => (
              <button className="btn">{tag}</button>
            ))}
          </div>

          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>By: {publisher}</p>
          <div className="border-t-1 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
