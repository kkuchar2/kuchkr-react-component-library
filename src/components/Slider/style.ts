import styled from "styled-components";
import {StyledCustomRailProps, styledSliderDefaultProps, StyledSliderProps} from "./Slider.types";
import {CSSProperties} from "react";
import {Dictionary} from "../../util/BaseTypes.types";

export const StyledSlider = styled.div<StyledSliderProps>`
  position: relative;
  width: ${props => props.theme.width ? props.theme.width : "200px"};
  margin: ${props => props.theme.margin ? props.theme.margin : "0 0 0 0"};
`

export const StyledCustomTrack = styled.div`
  width: 100%;
  height: ${props => `${props.theme.height}px`};
  border-radius: 100px;
  background: ${props => props.theme.trackColor};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
`;

export const StyledCustomRail = styled.div<StyledCustomRailProps>`
  width: ${props => `${props.width}%`};
  height: 80px;
  background: ${props => props.color};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const leftCustomMarkStyle = (theme: Dictionary<any>): CSSProperties => {
    return {
        position: 'absolute',
        top: theme.modernMinMarkLabelTopMargin,
        left: theme.modernMinMarkLabelRightMargin,
        color: theme.markLabelFontColor,
        zIndex: 2,
        fontFamily: 'inherit',
        fontSize: theme.modernMarkLabelFontSize,
        height: theme.height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export const rightCustomMarkStyle = (theme: Dictionary<any>): CSSProperties => {
    return {
        position: 'absolute',
        top: theme.modernMaxMarkLabelTopMargin,
        right: theme.modernMaxMarkLabelRightMargin,
        color: theme.markLabelFontColor,
        zIndex: 2,
        fontFamily: 'inherit',
        fontSize: theme.modernMarkLabelFontSize,
        height: theme.height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export const baseStyle = (theme, customRail = false) => {
    return {
        root: {
            zIndex: 2,
            color: theme.fillProgressColor,
            height: theme.height,
            padding: "0"
        },
        thumb: {
            height: theme.thumbSize,
            width: theme.thumbSize,
            backgroundColor: theme.thumbColor,
            marginTop: theme.thumbMargin.marginTop,
            marginRight: theme.thumbMargin.marginRight,
            marginBottom: theme.thumbMargin.marginBottom,
            marginLeft: theme.thumbMargin.marginLeft,
            '&:focus, &:hover, &$active': {
                boxShadow: 'unset',
            },
        },
        active: {},
        valueLabel: {
            left: theme.valueLabelPositionLeft,
            top: -25,
            "& *": {
                padding: 4,
                background: theme.valueLabelBackground,
                borderRadius: 6,
                height: 22,
                transform: 'unset',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2em',
                color: theme.valueLabelFontColor,
                minWidth: 40
            }
        },
        track: {
            width: `${theme.width + 100}px !important`,
            height: theme.trackHeight,
            backgroundColor: customRail ? "transparent" : theme.trackColor
        },
        rail: {
            height: theme.railHeight,
            backgroundColor: customRail ? "transparent" : theme.railColor
        },
        mark: {
            backgroundColor: theme.markColor,
            height: theme.markSize,
            width: theme.markSize,
            borderRadius: 10,
            marginTop: theme.markMargin.marginTop,
            marginRight: theme.markMargin.marginRight,
            marginBottom: theme.markMargin.marginBottom,
            marginLeft: theme.markMargin.marginLeft
        },
        markLabel: {
            marginTop: 10,
            color: theme.markLabelFontColor,
        },
        markLabelActive: {
            marginTop: 10,
            color: theme.markLabelActiveFontColor,
            fontWeight: theme.markLabelActiveFontWeight
        },
        markActive: {
            backgroundColor: theme.markActiveColor,
            height: theme.markActiveSize,
            width: theme.markActiveSize,
            borderRadius: 10,
            marginTop: theme.markMargin.marginTop,
            marginRight: theme.markMargin.marginRight,
            marginBottom: theme.markMargin.marginBottom,
            marginLeft: theme.markMargin.marginLeft,
            opacity: 1
        }
    }
}

StyledSlider.defaultProps = styledSliderDefaultProps;