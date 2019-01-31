import React, { Component } from "react";
import styled from "styled-components";

const StyledClockWrapper = styled.div`
  display: flex;
`;

const StyledSection = styled.div`
  flex-basis: calc(100% / 6);
  display: flex;
  flex-direction: column-reverse;
`;

const StyledLightWrapper = styled.div`
  display: grid;
  place-items: center;
`;
const StyledLight = styled.div`
  margin: 0.5rem;
  --size: 28px;
  width: var(--size);
  height: var(--size);
  background-color: ${({
    enabled,
    theme: {
      colors: { lightblue, darkgrey }
    }
  }) => (enabled ? lightblue : darkgrey)};

  ${({ theme }) => theme.media("landscape")} {
    --size: 48px;
  }
  ${({ theme }) => theme.media("tablet")} {
    --size: 64px;
    margin: 1rem;
  }
  ${({ theme }) => theme.media("desktop-large")} {
    --size: 64px;
    margin: 0.75rem;
  }
  ${({ theme }) => theme.media("super-large")} {
    --size: 104px;
    margin: 1rem;
  }
`;
class BinaryClock extends Component {
  state = {};

  setBinaryValues = () => {
    const { hours, minutes, seconds } = this.props;
    const clockParameters = [hours, minutes, seconds];

    const binaryValues = [];
    clockParameters.forEach(param => {
      param = String(param);

      binaryValues.push(Number(param.length === 1 ? 0 : param[0]).toString(2));

      binaryValues.push(
        Number(param.length === 1 ? param[0] : param[1]).toString(2)
      );
    });
    const reversedBinaryClockValues = binaryValues.map(string => {
      const reversedString = [];
      [...string].forEach(letter => reversedString.unshift(letter));
      return reversedString.reduce((acc, cur) => acc + cur, "");
    });
    return reversedBinaryClockValues;
  };

  createGrid = (rowsAmount, columnsAmount) => {
    const binaryClockValues = this.setBinaryValues();
    const columns = [];
    for (let i = 0; i < columnsAmount; i++) {
      const lights = [];
      for (let j = 0; j < rowsAmount; j++) {
        // This condition prevents to render lights that will be always disabled.
        // (column 0: last two children, column 2 and 4: last child)
        if (!((!(i % 2) && j === 3) || (i === 0 && j === 2))) {
          lights.push(
            <StyledLightWrapper key={j}>
              <StyledLight
                enabled={binaryClockValues[i][j] === "1" ? true : false}
              />
            </StyledLightWrapper>
          );
        }
      }
      columns.push(<StyledSection key={i}>{lights}</StyledSection>);
    }
    return columns;
  };
  render() {
    return (
      <StyledClockWrapper className={this.props.className}>
        {this.createGrid(4, 6)}
      </StyledClockWrapper>
    );
  }
}

export default BinaryClock;
