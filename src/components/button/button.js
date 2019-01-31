import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  line-height: 2em;
  border-radius: calc(1em + 4px);
  outline: none;
  margin: 1rem auto;
  padding: 0 1rem;
  border: 2px solid ${({ theme }) => theme.colors.lightblue};
  background-color: ${({ theme }) => theme.colors.darkblue};
  color: ${({ theme }) => theme.colors.lightblue};
  min-width: 160px;

  ${({ theme }) => theme.media("desktop-small")} {
    cursor: pointer;
  }
`;

const Button = ({ children, className, onClick }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
