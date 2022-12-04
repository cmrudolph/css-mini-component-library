/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const Wrapper = styled.div`
  width: 370px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Filling = styled.div`
  background: ${COLORS.primary};
  height: var(--height);
  width: ${(p) => p.value + "%"};
`;

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  return (
    <Wrapper
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    >
      <BarWrapper>
        <VisuallyHidden>{value}%</VisuallyHidden>
        <Filling style={{ "--height": styles.height + "px" }} value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
