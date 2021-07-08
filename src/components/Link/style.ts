import styled from "styled-components";
import { styledLinkDefaultProps, StyledLinkProps } from "./Link.types";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)<StyledLinkProps>`
  width: ${props => props.theme.width ? props.theme.width : "150px"};
  height: ${props => props.theme.height ? props.theme.height : "40px"};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.disabled ? props.theme.disabledBackground : props.theme.background};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  color: ${props => props.disabled ? props.theme.disabledTextColor : props.theme.textColor};
  
  &:visited {
    color: ${props => props.disabled ? props.theme.disabledTextColor : props.theme.visitedTextColor};
  }
  
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

StyledLink.defaultProps = styledLinkDefaultProps;