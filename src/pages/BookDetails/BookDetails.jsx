import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addStoredDB } from "../../utility/addToDB";

// sweetalert2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  // useParams() holo react router er hook
  const { id } = useParams();
  // most notably in JavaScript—to extract or convert a string into an integer (whole number)
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  // Output jode na ase taile undefined asbe but >>> error dekhabe na.
  const { bookName, image } = singleBook || {};
  //   console.log(data);s
  //   console.log(id);

  const handleMarkAsRead = (id) => {
    addStoredDB(id);

    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  return (
    <div className="w-2/3 mx-auto items-center border-2 flex flex-col">
      <img className="w-48 justify-center items-center" src={image} alt="" />
      <h5>{bookName}</h5>

      <div>
        <button
          onClick={() => handleMarkAsRead(id)}
          className="btn btn-accent m-2"
        >
          Mark as Read
        </button>
        <button className="btn btn-info m-2">WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
