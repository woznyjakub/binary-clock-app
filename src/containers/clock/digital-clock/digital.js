import React from "react";
import styled from "styled-components";

const StyledClock = styled.span`
  display: block;
  text-align: center;
  font-size: 3.5em;
  margin: 1rem 0;
  line-height: 1.5em;
`;

const DigitalClock = ({ hours, minutes, seconds }) => {
  return (
    <StyledClock>
      {`${hours > 9 ? hours : `0${hours}`}
        : ${minutes > 9 ? minutes : `0${minutes}`}
        : ${seconds > 9 ? seconds : `0${seconds}`}
        `}
    </StyledClock>
  );
};

export default DigitalClock;
