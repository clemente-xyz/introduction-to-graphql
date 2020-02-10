const { ApolloServer, gql } = require("apollo-server");
const Products = require("./collections/Product");

function getProducts() {
  return Products;
}

const resolvers = {
  Query: {
    getProducts
  }
};

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
    price: Int
  }

  type Query {
    getProducts: [Product!]!
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
