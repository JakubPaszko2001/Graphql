import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const AddBook = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const { loading, data } = useQuery(getAuthorsQuery);
  const [addBookMut] = useMutation(addBookMutation);

  const displayAuthors = (loading, data) => {
    if (loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBookMut({
      variables: {
        name: name,
        genre: genre,
        authorId: authorId,
      },
      refetchQueries: [getBooksQuery],
    });
  };

  return (
    <div className="booksContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Book Name..."
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Genre..."
            required
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <select
            required
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
          >
            <option>Select author</option>
            {displayAuthors(loading, data)}
          </select>
        </div>
        <button>AddBook</button>
      </form>
    </div>
  );
};

export default AddBook;
