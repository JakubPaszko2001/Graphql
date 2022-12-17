import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { addAuthorMutation, getAuthorsQuery } from "../queries/queries";

const AddAuthor = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [addAuthorMut] = useMutation(addAuthorMutation);

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthorMut({
      variables: {
        name: name,
        age: Number(age),
      },
      refetchQueries: [getAuthorsQuery],
    });
  };

  return (
    <div className="booksContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            required
            placeholder="Author name..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            required
            placeholder="Age..."
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button>AddAuthor</button>
      </form>
    </div>
  );
};

export default AddAuthor;
