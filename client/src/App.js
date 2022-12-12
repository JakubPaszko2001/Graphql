import "./App.css";
import BookList from "./components/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BookList />
      </ApolloProvider>
    </div>
  );
}

export default App;
