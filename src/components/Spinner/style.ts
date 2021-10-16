import styled from "styled-components";
import { defaultStyledSpinnerProps, StyledSpinnerProps } from "./Spinner.types";

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.margin ? props.theme.margin : "0 0 0 0"};
  
  .text {
    margin-right: 8px;
  }
`

StyledSpinner.defaultProps = defaultStyledSpinnerProps;