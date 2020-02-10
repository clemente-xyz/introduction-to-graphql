import React from "react";

import { MainContainer } from "./styles";

function Button({ onClick, children, textColor, backgroundColor, hoverColor }) {
  return (
    <MainContainer
      onClick={onClick}
      textColor={textColor}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
    >
      {children}
    </MainContainer>
  );
}

export default Button;
