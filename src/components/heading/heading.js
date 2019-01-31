import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  font-weight: 700;
`;

const Heading = ({ className, children }) => {
  return <StyledHeading className={className}>{children}</StyledHeading>;
};

export default Heading;
