import React, { Component } from "react";
import styled from "styled-components";

import { Heading, Button } from "../../components";
import DigitalClock from "./digital-clock";
import BinaryClock from "./binary-clock";

const StyledContainer = styled.div`
  ${({ theme }) => theme.media("tablet")} {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
  }
  ${({ theme }) => theme.media("desktop-small")} {
    width: 70%;
  }
  ${({ theme }) => theme.media("super-large")} {
    max-width: 1024px;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ thin }) => (thin ? "flex-basis: 1rem;" : null)}
`;
const StyledLabel = styled(Heading)`
  font-size: 1em;
  margin-bottom: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.1s;

  flex-basis: ${({ orientation }) =>
    orientation === "horizontal" ? "calc(100% / 3)" : "100%"};

  ${({ orientation }) =>
    orientation === "vertical"
      ? `display: flex;
         align-items: center;`
      : null}

  ${({ theme }) => theme.media("tablet")} {
    font-size: 1.5em;
  }
  ${({ theme }) => theme.media("desktop-large")} {
    font-size: 2em;
  }
`;
const StyledBinaryClock = styled(BinaryClock)`
  flex-grow: 1;
`;
class Clock extends Component {
  state = {
    hours: null,
    minutes: null,
    seconds: null,

    labelsVisible: false
  };

  refreshTime = () => {
    const time = new Date();
    this.setState(() => ({
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    }));
  };

  componentDidMount = () => {
    this.refreshTime();
    this.interval = setInterval(this.refreshTime, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  handleButtonClick = () => {
    this.setState(prevState => ({ labelsVisible: !prevState.labelsVisible }));
  };

  renderLabels = (orientation, ...contents) => {
    const labels = [];
    for (let i = 0; i < contents.length; i++) {
      labels.push(
        <StyledLabel
          key={i}
          orientation={orientation}
          visible={this.state.labelsVisible}
        >
          {contents[i]}
        </StyledLabel>
      );
    }
    return labels;
  };
  render() {
    const { hours, minutes, seconds, labelsVisible } = this.state;
    const { handleButtonClick, renderLabels } = this;
    return (
      <StyledContainer>
        <StyledWrapper>
          {renderLabels("horizontal", "Hours", "Minutes", "Seconds")}
        </StyledWrapper>
        <StyledWrapper>
          <StyledBinaryClock
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
          <StyledWrapper thin>
            {renderLabels("vertical", "8", "4", "2", "1")}
          </StyledWrapper>
        </StyledWrapper>

        <DigitalClock hours={hours} minutes={minutes} seconds={seconds} />
        <Button onClick={handleButtonClick}>
          {labelsVisible ? "Hide" : "Show"} label
        </Button>
      </StyledContainer>
    );
  }
}

export default Clock;
