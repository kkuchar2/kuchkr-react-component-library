import styled from "styled-components";
import { motion } from "framer-motion";
import {
    styledArrowIconDefaultProps,
    StyledArrowIconProps,
    styledEmptyDataInfoDefaultProps,
    StyledEmptyDataInfoProps,
    styledSelectButtonDefaultProps,
    StyledSelectButtonProps,
    styledSelectDefaultProps,
    styledSelectedValueTextDefaultProps,
    StyledSelectedValueTextProps,
    StyledSelectProps
} from "./Select.types";

export const StyledSelect = styled(motion.div)<StyledSelectProps>`
  @media (max-height: 400px) {
    width: 100%;
  }

  width: ${props => props.theme.width};
  margin: 0;
  border: ${props => props.theme.border};
`

StyledSelect.defaultProps = styledSelectDefaultProps;

export const StyledSelectButton = styled.div<StyledSelectButtonProps>`
  border-radius: ${props => props.theme.borderRadius};
  margin: 0;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  font-family: 'Arial';
  background: ${props => {
    if (props.disabled) {
      return props.theme.disabledBackgroundColor;
    }

    return props.theme.backgroundColor
  }};

  &:hover {
    cursor: pointer;
    background: ${props => {
      if (props.disabled) {
        return props.theme.disabledBackgroundColor;
      }
      return props.theme.hoverBackgroundColor
    }};
  }
`

StyledSelectButton.defaultProps = styledSelectButtonDefaultProps;

export const StyledArrowIcon = styled.div<StyledArrowIconProps>`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => {
    if (props.disabled) {
      return props.theme.disabledIconColor;
    }
    return props.theme.iconColor
  }};
`

StyledArrowIcon.defaultProps = styledArrowIconDefaultProps;

export const StyledSelectedValueText = styled.div<StyledSelectedValueTextProps>`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  color: ${props => props.theme.textColor};

  span {
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    left: 20px;
  }
`

StyledSelectedValueText.defaultProps = styledSelectedValueTextDefaultProps;

export const AnimatedStyledList = styled(motion.div)`
    margin-top: 10px;
    position: absolute;
    width: ${props => props.theme.width};
`

export const StyledEmptyDataInfo = styled.div<StyledEmptyDataInfoProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial';
  color: ${props => props.theme.disabledTextColor};
  height: 100%;
  width: 100%;
  background: ${props => props.theme.listStyle.background};
  border-radius: 10px;
`

StyledEmptyDataInfo.defaultProps = styledEmptyDataInfoDefaultProps;