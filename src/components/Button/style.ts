import styled from "styled-components";
import { styledButtonDefaultProps, StyledButtonProps } from "./Button.types";

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${props => props.theme.width ? props.theme.width : "150px"};
  height: ${props => props.theme.height ? props.theme.height : "40px"};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.disabled ? props.theme.disabledBackground : props.theme.background};
  overflow: hidden;
  display: ${props => props.theme.display ? props.theme.display : 'flex'};
  align-items: ${props => props.theme.alignItems ? props.theme.alignItems : 'center'};
  justify-content: ${props => props.theme.justifyContent ? props.theme.justifyContent : 'center'};
  margin: ${props => props.theme.margin ? props.theme.margin : "0 0 0 0"};
  font-family: inherit;
  
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