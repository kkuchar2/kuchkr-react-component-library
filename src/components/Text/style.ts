import styled from "styled-components";
import { styledTextDefaultProps, StyledTextProps } from "./Text.types";
import { conditionalProp, themeProp } from "../../util/StyledPropAccessor";

export const StyledText = styled.div<StyledTextProps>`
  font-family: ${themeProp('fontFamily', 'inherit')};
  color: ${conditionalProp(p => p.disabled, 'disabledTextColor', 'textColor')};
  line-height: ${themeProp('lineHeight', 'inherit')};
  font-size: ${themeProp('fontSize')};
  font-weight: ${themeProp('fontWeight', 'normal')};
  margin: ${themeProp('margin', '0 0 0 0')};
  text-align: ${themeProp('textAlign', 'left')};
`

StyledText.defaultProps = styledTextDefaultProps;