import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState();
  function displayData() {
    if (loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map((book) => {
        let random;
        function randomColor() {
          random = Math.floor(Math.random() * 359);
        }
        randomColor();
        console.log(random);
        return (
          <div
            style={{
              backgroundColor: `hsl(${random}, 100%, 65%)`,
            }}
            className="book"
            key={book.id}
            onClick={() => {
              setSelected(book.id);
            }}
          >
            {book.name}
          </div>
        );
      });
    }
  }

  return (
    <div>
      <div className="booksContainer">
        <h1 className="title">Books on the shelf</h1>
        {displayData()}
      </div>
      <BookDetails bookId={selected} />
    </div>
  );
}

export default BookList;
