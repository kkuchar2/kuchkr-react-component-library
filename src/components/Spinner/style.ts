import styled from "styled-components";
import { defaultStyledSpinnerProps, StyledSpinnerProps } from "./Spinner.types";

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .text {
    margin-right: 8px;
  }

  span {
    span:first-child {
      background: #00f7ff;
      opacity: 1;
    }

    span:nth-child(2) {
      border-color: #6a6a6a;
      opacity: 0.2;
    }
  }
`

StyledSpinner.defaultProps = defaultStyledSpinnerProps;