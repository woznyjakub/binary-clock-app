import React, { Component } from "react";
import styled from "styled-components";
import { Paragraph } from "../../components";

import { Button } from "../../components";
const StyledWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const StyledParagraph = styled(Paragraph)`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.4s;
`;

class Description extends Component {
  state = {
    descriptionVisible: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      descriptionVisible: !prevState.descriptionVisible
    }));
  };
  render() {
    const { descriptionVisible } = this.state;
    const { handleClick } = this;
    return (
      <StyledWrapper>
        <Button onClick={handleClick}>
          {descriptionVisible ? "Hide" : "What is it?"}
        </Button>
        <StyledParagraph visible={descriptionVisible}>
          A binary clock is a clock that displays the time of day in a binary
          format. Originally, such clocks showed each decimal digit of
          sexagesimal time as a binary value, but presently binary clocks also
          exist which display hours, minutes, and seconds as binary numbers.
          Most binary clocks are digital, although analog varieties exist. True
          binary clocks also exist, which indicate the time by successively
          halving the day, instead of using hours, minutes, or seconds.
        </StyledParagraph>
      </StyledWrapper>
    );
  }
}

export default Description;
