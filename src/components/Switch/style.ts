import styled from "styled-components";
import {StyledSwitchProps} from "./Switch.types";
import {BaseComponentProps} from "../../hoc";
import {motion, MotionProps} from "framer-motion";

export const StyledSwitch = styled(motion.div)<StyledSwitchProps & MotionProps & BaseComponentProps>`
  width: ${props => `${props.theme.trackWidth}px`};
  height: ${props => `${props.theme.trackHeight}px`};
  background-color: ${props => {
    return props.disabled ? props.theme.trackColorDisabledOff : props.theme.trackColorOff;
  }};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${props => `${props.theme.trackBorderRadius}px`};
  padding: ${props => `${props.theme.trackPadding}px`};
  cursor: ${props => props.theme.cursor};
  margin: ${props => props.theme.margin};

  &[data-isOn="true"] {
    justify-content: flex-end;
    background-color: ${props => {
      return props.disabled ? props.theme.trackColorDisabledOn : props.theme.trackColorOn;
    }};
`

export const StyledHandle = styled(motion.div)<StyledSwitchProps & MotionProps & BaseComponentProps>`
  width: ${props => `${props.theme.knobWidth}px`};
  height: ${props => `${props.theme.knobHeight}px`};
  background-color: ${props => {
    return props.disabled ? props.theme.knobColorDisabledOff : props.theme.knobColorOff;
  }};
  border-radius: ${props => `${props.theme.knobBorderRadius}px`};
  margin-left: ${props => `${-props.theme.knobOffset}px`};
  margin-right: ${props => `${-props.theme.knobOffset}px`};

  &[data-isOn="true"] {
    background-color: ${props => {
      return props.disabled ? props.theme.knobColorDisabledOn : props.theme.knobColorOn;
    }};
  }
`