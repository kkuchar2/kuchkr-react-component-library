import styled from "styled-components";
import { styledListItemDefaultProps, StyledListItemProps } from "./ListItem.types";

export const StyledListItem = styled.div<StyledListItemProps>`
  font-family: ${props => props.theme.fontFamily? props.theme.fontFamily : 'inherit'};
  color: ${props => props.disabled ? props.theme.disabledTextColor : props.theme.textColor};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${props => props.disabled ? props.theme.disabledBackground : props.theme.background};
  padding-left: ${props => props.theme.paddingLeft};
  padding-right: ${props => props.theme.paddingRight};
  
  &:hover {
    color: ${props => props.disabled ? props.theme.disabledTextColor : props.theme.textColorHover};
    background: ${props => props.theme.backgroundHover};
    cursor: ${props => props.disabled ? "unset" : "pointer"};
  }
`

StyledListItem.defaultProps = styledListItemDefaultProps;