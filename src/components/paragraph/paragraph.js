import React from "react";
import styled from "styled-components";

const StyledPara = styled.p`
  ${({ theme }) => theme.font("ubuntu")}
  color: ${({ theme }) => theme.colors.lightgrey};
  line-height: 1.75em;
`;

const Paragraph = ({ children, className }) => {
  return <StyledPara className={className}>{children}</StyledPara>;
};

export default Paragraph;
