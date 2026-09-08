import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

  // system -01
  //   useEffect(() => {
  //     fetch("../../../public/booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);

  return (
    <div>
      <h2>I am Books</h2>
      <Suspense fallback={<span>Loader..</span>}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
