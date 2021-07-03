import styled from "styled-components";
import { styledTextDefaultProps, StyledTextProps } from "./Text.types";

export const StyledText = styled.div<StyledTextProps>`
  font-family: $open-sans;
  color: ${props => props.disabled ? props.theme.disabledTextColor : props.theme.textColor};
  margin-bottom: ${props => props.theme.marginBottom};
  line-height: ${props => props.theme.lineHeight};
`

StyledText.defaultProps = styledTextDefaultProps;