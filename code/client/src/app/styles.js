import styled from "styled-components";

import backgroundImage from "../assets/background-img.png";
import colors from "./utils/theme/colors";

const MainContainer = styled.div`
  /* padding: 50px; */
`;

const Header = styled.header`
  height: 40vh;
  background-color: black;
  color: white;
  background: url("${backgroundImage}") 
    no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeaderTitle = styled.h1`
  font-size: 40px;
`;

const HeaderParagraph = styled.h3``;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ProductsTitle = styled.h2``;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 50px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${colors.GRAY};
`;

export {
  MainContainer,
  Header,
  HeaderTitle,
  HeaderParagraph,
  ProductsContainer,
  ProductsTitle,
  ProductList,
  Product
};
