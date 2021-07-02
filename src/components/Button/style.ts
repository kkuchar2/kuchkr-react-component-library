import styled from "styled-components";
import { styledButtonDefaultProps, StyledButtonProps } from "./Button.types";

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${props => props.theme.width ? props.theme.width : "150px"};
  height: ${props => props.theme.height ? props.theme.height : "40px"};
  border: ${props => props.theme.border};
  border-radius: 8px;
  background: ${props => props.disabled ? props.theme.disabledBackground : props.theme.background};
  overflow: hidden;
  
  &:hover {
    cursor: ${props => {
    if (props.disabled) {
        return "unset";
    }
    return "pointer";
}};

    background: ${props => props.disabled ? props.theme.disabledBackground : props.theme.hoverBackground};
  }
`

StyledButton.defaultProps = styledButtonDefaultProps;