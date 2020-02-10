import React from "react";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

import apolloClient from "../apollo";
import colors from "./utils/theme/colors";
import { Button } from "./components";

import {
  MainContainer,
  Header,
  HeaderTitle,
  HeaderParagraph,
  ProductsContainer,
  ProductsTitle,
  ProductList,
  Product
} from "./styles";
import { gql } from "apollo-boost";

const GET_PRODUCTS = gql`
  query GET_PRODUCTS_query {
    getProducts {
      _id
      price
      name
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  console.log({ data });
  return (
    <MainContainer>
      <Header>
        <HeaderTitle>Introduction to Apollo</HeaderTitle>
        <HeaderParagraph>BeerJS, Santiago 2020</HeaderParagraph>
      </Header>
      <ProductsContainer>
        <ProductsTitle>My Products</ProductsTitle>
        <Button
          onClick={() => console.log("new product...")}
          backgroundColor={colors.BLUE}
          hoverColor={colors.DARK_BLUE}
          textColor={colors.WHITE}
        >
          New product
        </Button>
        {!loading && (
          <ProductList>
            {data.getProducts.map(product => {
              return <Product key={product._id}>{product.name}</Product>;
            })}
          </ProductList>
        )}
      </ProductsContainer>
    </MainContainer>
  );
}

function WrappedApp() {
  return (
    <ApolloProvider client={apolloClient}>
      <App></App>
    </ApolloProvider>
  );
}

export default WrappedApp;
