const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");

const app = express();

// CORS Middleware
app.use(cors());

// GraphQL Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
