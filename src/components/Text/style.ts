import styled from "styled-components";
import { styledTextDefaultProps, StyledTextProps } from "./Text.types";

export const StyledText = styled.div<StyledTextProps>`
  font-family: ${props => props.theme.fontFamily? props.theme.fontFamily : 'inherit'};
  color: ${props => props.disabled ? props.theme.disabledTextColor : props.theme.textColor};
  line-height: ${props => props.theme.lineHeight};
  font-size: ${props => props.theme.fontSize};
  font-weight: ${props => props.theme.fontWeight ? props.theme.fontWeight : 'normal'};
  margin: ${props => props.theme.margin ? props.theme.margin : "0 0 0 0"};
`

StyledText.defaultProps = styledTextDefaultProps;