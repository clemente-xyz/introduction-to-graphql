const { gql } = "apollo-server";

const schema = gql`
  type Product {
    _id: ID!
    name: String!
    price: Int
  }

  type Query {
    getProducts: [Product!]!
  }
`;

module.exports = schema;
