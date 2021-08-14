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
  margin: ${props => props.theme.margin ? props.theme.margin : "0 0 0 0"};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
`

StyledSelect.defaultProps = styledSelectDefaultProps;

export const StyledSelectButton = styled.div<StyledSelectButtonProps>`
  border-radius: ${props => props.theme.borderRadius};
  margin: 0;
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  display: flex;
  font-family: ${props => props.theme.fontFamily? props.theme.fontFamily : 'inherit'};
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
    z-index: 1000;
    width: ${props => props.theme.width};
    box-shadow: ${props => props.theme.boxShadow ? props.theme.boxShadow : "1px 2px 20px 0px rgb(0 0 0 / 7%)"}
`

export const StyledEmptyDataInfo = styled.div<StyledEmptyDataInfoProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fontFamily? props.theme.fontFamily : 'inherit'};
  color: ${props => props.theme.disabledTextColor};
  height: 100%;
  width: 100%;
  background: ${props => props.theme.listStyle.background};
  border-radius: 10px;
`

StyledEmptyDataInfo.defaultProps = styledEmptyDataInfoDefaultProps;