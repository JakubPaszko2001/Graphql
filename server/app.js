const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross-origin request
app.use(cors());

// connect to database
mongoose.connect(
  "mongodb+srv://Pacho38:zaq12WSX@cluster0.earq5gy.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening");
});
