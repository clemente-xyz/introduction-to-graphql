const { Products } = require("../../collections");

function getProducts() {
  return Products;
}

const resolvers = {
  Query: {
    getProducts
  }
};

module.exports = resolvers;
