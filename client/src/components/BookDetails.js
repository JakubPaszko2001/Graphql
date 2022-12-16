import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    skip: !bookId,
    variables: { id: bookId },
  });

  let content;

  if (loading) content = <p className="booksContainer">Loading...</p>;
  else if (error) content = <p className="booksContainer">Error :</p>;
  else if (!bookId)
    content = (
      <div className="booksContainer">
        <p className="title">No book selected...</p>
      </div>
    );
  else {
    const {
      book: { name, genre, author },
    } = data;

    const books = author.books.map(({ id, name }) => {
      return <p key={id}>{name}</p>;
    });
    content = (
      <div className="booksContainer">
        <h2>{name}</h2>
        <p>{genre}</p>
        <p>{author.name}</p>
        <p>All boooks by this author:</p>
        {books}
      </div>
    );
  }

  return <div id="book-details">{content}</div>;
};

export default BookDetails;
