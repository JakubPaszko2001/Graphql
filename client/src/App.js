import "./App.css";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AddAuthor from "./components/AddAuthor";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BookList />
        <AddBook />
        <AddAuthor />
      </ApolloProvider>
    </div>
  );
}

export default App;
